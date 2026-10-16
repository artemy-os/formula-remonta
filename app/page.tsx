"use client";

import { useState } from "react";

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

const workTypes = [
  {
    number: "01",
    title: "Демонтаж и подготовка",
    items: ["Демонтаж конструкций и отделки", "Вывоз строительного мусора", "Подготовка объекта к работам"],
  },
  {
    number: "02",
    title: "Черновые работы",
    items: ["Возведение перегородок", "Штукатурка и стяжка", "Гидро- и звукоизоляция"],
  },
  {
    number: "03",
    title: "Электромонтаж",
    items: ["Разводка электрики", "Сборка электрощита", "Освещение, розетки и выключатели"],
  },
  {
    number: "04",
    title: "Сантехника",
    items: ["Водоснабжение и канализация", "Отопление и тёплый пол", "Установка сантехнического оборудования"],
  },
  {
    number: "05",
    title: "Чистовая отделка",
    items: ["Покраска и декоративная штукатурка", "Укладка плитки и напольных покрытий", "Монтаж потолков и плинтусов"],
  },
  {
    number: "06",
    title: "Монтаж и комплектация",
    items: ["Установка дверей и освещения", "Монтаж встроенных элементов", "Финальная комплектация объекта"],
  },
];

const projects = [
  {
    category: "В РАБОТЕ",
    title: "ЖК Новое Летово",
    description: "Капитальный ремонт жилого помещения, квартира 46 м², в процессе выполнения. Фотографии и подробности появятся после завершения этапов работ.",
    image: undefined,
    alt: "",
    className: "project-in-progress",
  },
  {
    category: "В РАБОТЕ",
    title: "БЦ АРМА — бьюти-бутик «ЛУНА»",
    description: "Косметический ремонт коммерческого помещения рядом с метро «Курская». Фотографии и подробности появятся после завершения этапов работ.",
    image: undefined,
    alt: "",
    className: "project-in-progress project-in-progress-accent",
  },
  {
    category: "В РАБОТЕ",
    title: "ЖК «Кулик», г. Тула",
    description: "Квартира 37 м². Капитальный ремонт жилого помещения. Начало работ — ноябрь 2026 г.",
    image: undefined,
    alt: "",
    className: "project-in-progress",
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
          <div className="stats">
            <div>
              <strong>Компетенции</strong>
              <span>Команда профессионалов в сфере производства инженерных и ремонтных работ</span>
            </div>
          </div>
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
              <i>↗</i>
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
            <article className="work-type-card" key={work.number}>
              <span>{work.number}</span>
              <h3>{work.title}</h3>
              <ul>
                {work.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
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
            Объекты, над которыми наша команда работает сейчас.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className ?? ""}`} key={project.title}>
              {project.image && <img src={assetPath(project.image)} alt={project.alt} />}
              <div className="project-overlay">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
            </article>
          ))}
        </div>
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

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Мастерская ремонта — наверх">
          <BrandLogo />
        </a>
        <p>Создаём пространство для вашего комфорта.</p>
        <div>
          <a href="#services">Услуги</a>
          <a href="#projects">Проекты</a>
        </div>
        <span>© 2026 Мастерская ремонта</span>
      </footer>
    </main>
  );
}
