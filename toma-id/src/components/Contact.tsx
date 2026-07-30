export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-12 bg-foreground text-background scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Label */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in-up delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xs font-bold tracking-wider text-background">CONTACT</span>
            </div>
          </div>

          {/* Right: Contact Content */}
          <div className="lg:col-span-9 space-y-12 opacity-0 animate-fade-in-up delay-200">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                LET'S BUILD<br />SOMETHING<br />TOGETHER.
              </h2>
              <p className="text-lg text-background/70 max-w-2xl leading-relaxed">
                Available for new projects, collaborations, and creative consultations. Whether you need an original screenplay, script editing, or narrative development—get in touch.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <a
                href="mailto:hello@tomaid.com"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity"
                data-testid="button-email"
              >
                hello@tomaid.com
              </a>

              <div className="text-sm text-background/50 space-y-2">
                <p>Available for international projects</p>
                <p>Remote and on-location collaboration</p>
                <p>Russian / English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
