import React from "react";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata = {
    title: "हमारे बारे में • जिला पंचायत अल्मोड़ा | About Zila Panchayat Almora",
    description: "उत्तराखंड शासन के पंचायती राज विभाग के अंतर्गत जिला पंचायत अल्मोड़ा की आधिकारिक जानकारी, उद्देश्य, संपत्ति प्रबंधन एवं डिजिटल सुशासन प्रणाली।",
};

export default function AboutPage() {
    return (
        <main className="flex-1 flex flex-col">
            <div className="bg-primary-navy text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-blue-900">
                <div className="max-w-4xl mx-auto space-y-2">
                    <span className="text-blue-300 font-bold text-xs uppercase tracking-wider">
                        उत्तराखंड शासन • पंचायती राज विभाग
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        हमारे बारे में (About Zila Panchayat Almora)
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                        जनपद अल्मोड़ा का सर्वोच्च स्थानीय निकाय — पारदर्शी संपत्ति प्रबंधन एवं जनसुविधा डिजिटल पोर्टल।
                    </p>
                </div>
            </div>

            <AboutSection />
            <ContactSection />
        </main>
    );
}
