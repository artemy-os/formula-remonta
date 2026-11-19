"use client";

import { useState } from "react";
import NewsCards from "./news/NewsCards";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetPath(path: string) {
  return `${basePath}${path}`;
}

const services = [
  {
    number: "01",
    title: "Ремонт квартир и апартаментов",
    text: "Полный цикл работ — от демонтажа и инженерии до чистовой отделки.",
  },
  {
    number: "02",
    title: "Ремонт домов и коттеджей",
    text: "Продуманная реализация интерьера с учётом особенностей загородного дома.",
  },
  {
    number: "03",
    title: "Дизайн и проектирование",
    text: "Планировка, рабочая документация и визуальная система будущего пространства.",
  },
  {
    number: "04",
    title: "Комплектация, контроль, сопровождение объекта",
    text: "Материалы, подрядчики и качество исполнения под единым управлением.",
  },
];

const processSteps = [
  ["01", "Обсуждение проекта", "Определяем задачи, объём работ и ваши ожидания."],
  ["02", "Расчёт", "Фиксируем состав работ и прозрачную смету."],
  ["03", "Реализация", "Организуем стройку и контролируем каждый этап."],
  ["04", "Результат", "Сдаём чистое, готовое к жизни пространство."],
];

const clients = [
  {
    "name": "Authentica",
    "logo": "/images/clients/authentica.jpeg",
    "href": "https://www.authentica.ru"
  },
  {
    "name": "На свежую голову",
    "logo": "/images/clients/na-svezhuyu-golovu.jpeg",
    "href": "https://nasvezhuyugolovu.ru/"
  },
  {
    "name": "Goga Nikabadze",
    "logo": "/images/clients/goga-nikabadze.jpeg",
    "href": "https://goga-nikabadze.com/ru/photo-stories"
  },
  { name: "Аэротовары", logo: "/images/clients/aerotovary.jpeg", href: "https://aerotovary.ru/" },
  { name: "ASAP Production", logo: "/images/clients/asap-production.jpeg", href: "https://asapproduction.tv/" },
  { name: "BIZMONT", logo: "/images/clients/bizmont.jpeg", href: "https://bizmont.ru/" }
];

const workTypes = [{"number":"01","title":"Демонтаж и подготовка","items":["Демонтаж конструкций и отделки","Вывоз строительного мусора","Подготовка объекта к работам"],"slug":"demontazh","details":["Демонтаж конструкций и отделки","Вывоз строительного мусора","Подготовка объекта к работам","Снятие обоев и старых покрытий","Демонтаж плитки и полов","Укрытие сохраняемых поверхностей","Упаковка и вынос мусора"]},{"number":"02","title":"Черновые работы","items":["Возведение перегородок","Штукатурка и стяжка","Гидро- и звукоизоляция"],"slug":"chernovye-raboty","details":["Возведение перегородок","Штукатурка и стяжка","Гидро- и звукоизоляция","Монтаж каркасных облицовок","Выравнивание стен и откосов","Устройство сборных оснований пола","Подготовка под чистовую отделку"]},{"number":"03","title":"Электромонтаж","items":["Разводка электрики","Сборка электрощита","Освещение, розетки и выключатели"],"slug":"elektromontazh","details":["Разводка электрики","Сборка электрощита","Освещение, розетки и выключатели","Монтаж подрозетников и коробок","Подключение оборудования","Прокладка слаботочных линий","Проверка работоспособности"]},{"number":"04","title":"Сантехника и водоснабжение","items":["Водоснабжение и канализация","Отопление и тёплый пол","Установка сантехнического оборудования"],"slug":"santekhnika","details":["Водоснабжение и канализация","Отопление и тёплый пол","Установка сантехнического оборудования","Монтаж коллекторов и запорной арматуры","Установка фильтров","Монтаж инсталляций","Монтаж смесителей и сифонов","Проверка герметичности"]},{"number":"05","title":"Чистовая отделка","items":["Покраска и декоративная штукатурка","Укладка плитки и напольных покрытий","Монтаж потолков и плинтусов"],"slug":"chistovaya-otdelka","details":["Покраска и декоративная штукатурка","Укладка плитки и напольных покрытий","Монтаж потолков и плинтусов","Шпаклевание и шлифование","Грунтование","Оклейка обоями","Затирка и герметизация примыканий","Отделка откосов"]},{"number":"06","title":"Монтаж и комплектация","items":["Установка дверей и освещения","Монтаж встроенных элементов","Финальная комплектация объекта"],"slug":"montazh-komplektatsiya","details":["Установка дверей и освещения","Монтаж встроенных элементов","Финальная комплектация объекта","Установка карнизов и зеркал","Монтаж ревизионных люков","Установка кронштейнов и аксессуаров","Регулировка фурнитуры","Финальная проверка объекта"]}];

