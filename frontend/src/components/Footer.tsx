"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaChevronRight,
    FaShieldAlt,
    FaExternalLinkAlt,
} from "react-icons/fa";
import logoState from "@/assets/logo1.png";

export function Footer() {
    return (
        <footer className="w-full bg-primary-navy text-slate-300 select-none border-t-4 border-[#0f4c9c]">

            {/* Main Footer Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

                    {/* Column 1 (4 cols): Official Branding */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center shadow-xs">
                                <Image
                                    src={logoState}
                                    alt="Uttarakhand Government Emblem"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div>
                                <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                                    जिला पंचायत अल्मोड़ा
                                </h3>
                                <p className="text-xs font-semibold text-blue-300">
                                    उत्तराखंड शासन • पंचायती राज विभाग
                                </p>
                                <p className="text-[11px] text-slate-400 font-medium">
                                    Zila Panchayat Almora, Govt. of Uttarakhand
                                </p>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                            अल्मोड़ा जिला पंचायत के स्वामित्व वाली दुकानों, परिसरों एवं लीज भूमियों के ऑनलाइन किराया संकलन, डिजिटल रसीद एवं सार्वजनिक रिकॉर्ड का आधिकारिक पोर्टल।
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-200 text-xs font-semibold">
                            <FaShieldAlt className="text-emerald-400 text-xs" />
                            <span>आधिकारिक सरकारी डिजिटल सेवा पोर्टल</span>
                        </div>
                    </div>

                    {/* Column 2 (2.5 cols): Quick Links */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
                            मुख्य लिंक (Links)
                        </h4>

                        <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
                            <li>
                                <Link href="/#hero" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>मुख्य पृष्ठ (Home)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>हमारे बारे में (About Us)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#properties" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>संपत्तियां (Properties)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#notices" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>सूचनाएं (Notices)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#documents" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>दस्तावेज (Documents)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>संपर्क करें (Contact Us)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 (2.5 cols): Services */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
                            डिजिटल सेवाएं (Services)
                        </h4>

                        <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
                            <li>
                                <Link href="/pay-rent" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>ऑनलाइन किराया भुगतान (Pay Rent)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/verify-receipt" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>रसीद सत्यापन (Verify Receipt)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/complaints" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>शिकायत पंजीकरण (Grievance)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>किरायेदार लेजर लॉगिन (Tenant Login)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/login" className="hover:text-white transition-colors flex items-center gap-1.5">
                                    <FaChevronRight className="text-[10px] text-blue-400" />
                                    <span>प्रशासनिक लॉगिन (Admin Portal)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 (3 cols): Contact Info */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
                            संपर्क सूत्र (Contact Info)
                        </h4>

                        <div className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
                            <div className="flex items-start gap-2.5">
                                <FaMapMarkerAlt className="text-slate-400 shrink-0 mt-1 text-xs" />
                                <span>जिला पंचायत भवन, विकास भवन मार्ग, अल्मोड़ा, उत्तराखंड - 263601</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <FaPhoneAlt className="text-slate-400 shrink-0 text-xs" />
                                <span>05962-230000 / +91 94120 00000</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <FaEnvelope className="text-slate-400 shrink-0 text-xs" />
                                <span className="text-blue-200">zilapanchayat-alm@uk.gov.in</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <FaClock className="text-slate-400 shrink-0 text-xs" />
                                <span>सोम - शनि (10:00 AM - 05:00 PM)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright & Statutory Strip */}
            <div className="w-full bg-slate-950 border-t border-slate-800/80 py-5 text-slate-400 text-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

                    <div className="space-y-0.5">
                        <p className="font-semibold text-slate-300">
                            © 2026 कार्यालय जिला पंचायत अल्मोड़ा, उत्तराखंड सरकार। सर्वाधिकार सुरक्षित।
                        </p>
                        <p className="text-[11px] text-slate-500 font-normal">
                            Designed & Developed for Zila Panchayat Almora Rental Management System.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 font-semibold text-slate-400 text-[11px] sm:text-xs">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            गोपनीयता नीति (Privacy Policy)
                        </Link>
                        <span>•</span>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            उपयोग की शर्तें (Terms of Use)
                        </Link>
                        <span>•</span>
                        <Link href="/disclaimer" className="hover:text-white transition-colors">
                            अस्वीकरण (Disclaimer)
                        </Link>
                        <span>•</span>
                        <a
                            href="https://uk.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors flex items-center gap-1 text-blue-300"
                        >
                            <span>उत्तराखंड पोर्टल</span>
                            <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                    </div>

                </div>
            </div>

        </footer>
    );
}
