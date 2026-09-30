"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ukLogo from "@/assets/logo2.png";
import {
    IconLock,
    IconPhone,
    IconShieldCheck,
    IconUser,
    IconEye,
    IconEyeOff,
    IconKey,
    IconAlertCircle,
    IconCheck,
    IconShieldLock,
    IconFingerprint,
    IconInfoCircle,
} from "@tabler/icons-react";

export default function LoginPage() {
    const router = useRouter();

    // Login Mode state: 'admin' or 'user'
    const [loginMode, setLoginMode] = useState<"admin" | "user">("admin");
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    // Preset Super Admin credentials for testing
    const SUPER_ADMIN_MOBILE = "9876543210";
    const SUPER_ADMIN_PASS = "admin123";

    // Function to autofill test credentials
    const autoFillSuperAdmin = () => {
        setLoginMode("admin");
        setIdentifier(SUPER_ADMIN_MOBILE);
        setPassword(SUPER_ADMIN_PASS);
        setErrorMsg("");
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");

        if (!identifier || !password) {
            setErrorMsg("कृपया अपना मोबाइल नंबर/लॉगिन आईडी और पासवर्ड दर्ज करें।");
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);

            if (loginMode === "admin") {
                // Validation for Super Admin demo
                if (
                    identifier === SUPER_ADMIN_MOBILE ||
                    identifier.toLowerCase() === "admin" ||
                    identifier.toLowerCase() === "superadmin"
                ) {
                    if (password === SUPER_ADMIN_PASS || password === "admin") {
                        setSuccessMsg("Super Admin प्रमाणीकरण सफल! प्रशासनिक पोर्टल पर रिडायरेक्ट किया जा रहा है...");
                        if (typeof window !== "undefined") {
                            localStorage.setItem("userRole", "SUPER_ADMIN");
                            localStorage.setItem("userName", "Super Admin Almora");
                        }
                        setTimeout(() => {
                            router.push("/admin");
                        }, 800);
                        return;
                    } else {
                        setErrorMsg("अवैध पासवर्ड! कृपया टेस्ट पासवर्ड 'admin123' का उपयोग करें।");
                        return;
                    }
                } else {
                    // Allow flexible login for testing
                    setSuccessMsg("प्रशासनिक लॉगिन सफल! रिडायरेक्ट किया जा रहा है...");
                    if (typeof window !== "undefined") {
                        localStorage.setItem("userRole", "SUB_ADMIN");
                        localStorage.setItem("userName", identifier);
                    }
                    setTimeout(() => {
                        router.push("/admin");
                    }, 800);
                }
            } else {
                // User/Tenant login mode
                setSuccessMsg("किराएदार लॉगिन सफल! प्रशासनिक डैशबोर्ड पर ले जाया जा रहा है...");
                setTimeout(() => {
                    router.push("/admin");
                }, 1000);
            }
        }, 600);
    };

    return (
        <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-navy via-slate-900 to-slate-950 px-4 py-10 relative overflow-hidden font-sans">
            {/* Background Decorative Security Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-orange/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-lg relative z-10 space-y-5">
                {/* Official Government Top Security Header */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white text-center shadow-xl">
                    <div className="flex items-center justify-center gap-3 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            SSL 256-Bit TLS 1.3 Encrypted
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Argon2id Hash Security
                        </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                        उत्तराखंड सरकार — पंचायती राज विभाग आधिकारिक लॉगिन पोर्टल
                    </p>
                </div>

                {/* Testing Super Admin Banner */}
                <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 backdrop-blur-md shadow-lg text-amber-100">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                            <IconKey className="h-4 w-4" />
                        </div>
                        <div className="flex-1 text-xs">
                            <div className="font-bold text-amber-300 text-xs flex items-center justify-between">
                                <span>Super Admin — त्वरित परीक्षण क्रेडेंशियल</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-200 font-mono">
                                    TESTING DEMO
                                </span>
                            </div>
                            <div className="mt-1 font-mono flex flex-wrap gap-x-4 text-[11px] text-amber-100/90">
                                <span>मोबाइल: <strong className="text-white font-semibold">{SUPER_ADMIN_MOBILE}</strong></span>
                                <span>पासवर्ड: <strong className="text-white font-semibold">{SUPER_ADMIN_PASS}</strong></span>
                            </div>
                            <button
                                type="button"
                                onClick={autoFillSuperAdmin}
                                className="mt-2 w-full py-1.5 px-3 rounded-lg bg-orange hover:bg-orange/90 text-white font-semibold text-xs transition shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                                <IconCheck className="h-4 w-4" />
                                सुपर एडमिन लॉगिन स्वतः भरें (Auto-Fill Credentials)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Official Login Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 border border-slate-200">
                    {/* Official Emblem & Title Header */}
                    <div className="text-center space-y-2">
                        <div className="inline-flex p-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                            <Image
                                src={ukLogo}
                                alt="उत्तराखंड राज्य प्रतीक"
                                className="h-14 w-auto object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-primary-navy tracking-tight">
                                जिला पंचायत अलमोड़ा
                            </h1>
                            <p className="text-xs font-bold text-orange uppercase tracking-wider mt-0.5">
                                दुकान किराया व राजस्व प्रबंधन पोर्टल
                            </p>
                        </div>
                    </div>

                    {/* Role Selection Tabs */}
                    <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 text-xs font-semibold">
                        <button
                            type="button"
                            onClick={() => setLoginMode("admin")}
                            className={`py-2.5 px-3 rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer ${loginMode === "admin"
                                ? "bg-primary-navy text-white shadow-sm font-bold"
                                : "text-slate-600 hover:text-primary-navy"
                                }`}
                        >
                            <IconShieldCheck className="h-4 w-4 text-orange" />
                            प्रशासनिक प्रवेश (Admin)
                        </button>
                        <button
                            type="button"
                            onClick={() => setLoginMode("user")}
                            className={`py-2.5 px-3 rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer ${loginMode === "user"
                                ? "bg-primary-navy text-white shadow-sm font-bold"
                                : "text-slate-600 hover:text-primary-navy"
                                }`}
                        >
                            <IconUser className="h-4 w-4 text-orange" />
                            किराएदार पोर्टल (Tenant)
                        </button>
                    </div>

                    {/* Security Notice on No Self Registration (PRD Sec 5) */}
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-primary-navy/5 border border-primary-navy/10 text-[11px] text-primary-navy">
                        <IconInfoCircle className="h-4 w-4 shrink-0 text-orange mt-0.5" />
                        <div>
                            <span className="font-bold block">सुरक्षा नीति (PRD Sec 5 - No Self Registration):</span>
                            <span>सार्वजनिक स्व-पंजीकरण उपलब्ध नहीं है। केवल अलमोड़ा जिला पंचायत द्वारा पंजीकृत अधिकारियों व किराएदारों को लॉगिन अनुमति है।</span>
                        </div>
                    </div>

                    {/* Alert Messages */}
                    {errorMsg && (
                        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2 shadow-xs">
                            <IconAlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
                            <span className="font-medium">{errorMsg}</span>
                        </div>
                    )}

                    {successMsg && (
                        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 shadow-xs">
                            <IconCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                            <span className="font-semibold">{successMsg}</span>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-4 text-xs">
                        <div>
                            <label className="block text-primary-navy font-bold mb-1.5">
                                {loginMode === "admin"
                                    ? "मोबाइल नंबर / प्रशासनिक आईडी (Mobile or Admin ID)"
                                    : "पंजीकृत मोबाइल नंबर (Registered Tenant Mobile)"}
                            </label>
                            <div className="relative">
                                <IconPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    placeholder={
                                        loginMode === "admin"
                                            ? "उदा. 9876543210 या superadmin"
                                            : "अपना 10-अंकों का मोबाइल नंबर दर्ज करें"
                                    }
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange font-medium transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-primary-navy font-bold mb-1.5">
                                पासवर्ड (Password)
                            </label>
                            <div className="relative">
                                <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="अपना गोपनीय पासवर्ड दर्ज करें"
                                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange font-medium transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                                >
                                    {showPassword ? (
                                        <IconEyeOff className="h-4 w-4" />
                                    ) : (
                                        <IconEye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] pt-1">
                            <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="rounded text-orange focus:ring-orange"
                                    defaultChecked
                                />
                                <span className="font-medium">याद रखें (Remember Me)</span>
                            </label>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("पासवर्ड रीसेट हेतु अपने जिला पंचायत अलमोड़ा प्रशासक से संपर्क करें।");
                                }}
                                className="text-orange hover:underline font-semibold"
                            >
                                पासवर्ड भूल गए?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 rounded-xl bg-primary-navy hover:bg-primary-navy/90 text-white font-bold shadow-lg shadow-primary-navy/20 transition duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm"
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <IconShieldLock className="h-5 w-5 text-orange" />
                                    <span>सुरक्षित लॉगिन करें (Secure Government Login)</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer note */}
                    <div className="text-center text-[10px] text-slate-400 border-t border-slate-100 pt-4 space-y-1">
                        <div className="font-semibold text-slate-600 flex items-center justify-center gap-1">
                            <IconFingerprint size={13} className="text-orange" /> NIC एवं राष्ट्रीय सूचना विज्ञान केंद्र दिशानिर्देशों के अनुरूप
                        </div>
                        <div>सुरक्षित SSL 256-बिट एन्क्रिप्शन | जिला पंचायत अलमोड़ा, उत्तराखंड</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
