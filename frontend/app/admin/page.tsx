"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TopHeader } from "@/components/TopHeader";
import { Sidebar, SidebarBody, SidebarLink } from "@/ui/sidebar";
import {
    IconBrandTabler,
    IconUsers,
    IconUserShield,
    IconBuildingStore,
    IconReceipt2,
    IconFileInvoice,
    IconCreditCard,
    IconHistory,
    IconSpeakerphone,
    IconMessageReport,
    IconReportAnalytics,
    IconShieldCheck,
    IconSettings,
    IconLogout,
    IconBuildingBank,
    IconBell,
    IconSearch,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Separate Page Imports ---
import DashboardPage from "@/components/admin/DashboardPage";
import TenantsPage from "@/components/admin/TenantsPage";
import SubAdminsPage from "@/components/admin/SubAdminsPage";
import PropertiesPage from "@/components/admin/PropertiesPage";
import RentPage from "@/components/admin/RentPage";
import DuesPage from "@/components/admin/DuesPage";
import PaymentsPage from "@/components/admin/PaymentsPage";
import LedgerPage from "@/components/admin/LedgerPage";
import NoticesPage from "@/components/admin/NoticesPage";
import ComplaintsPage from "@/components/admin/ComplaintsPage";
import ReportsPage from "@/components/admin/ReportsPage";
import AuditPage from "@/components/admin/AuditPage";
import SettingsPage from "@/components/admin/SettingsPage";
import ProfilePage from "@/components/admin/ProfilePage";

export default function AdminPortalPage() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("dashboard");

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("userRole");
            localStorage.removeItem("userName");
        }
        router.push("/login");
    };

    const links = [
        {
            id: "dashboard",
            label: "Dashboard (डैशबोर्ड)",
            icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-orange" />,
        },
        {
            id: "users",
            label: "Tenants / Users (किराएदार)",
            icon: <IconUsers className="h-5 w-5 shrink-0 text-primary-navy" />,
        },
        {
            id: "subadmins",
            label: "Sub Admins (सब एडमिन)",
            icon: <IconUserShield className="h-5 w-5 shrink-0 text-primary-navy" />,
        },
        {
            id: "properties",
            label: "Shops & Properties (दुकानें)",
            icon: <IconBuildingStore className="h-5 w-5 shrink-0 text-emerald-700" />,
        },
        {
            id: "rent",
            label: "Rent Management (किराया)",
            icon: <IconReceipt2 className="h-5 w-5 shrink-0 text-primary-navy" />,
        },
        {
            id: "dues",
            label: "Previous Dues (बकाया किराया)",
            icon: <IconHistory className="h-5 w-5 shrink-0 text-rose-600" />,
        },
        {
            id: "payments",
            label: "Payments (भुगतान)",
            icon: <IconCreditCard className="h-5 w-5 shrink-0 text-emerald-700" />,
        },
        {
            id: "ledger",
            label: "Ledger (खाता लेजर)",
            icon: <IconFileInvoice className="h-5 w-5 shrink-0 text-orange" />,
        },
        {
            id: "notices",
            label: "Notices (सूचना प्रबंधन)",
            icon: <IconSpeakerphone className="h-5 w-5 shrink-0 text-orange" />,
        },
        {
            id: "complaints",
            label: "Complaints (शिकायतें)",
            icon: <IconMessageReport className="h-5 w-5 shrink-0 text-rose-600" />,
        },
        {
            id: "reports",
            label: "Reports (रिपोर्ट्स)",
            icon: <IconReportAnalytics className="h-5 w-5 shrink-0 text-primary-navy" />,
        },
        {
            id: "audit",
            label: "Audit Logs (ऑडिट लॉग)",
            icon: <IconShieldCheck className="h-5 w-5 shrink-0 text-slate-500" />,
        },
        {
            id: "settings",
            label: "Settings (सेटिंग्स)",
            icon: <IconSettings className="h-5 w-5 shrink-0 text-slate-500" />,
        },
    ];

    const tabLabels: Record<string, string> = {
        dashboard: "प्रशासनिक डैशबोर्ड",
        users: "किराएदार प्रबंधन",
        subadmins: "सब एडमिन",
        properties: "संपत्ति प्रबंधन",
        rent: "किराया प्रबंधन",
        dues: "बकाया किराया",
        payments: "भुगतान",
        ledger: "खाता लेजर",
        notices: "सूचना प्रबंधन",
        complaints: "शिकायत निवारण",
        reports: "रिपोर्ट्स",
        audit: "ऑडिट लॉग्स",
        settings: "सेटिंग्स",
        profile: "प्रशासक प्रोफाइल (Profile)",
    };

    return (
        <div className="min-h-screen flex flex-col w-full bg-slate-50 font-sans">
            <TopHeader />

            <div className="flex flex-1 h-[calc(100vh-140px)] w-full overflow-hidden">
                <Sidebar open={open} setOpen={setOpen}>
                    <SidebarBody className="justify-between gap-6 border-r border-slate-200 bg-white">
                        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto no-scrollbar">
                            {open ? <Logo /> : <LogoIcon />}
                            <div className="mt-6 flex flex-col gap-1">
                                {links.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => setActiveTab(link.id)}
                                        className={cn(
                                            "w-full text-left rounded-lg transition-colors px-2 py-1.5 flex items-center",
                                            activeTab === link.id
                                                ? "bg-orange/10 text-primary-navy font-semibold border-l-4 border-orange"
                                                : "hover:bg-slate-100 text-slate-600"
                                        )}
                                    >
                                        <SidebarLink
                                            link={{
                                                label: link.label,
                                                href: "#",
                                                icon: link.icon,
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-slate-200 pt-3">
                            <button
                                onClick={() => setActiveTab("profile")}
                                className={cn(
                                    "w-full text-left p-1.5 rounded-lg transition flex items-center gap-2",
                                    activeTab === "profile" ? "bg-orange/10 border-l-4 border-orange" : "hover:bg-slate-100"
                                )}
                            >
                                <div className="h-8 w-8 shrink-0 rounded-full bg-primary-navy text-white flex items-center justify-center font-bold text-xs shadow">
                                    SA
                                </div>
                                {open && (
                                    <div className="text-xs truncate">
                                        <div className="font-semibold text-primary-navy">Super Admin</div>
                                        <div className="text-[10px] text-slate-500">प्रोफाइल देखें →</div>
                                    </div>
                                )}
                            </button>
                            <button
                                onClick={handleLogout}
                                className="mt-2 w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition text-sm font-medium cursor-pointer"
                                title="Logout (लॉगआउट)"
                            >
                                <IconLogout className="h-5 w-5 shrink-0" />
                                {open && <span>Logout (लॉगआउट)</span>}
                            </button>
                        </div>
                    </SidebarBody>
                </Sidebar>

                {/* Main Content Area */}
                <div className="flex flex-1 flex-col overflow-hidden bg-slate-50">
                    {/* Top Admin Header Bar */}
                    <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between shadow-xs shrink-0">
                        <div className="flex items-center gap-3">
                            <h1 className="text-xl font-bold text-primary-navy flex items-center gap-2">
                                <span className="text-orange">जिला पंचायत अलमोड़ा</span>
                                <span className="text-slate-300">|</span>
                                <span className="text-base font-medium text-slate-500">{tabLabels[activeTab]}</span>
                            </h1>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Security Badges */}
                            <div className="hidden xl:flex items-center gap-2 text-[11px]">
                                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1 shadow-xs">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    MFA Active
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-primary-navy/5 text-primary-navy font-semibold border border-primary-navy/10 flex items-center gap-1">
                                    🛡️ RBAC Enforced
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold border border-amber-200 flex items-center gap-1">
                                    🔒 Argon2id Hash
                                </span>
                            </div>

                            <div className="relative hidden md:block w-56 lg:w-64">
                                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search Shop, Tenant, Receipt..."
                                    className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange"
                                />
                            </div>
                            <button className="relative p-2 rounded-full hover:bg-slate-100 text-slate-600" title="Notifications">
                                <IconBell className="h-5 w-5" />
                                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                            </button>
                            <button
                                onClick={() => setActiveTab("profile")}
                                title="View Admin Profile"
                                className="flex items-center gap-2 pl-2 border-l border-slate-200 hover:bg-slate-100 p-1 rounded-lg transition"
                            >
                                <div className="h-8 w-8 rounded-full bg-primary-navy text-white flex items-center justify-center font-bold text-xs shadow-xs">
                                    SA
                                </div>
                                <div className="hidden lg:block text-xs text-left">
                                    <div className="font-semibold text-slate-800 flex items-center gap-1">
                                        Super Admin
                                        <span className="text-[10px] bg-orange/10 text-orange font-bold px-1.5 py-0.5 rounded">Govt</span>
                                    </div>
                                    <div className="text-slate-500 text-[11px]">admin@almora.gov.in</div>
                                </div>
                            </button>
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 overflow-y-auto p-6">
                        {activeTab === "dashboard" && <DashboardPage />}
                        {activeTab === "users" && <TenantsPage />}
                        {activeTab === "subadmins" && <SubAdminsPage />}
                        {activeTab === "properties" && <PropertiesPage />}
                        {activeTab === "rent" && <RentPage />}
                        {activeTab === "dues" && <DuesPage />}
                        {activeTab === "payments" && <PaymentsPage />}
                        {activeTab === "ledger" && <LedgerPage />}
                        {activeTab === "notices" && <NoticesPage />}
                        {activeTab === "complaints" && <ComplaintsPage />}
                        {activeTab === "reports" && <ReportsPage />}
                        {activeTab === "audit" && <AuditPage />}
                        {activeTab === "settings" && <SettingsPage />}
                        {activeTab === "profile" && <ProfilePage />}
                    </main>
                </div>
            </div>
        </div>
    );
}

export const Logo = () => {
    return (
        <div className="flex items-center space-x-3 py-1 px-1">
            <div className="h-9 w-9 shrink-0 rounded-xl bg-primary-navy flex items-center justify-center text-white shadow-md">
                <IconBuildingBank className="h-5 w-5" />
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                <span className="font-bold text-sm text-primary-navy leading-tight">Zila Panchayat</span>
                <span className="text-[11px] font-semibold text-orange">Almora (उत्तराखंड)</span>
            </motion.div>
        </div>
    );
};

export const LogoIcon = () => {
    return (
        <div className="flex items-center justify-center py-1">
            <div className="h-9 w-9 shrink-0 rounded-xl bg-primary-navy flex items-center justify-center text-white shadow-md">
                <IconBuildingBank className="h-5 w-5" />
            </div>
        </div>
    );
};
