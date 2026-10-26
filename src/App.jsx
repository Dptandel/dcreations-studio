import { useState } from "react";
import "./App.css";

const PROJECTS = [
  {
    id: 1,
    title: "Vanguard Brand Identity",
    category: "Branding",
    tag: "STUDY / 01",
    desc: "Comprehensive brand strategy, logo systems, and typography guidelines.",
    client: "FinTech Enterprise",
    timeline: "3 Weeks",
    tools: "Illustrator, Photoshop",
    typeClass: "bg-brand",
    accent: "DC®",
  },
  {
    id: 2,
    title: "The Food Spot Campaign",
    category: "Social Media",
    tag: "CAMPAIGN / 02",
    desc: "High-contrast promotional assets tailored for Instagram engagement.",
    client: "Artisan Burger Bar",
    timeline: "1 Week",
    tools: "Photoshop, Canva Pro",
    typeClass: "bg-social",
    accent: "GOOD FOOD. GOOD MOOD.",
  },
  {
    id: 3,
    title: "Make Your Mark Poster",
    category: "Typography",
    tag: "EDITORIAL / 03",
    desc: "Modern brutalist typography exploration crafted for design exhibitions.",
    client: "Design Collective",
    timeline: "4 Days",
    tools: "Adobe InDesign, Illustrator",
    typeClass: "bg-poster",
    accent: "MAKE YOUR MARK.",
  },
  {
    id: 4,
    title: "After Hours Live Session",
    category: "Event Creative",
    tag: "EVENT / 04",
    desc: "Vibrant promotional collaterals, digital banners, and tickets.",
    client: "Nightlife & Music Festival",
    timeline: "2 Weeks",
    tools: "Photoshop, After Effects",
    typeClass: "bg-event",
    accent: "AFTER HOURS",
  },
  {
    id: 5,
    title: "Brew & Beyond Packaging",
    category: "Branding",
    tag: "PACKAGING / 05",
    desc: "Minimalist coffee canister labels and merchandise presentation.",
    client: "Specialty Roastery",
    timeline: "2.5 Weeks",
    tools: "Illustrator, Dimension 3D",
    typeClass: "bg-pack",
    accent: "BREW",
  },
  {
    id: 6,
    title: "Aura Skincare Direction",
    category: "Digital Design",
    tag: "CAMPAIGN / 06",
    desc: "Warm editorial aesthetic for social product launches and banner ads.",
    client: "Organic Skincare Co.",
    timeline: "10 Days",
    tools: "Photoshop, Lightroom",
    typeClass: "bg-vector",
    accent: "LESS, BUT BETTER.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Estimator Form States
  const [serviceType, setServiceType] = useState("Brand Identity");
  const [timelineSpeed, setTimelineSpeed] = useState("Standard (1-2 wks)");
  const [clientMessage, setClientMessage] = useState("");

  const closeMenu = () => setMenuOpen(false);
  const currentYear = new Date().getFullYear();

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const handleSendInquiry = () => {
    const text = encodeURIComponent(
      `Hi Dharmin! I'm reaching out regarding a project with Dcreations Studio.\n\n` +
        `Service: ${serviceType}\n` +
        `Timeline: ${timelineSpeed}\n` +
        `Project Notes: ${clientMessage || "Let's discuss requirements."}`,
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Navigation */}
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Dcreations Studio Home">
          <span className="monogram">DS</span>
          <span>
            DCREATIONS<small>STUDIO</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#work" onClick={closeMenu}>
            Selected Work
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Start a Project ↗
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="line"></span> Visual Identity & Graphic Designer
            </div>
            <h1>
              Ideas made
              <br />
              <em>impossible</em>
              <br />
              to ignore.
            </h1>
            <p className="intro">
              I'm <strong>Dharmin Tandel</strong>, founder of{" "}
              <strong>Dcreations Studio</strong>. I design premium brand
              identities, high-converting social visuals, and bespoke print
              media that demand attention and drive real business growth.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#work">
                View Portfolio <span>↓</span>
              </a>
              <a
                className="text-link"
                href="https://instagram.com/dcreations_studio"
                target="_blank"
                rel="noreferrer"
              >
                Instagram (@dcreations_studio) ↗
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="hero-mark">
              D<span>S</span>
            </div>
            <div className="art-caption">
              GOOD DESIGN
              <em>COMMANDS RESPECT.</em>
              BILIMORA · GLOBAL
            </div>
          </div>
        </section>

        {/* Credibility Metrics Bar */}
        <div className="metrics-strip">
          <div className="metric-item">
            <div className="metric-number">40+</div>
            <div className="metric-label">Projects Completed</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">100%</div>
            <div className="metric-label">Client Satisfaction</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">3+</div>
            <div className="metric-label">Years of Craft</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">24h</div>
            <div className="metric-label">Quick Response Time</div>
          </div>
        </div>

        {/* Selected Work */}
        <section className="section" id="work">
          <div className="section-label">01 / Curated Portfolio</div>
          <h2 className="section-title">
            Featured <em>Projects.</em>
          </h2>

          <div className="filter-tabs">
            {[
              "All",
              "Branding",
              "Social Media",
              "Typography",
              "Event Creative",
              "Digital Design",
            ].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {filteredProjects.map((p) => (
              <article
                key={p.id}
                className="project-card"
                onClick={() => setSelectedProject(p)}
              >
                <div className={`project-thumb ${p.typeClass}`}>
                  <span className="thumb-tag">{p.tag}</span>
                  <div className="thumb-graphic">{p.accent}</div>
                  <span className="thumb-action">View Case Study ↗</span>
                </div>
                <div className="project-details">
                  <span className="project-category">{p.category}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <div className="section-label">02 / What I Do</div>
          <h2 className="section-title">
            Specialized <em>Capabilities.</em>
          </h2>
          <div className="service-grid">
            <div className="service-card">
              <span className="service-num">01</span>
              <h3>Brand Identity</h3>
              <p>
                Full logo marks, typography scales, color psychology, and strict
                brand guideline decks.
              </p>
            </div>
            <div className="service-card">
              <span className="service-num">02</span>
              <h3>Social Media Graphics</h3>
              <p>
                Scroll-stopping carousels, promotional ads, and aesthetic feed
                templates optimized for conversion.
              </p>
            </div>
            <div className="service-card">
              <span className="service-num">03</span>
              <h3>Poster & Print Media</h3>
              <p>
                Print-ready CMYK deliverables: event posters, brochures, menus,
                business stationery, and packaging.
              </p>
            </div>
            <div className="service-card">
              <span className="service-num">04</span>
              <h3>Marketing Vectors</h3>
              <p>
                Custom vector graphics, icon sets, launch banners, and digital
                collateral for websites and apps.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section" id="process">
          <div className="section-label">03 / Proven Workflow</div>
          <h2 className="section-title">
            From brief to <em>perfection.</em>
          </h2>
          <div className="process-grid">
            <div className="process-step">
              <span className="step-num">STEP 01</span>
              <h4>Discovery & Strategy</h4>
              <p>
                We analyze your brand goals, study your industry competitors,
                and set clear visual targets.
              </p>
            </div>
            <div className="process-step">
              <span className="step-num">STEP 02</span>
              <h4>Concept Generation</h4>
              <p>
                Exploring distinct design directions, mood boards, color
                palettes, and typographic pairings.
              </p>
            </div>
            <div className="process-step">
              <span className="step-num">STEP 03</span>
              <h4>Refinement & Polish</h4>
              <p>
                Fine-tuning the selected concept through structured feedback
                rounds until it hits 100%.
              </p>
            </div>
            <div className="process-step">
              <span className="step-num">STEP 04</span>
              <h4>Asset Delivery</h4>
              <p>
                Delivering production-ready vector formats (.AI, .EPS, .SVG,
                .PNG, .PDF) ready for web and print.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Inquiry Estimator */}
        <section className="section" id="contact">
          <div className="contact-container">
            <div>
              <div className="section-label">04 / Get In Touch</div>
              <h2 className="section-title">
                Ready to elevate your <em>brand?</em>
              </h2>
              <p className="intro" style={{ marginBottom: "28px" }}>
                Whether you need a full brand overhaul or high-performing
                creative assets for an upcoming launch, let's build something
                unforgettable together.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "14px" }}>
                <strong>Direct Email:</strong> dcreations.studio@gmail.com
                <br />
                <strong>Direct DM:</strong> @dcreations_studio
              </p>
            </div>

            <div className="estimator-box">
              <h3>Quick Project Inquiry</h3>
              <div className="form-group">
                <label>Service Needed</label>
                <div className="pill-group">
                  {[
                    "Brand Identity",
                    "Social Content",
                    "Poster / Print",
                    "Packaging",
                  ].map((type) => (
                    <div
                      key={type}
                      className={`pill ${serviceType === type ? "selected" : ""}`}
                      onClick={() => setServiceType(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Expected Timeline</label>
                <div className="pill-group">
                  {["Rush (< 1 wk)", "Standard (1-2 wks)", "Flexible"].map(
                    (t) => (
                      <div
                        key={t}
                        className={`pill ${timelineSpeed === t ? "selected" : ""}`}
                        onClick={() => setTimelineSpeed(t)}
                      >
                        {t}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Project Details / Vision</label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder="Tell me a bit about your brand and what you are looking to build..."
                  value={clientMessage}
                  onChange={(e) => setClientMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                className="button-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={handleSendInquiry}
              >
                Send Inquiry via WhatsApp / Message ↗
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p>{selectedProject.desc}</p>
              <div className="modal-specs">
                <div>
                  <span>CLIENT</span>
                  <strong>{selectedProject.client}</strong>
                </div>
                <div>
                  <span>TIMELINE</span>
                  <strong>{selectedProject.timeline}</strong>
                </div>
                <div>
                  <span>TOOLS</span>
                  <strong>{selectedProject.tools}</strong>
                </div>
              </div>
              <button
                className="button-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => {
                  setSelectedProject(null);
                  window.location.href = "#contact";
                }}
              >
                Inquire About Similar Project ↗
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <span>© {currentYear} Dcreations Studio. All rights reserved.</span>
        <span>Designed & Developed by Dharmin Tandel</span>
      </footer>
    </>
  );
}
