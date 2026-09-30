"use client";
import React, { useState } from "react";
import { IconSearch, IconReceipt2, IconEdit, IconCheck, IconAlertCircle } from "@tabler/icons-react";

const rentRecords = [
    { id: "RENT-001", tenant: "रमेश चंद्र जोशी", shop: "Shop-12 (मॉल रोड)", month: "September 2026", due: "₹ 1,200", paid: "₹ 1,200", balance: "₹ 0", status: "भुगतान हो चुका" },
    { id: "RENT-002", tenant: "दीपक वर्मा", shop: "Shop-05 (चौक बाजार)", month: "September 2026", due: "₹ 1,500", paid: "₹ 1,500", balance: "₹ 0", status: "भुगतान हो चुका" },
    { id: "RENT-003", tenant: "सुनील कुमार", shop: "Shop-22 (बस स्टैंड)", month: "September 2026", due: "₹ 950", paid: "₹ 950", balance: "₹ 0", status: "भुगतान हो चुका" },
    { id: "RENT-004", tenant: "मोहन लाल शाह", shop: "Shop-08 (लाल बाजार)", month: "September 2026", due: "₹ 2,200", paid: "₹ 0", balance: "₹ 2,200", status: "लंबित" },
    { id: "RENT-005", tenant: "प्रकाश चंद्र", shop: "Shop-33 (नैनी रोड)", month: "September 2026", due: "₹ 800", paid: "₹ 800", balance: "₹ 0", status: "भुगतान हो चुका" },
    { id: "RENT-006", tenant: "गीता देवी पंत", shop: "Shop-17 (क्लब रोड)", month: "September 2026", due: "₹ 1,800", paid: "₹ 1,000", balance: "₹ 800", status: "आंशिक" },
    { id: "RENT-007", tenant: "हरीश कुमार बिष्ट", shop: "Shop-29 (बड़ा बाजार)", month: "September 2026", due: "₹ 1,100", paid: "₹ 1,100", balance: "₹ 0", status: "भुगतान हो चुका" },
];

const statusColor: Record<string, string> = {
    "भुगतान हो चुका": "bg-emerald-50 text-emerald-700",
    "लंबित": "bg-red-50 text-red-600",
    "आंशिक": "bg-orange-50 text-orange-600",
};

const months = ["September 2026", "August 2026", "July 2026", "June 2026"];

export default function RentPage() {
    const [search, setSearch] = useState("");
    const [month, setMonth] = useState("September 2026");

    const filtered = rentRecords.filter(r => {
        const matchSearch = r.tenant.includes(search) || r.shop.toLowerCase().includes(search.toLowerCase());
        return matchSearch;
    });

    const totalDue = 9550;
    const totalPaid = 6550;
    const totalPending = 3000;

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">किराया प्रबंधन</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Rent Management — मासिक किराया बिल, भुगतान स्थिति व प्रबंधन</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange hover:bg-orange/90 text-white text-xs font-semibold rounded-lg shadow transition">
                    <IconReceipt2 size={14} /> मंथली रेंट जनरेट करें
                </button>
            </div>

            {/* Month Filter */}
            <div className="flex gap-2 flex-wrap">
                {months.map(m => (
                    <button key={m} onClick={() => setMonth(m)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${month === m ? "bg-primary-navy text-white border-primary-navy" : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"}`}>
                        {m}
                    </button>
                ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                    <div className="text-xs text-slate-500">कुल बिल (Total Due)</div>
                    <div className="text-xl font-extrabold text-primary-navy mt-0.5">₹ {totalDue.toLocaleString()}</div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                    <div className="text-xs text-slate-500">प्राप्त (Paid)</div>
                    <div className="text-xl font-extrabold text-emerald-600 mt-0.5">₹ {totalPaid.toLocaleString()}</div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${(totalPaid / totalDue * 100).toFixed(0)}%` }} />
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">{(totalPaid / totalDue * 100).toFixed(0)}% वसूल</div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                    <div className="text-xs text-slate-500">बकाया (Pending)</div>
                    <div className="text-xl font-extrabold text-rose-600 mt-0.5">₹ {totalPending.toLocaleString()}</div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                    <div className="relative w-full sm:w-72">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="किराएदार या दुकान खोजें..."
                            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" />
                    </div>
                    <span className="text-xs text-slate-500">{month} — {filtered.length} रिकॉर्ड</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">किराएदार</th>
                                <th className="px-4 py-3">दुकान</th>
                                <th className="px-4 py-3">देय राशि</th>
                                <th className="px-4 py-3">भुगतान</th>
                                <th className="px-4 py-3">शेष</th>
                                <th className="px-4 py-3">स्थिति</th>
                                <th className="px-4 py-3">क्रिया</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((r) => (
                                <tr key={r.id} className="hover:bg-slate-50 transition">
                                    <td className="px-4 py-3 font-mono text-orange font-semibold">{r.id}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{r.tenant}</td>
                                    <td className="px-4 py-3 text-slate-600">{r.shop}</td>
                                    <td className="px-4 py-3 font-bold text-primary-navy">{r.due}</td>
                                    <td className="px-4 py-3 text-emerald-700 font-semibold">{r.paid}</td>
                                    <td className="px-4 py-3 text-rose-600 font-semibold">{r.balance}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 w-fit ${statusColor[r.status]}`}>
                                            {r.status === "भुगतान हो चुका" ? <IconCheck size={10} /> : <IconAlertCircle size={10} />}
                                            {r.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition"><IconEdit size={14} /></button>
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
