"use client";
import React, { useState } from "react";
import { IconPlus, IconSearch, IconEdit, IconShieldCheck, IconShieldOff, IconUserShield } from "@tabler/icons-react";

const subAdmins = [
    { id: "SA-001", name: "अनिल कुमार सिंह", mobile: "9876543211", email: "anil.singh@almora.gov.in", role: "Sub Admin", zone: "मॉल रोड ज़ोन", status: "सक्रिय", since: "01 Apr 2023" },
    { id: "SA-002", name: "सुमन पंत", mobile: "9812345679", email: "suman.pant@almora.gov.in", role: "Sub Admin", zone: "चौक बाजार ज़ोन", status: "सक्रिय", since: "15 Jun 2022" },
    { id: "SA-003", name: "विकास नेगी", mobile: "9898765433", email: "vikas.negi@almora.gov.in", role: "Sub Admin", zone: "बस स्टैंड ज़ोन", status: "निष्क्रिय", since: "20 Jan 2021" },
    { id: "SA-004", name: "रेखा बिष्ट", mobile: "9765432199", email: "rekha.bisht@almora.gov.in", role: "Sub Admin", zone: "लाल बाजार ज़ोन", status: "सक्रिय", since: "10 Nov 2023" },
];

const statusColor: Record<string, string> = {
    "सक्रिय": "bg-emerald-50 text-emerald-700",
    "निष्क्रिय": "bg-slate-100 text-slate-500",
};

export default function SubAdminsPage() {
    const [search, setSearch] = useState("");
    const filtered = subAdmins.filter(s =>
        s.name.includes(search) || s.zone.includes(search) || s.email.includes(search)
    );

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">सब एडमिन प्रबंधन</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Sub Admin Management — Super Admin द्वारा नियुक्त उप-प्रशासक</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-navy hover:bg-primary-navy/90 text-white text-xs font-semibold rounded-lg shadow transition">
                    <IconPlus size={14} /> नया Sub Admin जोड़ें
                </button>
            </div>

            {/* Super Admin Privileges Security Banner */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 shadow-xs">
                <span className="text-base">🔐</span>
                <div>
                    <span className="font-bold block text-primary-navy">Super Admin विशेष अधिकार (PRD Sec 4.1 & Security Sec 2):</span>
                    <span>केवल Super Admin ही Sub Admins की नियुक्ति, क्षेत्र आवंटन, या निष्क्रियता कर सकते हैं। Sub Admin अन्य Admins को बनाने या संशोधित करने के लिए अधिकृत नहीं हैं।</span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: "कुल Sub Admins", value: String(subAdmins.length), color: "text-primary-navy" },
                    { label: "सक्रिय (MFA 2FA Active)", value: String(subAdmins.filter(s => s.status === "सक्रिय").length), color: "text-emerald-600" },
                    { label: "निष्क्रिय (Soft Deleted)", value: String(subAdmins.filter(s => s.status === "निष्क्रिय").length), color: "text-slate-500" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                    <div className="relative w-full sm:w-72">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            value={search} onChange={e => setSearch(e.target.value)}
                            placeholder="नाम, ज़ोन या ईमेल खोजें..."
                            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange"
                        />
                    </div>
                    <span className="text-xs text-slate-500">{filtered.length} Sub Admin मिले</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3"><span className="flex items-center gap-1"><IconUserShield size={13} /> नाम</span></th>
                                <th className="px-4 py-3">मोबाइल</th>
                                <th className="px-4 py-3">ईमेल</th>
                                <th className="px-4 py-3">ज़ोन / क्षेत्र</th>
                                <th className="px-4 py-3">स्थिति</th>
                                <th className="px-4 py-3">नियुक्ति तिथि</th>
                                <th className="px-4 py-3">क्रिया</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((sa) => (
                                <tr key={sa.id} className="hover:bg-slate-50 transition">
                                    <td className="px-4 py-3 font-mono text-orange font-semibold">{sa.id}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{sa.name}</td>
                                    <td className="px-4 py-3 text-slate-600">{sa.mobile}</td>
                                    <td className="px-4 py-3 text-slate-600">{sa.email}</td>
                                    <td className="px-4 py-3 text-slate-600">{sa.zone}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${statusColor[sa.status]}`}>{sa.status}</span>
                                    </td>
                                    <td className="px-4 py-3 text-slate-500">{sa.since}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition"><IconEdit size={14} /></button>
                                            {sa.status === "सक्रिय"
                                                ? <button className="p-1.5 rounded-lg hover:bg-orange-50 text-orange-500 transition" title="निष्क्रिय करें"><IconShieldOff size={14} /></button>
                                                : <button className="p-1.5 rounded-lg hover:bg-emerald-50 text-emerald-600 transition" title="सक्रिय करें"><IconShieldCheck size={14} /></button>
                                            }
                                        </div>
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