const currentProjects: { slug: string; category: string; title: string; description: string; image?: string; alt: string; className: string }[] = [
  {
    slug: "novoe-letovo",
    category: "В РАБОТЕ",
    title: "ЖК Новое Летово",
    description: "Капитальный ремонт жилого помещения, квартира 46 м², в процессе выполнения. Фотографии и подробности появятся после завершения этапов работ.",
    image: undefined,
    alt: "",
    className: "project-in-progress",
  },
  {
    slug: "luna",
    category: "В РАБОТЕ",
    title: "БЦ АРМА — бьюти-бутик «ЛУНА»",
    description: "Косметический ремонт коммерческого помещения рядом с метро «Курская».",
    image: "/images/luna/interior.jpg",
    alt: "Интерьер бьюти-бутика ЛУНА в БЦ АРМА",
    className: "",
  },
  {
    slug: "kulik-tula",
    category: "В РАБОТЕ",
    title: "ЖК «Кулик», г. Тула",
    description: "Квартира 37 м². Капитальный ремонт жилого помещения. Начало работ — ноябрь 2026 г.",
    image: undefined,
    alt: "",
    className: "project-in-progress",
  },
];

const completedProjects: (Omit<(typeof currentProjects)[number], "image"> & { image?: string })[] = [
  {
    slug: "bessovestno-talantlivy",
    category: "ЗАВЕРШЁН · 2019",
    title: "Университет «Бессовестно Талантливый» — БЦ Арма",
    description: "«Университет Бессовестно Талантливый» — это флагманский образовательный проект и площадка для повышения квалификации мастеров бьюти-индустрии.",
    image: "/images/university/logo.jpg",
    alt: "Логотип Университета Бессовестно Талантливый",
    className: "project-brand-cover",
  },
  {
    slug: "goga-nikabadze",
    category: "ЗАВЕРШЁН · 09.2025",
    title: "Goga Nikabadze — Бутик, Винзавод",
    description: "Косметический ремонт бутика Goga Nikabadze на Винзаводе.",
    image: "/images/goga-nikabadze/interior.jpg",
    alt: "Интерьер бутика Goga Nikabadze на Винзаводе",
    className: "",
  },
  {
    slug: "istra",
    category: "ЗАВЕРШЁН · 11.2026",
    title: "г. Истра — Загородный дом",
    description: "Косметический ремонт загородного дома. Завершение текущих ремонтных работ, комплектация и финальная отделка интерьеров.",
    image: "/images/istra/living-room.jpeg",
    alt: "Гостиная и кухня загородного дома в Истре после ремонта",
    className: "",
  },
];

