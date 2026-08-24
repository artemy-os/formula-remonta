import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://formularem.ru"),
  title: "Формула ремонта — создание пространства для вашего комфорта",
  description:
    "Дизайн, ремонт и комплектация квартир и домов в Москве и Московской области.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Формула ремонта",
    title: "Формула ремонта — создание пространства для вашего комфорта",
    description:
      "Дизайн, ремонт и комплектация квартир и домов в Москве и Московской области.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Формула ремонта",
  url: "https://formularem.ru/",
  logo: "https://formularem.ru/images/logo-approved-horizontal.png",
  email: "mail@formularem.ru",
  areaServed: ["Москва", "Московская область"],
  description:
    "Дизайн, ремонт и комплектация квартир и домов в Москве и Московской области.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        {children}
      </body>
    </html>
  );
}
