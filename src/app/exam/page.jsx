"use client";
import { useState } from "react";
import Link from "next/link";

export default function UnitsPage() {
  // بنحدد الوحدة النشطة حالياً (default 1)
  const [activeUnit, setActiveUnit] = useState(1);

  const units = {
    1: {
      title: "الوحدة الأولى: أساسيات البرمجة",
      icon: "💻",
      description: "المتغيرات، الثوابت، أنواع البيانات، والعمليات الحسابية الأساسية التي يحتاجها كل مبرمج.",
      lessons: [
        { name: "الدرس الأول: الثوابت", path: "/unit1/lesson1" },
        { name: "الدرس الثاني: المتغيرات", path: "/unit1/lesson2" },
      ]
    },
    2: {
      title: "الوحدة الثانية: الكلاسات والكائنات",
      icon: "🏗️",
      description: "مفاهيم الـ OOP الأساسية مثل الكلاس، الكائن، وعملية التغليف لحماية البيانات.",
      lessons: [
        { name: "الدرس الأول: الكلاس والكائن", path: "/unit2/lesson1" },
        { name: "الدرس الثاني: التغليف (Encapsulation)", path: "/unit2/lesson2" },
      ]
    },
    3: {
      title: "الوحدة الثالثة: الوراثة وتعدد الأشكال",
      icon: "🧬",
      description: "تطوير الكود باستخدام الوراثة وفهم تعدد الأشكال لجعل الكود أكتر مرونة.",
      lessons: [
        { name: "الدرس الأول: الوراثة", path: "/unit3/lesson1" },
        { name: "الدرس الثاني: تعدد الأشكال", path: "/unit3/lesson2" },
      ]
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] flex flex-col items-center p-6 text-white font-sans">
      
      {/* 1. أزرار التنقل العلوية (المنيو) */}
      <h1 className="text-4xl font-black mb-12 mt-10">اختر الوحدة الدراسية 📝</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setActiveUnit(num)}
            className={`p-10 rounded-[3rem] transition-all duration-300 shadow-2xl border-b-8 ${
              activeUnit === num 
              ? "bg-[#ffcc00] text-[#776ea5] scale-105 border-yellow-600" 
              : "bg-white text-[#776ea5] border-gray-200 hover:scale-105"
            }`}
          >
            <h2 className="text-3xl font-black italic underline">الوحدة {num}</h2>
            <p className="mt-2 font-bold opacity-60">
              {activeUnit === num ? "أنت هنا الآن 📍" : "عرض المحتوى 📖"}
            </p>
          </button>
        ))}
      </div>

      {/* 2. عرض كارت الوحدة المختارة (الستايل الفخم) */}
      <div className="w-full max-w-4xl animate-in fade-in zoom-in duration-500">
        <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-b-[12px] border-gray-200 text-[#776ea5] relative overflow-hidden">
          
          {/* خلفية جمالية خفيفة */}
          <div className="absolute -top-10 -left-10 text-[15rem] opacity-[0.03] font-black pointer-events-none">
            {activeUnit}
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-10 pb-8 border-b-4 border-gray-50">
              <span className="text-7xl md:text-8xl drop-shadow-sm">{units[activeUnit].icon}</span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight italic">{units[activeUnit].title}</h2>
            </div>

            <p className="text-gray-600 font-bold text-xl md:text-2xl mb-12 leading-relaxed bg-purple-50/50 p-8 rounded-[2.5rem] border-2 border-dashed border-purple-100">
              {units[activeUnit].description}
            </p>

            {/* قائمة الدروس */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {units[activeUnit].lessons.map((lesson, index) => (
                <Link 
                  key={index} 
                  href={lesson.path}
                  className="group bg-white p-6 rounded-3xl border-2 border-gray-100 hover:border-[#776ea5] hover:bg-purple-50 transition-all shadow-sm flex items-center justify-between"
                >
                  <span className="font-black text-xl text-gray-700 group-hover:text-[#776ea5]">
                    📖 {lesson.name}
                  </span>
                  <span className="text-2xl group-hover:translate-x-[-10px] transition-transform">←</span>
                </Link>
              ))}
            </div>

            {/* زرار الامتحان المربوط */}
            <div className="text-center pt-6">
              <Link 
                href={`/exam?unit=${activeUnit}`}
                className="inline-block w-full md:w-auto bg-[#ffcc00] text-[#776ea5] px-24 py-6 rounded-[3rem] font-black text-3xl shadow-[0_12px_0_0_#d4ac00] hover:translate-y-1 hover:shadow-[0_6px_0_0_#d4ac00] active:scale-95 transition-all drop-shadow-xl"
              >
                ابدأ التحدي 🎯
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-20 mb-10 font-bold opacity-30 italic">Developed by Gemini & Hero Developer</p>
    </div>
  );
}