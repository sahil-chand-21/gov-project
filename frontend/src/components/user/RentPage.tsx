"use client";
import React from "react";
import { IconReceipt2, IconAlertCircle, IconCheck, IconClock, IconHistory } from "@tabler/icons-react";

const currentRent = {
    period: "अक्टूबर 2026",
    amount: "₹ 1,200",
    dueDate: "10 अक्टूबर 2026",
    status: "unpaid",
    generatedOn: "01 अक्टूबर 2026",
};

const rentHistory = [
    { period: "सितंबर 2026", amount: "₹ 1,200", status: "भुगतान हुआ", paidDate: "30 Sep 2026", receiptId: "AZP/RENT/2026/000142" },
    { period: "अगस्त 2026", amount: "₹ 1,200", status: "भुगतान हुआ", paidDate: "28 Aug 2026", receiptId: "AZP/RENT/2026/000138" },
    { period: "जुलाई 2026", amount: "₹ 1,200", status: "भुगतान हुआ", paidDate: "05 Jul 2026", receiptId: "AZP/RENT/2026/000130" },
    { period: "जून 2026", amount: "₹ 1,200", status: "भुगतान हुआ", paidDate: "03 Jun 2026", receiptId: "AZP/RENT/2026/000125" },
    { period: "मई 2026", amount: "₹ 1,200", status: "भुगतान हुआ", paidDate: "02 May 2026", receiptId: "AZP/RENT/2026/000118" },
    { period: "अप्रैल 2026", amount: "₹ 1,000", status: "भुगतान हुआ", paidDate: "05 Apr 2026", receiptId: "AZP/RENT/2026/000110" },
];

const outstandingDues = [
    { period: "अक्टूबर 2026", amount: "₹ 1,200", dueDate: "10 Oct 2026", daysOverdue: 0 },
];

const rentRevisions = [
    { effectiveFrom: "01 अप्रैल 2026", oldRent: "₹ 1,000", newRent: "₹ 1,200", reason: "वार्षिक किराया संशोधन FY 2026-27" },
    { effectiveFrom: "01 अप्रैल 2022", oldRent: "—", newRent: "₹ 1,000", reason: "प्रारंभिक आवंटन" },
];

export default function RentPage() {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">किराया प्रबंधन</h2>
                <p className="text-sm text-slate-500 mt-0.5">Rent Management — वर्तमान किराया, बकाया एवं इतिहास</p>
            </div>

            {/* Sequential Rule Banner */}
            <div className="p-3 rounded-lg bg-primary-navy/5 border border-primary-navy/15 text-xs flex items-start gap-2.5">
                <span className="text-orange text-base leading-none">⚖️</span>
                <div>
                    <span className="font-bold text-primary-navy block">क्रमिक बकाया निस्तारण नियम (Sequential Settlement Rule)</span>
                    <span className="text-slate-600 text-[11px]">पुराने बकाए का भुगतान क्रमानुसार (जैसे फरवरी → मार्च → अप्रैल) अनिवार्य है। पहले पुराना बकाया चुकाएं।</span>
                </div>
            </div>

            {/* Current Month Rent */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div className="bg-gradient-to-r from-orange to-orange/80 px-5 py-4 flex items-center justify-between">
                        <div>
                            <h3 className="text-white font-bold text-sm">वर्तमान माह का किराया</h3>
                            <p className="text-white/70 text-xs mt-0.5">Current Month Rent</p>
                        </div>
                        <IconReceipt2 className="h-8 w-8 text-white/40" />
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-500">किराया अवधि</span>
                            <span className="text-sm font-bold text-primary-navy">{currentRent.period}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-500">राशि</span>
                            <span className="text-2xl font-extrabold text-primary-navy">{currentRent.amount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-500">अंतिम तिथि</span>
                            <span className="text-xs font-semibold text-rose-600">{currentRent.dueDate}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-500">जारी दिनांक</span>
                            <span className="text-xs text-slate-600">{currentRent.generatedOn}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-100">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-[11px] font-semibold border border-orange-200">
                                <IconClock size={12} />
                                भुगतान बाकी (Unpaid)
                            </span>
                        </div>
                    </div>
                </div>

                {/* Outstanding Dues Summary */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-600 to-rose-500 px-5 py-4 flex items-center justify-between">
                        <div>
                            <h3 className="text-white font-bold text-sm">बकाया किराया</h3>
                            <p className="text-white/70 text-xs mt-0.5">Outstanding Dues</p>
                        </div>
                        <IconAlertCircle className="h-8 w-8 text-white/40" />
                    </div>
                    <div className="p-5">
                        {outstandingDues.length > 0 ? (
                            <div className="space-y-3">
                                {outstandingDues.map((due, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-rose-50/50 border border-rose-100">
                                        <div>
                                            <div className="text-xs font-semibold text-primary-navy">{due.period}</div>
                                            <div className="text-[10px] text-slate-500 mt-0.5">अंतिम तिथि: {due.dueDate}</div>
                                        </div>
                                        <span className="text-sm font-bold text-rose-600">{due.amount}</span>
                                    </div>
                                ))}
                                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                                    <span className="text-xs font-bold text-primary-navy">कुल बकाया</span>
                                    <span className="text-xl font-extrabold text-rose-600">₹ 1,200</span>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <IconCheck className="h-10 w-10 text-emerald-500 mx-auto" />
                                <p className="text-xs text-slate-500 mt-2">कोई बकाया नहीं! 🎉</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Rent History Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-bold text-primary-navy text-sm">किराया इतिहास (Rent History)</h3>
                    <div className="flex items-center gap-2">
                        <select className="text-[11px] px-3 py-1 rounded-lg border border-slate-300 bg-slate-50 focus:outline-none">
                            <option>FY 2026-27</option>
                            <option>FY 2025-26</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-slate-600">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="p-3">अवधि</th>
                                <th className="p-3">राशि</th>
                                <th className="p-3">स्थिति</th>
                                <th className="p-3">भुगतान तिथि</th>
                                <th className="p-3">रसीद सं.</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {rentHistory.map((r, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition">
                                    <td className="p-3 font-semibold text-primary-navy">{r.period}</td>
                                    <td className="p-3 font-bold">{r.amount}</td>
                                    <td className="p-3">
                                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                                            {r.status}
                                        </span>
                                    </td>
                                    <td className="p-3">{r.paidDate}</td>
                                    <td className="p-3 font-mono text-orange text-[10px]">{r.receiptId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Rent Revision History */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
                    <IconHistory size={16} className="text-orange" />
                    <h3 className="font-bold text-primary-navy text-sm">किराया संशोधन इतिहास (Rent Revision History)</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-slate-600">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="p-3">प्रभावी तिथि</th>
                                <th className="p-3">पूर्व किराया</th>
                                <th className="p-3">नया किराया</th>
                                <th className="p-3">कारण</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {rentRevisions.map((rev, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition">
                                    <td className="p-3 font-semibold text-primary-navy">{rev.effectiveFrom}</td>
                                    <td className="p-3">{rev.oldRent}</td>
                                    <td className="p-3 font-bold text-emerald-700">{rev.newRent}</td>
                                    <td className="p-3 text-slate-500">{rev.reason}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
