export function InProduction() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Label */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in-up delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs font-bold tracking-wider">IN PRODUCTION</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-9 space-y-12 opacity-0 animate-fade-in-up delay-200">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                SEVEN FILMS CURRENTLY IN PRODUCTION
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                My screenplays are being developed by production companies across multiple territories. Each project represents a unique narrative universe, from intimate character studies to expansive genre work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="border border-foreground p-8 space-y-4 hover:border-primary transition-colors">
                <div className="text-6xl font-bold">07</div>
                <div className="text-sm font-bold">ACTIVE PRODUCTIONS</div>
                <div className="text-sm text-muted-foreground">
                  Feature films at various stages of development and pre-production
                </div>
              </div>

              <div className="border border-foreground p-8 space-y-4 hover:border-primary transition-colors">
                <div className="text-6xl font-bold">02</div>
                <div className="text-sm font-bold">LANGUAGES</div>
                <div className="text-sm text-muted-foreground">
                  Russian and English language projects for international markets
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
