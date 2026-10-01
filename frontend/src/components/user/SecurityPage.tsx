"use client";
import React from "react";
import { IconShieldCheck, IconDeviceDesktop, IconMapPin, IconClock, IconKey, IconEye, IconEyeOff } from "@tabler/icons-react";

const loginActivity = [
    { date: "01 Oct 2026, 9:00 AM", ip: "103.45.xx.xx", device: "Chrome / Windows 11", location: "अलमोड़ा, उत्तराखंड", status: "सफल" },
    { date: "30 Sep 2026, 10:30 AM", ip: "103.45.xx.xx", device: "Chrome / Windows 11", location: "अलमोड़ा, उत्तराखंड", status: "सफल" },
    { date: "28 Sep 2026, 8:15 AM", ip: "49.36.xx.xx", device: "Chrome / Android 14", location: "अलमोड़ा, उत्तराखंड", status: "सफल" },
    { date: "25 Sep 2026, 11:45 PM", ip: "192.168.xx.xx", device: "Unknown Browser", location: "अज्ञात", status: "विफल" },
    { date: "20 Sep 2026, 2:30 PM", ip: "103.45.xx.xx", device: "Chrome / Windows 11", location: "अलमोड़ा, उत्तराखंड", status: "सफल" },
];

export default function SecurityPage() {
    const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
    const [showNewPassword, setShowNewPassword] = React.useState(false);

    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">सुरक्षा सेटिंग्स</h2>
                <p className="text-sm text-slate-500 mt-0.5">Security — पासवर्ड बदलें एवं लॉगिन गतिविधि देखें</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Change Password */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
                        <IconKey size={16} className="text-orange" />
                        <h3 className="font-bold text-primary-navy text-sm">पासवर्ड बदलें (Change Password)</h3>
                    </div>
                    <div className="p-5 space-y-4">
                        <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
                            🔒 पासवर्ड <strong>Argon2id</strong> हैशिंग से सुरक्षित है। कृपया मजबूत पासवर्ड का उपयोग करें।
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600">वर्तमान पासवर्ड *</label>
                            <div className="relative mt-1">
                                <input type={showCurrentPassword ? "text" : "password"} className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange pr-10" placeholder="वर्तमान पासवर्ड दर्ज करें" />
                                <button onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                    {showCurrentPassword ? <IconEyeOff size={14} /> : <IconEye size={14} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600">नया पासवर्ड *</label>
                            <div className="relative mt-1">
                                <input type={showNewPassword ? "text" : "password"} className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange pr-10" placeholder="नया पासवर्ड दर्ज करें" />
                                <button onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                    {showNewPassword ? <IconEyeOff size={14} /> : <IconEye size={14} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600">नया पासवर्ड पुनः दर्ज करें *</label>
                            <input type="password" className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" placeholder="पासवर्ड की पुष्टि करें" />
                        </div>
                        <button className="px-5 py-2 text-xs font-semibold rounded-lg bg-primary-navy hover:bg-primary-navy/90 text-white shadow transition">
                            पासवर्ड बदलें (Update Password)
                        </button>
                    </div>
                </div>

                {/* Security Info */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
                        <IconShieldCheck size={16} className="text-emerald-600" />
                        <h3 className="font-bold text-primary-navy text-sm">खाता सुरक्षा (Account Security)</h3>
                    </div>
                    <div className="p-5 space-y-3">
                        {[
                            { label: "पासवर्ड हैशिंग", value: "Argon2id (Active)", color: "text-emerald-600", bg: "bg-emerald-50" },
                            { label: "OTP सत्यापन", value: "Mobile OTP Verified", color: "text-emerald-600", bg: "bg-emerald-50" },
                            { label: "अंतिम पासवर्ड परिवर्तन", value: "15 Sep 2026", color: "text-slate-600", bg: "bg-slate-50" },
                            { label: "सत्र / Session", value: "Active (expires in 2h)", color: "text-blue-600", bg: "bg-blue-50" },
                            { label: "अंतिम सफल लॉगिन", value: "01 Oct 2026, 9:00 AM", color: "text-slate-600", bg: "bg-slate-50" },
                            { label: "विफल प्रयास", value: "1 (25 Sep 2026)", color: "text-rose-600", bg: "bg-rose-50" },
                        ].map((item, i) => (
                            <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${item.bg}`}>
                                <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                                <span className={`text-xs font-semibold ${item.color}`}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Login Activity */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
                    <IconClock size={16} className="text-orange" />
                    <h3 className="font-bold text-primary-navy text-sm">लॉगिन गतिविधि (Login Activity)</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-slate-600">
                        <thead className="bg-primary-navy/5 text-primary-navy font-semibold">
                            <tr>
                                <th className="p-3">तिथि एवं समय</th>
                                <th className="p-3">IP पता</th>
                                <th className="p-3">डिवाइस / ब्राउज़र</th>
                                <th className="p-3">स्थान</th>
                                <th className="p-3">स्थिति</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loginActivity.map((activity, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition">
                                    <td className="p-3">{activity.date}</td>
                                    <td className="p-3 font-mono text-[10px]">{activity.ip}</td>
                                    <td className="p-3 flex items-center gap-1.5">
                                        <IconDeviceDesktop size={12} className="text-slate-400" />
                                        {activity.device}
                                    </td>
                                    <td className="p-3 flex items-center gap-1.5">
                                        <IconMapPin size={12} className="text-slate-400" />
                                        {activity.location}
                                    </td>
                                    <td className="p-3">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${activity.status === "सफल" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-600"}`}>
                                            {activity.status}
                                        </span>
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
