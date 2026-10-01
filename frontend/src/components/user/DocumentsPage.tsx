"use client";
import React from "react";
import { IconFile, IconDownload, IconEye, IconFileTypePdf } from "@tabler/icons-react";

const documents = [
    { id: "DOC-001", name: "किराया नियमावली (Rent Guidelines) — FY 2026-27", type: "PDF", size: "1.2 MB", date: "01 Apr 2026", category: "नियमावली" },
    { id: "DOC-002", name: "दुकान आवंटन पत्र — Shop-12", type: "PDF", size: "856 KB", date: "15 Apr 2022", category: "आवंटन पत्र" },
    { id: "DOC-003", name: "किराया संशोधन आदेश — FY 2026-27", type: "PDF", size: "450 KB", date: "15 Mar 2026", category: "आदेश" },
    { id: "DOC-004", name: "जिला पंचायत शुल्क विवरणी", type: "PDF", size: "320 KB", date: "01 Jan 2026", category: "शुल्क" },
    { id: "DOC-005", name: "भुगतान प्रक्रिया गाइड (Online Payment Guide)", type: "PDF", size: "680 KB", date: "01 Apr 2026", category: "गाइड" },
];

export default function DocumentsPage() {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">दस्तावेज़</h2>
                <p className="text-sm text-slate-500 mt-0.5">Documents — उपलब्ध दस्तावेज़ डाउनलोड करें</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {documents.map((doc, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden hover:shadow-md transition group">
                        <div className="p-5 flex items-start gap-4">
                            <div className="h-12 w-12 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                                <IconFileTypePdf className="h-6 w-6 text-rose-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-bold text-primary-navy line-clamp-2">{doc.name}</h4>
                                <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400">
                                    <span className="px-1.5 py-0.5 rounded bg-slate-100 font-semibold">{doc.category}</span>
                                    <span>•</span>
                                    <span>{doc.size}</span>
                                    <span>•</span>
                                    <span>{doc.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-3 border-t border-slate-100 flex items-center gap-2">
                            <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold rounded-lg bg-orange/10 text-orange hover:bg-orange/20 transition">
                                <IconDownload size={13} /> डाउनलोड
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold rounded-lg bg-primary-navy/5 text-primary-navy hover:bg-primary-navy/10 transition">
                                <IconEye size={13} /> देखें
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
