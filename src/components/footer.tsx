import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ],
  Services: [
    { href: "/services", label: "Branding" },
    { href: "/services", label: "Web Design" },
    { href: "/services", label: "Development" },
    { href: "/services", label: "Marketing" },
  ],
  Connect: [
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "LinkedIn" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Prism Studio</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We craft bold brands, stunning websites, and campaigns that move
              people. Let&apos;s create something extraordinary together.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Start a project <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Prism Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
