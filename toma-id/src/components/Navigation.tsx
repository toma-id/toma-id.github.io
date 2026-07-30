import { Link } from 'wouter';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-base lg:text-lg font-bold hover:opacity-70 transition-opacity"
            data-testid="link-home"
          >
            TOMA ID
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm hover:text-primary transition-colors"
              data-testid="button-nav-work"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm hover:text-primary transition-colors"
              data-testid="button-nav-about"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm hover:text-primary transition-colors"
              data-testid="button-nav-contact"
            >
              CONTACT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity"
              data-testid="button-cta-header"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sm"
            data-testid="button-mobile-menu"
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left text-sm hover:text-primary transition-colors"
              data-testid="button-mobile-nav-work"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-sm hover:text-primary transition-colors"
              data-testid="button-mobile-nav-about"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-sm hover:text-primary transition-colors"
              data-testid="button-mobile-nav-contact"
            >
              CONTACT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-4 py-2 bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity"
              data-testid="button-mobile-cta"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
