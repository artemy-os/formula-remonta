import type { Metadata } from "next";
import NewsCards from "./NewsCards";

export const metadata: Metadata = {
  title: "Building & Renovation — Masterskaya Remonta",
  description: "Materials, tools and lessons from our renovation projects.",
  alternates: { canonical: "/en/news/", languages: { ru: "/news/", en: "/en/news/" } },
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export default function BlogPage() {
  return <main className="journal-main">
    <div className="journal-intro">
      <p className="eyebrow">THE WORKSHOP BLOG</p>
      <div style={{display:"flex", alignItems:"flex-end", gap:".25rem"}}>
        <h1>Building &amp; Renovation</h1>
        <img src={base + "/images/worker_small.webp"} alt="" width={76} height={114} style={{width:"clamp(46px,10vw,76px)",height:"auto",flexShrink:0}} />
      </div>
      <p>Materials, tools and practical ideas for creating comfortable spaces. We explain renovation through real examples.</p>
    </div>
    <NewsCards archive />
  </main>;
}
