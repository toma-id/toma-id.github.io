export function Services() {
  const services = [
    {
      number: '01',
      title: 'Original Screenplay',
      description: 'Solo and co-written feature film scripts, from concept to final draft.',
    },
    {
      number: '02',
      title: 'Script Editing',
      description: 'Structural analysis, character development, dialogue refinement.',
    },
    {
      number: '03',
      title: 'Creative Consultation',
      description: 'Story development, narrative problem-solving, creative direction.',
    },
    {
      number: '04',
      title: 'World-Building & Lore',
      description: 'Immersive universes, internal consistency, rich backstories.',
    },
    {
      number: '05',
      title: 'Dialogue Writing',
      description: 'Character-specific voices, naturalistic exchanges, subtext.',
    },
  ];

  return (
    <section id="work" className="py-20 lg:py-32 px-6 lg:px-12 bg-muted scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Label */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in-up delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs font-bold tracking-wider">SERVICES</span>
            </div>
          </div>

          {/* Right: Services Grid */}
          <div className="lg:col-span-9 space-y-0">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="border-t border-foreground py-8 grid md:grid-cols-12 gap-6 opacity-0 animate-fade-in-up hover:bg-background transition-colors group"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
                data-testid={`service-${service.number}`}
              >
                <div className="md:col-span-2 text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {service.number}
                </div>
                <div className="md:col-span-4 text-xl md:text-2xl font-bold">
                  {service.title}
                </div>
                <div className="md:col-span-6 text-muted-foreground">
                  {service.description}
                </div>
              </div>
            ))}
            <div className="border-t border-foreground opacity-0 animate-fade-in-up delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
