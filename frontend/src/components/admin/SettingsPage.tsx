"use client";
import React, { useState } from "react";
import { IconShieldLock, IconKey, IconCalendar, IconBell, IconCheck } from "@tabler/icons-react";

// Toggle defined OUTSIDE component to avoid "cannot create during render" error
const Toggle = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
    <button
        onClick={onChange}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${value ? "bg-primary-navy" : "bg-slate-300"}`}
    >
        <span
            className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${value ? "translate-x-4.5" : "translate-x-0.5"}`}
        />
    </button>
);

export default function SettingsPage() {
    const [mfa, setMfa] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);
    const [autoRent, setAutoRent] = useState(true);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <div className="space-y-6 max-w-2xl">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">सिस्टम सेटिंग्स</h2>
                <p className="text-sm text-slate-500 mt-0.5">System Settings — 2FA, पासवर्ड, सूचनाएं, वित्तीय वर्ष विन्यास</p>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <IconShieldLock className="h-4 w-4 text-orange" />
                        <h3 className="font-bold text-primary-navy text-sm">सुरक्षा आर्किटेक्चर सेटिंग्स (Security.md)</h3>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-2 py-0.5 rounded-full">Enforced</span>
                </div>
                <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm font-semibold text-primary-navy">Two-Factor Authentication (2FA/MFA)</div>
                            <div className="text-xs text-slate-500 mt-0.5">सभी प्रशासकों के लिए OTP सत्यापन अनिवार्य करें [PRD Sec 6]</div>
                        </div>
                        <Toggle value={mfa} onChange={() => setMfa(!mfa)} />
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div>
                            <div className="text-sm font-semibold text-primary-navy">पासवर्ड हैशिंग एल्गोरिदम</div>
                            <div className="text-xs text-slate-500 mt-0.5">Argon2id (सुरक्षित प्राइमरी हैश)</div>
                        </div>
                        <span className="text-xs font-mono font-bold text-primary-navy bg-slate-100 px-2.5 py-1 rounded">Argon2id</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div>
                            <div className="text-sm font-semibold text-primary-navy">सत्र समाप्ति (Session Timeout)</div>
                            <div className="text-xs text-slate-500 mt-0.5">निष्क्रिय होने पर ऑटो लॉगआउट (HttpOnly, Secure Cookies)</div>
                        </div>
                        <select className="text-xs border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange text-slate-700">
                            <option>15 मिनट (सिफारिश)</option>
                            <option>30 मिनट</option>
                            <option>1 घंटा</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div>
                            <div className="text-sm font-semibold text-primary-navy">Brute-Force Lockout Threshold</div>
                            <div className="text-xs text-slate-500 mt-0.5">5 असफल लॉगिन प्रयासों पर temporary lockout</div>
                        </div>
                        <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">5 Attempts / 15m Lock</span>
                    </div>
                </div>
            </div>

            {/* Password */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                    <IconKey className="h-4 w-4 text-orange" />
                    <h3 className="font-bold text-primary-navy text-sm">पासवर्ड अपडेट</h3>
                </div>
                <div className="p-5 space-y-3">
                    {[
                        { label: "वर्तमान पासवर्ड", placeholder: "Current password" },
                        { label: "नया पासवर्ड", placeholder: "New password" },
                        { label: "पासवर्ड पुष्टि", placeholder: "Confirm new password" },
                    ].map((f, i) => (
                        <div key={i}>
                            <label className="text-xs font-semibold text-slate-700 block mb-1">{f.label}</label>
                            <input
                                type="password"
                                placeholder={f.placeholder}
                                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                            />
                        </div>
                    ))}
                    <button className="mt-2 px-4 py-2 bg-primary-navy text-white text-xs font-semibold rounded-lg hover:bg-primary-navy/90 transition">
                        पासवर्ड बदलें
                    </button>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                    <IconBell className="h-4 w-4 text-orange" />
                    <h3 className="font-bold text-primary-navy text-sm">सूचना प्राथमिकताएं (Notifications)</h3>
                </div>
                <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm font-semibold text-primary-navy">ईमेल सूचनाएं</div>
                            <div className="text-xs text-slate-500">भुगतान, बकाया, नई शिकायत पर ईमेल प्राप्त करें</div>
                        </div>
                        <Toggle value={emailAlerts} onChange={() => setEmailAlerts(!emailAlerts)} />
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div>
                            <div className="text-sm font-semibold text-primary-navy">SMS सूचनाएं</div>
                            <div className="text-xs text-slate-500">महत्वपूर्ण गतिविधियों पर SMS प्राप्त करें</div>
                        </div>
                        <Toggle value={smsAlerts} onChange={() => setSmsAlerts(!smsAlerts)} />
                    </div>
                </div>
            </div>

            {/* Financial Year */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                    <IconCalendar className="h-4 w-4 text-orange" />
                    <h3 className="font-bold text-primary-navy text-sm">वित्तीय वर्ष विन्यास</h3>
                </div>
                <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm font-semibold text-primary-navy">वर्तमान वित्तीय वर्ष</div>
                            <div className="text-xs text-slate-500">April 2026 — March 2027</div>
                        </div>
                        <span className="text-xs font-bold text-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">FY 2026-27</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div>
                            <div className="text-sm font-semibold text-primary-navy">ऑटो किराया जनरेशन</div>
                            <div className="text-xs text-slate-500">प्रत्येक माह की 1 तारीख को स्वचालित बिल जनरेट करें</div>
                        </div>
                        <Toggle value={autoRent} onChange={() => setAutoRent(!autoRent)} />
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-primary-navy hover:bg-primary-navy/90 text-white text-sm font-semibold rounded-lg shadow transition"
                >
                    परिवर्तन सहेजें
                </button>
                {saved && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 animate-pulse">
                        <IconCheck size={14} /> सहेजा गया!
                    </span>
                )}
            </div>
        </div>
    );
}
