"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FaBuilding,
    FaMapMarkerAlt,
    FaRulerCombined,
    FaRupeeSign,
    FaSearch,
    FaArrowRight,
    FaCheckCircle,
    FaTag,
    FaExternalLinkAlt,
} from "react-icons/fa";

interface Property {
    id: string;
    code: string;
    titleHi: string;
    titleEn: string;
    category: "shop" | "complex" | "land";
    categoryLabelHi: string;
    locationHi: string;
    locationEn: string;
    areaSqFt: number;
    monthlyRent: number;
    status: "vacant" | "occupied";
    featuresHi: string[];
}

const propertiesData: Property[] = [
    {
        id: "prop-101",
        code: "AZP-SH-012",
        titleHi: "मल्ली ताल व्यावसायिक परिसर - दुकान क्र. 12",
        titleEn: "Mallital Commercial Complex - Shop No. 12",
        category: "shop",
        categoryLabelHi: "दुकान",
        locationHi: "मॉल रोड, अल्मोड़ा",
        locationEn: "Mall Road, Almora",
        areaSqFt: 180,
        monthlyRent: 1500,
        status: "vacant",
        featuresHi: ["रोड फ्रंट लोकेशन", "विद्युत कनेक्शन उपलब्ध", "व्यावसायिक श्रेणी"],
    },
    {
        id: "prop-102",
        code: "AZP-SH-005",
        titleHi: "लाला बाजार कॉम्प्लेक्स - दुकान क्र. 05",
        titleEn: "Lala Bazar Complex - Shop No. 05",
        category: "shop",
        categoryLabelHi: "दुकान",
        locationHi: "लाला बाजार, अल्मोड़ा",
        locationEn: "Lala Bazar, Almora",
        areaSqFt: 220,
        monthlyRent: 2100,
        status: "occupied",
        featuresHi: ["मुख्य बाजार क्षेत्र", "पैदल पथ पहुंच", "जल एवं विद्युत आपूर्ति"],
    },
    {
        id: "prop-103",
        code: "AZP-CX-018",
        titleHi: "धारानौला बस स्टैंड कॉम्प्लेक्स - दुकान क्र. 18",
        titleEn: "Dharanula Bus Stand Complex - Shop No. 18",
        category: "complex",
        categoryLabelHi: "व्यावसायिक परिसर",
        locationHi: "धारानौला, अल्मोड़ा",
        locationEn: "Dharanula, Almora",
        areaSqFt: 350,
        monthlyRent: 3500,
        status: "vacant",
        featuresHi: ["बस स्टैंड के समीप", "भारी आवाजाही", "कमर्शियल स्पेस"],
    },
    {
        id: "prop-104",
        code: "AZP-CX-002",
        titleHi: "पांडे खोला व्यापारिक केंद्र - हॉल क्र. 02",
        titleEn: "Pande Khola Trade Center - Hall No. 02",
        category: "complex",
        categoryLabelHi: "व्यावसायिक परिसर",
        locationHi: "पांडे खोला, अल्मोड़ा",
        locationEn: "Pande Khola, Almora",
        areaSqFt: 500,
        monthlyRent: 5000,
        status: "occupied",
        featuresHi: ["बहुउद्देश्यीय हॉल", "पार्किंग सुविधा", "हाईवे एक्सेस"],
    },
    {
        id: "prop-105",
        code: "AZP-LD-A04",
        titleHi: "कोसी बाईपास भूमि - प्लॉट क्र. A-4",
        titleEn: "Kosi Bypass Zila Panchayat Land - Plot A-4",
        category: "land",
        categoryLabelHi: "भूमि / प्लॉट",
        locationHi: "कोसी बाईपास रोड, अल्मोड़ा",
        locationEn: "Kosi Bypass Road, Almora",
        areaSqFt: 1200,
        monthlyRent: 8000,
        status: "vacant",
        featuresHi: ["लीज हेतु ओपन प्लॉट", "ट्रांसपोर्ट कनेक्टिविटी", "दीर्घकालिक लीज"],
    },
    {
        id: "prop-106",
        code: "AZP-SH-008",
        titleHi: "चौघान पाटा मार्केट - दुकान क्र. 08",
        titleEn: "Chaughan Pata Market - Shop No. 08",
        category: "shop",
        categoryLabelHi: "दुकान",
        locationHi: "चौघान पाटा, अल्मोड़ा",
        locationEn: "Chaughan Pata, Almora",
        areaSqFt: 160,
        monthlyRent: 1800,
        status: "occupied",
        featuresHi: ["केंद्रीय बाजार क्षेत्र", "दो तरफा शटर", "बिजली मीटर"],
    },
];

