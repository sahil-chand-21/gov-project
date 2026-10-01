"use client";
import React, { useState } from "react";
import { IconFileInvoice, IconSearch, IconDownload } from "@tabler/icons-react";

const ledgerEntries = [
    { date: "01-10-2026", period: "Oct-2026", particular: "Rent Generated (किराया जारी)", debit: "₹ 1,200", credit: "—", balance: "₹ 1,200", ref: "RENT-GEN-2026-10", method: "—" },
    { date: "30-09-2026", period: "Sep-2026", particular: "Payment Received (भुगतान प्राप्त)", debit: "—", credit: "₹ 1,200", balance: "₹ 0", ref: "pay_Qb9x12ZAbc", method: "Razorpay" },
    { date: "01-09-2026", period: "Sep-2026", particular: "Rent Generated (किराया जारी)", debit: "₹ 1,200", credit: "—", balance: "₹ 1,200", ref: "RENT-GEN-2026-09", method: "—" },
    { date: "28-08-2026", period: "Aug-2026", particular: "Payment Received (भुगतान प्राप्त)", debit: "—", credit: "₹ 1,200", balance: "₹ 0", ref: "UPI9876543210", method: "UPI" },
    { date: "01-08-2026", period: "Aug-2026", particular: "Rent Generated (किराया जारी)", debit: "₹ 1,200", credit: "—", balance: "₹ 1,200", ref: "RENT-GEN-2026-08", method: "—" },
    { date: "05-07-2026", period: "Jul-2026", particular: "Payment Received (भुगतान प्राप्त)", debit: "—", credit: "₹ 1,200", balance: "₹ 0", ref: "CASH-2026-130", method: "Cash" },
    { date: "01-07-2026", period: "Jul-2026", particular: "Rent Generated (किराया जारी)", debit: "₹ 1,200", credit: "—", balance: "₹ 1,200", ref: "RENT-GEN-2026-07", method: "—" },
    { date: "03-06-2026", period: "Jun-2026", particular: "Payment Received (भुगतान प्राप्त)", debit: "—", credit: "₹ 1,200", balance: "₹ 0", ref: "pay_Qa5y08XYZq", method: "Razorpay" },
    { date: "01-06-2026", period: "Jun-2026", particular: "Rent Generated (किराया जारी)", debit: "₹ 1,200", credit: "—", balance: "₹ 1,200", ref: "RENT-GEN-2026-06", method: "—" },
];

export default function LedgerPage() {
    const [search, setSearch] = useState("");
    const [fyFilter, setFyFilter] = useState("2026-27");

    const filtered = ledgerEntries.filter(e =>
        e.particular.includes(search) || e.ref.includes(search) || e.date.includes(search)
    );

    const totalDebit = ledgerEntries.filter(e => e.debit !== "—").length;
    const totalCredit = ledgerEntries.filter(e => e.credit !== "—").length;

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">खाता लेजर</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Ledger — सभी वित्तीय लेनदेन का विस्तृत विवरण</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition shadow-xs">
                    <IconDownload size={14} />
                    लेजर डाउनलोड (PDF)
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "कुल लेनदेन", value: String(ledgerEntries.length), color: "text-primary-navy" },
                    { label: "डेबिट (किराया जारी)", value: String(totalDebit), color: "text-rose-600" },
                    { label: "क्रेडिट (भुगतान)", value: String(totalCredit), color: "text-emerald-600" },
                    { label: "वर्तमान बकाया", value: "₹ 1,200", color: "text-orange" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Ledger Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative w-56">
                            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search ledger..."
                                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" />
                        </div>
                        <select value={fyFilter} onChange={e => setFyFilter(e.target.value)}
                            className="text-[11px] px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 focus:outline-none font-semibold">
                            <option value="2026-27">FY 2026-27</option>
                            <option value="2025-26">FY 2025-26</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="px-4 py-3">तिथि</th>
                                <th className="px-4 py-3">अवधि</th>
                                <th className="px-4 py-3">विवरण</th>
                                <th className="px-4 py-3 text-right">डेबिट</th>
                                <th className="px-4 py-3 text-right">क्रेडिट</th>
                                <th className="px-4 py-3 text-right">शेष</th>
                                <th className="px-4 py-3">संदर्भ</th>
                                <th className="px-4 py-3">माध्यम</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600">
                            {filtered.map((e, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition">
                                    <td className="px-4 py-3">{e.date}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{e.period}</td>
                                    <td className="px-4 py-3">{e.particular}</td>
                                    <td className={`px-4 py-3 text-right font-bold ${e.debit !== "—" ? "text-rose-600" : "text-slate-300"}`}>{e.debit}</td>
                                    <td className={`px-4 py-3 text-right font-bold ${e.credit !== "—" ? "text-emerald-600" : "text-slate-300"}`}>{e.credit}</td>
                                    <td className="px-4 py-3 text-right font-bold text-primary-navy">{e.balance}</td>
                                    <td className="px-4 py-3 font-mono text-[10px] text-slate-400">{e.ref}</td>
                                    <td className="px-4 py-3">{e.method}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
