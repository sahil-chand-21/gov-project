"use client";
import React from "react";
import { IconSpeakerphone } from "@tabler/icons-react";

const notices = [
    { id: "NOT-2026-015", title: "अक्टूबर 2026 किराया अनुस्मारक", type: "व्यक्तिगत", date: "01 Oct 2026", isNew: true },
    { id: "NOT-2026-012", title: "जल आपूर्ति मरम्मत कार्य — 5-7 अक्टूबर", type: "सार्वजनिक", date: "29 Sep 2026", isNew: true },
    { id: "NOT-2026-010", title: "दुकान किराया संशोधन सूचना FY 2026-27", type: "सार्वजनिक", date: "15 Sep 2026", isNew: false },
];

export default function RecentNotices() {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-primary-navy text-sm">हालिया सूचनाएं (Notices)</h3>
                <button className="text-[11px] font-semibold text-orange hover:underline">सभी देखें →</button>
            </div>
            <div className="p-4 space-y-2.5">
                {notices.map((notice, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-orange/30 hover:bg-orange-50/20 transition cursor-pointer group">
                        <div className="h-9 w-9 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                            <IconSpeakerphone className="h-4 w-4 text-orange" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-primary-navy truncate">{notice.title}</span>
                                {notice.isNew && (
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-orange text-white shrink-0">NEW</span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500">
                                <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${notice.type === "व्यक्तिगत" ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"}`}>
                                    {notice.type}
                                </span>
                                <span>{notice.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