export function PropertiesSection() {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredProperties = propertiesData.filter((prop) => {
        const matchesFilter =
            activeFilter === "all" ||
            (activeFilter === "vacant" && prop.status === "vacant") ||
            (activeFilter === "shop" && prop.category === "shop") ||
            (activeFilter === "complex" && prop.category === "complex") ||
            (activeFilter === "land" && prop.category === "land");

        const matchesSearch =
            prop.titleHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prop.locationHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prop.code.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <section id="properties" className="w-full py-14 sm:py-18 md:py-20 bg-white border-b border-slate-200 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#0f4c9c] text-xs sm:text-sm font-semibold tracking-wide">
                            <FaBuilding className="text-blue-600 text-xs" />
                            <span>सरकारी संपत्ति निर्देशिका • Property Directory</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy tracking-tight">
                            जिला पंचायत संपत्तियां एवं दुकानें <span className="text-[#0f4c9c] font-normal sm:text-3xl block sm:inline">/ Properties & Shops</span>
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                            अल्मोड़ा जिला पंचायत के नियंत्रण वाली व्यावसायिक दुकानों, परिसरों एवं लीज भूमियों की अद्यतन सूची।
                        </p>
                    </div>

                    {/* Quick Search Bar */}
                    <div className="relative w-full md:w-72 shrink-0">
                        <input
                            type="text"
                            placeholder="खोजें (Search shop, location)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#0f4c9c] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50"
                        />
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
                    <button
                        onClick={() => setActiveFilter("all")}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${activeFilter === "all"
                            ? "bg-primary-navy text-white shadow-sm"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                    >
                        सभी संपत्तियां (All Properties)
                    </button>

                    <button
                        onClick={() => setActiveFilter("vacant")}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${activeFilter === "vacant"
                            ? "bg-primary-navy text-white shadow-sm"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                    >
                        रिक्त / उपलब्ध (Vacant Only)
                    </button>

                    <button
                        onClick={() => setActiveFilter("shop")}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${activeFilter === "shop"
                            ? "bg-primary-navy text-white shadow-sm"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                    >
                        दुकानें (Shops)
                    </button>

                    <button
                        onClick={() => setActiveFilter("complex")}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${activeFilter === "complex"
                            ? "bg-primary-navy text-white shadow-sm"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                    >
                        व्यावसायिक परिसर (Complexes)
                    </button>

                    <button
                        onClick={() => setActiveFilter("land")}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${activeFilter === "land"
                            ? "bg-primary-navy text-white shadow-sm"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                    >
                        भूमि / प्लॉट (Land & Plots)
                    </button>
                </div>

                {/* Property Cards Grid */}
                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProperties.map((prop) => (
                            <div
                                key={prop.id}
                                className="group bg-slate-50/80 rounded-xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                            >
                                <div>
                                    {/* Top Bar with Property Code & Status Badge */}
                                    <div className="p-4 sm:p-5 border-b border-slate-200 bg-white flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold tracking-wider uppercase border border-slate-200">
                                            <FaTag className="text-slate-500 text-[10px]" />
                                            <span>{prop.code}</span>
                                        </span>

                                        {prop.status === "vacant" ? (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 text-[#0f4c9c] text-xs font-extrabold border border-blue-200">
                                                <FaCheckCircle className="text-[#0f4c9c] text-xs" />
                                                <span>रिक्त / उपलब्ध</span>
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-extrabold border border-slate-300">
                                                <span>आवंटित / पट्टे पर</span>
                                            </span>
                                        )}
                                    </div>

                                    {/* Body Content */}
                                    <div className="p-5 sm:p-6 space-y-4">

                                        {/* Category & Title */}
                                        <div className="space-y-1">
                                            <span className="text-xs font-bold text-[#0f4c9c] uppercase tracking-wide">
                                                {prop.categoryLabelHi}
                                            </span>
                                            <h3 className="text-base sm:text-lg font-bold text-primary-navy leading-snug group-hover:text-[#0f4c9c] transition-colors">
                                                {prop.titleHi}
                                            </h3>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm font-medium">
                                            <FaMapMarkerAlt className="text-slate-500 shrink-0 mt-0.5" />
                                            <span>{prop.locationHi}</span>
                                        </div>

                                        {/* Specifications Grid */}
                                        <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-200/80 bg-white rounded-lg p-3">
                                            <div className="space-y-0.5">
                                                <span className="text-[11px] font-bold text-slate-400 block uppercase">
                                                    क्षेत्रफल (Area)
                                                </span>
                                                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-slate-800">
                                                    <FaRulerCombined className="text-blue-600 text-xs" />
                                                    <span>{prop.areaSqFt} वर्ग फीट</span>
                                                </div>
                                            </div>

                                            <div className="space-y-0.5">
                                                <span className="text-[11px] font-bold text-slate-400 block uppercase">
                                                    मासिक किराया (Rent)
                                                </span>
                                                <div className="flex items-center gap-1 text-xs sm:text-sm font-extrabold text-[#0f4c9c]">
                                                    <FaRupeeSign className="text-xs" />
                                                    <span>{prop.monthlyRent.toLocaleString("hi-IN")} / माह</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Highlights / Features List */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {prop.featuresHi.map((feat, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[11px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200"
                                                >
                                                    • {feat}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                                {/* Footer Link Action */}
                                <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex items-center justify-between">
                                    <Link
                                        href={`/properties/${prop.id}`}
                                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0f4c9c] hover:text-primary-navy transition-all"
                                    >
                                        <span>विवरण देखें (View Details)</span>
                                        <FaExternalLinkAlt className="text-[10px]" />
                                    </Link>

                                    {prop.status === "vacant" ? (
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold text-white bg-primary-navy hover:bg-[#0f4c9c] transition-all shadow-xs"
                                        >
                                            <span>आवेदन करें</span>
                                            <FaArrowRight className="text-[10px]" />
                                        </Link>
                                    ) : (
                                        <Link
                                            href="/pay-rent"
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold text-[#0f4c9c] bg-blue-50 border border-blue-200 hover:bg-primary-navy hover:text-white transition-all"
                                        >
                                            <span>किराया जमा करें</span>
                                        </Link>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="text-sm font-bold text-slate-600">
                            कोई संपत्ति प्राप्त नहीं हुई (No properties found matching your search).
                        </p>
                    </div>
                )}

                {/* View All Properties Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/properties"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-primary-navy hover:bg-[#0f4c9c] transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        <span>सभी संपत्तियां देखें (View All Properties Directory)</span>
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
