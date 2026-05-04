"use client";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

export default function UnitsPage() {
  // بيانات الوحدة
  const units = [
    {
      unitNumber: "1",
      title: "الوحدة الأولى: الثوابت والمتغيرات",
      courseName: "الكمبيوتر التعليمي",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400",
      lessons: [
        { name: "الدرس 1: الثوابت", href: "/unit1/lesson1" },
        { name: "الدرس 2: المتغيرات", href: "/unit1/lesson2" }
      ]
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5]"> {/* توحيد لون الخلفية للدرجة المعتمدة */}
    
      {/* سكشن العنوان الكبير */}
      <div className="py-24 text-center text-white">
        <h1 className="text-8xl font-black mb-4 drop-shadow-md">المقرر الدراسي</h1>
        <p className="text-3xl font-bold opacity-90">اختر الوحدة وابدأ رحلة التعلم</p>
      </div>

      {/* عرض الكروت */}
      <div className="max-w-7xl mx-auto pb-24 px-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
          {units.map((unit, index) => (
            <div key={index} className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col w-full max-w-[400px] border-b-8 border-gray-100">
              {/* صورة الوحدة */}
              <img src={unit.imageSrc} alt={unit.title} className="w-full h-52 object-cover" />
              
              <div className="p-8 text-right flex flex-col flex-grow">
                <span className="text-[#776ea5] font-black text-sm mb-2">{unit.courseName}</span>
                <h2 className="text-2xl font-black text-gray-800 mb-6">{unit.title}</h2>
                
                {/* الأزرار */}
                <div className="space-y-4">
                  {unit.lessons.map((lesson, idx) => (
                    <Link 
                      key={idx} 
                      href={lesson.href}
                      className="block w-full bg-gray-50 hover:bg-[#ffcc00] text-[#776ea5] py-5 px-6 rounded-2xl font-black text-xl text-center transition-all shadow-sm active:scale-95 border-2 border-transparent hover:border-[#776ea5]/10"
                    >
                      {lesson.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}