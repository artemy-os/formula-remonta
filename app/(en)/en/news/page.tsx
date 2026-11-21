import type { Metadata } from "next";
import JournalTitle from "../../../JournalTitle";
import NewsCards from "./NewsCards";

export const metadata: Metadata = {
  title: "Building & Renovation — Masterskaya Remonta",
  description: "Materials, tools and lessons from our renovation projects.",
  alternates: { canonical: "/en/news/", languages: { ru: "/news/", en: "/en/news/" } },
};

export default function BlogPage() {
  return <main className="journal-main">
    <div className="journal-intro">
      <p className="eyebrow">THE WORKSHOP BLOG</p>
      <JournalTitle english />
      <p>Materials, tools and practical ideas for creating comfortable spaces. We explain renovation through real examples.</p>
    </div>
    <NewsCards archive />
  </main>;
}
