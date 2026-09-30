"use client";
import React from "react";
import {
    IconBuildingStore,
    IconUsers,
    IconCoinRupee,
    IconAlertCircle,
    IconReceipt2,
    IconCreditCard,
    IconSpeakerphone,
    IconArrowUpRight,
    IconArrowDownRight,
} from "@tabler/icons-react";

const kpiCards = [
    {
        label: "कुल दुकान / प्रॉपर्टी",
        sublabel: "Total Shops",
        value: "450",
        sub: "380 अलॉटेड | 70 खाली",
        subColor: "text-emerald-600",
        icon: <IconBuildingStore className="h-6 w-6 text-white" />,
        bg: "bg-primary-navy",
        trend: "+5 this month",
        up: true,
    },
    {
        label: "कुल किराएदार",
        sublabel: "Total Tenants",
        value: "380",
        sub: "सक्रिय यूजर अकाउंट्स",
        subColor: "text-slate-500",
        icon: <IconUsers className="h-6 w-6 text-white" />,
        bg: "bg-[#0f4c9c]",
        trend: "+12 this month",
        up: true,
    },
    {
        label: "इस माह की वसूली",
        sublabel: "Monthly Revenue",
        value: "₹ 4,56,000",
        sub: "लक्ष्य: ₹ 5,10,000",
        subColor: "text-slate-500",
        icon: <IconCoinRupee className="h-6 w-6 text-white" />,
        bg: "bg-emerald-600",
        trend: "89% of target",
        up: true,
    },
    {
        label: "कुल बकाया राशि",
        sublabel: "Total Outstanding",
        value: "₹ 1,24,500",
        sub: "54 दुकानें बकाया में",
        subColor: "text-rose-600",
        icon: <IconAlertCircle className="h-6 w-6 text-white" />,
        bg: "bg-rose-600",
        trend: "-3 from last month",
        up: false,
    },
];

