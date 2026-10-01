"use client";
import React from "react";
import { IconUser, IconCalendar } from "@tabler/icons-react";

interface WelcomeCardProps {
    userName: string;
    shopNumber: string;
    lastLogin: string;
}

export default function WelcomeCard({ userName, shopNumber, lastLogin }: WelcomeCardProps) {
    const today = new Date();
    const greeting = today.getHours() < 12 ? "सुप्रभात" : today.getHours() < 17 ? "नमस्कार" : "शुभ संध्या";
    const formattedDate = today.toLocaleDateString("hi-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

    return (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-navy via-[#0f3068] to-[#1a4a8a] p-6 text-white shadow-lg">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5"></div>
            <div className="absolute -right-5 -bottom-8 h-32 w-32 rounded-full bg-orange/10"></div>
            <div className="relative z-10">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm text-white/70">{greeting} 🙏</p>
                        <h2 className="text-2xl font-bold mt-1">{userName}</h2>
                        <p className="text-sm text-white/60 mt-1.5 flex items-center gap-1.5">
                            <IconCalendar size={14} />
                            {formattedDate}
                        </p>
                    </div>
                    <div className="h-14 w-14 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                        <IconUser className="h-7 w-7 text-orange" />
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs">
                    <span className="px-3 py-1.5 bg-white/10 rounded-full border border-white/10">
                        🏪 {shopNumber}
                    </span>
                    <span className="text-white/50">
                        अंतिम लॉगिन: {lastLogin}
                    </span>
                </div>
            </div>
        </div>
    );
}
