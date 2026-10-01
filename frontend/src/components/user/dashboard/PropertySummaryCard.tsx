"use client";
import React from "react";
import { IconBuildingStore, IconMapPin } from "@tabler/icons-react";

interface PropertySummaryCardProps {
    shopNumber: string;
    location: string;
    propertyType: string;
    area: string;
    allotmentDate: string;
}

export default function PropertySummaryCard({ shopNumber, location, propertyType, area, allotmentDate }: PropertySummaryCardProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="bg-[#0f4c9c] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">My Property</span>
                <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
                    <IconBuildingStore className="h-5 w-5 text-white" />
                </div>
            </div>
            <div className="px-4 py-3">
                <div className="text-xs text-slate-500 font-medium">आवंटित संपत्ति</div>
                <div className="text-lg font-extrabold text-primary-navy mt-0.5">{shopNumber}</div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <IconMapPin size={12} />
                    {location}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-slate-50 rounded px-2 py-1">
                        <span className="text-slate-400">प्रकार:</span>
                        <span className="font-semibold text-primary-navy ml-1">{propertyType}</span>
                    </div>
                    <div className="bg-slate-50 rounded px-2 py-1">
                        <span className="text-slate-400">आवंटन:</span>
                        <span className="font-semibold text-primary-navy ml-1">{allotmentDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
