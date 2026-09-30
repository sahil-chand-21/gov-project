"use client";
import React from "react";
import { IconDownload, IconFileAnalytics } from "@tabler/icons-react";

const reportTypes = [
    { title: "मासिक वित्तीय रिपोर्ट", desc: "प्रति माह कुल वसूली, बकाया, और भुगतान का सारांश", period: "September 2026", format: ["PDF", "Excel"] },
    { title: "वार्षिक राजस्व रिपोर्ट", desc: "वित्तीय वर्ष 2026-27 की सम्पूर्ण आय व बकाया रिपोर्ट", period: "FY 2026-27", format: ["PDF", "Excel"] },
    { title: "किराएदार-वार बकाया रिपोर्ट", desc: "सभी किराएदारों के बकाया की विस्तृत सूची", period: "As on 30 Sep 2026", format: ["PDF", "Excel"] },
    { title: "दुकान-वार किराया रिपोर्ट", desc: "प्रत्येक संपत्ति के लिए किराया इतिहास और भुगतान स्थिति", period: "September 2026", format: ["PDF"] },
    { title: "ऑडिट ट्रेल रिपोर्ट", desc: "सभी प्रशासनिक गतिविधियों और लेनदेन का लॉग", period: "Q2 2026", format: ["PDF"] },
];

const monthlyData = [
    { month: "Apr", collected: 410000, target: 510000 },
    { month: "May", collected: 462000, target: 510000 },
    { month: "Jun", collected: 488000, target: 510000 },
    { month: "Jul", collected: 430000, target: 510000 },
    { month: "Aug", collected: 501000, target: 510000 },
    { month: "Sep", collected: 456000, target: 510000 },
];

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">रिपोर्ट्स एवं डेटा एक्सपोर्ट</h2>
                <p className="text-sm text-slate-500 mt-0.5">Reports & Export — मासिक/वार्षिक वित्तीय रिपोर्ट, PDF व Excel एक्सपोर्ट</p>
            </div>

            {/* Monthly Collection Chart (Manual Bar) */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
                <h3 className="font-bold text-primary-navy text-sm mb-4">मासिक वसूली — FY 2026-27 (अप्रैल–सितम्बर)</h3>
                <div className="flex items-end gap-4 h-40">
                    {monthlyData.map((d, i) => {
                        const pct = Math.round((d.collected / d.target) * 100);
                        const heightPct = Math.round((d.collected / 510000) * 100);
                        return (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                <span className="text-[10px] font-bold text-primary-navy">{pct}%</span>
                                <div className="w-full rounded-t-md bg-primary-navy/10 relative overflow-hidden" style={{ height: "100px" }}>
                                    <div className="absolute bottom-0 w-full bg-primary-navy rounded-t-md transition-all" style={{ height: `${heightPct}%` }} />
                                </div>
                                <span className="text-[10px] text-slate-500">{d.month}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center gap-4 mt-3 text-[11px]">
                    <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-primary-navy inline-block" /> वसूली</span>
                    <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-primary-navy/10 inline-block" /> लक्ष्य (₹ 5,10,000)</span>
                </div>
            </div>

            {/* Report Download Cards */}
            <div className="space-y-3">
                {reportTypes.map((r, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-xs px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="h-10 w-10 shrink-0 rounded-xl bg-primary-navy/5 flex items-center justify-center">
                            <IconFileAnalytics className="h-5 w-5 text-primary-navy" />
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold text-primary-navy text-sm">{r.title}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{r.desc}</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">📅 {r.period}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            {r.format.map(f => (
                                <button key={f} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition
                                    ${f === "Excel" ? "border-emerald-300 text-emerald-700 hover:bg-emerald-50" : "border-primary-navy text-primary-navy hover:bg-primary-navy/5"}`}>
                                    <IconDownload size={13} /> {f}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
