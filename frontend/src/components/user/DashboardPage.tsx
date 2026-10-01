"use client";
import React from "react";
import WelcomeCard from "@/components/user/dashboard/WelcomeCard";
import RentSummaryCard from "@/components/user/dashboard/RentSummaryCard";
import OutstandingDuesCard from "@/components/user/dashboard/OutstandingDuesCard";
import PaymentSummaryCard from "@/components/user/dashboard/PaymentSummaryCard";
import PropertySummaryCard from "@/components/user/dashboard/PropertySummaryCard";
import RecentPayments from "@/components/user/dashboard/RecentPayments";
import RecentNotices from "@/components/user/dashboard/RecentNotices";
import RecentActivity from "@/components/user/dashboard/RecentActivity";
import { IconCreditCard, IconReceipt, IconMessageReport, IconSpeakerphone } from "@tabler/icons-react";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Welcome Card */}
            <WelcomeCard
                userName="रमेश चंद्र जोशी"
                shopNumber="Shop-12 (मॉल रोड)"
                lastLogin="01 Oct 2026, 9:00 AM"
            />

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <RentSummaryCard
                    currentMonthRent="₹ 1,200"
                    rentPeriod="अक्टूबर 2026"
                    dueDate="10 Oct 2026"
                    status="unpaid"
                />
                <OutstandingDuesCard
                    totalDues="₹ 1,200"
                    dueMonths={1}
                    oldestDueMonth="अक्टूबर 2026"
                />
                <PaymentSummaryCard
                    totalPaid="₹ 7,200"
                    lastPaymentDate="30 Sep 2026"
                    lastPaymentAmount="₹ 1,200"
                    paymentMethod="Razorpay"
                />
                <PropertySummaryCard
                    shopNumber="Shop-12"
                    location="मॉल रोड, अलमोड़ा"
                    propertyType="दुकान"
                    area="200 sq.ft"
                    allotmentDate="15 Apr 2022"
                />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                    { icon: <IconCreditCard className="h-5 w-5 text-emerald-600" />, title: "किराया भुगतान करें", desc: "Pay Rent Online", bg: "bg-emerald-50 hover:bg-emerald-100" },
                    { icon: <IconReceipt className="h-5 w-5 text-orange" />, title: "रसीदें देखें", desc: "View Receipts", bg: "bg-orange-50 hover:bg-orange-100" },
                    { icon: <IconMessageReport className="h-5 w-5 text-purple-600" />, title: "शिकायत दर्ज करें", desc: "File Complaint", bg: "bg-purple-50 hover:bg-purple-100" },
                    { icon: <IconSpeakerphone className="h-5 w-5 text-blue-600" />, title: "सूचनाएं देखें", desc: "View Notices", bg: "bg-blue-50 hover:bg-blue-100" },
                ].map((action, i) => (
                    <button key={i} className={`p-4 rounded-xl border border-slate-200 shadow-xs transition text-left ${action.bg} group cursor-pointer`}>
                        <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-xs mb-2">
                            {action.icon}
                        </div>
                        <div className="text-xs font-bold text-primary-navy">{action.title}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{action.desc}</div>
                    </button>
                ))}
            </div>

            {/* Bottom Grid: Recent Payments + Notices + Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2">
                    <RecentPayments />
                </div>
                <div className="space-y-5">
                    <RecentNotices />
                </div>
            </div>

            {/* Activity Timeline */}
            <RecentActivity />
        </div>
    );
}
