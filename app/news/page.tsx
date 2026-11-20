import type { Metadata } from "next";
import NewsCards from "./NewsCards";
export const metadata: Metadata = {title:"Строительные будни — Мастерская ремонта", description:"Материалы, технологии и практика ремонта. Разбираем решения на наших объектах и события строительной отрасли.", alternates:{canonical:"/news/"}, openGraph:{title:"Строительные будни",url:"/news/",description:"Решения для ремонта, материалы и опыт наших объектов."}};
export default function NewsPage(){return <main className="journal-main"><div className="journal-intro"><p className="eyebrow">ЖУРНАЛ МАСТЕРСКОЙ</p><h1>Строительные будни</h1><p>Материалы, технологии и решения, которые помогают создавать удобные пространства. Рассказываем о ремонте на понятных примерах.</p></div><NewsCards archive /></main>}
