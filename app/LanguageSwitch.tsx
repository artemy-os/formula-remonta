const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function LanguageSwitch({ english = false }: { english?: boolean }) {
  return (
    <div className="language-switch" role="group" aria-label={english ? "Language" : "Язык сайта"}>
      {english ? <a href={basePath + "/"} hrefLang="ru" lang="ru" aria-label="Русский">RU</a> : <span aria-current="true">RU</span>}
      <span className="language-divider" aria-hidden="true">/</span>
      {english ? <span aria-current="true">EN</span> : <a href={basePath + "/en/"} hrefLang="en" lang="en" aria-label="English">EN</a>}
    </div>
  );
}
