"use client";
import React, { useState } from "react";
import { IconSearch, IconPlus, IconEdit, IconMapPin, IconBuildingStore } from "@tabler/icons-react";

const properties = [
    { id: "PROP-001", name: "Shop-12", location: "मॉल रोड", zone: "मॉल रोड ज़ोन", area: "180 sq.ft", type: "दुकान", tenant: "रमेश चंद्र जोशी", rent: "₹ 1,200", status: "आवंटित" },
    { id: "PROP-002", name: "Shop-05", location: "चौक बाजार", zone: "चौक बाजार ज़ोन", area: "240 sq.ft", type: "दुकान", tenant: "दीपक वर्मा", rent: "₹ 1,500", status: "आवंटित" },
    { id: "PROP-003", name: "Shop-22", location: "बस स्टैंड", zone: "बस स्टैंड ज़ोन", area: "120 sq.ft", type: "दुकान", tenant: "सुनील कुमार", rent: "₹ 950", status: "आवंटित" },
    { id: "PROP-004", name: "Hall-03", location: "मॉल रोड", zone: "मॉल रोड ज़ोन", area: "600 sq.ft", type: "सभागार", tenant: "—", rent: "₹ 3,500", status: "रिक्त" },
    { id: "PROP-005", name: "Shop-08", location: "लाल बाजार", zone: "लाल बाजार ज़ोन", area: "200 sq.ft", type: "दुकान", tenant: "मोहन लाल शाह", rent: "₹ 2,200", status: "आवंटित" },
    { id: "PROP-006", name: "Land-01", location: "नैनी रोड", zone: "नैनी रोड ज़ोन", area: "1200 sq.ft", type: "भूखंड", tenant: "—", rent: "₹ 5,000", status: "रिक्त" },
    { id: "PROP-007", name: "Shop-33", location: "नैनी रोड", zone: "नैनी रोड ज़ोन", area: "150 sq.ft", type: "दुकान", tenant: "प्रकाश चंद्र", rent: "₹ 800", status: "आवंटित" },
];

const statusColor: Record<string, string> = {
    "आवंटित": "bg-blue-50 text-blue-700",
    "रिक्त": "bg-emerald-50 text-emerald-700",
};

export default function PropertiesPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("सभी");

    const filtered = properties.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.location.includes(search) || p.type.includes(search);
        const matchFilter = filter === "सभी" || p.status === filter;
        return matchSearch && matchFilter;
    });

    return (
        <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-primary-navy">संपत्ति प्रबंधन</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Shop & Property Management — दुकानें, भूखंड एवं सभागार</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-navy hover:bg-primary-navy/90 text-white text-xs font-semibold rounded-lg shadow transition">
                    <IconPlus size={14} /> नई संपत्ति जोड़ें
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "कुल संपत्तियां", value: String(properties.length), color: "text-primary-navy" },
                    { label: "आवंटित", value: String(properties.filter(p => p.status === "आवंटित").length), color: "text-blue-600" },
                    { label: "रिक्त (Vacant)", value: String(properties.filter(p => p.status === "रिक्त").length), color: "text-emerald-600" },
                    { label: "कुल प्रकार", value: "3", color: "text-orange" },
                ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xs">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className={`text-xl font-extrabold mt-0.5 ${s.color}`}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Filters + Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative w-64">
                            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="नाम, स्थान या प्रकार..."
                                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" />
                        </div>
                        <div className="flex gap-1.5">
                            {["सभी", "आवंटित", "रिक्त"].map(f => (
                                <button key={f} onClick={() => setFilter(f)}
                                    className={`px-3 py-1 rounded-full text-[11px] font-semibold transition ${filter === f ? "bg-primary-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                    <span className="text-xs text-slate-500">{filtered.length} संपत्तियां</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3"><span className="flex items-center gap-1"><IconBuildingStore size={13} /> नाम</span></th>
                                <th className="px-4 py-3"><span className="flex items-center gap-1"><IconMapPin size={13} /> स्थान</span></th>
                                <th className="px-4 py-3">ज़ोन</th>
                                <th className="px-4 py-3">क्षेत्रफल</th>
                                <th className="px-4 py-3">प्रकार</th>
                                <th className="px-4 py-3">किराएदार</th>
                                <th className="px-4 py-3">किराया</th>
                                <th className="px-4 py-3">स्थिति</th>
                                <th className="px-4 py-3">क्रिया</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((p) => (
                                <tr key={p.id} className="hover:bg-slate-50 transition">
                                    <td className="px-4 py-3 font-mono text-orange font-semibold">{p.id}</td>
                                    <td className="px-4 py-3 font-semibold text-primary-navy">{p.name}</td>
                                    <td className="px-4 py-3 text-slate-600">{p.location}</td>
                                    <td className="px-4 py-3 text-slate-500">{p.zone}</td>
                                    <td className="px-4 py-3 text-slate-600">{p.area}</td>
                                    <td className="px-4 py-3 text-slate-600">{p.type}</td>
                                    <td className="px-4 py-3 text-slate-700">{p.tenant}</td>
                                    <td className="px-4 py-3 font-bold text-primary-navy">{p.rent}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${statusColor[p.status]}`}>{p.status}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition"><IconEdit size={14} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
