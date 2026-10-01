"use client";

import React from "react";
import Link from "next/link";
import {
    FaLandmark,
    FaCheckCircle,
    FaArrowRight,
    FaShieldAlt,
    FaChartLine,
    FaUsers,
    FaHandshake,
} from "react-icons/fa";

export function AboutSection() {
    return (
        <section id="about" className="w-full py-14 sm:py-18 md:py-20 bg-white border-b border-slate-200 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#0f4c9c] text-xs sm:text-sm font-semibold tracking-wide">
                        <FaLandmark className="text-blue-600 text-xs" />
                        <span>जिला पंचायत परिचय • About Zila Panchayat Almora</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy tracking-tight">
                        जिला पंचायत अल्मोड़ा के बारे में <span className="text-[#0f4c9c] font-normal sm:text-3xl block sm:inline">/ About Us</span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        उत्तराखंड शासन के पंचायती राज विभाग के अंतर्गत अल्मोड़ा जनपद का सर्वोच्च स्थानीय निकाय एवं संपत्ति प्रबंधन संस्थान।
                    </p>
                </div>

                {/* 2-Column Grid: Narrative on Left, Core Pillars on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-18">

                    {/* Left Narrative Column (6 cols) */}
                    <div className="lg:col-span-6 space-y-5">
                        <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-[#0f4c9c] text-xs font-bold border border-blue-100">
                            आधिकारिक परिचय & उद्देश्य
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary-navy leading-tight">
                            पारदर्शी संपत्ति प्रबंधन एवं आधुनिक नागरिक डिजिटल सेवाएं
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            जिला पंचायत अल्मोड़ा जनपद के ग्रामीण एवं व्यावसायिक क्षेत्रों में अधोसंरचना विकास, संपत्ति प्रबंधन तथा स्थानीय राजस्व संकलन का दायित्व निभाती है। जिला पंचायत के स्वामित्व में स्थित दुकानों, व्यावसायिक परिसरों एवं भूमियों का सुचारू लीज प्रबंधन किया जाता है।
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            इस डिजिटल पोर्टल का मुख्य उद्देश्य समस्त किराया प्रक्रियाओं को पारदर्शी बनाना, ऑनलाइन किराया संकलन सुनिश्चित करना तथा किरायेदारों को ई-रसीद एवं लेजर का त्वरित डिजिटल एक्सेस प्रदान करना है।
                        </p>

                        {/* Core Objectives Bullet Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                                <FaCheckCircle className="text-emerald-600 text-sm shrink-0" />
                                <span>पारदर्शी दुकान आवंटन प्रक्रिया</span>
                            </div>

                            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                                <FaCheckCircle className="text-emerald-600 text-sm shrink-0" />
                                <span>कैशलेस ऑनलाइन किराया भुगतान</span>
                            </div>

                            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                                <FaCheckCircle className="text-emerald-600 text-sm shrink-0" />
                                <span>सत्यापित डिजिटल ई-रसीद प्रणाली</span>
                            </div>

                            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                                <FaCheckCircle className="text-emerald-600 text-sm shrink-0" />
                                <span>24x7 ऑनलाइन समस्या निवारण</span>
                            </div>
                        </div>

                        <div className="pt-3">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-primary-navy hover:bg-[#0f4c9c] transition-all shadow-sm shrink-0"
                            >
                                <span>विस्तृत विवरण पढ़ें (Read Full Profile)</span>
                                <FaArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Core Pillars Cards (6 cols) */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Pillar 1 */}
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all space-y-2">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg font-bold">
                                <FaShieldAlt />
                            </div>
                            <h4 className="text-base font-bold text-primary-navy">
                                डिजिटल सुशासन
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                पारदर्शी किराया प्रणाली, त्वरित ऑनलाइन रसीद एवं सरकारी नियमों का शत-प्रतिशत अनुपालन।
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all space-y-2">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg font-bold">
                                <FaChartLine />
                            </div>
                            <h4 className="text-base font-bold text-primary-navy">
                                सुरक्षित लेजर रिकॉर्ड
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                प्रत्येक किरायेदार का मासिक देय, बकाया एवं भुगतान इतिहास पूर्णतया सुरक्षित एवं त्रुटिरहित।
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all space-y-2">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg font-bold">
                                <FaHandshake />
                            </div>
                            <h4 className="text-base font-bold text-primary-navy">
                                सार्वजनिक पारदर्शिता
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                रिक्त दुकानों की खुली जानकारी, सार्वजनिक नीलामी विज्ञप्ति एवं ऑनलाइन निविदा पहुंच।
                            </p>
                        </div>

                        {/* Pillar 4 */}
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all space-y-2">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg font-bold">
                                <FaUsers />
                            </div>
                            <h4 className="text-base font-bold text-primary-navy">
                                नागरिक केंद्रित सहायता
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                ऑनलाइन शिकायत निवारण, हेल्पलाइन सपोर्ट एवं त्वरित उत्तरदायी प्रशासनिक व्यवस्था।
                            </p>
                        </div>

                    </div>

                </div>

                {/* Bottom Key Statistics Bar */}
                <div className="bg-primary-navy rounded-xl p-6 sm:p-8 text-white shadow-md">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/80">

                        <div className="space-y-1">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-300">
                                250+
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-slate-300">
                                कुल दुकानें व परिसंपत्तियां
                            </p>
                        </div>

                        <div className="space-y-1 pt-4 md:pt-0">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-300">
                                100%
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-slate-300">
                                डिजिटल ई-रसीद कवरेज
                            </p>
                        </div>

                        <div className="space-y-1 pt-4 md:pt-0">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-300">
                                11
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-slate-300">
                                विकास खंड (Almora Blocks)
                            </p>
                        </div>

                        <div className="space-y-1 pt-4 md:pt-0">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-300">
                                24x7
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-slate-300">
                                डिजिटल सेवा व सहायता
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
