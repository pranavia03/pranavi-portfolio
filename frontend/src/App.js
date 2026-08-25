import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import './App.css';

const site = {
  shortName: 'Pranavi',
  eyebrow: 'Psychology × Brand × Culture',
  location: 'Amherst / Bangalore',
  availability: 'Open to marketing, brand, social and creative roles',
  portrait: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/go162ebk_IMG_9489.webp',
  aboutPortrait: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/bsf0xev2_IMG_2385.webp',
  links: {
    email: 'pranavia0305@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pranaviagarwal/',
    substack: 'https://substack.com/@pranavi03?r=6tzf25&utm_medium=ios&utm_source=stories&shareImageVariant=light&utm_content=link_in_bio',
    resume: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/ojniq3tn_Resume_Pranavi.pdf',
  },
};

const projects = [
  {
    slug: 'akirah-label', index: '01', title: 'Akirah Label', category: 'Brand building · Social · Content', year: '2025–26', tone: 'sand',
    intro: 'Making slow fashion feel alive online without making it loud for the sake of being loud.',
    metrics: [{ value: '180K+', label: 'views' }, { value: '2K+', label: 'followers' }, { value: '2', label: 'work periods' }],
    role: 'Brand and content direction, social media, campaign concepts, copy, photography support and creative production.',
    challenge: 'Akirah needed a digital presence that could communicate craft, linen, personality and product detail while still performing on social.',
    approach: ['Built a clearer visual language around warm, editorial imagery and product-first storytelling.', 'Created hooks, reels, launch ideas, event content and scarcity messaging without losing the slow-fashion tone.', 'Used audience response as a creative feedback loop, then iterated formats instead of repeating what merely looked pretty.'],
    outcome: 'The social presence became more recognizable and more effective, with content reaching 180K+ views and the audience growing past 2K followers.',
    visualLabel: 'AKIRAH / BRAND SYSTEM',
    thumbnail: 'https://static.prod-images.emergentagent.com/jobs/ecadec3a-ab66-4c3a-adb8-09a5491abec6/images/180b4f1726496c88946ce43af2771c15c75f08f743c08e72935c00eb4f295238.jpeg',
    thumbnailAlt: 'White linen shirt hanging against a blue sky for Akirah Label',
    heroImage: 'https://static.prod-images.emergentagent.com/jobs/ecadec3a-ab66-4c3a-adb8-09a5491abec6/images/180b4f1726496c88946ce43af2771c15c75f08f743c08e72935c00eb4f295238.jpeg',
    externalLink: 'https://www.instagram.com/akirah.label/', externalLabel: 'View Akirah on Instagram', gallery: [],
  },
  {
    slug: 'visual-stories', index: '02', title: 'Visual Stories', category: 'Photography · Editing · Short-form', year: 'Ongoing', tone: 'ink',
    intro: 'A running experiment in how pacing, framing, movement and small details can turn ordinary footage into a feeling.',
    metrics: [{ value: '2', label: 'featured videos' }, { value: 'Photo + film', label: 'format' }, { value: 'Self-directed', label: 'creative' }],
    role: 'Concepting, photography, filming, editing, sequencing and visual direction.',
    challenge: 'The goal is not to make every frame polished. It is to find the emotional beat that makes a sequence feel specific and memorable.',
    approach: ['Edit around movement and emotional rhythm rather than a rigid social template.', 'Use text sparingly so the visual can do most of the work.', 'Treat personal work as a testing ground for new transitions, pacing, compositions and storytelling devices.'],
    outcome: 'An evolving body of work that shows taste, editing instinct and visual range beyond traditional brand deliverables.',
    visualLabel: 'VISUAL / STORIES',
    thumbnail: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/5qo9he8h_30FDFCE2-0A0A-4536-9427-67548F3A9FD4_1_102_o.webp', thumbnailAlt: 'Lion resting and looking toward the camera',
    heroImage: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/3uf76e8m_IMG_2734.webp',
    externalLink: 'https://www.instagram.com/pranavi.mov/', externalLabel: 'View @pranavi.mov',
    gallery: [
      { type: 'image', src: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/59zpf2z7_IMG_3262%202.jpg', alt: 'Peacock displaying its feathers' },
      { type: 'image', src: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/38xvlzcd_3BADC4F6-61D4-4ED0-9582-DBB7FFAB9526_1_102_a.webp', alt: 'Black-and-white street portrait' },
      { type: 'image', src: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/3uf76e8m_IMG_2734.webp', alt: 'Layered mountain landscape at dusk' },
      { type: 'video', src: '/photography-video-01.mp4', alt: 'Visual story video one' }, { type: 'video', src: '/photography-video-02.mp4', alt: 'Visual story video two' },
    ],
  },
  {
    slug: 'vrijesh-overseas', index: '03', title: 'Vrijesh Overseas', category: 'Photography · Content support', year: '2024', tone: 'blue',
    intro: 'Photography and content support for an overseas home-textile business.',
    metrics: [{ value: 'Photo', label: 'production' }, { value: 'Social', label: 'content' }, { value: 'E-com', label: 'support' }],
    role: 'Marketing intern supporting social content, product photography and digital presentation.',
    challenge: 'The work needed to make product information more usable and visually consistent across social and e-commerce touchpoints.',
    approach: ['Supported product photography with a practical, detail-first eye.', 'Created and organized brand-aligned social assets.', 'Worked across marketing needs instead of treating content as a standalone output.'],
    outcome: 'A practical foundation in how content, operations and product presentation connect inside a real business.',
    visualLabel: 'VRIJESH / CONTENT',
    thumbnail: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/ufqcpouh__39A6910%20%281%29.webp', thumbnailAlt: 'Blue bedding styled for Vrijesh Overseas',
    heroImage: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/7csa7v5c__39A7108.webp',
    gallery: [{ type: 'image', src: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/3d5y74ft_IMG_5833.webp', alt: 'Navy embroidered bedding detail' }, { type: 'image', src: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_exp-gallery-2/artifacts/ytr77i9f_IMG_5866.webp', alt: 'White patterned bedding detail' }],
  },
];

const writing = [
  { title: 'The Her Campus archive', type: 'Her Campus UMass', year: '2025–Now', excerpt: 'Lifestyle, fashion and campus writing with a conversational editorial voice.', href: 'https://www.hercampus.com/author/pranavi-agarwal/' },
  { title: 'Psychology, made readable', type: 'Webbed Head', year: '2021–24', excerpt: 'Earlier psychology writing built around making ideas approachable without flattening them.', href: 'https://webbedheadcom.wordpress.com/' },
  { title: 'For longer thoughts', type: 'Substack', year: 'Ongoing', excerpt: 'Personal essays, poetry and notes on identity, ambition, memory and attention.', href: site.links.substack },
];

const experience = [
  ['Apr 2026 – Aug 2026', 'Akirah Label', 'Brand & Content / Social Media'], ['Jun 2025 – Aug 2025', 'Akirah Label', 'Marketing and Content Intern'], ['2024', 'Vrijesh Overseas Pvt. Ltd.', 'Photography & Content'], ['Ongoing', 'Her Campus', 'Writer'], ['Ongoing', 'Freelance', 'Photography & Visual Content'],
];

function Nav() {
  const go = (id) => { window.location.hash = id; };
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Primary navigation"><button className="brand" onClick={() => go('home')}><span className="brand-dot" />{site.shortName}</button><div className="nav-links"><button onClick={() => go('work')}>Work</button><button onClick={() => go('writing')}>Writing</button><button onClick={() => go('about')}>About</button><a href={site.links.resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14} /></a></div></nav></header>;
}

function Hero() {
  return <section className="hero shell" id="home"><div className="hero-meta reveal"><span>{site.eyebrow}</span><span>{site.location}</span></div><div className="hero-copy reveal delay-1"><h1>I think about why people <em>stop scrolling.</em><br />Then I make the thing worth stopping for.</h1></div><div className="hero-bottom reveal delay-2"><p>I’m Pranavi, a psychology student and creative marketer interested in attention, identity, culture and the tiny choices that make brands feel human.</p><div className="hero-actions"><img className="hero-portrait" src={site.portrait} alt="Pranavi Agarwal overlooking a city" /><a className="round-link" href="#work" aria-label="See selected work"><ArrowDownRight size={24} /></a></div></div></section>;
}

function Work({ onOpen }) {
  return <section className="section shell" id="work"><div className="section-heading reveal"><p className="kicker">Selected work</p><h2>Work that lives somewhere between strategy and instinct.</h2></div><div className="project-grid">{projects.map((project) => <article className="project-card reveal" key={project.slug}><button className="project-card-button" onClick={() => onOpen(project.slug)}><div className={`project-art ${project.tone} has-image`}><img src={project.thumbnail} alt={project.thumbnailAlt} loading="lazy" /><span className="project-index">{project.index}</span><div className="project-art-copy"><span>{project.visualLabel}</span><strong>{project.title}</strong></div></div><div className="project-info"><div><p>{project.category}</p><h3>{project.title}</h3></div><div className="project-year"><span>{project.year}</span><ArrowUpRight size={22} /></div></div></button></article>)}</div></section>;
}

function Writing() {
  return <section className="section writing-section" id="writing"><div className="shell writing-shell"><div className="section-heading reveal"><p className="kicker">Writing</p><h2>The part where I overthink things on purpose.</h2><p className="section-subcopy">Editorial work, psychology writing and longer personal pieces.</p></div><div className="writing-list">{writing.map((piece, index) => <a className="writing-row reveal" key={piece.title} href={piece.href} target="_blank" rel="noreferrer"><span className="writing-number">0{index + 1}</span><div><span className="writing-type">{piece.type} · {piece.year}</span><h3>{piece.title}</h3><p>{piece.excerpt}</p></div><ArrowUpRight size={20} /></a>)}</div><a className="text-link" href={site.links.substack} target="_blank" rel="noreferrer">Read on Substack <ArrowUpRight size={16} /></a></div></section>;
}

function About() {
  return <section className="section shell about" id="about"><div className="section-heading reveal"><p className="kicker">About</p></div><div className="about-grid"><div className="about-statement reveal"><h2>I’m interested in what people notice, what they feel, and what they remember.</h2><img className="about-photo" src={site.aboutPortrait} alt="Pranavi Agarwal photographing wildlife" loading="lazy" /></div><div className="about-copy reveal delay-1"><p>I study psychology at UMass Amherst and work across brand, social media, content and visual storytelling. The overlap makes sense to me: marketing is partly about making things, but it is also about understanding people well enough to know what deserves their attention.</p><p>I like work with a point of view: culturally aware, visually specific and clear enough to actually do something. I’m especially drawn to fashion, lifestyle, arts, editorial and consumer brands.</p><div className="about-facts"><span>Psychology</span><span>Brand strategy</span><span>Social media</span><span>Content creation</span><span>Writing</span><span>Visual direction</span></div><p className="availability">{site.availability}</p><a className="text-link" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a></div></div><div className="experience-list reveal"><p className="kicker">Experience snapshot</p>{experience.map(([period, company, role]) => <div className="experience-row" key={`${period}-${company}`}><span>{period}</span><strong>{company}</strong><p>{role}</p></div>)}</div></section>;
}

function Contact() {
  return <footer className="contact" id="contact"><div className="shell contact-inner reveal"><p className="kicker">Say hi</p><a className="contact-title" href={`mailto:${site.links.email}`}>Have something interesting in mind?<ArrowUpRight size={44} strokeWidth={1.15} /></a><div className="contact-bottom"><span>Pranavi Agarwal</span><span>{site.links.email}</span><span>© {new Date().getFullYear()}</span></div></div></footer>;
}

function ProjectDetail({ project, onBack }) {
  return <main className="case-page"><section className="case-hero shell"><button className="back-button" onClick={onBack}><ArrowLeft size={16} /> Back to work</button><div className="case-title-row"><div><p className="kicker">{project.category}</p><h1>{project.title}</h1></div><span className="case-year">{project.year}</span></div><div className="case-intro-row"><p className="case-intro">{project.intro}</p>{project.externalLink && <a className="text-link" href={project.externalLink} target="_blank" rel="noreferrer">{project.externalLabel} <ArrowUpRight size={16} /></a>}</div></section><section className="shell case-visual-wrap"><div className={`case-visual ${project.tone} has-image`}><img src={project.heroImage || project.thumbnail} alt={project.thumbnailAlt} /><div className="case-visual-caption"><span>{project.visualLabel}</span><strong>{project.title}</strong></div></div></section><section className="shell metrics-grid">{project.metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</section><section className="shell case-body"><div><p className="kicker">My role</p><p className="case-copy-large">{project.role}</p></div><div><p className="kicker">The challenge</p><p>{project.challenge}</p></div><div><p className="kicker">What I did</p><ol className="approach-list">{project.approach.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol></div><div><p className="kicker">Outcome</p><p>{project.outcome}</p></div></section>{project.gallery?.length > 0 && <section className="shell case-gallery"><div className="case-gallery-heading"><p className="kicker">Selected work</p><h2>A few frames from the work.</h2></div><div className="case-gallery-grid">{project.gallery.map((item) => item.type === 'video' ? <video key={item.src} src={item.src} controls playsInline preload="metadata" aria-label={item.alt} /> : <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />)}</div></section>}<section className="case-next shell"><button onClick={onBack}>See all work <ArrowUpRight size={20} /></button></section></main>;
}

function getProjectFromHash() {
  if (!window.location.hash.startsWith('#project/')) return null;
  const slug = window.location.hash.replace('#project/', '');
  return projects.find((project) => project.slug === slug) || null;
}

export default function App() {
  const [activeProject, setActiveProject] = useState(getProjectFromHash());
  useEffect(() => { const onHashChange = () => setActiveProject(getProjectFromHash()); window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange); }, []);
  useEffect(() => { if (activeProject) window.scrollTo({ top: 0, behavior: 'auto' }); }, [activeProject]);
  useEffect(() => { const items = document.querySelectorAll('.reveal'); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.08 }); items.forEach((item) => observer.observe(item)); return () => observer.disconnect(); }, [activeProject]);
  const openProject = (slug) => { window.location.hash = `project/${slug}`; };
  const backHome = () => { setActiveProject(null); window.location.hash = 'work'; requestAnimationFrame(() => document.getElementById('work')?.scrollIntoView()); };
  return <><Nav />{activeProject ? <ProjectDetail project={activeProject} onBack={backHome} /> : <main><Hero /><Work onOpen={openProject} /><Writing /><About /><Contact /></main>}</>;
}
