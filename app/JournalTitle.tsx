const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function JournalTitle({ english = false, level = "h1" }: { english?: boolean; level?: "h1" | "h2" }) {
  const Heading = level;
  const mascot = <img className="journal-mascot" src={basePath + "/images/worker_small.webp"} alt="" width={105} height={179} />;
  return (
    <Heading className={english ? "journal-title" : "journal-title journal-title-ru"}>
      {english ? <>Building &amp;<br /> <span className="journal-title-word">Renovation{mascot}</span></> :
        <><span className="journal-title-word journal-title-word-first">Строительные{mascot}</span><br /> будни</>}
    </Heading>
  );
}
