import Image from "next/image";
import Link from "next/link";

import jay_decor_logo from "@/public/Jay-decor-logo.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const productLinks = [
  { label: "Awnings", href: "/products/awnings" },
  { label: "Floorings", href: "/products/floorings" },
  { label: "Blinds", href: "/products/blinds" },
  { label: "Wall Panels", href: "/products/wall-panels" },
  { label: "Wallpapers", href: "/products/wallpapers" },
  { label: "Carpet Tiles", href: "/products/carpet-tiles" },
  { label: "Laser Cutting", href: "/products/laser-cuttings" },
  { label: "Artificial Turf", href: "/products/artifical-turf" },
  { label: "Glass Films", href: "/products/glass-films" },
  { label: "Stretch Ceiling", href: "/products/stretch-ceiling" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mid = Math.ceil(productLinks.length / 2);
  const productCol1 = productLinks.slice(0, mid);
  const productCol2 = productLinks.slice(mid);

  return (
    <footer
      aria-label="Site footer"
      className="w-full bg-primary/80 pt-10 md:pt-16"
    >
      <div className="w-[90%] md:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src={jay_decor_logo}
            alt="Jay Decor logo"
            height={60}
            className="h-12 w-auto md:h-20 bg-white px-2 py-2 rounded-2xl"
          />
          <p className="text-sm mt-4 leading-relaxed pr-0 md:pr-10 text-secondary/80">
            One-stop solution for interior and exterior design — Residential,
            Commercial & Hospitality projects since 2007.
          </p>

          <div className="grid grid-cols-1 text-secondary/80">
            <a
              href="https://www.instagram.com/jaydecorindia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Jay Decor on Instagram"
              className="inline-flex items-center gap-2 mt-4 text-sm hover:underline"
            >
              <BsInstagram size={18} aria-hidden="true" />
              @jaydecorindia
            </a>
            <a
              href="https://www.facebook.com/jaydecorindia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Jay Decor on Instagram"
              className="inline-flex items-center gap-2 mt-4 text-sm hover:underline"
            >
              <BsFacebook size={18} aria-hidden="true" />
              @jaydecorindia
            </a>
          </div>
        </div>

        <nav aria-label="Our products">
          <h2 className="text-secondary text-base font-semibold mb-3">
            Our Products
          </h2>
          <div className="grid grid-cols-2 gap-x-4 text-sm text-secondary/80 italic">
            <ul className="space-y-2">
              {productCol1.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {productCol2.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <address className="not-italic text-sm leading-relaxed">
          <h2 className="text-secondary text-base font-semibold mb-3">
            Contact Us
          </h2>
          <p className="text-secondary/80">
            Shop No.4, Shreeram Complex,
            <br />
            Next To HDFC Home Loans,
            <br />
            Tirupati Nagar Phase 1, Virar (W)
          </p>
          <p className="mt-3 text-secondary/80">
            <a href="tel:+919029070700" className="hover:underline">
              +91 90290 70700
            </a>
          </p>
          <p className="text-secondary/80">
            <a href="mailto:jaydecor@gmail.com" className="hover:underline">
              jaydecor@gmail.com
            </a>
          </p>
        </address>
      </div>

      <div className="border-t border-secondary/30 text-secondary mt-10 py-4">
        <p className="text-center font-medium text-xs sm:text-sm">
          © {currentYear} Jay Decor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
