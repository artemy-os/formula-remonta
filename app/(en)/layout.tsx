import type { Metadata } from "next";
import "../globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata: Metadata = {
  metadataBase: new URL("https://master-rem.com"),
  title: "Masterskaya Remonta — Design and renovation in Moscow",
  description: "Design, renovation and fit-out for apartments, houses and commercial spaces in Moscow and the Moscow Region.",
  icons: { icon: base + "/workshop-icon.svg" },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
