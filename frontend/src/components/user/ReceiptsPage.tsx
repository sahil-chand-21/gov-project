"use client";
import React from "react";
import { IconReceipt, IconDownload, IconEye, IconPrinter } from "@tabler/icons-react";

const receipts = [
    {
        id: "AZP/RENT/2026/000142",
        period: "सितंबर 2026",
        amount: "₹ 1,200",
        paidDate: "30 Sep 2026",
        mode: "Razorpay Online",
        txnRef: "pay_Qb9x12ZAbc",
        tenant: "रमेश चंद्र जोशी",
        shop: "Shop-12 (मॉल रोड)",
    },
    {
        id: "AZP/RENT/2026/000138",
        period: "अगस्त 2026",
        amount: "₹ 1,200",
        paidDate: "28 Aug 2026",
        mode: "UPI",
        txnRef: "UPI9876543210",
        tenant: "रमेश चंद्र जोशी",
        shop: "Shop-12 (मॉल रोड)",
    },
    {
        id: "AZP/RENT/2026/000130",
        period: "जुलाई 2026",
        amount: "₹ 1,200",
        paidDate: "05 Jul 2026",
        mode: "Cash",
        txnRef: "CASH-2026-130",
        tenant: "रमेश चंद्र जोशी",
        shop: "Shop-12 (मॉल रोड)",
    },
    {
        id: "AZP/RENT/2026/000125",
        period: "जून 2026",
        amount: "₹ 1,200",
        paidDate: "03 Jun 2026",
        mode: "Razorpay Online",
        txnRef: "pay_Qa5y08XYZq",
        tenant: "रमेश चंद्र जोशी",
        shop: "Shop-12 (मॉल रोड)",
    },
];

export default function ReceiptsPage() {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">रसीदें</h2>
                <p className="text-sm text-slate-500 mt-0.5">Receipts — सभी भुगतान रसीदें डाउनलोड एवं देखें</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {receipts.map((receipt, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden hover:shadow-md transition group">
                        {/* Receipt Header */}
                        <div className="bg-gradient-to-r from-primary-navy to-[#0f3068] px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <IconReceipt className="h-4 w-4 text-orange" />
                                <span className="text-white font-mono text-[10px] font-semibold">{receipt.id}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/20">
                                Verified ✓
                            </span>
                        </div>

                        {/* Receipt Body */}
                        <div className="p-4 space-y-2.5">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">किराया अवधि</span>
                                <span className="text-sm font-bold text-primary-navy">{receipt.period}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">राशि</span>
                                <span className="text-lg font-extrabold text-emerald-600">{receipt.amount}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">भुगतान तिथि</span>
                                <span className="text-xs text-slate-600">{receipt.paidDate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">भुगतान माध्यम</span>
                                <span className="text-xs text-slate-600">{receipt.mode}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Txn Ref</span>
                                <span className="text-[10px] font-mono text-slate-400">{receipt.txnRef}</span>
                            </div>
                        </div>

                        {/* Receipt Actions */}
                        <div className="px-4 py-3 border-t border-slate-100 flex items-center gap-2">
                            <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold rounded-lg bg-orange/10 text-orange hover:bg-orange/20 transition">
                                <IconDownload size={13} /> डाउनलोड
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold rounded-lg bg-primary-navy/5 text-primary-navy hover:bg-primary-navy/10 transition">
                                <IconEye size={13} /> देखें
                            </button>
                            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 transition" title="Print">
                                <IconPrinter size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
