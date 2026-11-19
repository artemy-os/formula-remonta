"use client";
import { useEffect, useState } from "react";
import { articles } from "./data";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
function Cards({items}: {items: typeof articles}) {
 return <div className="news-grid">{items.map(a => <a className="news-card" href={`${base}/news/${a.slug}/`} key={a.slug}>
  <div className="news-card-photo"><img src={base+a.image} alt={a.imageAlt} loading="lazy" /></div>
  <div className="news-card-copy"><div className="news-meta"><span>{a.category}</span><time dateTime={a.date}>{a.dateLabel}</time></div><h3>{a.title}</h3><p>{a.excerpt}</p><span className="news-read">Читать материал ↗</span></div>
 </a>)}</div>;
}

const monthKey = new Intl.DateTimeFormat("sv-SE", {timeZone:"Europe/Moscow",year:"numeric",month:"2-digit"});
const monthLabel = new Intl.DateTimeFormat("ru-RU", {timeZone:"UTC",year:"numeric",month:"long"});
export default function NewsCards({limit = articles.length, archive = false}: {limit?:number; archive?:boolean}) {
 const [month, setMonth] = useState("");
 useEffect(() => {
  if (!archive) return;
  const refresh = () => setMonth(monthKey.format(new Date()));
  refresh();
  const timer = window.setInterval(refresh, 60000);
  window.addEventListener("focus", refresh);
  return () => { window.clearInterval(timer); window.removeEventListener("focus", refresh); };
 }, [archive]);
 if (!archive || !month) return <Cards items={articles.slice(0,limit)} />;
 const current = articles.filter(a => a.date.slice(0,7) === month);
 const past = articles.filter(a => a.date.slice(0,7) < month);
 const months = [...new Set(past.map(a => a.date.slice(0,7)))].sort().reverse();
 return <>
  {current.length ? <Cards items={current} /> : <p>В этом месяце новых материалов пока нет.</p>}
  {!!months.length && <section aria-labelledby="news-archive-title" style={{marginBlockStart:48,borderTop:"1px solid var(--line)",paddingBlockStart:24}}>
   <h2 id="news-archive-title">Архив публикаций</h2>
   {months.map(key => <details key={key} style={{paddingBlock:14,borderBottom:"1px solid var(--line)"}}>
    <summary style={{cursor:"pointer",fontWeight:600,textTransform:"capitalize"}}>{monthLabel.format(new Date(key+"-01T00:00:00Z"))}</summary>
    <ul>{past.filter(a => a.date.startsWith(key)).map(a => <li key={a.slug} style={{marginBlock:10}}><a className="news-read" href={`${base}/news/${a.slug}/`}>{a.title}</a></li>)}</ul>
   </details>)}
  </section>}
 </>;
}
