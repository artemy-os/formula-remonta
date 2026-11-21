import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/en/", languages: { ru: "/", en: "/en/", "x-default": "/" } },
};

export default function EnglishHomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
