"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FaBullhorn,
    FaFilePdf,
    FaCalendarAlt,
    FaArrowRight,
    FaExclamationCircle,
    FaDownload,
    FaInfoCircle,
    FaTag,
} from "react-icons/fa";

interface Notice {
    id: string;
    refNo: string;
    titleHi: string;
    titleEn: string;
    category: "auction" | "tender" | "circular";
    categoryLabelHi: string;
    date: string;
    isImportant?: boolean;
    isNew?: boolean;
    summaryHi: string;
    fileSize: string;
}

const noticesData: Notice[] = [
    {
        id: "not-01",
        refNo: "AZP/NOTICE/2026/089",
        titleHi: "मल्ली ताल व धारानौला स्थित रिक्त दुकानों के आवंटन हेतु ई-नीलामी विज्ञप्ति",
        titleEn: "E-Auction Notification for Allotment of Vacant Shops in Mallital & Dharanula",
        category: "auction",
        categoryLabelHi: "दुकान नीलामी",
        date: "28 सितम्बर 2026",
        isImportant: true,
        isNew: true,
        summaryHi: "जिला पंचायत अल्मोड़ा के अंतर्गत विभिन्न व्यावसायिक परिसरों में स्थित 15 रिक्त दुकानों के अग्रिम पट्टा आवंटन हेतु खुली नीलामी प्रक्रिया की आधिकारिक विज्ञप्ति।",
        fileSize: "1.4 MB",
    },
    {
        id: "not-02",
        refNo: "AZP/NOTICE/2026/076",
        titleHi: "वित्तीय वर्ष 2026-27 हेतु मासिक किराया ऑनलाइन जमा करने संबंधी महत्वपूर्ण निर्देश",
        titleEn: "Important Instructions regarding Online Monthly Rent Payment for FY 2026-27",
        category: "circular",
        categoryLabelHi: "सामान्य आदेश",
        date: "15 सितम्बर 2026",
        isNew: true,
        summaryHi: "समस्त दुकान एवं संपत्ति आवंटियों को सूचित किया जाता है कि माह का किराया अब केवल डिजिटल पोर्टल अथवा पंजीकृत बैंक चालान के माध्यम से ही स्वीकार किया जाएगा।",
        fileSize: "850 KB",
    },
    {
        id: "not-03",
        refNo: "AZP/NOTICE/2026/064",
        titleHi: "पांडे खोला एवं कोसी बाईपास कमर्शियल प्लॉट दीर्घकालिक लीज निविदा सूचना",
        titleEn: "Tender Notice for Long-term Lease of Commercial Land Plots at Kosi Bypass",
        category: "tender",
        categoryLabelHi: "निविदा सूचना",
        date: "02 सितम्बर 2026",
        summaryHi: "कोसी बाईपास स्थित ओपन ट्रांसपोर्ट प्लॉट एवं व्यावसायिक परिसरों के उपयोग हेतु योग्य फर्मों से मोहरबंद निविदाएं आमंत्रित की जाती हैं।",
        fileSize: "2.1 MB",
    },
    {
        id: "not-04",
        refNo: "AZP/NOTICE/2026/051",
        titleHi: "चौघान पाटा मार्केट जीर्णोद्धार एवं रख-रखाव कार्य शेड्यूल सूचना",
        titleEn: "Chaughan Pata Market Maintenance & Infrastructure Schedule Notice",
        category: "circular",
        categoryLabelHi: "सामान्य आदेश",
        date: "20 अगस्त 2026",
        summaryHi: "चौघान पाटा परिसर में मुख्य जल निकासी एवं विद्युत लाइनों के सुदृढ़ीकरण हेतु नियमित रख-रखाव कार्य शेड्यूल जारी किया गया है।",
        fileSize: "620 KB",
    },
];

