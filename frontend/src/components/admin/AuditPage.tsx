"use client";
import React, { useState } from "react";
import { IconSearch, IconShieldCheck } from "@tabler/icons-react";

const auditLogs = [
    { id: "LOG-001", user: "Super Admin", action: "नया किराएदार जोड़ा", target: "रमेश चंद्र जोशी (TNT-001)", ip: "192.168.1.10", datetime: "30 Sep 2026, 10:32 AM", category: "User" },
    { id: "LOG-002", user: "Sub Admin (SA-001)", action: "किराया बिल जनरेट किया", target: "September 2026 — सभी दुकानें", ip: "192.168.1.25", datetime: "01 Sep 2026, 09:00 AM", category: "Billing" },
    { id: "LOG-003", user: "Super Admin", action: "Sub Admin निष्क्रिय किया", target: "विकास नेगी (SA-003)", ip: "192.168.1.10", datetime: "15 Aug 2026, 04:15 PM", category: "Admin" },
    { id: "LOG-004", user: "Sub Admin (SA-002)", action: "ऑफलाइन भुगतान एंट्री", target: "दीपक वर्मा — ₹ 1,500 Cash", ip: "192.168.1.31", datetime: "29 Sep 2026, 02:10 PM", category: "Payment" },
    { id: "LOG-005", user: "Super Admin", action: "सार्वजनिक सूचना जारी की", target: "NTC-001 — किराया भुगतान अंतिम तिथि", ip: "192.168.1.10", datetime: "01 Sep 2026, 08:45 AM", category: "Notice" },
    { id: "LOG-006", user: "System", action: "Failed Login Attempt", target: "IP: 117.201.42.10", ip: "117.201.42.10", datetime: "28 Sep 2026, 11:55 PM", category: "Security" },
];

const categoryColor: Record<string, string> = {
    "User": "bg-blue-50 text-blue-700",
    "Billing": "bg-primary-navy/10 text-primary-navy",
    "Admin": "bg-purple-50 text-purple-700",
    "Payment": "bg-emerald-50 text-emerald-700",
    "Notice": "bg-orange-50 text-orange",
    "Security": "bg-red-50 text-red-600",
};

export default function AuditPage() {
    const [search, setSearch] = useState("");
    const [catFilter, setCatFilter] = useState("सभी");

    const categories = ["सभी", ...Array.from(new Set(auditLogs.map(l => l.category)))];

    const filtered = auditLogs.filter(l => {
        const matchSearch = l.user.includes(search) || l.action.includes(search) || l.target.includes(search);
        const matchCat = catFilter === "सभी" || l.category === catFilter;
        return matchSearch && matchCat;
    });

    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">ऑडिट लॉग्स</h2>
                <p className="text-sm text-slate-500 mt-0.5">Audit Logs & Activity — प्रशासनिक गतिविधियों, लॉगिन प्रयासों और वित्तीय परिवर्तनों की ऑडिट ट्रेल</p>
            </div>

            {/* Info & Compliance Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary-navy/5 border border-primary-navy/10 text-xs text-primary-navy">
                    <IconShieldCheck className="h-4 w-4 shrink-0 text-orange" />
                    <div>
                        <span className="font-bold block">Read-Only Audit Ledger:</span>
                        <span>यह लॉग अपरिवर्तनीय (Immutable) है। वित्तीय व प्रशासनिक ऑडिट ट्रेल कभी हटाई नहीं जाती।</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                    <span className="text-base shrink-0">⚠️</span>
                    <div>
                        <span className="font-bold block text-primary-navy">गोपनीयता नीति (Security Sec 10 & PRD Sec 23):</span>
                        <span>पासवर्ड, OTP कोड, प्रमाणीकरण टोकन एवं बैंक/कार्ड क्रेडेंशियल ऑडिट लॉग्स में कभी भी स्टोर नहीं किए जाते।</span>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <div className="relative w-full sm:w-72">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="यूजर, एक्शन, टारगेट..."
                        className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div className="flex gap-1.5 flex-wrap">
                    {categories.map(c => (
                        <button key={c} onClick={() => setCatFilter(c)}
                            className={`px-3 py-1 rounded-full text-[11px] font-semibold transition ${catFilter === c ? "bg-primary-navy text-white" : "bg-white border border-slate-300 text-slate-600 hover:bg-slate-50"}`}>
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="px-4 py-3">Log ID</th>
                                <th className="px-4 py-3">यूजर</th>
                                <th className="px-4 py-3">एक्शन</th>
                                <th className="px-4 py-3">टारगेट</th>
                                <th className="px-4 py-3">IP</th>
                                <th className="px-4 py-3">दिनांक/समय</th>
                                <th className="px-4 py-3">श्रेणी</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map(l => (
                                <tr key={l.id} className={`hover:bg-slate-50 transition ${l.category === "Security" ? "bg-red-50/40" : ""}`}>
                                    <td className="px-4 py-3 font-mono text-orange font-semibold">{l.id}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{l.user}</td>
                                    <td className="px-4 py-3 text-slate-700">{l.action}</td>
                                    <td className="px-4 py-3 text-slate-500 max-w-xs truncate">{l.target}</td>
                                    <td className="px-4 py-3 font-mono text-slate-400 text-[10px]">{l.ip}</td>
                                    <td className="px-4 py-3 text-slate-500">{l.datetime}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${categoryColor[l.category]}`}>{l.category}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
