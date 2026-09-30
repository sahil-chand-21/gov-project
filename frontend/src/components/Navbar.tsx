"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Moving-Border-Button";
import ukLogo from "@/assets/logo2.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Notices", href: "/notices" },
  { name: "Documents", href: "/documents" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const router = useRouter();
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

  return (
    <>
      <header
        className={cn(
          "w-full sticky top-0 z-50 bg-primary-navy border-t border-white/5 transition-all duration-300",
          isScrolled ? "shadow-[0_8px_30px_rgb(0,0,0,0.6)]" : ""
        )}
      >
        {/* Top Edge Subtle Glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-400/20 to-transparent z-10"></div>

        <nav
          className={cn(
            "relative z-20 max-w-8xl mx-auto px-4 lg:px-8 flex items-center justify-between text-white transition-all duration-300",
            isScrolled ? "h-14" : "h-20"
          )}
        >
          {/* Left: Branding */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => router.push("/")}
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image
                src={ukLogo}
                alt="Logo"
                className={cn(
                  "w-auto object-contain relative z-10 drop-shadow-lg transition-all duration-300",
                  isScrolled ? "h-8" : "h-10"
                )}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-[10px] sm:text-xs tracking-normal sm:tracking-wide font-heading-en text-white group-hover:text-blue-200 transition-colors duration-300">
                DEPARTMENT OF ZILA PANCHAYAT ALMORA
              </span>
              <span className="text-[7px] sm:text-[9px] tracking-normal text-orange/90 font-semibold mt-0.5">
                GOVERNMENT OF UTTARAKHAND
              </span>
            </div>
          </div>

          {/* Middle: Premium Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-1.5 text-xs font-semibold tracking-wider text-white/80 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Actions and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button
              borderRadius="2rem"
              className="bg-orange text-white text-[10px] font-bold tracking-widest uppercase hover:bg-[#EA580C] transition-colors border-none"
              containerClassName="hidden sm:block h-9 w-28 shadow-lg shadow-orange/20"
              onClick={() => router.push("/login")}
            >
              Sign In
            </Button>

            {/* Animated Tricolor Hamburger Menu Button (Mobile/Tablet Only) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "block w-5 h-0.5 rounded-full transition-all duration-300 ease-out bg-[#FF9933]",
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 rounded-full transition-all duration-300 ease-out bg-white",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 rounded-full transition-all duration-300 ease-out bg-[#138808]",
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer (Slides in from right) */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 sm:w-80 bg-primary-navy border-l border-white/10 shadow-2xl z-70 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white/70 hover:text-white p-2"
            >
              Close ✕
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-bold tracking-widest text-white/80 hover:text-orange transition-colors uppercase"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: "all 0.4s ease-out",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
            <Button
              borderRadius="2rem"
              className="bg-primary-navy text-white text-xs font-bold tracking-widest uppercase hover:bg-[#152A52]"
              containerClassName="h-10 w-full shadow-lg shadow-blue-900/20"
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/login");
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
