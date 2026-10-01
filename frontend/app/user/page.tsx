"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TopHeader } from "@/components/TopHeader";
import { Sidebar, SidebarBody, SidebarLink } from "@/ui/sidebar";
import {
    IconBrandTabler,
    IconUser,
    IconBuildingStore,
    IconReceipt2,
    IconCreditCard,
    IconFileInvoice,
    IconReceipt,
    IconSpeakerphone,
    IconBell,
    IconMessageReport,
    IconFile,
    IconMessage,
    IconShieldCheck,
    IconLogout,
    IconBuildingBank,
    IconSearch,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Page Imports ---
import DashboardPage from "@/components/user/DashboardPage";
import ProfilePage from "@/components/user/ProfilePage";
import PropertyPage from "@/components/user/PropertyPage";
import RentPage from "@/components/user/RentPage";
import PaymentsPage from "@/components/user/PaymentsPage";
import LedgerPage from "@/components/user/LedgerPage";
import ReceiptsPage from "@/components/user/ReceiptsPage";
import NoticesPage from "@/components/user/NoticesPage";
import NotificationsPage from "@/components/user/NotificationsPage";
import ComplaintsPage from "@/components/user/ComplaintsPage";
import DocumentsPage from "@/components/user/DocumentsPage";
import FeedbackPage from "@/components/user/FeedbackPage";
import SecurityPage from "@/components/user/SecurityPage";

// Dummy user for login
const DUMMY_USER = {
    name: "रमेश चंद्र जोशी",
    nameEn: "Ramesh Chandra Joshi",
    userId: "USR-2026-0045",
    mobile: "+91 94567 12345",
    shop: "Shop-12 (मॉल रोड)",
    initials: "RC",
};

export default function UserPortalPage() {
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
            label: "डैशबोर्ड (Dashboard)",
            icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-orange" />,
        },
        {
            id: "profile",
            label: "मेरी प्रोफाइल (Profile)",
            icon: <IconUser className="h-5 w-5 shrink-0 text-primary-navy" />,
        },
        {
            id: "property",
            label: "मेरी संपत्ति (Property)",
            icon: <IconBuildingStore className="h-5 w-5 shrink-0 text-emerald-700" />,
        },
        {
            id: "rent",
            label: "किराया (Rent)",
            icon: <IconReceipt2 className="h-5 w-5 shrink-0 text-primary-navy" />,
        },
        {
            id: "payments",
            label: "भुगतान (Payments)",
            icon: <IconCreditCard className="h-5 w-5 shrink-0 text-emerald-700" />,
        },
        {
            id: "ledger",
            label: "खाता लेजर (Ledger)",
            icon: <IconFileInvoice className="h-5 w-5 shrink-0 text-orange" />,
        },
        {
            id: "receipts",
            label: "रसीदें (Receipts)",
            icon: <IconReceipt className="h-5 w-5 shrink-0 text-primary-navy" />,
        },
        {
            id: "notices",
            label: "सूचनाएं (Notices)",
            icon: <IconSpeakerphone className="h-5 w-5 shrink-0 text-orange" />,
        },
        {
            id: "notifications",
            label: "नोटिफिकेशन (Notifications)",
            icon: <IconBell className="h-5 w-5 shrink-0 text-blue-600" />,
        },
        {
            id: "complaints",
            label: "शिकायतें (Complaints)",
            icon: <IconMessageReport className="h-5 w-5 shrink-0 text-rose-600" />,
        },
        {
            id: "documents",
            label: "दस्तावेज़ (Documents)",
            icon: <IconFile className="h-5 w-5 shrink-0 text-slate-500" />,
        },
        {
            id: "feedback",
            label: "प्रतिक्रिया (Feedback)",
            icon: <IconMessage className="h-5 w-5 shrink-0 text-purple-600" />,
        },
        {
            id: "security",
            label: "सुरक्षा (Security)",
            icon: <IconShieldCheck className="h-5 w-5 shrink-0 text-slate-500" />,
        },
    ];

    const tabLabels: Record<string, string> = {
        dashboard: "मेरा डैशबोर्ड",
        profile: "मेरी प्रोफाइल (Profile)",
        property: "मेरी संपत्ति (Property)",
        rent: "किराया प्रबंधन",
        payments: "भुगतान",
        ledger: "खाता लेजर",
        receipts: "रसीदें",
        notices: "सूचनाएं",
        notifications: "नोटिफिकेशन",
        complaints: "शिकायतें",
        documents: "दस्तावेज़",
        feedback: "प्रतिक्रिया / फ़ीडबैक",
        security: "सुरक्षा सेटिंग्स",
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
                                <div className="h-8 w-8 shrink-0 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow">
                                    {DUMMY_USER.initials}
                                </div>
                                {open && (
                                    <div className="text-xs truncate">
                                        <div className="font-semibold text-primary-navy">{DUMMY_USER.name}</div>
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
                                {open && <span>लॉगआउट (Logout)</span>}
                            </button>
                        </div>
                    </SidebarBody>
                </Sidebar>

                {/* Main Content Area */}
                <div className="flex flex-1 flex-col overflow-hidden bg-slate-50">
                    {/* Top User Header Bar */}
                    <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between shadow-xs shrink-0">
                        <div className="flex items-center gap-3">
                            <h1 className="text-xl font-bold text-primary-navy flex items-center gap-2">
                                <span className="text-orange">किराएदार पोर्टल</span>
                                <span className="text-slate-300">|</span>
                                <span className="text-base font-medium text-slate-500">{tabLabels[activeTab]}</span>
                            </h1>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* User Badge */}
                            <div className="hidden xl:flex items-center gap-2 text-[11px]">
                                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1 shadow-xs">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    OTP Verified
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-primary-navy/5 text-primary-navy font-semibold border border-primary-navy/10 flex items-center gap-1">
                                    🏪 {DUMMY_USER.shop}
                                </span>
                            </div>

                            <div className="relative hidden md:block w-56 lg:w-64">
                                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search receipt, notice..."
                                    className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange"
                                />
                            </div>
                            <button
                                onClick={() => setActiveTab("notifications")}
                                className="relative p-2 rounded-full hover:bg-slate-100 text-slate-600" title="Notifications"
                            >
                                <IconBell className="h-5 w-5" />
                                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                            </button>
                            <button
                                onClick={() => setActiveTab("profile")}
                                title="View Profile"
                                className="flex items-center gap-2 pl-2 border-l border-slate-200 hover:bg-slate-100 p-1 rounded-lg transition"
                            >
                                <div className="h-8 w-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                                    {DUMMY_USER.initials}
                                </div>
                                <div className="hidden lg:block text-xs text-left">
                                    <div className="font-semibold text-slate-800 flex items-center gap-1">
                                        {DUMMY_USER.nameEn}
                                        <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded">User</span>
                                    </div>
                                    <div className="text-slate-500 text-[11px]">{DUMMY_USER.mobile}</div>
                                </div>
                            </button>
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 overflow-y-auto p-6">
                        {activeTab === "dashboard" && <DashboardPage />}
                        {activeTab === "profile" && <ProfilePage />}
                        {activeTab === "property" && <PropertyPage />}
                        {activeTab === "rent" && <RentPage />}
                        {activeTab === "payments" && <PaymentsPage />}
                        {activeTab === "ledger" && <LedgerPage />}
                        {activeTab === "receipts" && <ReceiptsPage />}
                        {activeTab === "notices" && <NoticesPage />}
                        {activeTab === "notifications" && <NotificationsPage />}
                        {activeTab === "complaints" && <ComplaintsPage />}
                        {activeTab === "documents" && <DocumentsPage />}
                        {activeTab === "feedback" && <FeedbackPage />}
                        {activeTab === "security" && <SecurityPage />}
                    </main>
                </div>
            </div>
        </div>
    );
}

export const Logo = () => {
    return (
        <div className="flex items-center space-x-3 py-1 px-1">
            <div className="h-9 w-9 shrink-0 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <IconBuildingBank className="h-5 w-5" />
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                <span className="font-bold text-sm text-primary-navy leading-tight">किराएदार पोर्टल</span>
                <span className="text-[11px] font-semibold text-orange">Almora (उत्तराखंड)</span>
            </motion.div>
        </div>
    );
};

export const LogoIcon = () => {
    return (
        <div className="flex items-center justify-center py-1">
            <div className="h-9 w-9 shrink-0 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <IconBuildingBank className="h-5 w-5" />
            </div>
        </div>
    );
};
