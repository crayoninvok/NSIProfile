"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <Link
    href={href}
    className="btn glass text-white bg-slate-800 w-full text-center md:bg-slate-800 md:w-auto md:glass md:text-white"
    aria-label={`Navigate to ${label}`}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/product", label: "Our Service and Products" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[5rem] flex items-center justify-between bg-transparent backdrop-blur-md z-20 px-4 md:px-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <Link href="/" aria-label="Homepage">
        <Image
          src="/navbar/LogoWPolos.png"
          alt="Website Logo"
          width={60}
          height={60}
          priority
          className="ml-4 rounded-full"
        />
      </Link>

      {/* desktop besar */}
      <div className="hidden md:flex gap-5">
        {links.map((link, index) => (
          <NavLink key={index} href={link.href} label={link.label} />
        ))}
      </div>

      {/* hp  icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* hp Menu */}
      {isOpen && (
        <div
          className="absolute top-[5rem] left-0 w-full bg-black/75 text-white flex flex-col items-center py-5 space-y-4 md:hidden"
          role="menu"
          aria-label="Mobile Menu"
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              label={link.label}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
}
