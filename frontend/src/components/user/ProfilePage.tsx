"use client";
import React from "react";
import { IconUser, IconPhone, IconMail, IconMapPin, IconId, IconBuildingStore, IconCalendar } from "@tabler/icons-react";

const dummyUser = {
    userId: "USR-2026-0045",
    name: "रमेश चंद्र जोशी",
    fatherName: "स्व. श्री हरि प्रसाद जोशी",
    mobile: "+91 94567 12345",
    email: "ramesh.joshi@example.com",
    address: "वार्ड नं. 5, मॉल रोड, अलमोड़ा, उत्तराखंड - 263601",
    pan: "ABCPJ1234K",
    gst: "05ABCPJ1234K1Z5",
    shopNumber: "Shop-12",
    shopLocation: "मॉल रोड, अलमोड़ा",
    monthlyRent: "₹ 1,200",
    status: "सक्रिय",
    joiningDate: "15 अप्रैल 2022",
};

export default function ProfilePage() {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">मेरी प्रोफाइल</h2>
                <p className="text-sm text-slate-500 mt-0.5">My Profile — व्यक्तिगत एवं संपत्ति विवरण (केवल देखने योग्य)</p>
            </div>

            {/* Info Banner */}
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                <span className="text-base leading-none">ℹ️</span>
                <span>
                    <strong>नोट:</strong> प्रोफाइल में कोई भी बदलाव केवल अधिकृत प्रशासक द्वारा किया जा सकता है। यदि किसी सुधार की आवश्यकता है, तो कृपया नीचे दिया गया "सुधार अनुरोध" फॉर्म भरें।
                    <br />
                    <span className="text-amber-600">Profile changes can only be made by an authorized administrator.</span>
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Profile Card */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-navy to-[#0f3068] p-6 text-center">
                        <div className="h-20 w-20 rounded-full bg-white/20 border-3 border-white/40 flex items-center justify-center mx-auto">
                            <IconUser className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-white font-bold mt-3">{dummyUser.name}</h3>
                        <p className="text-white/60 text-xs mt-1">{dummyUser.userId}</p>
                        <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-400/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            {dummyUser.status}
                        </span>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex items-center gap-3 text-xs">
                            <IconPhone size={14} className="text-slate-400" />
                            <span className="text-slate-700 font-medium">{dummyUser.mobile}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                            <IconMail size={14} className="text-slate-400" />
                            <span className="text-slate-700 font-medium">{dummyUser.email}</span>
                        </div>
                        <div className="flex items-start gap-3 text-xs">
                            <IconMapPin size={14} className="text-slate-400 shrink-0 mt-0.5" />
                            <span className="text-slate-700 font-medium">{dummyUser.address}</span>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-2 space-y-5">
                    {/* Personal Details */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                        <div className="px-5 py-4 border-b border-slate-100">
                            <h3 className="font-bold text-primary-navy text-sm">व्यक्तिगत विवरण (Personal Details)</h3>
                        </div>
                        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "पूरा नाम (Full Name)", value: dummyUser.name },
                                { label: "पिता/पति का नाम", value: dummyUser.fatherName },
                                { label: "मोबाइल नंबर", value: dummyUser.mobile },
                                { label: "ईमेल", value: dummyUser.email },
                                { label: "पता (Address)", value: dummyUser.address },
                                { label: "PAN नंबर", value: dummyUser.pan },
                                { label: "GST नंबर", value: dummyUser.gst },
                                { label: "खाता स्थिति", value: dummyUser.status },
                            ].map((field, i) => (
                                <div key={i} className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{field.label}</div>
                                    <div className="text-sm font-semibold text-primary-navy mt-1">{field.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Property Assignment */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                        <div className="px-5 py-4 border-b border-slate-100">
                            <h3 className="font-bold text-primary-navy text-sm">संपत्ति आवंटन (Property Assignment)</h3>
                        </div>
                        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "दुकान नंबर", value: dummyUser.shopNumber, icon: <IconBuildingStore size={14} className="text-orange" /> },
                                { label: "स्थान", value: dummyUser.shopLocation, icon: <IconMapPin size={14} className="text-orange" /> },
                                { label: "मासिक किराया", value: dummyUser.monthlyRent, icon: <IconId size={14} className="text-orange" /> },
                                { label: "आवंटन तिथि", value: dummyUser.joiningDate, icon: <IconCalendar size={14} className="text-orange" /> },
                            ].map((field, i) => (
                                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
                                    <div className="h-8 w-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                                        {field.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{field.label}</div>
                                        <div className="text-sm font-semibold text-primary-navy mt-0.5">{field.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Correction Request Form */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-xs">
                        <div className="px-5 py-4 border-b border-slate-100">
                            <h3 className="font-bold text-primary-navy text-sm">सुधार अनुरोध (Profile Correction Request)</h3>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="text-xs font-medium text-slate-600">किस फ़ील्ड में सुधार चाहिए? *</label>
                                <select className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange">
                                    <option value="">— फ़ील्ड चुनें —</option>
                                    <option value="name">पूरा नाम</option>
                                    <option value="father">पिता/पति का नाम</option>
                                    <option value="mobile">मोबाइल नंबर</option>
                                    <option value="email">ईमेल</option>
                                    <option value="address">पता</option>
                                    <option value="pan">PAN नंबर</option>
                                    <option value="gst">GST नंबर</option>
                                    <option value="other">अन्य</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-medium text-slate-600">सही जानकारी / विवरण *</label>
                                <textarea rows={3} className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange resize-none" placeholder="कृपया सही जानकारी लिखें..."></textarea>
                            </div>
                            <button className="px-5 py-2 text-xs font-semibold rounded-lg bg-primary-navy hover:bg-primary-navy/90 text-white shadow transition">
                                अनुरोध भेजें (Submit Request)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
