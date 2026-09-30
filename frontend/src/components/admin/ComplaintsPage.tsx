"use client";
import React, { useState } from "react";
import { IconMessageReport, IconSearch, IconCheck, IconClock, IconX } from "@tabler/icons-react";

const complaints = [
    { id: "CMP-001", tenant: "रमेश चंद्र जोशी", shop: "Shop-12", subject: "दुकान की छत में रिसाव की समस्या", date: "20 Sep 2026", status: "हल हो गया", priority: "उच्च" },
    { id: "CMP-002", tenant: "दीपक वर्मा", shop: "Shop-05", subject: "बिजली कनेक्शन बाधित है", date: "25 Sep 2026", status: "प्रगति में", priority: "अत्यंत उच्च" },
    { id: "CMP-003", tenant: "सुनील कुमार", shop: "Shop-22", subject: "पानी की आपूर्ति बंद है", date: "27 Sep 2026", status: "लंबित", priority: "मध्यम" },
    { id: "CMP-004", tenant: "हरीश कुमार बिष्ट", shop: "Shop-29", subject: "शोर व अतिक्रमण की शिकायत", date: "28 Sep 2026", status: "लंबित", priority: "कम" },
    { id: "CMP-005", tenant: "गीता देवी पंत", shop: "Shop-17", subject: "रसीद में गलत राशि दर्ज है", date: "29 Sep 2026", status: "बंद", priority: "मध्यम" },
];

const statusColor: Record<string, string> = {
    "लंबित": "bg-orange-50 text-orange-600",
    "प्रगति में": "bg-blue-50 text-blue-700",
    "हल हो गया": "bg-emerald-50 text-emerald-700",
    "बंद": "bg-slate-100 text-slate-500",
};

const statusIcon: Record<string, React.ReactNode> = {
    "लंबित": <IconClock size={11} />,
    "प्रगति में": <IconClock size={11} />,
    "हल हो गया": <IconCheck size={11} />,
    "बंद": <IconX size={11} />,
};

const priorityColor: Record<string, string> = {
    "अत्यंत उच्च": "bg-red-600 text-white",
    "उच्च": "bg-orange-500 text-white",
    "मध्यम": "bg-yellow-400 text-primary-navy",
    "कम": "bg-slate-200 text-slate-600",
};

export default function ComplaintsPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("सभी");

    const filtered = complaints.filter(c => {
        const matchSearch = c.tenant.includes(search) || c.subject.includes(search) || c.shop.includes(search);
        const matchFilter = filter === "सभी" || c.status === filter;
        return matchSearch && matchFilter;
    });

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">शिकायत निवारण</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Complaint Management — Pending → In Progress → Resolved → Closed</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "कुल शिकायतें", value: String(complaints.length), color: "text-primary-navy" },
                    { label: "लंबित", value: String(complaints.filter(c => c.status === "लंबित").length), color: "text-orange-600" },
                    { label: "प्रगति में", value: String(complaints.filter(c => c.status === "प्रगति में").length), color: "text-blue-600" },
                    { label: "हल / बंद", value: String(complaints.filter(c => c.status === "हल हो गया" || c.status === "बंद").length), color: "text-emerald-600" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <div className="relative w-full sm:w-72">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="किराएदार, दुकान या विषय..."
                        className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div className="flex gap-1.5 flex-wrap">
                    {["सभी", "लंबित", "प्रगति में", "हल हो गया", "बंद"].map(f => (
                        <button key={f} onClick={() => setFilter(f)}
                            className={`px-3 py-1 rounded-full text-[11px] font-semibold transition ${filter === f ? "bg-primary-navy text-white" : "bg-white border border-slate-300 text-slate-600 hover:bg-slate-50"}`}>
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Complaint Cards */}
            <div className="space-y-3">
                {filtered.map(c => (
                    <div key={c.id} className="bg-white rounded-xl border border-slate-200 shadow-xs px-5 py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <div className="h-10 w-10 shrink-0 rounded-xl bg-primary-navy/5 flex items-center justify-center">
                                <IconMessageReport className="h-5 w-5 text-primary-navy" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-primary-navy text-sm">{c.subject}</div>
                                <div className="flex flex-wrap items-center gap-3 mt-1">
                                    <span className="text-[11px] text-slate-500">👤 {c.tenant}</span>
                                    <span className="text-[11px] text-slate-400">🏪 {c.shop}</span>
                                    <span className="text-[11px] text-slate-400">📅 {c.date}</span>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${priorityColor[c.priority]}`}>{c.priority}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold ${statusColor[c.status]}`}>
                                    {statusIcon[c.status]} {c.status}
                                </span>
                                <select className="text-xs border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange text-slate-600">
                                    <option>स्थिति बदलें</option>
                                    <option>प्रगति में</option>
                                    <option>हल हो गया</option>
                                    <option>बंद</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
