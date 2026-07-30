export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Label */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in-up delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs font-bold tracking-wider">ABOUT</span>
            </div>
          </div>

          {/* Right: Bio Content */}
          <div className="lg:col-span-9 space-y-8 opacity-0 animate-fade-in-up delay-200">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              I LOVE BUILDING NEW WORLDS, DEVELOPING INTRICATE LORE, AND WRITING DIALOGUE THAT FEELS ALIVE.
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Currently, seven films based on my scripts are in production. I work as sole author and co-writer, bringing stories to life through precise character development and immersive world-building.
              </p>
              <p>
                I also do script editing and creative consultations, helping filmmakers refine their narratives and strengthen their storytelling.
              </p>
              <p>
                Extensive background in contemporary art and concept development informs my approach to screenwriting—treating each script as a creative artifact with its own internal logic and aesthetic.
              </p>
              <p className="font-bold text-foreground">
                BA in Arts & Creative Writing.<br />
                Languages: Russian / English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
