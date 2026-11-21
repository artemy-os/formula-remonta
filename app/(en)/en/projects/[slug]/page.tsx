import type { Metadata } from "next";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const projects = [
  {slug:"bessovestno-talantlivy", completedAt:"2019", title:"Bessovestno Talantlivy University — ARMA Business Center", status:"Completed", kind:"Training space", description:"A flagship training center for beauty industry professionals.", details:"This project at ARMA Business Center was completed in 2019.", images:["/images/university/logo.jpg"]},
  {slug:"goga-nikabadze", completedAt:"09.2025", title:"Goga Nikabadze Boutique — Winzavod", status:"Completed", kind:"Commercial space · Boutique", description:"Refurbishment of the Goga Nikabadze boutique at Winzavod.", details:"Refurbishment of the Goga Nikabadze boutique at Winzavod.", images:["/images/goga-nikabadze/interior.jpg"]},
  {slug:"istra", completedAt:"11.2026", title:"Country House — Istra", status:"Completed", kind:"Country house", description:"Country house refurbishment, including completion of ongoing works, furnishing and final interior finishes.", details:"We completed the renovation and fit-out of this country house. The interiors combine natural textures, distinctive flooring, wooden furniture and decorative lighting.", images:["/images/istra/living-room.jpeg", "/images/istra/dining-room.jpeg", "/images/istra/bathroom.jpeg", "/images/istra/entrance.jpeg", "/images/istra/floor-socket.jpeg"]},
  {slug:"novoe-letovo", title:"Novoye Letovo Apartments", status:"In progress", kind:"Apartment · 46 m²", description:"Full apartment renovation, carried out in stages.", details:"Photos and project details will be published as work progresses.", images:[] as string[]},
  {slug:"luna", title:"LUNA Beauty Boutique — ARMA Business Center", status:"Completed", kind:"Commercial space", description:"Refurbishment of a commercial space near Kurskaya metro station.", details:"We refurbished LUNA Beauty Boutique at ARMA Business Center, with interiors finished in grey and yellow.", images:["/images/luna/interior.jpg"]},
  {slug:"kulik-tula", title:"Kulik Apartments, Tula", status:"In progress", kind:"Apartment · 37 m²", description:"Full apartment renovation. Work started in November 2026.", details:"Photos and project details will be added as the work progresses.", images:[] as string[]},
];

export function generateStaticParams() { return projects.map(({slug}) => ({slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug} = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return {};
  const ru = "/projects/" + slug + "/", en = "/en" + ru;
  return {title: project.title + " — Masterskaya Remonta", description: project.description, alternates: {canonical: en, languages: {ru, en}}};
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <main className="project-detail"><a href={basePath + "/en/#projects"}>← Back to projects</a><h1>Project not found</h1></main>;
  return <main className="project-detail">
    <header className="project-detail-header">
      <a href={basePath + "/en/"} aria-label="Home"><img src={basePath + "/images/logo-approved-horizontal.png"} alt="Masterskaya Remonta" /></a>
      <a href={basePath + "/en/#projects"}>← All projects</a>
    </header>
    <div className="project-detail-body">
      <p className="project-detail-eyebrow">PROJECT / {project.status.toUpperCase()}</p>
      <h1>{project.title}</h1>
      <div className="project-detail-meta"><span>{project.kind}</span><span>{project.status}</span>{project.completedAt && <span>Completed: {project.completedAt}</span>}</div>
      <p className="project-detail-lead">{project.description}</p>
      <h2>About the project</h2>
      <p>{project.details}</p>
      <h2>Photos</h2>
      {project.images.length ? <div className="project-detail-gallery-grid">{project.images.map((src,i) => <a href={basePath + src} target="_blank" rel="noopener noreferrer" key={src}><img src={basePath + src} alt={project.title + " — photo " + (i + 1)} loading="lazy" /></a>)}</div> : <p className="project-detail-empty">Photos will be published soon.</p>}
      <a className="project-detail-back" href={basePath + "/en/#projects"}>← Back to all projects</a>
    </div>
  </main>;
}
