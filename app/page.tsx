"use client";

import { FormEvent, useState } from "react";

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
  ["01", "Заявка", "Обсуждаем объект, задачи и ваши ожидания."],
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
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("_subject", "Новая заявка с сайта «Формула ремонта»");
    formData.append("_template", "table");
    formData.append("_url", window.location.href);

    setSending(true);
    setSendError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mail@formularem.ru", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSent(true);
    } catch {
      setSendError(
        "Не удалось отправить заявку. Попробуйте ещё раз или напишите нам на mail@formularem.ru.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Формула ремонта — на главную">
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
          <a href="#process" onClick={() => setMenuOpen(false)}>Процесс</a>
        </nav>

        <a className="header-cta" href="#estimate">Рассчитать стоимость</a>
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
            <a className="button button-light" href="#estimate">Рассчитать стоимость</a>
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

      <section className="estimate" id="estimate">
        <div className="estimate-intro">
          <p className="eyebrow">НАЧАТЬ ПРОЕКТ</p>
          <h2>Получите формулу<br />вашего ремонта</h2>
          <p>
            Расскажите немного об объекте. Мы свяжемся с вами, уточним детали и
            подготовим предварительный расчёт.
          </p>
          <div className="contact-note">
            <span>РАБОТАЕМ</span>
            <strong>Москва и Московская область</strong>
            <a className="contact-email" href="mailto:mail@formularem.ru">mail@formularem.ru</a>
          </div>
        </div>

        {sent ? (
          <div className="success-message" role="status">
            <span>✓</span>
            <h3>Заявка отправлена</h3>
            <p>
              Спасибо! Мы получили ваши данные и свяжемся с вами, чтобы уточнить
              детали проекта.
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setSendError("");
              }}
            >
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <form onSubmit={submitEstimate}>
            <label className="honeypot" aria-hidden="true">
              <span>Не заполняйте это поле</span>
              <input name="_honey" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              <span>Ваше имя</span>
              <input name="Имя" required placeholder="Как к вам обращаться" />
            </label>
            <label>
              <span>Телефон</span>
              <input name="Телефон" required inputMode="tel" placeholder="+7 999 000-00-00" />
            </label>
            <div className="form-row">
              <label>
                <span>Площадь, м²</span>
                <input name="Площадь" inputMode="numeric" placeholder="72" />
              </label>
              <label>
                <span>Тип объекта</span>
                <select name="Тип объекта" defaultValue="">
                  <option value="" disabled>Выберите</option>
                  <option>Квартира</option>
                  <option>Дом</option>
                  <option>Коммерческое помещение</option>
                </select>
              </label>
            </div>
            <label>
              <span>Комментарий</span>
              <textarea name="Комментарий" rows={3} placeholder="Коротко о задаче" />
            </label>
            <button className="button button-dark" type="submit" disabled={sending}>
              {sending ? "Отправляем…" : "Получить расчёт"}
            </button>
            {sendError && <p className="form-error" role="alert">{sendError}</p>}
            <p className="privacy">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
          </form>
        )}
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Формула ремонта — наверх">
          <BrandLogo />
        </a>
        <p>Создаём пространство для вашего комфорта.</p>
        <div>
          <a href="#services">Услуги</a>
          <a href="mailto:mail@formularem.ru">mail@formularem.ru</a>
        </div>
        <span>© 2026 Формула ремонта</span>
      </footer>
    </main>
  );
}
