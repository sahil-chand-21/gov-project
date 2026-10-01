"use client";
import React, { useState } from "react";
import { IconCreditCard, IconSearch, IconReceipt, IconDownload } from "@tabler/icons-react";

const payableRent = [
    { period: "अक्टूबर 2026", amount: "₹ 1,200", dueDate: "10 Oct 2026", eligible: true },
];

const paymentHistory = [
    { id: "AZP/RENT/2026/000142", period: "सितंबर 2026", amount: "₹ 1,200", mode: "Razorpay Online", txnRef: "pay_Qb9x12ZAbc", date: "30 Sep 2026", status: "सफल" },
    { id: "AZP/RENT/2026/000138", period: "अगस्त 2026", amount: "₹ 1,200", mode: "UPI", txnRef: "UPI9876543210", date: "28 Aug 2026", status: "सफल" },
    { id: "AZP/RENT/2026/000130", period: "जुलाई 2026", amount: "₹ 1,200", mode: "Cash", txnRef: "CASH-2026-130", date: "05 Jul 2026", status: "सफल" },
    { id: "AZP/RENT/2026/000125", period: "जून 2026", amount: "₹ 1,200", mode: "Razorpay Online", txnRef: "pay_Qa5y08XYZq", date: "03 Jun 2026", status: "सफल" },
    { id: "AZP/RENT/2026/000118", period: "मई 2026", amount: "₹ 1,200", mode: "UPI", txnRef: "UPI5432109876", date: "02 May 2026", status: "सफल" },
    { id: "AZP/RENT/2026/000110", period: "अप्रैल 2026", amount: "₹ 1,000", mode: "Cash", txnRef: "CASH-2026-110", date: "05 Apr 2026", status: "सफल" },
];

const statusColor: Record<string, string> = {
    "सफल": "bg-emerald-50 text-emerald-700",
    "विफल": "bg-red-50 text-red-600",
    "लंबित": "bg-orange-50 text-orange-600",
};

export default function PaymentsPage() {
    const [search, setSearch] = useState("");

    const filtered = paymentHistory.filter(p =>
        p.period.includes(search) || p.id.includes(search) || p.txnRef.includes(search)
    );

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">भुगतान</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Payments — ऑनलाइन भुगतान एवं भुगतान इतिहास</p>
                </div>
            </div>

            {/* Pay Rent Section */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-bold text-sm">किराया भुगतान करें</h3>
                        <p className="text-white/70 text-xs mt-0.5">Pay Rent — Razorpay / UPI / Online</p>
                    </div>
                    <IconCreditCard className="h-8 w-8 text-white/40" />
                </div>
                <div className="p-5">
                    {payableRent.length > 0 ? (
                        <div className="space-y-3">
                            {payableRent.map((rent, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-emerald-50/50 border border-emerald-100">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                                            <IconReceipt className="h-5 w-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-primary-navy">{rent.period}</div>
                                            <div className="text-[10px] text-slate-500 mt-0.5">अंतिम तिथि: {rent.dueDate}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl font-extrabold text-primary-navy">{rent.amount}</span>
                                        <button className="px-5 py-2.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 transition transform hover:scale-105">
                                            भुगतान करें →
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <p className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-2">
                                🔒 सभी भुगतान Razorpay Payment Gateway द्वारा सुरक्षित हैं। Server-side verification enabled.
                            </p>
                        </div>
                    ) : (
                        <div className="text-center py-6">
                            <p className="text-xs text-slate-500">कोई बकाया भुगतान नहीं! ✅</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "कुल भुगतान (FY)", value: "₹ 7,200", color: "text-primary-navy" },
                    { label: "सफल लेनदेन", value: String(paymentHistory.filter(p => p.status === "सफल").length), color: "text-emerald-600" },
                    { label: "ऑनलाइन भुगतान", value: String(paymentHistory.filter(p => p.mode !== "Cash").length), color: "text-blue-600" },
                    { label: "ऑफलाइन / कैश", value: String(paymentHistory.filter(p => p.mode === "Cash").length), color: "text-orange" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Payment History Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                    <h3 className="font-bold text-primary-navy text-sm">भुगतान इतिहास (Payment History)</h3>
                    <div className="relative w-64">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="रसीद, अवधि, Txn ID..."
                            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="px-4 py-3">रसीद सं.</th>
                                <th className="px-4 py-3">अवधि</th>
                                <th className="px-4 py-3">राशि</th>
                                <th className="px-4 py-3">माध्यम</th>
                                <th className="px-4 py-3">Txn Reference</th>
                                <th className="px-4 py-3">तिथि</th>
                                <th className="px-4 py-3">स्थिति</th>
                                <th className="px-4 py-3">रसीद</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600">
                            {filtered.map((p, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition">
                                    <td className="px-4 py-3 font-mono text-orange text-[10px]">{p.id}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{p.period}</td>
                                    <td className="px-4 py-3 font-bold">{p.amount}</td>
                                    <td className="px-4 py-3">{p.mode}</td>
                                    <td className="px-4 py-3 font-mono text-[10px] text-slate-400">{p.txnRef}</td>
                                    <td className="px-4 py-3">{p.date}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColor[p.status] || "bg-slate-100 text-slate-500"}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button className="p-1.5 rounded-lg hover:bg-orange-50 text-orange transition" title="Download Receipt">
                                            <IconDownload size={14} />
                                        </button>
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
