"use client";

import React from "react";
import Link from "next/link";
import {
    FaFileAlt,
    FaFilePdf,
    FaDownload,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";

interface DocumentItem {
    id: string;
    code: string;
    titleHi: string;
    titleEn: string;
    categoryHi: string;
    fileSize: string;
}

const documentsData: DocumentItem[] = [
    {
        id: "doc-01",
        code: "AZP-DOC-2026/01",
        titleHi: "अल्मोड़ा जिला पंचायत किराया नियमावली 2026",
        titleEn: "Almora Zila Panchayat Rental Rules & Regulations 2026",
        categoryHi: "नियमावली / Policy",
        fileSize: "1.2 MB",
    },
    {
        id: "doc-02",
        code: "AZP-DOC-2026/02",
        titleHi: "दुकान एवं परिसर आवंटन हेतु आवेदन प्रपत्र",
        titleEn: "Application Form for Shop & Premises Allotment",
        categoryHi: "आवेदन पत्र / Form",
        fileSize: "450 KB",
    },
    {
        id: "doc-03",
        code: "AZP-DOC-2026/03",
        titleHi: "लीज नवीनीकरण एवं हस्तांतरण नीति 2026",
        titleEn: "Lease Renewal & Transfer Guidelines",
        categoryHi: "दिशानिर्देश / Guidelines",
        fileSize: "890 KB",
    },
    {
        id: "doc-04",
        code: "AZP-DOC-2026/04",
        titleHi: "स्व-घोषणा पत्र एवं शपथ पत्र प्रारूप",
        titleEn: "Self-Declaration & Affidavit Format",
        categoryHi: "प्रारूप / Format",
        fileSize: "320 KB",
    },
];

export function DocumentsSection() {
    return (
        <section id="documents" className="w-full py-14 sm:py-18 md:py-20 bg-white border-b border-slate-200 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#0f4c9c] text-xs sm:text-sm font-semibold tracking-wide">
                            <FaFileAlt className="text-blue-600 text-xs" />
                            <span>सरकारी दस्तावेज एवं नियमावली • Public Documents</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy tracking-tight">
                            महत्वपूर्ण दस्तावेज एवं प्रपत्र <span className="text-[#0f4c9c] font-normal sm:text-3xl block sm:inline">/ Key Documents</span>
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                            जिला पंचायत अल्मोड़ा के किराया नियम, आवेदन फॉर्म, लीज नीतियां एवं शपथ पत्र प्रारूप।
                        </p>
                    </div>

                    <Link
                        href="/documents"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-primary-navy hover:bg-[#0f4c9c] transition-all shadow-xs shrink-0 self-start md:self-auto"
                    >
                        <span>सभी दस्तावेज देखें (View All Documents)</span>
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>

                {/* 4 Clean Compact Document Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {documentsData.map((doc) => (
                        <div
                            key={doc.id}
                            className="group bg-slate-50/80 rounded-xl p-5 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                {/* Header Icon & Category */}
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-transform">
                                        <FaFilePdf />
                                    </div>

                                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                                        {doc.categoryHi}
                                    </span>
                                </div>

                                {/* Document Title */}
                                <h3 className="text-sm sm:text-base font-bold text-primary-navy leading-snug group-hover:text-[#0f4c9c] transition-colors">
                                    {doc.titleHi}
                                </h3>

                                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                                    {doc.titleEn}
                                </p>
                            </div>

                            {/* Bottom Download Bar */}
                            <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-slate-500">
                                    PDF ({doc.fileSize})
                                </span>

                                <button
                                    onClick={() => alert(`डाउनलोड प्रारंभ: ${doc.titleHi}`)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold text-[#0f4c9c] bg-white border border-blue-200 hover:bg-[#0f4c9c] hover:text-white transition-all cursor-pointer shadow-2xs"
                                >
                                    <FaDownload className="text-[10px]" />
                                    <span>डाउनलोड</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Verification Note */}
                <div className="mt-8 bg-blue-50/60 border border-blue-100 rounded-lg p-4 flex items-center gap-3 text-xs sm:text-sm text-[#0f4c9c] font-medium">
                    <FaCheckCircle className="text-blue-600 shrink-0 text-base" />
                    <span>
                        सभी दस्तावेज जिला पंचायत अल्मोड़ा द्वारा डिजिटल रूप से सत्यापित एवं आधिकारिक हैं।
                    </span>
                </div>

            </div>
        </section>
    );
}
