"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#partners", label: "Partners" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]">
      <nav className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Springboard
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-[#a0a0a0] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        <ul
          className={`md:hidden fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 transition-all ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-medium text-[#a0a0a0] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
