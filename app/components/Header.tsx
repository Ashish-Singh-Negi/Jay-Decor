"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import jay_decor_logo from "@/public/Jay-decor-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll while the drawer is open
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
        <nav className="hidden lg:flex px-10 items-center gap-10">
          {navLinks.map((link) => (
            <Link
              className="hover:text-yellow-600"
              key={link.label}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

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

      {/* Overlay — covers remaining 10%, click to close */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Left drawer — 90% width */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed top-0 left-0 h-full w-[90%] max-w-xs bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
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

        <div className="flex flex-col gap-2 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-lg border-b border-gray-100 hover:text-yellow-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