const recentPayments = [
    { id: "AZP/RENT/2026/000142", tenant: "रमेश चंद्र जोशी", shop: "Shop-12 (मॉल रोड)", amount: "₹ 1,200", mode: "Razorpay Online", status: "सफल" },
    { id: "AZP/RENT/2026/000141", tenant: "दीपक वर्मा", shop: "Shop-05 (चौक बाजार)", amount: "₹ 1,500", mode: "Cash / Offline", status: "सफल" },
    { id: "AZP/RENT/2026/000140", tenant: "सुनील कुमार", shop: "Shop-22 (बस स्टैंड)", amount: "₹ 950", mode: "UPI / Online", status: "सफल" },
    { id: "AZP/RENT/2026/000139", tenant: "मोहन लाल शाह", shop: "Shop-08 (लाल बाजार)", amount: "₹ 2,200", mode: "Razorpay Online", status: "लंबित" },
    { id: "AZP/RENT/2026/000138", tenant: "प्रकाश चंद्र", shop: "Shop-33 (नैनी रोड)", amount: "₹ 800", mode: "UPI / Online", status: "सफल" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Page Title & Financial Year Selector */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">
                        प्रशासनिक डैशबोर्ड
                    </h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                        अलमोड़ा जिला पंचायत — किराया व संपत्ति प्रबंधन ओवरव्यू
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-300 shadow-xs text-xs">
                        <span className="text-slate-500 font-medium">वित्तीय वर्ष:</span>
                        <select className="font-bold text-primary-navy bg-transparent focus:outline-none cursor-pointer">
                            <option value="2026-27">FY 2026-27 (वर्तमान)</option>
                            <option value="2025-26">FY 2025-26</option>
                        </select>
                    </div>
                    <button className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-primary-navy hover:bg-primary-navy/90 text-white shadow transition">
                        + नया किराएदार जोड़ें
                    </button>
                    <button className="px-4 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition">
                        रिपोर्ट एक्सपोर्ट (PDF)
                    </button>
                </div>
            </div>

            {/* Business Rules & Security Architecture Compliance Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3.5 rounded-xl bg-primary-navy/5 border border-primary-navy/15 text-xs">
                <div className="flex items-start gap-2.5">
                    <span className="text-orange text-base leading-none">⚖️</span>
                    <div>
                        <span className="font-bold text-primary-navy block">क्रमिक बकाया निस्तारण (Sequential Rule)</span>
                        <span className="text-slate-600 text-[11px]">पुराने बकाए का भुगतान (जैसे फरवरी → मार्च → अप्रैल) क्रमानुसार अनिवार्य है।</span>
                    </div>
                </div>
                <div className="flex items-start gap-2.5 border-t md:border-t-0 md:border-l border-slate-200 pt-2 md:pt-0 md:pl-3">
                    <span className="text-emerald-600 text-base leading-none">🛡️</span>
                    <div>
                        <span className="font-bold text-primary-navy block">सर्वर-साइड भुगतान सत्यापन</span>
                        <span className="text-slate-600 text-[11px]">Razorpay ID & Signature सत्यापन सर्वर-साइड सक्रिय। Idempotency टोकन लागू।</span>
                    </div>
                </div>
                <div className="flex items-start gap-2.5 border-t md:border-t-0 md:border-l border-slate-200 pt-2 md:pt-0 md:pl-3">
                    <span className="text-purple-600 text-base leading-none">🔒</span>
                    <div>
                        <span className="font-bold text-primary-navy block">खाता सुरक्षा (Argon2id + OTP)</span>
                        <span className="text-slate-600 text-[11px]">कोई स्व-पंजीकरण नहीं। प्रथम लॉगिन पर OTP सत्यापन एवं Argon2id हैशिंग।</span>
                    </div>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpiCards.map((card, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                        <div className={`${card.bg} px-4 py-3 flex items-center justify-between`}>
                            <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">{card.sublabel}</span>
                            <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
                                {card.icon}
                            </div>
                        </div>
                        <div className="px-4 py-3">
                            <div className="text-xs text-slate-500 font-medium">{card.label}</div>
                            <div className="text-2xl font-extrabold text-primary-navy mt-0.5">{card.value}</div>
                            <div className={`text-xs mt-1 font-medium ${card.subColor}`}>{card.sub}</div>
                            <div className={`flex items-center gap-1 mt-2 text-[11px] font-semibold ${card.up ? "text-emerald-600" : "text-rose-500"}`}>
                                {card.up ? <IconArrowUpRight size={13} /> : <IconArrowDownRight size={13} />}
                                {card.trend}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Recent Payments Table */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="font-bold text-primary-navy text-sm">हालिया भुगतान व रसीदें</h3>
                        <button className="text-[11px] font-semibold text-orange hover:underline">सभी देखें →</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left text-slate-600">
                            <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                                <tr>
                                    <th className="p-3">रसीद सं.</th>
                                    <th className="p-3">किराएदार</th>
                                    <th className="p-3">दुकान</th>
                                    <th className="p-3">राशि</th>
                                    <th className="p-3">माध्यम</th>
                                    <th className="p-3">स्थिति</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {recentPayments.map((p, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition">
                                        <td className="p-3 font-mono text-orange text-[10px]">{p.id}</td>
                                        <td className="p-3 font-semibold text-primary-navy">{p.tenant}</td>
                                        <td className="p-3">{p.shop}</td>
                                        <td className="p-3 font-bold">{p.amount}</td>
                                        <td className="p-3">{p.mode}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${p.status === "सफल" ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-orange-600"}`}>
                                                {p.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                    <div className="px-5 py-4 border-b border-slate-100">
                        <h3 className="font-bold text-primary-navy text-sm">त्वरित कार्य (Quick Actions)</h3>
                    </div>
                    <div className="p-4 space-y-2">
                        {[
                            { icon: <IconReceipt2 className="h-5 w-5 text-orange" />, title: "मंथली रेंट जनरेट करें", desc: "सभी दुकानों के लिए मासिक किराया जारी करें" },
                            { icon: <IconCreditCard className="h-5 w-5 text-emerald-600" />, title: "ऑफलाइन कैश भुगतान एंट्री", desc: "नकद प्राप्त किराए की रसीद बनाएं" },
                            { icon: <IconSpeakerphone className="h-5 w-5 text-orange" />, title: "नई सार्वजनिक सूचना जारी करें", desc: "सभी किराएदारों को सूचना भेजें" },
                            { icon: <IconUsers className="h-5 w-5 text-primary-navy" />, title: "नया किराएदार जोड़ें", desc: "नए टेनेंट की प्रोफाइल बनाएं और दुकान आवंटित करें" },
                        ].map((action, i) => (
                            <button key={i} className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-orange/40 hover:bg-orange-50/30 transition flex items-center gap-3 group">
                                <div className="h-9 w-9 rounded-lg bg-slate-100 group-hover:bg-white flex items-center justify-center shrink-0 transition">
                                    {action.icon}
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-primary-navy">{action.title}</div>
                                    <div className="text-[11px] text-slate-500 mt-0.5">{action.desc}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
