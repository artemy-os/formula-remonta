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
      <div className="journal-title">
        <h1>Building &amp;<br /> <span className="journal-title-word">Renovation<img src={base + "/images/worker_small.webp"} alt="" width={105} height={179} /></span></h1>
      </div>
      <p>Materials, tools and practical ideas for creating comfortable spaces. We explain renovation through real examples.</p>
    </div>
    <NewsCards archive />
  </main>;
}
