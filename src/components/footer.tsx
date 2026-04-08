import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z" />
    </svg>
  );
}

const shopLinks = [
  { label: "Shop All", href: "#" },
  { label: "The Science", href: "/science" },
  { label: "Our Ethos", href: "#" },
  { label: "Herbal Index", href: "#" },
];

const supportLinks = [
  { label: "FAQs", href: "#" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Contact Us", href: "mailto:hello@brainfuel.com" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 md:gap-16">
          {/* Wordmark */}
          <div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none">
              BRAIN
              <br />
              FUEL
            </h2>
          </div>

          {/* Shop links */}
          <div className="flex flex-col gap-3">
            {shopLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Support links */}
          <div className="flex flex-col gap-3">
            {supportLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social + disclaimer */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Instagram">
                <InstagramIcon className="size-5 hover:opacity-70 transition-opacity" />
              </Link>
              <Link href="#" aria-label="TikTok">
                <TikTokIcon className="size-5 hover:opacity-70 transition-opacity" />
              </Link>
            </div>
            <p className="text-xs text-white/60 max-w-xs leading-relaxed">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link
            href="#"
            className="text-xs text-white/60 hover:text-white transition-colors"
          >
            Privacy &amp; Cookies Policy
          </Link>
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          <Link
            href="#"
            className="text-xs text-white/60 hover:text-white transition-colors"
          >
            Accessibility Statement
          </Link>
        </div>
      </div>
    </footer>
  );
}
