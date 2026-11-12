const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export default function NewsLayout({children}: {children: React.ReactNode}) {
 return <div className="journal"><header className="journal-header"><a href={base+"/"} aria-label="Мастерская ремонта — на главную"><img src={base+"/images/logo-approved-horizontal.png"} alt="Мастерская ремонта" /></a><nav aria-label="Навигация раздела"><a href={base+"/#projects"}>Проекты</a><a href={base+"/news/"}>Новости и практика</a></nav></header>{children}<footer className="journal-footer"><a href={base+"/"}>← На главную</a><span>© 2026 Мастерская ремонта</span></footer></div>;
}
