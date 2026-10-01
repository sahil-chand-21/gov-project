"use client";
import React, { useState } from "react";
import { IconMessageReport, IconSearch, IconPlus, IconClock, IconCheck, IconX, IconPaperclip } from "@tabler/icons-react";

const complaints = [
    { id: "CMP-003", subject: "पानी की आपूर्ति बंद है", description: "मॉल रोड Shop-12 में पिछले 3 दिनों से पानी की आपूर्ति बंद है।", date: "27 Sep 2026", status: "प्रगति में", remarks: "प्लंबर टीम भेजी गई है। कार्य जल्द पूरा होगा।" },
    { id: "CMP-001", subject: "दुकान की छत में रिसाव की समस्या", description: "बरसात के मौसम में छत से पानी टपकता है, जिससे सामान को नुकसान हो रहा है।", date: "20 Sep 2026", status: "हल हो गया", remarks: "छत मरम्मत कार्य पूर्ण। कृपया जांच करें।" },
];

const statusConfig: Record<string, { icon: React.ReactNode; bg: string; text: string }> = {
    "लंबित": { icon: <IconClock size={11} />, bg: "bg-orange-50", text: "text-orange-600" },
    "प्रगति में": { icon: <IconClock size={11} />, bg: "bg-blue-50", text: "text-blue-700" },
    "हल हो गया": { icon: <IconCheck size={11} />, bg: "bg-emerald-50", text: "text-emerald-700" },
    "बंद": { icon: <IconX size={11} />, bg: "bg-slate-100", text: "text-slate-500" },
};

export default function ComplaintsPage() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">शिकायतें</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Complaints — शिकायत दर्ज करें एवं स्थिति देखें</p>
                </div>
                <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 px-4 py-2 bg-primary-navy hover:bg-primary-navy/90 text-white text-xs font-semibold rounded-lg shadow transition">
                    <IconPlus size={14} /> नई शिकायत दर्ज करें
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "कुल शिकायतें", value: String(complaints.length), color: "text-primary-navy" },
                    { label: "लंबित", value: "0", color: "text-orange-600" },
                    { label: "प्रगति में", value: "1", color: "text-blue-600" },
                    { label: "हल / बंद", value: "1", color: "text-emerald-600" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* New Complaint Form */}
            {showForm && (
                <div className="bg-white rounded-xl border border-orange/30 shadow-xs">
                    <div className="px-5 py-4 border-b border-slate-100 bg-orange-50/30">
                        <h3 className="font-bold text-primary-navy text-sm">नई शिकायत दर्ज करें (File New Complaint)</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div>
                            <label className="text-xs font-medium text-slate-600">विषय (Subject) *</label>
                            <input type="text" className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" placeholder="शिकायत का विषय लिखें..." />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600">विवरण (Description) *</label>
                            <textarea rows={4} className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange resize-none" placeholder="शिकायत का पूरा विवरण लिखें..."></textarea>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600">संलग्नक (Attachment) — वैकल्पिक</label>
                            <div className="mt-1 border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-orange transition cursor-pointer">
                                <IconPaperclip className="h-5 w-5 text-slate-400 mx-auto" />
                                <p className="text-[10px] text-slate-500 mt-1">PDF, JPG, JPEG, PNG (अधिकतम 5MB)</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-5 py-2 text-xs font-semibold rounded-lg bg-primary-navy hover:bg-primary-navy/90 text-white shadow transition">
                                शिकायत दर्ज करें (Submit)
                            </button>
                            <button onClick={() => setShowForm(false)} className="px-5 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 transition">
                                रद्द करें (Cancel)
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Complaints List */}
            <div className="space-y-3">
                {complaints.map((complaint, i) => {
                    const cfg = statusConfig[complaint.status] || statusConfig["लंबित"];
                    return (
                        <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-3 flex-1">
                                        <div className="h-10 w-10 rounded-xl bg-primary-navy/5 flex items-center justify-center shrink-0">
                                            <IconMessageReport className="h-5 w-5 text-primary-navy" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h4 className="text-sm font-bold text-primary-navy">{complaint.subject}</h4>
                                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${cfg.bg} ${cfg.text}`}>
                                                    {cfg.icon} {complaint.status}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-1.5">{complaint.description}</p>
                                            <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-400">
                                                <span>{complaint.id}</span>
                                                <span>•</span>
                                                <span>{complaint.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Timeline */}
                                {complaint.remarks && (
                                    <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">प्रशासक टिप्पणी (Admin Remarks)</div>
                                        <p className="text-xs text-slate-600">{complaint.remarks}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
