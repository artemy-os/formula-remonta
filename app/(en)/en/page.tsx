"use client";

import { useState } from "react";
import LanguageSwitch from "../../LanguageSwitch";
import NewsCards from "./news/NewsCards";
import { workTypes } from "./work-types/data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetPath(path: string) {
  return `${basePath}${path}`;
}

const services = [
  {
    number: "01",
    title: "Apartment renovation",
    text: "From demolition and building systems to final finishes.",
  },
  {
    number: "02",
    title: "House and cottage renovation",
    text: "Interior renovation tailored to your country house.",
  },
  {
    number: "03",
    title: "Design and planning",
    text: "Space planning, construction drawings and interior design.",
  },
  {
    number: "04",
    title: "Procurement and site management",
    text: "We coordinate materials, trades and quality control.",
  },
];

const processSteps = [
  ["01", "Project consultation", "We agree on your goals, scope and expectations."],
  ["02", "Estimate", "We set out the scope and provide a clear estimate."],
  ["03", "Delivery", "We manage the site and check each stage."],
  ["04", "Handover", "We hand over a clean, move-in-ready space."],
];

const clients = [
  {
    "name": "Authentica",
    "logo": "/images/clients/authentica.jpeg",
    "href": "https://www.authentica.ru"
  },
  {
    "name": "Na Svezhuyu Golovu",
    "logo": "/images/clients/na-svezhuyu-golovu.jpeg",
    "href": "https://nasvezhuyugolovu.ru/"
  },
  {
    "name": "Goga Nikabadze",
    "logo": "/images/clients/goga-nikabadze.jpeg",
    "href": "https://goga-nikabadze.com/ru/photo-stories"
  },
  { name: "Aerotovary", logo: "/images/clients/aerotovary.jpeg", href: "https://aerotovary.ru/" },
  { name: "ASAP Production", logo: "/images/clients/asap-production.jpeg", href: "https://asapproduction.tv/" },
  { name: "BIZMONT", logo: "/images/clients/bizmont.jpeg", href: "https://bizmont.ru/" }
];


const currentProjects: { slug: string; category: string; title: string; description: string; image?: string; alt: string; className: string }[] = [
  {
    slug: "novoe-letovo",
    category: "IN PROGRESS",
    title: "Novoye Letovo Apartments",
    description: "Full renovation of a 46 m² apartment. Photos and details will follow as work progresses.",
    image: undefined,
    alt: "",
    className: "project-in-progress",
  },
  {
    slug: "kulik-tula",
    category: "IN PROGRESS",
    title: "Kulik Apartments, Tula",
    description: "Full renovation of a 37 m² apartment. Work started in November 2026.",
    image: undefined,
    alt: "",
    className: "project-in-progress",
  },
];

const completedProjects: (Omit<(typeof currentProjects)[number], "image"> & { image?: string })[] = [
  {
    slug: "luna",
    category: "COMPLETED",
    title: "LUNA Beauty Boutique — ARMA Business Center",
    description: "Refurbishment of a commercial space near Kurskaya metro station.",
    image: "/images/luna/interior.jpg",
    alt: "LUNA Beauty Boutique interior at ARMA",
    className: "",
  },
  {
    slug: "bessovestno-talantlivy",
    category: "COMPLETED · 2019",
    title: "Bessovestno Talantlivy University — ARMA Business Center",
    description: "A flagship training center for beauty industry professionals.",
    image: "/images/university/logo.jpg",
    alt: "Bessovestno Talantlivy University logo",
    className: "project-brand-cover",
  },
  {
    slug: "goga-nikabadze",
    category: "COMPLETED · 09.2025",
    title: "Goga Nikabadze Boutique — Winzavod",
    description: "Refurbishment of the Goga Nikabadze boutique at Winzavod.",
    image: "/images/goga-nikabadze/interior.jpg",
    alt: "Goga Nikabadze boutique interior at Winzavod",
    className: "",
  },
  {
    slug: "istra",
    category: "COMPLETED · 11.2026",
    title: "Country House — Istra",
    description: "Country house refurbishment, including completion of ongoing works, furnishing and final interior finishes.",
    image: "/images/istra/living-room.jpeg",
    alt: "Renovated living room and kitchen in the Istra country house",
    className: "",
  },
];

