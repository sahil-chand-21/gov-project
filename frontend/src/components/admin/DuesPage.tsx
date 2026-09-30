"use client";
import React from "react";
import { IconAlertTriangle, IconCoinRupee, IconSend } from "@tabler/icons-react";

const duesData = [
    { tenant: "मोहन लाल शाह", shop: "Shop-08 (लाल बाजार)", dues: [{ month: "July 2026", amount: "₹ 2,200" }, { month: "August 2026", amount: "₹ 2,200" }, { month: "September 2026", amount: "₹ 2,200" }], total: "₹ 6,600" },
    { tenant: "गीता देवी पंत", shop: "Shop-17 (क्लब रोड)", dues: [{ month: "August 2026", amount: "₹ 800" }, { month: "September 2026", amount: "₹ 1,800" }], total: "₹ 2,600" },
    { tenant: "नरेश सिंह", shop: "Shop-41 (रामलीला मैदान)", dues: [{ month: "June 2026", amount: "₹ 1,300" }, { month: "July 2026", amount: "₹ 1,300" }, { month: "August 2026", amount: "₹ 1,300" }, { month: "September 2026", amount: "₹ 1,300" }], total: "₹ 5,200" },
];

export default function DuesPage() {
    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">पिछला बकाया किराया</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Previous Dues — क्रमिक वसूली नियम (Feb → Mar → Apr) के अनुसार</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow transition">
                    <IconSend size={14} /> बकाया नोटिस भेजें
                </button>
            </div>

            {/* Warning Banner */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-200">
                <IconAlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                    <div className="text-sm font-bold text-orange-700">वसूली नियम (Sequential Settlement Rule)</div>
                    <div className="text-xs text-orange-600 mt-0.5">
                        भुगतान हमेशा सबसे पुराने बकाया माह से शुरू होगा। उदाहरण: यदि Feb, Mar, Apr बकाया हों, तो पहले Feb का किराया जमा होगा, फिर Mar, फिर Apr।
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                    <div className="text-xs text-slate-500">कुल बकाएदार किराएदार</div>
                    <div className="text-xl font-extrabold text-rose-600 mt-0.5">{duesData.length}</div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                    <div className="text-xs text-slate-500">कुल बकाया राशि</div>
                    <div className="text-xl font-extrabold text-rose-600 mt-0.5">₹ 14,400</div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                    <div className="text-xs text-slate-500">सर्वाधिक बकाया माह</div>
                    <div className="text-xl font-extrabold text-primary-navy mt-0.5">4 माह</div>
                </div>
            </div>

            {/* Dues Cards */}
            <div className="space-y-4">
                {duesData.map((d, i) => (
                    <div key={i} className="bg-white rounded-xl border border-rose-100 shadow-xs overflow-hidden">
                        <div className="flex items-center justify-between px-5 py-3 bg-rose-50 border-b border-rose-100">
                            <div>
                                <span className="font-bold text-primary-navy text-sm">{d.tenant}</span>
                                <span className="text-xs text-slate-500 ml-2">{d.shop}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1 text-rose-700 font-bold text-sm">
                                    <IconCoinRupee size={15} /> कुल बकाया: {d.total}
                                </span>
                                <button className="px-3 py-1 bg-primary-navy text-white text-[11px] font-semibold rounded-lg hover:bg-primary-navy/90 transition">
                                    भुगतान लें
                                </button>
                            </div>
                        </div>
                        <div className="px-5 py-3">
                            <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide mb-2">बकाया माह (पुराने से नए क्रम में)</div>
                            <div className="flex flex-wrap gap-2">
                                {d.dues.map((due, j) => (
                                    <div key={j} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-red-200 bg-red-50">
                                        <span className="text-xs font-semibold text-primary-navy">{due.month}</span>
                                        <span className="text-xs font-bold text-rose-600">{due.amount}</span>
                                        <span className="text-[10px] font-semibold text-white bg-rose-500 px-1.5 py-0.5 rounded-full">#{j + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
