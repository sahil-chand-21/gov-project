"use client";
import React, { useState } from "react";
import { IconSearch, IconPlus, IconUser, IconBuildingStore, IconPhone, IconEdit, IconTrash } from "@tabler/icons-react";

const tenants = [
    { id: "TNT-001", name: "रमेश चंद्र जोशी", mobile: "9876543210", shop: "Shop-12 (मॉल रोड)", rent: "₹ 1,200", status: "सक्रिय", joined: "15 Jan 2022" },
    { id: "TNT-002", name: "दीपक वर्मा", mobile: "9812345678", shop: "Shop-05 (चौक बाजार)", rent: "₹ 1,500", status: "सक्रिय", joined: "03 Mar 2021" },
    { id: "TNT-003", name: "सुनील कुमार", mobile: "9898765432", shop: "Shop-22 (बस स्टैंड)", rent: "₹ 950", status: "सक्रिय", joined: "20 Jul 2023" },
    { id: "TNT-004", name: "मोहन लाल शाह", mobile: "9765432198", shop: "Shop-08 (लाल बाजार)", rent: "₹ 2,200", status: "बकाया", joined: "11 Nov 2020" },
    { id: "TNT-005", name: "प्रकाश चंद्र", mobile: "9654321987", shop: "Shop-33 (नैनी रोड)", rent: "₹ 800", status: "सक्रिय", joined: "05 Feb 2024" },
    { id: "TNT-006", name: "गीता देवी पंत", mobile: "9543219876", shop: "Shop-17 (क्लब रोड)", rent: "₹ 1,800", status: "निष्क्रिय", joined: "22 Jun 2019" },
    { id: "TNT-007", name: "हरीश कुमार बिष्ट", mobile: "9432198765", shop: "Shop-29 (बड़ा बाजार)", rent: "₹ 1,100", status: "सक्रिय", joined: "08 Sep 2022" },
];

const statusColor: Record<string, string> = {
    "सक्रिय": "bg-emerald-50 text-emerald-700",
    "बकाया": "bg-red-50 text-red-600",
    "निष्क्रिय": "bg-slate-100 text-slate-500",
};

export default function TenantsPage() {
    const [search, setSearch] = useState("");
    const filtered = tenants.filter(t =>
        t.name.includes(search) || t.mobile.includes(search) || t.shop.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">किराएदार प्रबंधन</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Tenant / User Management — सभी किराएदारों की सूची</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-navy hover:bg-primary-navy/90 text-white text-xs font-semibold rounded-lg shadow transition">
                    <IconPlus size={14} /> नया किराएदार जोड़ें
                </button>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: "कुल किराएदार", value: "380", color: "text-primary-navy" },
                    { label: "सक्रिय", value: "340", color: "text-emerald-600" },
                    { label: "बकाया / निष्क्रिय", value: "40", color: "text-rose-600" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Search + Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                    <div className="relative w-full sm:w-72">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="नाम, मोबाइल या दुकान खोजें..."
                            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange"
                        />
                    </div>
                    <span className="text-xs text-slate-500">{filtered.length} किराएदार मिले</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="px-4 py-3 flex items-center gap-1.5"><IconUser size={13} /> किराएदार ID</th>
                                <th className="px-4 py-3">नाम</th>
                                <th className="px-4 py-3"><span className="flex items-center gap-1"><IconPhone size={13} /> मोबाइल</span></th>
                                <th className="px-4 py-3"><span className="flex items-center gap-1"><IconBuildingStore size={13} /> दुकान</span></th>
                                <th className="px-4 py-3">मासिक किराया</th>
                                <th className="px-4 py-3">स्थिति</th>
                                <th className="px-4 py-3">सम्मिलित</th>
                                <th className="px-4 py-3">क्रिया</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((t) => (
                                <tr key={t.id} className="hover:bg-slate-50 transition">
                                    <td className="px-4 py-3 font-mono text-orange font-semibold">{t.id}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{t.name}</td>
                                    <td className="px-4 py-3 text-slate-600">{t.mobile}</td>
                                    <td className="px-4 py-3 text-slate-600">{t.shop}</td>
                                    <td className="px-4 py-3 font-bold text-primary-navy">{t.rent}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${statusColor[t.status]}`}>{t.status}</span>
                                    </td>
                                    <td className="px-4 py-3 text-slate-500">{t.joined}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition"><IconEdit size={14} /></button>
                                            <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition"><IconTrash size={14} /></button>
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
