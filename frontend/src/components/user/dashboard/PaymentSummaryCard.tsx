"use client";
import React from "react";
import { IconCreditCard, IconArrowUpRight } from "@tabler/icons-react";

interface PaymentSummaryCardProps {
    totalPaid: string;
    lastPaymentDate: string;
    lastPaymentAmount: string;
    paymentMethod: string;
}

export default function PaymentSummaryCard({ totalPaid, lastPaymentDate, lastPaymentAmount, paymentMethod }: PaymentSummaryCardProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-primary-navy px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">Payments</span>
                <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
                    <IconCreditCard className="h-5 w-5 text-white" />
                </div>
            </div>
            <div className="px-4 py-3">
                <div className="text-xs text-slate-500 font-medium">कुल भुगतान (इस FY)</div>
                <div className="text-2xl font-extrabold text-primary-navy mt-0.5">{totalPaid}</div>
                <div className="text-xs text-slate-500 mt-1">अंतिम: {lastPaymentAmount} ({paymentMethod})</div>
                <div className="flex items-center gap-1 mt-2 text-[11px] font-semibold text-emerald-600">
                    <IconArrowUpRight size={13} />
                    {lastPaymentDate}
                </div>
            </div>
        </div>
    );
}
