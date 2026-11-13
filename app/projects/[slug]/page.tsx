const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const projects = [
  {slug:"goga-nikabadze", title:"Goga Nikabadze — Бутик, Винзавод", status:"Завершён", kind:"Коммерческое помещение · Бутик", description:"Завершённый проект бутика Goga Nikabadze на Винзаводе.", details:"Фотографии и подробное описание выполненных работ готовятся к публикации.", images:[] as string[]},
  {slug:"istra", title:"г. Истра — Загородный дом", status:"Завершён", kind:"Загородный дом", description:"Косметический ремонт загородного дома. Завершение текущих ремонтных работ, комплектация и финальная отделка интерьеров.", details:"Работы по завершению ремонта и комплектации загородного дома. В интерьере сочетаются натуральные фактуры, выразительные напольные покрытия, деревянная мебель и декоративное освещение.", images:["/images/istra/living-room.jpeg", "/images/istra/dining-room.jpeg", "/images/istra/bathroom.jpeg", "/images/istra/entrance.jpeg", "/images/istra/floor-socket.jpeg"]},
  {slug:"novoe-letovo", title:"ЖК Новое Летово", status:"В работе", kind:"Квартира · 46 м²", description:"Капитальный ремонт жилого помещения. Работы выполняются поэтапно.", details:"Фотографии и подробности реализации будут опубликованы по мере готовности объекта.", images:[] as string[]},
  {slug:"luna", title:"БЦ АРМА — бьюти-бутик «ЛУНА»", status:"В работе", kind:"Коммерческое помещение", description:"Косметический ремонт коммерческого помещения рядом с метро «Курская».", details:"Косметический ремонт бьюти-бутика «ЛУНА» в БЦ АРМА. Интерьер оформлен в серых и жёлтых тонах.", images:["/images/luna/interior.jpg"]},
  {slug:"kulik-tula", title:"ЖК «Кулик», г. Тула", status:"В работе", kind:"Квартира · 37 м²", description:"Капитальный ремонт жилого помещения. Начало работ — ноябрь 2026 г.", details:"Фотографии и подробности реализации будут добавлены по мере выполнения работ.", images:[] as string[]},
];

export function generateStaticParams() { return projects.map(({slug}) => ({slug})); }

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <main className="project-detail"><a href={basePath + "/#projects"}>← К проектам</a><h1>Проект не найден</h1></main>;
  return <main className="project-detail">
    <header className="project-detail-header">
      <a href={basePath + "/"} aria-label="На главную"><img src={basePath + "/images/logo-approved-horizontal.png"} alt="Мастерская ремонта" /></a>
      <a href={basePath + "/#projects"}>← Все проекты</a>
    </header>
    <div className="project-detail-body">
      <p className="project-detail-eyebrow">ПРОЕКТ / {project.status.toUpperCase()}</p>
      <h1>{project.title}</h1>
      <div className="project-detail-meta"><span>{project.kind}</span><span>{project.status}</span></div>
      <p className="project-detail-lead">{project.description}</p>
      <h2>О проекте</h2>
      <p>{project.details}</p>
      <h2>Фотографии</h2>
      {project.images.length ? <div className="project-detail-gallery-grid">{project.images.map((src,i) => <a href={basePath + src} target="_blank" rel="noopener noreferrer" key={src}><img src={basePath + src} alt={project.title + " — фото " + (i + 1)} loading="lazy" /></a>)}</div> : <p className="project-detail-empty">Фотогалерея готовится к публикации.</p>}
      <a className="project-detail-back" href={basePath + "/#projects"}>← Вернуться ко всем проектам</a>
    </div>
  </main>;
}
