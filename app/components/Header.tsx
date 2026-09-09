"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import jay_decor_logo from "@/public/Jay-decor-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    categories: [
      {
        label: "Wallpapers",
        href: "/services/wallpapers",
      },
      {
        label: "Floorings",
        href: "/services/floorings",
      },
      {
        label: "Blinds",
        href: "/services/blinds",
      },
      {
        label: "Awnings",
        href: "/services/awnings",
      },
      {
        label: "Carpet tiles",
        href: "/services/capet-tiles",
      },
      {
        label: "Vinyl Floorings",
        href: "/services/vinyl-floorings",
      },
      {
        label: "Wall panels",
        href: "/services/wall-panels",
      },
      {
        label: "Laser cutting",
        href: "/services/laser-cuttings",
      },
      {
        label: "Artifical turf",
        href: "/services/artifical-turfs",
      },
      {
        label: "Glass firms",
        href: "/services/glass-films",
      },
      {
        label: "Stretch Ceiling",
        href: "/services/stretch-ceilings",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 h-20 md:h-24 w-full bg-white flex justify-center items-center">
      <div className="w-[90%] md:w-3/4 flex justify-between items-center">
        <Image
          src={jay_decor_logo}
          alt="jay decor logo"
          height={60}
          className="h-10 w-auto md:h-15"
        />

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((link) =>
            link.categories ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <p className="flex items-center cursor-pointer gap-1 hover:text-primary-hover">
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </p>

                {/* Dropdown */}
                <div
                  className={`absolute top-full pt-4 transition-all duration-200 ${
                    desktopDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-white shadow-xl rounded-lg py-3 w-64 max-h-[70vh] overflow-y-auto">
                    {link.categories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="block px-5 py-2.5 text-sm hover:bg-gray-50 hover:text-primary-hover"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                className="hover:text-primary-hover"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Social icons - desktop only */}
        <div className="hidden lg:flex items-center gap-4 text-xl">
          <a
            href="https://wa.me/919029070700"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-primary-hover"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/jaydecor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-primary-hover"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/jaydecor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-primary-hover"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Right side: mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Left drawer */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed top-0 left-0 h-full w-[90%] max-w-xs bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20">
          <Image
            src={jay_decor_logo}
            alt="jay decor logo"
            height={40}
            className="h-8 w-auto"
          />
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) =>
            link.categories ? (
              <div key={link.label} className="border-b border-gray-100">
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === link.label ? null : link.label,
                    )
                  }
                  className="w-full flex items-center justify-between py-3 text-lg"
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileExpanded === link.label ? "max-h-250 pb-2" : "max-h-0"
                  }`}
                >
                  {link.categories.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      onClick={() => setIsOpen(false)}
                      className="block pl-3 py-2 text-sm text-gray-700"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-lg border-b border-gray-100 hover:text-yellow-600"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
