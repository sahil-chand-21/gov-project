"use client";
import React from "react";
import { IconReceipt2, IconCreditCard, IconSpeakerphone, IconMessageReport, IconCheck } from "@tabler/icons-react";

const activities = [
    { icon: <IconCreditCard size={14} className="text-emerald-600" />, text: "₹ 1,200 भुगतान सफल — सितंबर 2026 किराया", time: "30 Sep, 10:45 AM", color: "bg-emerald-50" },
    { icon: <IconReceipt2 size={14} className="text-orange" />, text: "रसीद AZP/RENT/2026/000142 जारी हुई", time: "30 Sep, 10:46 AM", color: "bg-orange-50" },
    { icon: <IconSpeakerphone size={14} className="text-blue-600" />, text: "नई सूचना: जल आपूर्ति मरम्मत कार्य", time: "29 Sep, 2:30 PM", color: "bg-blue-50" },
    { icon: <IconMessageReport size={14} className="text-purple-600" />, text: "शिकायत CMP-003 — स्थिति: प्रगति में", time: "27 Sep, 11:15 AM", color: "bg-purple-50" },
    { icon: <IconCheck size={14} className="text-emerald-600" />, text: "₹ 1,200 भुगतान सफल — अगस्त 2026 किराया", time: "28 Aug, 9:30 AM", color: "bg-emerald-50" },
];

export default function RecentActivity() {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="px-5 py-4 border-b border-slate-100">
                <h3 className="font-bold text-primary-navy text-sm">हालिया गतिविधि (Activity Timeline)</h3>
            </div>
            <div className="p-4">
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200"></div>
                    <div className="space-y-4">
                        {activities.map((activity, i) => (
                            <div key={i} className="relative flex items-start gap-3 pl-1">
                                <div className={`relative z-10 h-8 w-8 rounded-full ${activity.color} flex items-center justify-center shrink-0 border border-white shadow-xs`}>
                                    {activity.icon}
                                </div>
                                <div className="flex-1 min-w-0 pt-0.5">
                                    <p className="text-xs text-slate-700">{activity.text}</p>
                                    <p className="text-[10px] text-slate-400 mt-0.5">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
