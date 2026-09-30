"use client";
import React, { useState } from "react";
import { IconPlus, IconSpeakerphone, IconPaperclip, IconUsers, IconUser } from "@tabler/icons-react";

const notices = [
    { id: "NTC-001", title: "सितम्बर 2026 किराया भुगतान की अंतिम तिथि", type: "सार्वजनिक", audience: "सभी किराएदार", date: "01 Sep 2026", attachment: true, status: "प्रकाशित" },
    { id: "NTC-002", title: "दुकान नवीनीकरण नीति 2026 — अनुबंध अपडेट", type: "सार्वजनिक", audience: "सभी किराएदार", date: "15 Aug 2026", attachment: true, status: "प्रकाशित" },
    { id: "NTC-003", title: "Shop-08 मोहन लाल शाह — बकाया किराया अंतिम नोटिस", type: "व्यक्तिगत", audience: "मोहन लाल शाह", date: "25 Sep 2026", attachment: false, status: "भेजा गया" },
    { id: "NTC-004", title: "मासिक किराया वृद्धि सूचना (Oct 2026 से)", type: "सार्वजनिक", audience: "सभी किराएदार", date: "20 Sep 2026", attachment: false, status: "प्रकाशित" },
    { id: "NTC-005", title: "Shop-17 गीता देवी पंत — आंशिक भुगतान अनुस्मारक", type: "व्यक्तिगत", audience: "गीता देवी पंत", date: "28 Sep 2026", attachment: false, status: "भेजा गया" },
];

const statusColor: Record<string, string> = {
    "प्रकाशित": "bg-emerald-50 text-emerald-700",
    "भेजा गया": "bg-blue-50 text-blue-700",
    "ड्राफ्ट": "bg-slate-100 text-slate-500",
};

export default function NoticesPage() {
    const [filter, setFilter] = useState("सभी");

    const filtered = notices.filter(n => filter === "सभी" || n.type === filter);

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">सूचना प्रबंधन</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Notice Management — सार्वजनिक एवं व्यक्तिगत सूचनाएं</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-navy hover:bg-primary-navy/90 text-white text-xs font-semibold rounded-lg shadow transition">
                    <IconPlus size={14} /> नई सूचना जारी करें
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: "कुल सूचनाएं", value: String(notices.length), color: "text-primary-navy" },
                    { label: "सार्वजनिक", value: String(notices.filter(n => n.type === "सार्वजनिक").length), color: "text-blue-600" },
                    { label: "व्यक्तिगत", value: String(notices.filter(n => n.type === "व्यक्तिगत").length), color: "text-orange" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
                {["सभी", "सार्वजनिक", "व्यक्तिगत"].map(f => (
                    <button key={f} onClick={() => setFilter(f)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${filter === f ? "bg-primary-navy text-white border-primary-navy" : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"}`}>
                        {f === "सार्वजनिक" ? <span className="flex items-center gap-1"><IconUsers size={12} /> {f}</span> : f === "व्यक्तिगत" ? <span className="flex items-center gap-1"><IconUser size={12} /> {f}</span> : f}
                    </button>
                ))}
            </div>

            {/* Notice Cards */}
            <div className="space-y-3">
                {filtered.map((n) => (
                    <div key={n.id} className="bg-white rounded-xl border border-slate-200 shadow-xs px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center ${n.type === "सार्वजनिक" ? "bg-blue-100" : "bg-orange-100"}`}>
                            <IconSpeakerphone className={`h-5 w-5 ${n.type === "सार्वजनिक" ? "text-blue-600" : "text-orange"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-primary-navy text-sm">{n.title}</div>
                            <div className="flex flex-wrap items-center gap-3 mt-1">
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${n.type === "सार्वजनिक" ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange"}`}>{n.type}</span>
                                <span className="text-[11px] text-slate-500">👤 {n.audience}</span>
                                <span className="text-[11px] text-slate-400">📅 {n.date}</span>
                                {n.attachment && <span className="flex items-center gap-0.5 text-[11px] text-slate-400"><IconPaperclip size={11} /> PDF संलग्न</span>}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${statusColor[n.status]}`}>{n.status}</span>
                            <button className="text-xs text-orange font-semibold hover:underline">देखें</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
