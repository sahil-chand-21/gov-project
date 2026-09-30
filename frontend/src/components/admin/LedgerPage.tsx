"use client";
import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

const ledgerEntries = [
    { date: "30 Sep 2026", tenant: "रमेश चंद्र जोशी", shop: "Shop-12", type: "Credit", desc: "Sept 2026 किराया भुगतान", debit: "—", credit: "₹ 1,200", balance: "₹ 0" },
    { date: "01 Sep 2026", tenant: "रमेश चंद्र जोशी", shop: "Shop-12", type: "Debit", desc: "Sept 2026 किराया बिल जनरेट", debit: "₹ 1,200", credit: "—", balance: "₹ 1,200" },
    { date: "29 Sep 2026", tenant: "दीपक वर्मा", shop: "Shop-05", type: "Credit", desc: "Sept 2026 किराया भुगतान (Cash)", debit: "—", credit: "₹ 1,500", balance: "₹ 0" },
    { date: "01 Sep 2026", tenant: "दीपक वर्मा", shop: "Shop-05", type: "Debit", desc: "Sept 2026 किराया बिल जनरेट", debit: "₹ 1,500", credit: "—", balance: "₹ 1,500" },
    { date: "28 Sep 2026", tenant: "सुनील कुमार", shop: "Shop-22", type: "Credit", desc: "Sept 2026 किराया भुगतान (UPI)", debit: "—", credit: "₹ 950", balance: "₹ 0" },
    { date: "01 Sep 2026", tenant: "मोहन लाल शाह", shop: "Shop-08", type: "Debit", desc: "Sept 2026 किराया बिल जनरेट", debit: "₹ 2,200", credit: "—", balance: "₹ 2,200" },
];

export default function LedgerPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("सभी");

    const filtered = ledgerEntries.filter(e => {
        const matchSearch = e.tenant.includes(search) || e.shop.includes(search) || e.desc.includes(search);
        const matchFilter = filter === "सभी" || e.type === filter;
        return matchSearch && matchFilter;
    });

    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">खाता विवरण लेजर</h2>
                <p className="text-sm text-slate-500 mt-0.5">Ledger Management — डेबिट/क्रेडिट/बैलेंस — अपरिवर्तनीय वित्तीय रिकॉर्ड</p>
            </div>

            {/* Info Banner */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-700">
                <span className="font-bold">🔒 Immutable Records:</span>
                लेजर में एक बार दर्ज प्रविष्टियां संशोधित नहीं की जा सकतीं। गलती सुधारने के लिए Reversal Entry की जाएगी।
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: "कुल Debit (बिल)", value: "₹ 4,900", color: "text-rose-600" },
                    { label: "कुल Credit (भुगतान)", value: "₹ 3,650", color: "text-emerald-600" },
                    { label: "कुल Balance (बकाया)", value: "₹ 1,250", color: "text-primary-navy" },
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
                    <div className="flex items-center gap-3">
                        <div className="relative w-64">
                            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="किराएदार, दुकान या विवरण..."
                                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" />
                        </div>
                        <div className="flex gap-1.5">
                            {["सभी", "Debit", "Credit"].map(f => (
                                <button key={f} onClick={() => setFilter(f)}
                                    className={`px-3 py-1 rounded-full text-[11px] font-semibold transition ${filter === f ? "bg-primary-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="px-4 py-3">तारीख</th>
                                <th className="px-4 py-3">किराएदार</th>
                                <th className="px-4 py-3">दुकान</th>
                                <th className="px-4 py-3">प्रकार</th>
                                <th className="px-4 py-3">विवरण</th>
                                <th className="px-4 py-3 text-rose-600">Debit (—)</th>
                                <th className="px-4 py-3 text-emerald-600">Credit (+)</th>
                                <th className="px-4 py-3">Balance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((e, i) => (
                                <tr key={i} className={`hover:bg-slate-50 transition ${e.type === "Debit" ? "bg-red-50/30" : "bg-emerald-50/30"}`}>
                                    <td className="px-4 py-3 text-slate-500">{e.date}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{e.tenant}</td>
                                    <td className="px-4 py-3 text-slate-600">{e.shop}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${e.type === "Debit" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>{e.type}</span>
                                    </td>
                                    <td className="px-4 py-3 text-slate-600">{e.desc}</td>
                                    <td className="px-4 py-3 font-semibold text-rose-600">{e.debit}</td>
                                    <td className="px-4 py-3 font-semibold text-emerald-600">{e.credit}</td>
                                    <td className="px-4 py-3 font-bold text-primary-navy">{e.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
