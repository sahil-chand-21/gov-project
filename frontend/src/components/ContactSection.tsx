"use client";

import React, { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaPaperPlane,
    FaCheckCircle,
    FaHeadset,
} from "react-icons/fa";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        category: "general",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [referenceId, setReferenceId] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.message) {
            alert("कृपया नाम, मोबाइल नंबर एवं संदेश दर्ज करें।");
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setReferenceId(`AZP/MSG/${Math.floor(1000 + Math.random() * 9000)}`);
            setIsSuccess(true);
            setFormData({ name: "", phone: "", category: "general", message: "" });

            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        }, 1000);
    };

    return (
        <section id="contact" className="w-full py-14 sm:py-18 md:py-20 bg-slate-50 border-b border-slate-200 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#0f4c9c] text-xs sm:text-sm font-semibold tracking-wide">
                        <FaHeadset className="text-blue-600 text-xs" />
                        <span>संपर्क एवं हेल्पलाइन • Contact & Support</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy tracking-tight">
                        संपर्क करें एवं सहायता प्राप्त करें <span className="text-[#0f4c9c] font-normal sm:text-3xl block sm:inline">/ Contact Us</span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        अल्मोड़ा जिला पंचायत कार्यालय से संपर्क करें या अपनी समस्या व सुझाव हेतु ऑनलाइन संदेश भेजें।
                    </p>
                </div>

                {/* 2 Column Layout: Info Cards on Left, Form on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column (5 cols): Official Details & Hours */}
                    <div className="lg:col-span-5 space-y-5">

                        {/* Address Card */}
                        <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs flex items-start gap-4 hover:border-blue-300 transition-all">
                            <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg shrink-0 mt-0.5">
                                <FaMapMarkerAlt />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-sm sm:text-base font-bold text-primary-navy">
                                    कार्यालय का पता (Office Address)
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                                    कार्यालय जिला पंचायत भवन, विकास भवन मार्ग, अल्मोड़ा, उत्तराखंड - 263601
                                </p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs flex items-start gap-4 hover:border-blue-300 transition-all">
                            <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg shrink-0 mt-0.5">
                                <FaPhoneAlt />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-sm sm:text-base font-bold text-primary-navy">
                                    हेल्पलाइन नंबर (Helpline & Phone)
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                                    05962-230000 / +91 94120 00000
                                </p>
                                <p className="text-[11px] text-slate-400 font-medium">
                                    (सोमवार से शनिवार, कार्यालय समय के दौरान)
                                </p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs flex items-start gap-4 hover:border-blue-300 transition-all">
                            <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg shrink-0 mt-0.5">
                                <FaEnvelope />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-sm sm:text-base font-bold text-primary-navy">
                                    आधिकारिक ईमेल (Official Email)
                                </h3>
                                <p className="text-xs sm:text-sm text-[#0f4c9c] font-semibold">
                                    zilapanchayat-alm@uk.gov.in
                                </p>
                                <p className="text-[11px] text-slate-400 font-medium">
                                    support@almora.zilapanchayat.gov.in
                                </p>
                            </div>
                        </div>

                        {/* Office Hours Card */}
                        <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs flex items-start gap-4 hover:border-blue-300 transition-all">
                            <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#0f4c9c] border border-blue-100 flex items-center justify-center text-lg shrink-0 mt-0.5">
                                <FaClock />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-sm sm:text-base font-bold text-primary-navy">
                                    कार्यालय समय (Office Hours)
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                                    प्रातः 10:00 बजे से सायंकाल 05:00 बजे तक
                                </p>
                                <p className="text-[11px] text-slate-400 font-semibold">
                                    (रविवार एवं राजकीय अवकाश पर बंद)
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column (7 cols): Contact / Message Form */}
                    <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                        <div className="mb-6 space-y-1">
                            <h3 className="text-lg sm:text-xl font-bold text-primary-navy">
                                ऑनलाइन संदेश या शिकायत भेजें
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">
                                अपना प्रश्न अथवा समस्या का विवरण दर्ज करें, हमारी टीम जल्द संपर्क करेगी।
                            </p>
                        </div>

                        {isSuccess && (
                            <div className="mb-6 bg-blue-50 border border-blue-200 text-[#0f4c9c] rounded-lg p-4 flex items-center gap-3 text-xs sm:text-sm font-semibold">
                                <FaCheckCircle className="text-[#0f4c9c] text-lg shrink-0" />
                                <span>
                                    आपका संदेश सफलतापूर्वक भेज दिया गया है। संदेश संदर्भ संख्या: <strong>{referenceId}</strong>
                                </span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Name & Phone Inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-700">
                                        पूरा नाम (Full Name) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="अपना नाम दर्ज करें"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#0f4c9c] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-700">
                                        मोबाइल नंबर (Mobile No.) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="10 अंकों का मोबाइल नंबर"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#0f4c9c] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50"
                                    />
                                </div>
                            </div>

                            {/* Category Select */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700">
                                    विषय / श्रेणी (Subject Category)
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#0f4c9c] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 font-medium"
                                >
                                    <option value="general">सामान्य पूछताछ (General Enquiry)</option>
                                    <option value="rent">किराया भुगतान संबंधी सहायता (Rent Payment Issue)</option>
                                    <option value="shop">दुकान / परिसर आवंटन (Shop Allotment Inquiry)</option>
                                    <option value="complaint">शिकायत एवं रख-रखाव (Complaint / Maintenance)</option>
                                </select>
                            </div>

                            {/* Message Textarea */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700">
                                    संदेश / समस्या विवरण (Message Details) <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                    placeholder="अपनी समस्या अथवा प्रश्न का विवरण यहां दर्ज करें..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#0f4c9c] focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 rounded-lg text-xs sm:text-sm font-bold text-white bg-primary-navy hover:bg-[#0f4c9c] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <span>भेजा जा रहा है...</span>
                                ) : (
                                    <>
                                        <FaPaperPlane className="text-xs" />
                                        <span>संदेश भेजें (Submit Message)</span>
                                    </>
                                )}
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
