"use client";

import React from "react";
import Link from "next/link";
import {
    FaCreditCard,
    FaStore,
    FaFileInvoice,
    FaHeadset,
    FaBullhorn,
    FaBookReader,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";

interface ServiceItem {
    id: string;
    titleHi: string;
    titleEn: string;
    descHi: string;
    descEn: string;
    icon: React.ElementType;
    badgeHi: string;
    link: string;
}

const services: ServiceItem[] = [
    {
        id: "pay-rent",
        titleHi: "ऑनलाइन किराया भुगतान",
        titleEn: "Online Rent Payment",
        descHi: "UPI, डेबिट/क्रेडिट कार्ड या नेट बैंकिंग द्वारा अपनी दुकान एवं संपत्ति का मासिक किराया त्वरित व सुरक्षित जमा करें।",
        descEn: "Pay monthly rent for allotted shops and properties instantly via secure digital payment gateways.",
        icon: FaCreditCard,
        badgeHi: "डिजिटल सेवा",
        link: "/pay-rent",
    },
    {
        id: "properties",
        titleHi: "संपत्ति एवं दुकान निर्देशिका",
        titleEn: "Properties & Shop Directory",
        descHi: "अल्मोड़ा जिला पंचायत की आवंटित एवं रिक्त दुकानों, व्यावसायिक परिसर एवं भूमि की सूची और स्थिति देखें।",
        descEn: "Explore availability, location, and occupancy details of Zila Panchayat shops and commercial assets.",
        icon: FaStore,
        badgeHi: "सार्वजनिक रिकॉर्ड",
        link: "/properties",
    },
    {
        id: "receipts",
        titleHi: "डिजिटल रसीद सत्यापन",
        titleEn: "Receipt Verification",
        descHi: "अपने किए गए भुगतानों की आधिकारिक ई-रसीद डाउनलोड करें एवं रसीद क्रमांक दर्ज कर रसीद की प्रामाणिकता जांचें।",
        descEn: "Download official e-receipts for payments and verify receipt authenticity via unique reference ID.",
        icon: FaFileInvoice,
        badgeHi: "प्रमाणित रसीद",
        link: "/verify-receipt",
    },
    {
        id: "complaints",
        titleHi: "शिकायत एवं समस्या निवारण",
        titleEn: "Complaints & Grievances",
        descHi: "दुकान, रखरखाव, पानी-बिजली या किराए संबंधी समस्याओं के लिए ऑनलाइन शिकायत दर्ज करें एवं समाधान स्थिति ट्रैक करें।",
        descEn: "Submit grievances regarding property maintenance or lease issues and track resolution status in real-time.",
        icon: FaHeadset,
        badgeHi: "24x7 सहायता",
        link: "/complaints",
    },
    {
        id: "notices",
        titleHi: "सार्वजनिक सूचनाएं व आदेश",
        titleEn: "Public Notices & Circulars",
        descHi: "जिला पंचायत अल्मोड़ा द्वारा समय-समय पर जारी आधिकारिक विज्ञप्तियों, नीलामी सूचनाओं व आदेशों को देखें।",
        descEn: "Stay updated with official Zila Panchayat press releases, shop auctions, and public circulars.",
        icon: FaBullhorn,
        badgeHi: "नवीनतम विज्ञप्ति",
        link: "/notices",
    },
    {
        id: "ledger",
        titleHi: "किरायेदार लेजर व खाता विवरण",
        titleEn: "Tenant Ledger & Account",
        descHi: "अपने खाते का ब्योरा, मासिक देय राशि, पिछला बकाया (Previous Dues) तथा भुगतान इतिहास पारदर्शी रूप से देखें।",
        descEn: "Access personal tenant ledger, outstanding dues breakdown, and transaction logs securely via portal sign-in.",
        icon: FaBookReader,
        badgeHi: "किरायेदार पोर्टल",
        link: "/login",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="w-full py-14 sm:py-18 md:py-20 bg-slate-50 border-b border-slate-200 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#0f4c9c] text-xs sm:text-sm font-semibold tracking-wide">
                        <FaCheckCircle className="text-blue-600 text-xs" />
                        <span>जिला पंचायत नागरिक सेवाएं • Digital Services</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy tracking-tight">
                        हमारी मुख्य सेवाएं <span className="text-[#0f4c9c] font-normal sm:text-3xl block sm:inline">/ Our Services</span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        अल्मोड़ा जिला पंचायत की संपत्ति, दुकान आवंटन, किराया भुगतान एवं नागरिक सुविधाओं के लिए पारदर्शी ऑनलाइन सेवा पोर्टल।
                    </p>
                </div>

                {/* Services Grid (3-column layout, official government theme) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="group relative bg-white rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Top Badge & Icon Row */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                            <Icon className="text-xl" />
                                        </div>

                                        <span className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-md bg-blue-100/70 text-[#0f4c9c]">
                                            {item.badgeHi}
                                        </span>
                                    </div>

                                    {/* Title & Subtitle */}
                                    <div className="space-y-1 mb-3">
                                        <h3 className="text-lg sm:text-xl font-bold text-primary-navy group-hover:text-[#0f4c9c] transition-colors">
                                            {item.titleHi}
                                        </h3>
                                        <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                                            {item.titleEn}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                                        {item.descHi}
                                    </p>
                                </div>

                                {/* Bottom Action Link */}
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0f4c9c] hover:text-primary-navy transition-colors"
                                    >
                                        <span>आगे बढ़ें (Access Service)</span>
                                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Quick Help Banner */}
                <div className="mt-12 sm:mt-16 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div className="space-y-1">
                        <h4 className="text-base sm:text-lg font-bold text-primary-navy">
                            क्या आपको सहायता या तकनीकी जानकारी की आवश्यकता है?
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">
                            जिला पंचायत कार्यालय अल्मोड़ा से संपर्क करें या हेल्पलाइन सेवा का उपयोग करें।
                        </p>
                    </div>

                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-primary-navy hover:bg-[#0f4c9c] transition-all shadow-xs shrink-0"
                    >
                        <span>संपर्क करें (Contact Support)</span>
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
