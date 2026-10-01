"use client";
import React from "react";
import { IconReceipt2, IconArrowUpRight } from "@tabler/icons-react";

interface RentSummaryCardProps {
    currentMonthRent: string;
    rentPeriod: string;
    dueDate: string;
    status: "paid" | "unpaid" | "overdue";
}

export default function RentSummaryCard({ currentMonthRent, rentPeriod, dueDate, status }: RentSummaryCardProps) {
    const statusConfig = {
        paid: { label: "भुगतान हो चुका है", labelEn: "Paid", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
        unpaid: { label: "भुगतान बाकी", labelEn: "Unpaid", bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", dot: "bg-orange-500" },
        overdue: { label: "अतिदेय", labelEn: "Overdue", bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", dot: "bg-rose-500" },
    };

    const cfg = statusConfig[status];

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-emerald-600 px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">Monthly Rent</span>
                <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
                    <IconReceipt2 className="h-5 w-5 text-white" />
                </div>
            </div>
            <div className="px-4 py-3">
                <div className="text-xs text-slate-500 font-medium">मासिक किराया</div>
                <div className="text-2xl font-extrabold text-primary-navy mt-0.5">{currentMonthRent}</div>
                <div className="text-xs text-slate-500 mt-1">{rentPeriod}</div>
                <div className="flex items-center justify-between mt-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold ${cfg.bg} ${cfg.text} border ${cfg.border}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`}></span>
                        {cfg.label}
                    </span>
                    <span className="text-[10px] text-slate-400">अंतिम तिथि: {dueDate}</span>
                </div>
            </div>
        </div>
    );
}