function BrandLogo() {
  return (
    <img
      className="brand-original"
      src={assetPath("/images/logo-approved-horizontal.png")}
      alt=""
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Masterskaya Remonta — Home">
          <BrandLogo />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work-types" onClick={() => setMenuOpen(false)}>Scope of work</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Delivery</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href={assetPath("/en/news/")}>Blog</a>
        </nav>

        <div className="header-actions"><a className="header-cta" href="#services">Our services</a><LanguageSwitch english /></div>
      </header>

      <section className="hero" id="top">
        <img src={assetPath("/images/hero-interior-clean.png")} alt="Contemporary living room interior" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">PRECISION · RELIABILITY · COMFORT</p>
          <h1>Creating spaces<br />for comfortable living</h1>
          <p className="hero-copy">
            We plan each renovation around a clear brief, practical solutions and quality checks, so you know what to expect.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#services">Our services</a>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 28px" }}>
              <a className="text-link light-link" href="#process">How we work <span>↓</span></a>
              <a className="text-link light-link" href={assetPath("/en/news/")}>Blog</a>
              <a className="text-link light-link" href="#projects">Projects</a>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Go to About us">
          <span>SCROLL</span>
          <i>↓</i>
        </a>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="eyebrow">ABOUT US</p>
          <h2>Renovation that<br />comes together</h2>
        </div>
        <div className="about-copy">
          <p>
            We take on renovations of any complexity and stay involved at every stage, from the first measurements to handover.
          </p>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">SERVICES</p>
          <h2>One contractor.<br />The whole job.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <i aria-hidden="true"><svg viewBox="0 0 270 210" width="1em" height="1em" style={{display:"block"}}><path fill="currentColor" d="M0 70h52v96h218v44H0zM78 0h52v146H78z"/><path fill="#B29370" d="M198 18h72v72h-72z"/></svg></i>
            </article>
          ))}
        </div>
      </section>

      <section className="work-types" id="work-types">
        <div className="work-types-head">
          <div>
            <p className="eyebrow">SCOPE OF WORK</p>
            <h2>Everything you need<br />for a finished space</h2>
          </div>
          <p>
            We handle the whole renovation, list the work in the estimate and set out the stages in a clear order.
          </p>
        </div>

        <div className="work-types-grid">
          {workTypes.map((work) => (
            <a href={assetPath(`/en/work-types/${work.slug}/`)} className="work-type-card work-type-link" key={work.number}>
              <span>{work.number}</span><img className="work-type-illustration" src={assetPath(`/images/work-types/${work.slug}.svg`)} alt="" loading="lazy" />
              <h3>{work.title}</h3>
              <ul>
                {work.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            <p className="work-more">Full scope{" "}<svg className="work-brand-icon" aria-hidden="true" viewBox="0 0 270 210" width="16" height="16"><path fill="currentColor" d="M0 70h52v96h218v44H0zM78 0h52v146H78z"/><path fill="#B29370" d="M198 18h72v72h-72z"/></svg></p></a>
          ))}
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-head">
          <div>
            <p className="eyebrow">OUR WORK</p>
            <h2 id="projects-title">Projects</h2>
          </div>
          <p className="projects-copy">
            Current and completed projects from our team.
          </p>
        </div>
        <div className="projects-group">
          <h3 className="projects-group-title">In progress</h3>
          <div className="project-grid">
            {currentProjects.map((project) => (
              <a href={assetPath(`/en/projects/${project.slug}/`)} aria-label={`View project: ${project.title}`} className={`project-card ${project.className ?? ""}`} key={project.title}>
                {project.image && <img src={assetPath(project.image)} alt={project.alt} />}
                <div className="project-overlay">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="projects-group projects-group-completed">
          <h3 className="projects-group-title">Completed</h3>
          <div className="project-grid">
            {completedProjects.map((project) => (
              <a href={assetPath(`/en/projects/${project.slug}/`)} aria-label={`View project: ${project.title}`} className={`project-card ${project.className ?? ""}`} key={project.title}>
                {project.image && <img src={assetPath(project.image)} alt={project.alt} />}
                <div className="project-overlay">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <p style={{ marginTop: "40px", paddingTop: "28px", borderTop: "1px solid #d7d7d3", maxWidth: "850px", color: "#555", fontSize: "20px", fontWeight: 700, lineHeight: 1.6 }}>We provide ongoing maintenance and technical support for our clients’ spaces.</p>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">PROCESS</p>
          <h2>A clear path<br />to a finished interior</h2>
        </div>
        <div className="process-grid">
          {processSteps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section news-home" id="news"><div className="news-section-heading"><div><p className="eyebrow">THE WORKSHOP BLOG</p><h2>Building & Renovation 👷</h2></div><a className="news-read" href={assetPath("/en/news/")}>All articles ↗</a></div><NewsCards limit={3} /></section>

      <section className="estimate" aria-labelledby="consultation-title">
        <div className="estimate-intro">
          <p className="eyebrow">PLANNING A RENOVATION</p>
          <h2 id="consultation-title">A considered approach<br />to every project</h2>
          <p>
            We are updating our service information. The website is currently not accepting enquiries or collecting personal data.
          </p>
          <div className="contact-note">
            <span>SERVICE AREA</span>
            <strong>Moscow and the Moscow Region</strong>
          </div>
        </div>
      </section>

      <section className="section" id="clients" aria-labelledby="clients-title">
        <div className="section-heading">
          <h2 id="clients-title">Our clients</h2>
        </div>
        {clients.length ? (
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px, 2vw, 24px)", padding: 0, margin: 0, listStyle: "none" }}>
            {clients.map(({ name, logo, href }) => (
              <li key={name}>
                <a href={href} aria-label={name} title={name} style={{ display: "grid", placeItems: "center", width: "clamp(52px, 17vw, 112px)", height: "52px" }}>
                  {logo ? <img src={assetPath(logo)} alt="" loading="lazy" style={{ width: "100%", height: "44px", objectFit: "contain" }} /> : name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Companies we have worked with will be listed here.</p>
        )}
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Masterskaya Remonta — Back to top">
          <BrandLogo />
        </a>
        <p>Creating spaces for comfortable living.</p>
        <div>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href={assetPath("/en/news/")}>Building & Renovation 👷</a>
        </div>
        <span>© 2026 Masterskaya Remonta</span>
      </footer>
    </main>
  );
}
