import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Linkedin, Mail, Menu, X } from "lucide-react";
import "@/App.css";

const profileImage = "https://images.unsplash.com/photo-1675111283112-b5b090fa3069?auto=format&fit=crop&w=1000&q=85";
const projects = [
  { number: "01", title: "Lumen House", type: "Brand identity · Digital", year: "2024", image: "https://images.unsplash.com/photo-1453586857165-eb78d44460ca?auto=format&fit=crop&w=1200&q=85", tone: "sand" },
  { number: "02", title: "Field Notes", type: "Editorial platform · Product", year: "2023", image: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?auto=format&fit=crop&w=1200&q=85", tone: "blue" },
  { number: "03", title: "Common Ground", type: "Campaign · Art direction", year: "2022", image: "https://images.unsplash.com/photo-1560131653-63257db002c8?auto=format&fit=crop&w=1200&q=85", tone: "rose" },
];

const experience = [
  { dates: "2022 — Present", role: "Independent Designer & Strategist", company: "Studio North", text: "Partnering with ambitious teams to turn complex ideas into identities, products, and experiences people remember." },
  { dates: "2019 — 2022", role: "Senior Product Designer", company: "Aster & Co.", text: "Led product direction across a growing digital portfolio, from first sketch to a system used by 40k+ people." },
  { dates: "2016 — 2019", role: "Designer", company: "Morrow Studio", text: "Built a foundation in brand, editorial, and digital design while collaborating with teams across culture and technology." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard?.writeText("hello@alexmorgan.design");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      window.location.href = "mailto:hello@alexmorgan.design";
    }
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header" data-testid="site-header">
        <a className="brand" href="#top" data-testid="brand-home">AM<span>.</span></a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} data-testid="main-navigation">
          <a href="#about" onClick={closeMenu} data-testid="nav-about">About</a>
          <a href="#experience" onClick={closeMenu} data-testid="nav-experience">Experience</a>
          <a href="#work" onClick={closeMenu} data-testid="nav-work">Selected work</a>
          <a href="#contact" onClick={closeMenu} data-testid="nav-contact">Contact</a>
        </nav>
        <a className="header-link" href="mailto:hello@alexmorgan.design" data-testid="header-email-link">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" data-testid="mobile-menu-button">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero wrap" id="top" data-testid="hero-section">
        <div className="hero-copy">
          <p className="eyebrow" data-testid="hero-eyebrow">Independent designer · New York / Worldwide</p>
          <h1 data-testid="hero-heading">Making space<br /><em>for better ideas.</em></h1>
          <p className="hero-intro" data-testid="hero-intro">I’m Alex Morgan — a multidisciplinary designer and strategist helping thoughtful people and ambitious brands find their clearest expression.</p>
          <a className="circle-link" href="#work" data-testid="hero-work-link">Explore<br />my work <ArrowUpRight size={18} /></a>
        </div>
        <div className="hero-visual" data-testid="hero-profile-visual">
          <div className="image-frame"><img src={profileImage} alt="Alex Morgan, designer" data-testid="profile-image" /><span className="image-caption">Portrait / 2024</span></div>
          <div className="orbit-note">Available<br />for select<br /><strong>2025</strong> projects</div>
        </div>
      </section>

      <section className="statement-band" data-testid="statement-section"><div className="wrap statement-inner"><span className="section-index">01 / 04</span><p>Good design is not decoration. It is the quiet confidence that makes an idea feel inevitable.</p><span className="scroll-mark">↓</span></div></section>

      <section className="wrap about-section" id="about" data-testid="about-section">
        <div className="section-heading"><span className="section-index">02 / About</span><h2>A practice built<br />on <em>curiosity.</em></h2></div>
        <div className="about-content"><p className="lead" data-testid="about-lead">I work at the intersection of strategy, identity, and digital craft. My role is to listen closely, ask better questions, and make the essential impossible to miss.</p><p className="body-copy">Over the last decade, I’ve helped early-stage founders, cultural institutions, and global teams bring meaningful work into the world. Every project is different; the care is consistent.</p><div className="skill-list" data-testid="skills-list"><span>Brand strategy</span><span>Art direction</span><span>Digital products</span><span>Editorial systems</span></div></div>
      </section>

      <section className="experience-section" id="experience" data-testid="experience-section"><div className="wrap"><div className="section-heading compact"><span className="section-index">03 / Experience</span><h2>A few chapters<br />so far.</h2></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company} data-testid={`experience-${item.company.toLowerCase().replaceAll(" ", "-")}`}><span className="timeline-date">{item.dates}</span><div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="body-copy">{item.text}</p></div><ArrowUpRight className="timeline-arrow" size={20} /></article>)}</div></div></section>

      <section className="wrap work-section" id="work" data-testid="work-section"><div className="work-head"><div><span className="section-index">04 / Selected work</span><h2>Made with<br /><em>intention.</em></h2></div><p className="body-copy">A selection of collaborations, identities, and digital experiences from the studio.</p></div><div className="project-grid">{projects.map((project, index) => <a className={`project-card ${project.tone}`} href="#contact" key={project.title} data-testid={`project-card-${index + 1}`}><div className="project-image"><img src={project.image} alt={`${project.title} project`} /><span className="project-number">{project.number}</span><span className="view-project">View project <ArrowUpRight size={17} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><span>{project.year}</span></div></a>)}</div></section>

      <section className="contact-section" id="contact" data-testid="contact-section"><div className="wrap contact-inner"><span className="section-index">Start a conversation</span><h2>Have a good<br /><em>idea?</em> Let’s talk.</h2><div className="contact-actions"><a className="email-link" href="mailto:hello@alexmorgan.design" data-testid="contact-email-link">hello@alexmorgan.design <ArrowUpRight /></a><button className="copy-button" onClick={copyEmail} data-testid="copy-email-button">{copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy email</>}</button></div><div className="social-links"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" data-testid="linkedin-link"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="mailto:hello@alexmorgan.design" data-testid="email-link"><Mail size={17} /> Email <ArrowUpRight size={14} /></a><a href="#top" data-testid="back-to-top-link">Back to top ↑</a></div></div></section>
      <footer className="site-footer wrap" data-testid="site-footer"><span>© 2025 Alex Morgan</span><span>Designing with care since 2016</span><span>AM / 001</span></footer>
    </main>
  );
}

export default App;