function BrandLogo() {
  return (
    <img
      className="brand-original"
      src={assetPath("/images/logo-approved-horizontal.png")}
      alt=""
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Мастерская ремонта — на главную">
          <BrandLogo />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Основная навигация">
          <a href="#about" onClick={() => setMenuOpen(false)}>О компании</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
          <a href="#work-types" onClick={() => setMenuOpen(false)}>Виды работ</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Реализация</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Процесс</a>
          <a href={assetPath("/news/")}>Журнал</a>
        </nav>

        <a className="header-cta" href="#services">Наши услуги</a>
      </header>

      <section className="hero" id="top">
        <img src={assetPath("/images/hero-interior-clean.png")} alt="Современный интерьер гостиной" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">ТОЧНОСТЬ · НАДЁЖНОСТЬ · КОМФОРТ</p>
          <h1>Создание пространства<br />для вашего комфорта</h1>
          <p className="hero-copy">
            Продумываем ремонт как точную формулу: задача, решение, контроль и
            предсказуемый результат.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#services">Наши услуги</a>
            <a className="text-link light-link" href="#process">Как мы работаем <span>↓</span></a>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Перейти к разделу о компании">
          <span>ЛИСТАЙТЕ</span>
          <i>↓</i>
        </a>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="eyebrow">О КОМПАНИИ</p>
          <h2>Ремонт, в котором<br />всё сходится</h2>
        </div>
        <div className="about-copy">
          <p>
            Реализуем ремонт любого уровня сложности. Остаёмся рядом на каждом
            этапе — от первого замера до готового пространства.
          </p>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">УСЛУГИ</p>
          <h2>Один подрядчик.<br />Весь результат.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <i aria-hidden="true"><svg viewBox="0 0 270 210" width="1em" height="1em" style={{display:"block"}}><path fill="currentColor" d="M0 70h52v96h218v44H0zM78 0h52v146H78z"/><path fill="#B29370" d="M198 18h72v72h-72z"/></svg></i>
            </article>
          ))}
        </div>
      </section>

      <section className="work-types" id="work-types">
        <div className="work-types-head">
          <div>
            <p className="eyebrow">ВИДЫ РАБОТ</p>
            <h2>Всё необходимое<br />для готового пространства</h2>
          </div>
          <p>
            Выполняем полный комплекс ремонтных работ. Состав фиксируем в смете,
            а этапы выстраиваем в понятной последовательности.
          </p>
        </div>

        <div className="work-types-grid">
          {workTypes.map((work) => (
            <a href={assetPath(`/work-types/${work.slug}/`)} className="work-type-card work-type-link" key={work.number}>
              <span>{work.number}</span><img className="work-type-illustration" src={assetPath(`/images/work-types/${work.slug}.svg`)} alt="" loading="lazy" />
              <h3>{work.title}</h3>
              <ul>
                {work.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            <p className="work-more">Подробный перечень{" "}<svg className="work-brand-icon" aria-hidden="true" viewBox="0 0 270 210" width="16" height="16"><path fill="currentColor" d="M0 70h52v96h218v44H0zM78 0h52v146H78z"/><path fill="#B29370" d="M198 18h72v72h-72z"/></svg></p></a>
          ))}
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-head">
          <div>
            <p className="eyebrow">РЕАЛИЗАЦИЯ</p>
            <h2 id="projects-title">Проекты</h2>
          </div>
          <p className="projects-copy">
            Текущие и завершённые объекты нашей команды.
          </p>
        </div>
        <div className="projects-group">
          <h3 className="projects-group-title">В работе</h3>
          <div className="project-grid">
            {currentProjects.map((project) => (
              <a href={assetPath(`/projects/${project.slug}/`)} aria-label={`Подробнее о проекте ${project.title}`} className={`project-card ${project.className ?? ""}`} key={project.title}>
                {project.image && <img src={assetPath(project.image)} alt={project.alt} />}
                <div className="project-overlay">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="projects-group projects-group-completed">
          <h3 className="projects-group-title">Завершённые</h3>
          <div className="project-grid">
            {completedProjects.map((project) => (
              <a href={assetPath(`/projects/${project.slug}/`)} aria-label={`Подробнее о проекте ${project.title}`} className={`project-card ${project.className ?? ""}`} key={project.title}>
                {project.image && <img src={assetPath(project.image)} alt={project.alt} />}
                <div className="project-overlay">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <p style={{ marginTop: "40px", paddingTop: "28px", borderTop: "1px solid #d7d7d3", maxWidth: "850px", color: "#555", fontSize: "20px", fontWeight: 700, lineHeight: 1.6 }}>Мастерская ремонта непрерывно осуществляет сервисное и техническое обслуживание пространства своих клиентов.</p>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">ПРОЦЕСС</p>
          <h2>Понятный путь<br />к готовому интерьеру</h2>
        </div>
        <div className="process-grid">
          {processSteps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section news-home" id="news"><div className="news-section-heading"><div><p className="eyebrow">ЖУРНАЛ МАСТЕРСКОЙ</p><h2>Новости и практика</h2></div><a className="news-read" href={assetPath("/news/")}>Все публикации ↗</a></div><NewsCards limit={3} /></section>

      <section className="visual-showcase">
        <img src={assetPath("/images/project-bathroom-finished.png")} alt="Интерьер ванной комнаты с декоративной штукатуркой, линейным сливным трапом и ванной с переливом" />
      </section>

      <section className="estimate" aria-labelledby="consultation-title">
        <div className="estimate-intro">
          <p className="eyebrow">ПЛАНИРОВАНИЕ РЕМОНТА</p>
          <h2 id="consultation-title">Продуманный подход<br />к каждому объекту</h2>
          <p>
            На сайте временно не принимаются заявки и не собираются персональные
            данные. Информация об услугах обновляется.
          </p>
          <div className="contact-note">
            <span>ГЕОГРАФИЯ РАБОТ</span>
            <strong>Москва и Московская область</strong>
          </div>
        </div>
      </section>

      <section className="section" id="clients" aria-labelledby="clients-title">
        <div className="section-heading">
          <h2 id="clients-title">Наши клиенты</h2>
        </div>
        {clients.length ? (
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px, 2vw, 24px)", padding: 0, margin: 0, listStyle: "none" }}>
            {clients.map(({ name, logo, href }) => (
              <li key={name}>
                <a href={href} aria-label={name} title={name} style={{ display: "grid", placeItems: "center", width: "clamp(52px, 17vw, 112px)", height: "52px" }}>
                  {logo ? <img src={assetPath(logo)} alt="" loading="lazy" style={{ width: "100%", height: "44px", objectFit: "contain" }} /> : name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Здесь появятся компании, для которых мы выполняли работы.</p>
        )}
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Мастерская ремонта — наверх">
          <BrandLogo />
        </a>
        <p>Создаём пространство для вашего комфорта.</p>
        <div>
          <a href="#services">Услуги</a>
          <a href="#projects">Проекты</a>
          <a href={assetPath("/news/")}>Новости и практика</a>
        </div>
        <span>© 2026 Мастерская ремонта</span>
      </footer>
    </main>
  );
}
