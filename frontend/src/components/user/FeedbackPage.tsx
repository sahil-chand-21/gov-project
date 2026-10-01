"use client";
import React, { useState } from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

export default function FeedbackPage() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-primary-navy">प्रतिक्रिया / फ़ीडबैक</h2>
                <p className="text-sm text-slate-500 mt-0.5">Feedback — अपना अनुभव साझा करें</p>
            </div>

            <div className="max-w-2xl">
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-navy to-[#0f3068] px-6 py-5">
                        <h3 className="text-white font-bold text-sm">आपकी प्रतिक्रिया हमारे लिए महत्वपूर्ण है</h3>
                        <p className="text-white/60 text-xs mt-1">Your feedback helps us improve our services</p>
                    </div>

                    <div className="p-6 space-y-5">
                        {/* Star Rating */}
                        <div>
                            <label className="text-xs font-medium text-slate-600 block mb-2">समग्र अनुभव कैसा रहा? (Overall Experience) *</label>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button
                                        key={star}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="p-1 transition-transform hover:scale-110"
                                    >
                                        {star <= (hoverRating || rating) ? (
                                            <IconStarFilled className="h-8 w-8 text-orange" />
                                        ) : (
                                            <IconStar className="h-8 w-8 text-slate-300" />
                                        )}
                                    </button>
                                ))}
                                <span className="ml-3 text-sm font-bold text-primary-navy">
                                    {rating > 0 && ["", "असंतुष्ट", "ठीक-ठाक", "अच्छा", "बहुत अच्छा", "उत्कृष्ट"][rating]}
                                </span>
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="text-xs font-medium text-slate-600">श्रेणी (Category) *</label>
                            <select className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange">
                                <option value="">— श्रेणी चुनें —</option>
                                <option value="portal">पोर्टल उपयोगिता (Portal Usability)</option>
                                <option value="payment">भुगतान प्रक्रिया (Payment Process)</option>
                                <option value="service">सेवा गुणवत्ता (Service Quality)</option>
                                <option value="property">संपत्ति रखरखाव (Property Maintenance)</option>
                                <option value="support">सहायता / सपोर्ट (Support)</option>
                                <option value="other">अन्य (Other)</option>
                            </select>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="text-xs font-medium text-slate-600">विषय (Subject) *</label>
                            <input type="text" className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange" placeholder="फ़ीडबैक का विषय..." />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-xs font-medium text-slate-600">विस्तृत प्रतिक्रिया (Detailed Feedback) *</label>
                            <textarea rows={5} className="w-full mt-1 px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange resize-none" placeholder="अपना अनुभव विस्तार से बताएं..."></textarea>
                        </div>

                        <button className="px-6 py-2.5 text-xs font-bold rounded-lg bg-primary-navy hover:bg-primary-navy/90 text-white shadow-lg shadow-primary-navy/25 transition transform hover:scale-105">
                            फ़ीडबैक भेजें (Submit Feedback) →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
