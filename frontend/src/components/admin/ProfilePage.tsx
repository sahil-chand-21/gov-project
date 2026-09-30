"use client";
import React, { useState } from "react";
import {
    IconUser,
    IconMail,
    IconPhone,
    IconBuildingBank,
    IconShieldCheck,
    IconCheck,
    IconLock,
    IconBadge,
} from "@tabler/icons-react";

export default function ProfilePage() {
    const [saved, setSaved] = useState(false);
    const [adminInfo, setAdminInfo] = useState({
        name: "प्रशासक (Super Admin)",
        designation: "मुख्य कार्यकारी अधिकारी / सुपर एडमिन",
        dept: "जिला पंचायत अलमोड़ा (उत्तराखंड सरकार)",
        email: "admin@almora.gov.in",
        mobile: "+91 98765 43210",
        employeeId: "AZP-ADM-2026-001",
        joinedDate: "15-Jan-2022",
        mfaStatus: "Active (SMS + OTP 2FA)",
        lastLogin: "30 Sep 2026, 07:14 PM (IP: 192.168.1.10)",
    });

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">प्रशासक प्रोफाइल (Admin Profile)</h2>
                <p className="text-sm text-slate-500 mt-0.5">
                    Super Admin Profile & Administrative Credentials — अलमोड़ा जिला पंचायत
                </p>
            </div>

            {/* Profile Overview Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="bg-primary-navy px-6 py-6 text-white relative">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <div className="h-20 w-20 rounded-full bg-orange text-white flex items-center justify-center font-bold text-2xl border-4 border-white shadow-md shrink-0">
                            SA
                        </div>
                        <div className="text-center sm:text-left space-y-1">
                            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
                                <h3 className="text-xl font-bold">{adminInfo.name}</h3>
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange text-white border border-orange-300">
                                    Super Admin
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-white flex items-center gap-1">
                                    <IconShieldCheck size={13} /> MFA Active
                                </span>
                            </div>
                            <p className="text-xs text-white/80">{adminInfo.designation}</p>
                            <p className="text-xs text-white/70 flex items-center justify-center sm:justify-start gap-1">
                                <IconBuildingBank size={14} className="text-orange" /> {adminInfo.dept}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50/50 border-t border-slate-100">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                        <span className="text-slate-400 font-medium block">कर्मचारी / एडमिन ID:</span>
                        <span className="font-mono font-bold text-primary-navy text-sm">{adminInfo.employeeId}</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                        <span className="text-slate-400 font-medium block">नियुक्ति / सिस्टम खाता तिथि:</span>
                        <span className="font-semibold text-slate-700">{adminInfo.joinedDate}</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                        <span className="text-slate-400 font-medium block">अंतिम लॉगिन गतिविधि:</span>
                        <span className="font-semibold text-emerald-700 text-[11px]">{adminInfo.lastLogin}</span>
                    </div>
                </div>
            </div>

            {/* Editable Profile Information */}
            <form onSubmit={handleSave} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                    <IconUser className="h-4 w-4 text-orange" />
                    <h3 className="font-bold text-primary-navy text-sm">व्यक्तिगत विवरण (Personal & Contact Details)</h3>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">पूरा नाम (Full Name)</label>
                        <div className="relative">
                            <IconUser className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                value={adminInfo.name}
                                onChange={(e) => setAdminInfo({ ...adminInfo, name: e.target.value })}
                                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">पदनाम (Designation)</label>
                        <div className="relative">
                            <IconBadge className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                value={adminInfo.designation}
                                onChange={(e) => setAdminInfo({ ...adminInfo, designation: e.target.value })}
                                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">ईमेल (Official Email)</label>
                        <div className="relative">
                            <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="email"
                                value={adminInfo.email}
                                onChange={(e) => setAdminInfo({ ...adminInfo, email: e.target.value })}
                                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">मोबाइल नंबर (Registered Mobile)</label>
                        <div className="relative">
                            <IconPhone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                value={adminInfo.mobile}
                                onChange={(e) => setAdminInfo({ ...adminInfo, mobile: e.target.value })}
                                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <button
                        type="submit"
                        className="px-5 py-2 bg-primary-navy hover:bg-primary-navy/90 text-white text-xs font-semibold rounded-lg shadow transition"
                    >
                        प्रोफ़ाइल सहेजें
                    </button>
                    {saved && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 animate-pulse">
                            <IconCheck size={14} /> प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई!
                        </span>
                    )}
                </div>
            </form>

            {/* Role Permissions & Security Clearance */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <IconLock className="h-4 w-4 text-orange" />
                        <h3 className="font-bold text-primary-navy text-sm">प्रशासनिक अधिकार व सुरक्षा स्तर (PRD Sec 4.1)</h3>
                    </div>
                    <span className="text-[10px] font-bold text-orange bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                        Full Authority
                    </span>
                </div>
                <div className="p-5 space-y-3 text-xs text-slate-600">
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                        <IconShieldCheck size={16} /> Sub Admins प्रबंधन एवं खाता निर्माण/निष्क्रियता का पूर्ण अधिकार
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                        <IconShieldCheck size={16} /> संपत्ति, किराया दर संशोधन (Rent Revision History) एवं बकाए का पूरा नियंत्रण
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                        <IconShieldCheck size={16} /> ऑफलाइन/कैश रसीद जारी करने तथा वित्तीय लेजर ऑडिट करने का अधिकार
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                        <IconShieldCheck size={16} /> सुरक्षा ऑडिट लॉग्स (Read-Only Audit Trail) एवं रिपोर्ट डाउनलोड एक्सेस
                    </div>
                </div>
            </div>
        </div>
    );
}
