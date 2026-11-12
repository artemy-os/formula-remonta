"use client";

import { use, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const projects = [
  {slug:"istra", title:"г. Истра — Загородный дом", status:"Завершён", kind:"Загородный дом", description:"Косметический ремонт загородного дома. Завершение текущих ремонтных работ, комплектация и финальная отделка интерьеров.", details:"Работы по завершению ремонта и комплектации загородного дома. В интерьере сочетаются натуральные фактуры, выразительные напольные покрытия, деревянная мебель и декоративное освещение.", images:[] as string[]},
  {slug:"novoe-letovo", title:"ЖК Новое Летово", status:"В работе", kind:"Квартира · 46 м²", description:"Капитальный ремонт жилого помещения. Работы выполняются поэтапно.", details:"Фотографии и подробности реализации будут опубликованы по мере готовности объекта.", images:[] as string[]},
  {slug:"luna", title:"БЦ АРМА — бьюти-бутик «ЛУНА»", status:"В работе", kind:"Коммерческое помещение", description:"Косметический ремонт коммерческого помещения рядом с метро «Курская».", details:"Фотографии и подробности реализации будут опубликованы по завершении работ.", images:[] as string[]},
  {slug:"kulik-tula", title:"ЖК «Кулик», г. Тула", status:"В работе", kind:"Квартира · 37 м²", description:"Капитальный ремонт жилого помещения. Начало работ — ноябрь 2026 г.", details:"Фотографии и подробности реализации будут добавлены по мере выполнения работ.", images:[] as string[]},
];

export function generateStaticParams() { return projects.map(({slug}) => ({slug})); }

export default function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug} = use(params);
  const [active, setActive] = useState(0);
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
      {project.images.length ? <div className="project-detail-gallery">
        <button type="button" onClick={() => setActive((active + project.images.length - 1) % project.images.length)} aria-label="Предыдущее фото">←</button>
        <img src={basePath + project.images[active]} alt={project.title + " — фото " + (active + 1)} />
        <button type="button" onClick={() => setActive((active + 1) % project.images.length)} aria-label="Следующее фото">→</button>
        <p>{active + 1} / {project.images.length}</p>
        <div className="project-detail-thumbs">{project.images.map((src,i) => <button key={src} type="button" onClick={() => setActive(i)} aria-label={"Фото " + (i + 1)} aria-pressed={active===i}><img src={basePath + src} alt="" /></button>)}</div>
      </div> : <p className="project-detail-empty">Фотогалерея готовится к публикации.</p>}
      <a className="project-detail-back" href={basePath + "/#projects"}>← Вернуться ко всем проектам</a>
    </div>
  </main>;
}
