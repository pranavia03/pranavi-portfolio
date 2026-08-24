import { useState } from "react";
import { ArrowUpRight, Check, Copy, Instagram, Mail, Menu, X } from "lucide-react";
import "@/App.css";

const profileImage = "https://images.unsplash.com/photo-1675111283112-b5b090fa3069?auto=format&fit=crop&w=1000&q=85";
const resumeUrl = "https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/ivmk85mb_Resume%CC%81.pdf";
const projects = [
  { number: "01", title: "Akirah Label", type: "Brand marketing · Campaigns", year: "2025—26", image: "https://images.unsplash.com/photo-1453586857165-eb78d44460ca?auto=format&fit=crop&w=1200&q=85", tone: "sand", href: "https://www.instagram.com/akirah.label/" },
  { number: "02", title: "Visual Stories", type: "Photography · Short-form video", year: "2019—Now", image: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?auto=format&fit=crop&w=1200&q=85", tone: "blue", href: "https://www.instagram.com/pranavi.agarwal/" },
  { number: "03", title: "Tee-Tails", type: "Founder · Brand strategy", year: "2021—23", image: "https://images.unsplash.com/photo-1560131653-63257db002c8?auto=format&fit=crop&w=1200&q=85", tone: "rose", href: "#contact" },
];
const experience = [
  { dates: "Apr 2026 — Present", role: "Marketing & Brand Intern", company: "Akirah Label", text: "Planning content calendars, launch campaigns, and social strategy for a premium linen label; drove 66,000+ views and 700 follower growth in the first month." },
  { dates: "Feb 2025 — Present", role: "Writer", company: "Her Campus UMass", text: "Writing lifestyle, fashion, and campus-life articles tailored to the interests of the college audience." },
  { dates: "Jun 2019 — Present", role: "Photographer & Visual Content Creator", company: "Freelance", text: "Conceptualising and producing short-form photography and video centred on digital storytelling, generating 25,000+ views through audience-focused content." },
  { dates: "Jun 2025 — Aug 2025", role: "Marketing & Content Intern", company: "Akirah Label (formerly Aari Label)", text: "Wrote brand-aligned copy, developed content pillars, built a 30-day pre-launch campaign, and coordinated influencer identification and launch planning." },
  { dates: "May 2024 — Aug 2024", role: "Marketing Intern", company: "Vrijesh Overseas Pvt Ltd.", text: "Managed social accounts, created brand-aligned content, archived 150+ digital assets, and assisted with product photography for e-commerce and social." },
  { dates: "May 2021 — Aug 2024", role: "Independent Blogger", company: "Webbed Head", text: "Researching and writing accessible psychology-focused articles for online audiences." },
  { dates: "Nov 2021 — Jul 2023", role: "Founder", company: "Tee-Tails", text: "Researched market trends, developed the business vision and branding, and grew the product line to $300 in sales revenue." },
  { dates: "Mar 2021 — Aug 2022", role: "Animal Welfare Activist", company: "Stray Sincerely", text: "Created social media content to raise public awareness about stray animal welfare issues." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard?.writeText("pranaviagarw@umass.edu");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      window.location.href = "mailto:pranaviagarw@umass.edu";
    }
  };
  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="site-shell">
      <header className="site-header" data-testid="site-header">
        <a className="brand" href="#top" data-testid="brand-home">PA<span>.</span></a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} data-testid="main-navigation">
          <a href="#about" onClick={closeMenu} data-testid="nav-about">About</a><a href="#experience" onClick={closeMenu} data-testid="nav-experience">Experience</a><a href="#work" onClick={closeMenu} data-testid="nav-work">Selected work</a><a href="#contact" onClick={closeMenu} data-testid="nav-contact">Contact</a>
        </nav>
        <a className="header-link" href={resumeUrl} target="_blank" rel="noreferrer" data-testid="header-resume-link">View résumé <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" data-testid="mobile-menu-button">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <section className="hero wrap" id="top" data-testid="hero-section"><div className="hero-copy"><p className="eyebrow" data-testid="hero-eyebrow">Marketing · Writing · Visual storytelling</p><h1 data-testid="hero-heading">Ideas made<br /><em>visible.</em></h1><p className="hero-intro" data-testid="hero-intro">I’m Pranavi Agarwal — a marketing and content storyteller based in Amherst and Bangalore, building thoughtful brands through words, images, and strategy.</p><a className="circle-link" href="#work" data-testid="hero-work-link">Explore<br />my work <ArrowUpRight size={18} /></a></div><div className="hero-visual" data-testid="hero-profile-visual"><div className="image-frame"><img src={profileImage} alt="Pranavi Agarwal, marketing and content storyteller" data-testid="profile-image" /><span className="image-caption">Amherst / 2026</span></div><div className="orbit-note">Based in<br /><strong>Amherst</strong><br />& Bangalore</div></div></section>
      <section className="statement-band" data-testid="statement-section"><div className="wrap statement-inner"><span className="section-index">01 / 04</span><p>Good stories make people pause, feel something, and see an idea differently.</p><span className="scroll-mark">↓</span></div></section>
      <section className="wrap about-section" id="about" data-testid="about-section"><div className="section-heading"><span className="section-index">02 / About</span><h2>A practice built<br />on <em>curiosity.</em></h2></div><div className="about-content"><p className="lead" data-testid="about-lead">I’m drawn to the space where a good story meets a clear strategy — and where a brand starts to feel like itself.</p><p className="body-copy">Currently studying Psychology with minors in Business Studies and Economics at UMass Amherst, I bring a people-first lens to marketing, content, and visual communication.</p><div className="skill-list" data-testid="skills-list"><span>Content strategy</span><span>Social media</span><span>Photography</span><span>Copywriting</span><span>Photoshop · Canva · CapCut</span><span>Procreate</span></div></div></section>
      <section className="experience-section" id="experience" data-testid="experience-section"><div className="wrap"><div className="section-heading compact"><span className="section-index">03 / Experience</span><h2>A few chapters<br />so far.</h2></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={`${item.company}-${item.dates}`} data-testid={`experience-${item.company.toLowerCase().replaceAll(" ", "-")}`}><span className="timeline-date">{item.dates}</span><div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="body-copy">{item.text}</p></div><ArrowUpRight className="timeline-arrow" size={20} /></article>)}</div></div></section>
      <section className="wrap work-section" id="work" data-testid="work-section"><div className="work-head"><div><span className="section-index">04 / Selected work</span><h2>Made with<br /><em>intention.</em></h2></div><p className="body-copy">A selection of brand, content, and visual storytelling work.</p></div><div className="project-grid">{projects.map((project, index) => <a className={`project-card ${project.tone}`} href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined} key={project.title} data-testid={`project-card-${index + 1}`}><div className="project-image"><img src={project.image} alt={`${project.title} project`} /><span className="project-number">{project.number}</span><span className="view-project">View project <ArrowUpRight size={17} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><span>{project.year}</span></div></a>)}</div></section>
      <section className="contact-section" id="contact" data-testid="contact-section"><div className="wrap contact-inner"><span className="section-index">Start a conversation</span><h2>Have a good<br /><em>idea?</em> Let’s talk.</h2><div className="contact-actions"><a className="email-link" href="mailto:pranaviagarw@umass.edu" data-testid="contact-email-link">pranaviagarw@umass.edu <ArrowUpRight /></a><button className="copy-button" onClick={copyEmail} data-testid="copy-email-button">{copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy email</>}</button></div><div className="social-links"><a href="https://www.instagram.com/akirah.label/" target="_blank" rel="noreferrer" data-testid="akirah-instagram-link"><Instagram size={17} /> Akirah Label <ArrowUpRight size={14} /></a><a href="https://www.instagram.com/pranavi.agarwal/" target="_blank" rel="noreferrer" data-testid="pranavi-instagram-link"><Instagram size={17} /> Instagram <ArrowUpRight size={14} /></a><a href="mailto:pranaviagarw@umass.edu" data-testid="email-link"><Mail size={17} /> Email <ArrowUpRight size={14} /></a><a href="#top" data-testid="back-to-top-link">Back to top ↑</a></div></div></section>
      <footer className="site-footer wrap" data-testid="site-footer"><span>© 2026 Pranavi Agarwal</span><span>Psychology · Business · Economics</span><span>PA / 001</span></footer>
    </main>
  );
}
export default App;