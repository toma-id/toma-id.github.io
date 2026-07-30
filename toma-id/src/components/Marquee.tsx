export function Marquee() {
  const tags = [
    'SCREENPLAY',
    'WORLD-BUILDING',
    'DIALOGUE',
    'SCRIPT EDITING',
    'CREATIVE CONSULTATION',
    'LORE DEVELOPMENT',
    'CONTEMPORARY ART',
    'CONCEPT DEVELOPMENT',
  ];

  // Duplicate for seamless loop
  const allTags = [...tags, ...tags];

  return (
    <div className="border-y border-foreground bg-foreground text-background py-6 overflow-hidden opacity-0 animate-fade-in-up delay-300">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {allTags.map((tag, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-sm font-bold tracking-wider">{tag}</span>
            <div className="w-2 h-2 bg-primary"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
