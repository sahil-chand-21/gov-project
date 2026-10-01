"use client";
import React from "react";

const recentPayments = [
    { id: "AZP/RENT/2026/000142", period: "सितंबर 2026", amount: "₹ 1,200", mode: "Razorpay Online", date: "30 Sep 2026", status: "सफल" },
    { id: "AZP/RENT/2026/000138", period: "अगस्त 2026", amount: "₹ 1,200", mode: "UPI", date: "28 Aug 2026", status: "सफल" },
    { id: "AZP/RENT/2026/000130", period: "जुलाई 2026", amount: "₹ 1,200", mode: "Cash", date: "05 Jul 2026", status: "सफल" },
];

export default function RecentPayments() {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-primary-navy text-sm">हालिया भुगतान (Recent Payments)</h3>
                <button className="text-[11px] font-semibold text-orange hover:underline">सभी देखें →</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-slate-600">
                    <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                        <tr>
                            <th className="p-3">रसीद सं.</th>
                            <th className="p-3">अवधि</th>
                            <th className="p-3">राशि</th>
                            <th className="p-3">माध्यम</th>
                            <th className="p-3">तिथि</th>
                            <th className="p-3">स्थिति</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {recentPayments.map((p, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition">
                                <td className="p-3 font-mono text-orange text-[10px]">{p.id}</td>
                                <td className="p-3 font-semibold text-primary-navy">{p.period}</td>
                                <td className="p-3 font-bold">{p.amount}</td>
                                <td className="p-3">{p.mode}</td>
                                <td className="p-3">{p.date}</td>
                                <td className="p-3">
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                                        {p.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
