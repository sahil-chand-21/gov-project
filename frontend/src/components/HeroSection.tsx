"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaChevronLeft,
    FaChevronRight,
    FaMapMarkerAlt,
    FaUser,
    FaUserPlus,
    FaRupeeSign,
    FaFileAlt
} from "react-icons/fa";

import hero1 from "@/assets/hero/hero1.png";
import hero2 from "@/assets/hero/hero2.png";
import hero3 from "@/assets/hero/hero3.png";
import hero4 from "@/assets/hero/hero4.png";
import hero5 from "@/assets/hero/hero5.png";

const slides = [
    { id: 1, src: hero1, alt: "Almora Government Property Banner 1" },
    { id: 2, src: hero2, alt: "Almora Government Property Banner 2" },
    { id: 3, src: hero3, alt: "Almora Government Property Banner 3" },
    { id: 4, src: hero4, alt: "Almora Government Property Banner 4" },
    { id: 5, src: hero5, alt: "Almora Government Property Banner 5" },
];

export function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section
            id="hero"
            className="relative w-full h-95 sm:h-110 md:h-120 lg:h-130 overflow-hidden border-b border-slate-200 bg-slate-900 select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image Carousel - Crisp & Focused on Right Side */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {slides.map((slide, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isActive
                                ? "opacity-100 z-0"
                                : "opacity-0 z-0 pointer-events-none"
                                }`}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                className="object-cover object-right md:object-right-center w-full h-full text-transparent"
                                sizes="(max-width: 768px) 100vw, 100vw"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Left Gradient Overlay for Text Readability - Sharp & Completely Blur-Free */}
            <div className="absolute inset-y-0 left-0 w-full sm:w-[70%] md:w-[48%] lg:w-[42%] z-10 bg-linear-to-r from-[#eaf2ff] via-[#eaf2ff]/90 via-70% to-transparent pointer-events-none" />

            {/* Hero Content Overlay Container */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-md sm:max-w-lg py-6 flex flex-col justify-center gap-3 sm:gap-4 -translate-y-4 md:-translate-y-8">

                    {/* Main Hindi Heading */}
                    <div className="space-y-1">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082b59] tracking-tight leading-tight">
                            सरकारी संपत्ति एवं किराया प्रबंधन पोर्टल
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#0a3977]">
                            अल्मोड़ा, उत्तराखंड
                        </h2>
                    </div>

                    {/* Hindi Description Subtext */}
                    <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">
                        सरकारी भूमि, दुकान एवं कक्षों के किराया प्रबंधन और ऑनलाइन भुगतान हेतु डिजिटल पोर्टल
                    </p>

                    {/* 4 Official Action Buttons */}
                    <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold text-white bg-[#0f4c9c] hover:bg-[#0a3977] transition-all shadow-sm hover:shadow active:scale-95"
                        >
                            <FaUser size={13} />
                            <span>Sign In</span>
                        </Link>

                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold text-[#0f4c9c] bg-white border border-[#0f4c9c] hover:bg-slate-50 transition-all shadow-sm hover:shadow active:scale-95"
                        >
                            <FaUserPlus size={13} />
                            <span>Register</span>
                        </Link>

                        <Link
                            href="/pay-rent"
                            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold text-white bg-[#0f4c9c] hover:bg-[#0a3977] transition-all shadow-sm hover:shadow active:scale-95"
                        >
                            <FaRupeeSign size={13} />
                            <span>Pay Rent</span>
                        </Link>

                        <Link
                            href="/verify-receipt"
                            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold text-[#0f4c9c] bg-white border border-[#0f4c9c] hover:bg-slate-50 transition-all shadow-sm hover:shadow active:scale-95"
                        >
                            <FaFileAlt size={13} />
                            <span>Verify Receipt</span>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Floating Bottom-Right Location Card */}
            <div className="absolute bottom-5 right-6 z-20 hidden sm:flex items-center gap-3 bg-[#0a3977]/90 text-white px-4 py-2.5 rounded-md border border-white/20 shadow-lg">
                <FaMapMarkerAlt className="text-white text-xl" />
                <div className="flex flex-col text-xs font-bold leading-tight">
                    <span>अल्मोड़ा</span>
                    <span>उत्तराखंड</span>
                </div>
            </div>





            {/* Carousel Slide Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
                            ? "w-6 bg-[#0f4c9c]"
                            : "w-2 bg-white/80 hover:bg-white shadow-xs"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
