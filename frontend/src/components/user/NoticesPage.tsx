"use client";
import React from "react";
import { IconSpeakerphone, IconPaperclip, IconChevronRight } from "@tabler/icons-react";

const notices = [
    {
        id: "NOT-2026-015",
        title: "अक्टूबर 2026 — किराया अनुस्मारक",
        description: "कृपया अक्टूबर 2026 का किराया ₹ 1,200 अंतिम तिथि 10 अक्टूबर से पहले जमा करें। ऑनलाइन भुगतान पोर्टल पर उपलब्ध है।",
        type: "व्यक्तिगत",
        date: "01 Oct 2026",
        isNew: true,
        hasAttachment: false,
    },
    {
        id: "NOT-2026-012",
        title: "जल आपूर्ति मरम्मत कार्य — 5-7 अक्टूबर 2026",
        description: "मॉल रोड क्षेत्र में 5-7 अक्टूबर को जल आपूर्ति मरम्मत कार्य के कारण पानी की आपूर्ति बाधित रहेगी। कृपया पानी का भंडारण करें।",
        type: "सार्वजनिक",
        date: "29 Sep 2026",
        isNew: true,
        hasAttachment: true,
    },
    {
        id: "NOT-2026-010",
        title: "दुकान किराया संशोधन सूचना — FY 2026-27",
        description: "जिला पंचायत अलमोड़ा द्वारा FY 2026-27 से दुकान किराए में 20% की वृद्धि की गई है। नई दरें 01 अप्रैल 2026 से लागू हैं।",
        type: "सार्वजनिक",
        date: "15 Sep 2026",
        isNew: false,
        hasAttachment: true,
    },
    {
        id: "NOT-2026-008",
        title: "स्वच्छता अभियान — मॉल रोड दुकान क्षेत्र",
        description: "सभी दुकानदारों से अनुरोध है कि अपने दुकान के आस-पास सफाई रखें। स्वच्छता अभियान 20 सितंबर को आयोजित किया जाएगा।",
        type: "सार्वजनिक",
        date: "10 Sep 2026",
        isNew: false,
        hasAttachment: false,
    },
    {
        id: "NOT-2026-005",
        title: "बकाया किराया भुगतान — अंतिम सूचना",
        description: "आपके खाते पर बकाया किराया है। कृपया 30 दिनों के भीतर सभी बकाया राशि जमा करें अन्यथा नियमानुसार कार्रवाई की जाएगी।",
        type: "व्यक्तिगत",
        date: "01 Sep 2026",
        isNew: false,
        hasAttachment: true,
    },
];

const typeConfig: Record<string, { bg: string; text: string }> = {
    "व्यक्तिगत": { bg: "bg-blue-50", text: "text-blue-600" },
    "सार्वजनिक": { bg: "bg-slate-100", text: "text-slate-500" },
};

export default function NoticesPage() {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">सूचनाएं</h2>
                <p className="text-sm text-slate-500 mt-0.5">Notices — सार्वजनिक एवं व्यक्तिगत सूचनाएं</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "कुल सूचनाएं", value: String(notices.length), color: "text-primary-navy" },
                    { label: "नई / अपठित", value: String(notices.filter(n => n.isNew).length), color: "text-orange" },
                    { label: "सार्वजनिक", value: String(notices.filter(n => n.type === "सार्वजनिक").length), color: "text-slate-600" },
                    { label: "व्यक्तिगत", value: String(notices.filter(n => n.type === "व्यक्तिगत").length), color: "text-blue-600" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Notice List */}
            <div className="space-y-3">
                {notices.map((notice, i) => (
                    <div key={i} className={`bg-white rounded-xl border shadow-xs overflow-hidden hover:shadow-md transition cursor-pointer group ${notice.isNew ? "border-orange/30" : "border-slate-200"}`}>
                        <div className="p-5 flex items-start gap-4">
                            <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${notice.isNew ? "bg-orange/10" : "bg-slate-100"}`}>
                                <IconSpeakerphone className={`h-5 w-5 ${notice.isNew ? "text-orange" : "text-slate-400"}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h4 className="text-sm font-bold text-primary-navy">{notice.title}</h4>
                                    {notice.isNew && (
                                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-orange text-white shrink-0">NEW</span>
                                    )}
                                    <span className={`px-2 py-0.5 rounded text-[9px] font-semibold ${typeConfig[notice.type]?.bg} ${typeConfig[notice.type]?.text}`}>
                                        {notice.type}
                                    </span>
                                    {notice.hasAttachment && (
                                        <span className="flex items-center gap-0.5 text-[10px] text-slate-400">
                                            <IconPaperclip size={10} /> संलग्नक
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">{notice.description}</p>
                                <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-400">
                                    <span>{notice.id}</span>
                                    <span>•</span>
                                    <span>{notice.date}</span>
                                </div>
                            </div>
                            <IconChevronRight className="h-5 w-5 text-slate-300 group-hover:text-orange shrink-0 transition" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
