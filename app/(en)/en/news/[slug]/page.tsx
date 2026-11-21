import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "../data";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map(({slug}) => ({slug}));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) return {};
  const ru = `/news/${slug}/`, en = "/en" + ru;
  return {
    title: article.title + " — Masterskaya Remonta",
    description: article.excerpt,
    alternates: { canonical: en, languages: { ru, en } },
    openGraph: { type: "article", locale: "en_GB", title: article.title, description: article.excerpt, url: en, publishedTime: article.date, images: [{url:article.image,alt:article.imageAlt}] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const {slug} = await params;
  const a = articles.find(item => item.slug === slug);
  if (!a) notFound();
  return <main className="journal-main"><article>
    <header className="article-heading">
      <a className="news-back" href={base + "/en/news/"}>← All articles</a>
      <div className="news-meta"><span>{a.category}</span><time dateTime={a.date}>{a.dateLabel}</time><span>{a.readingTime}</span><a href={base + "/news/" + slug + "/"} hrefLang="ru" lang="ru">Читать по-русски</a></div>
      <h1>{a.title}</h1>
      {a.subtitle && <p><strong>{a.subtitle}</strong></p>}
      <p>{a.excerpt}</p>
    </header>
    <figure className="article-figure"><img src={base + a.image} alt={a.imageAlt} /></figure>
    {slug === "pryamotochny-sifon" && <figure className="article-figure"><img src={base + "/images/news/siphon-2.jpeg"} alt="Another view of the tubular trap connection under the basin" loading="lazy" /></figure>}
    <div className="article-body">
      {a.sections.map(({title,text}) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
      <aside className="article-source">
        <h2>Source</h2><a href={a.source.url} target="_blank" rel="noopener noreferrer">{a.source.label} ↗</a>
        {slug === "archeform-bim-1-1" && <p><a href="https://aecmag.com/bim/sketchup-add-on-brings-bim-to-smaller-practices/" target="_blank" rel="noopener noreferrer">AEC Magazine article, 13 November 2026 ↗</a><br/><a href="https://archeform.eu/" target="_blank" rel="noopener noreferrer">Archeform features and export options ↗</a></p>}
      {slug === "kak-ne-prosverlit-trubu-ili-kabel" && <p><a href="https://www.energynetworks.org/assets/images/2026/260216electrical-safety-guidance-for-home-owners-and-occupiers-v14.pdf" target="_blank" rel="noopener noreferrer">Energy Networks Association — working safely near concealed wiring ↗</a><br/><a href="https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/electrical-safety-after-a-flood/" target="_blank" rel="noopener noreferrer">Electrical Safety First — water and electrical equipment ↗</a><br/><a href="https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/your-home/frozen-or-burst-pipes" target="_blank" rel="noopener noreferrer">Met Office — what to do if a pipe bursts ↗</a></p>}
      </aside>
      {a.slug === "kak-ne-prosverlit-trubu-ili-kabel" && <a className="news-project" href={base + "/en/news/remont-otverstiya-ppr-truby/"}>How an accidentally drilled pipe is repaired ↗</a>}
      {slug === "rozetka-v-polu" && <a className="news-project" href={base + "/en/projects/istra/"}>View the Istra country house project ↗</a>}
    </div>
  </article></main>;
}
