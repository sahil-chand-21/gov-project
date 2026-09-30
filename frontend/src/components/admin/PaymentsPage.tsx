"use client";
import React, { useState } from "react";
import { IconSearch, IconCreditCard, IconPlus } from "@tabler/icons-react";

const payments = [
    { id: "AZP/RENT/2026/000142", tenant: "रमेश चंद्र जोशी", shop: "Shop-12", amount: "₹ 1,200", mode: "Razorpay Online", txnRef: "pay_Qb9x12ZAbc", date: "30 Sep 2026", type: "Online", status: "सफल" },
    { id: "AZP/RENT/2026/000141", tenant: "दीपक वर्मा", shop: "Shop-05", amount: "₹ 1,500", mode: "Cash", txnRef: "CASH-2026-141", date: "29 Sep 2026", type: "Offline", status: "सफल" },
    { id: "AZP/RENT/2026/000140", tenant: "सुनील कुमार", shop: "Shop-22", amount: "₹ 950", mode: "UPI", txnRef: "UPI9876543210", date: "28 Sep 2026", type: "Online", status: "सफल" },
    { id: "AZP/RENT/2026/000139", tenant: "मोहन लाल शाह", shop: "Shop-08", amount: "₹ 2,200", mode: "Razorpay Online", txnRef: "pay_Qb9x00Failed", date: "27 Sep 2026", type: "Online", status: "विफल" },
    { id: "AZP/RENT/2026/000138", tenant: "प्रकाश चंद्र", shop: "Shop-33", amount: "₹ 800", mode: "UPI", txnRef: "UPI1234567890", date: "26 Sep 2026", type: "Online", status: "सफल" },
    { id: "AZP/RENT/2026/000137", tenant: "गीता देवी पंत", shop: "Shop-17", amount: "₹ 1,000", mode: "Cash", txnRef: "CASH-2026-137", date: "25 Sep 2026", type: "Offline", status: "सफल" },
];

const statusColor: Record<string, string> = {
    "सफल": "bg-emerald-50 text-emerald-700",
    "विफल": "bg-red-50 text-red-600",
    "लंबित": "bg-orange-50 text-orange-600",
};

export default function PaymentsPage() {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("सभी");

    const filtered = payments.filter(p => {
        const matchSearch = p.tenant.includes(search) || p.id.includes(search) || p.txnRef.includes(search);
        const matchType = typeFilter === "सभी" || (typeFilter === "Online" && p.type === "Online") || (typeFilter === "Offline" && p.type === "Offline");
        return matchSearch && matchType;
    });

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">भुगतान प्रबंधन</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Payment Management — ऑनलाइन (Razorpay/UPI) एवं ऑफलाइन कैश भुगतान</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-navy hover:bg-primary-navy/90 text-white text-xs font-semibold rounded-lg shadow transition">
                    <IconPlus size={14} /> ऑफलाइन भुगतान एंट्री
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "कुल लेनदेन", value: String(payments.length), color: "text-primary-navy" },
                    { label: "सफल भुगतान", value: String(payments.filter(p => p.status === "सफल").length), color: "text-emerald-600" },
                    { label: "ऑनलाइन", value: String(payments.filter(p => p.type === "Online").length), color: "text-blue-600" },
                    { label: "ऑफलाइन / कैश", value: String(payments.filter(p => p.type === "Offline").length), color: "text-orange" },
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
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="रसीद सं., किराएदार, Txn ID..."
                                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" />
                        </div>
                        <div className="flex gap-1.5">
                            {["सभी", "Online", "Offline"].map(f => (
                                <button key={f} onClick={() => setTypeFilter(f)}
                                    className={`px-3 py-1 rounded-full text-[11px] font-semibold transition ${typeFilter === f ? "bg-primary-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
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
                                <th className="px-4 py-3"><span className="flex items-center gap-1"><IconCreditCard size={13} /> रसीद सं.</span></th>
                                <th className="px-4 py-3">किराएदार</th>
                                <th className="px-4 py-3">दुकान</th>
                                <th className="px-4 py-3">राशि</th>
                                <th className="px-4 py-3">माध्यम</th>
                                <th className="px-4 py-3">Txn Reference</th>
                                <th className="px-4 py-3">तारीख</th>
                                <th className="px-4 py-3">प्रकार</th>
                                <th className="px-4 py-3">स्थिति</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((p) => (
                                <tr key={p.id} className="hover:bg-slate-50 transition">
                                    <td className="px-4 py-3 font-mono text-orange font-semibold text-[10px]">{p.id}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{p.tenant}</td>
                                    <td className="px-4 py-3 text-slate-600">{p.shop}</td>
                                    <td className="px-4 py-3 font-bold text-primary-navy">{p.amount}</td>
                                    <td className="px-4 py-3 text-slate-600">{p.mode}</td>
                                    <td className="px-4 py-3 font-mono text-slate-500 text-[10px]">{p.txnRef}</td>
                                    <td className="px-4 py-3 text-slate-500">{p.date}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${p.type === "Online" ? "bg-blue-50 text-blue-700" : "bg-orange/10 text-orange"}`}>{p.type}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${statusColor[p.status]}`}>{p.status}</span>
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
