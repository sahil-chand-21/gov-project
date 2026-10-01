"use client";
import React from "react";
import { IconAlertCircle } from "@tabler/icons-react";

interface OutstandingDuesCardProps {
    totalDues: string;
    dueMonths: number;
    oldestDueMonth: string;
}

export default function OutstandingDuesCard({ totalDues, dueMonths, oldestDueMonth }: OutstandingDuesCardProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-rose-600 px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">Outstanding Dues</span>
                <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
                    <IconAlertCircle className="h-5 w-5 text-white" />
                </div>
            </div>
            <div className="px-4 py-3">
                <div className="text-xs text-slate-500 font-medium">कुल बकाया राशि</div>
                <div className="text-2xl font-extrabold text-rose-600 mt-0.5">{totalDues}</div>
                <div className="text-xs text-slate-500 mt-1">{dueMonths} महीने बकाया</div>
                <div className="flex items-center gap-1 mt-2 text-[11px] font-semibold text-rose-500">
                    <IconAlertCircle size={13} />
                    सबसे पुराना: {oldestDueMonth}
                </div>
            </div>
        </div>
    );
}
