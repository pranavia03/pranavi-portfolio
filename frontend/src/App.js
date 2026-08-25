import { useState } from "react";
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useParams } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { EMAIL, INSTAGRAM, INSTAGRAM_2, LINKEDIN, RESUME_URL, articles, capabilities, experience, projects } from "@/portfolioData";
import "@/App.css";
import "@/visualStories.css";

const Placeholder = ({ label, className = "" }) => (
  <div className={`placeholder ${className}`} aria-label={label}>
    <span>◌</span>
    <small>{label}</small>
  </div>
);

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" onClick={close}>PRANAVI <i>AGARWAL</i></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "main-nav is-open" : "main-nav"}>
        <a href="/#work" onClick={close}>Work</a>
        <NavLink to="/writing" onClick={close}>Writing</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <a href={RESUME_URL} target="_blank" rel="noreferrer" onClick={close}>Résumé ↗</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="eyebrow">Get in touch</span>
        <h2>LET’S TALK<span>.</span></h2>
        <a className="footer-email" href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight size={18} /></a>
      </div>
      <div className="footer-links">
        <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram: @pranavi.agarwal ↗</a>
        <a href={INSTAGRAM_2} target="_blank" rel="noreferrer">Visuals: @pranavi.mov ↗</a>
        <a href={RESUME_URL} target="_blank" rel="noreferrer">Résumé ↓</a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <main className="home">
        <section className="home-hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">Marketing · Social · Brand · Visual</p>
            <h1>PRANAVI<br /><em>AGARWAL</em></h1>
            <p className="hero-line">Marketing, brand and visual storytelling shaped by a curiosity about how people think, respond and remember.</p>
            <a className="text-link" href="#work">Selected work <ArrowDown size={15} /></a>
          </div>
          <div className="hero-mark">
            <Placeholder label="ADD PORTRAIT" className="hero-placeholder" />
            <span>PA / 01</span>
          </div>
        </section>

        <section className="work-index wrap" id="work">
          <div className="section-top">
            <span className="eyebrow">Selected work</span>
            <span className="section-count">{projects.length} projects</span>
          </div>
          {projects.map((project) => (
            <Link className="project-row" to={`/work/${project.slug}`} key={project.slug}>
              <div className={`project-preview ${project.tone}`}><Placeholder label={project.imageLabel} /></div>
              <div className="project-title">
                <span>{project.number} /</span>
                <h2>{project.title}</h2>
                <p>{project.meta}</p>
              </div>
              <span className="project-location">{project.location} <ArrowUpRight size={18} /></span>
            </Link>
          ))}
        </section>

        <section className="home-note wrap">
          <span className="eyebrow">A little context</span>
          <div>
            <p>I’m Pranavi, a psychology student working across brand, social media, content and visual storytelling, with a particular interest in why people pay attention, connect and remember.</p>
            <Link className="text-link" to="/about">More about me <ArrowUpRight size={15} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MetricStrip({ metrics }) {
  return (
    <div className="metric-strip">
      {metrics.map(([value, label]) => <div className="metric" key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  );
}

function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/#work" replace />;

  return (
    <>
      <main className="case-study wrap">
        <Link className="back-link" to="/#work">← Selected work</Link>
        <div className="case-heading">
          <div>
            <span className="eyebrow">{project.number} / Case study</span>
            <h1>{project.title}</h1>
          </div>
          <div className="case-meta">
            <p>{project.meta}<br />{project.location}</p>
            {project.periods?.map((period) => <span className="project-period" key={period}>{period}</span>)}
            {project.link && <a className="text-link case-external-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={16} /></a>}
          </div>
        </div>

        <div className={`case-hero ${project.tone}`}><Placeholder label={`ADD ${project.title.toUpperCase()} HERO IMAGE`} /></div>
        <MetricStrip metrics={project.metrics} />

        <div className="case-grid">
          <div><span className="eyebrow">Role</span><p className="case-role">{project.role}</p></div>
          <div><p className="case-intro">{project.intro}</p><p className="body-copy">{project.overview}</p></div>
        </div>

        <div className="case-sections">
          {project.sections.map((section, index) => (
            <section className="case-section" key={section.title}>
              <span>0{index + 1}</span>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
              <Placeholder label={section.label} />
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

function VisualStories() {
  const project = projects.find((item) => item.slug === "visual-stories");
  const tiles = ["PHOTO / 01", "PHOTO / 02", "PHOTO / 03", "VIDEO / 01", "VIDEO / 02"];
  return (
    <>
      <main className="inner-page wrap visual-page">
        <div className="page-intro visual-intro">
          <span className="eyebrow">Visual Work / 01</span>
          <h1><em>Visual Stories</em><br />in progress.</h1>
          <p>Portraits, street corners, travel, short-form content and the details that stay with you.</p>
          <div className="visual-links">
            <a className="text-link" href={INSTAGRAM} target="_blank" rel="noreferrer">@pranavi.agarwal <ArrowUpRight size={15} /></a>
            <a className="text-link" href={INSTAGRAM_2} target="_blank" rel="noreferrer">@pranavi.mov <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <MetricStrip metrics={project.metrics} />
        <div className="visual-masonry">
          {tiles.map((tile, index) => <div className={`visual-tile visual-tile-${index + 1}`} key={tile}><Placeholder label={tile} /></div>)}
        </div>
        <div className="visual-process">
          <span className="eyebrow">Process</span>
          <p>Photography, short-form video, editing, composition, CapCut, Canva, Procreate and visual experiments.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Writing() {
  return (
    <>
      <main className="inner-page wrap">
        <div className="page-intro writing-intro">
          <span className="eyebrow">Writing / Archive</span>
          <h1>Words for<br /><em>the record.</em></h1>
          <p>An index of pieces across fashion, lifestyle, campus culture, psychology and longer personal writing.</p>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <a className="article-row" href={article.href} target="_blank" rel="noreferrer" key={article.title}>
              <Placeholder label={article.label} />
              <div>
                <span className="eyebrow">{article.publication}</span>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
              <span>{article.year} ↗</span>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

function About() {
  return (
    <>
      <main className="inner-page about-page wrap">
        <div className="about-intro">
          <span className="eyebrow">About / Pranavi Agarwal</span>
          <h1>I’m Pranavi, a psychology student working across brand, social media, content and visual storytelling, with a particular interest in why people pay attention, connect and remember.</h1>
        </div>

        <div className="about-columns">
          <div className="about-portrait"><Placeholder label="ADD ABOUT PORTRAIT" /></div>
          <div>
            <p className="lead">My work moves between strategy and making. Psychology has made me curious about audiences: what catches attention, what creates association, and what makes something worth remembering.</p>
            <p className="body-copy">University of Massachusetts Amherst<br />B.S. Psychology · Minor in Business Studies · GPA 4.00<br />Study abroad: Universitat Autònoma de Barcelona · Spring 2026</p>
          </div>
        </div>

        <div className="timeline">
          <span className="eyebrow">Experience</span>
          {experience.map((item) => <div className="timeline-row" key={`${item[0]}-${item[1]}`}><span>{item[0]}</span><strong>{item[1]}</strong><em>{item[2]}</em></div>)}
        </div>

        <div className="capabilities">
          <span className="eyebrow">Capabilities</span>
          {Object.entries(capabilities).map(([group, items]) => <div className="capability-group" key={group}><h2>{group}</h2><p>{items.join(" · ")}</p></div>)}
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/visual-stories" element={<VisualStories />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/photography" element={<Navigate to="/work/visual-stories" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
