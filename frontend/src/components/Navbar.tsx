"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "../ui/Moving-Border-Button";
import ukLogo from "@/assets/logo2.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/#hero", sectionId: "hero" },
  { name: "Services", href: "/#services", sectionId: "services" },
  { name: "About Us", href: "/#about", sectionId: "about" },
  { name: "Properties", href: "/#properties", sectionId: "properties" },
  { name: "Notices", href: "/#notices", sectionId: "notices" },
  { name: "Documents", href: "/#documents", sectionId: "documents" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "w-full sticky top-0 z-50 bg-primary-navy transition-all duration-300",
          isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.5)]" : ""
        )}
      >
        {/* Official Saffron Top Border — India Govt. Style */}
        <div className="h-1 w-full bg-orange" />

        <nav
          className={cn(
            "max-w-8xl mx-auto px-4 lg:px-8 flex items-center justify-between text-white transition-all duration-300",
            isScrolled ? "h-12" : "h-16"
          )}
        >
          {/* Left: Official Branding */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src={ukLogo}
              alt="Uttarakhand Govt. Logo"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-7" : "h-9"
              )}
            />
            {/* Vertical Divider */}
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <div className="hidden sm:flex flex-col justify-center leading-tight">
              <span className="text-[11px] sm:text-xs font-bold tracking-wide text-white uppercase">
                Zila Panchayat Almora
              </span>
              <span className="text-[9px] text-white/60 font-medium tracking-wider uppercase">
                Government of Uttarakhand
              </span>
            </div>
          </div>

          {/* Center: Official Navigation Links */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((item, idx) => (
              <span key={item.name} className="flex items-center">
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className="px-3.5 py-1 text-[11px] font-semibold tracking-widest text-white/80 hover:text-white hover:bg-white/8 transition-all duration-200 uppercase"
                >
                  {item.name}
                </Link>
                {/* Thin separator between links, not after last */}
                {idx < navLinks.length - 1 && (
                  <span className="h-3.5 w-px bg-white/20" />
                )}
              </span>
            ))}
          </div>

          {/* Right: Sign In + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              borderRadius="2rem"
              className="bg-orange text-white text-[10px] font-bold tracking-widest uppercase hover:bg-[#EA580C] transition-colors border-none"
              containerClassName="hidden sm:block h-9 w-28 shadow-lg shadow-orange/20"
              onClick={() => router.push("/login")}
            >
              Sign In
            </Button>

            {/* Hamburger (Mobile/Tablet Only) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "block w-5 h-px rounded-full transition-all duration-300 ease-out bg-white",
                  isMenuOpen ? "rotate-45 translate-y-1.75" : ""
                )}
              />
              <span
                className={cn(
                  "block w-5 h-px rounded-full transition-all duration-300 ease-out bg-white",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-px rounded-full transition-all duration-300 ease-out bg-white",
                  isMenuOpen ? "-rotate-45 -translate-y-1.75" : ""
                )}
              />
            </button>
          </div>
        </nav>

        {/* Official Bottom Separator */}
        <div className="h-px w-full bg-white/10" />
      </header>

      {/* Mobile Drawer Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-60 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 sm:w-72 bg-primary-navy border-l border-white/10 shadow-2xl z-70 transform transition-transform duration-400 ease-out lg:hidden flex flex-col",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="h-1 w-full bg-orange" />
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-xs font-bold text-white tracking-widest uppercase">Navigation</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white/60 hover:text-white text-lg font-light leading-none focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col flex-1 py-4">
          {navLinks.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className="px-6 py-3 text-xs font-bold tracking-widest text-white/75 hover:text-white hover:bg-white/5 border-b border-white/5 uppercase transition-all"
              style={{
                transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms",
                transform: isMenuOpen ? "translateX(0)" : "translateX(16px)",
                opacity: isMenuOpen ? 1 : 0,
                transition: "all 0.35s ease-out",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Drawer Footer Sign In */}
        <div className="px-5 py-5 border-t border-white/10">
          <Button
            borderRadius="2rem"
            className="bg-orange text-white text-xs font-bold tracking-widest uppercase hover:bg-[#EA580C] transition-colors border-none"
            containerClassName="h-10 w-full shadow-lg shadow-orange/20"
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/login");
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
}
