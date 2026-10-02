"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo1 from "@/assets/logo1.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { HiMiniLanguage } from "react-icons/hi2";

export function TopHeader() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const [viewDate, setViewDate] = useState(new Date());

  // Proper Regional Uttarakhand & National Festivals (Month is 0-indexed)
  const festivals: Record<string, string> = {
    "0-14": "Uttarayani / Makar Sankranti",
    "0-26": "Republic Day",
    "1-14": "Basant Panchami",
    "2-3": "Maha Shivaratri",
    "2-14": "Phool Dei",
    "2-23": "Holi",
    "3-14": "Baisakhi",
    "5-21": "Ganga Dussehra",
    "6-16": "Harela",
    "7-15": "Independence Day",
    "7-16": "Ghee Sankranti (Olgia)",
    "8-17": "Khatarua",
    "9-2": "Gandhi Jayanti",
    "9-20": "Dussehra",
    "10-8": "Diwali",
    "10-9": "Uttarakhand Foundation Day",
    "10-19": "Igas Bagwal",
    "11-25": "Christmas",
  };

  // Real current date (for today highlight and formatted display)
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  const formattedDate = today.toLocaleDateString('en-US', options);

  // Calendar logic based on viewDate
  const currentMonth = viewDate.toLocaleString('default', { month: 'long' });
  const currentYear = viewDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, viewDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentYear, viewDate.getMonth() + 1, 0).getDate();

  const handlePrevMonth = () => {
    setViewDate(new Date(currentYear, viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(currentYear, viewDate.getMonth() + 1, 1));
  };

  const isCurrentMonth = today.getMonth() === viewDate.getMonth() && today.getFullYear() === viewDate.getFullYear();
  const currentDay = today.getDate();

  // Get festivals for the currently viewed month
  const monthFestivals = Object.entries(festivals)
    .filter(([key]) => key.startsWith(`${viewDate.getMonth()}-`))
    .map(([key, name]) => ({
      day: parseInt(key.split("-")[1]),
      name,
    })).sort((a, b) => a.day - b.day);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  // Close calendar if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-60 bg-transparent text-charcoal px-4 py-1.5 text-[10px] border-b-2 border-orange font-body-en">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">

        {/* Left Side: Logos */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <a href="#" className="hover:opacity-80 transition-opacity flex items-center mr-2">
            <Image src={logo5} alt="Logo 5" className="h-12 sm:h-14 w-auto object-contain" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity flex items-center">
            <Image src={logo1} alt="Logo 1" className="h-12 sm:h-14 w-auto object-contain" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity flex items-center">
            <Image src={logo4} alt="Logo 4" className="h-12 sm:h-14 w-auto object-contain" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity flex items-center">
            <Image src={logo3} alt="Logo 3" className="h-12 sm:h-14 w-auto object-contain" />
          </a>


        </div>

        {/* Right Side: Toll-Free, Date, Calendar, and Language Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

          {/* Toll Free Number */}
          <a href="tel:18001802345" className="flex items-center gap-1.5 font-bold text-charcoal/80 hover:text-orange transition-colors group">
            <div className="bg-charcoal/5 group-hover:bg-orange/10 p-1.5 rounded-full text-orange transition-colors">
              <FaPhoneAlt size={10} />
            </div>
            <span className="tracking-widest text-[11px] group-hover:text-orange">1800-180-2345</span>
          </a>

          {/* Calendar Toggle */}
          <div className="relative" ref={calendarRef}>
            <button
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="flex items-center gap-2 text-charcoal/90 hover:text-orange transition-colors focus:outline-none cursor-pointer"
            >
              <FaCalendarAlt size={13} className="text-orange" />
              <span className="font-medium tracking-wide" suppressHydrationWarning>
                {formattedDate}
              </span>
            </button>

            {/* Designed Calendar Dropdown */}
            {isCalendarOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">

                {/* Calendar Header */}
                <div className="bg-primary-navy p-3 flex items-center justify-between text-white shadow-inner">
                  <button onClick={handlePrevMonth} className="p-1.5 hover:bg-white/10 rounded-full transition-colors"><FaChevronLeft size={10} /></button>
                  <span className="font-semibold text-[11px] tracking-widest uppercase">{currentMonth} {currentYear}</span>
                  <button onClick={handleNextMonth} className="p-1.5 hover:bg-white/10 rounded-full transition-colors"><FaChevronRight size={10} /></button>
                </div>

                {/* Calendar Body */}
                <div className="p-4">
                  <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-bold tracking-wider text-gray-400 uppercase mb-3">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-[11px] text-charcoal font-semibold">
                    {/* Empty slots for correct start day */}
                    {Array(firstDayOfMonth).fill(null).map((_, i) => (
                      <div key={`blank-${i}`} />
                    ))}
                    {/* Actual days */}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day, index) => {
                      const isToday = isCurrentMonth && day === currentDay;
                      const isSunday = (firstDayOfMonth + index) % 7 === 0;
                      const festivalName = festivals[`${viewDate.getMonth()}-${day}`];
                      const isFestival = !!festivalName;

                      let dayColorClass = 'text-gray-700';
                      if (isToday) dayColorClass = 'bg-orange text-white shadow-md shadow-orange/30';
                      else if (isFestival) dayColorClass = 'text-green-600 bg-green-50 font-bold';
                      else if (isSunday) dayColorClass = 'text-red-500 font-bold';

                      return (
                        <div
                          key={day}
                          title={festivalName || (isSunday ? "Sunday" : "")}
                          className={`h-7 w-7 mx-auto rounded-full flex items-center justify-center transition-all cursor-pointer ${dayColorClass} ${!isToday && !isFestival ? 'hover:bg-gray-100' : ''}`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>

                  {/* Festivals List */}
                  {monthFestivals.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-gray-100 text-[10px] text-gray-600">
                      <div className="font-bold text-charcoal mb-1.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Festivals
                      </div>
                      <div className="flex flex-col gap-1">
                        {monthFestivals.map(f => (
                          <div key={f.day} className="flex justify-between items-center bg-gray-50 px-2 py-1 rounded">
                            <span className="font-medium text-gray-700">{f.name}</span>
                            <span className="font-bold text-green-600">{f.day} {currentMonth.substring(0, 3)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            )}
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-primary-navy hover:bg-primary-navy/80 border border-white/10 px-3 py-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-orange shadow-sm"
          >
            <HiMiniLanguage size={14} className="text-orange" />
            <span className={`font-medium text-orange tracking-wide ${lang === "en" ? "font-heading-hi" : "font-body-en"}`}>
              {lang === "en" ? "हिंदी" : "English"}
            </span>
          </button>

        </div>

      </div>
    </div>
  );
}
