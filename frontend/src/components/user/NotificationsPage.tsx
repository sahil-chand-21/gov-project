"use client";
import React from "react";
import { IconBell, IconCheck, IconCreditCard, IconSpeakerphone, IconMessageReport, IconReceipt } from "@tabler/icons-react";

const notifications = [
    { id: 1, icon: <IconReceipt size={14} className="text-orange" />, title: "अक्टूबर 2026 का किराया जारी हुआ", desc: "₹ 1,200 — अंतिम तिथि: 10 अक्टूबर 2026", time: "01 Oct, 9:00 AM", read: false, bg: "bg-orange-50" },
    { id: 2, icon: <IconCreditCard size={14} className="text-emerald-600" />, title: "भुगतान सफल — ₹ 1,200", desc: "सितंबर 2026 किराया — Razorpay Online", time: "30 Sep, 10:45 AM", read: false, bg: "bg-emerald-50" },
    { id: 3, icon: <IconReceipt size={14} className="text-orange" />, title: "रसीद AZP/RENT/2026/000142 जारी हुई", desc: "सितंबर 2026 किराया रसीद डाउनलोड करें", time: "30 Sep, 10:46 AM", read: false, bg: "bg-orange-50" },
    { id: 4, icon: <IconSpeakerphone size={14} className="text-blue-600" />, title: "नई सूचना: जल आपूर्ति मरम्मत कार्य", desc: "5-7 अक्टूबर — मॉल रोड क्षेत्र", time: "29 Sep, 2:30 PM", read: true, bg: "bg-blue-50" },
    { id: 5, icon: <IconMessageReport size={14} className="text-purple-600" />, title: "शिकायत CMP-003 — स्थिति अपडेट", desc: "आपकी शिकायत \"प्रगति में\" है", time: "27 Sep, 11:15 AM", read: true, bg: "bg-purple-50" },
    { id: 6, icon: <IconCreditCard size={14} className="text-emerald-600" />, title: "भुगतान सफल — ₹ 1,200", desc: "अगस्त 2026 किराया — UPI", time: "28 Aug, 9:30 AM", read: true, bg: "bg-emerald-50" },
    { id: 7, icon: <IconSpeakerphone size={14} className="text-blue-600" />, title: "सूचना: किराया संशोधन FY 2026-27", desc: "नई किराया दर ₹ 1,200/माह — 01 अप्रैल 2026 से", time: "15 Sep, 10:00 AM", read: true, bg: "bg-blue-50" },
];

export default function NotificationsPage() {
    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">सूचनाएं / नोटिफिकेशन</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Notifications — SMS एवं इन-ऐप सूचनाएं</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-orange">{unreadCount} अपठित</span>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 transition">
                        <IconCheck size={12} /> सभी पठित करें
                    </button>
                </div>
            </div>

            <div className="space-y-2">
                {notifications.map((notif) => (
                    <div key={notif.id} className={`flex items-start gap-3 p-4 rounded-xl border transition cursor-pointer group ${!notif.read ? "bg-orange-50/30 border-orange/20 shadow-xs" : "bg-white border-slate-200 hover:bg-slate-50"}`}>
                        <div className={`h-9 w-9 rounded-lg ${notif.bg} flex items-center justify-center shrink-0`}>
                            {notif.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <h4 className={`text-xs font-semibold ${!notif.read ? "text-primary-navy" : "text-slate-600"}`}>{notif.title}</h4>
                                {!notif.read && <span className="h-2 w-2 rounded-full bg-orange shrink-0"></span>}
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5">{notif.desc}</p>
                            <p className="text-[10px] text-slate-400 mt-1">{notif.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