export function NoticesSection() {
    const [activeTab, setActiveTab] = useState<string>("all");

    const filteredNotices = noticesData.filter((item) => {
        if (activeTab === "all") return true;
        return item.category === activeTab;
    });

    return (
        <section id="notices" className="w-full py-14 sm:py-18 md:py-20 bg-slate-50 border-b border-slate-200 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Highlight Ticker Announcement */}
                <div className="mb-10 bg-amber-500/10 border border-amber-300 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 text-amber-900 shadow-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-600 text-white text-xs font-bold shrink-0 uppercase tracking-wide">
                        <FaExclamationCircle className="text-xs" />
                        <span>विशेष सूचना</span>
                    </span>
                    <p className="text-xs sm:text-sm font-semibold truncate">
                        माह अक्टूबर 2026 का किराया बिना किसी विलंब शुल्क के जमा करने की अंतिम तिथि <span className="font-extrabold text-amber-950 underline">25 अक्टूबर 2026</span> है।
                    </p>
                </div>

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 text-maroon text-xs sm:text-sm font-semibold tracking-wide">
                            <FaBullhorn className="text-red-700 text-xs" />
                            <span>सार्वजनिक सूचनाएं व आदेश • Official Notices</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy tracking-tight">
                            नवीनतम सूचनाएं एवं विज्ञप्तियां <span className="text-[#0f4c9c] font-normal sm:text-3xl block sm:inline">/ Latest Notices</span>
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                            जिला पंचायत अल्मोड़ा द्वारा जारी की गई आधिकारिक विज्ञप्तियां, दुकान नीलामी सूचनाएं एवं सरकारी आदेश।
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar shrink-0">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === "all"
                                ? "bg-primary-navy text-white shadow-sm"
                                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                                }`}
                        >
                            सभी (All)
                        </button>

                        <button
                            onClick={() => setActiveTab("auction")}
                            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === "auction"
                                ? "bg-primary-navy text-white shadow-sm"
                                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                                }`}
                        >
                            नीलामी (Auctions)
                        </button>

                        <button
                            onClick={() => setActiveTab("tender")}
                            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === "tender"
                                ? "bg-primary-navy text-white shadow-sm"
                                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                                }`}
                        >
                            निविदाएं (Tenders)
                        </button>

                        <button
                            onClick={() => setActiveTab("circular")}
                            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === "circular"
                                ? "bg-primary-navy text-white shadow-sm"
                                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                                }`}
                        >
                            आदेश (Circulars)
                        </button>
                    </div>
                </div>

                {/* Notice Items List / Grid */}
                <div className="space-y-4">
                    {filteredNotices.map((notice) => (
                        <div
                            key={notice.id}
                            className={`group bg-white rounded-xl p-5 sm:p-6 border transition-all duration-300 shadow-xs hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-5 ${notice.isImportant
                                ? "border-l-4 border-l-red-600 border-slate-200"
                                : "border-slate-200 hover:border-blue-300"
                                }`}
                        >
                            {/* Left Column: Icon + Metadata + Title */}
                            <div className="flex items-start gap-4 flex-1">
                                <div
                                    className={`w-11 h-11 rounded-lg shrink-0 flex items-center justify-center text-lg ${notice.isImportant
                                        ? "bg-red-50 text-red-700 border border-red-100"
                                        : "bg-blue-50 text-[#0f4c9c] border border-blue-100"
                                        }`}
                                >
                                    <FaFilePdf />
                                </div>

                                <div className="space-y-2 flex-1">
                                    {/* Badges & Date Bar */}
                                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                                        <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-bold uppercase text-[11px]">
                                            <FaTag className="text-[9px] text-slate-400" />
                                            <span>{notice.refNo}</span>
                                        </span>

                                        <span className="bg-blue-50 text-[#0f4c9c] px-2 py-0.5 rounded font-bold text-[11px]">
                                            {notice.categoryLabelHi}
                                        </span>

                                        {notice.isImportant && (
                                            <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded font-bold text-[11px]">
                                                अति-महत्वपूर्ण / Priority
                                            </span>
                                        )}

                                        {notice.isNew && (
                                            <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[11px]">
                                                NEW
                                            </span>
                                        )}

                                        <span className="inline-flex items-center gap-1 text-slate-400 ml-auto md:ml-0 text-xs">
                                            <FaCalendarAlt className="text-[11px]" />
                                            <span>{notice.date}</span>
                                        </span>
                                    </div>

                                    {/* Notice Title */}
                                    <h3 className="text-base sm:text-lg font-bold text-primary-navy group-hover:text-[#0f4c9c] transition-colors leading-snug">
                                        {notice.titleHi}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                        {notice.summaryHi}
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Download & Action Button */}
                            <div className="flex items-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 justify-between md:justify-end">
                                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                                    PDF ({notice.fileSize})
                                </span>

                                <button
                                    onClick={() => alert(`डाउनलोड प्रक्रिया प्रारंभ: ${notice.refNo}`)}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-[#0f4c9c] bg-blue-50 border border-blue-200 hover:bg-[#0f4c9c] hover:text-white transition-all cursor-pointer shadow-xs active:scale-95"
                                >
                                    <FaDownload className="text-xs" />
                                    <span>पीडीएफ डाउनलोड</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Notices Link Bar */}
                <div className="mt-10 bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="flex items-center gap-3 text-slate-700">
                        <FaInfoCircle className="text-blue-600 text-xl shrink-0 hidden sm:block" />
                        <p className="text-xs sm:text-sm font-semibold">
                            पुराने आदेश एवं अभिलेख देखने के लिए आधिकारिक सूचनाएं संग्रह (Notices Archive) देखें।
                        </p>
                    </div>

                    <Link
                        href="/notices"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-primary-navy hover:bg-[#0f4c9c] transition-all shadow-xs shrink-0"
                    >
                        <span>सभी सूचनाएं देखें (View All Notices)</span>
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
