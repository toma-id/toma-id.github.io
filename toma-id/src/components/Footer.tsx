export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <div className="text-lg font-bold">TOMA ID</div>
            <div className="text-sm text-muted-foreground">Film Writer</div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm">
            <a
              href="mailto:hello@tomaid.com"
              className="hover:text-primary transition-colors"
              data-testid="link-footer-email"
            >
              hello@tomaid.com
            </a>
            <div className="text-muted-foreground">
              © {currentYear} Toma ID. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
