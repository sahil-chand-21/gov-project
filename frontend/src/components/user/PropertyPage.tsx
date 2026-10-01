"use client";
import React from "react";
import { IconBuildingStore, IconMapPin, IconRuler, IconCalendar, IconUser, IconCoinRupee, IconHistory } from "@tabler/icons-react";

const property = {
    propertyId: "PROP-AZP-012",
    shopNumber: "Shop-12",
    location: "मॉल रोड, अलमोड़ा, उत्तराखंड",
    type: "दुकान (Commercial Shop)",
    area: "200 sq. ft.",
    monthlyRent: "₹ 1,200",
    occupancyStatus: "Occupied (आवंटित)",
    assignedTo: "रमेश चंद्र जोशी (USR-2026-0045)",
    allotmentDate: "15 अप्रैल 2022",
};

const allotmentHistory = [
    { tenant: "रमेश चंद्र जोशी", from: "15 अप्रैल 2022", to: "वर्तमान", status: "वर्तमान" },
    { tenant: "सुरेश कुमार पांडे", from: "01 जनवरी 2018", to: "14 अप्रैल 2022", status: "पूर्व" },
    { tenant: "मोहन लाल शर्मा", from: "10 मार्च 2014", to: "31 दिसंबर 2017", status: "पूर्व" },
];

export default function PropertyPage() {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">मेरी संपत्ति</h2>
                <p className="text-sm text-slate-500 mt-0.5">My Property — आवंटित दुकान/संपत्ति का विवरण</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Property Image & Summary */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div className="bg-gradient-to-br from-[#0f3068] to-primary-navy p-6 text-center">
                        <div className="h-20 w-20 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center mx-auto">
                            <IconBuildingStore className="h-10 w-10 text-orange" />
                        </div>
                        <h3 className="text-white font-bold text-xl mt-3">{property.shopNumber}</h3>
                        <p className="text-white/60 text-xs mt-1">{property.propertyId}</p>
                        <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-400/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            {property.occupancyStatus}
                        </span>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex items-center gap-3 text-xs">
                            <IconMapPin size={14} className="text-slate-400" />
                            <span className="text-slate-700 font-medium">{property.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                            <IconRuler size={14} className="text-slate-400" />
                            <span className="text-slate-700 font-medium">{property.area}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                            <IconCoinRupee size={14} className="text-slate-400" />
                            <span className="text-slate-700 font-bold">{property.monthlyRent}/माह</span>
                        </div>
                    </div>
                </div>

                {/* Property Details */}
                <div className="lg:col-span-2 space-y-5">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                        <div className="px-5 py-4 border-b border-slate-100">
                            <h3 className="font-bold text-primary-navy text-sm">संपत्ति विवरण (Property Details)</h3>
                        </div>
                        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "प्रॉपर्टी ID", value: property.propertyId },
                                { label: "दुकान / संपत्ति नंबर", value: property.shopNumber },
                                { label: "स्थान / पता", value: property.location },
                                { label: "संपत्ति प्रकार", value: property.type },
                                { label: "क्षेत्रफल", value: property.area },
                                { label: "मासिक किराया", value: property.monthlyRent },
                                { label: "आवंटित किराएदार", value: property.assignedTo },
                                { label: "आवंटन तिथि", value: property.allotmentDate },
                            ].map((field, i) => (
                                <div key={i} className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{field.label}</div>
                                    <div className="text-sm font-semibold text-primary-navy mt-1">{field.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Allotment History */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                        <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
                            <IconHistory size={16} className="text-orange" />
                            <h3 className="font-bold text-primary-navy text-sm">आवंटन इतिहास (Allotment History)</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left text-slate-600">
                                <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                                    <tr>
                                        <th className="p-3">किराएदार</th>
                                        <th className="p-3">अवधि से</th>
                                        <th className="p-3">अवधि तक</th>
                                        <th className="p-3">स्थिति</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {allotmentHistory.map((h, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition">
                                            <td className="p-3 font-semibold text-primary-navy">{h.tenant}</td>
                                            <td className="p-3">{h.from}</td>
                                            <td className="p-3">{h.to}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${h.status === "वर्तमान" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                                                    {h.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
