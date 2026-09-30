"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Moving-Border-Button";
import ukLogo from "@/assets/logo2.png";
import { FaArrowRight } from "react-icons/fa";

export function Navbar() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Cleanup timeout if component unmounts
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleRegisterClick = () => {
    if (isRegistering) return; // Prevent double clicks
    setIsRegistering(true);
    timerRef.current = setTimeout(() => {
      router.push("/register");
      setIsRegistering(false);
    }, 1000);
  };

  return (
    <div className="w-full relative z-50 bg-[#0A162B] border-t border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
      {/* Top Edge Subtle Glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-400/20 to-transparent z-10"></div>

      <nav className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 h-13 flex items-center justify-between text-white">

        {/* Left: Branding */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <Image src={ukLogo} alt="Logo" className="h-6 sm:h-8 w-auto object-contain relative z-10 drop-shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-[8px] sm:text-[11px] tracking-widest sm:tracking-[0.25em] font-heading-en text-white group-hover:text-blue-100 transition-colors duration-300">
              REVENUE DEPARTMENT
            </span>
            <span className="text-[5px] sm:text-[8px] tracking-[0.2em] sm:tracking-[0.3em] text-orange/90 font-semibold mt-0.5">
              GOVERNMENT OF UTTARAKHAND
            </span>
          </div>
        </div>

        {/* Middle: Premium Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/3 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
          {["Home", "Services", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="relative px-5 py-1 text-xs font-semibold tracking-wider text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Actions and Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            borderRadius="2rem"
            className="bg-[#0A162B] text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase"
            containerClassName="hidden sm:block h-8 w-24 sm:w-28 shadow-lg shadow-blue-900/20"
          >
            Sign In
          </Button>

          <button
            onClick={handleRegisterClick}
            disabled={isRegistering}
            className="relative flex items-center justify-center bg-linear-to-r from-orange to-[#ff983f] hover:from-[#ff983f] hover:to-orange h-7 w-20 sm:h-8 sm:w-28 rounded-full text-[8px] sm:text-[10px] font-bold tracking-widest uppercase text-white transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transform hover:-translate-y-px disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {/* The Text */}
            <span className={`transition-all duration-500 ${isRegistering ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}>
              Register
            </span>

            {/* The Click Shooting Arrow */}
            <span className={`absolute transition-all duration-1000 ease-in-out ${isRegistering ? "-left-5 translate-x-37.5 opacity-100" : "-left-5 opacity-0"}`}>
              <FaArrowRight size={16} />
            </span>
          </button>

          {/* Animated Tricolor Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-0.75 w-6 h-6 ml-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-4 h-0.5 rounded-full transition-all duration-300 ease-out bg-[#FF9933] ${isMenuOpen ? 'rotate-45 translate-y-1.25' : ''}`} />
            <span className={`block w-4 h-0.5 rounded-full transition-all duration-300 ease-out bg-white ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-4 h-0.5 rounded-full transition-all duration-300 ease-out bg-[#138808] ${isMenuOpen ? '-rotate-45 -translate-y-1.25' : ''}`} />
          </button>
        </div>

      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute top-13 left-0 w-full bg-[#0A162B]/95 backdrop-blur-md border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 border-b opacity-100' : 'max-h-0 border-b-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-4 gap-4 text-center items-center justify-center shadow-2xl">
          {["Home", "Services", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-bold tracking-widest text-white/80 hover:text-orange transition-colors uppercase w-full py-1"
            >
              {item}
            </Link>
          ))}
          {/* Sign In Button for Mobile Menu */}
          <Button
            borderRadius="2rem"
            className="bg-[#0A162B] text-white text-[10px] font-bold tracking-widest uppercase"
            containerClassName="sm:hidden h-8 w-32 mt-2 shadow-lg shadow-blue-900/20"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
