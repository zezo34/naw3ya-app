"use client";
import Link from "next/link";

export default function CourseCard({ unitNumber, title, courseName, imageSrc, lessons = [] }) {
  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-50 flex flex-col">
      {/* الجزء العلوي: الصورة */}
      <div className="relative h-40 w-full">
        <img 
          src={imageSrc || "/next.svg"} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
        <span className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-lg">
          الوحدة {unitNumber}
        </span>
      </div>

      {/* الجزء السفلي: البيانات والروابط */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-purple-500 text-[10px] font-black mb-1 uppercase tracking-tighter">
          {courseName}
        </p>
        <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight">
          {title}
        </h3>
        
        {/* عرض الدروس كأزرار صغيرة داخل الكارت */}
        <div className="space-y-2 mt-auto">
          <p className="text-gray-400 text-[10px] font-bold mb-2">اختر الدرس للبدء:</p>
          <div className="grid grid-cols-2 gap-2">
            {lessons.map((lesson, idx) => (
              <Link key={idx} href={lesson.href} className="contents">
                <button className="bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 text-xs font-bold py-2 px-3 rounded-xl transition-colors border border-purple-100 shadow-sm flex items-center justify-center gap-1">
                  <span>{lesson.name}</span>
                </button>
              </Link>
            ))}
          </div>

          {/* زرار الاختبار الخاص بالوحدة */}
          <Link href="/exam">
            <button className="w-full mt-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-black py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
              <span>ابدأ اختبار الوحدة</span>
              <span className="text-[14px]">📝</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}