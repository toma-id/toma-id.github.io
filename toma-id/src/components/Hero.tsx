export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Headline and CTAs */}
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                FILM WRITER.<br />
                BUILDING WORLDS<br />
                THROUGH WORDS.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                I write screenplays for film. Currently, seven films based on my scripts are in production. I work as sole author and co-writer, specializing in world-building, intricate lore, and dialogue that feels alive.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity"
                data-testid="button-hero-contact"
              >
                GET IN TOUCH
              </button>
              <button
                onClick={scrollToWork}
                className="px-8 py-4 border border-foreground text-sm font-bold hover:bg-foreground hover:text-background transition-colors"
                data-testid="button-hero-work"
              >
                VIEW WORK
              </button>
            </div>
          </div>

          {/* Right: Featured Visual Element */}
          <div className="opacity-0 animate-fade-in-up delay-200">
            <div className="border-2 border-foreground p-8 lg:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary"></div>
                <span className="text-xs font-bold tracking-wider">CURRENTLY ACTIVE</span>
              </div>
              <div className="space-y-2">
                <div className="text-6xl lg:text-8xl font-bold">07</div>
                <div className="text-xl lg:text-2xl">FILMS IN<br />PRODUCTION</div>
              </div>
              <div className="pt-4 border-t border-foreground">
                <div className="text-sm text-muted-foreground">
                  Languages: Russian / English
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
