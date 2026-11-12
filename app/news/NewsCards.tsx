import { articles } from "./data";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export default function NewsCards({limit = articles.length}: {limit?: number}) {
 return <div className="news-grid">{articles.slice(0,limit).map(a => <a className="news-card" href={`${base}/news/${a.slug}/`} key={a.slug}>
  <div className="news-card-photo"><img src={base+a.image} alt={a.imageAlt} loading="lazy" /></div>
  <div className="news-card-copy"><div className="news-meta"><span>{a.category}</span><time dateTime={a.date}>{a.dateLabel}</time></div><h3>{a.title}</h3><p>{a.excerpt}</p><span className="news-read">Читать материал ↗</span></div>
 </a>)}</div>;
}
