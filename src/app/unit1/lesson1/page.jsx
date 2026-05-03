"use client";
import Link from "next/link";

export default function Lesson1() {
  return (
    <div dir="rtl" className="min-h-screen bg-purple-400 p-4 md:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-b-8 border-purple-200">
          
          <h1 className="text-4xl font-black text-purple-600 mb-8 border-b-2 border-purple-50 pb-4">
            الدرس الأول: الثوابت (Constants)
          </h1>

          <div className="space-y-8 text-right">
            {/* تعريف الثوابت */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">📌 ما هي الثوابت؟</h2>
              <div className="text-gray-700 bg-purple-50 p-5 rounded-2xl border border-purple-100 shadow-sm">
                <p className="font-semibold leading-relaxed">
                  الثوابت هي قيم "عنيدة" لا تتغير أبداً. بمجرد أن تعطيها قيمة في بداية البرنامج، يمنع الكمبيوتر أي محاولة لتعديلها لاحقاً.. هي دي القواعد اللي مابتتكسرش!
                </p>
              </div>
            </section>

            {/* أنواع الثوابت */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 أنواع الثوابت</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 border-2 border-slate-50 rounded-2xl bg-white shadow-sm hover:border-purple-200 transition-all">
                  <p className="font-black text-purple-600 mb-2 underline">1- الثوابت العددية:</p>
                  <ul className="list-disc pr-6 text-gray-700 font-bold space-y-1">
                    <li>أعداد صحيحة: <span className="text-blue-600">10 ، 50-</span></li>
                    <li>أعداد كسرية: <span className="text-blue-600">3.14 (Math PI)</span></li>
                  </ul>
                </div>

                <div className="p-5 border-2 border-slate-50 rounded-2xl bg-white shadow-sm hover:border-purple-200 transition-all">
                  <p className="font-black text-purple-600 mb-2 underline">2- الثوابت الأسية:</p>
                  <p className="text-gray-700 font-bold bg-slate-50 p-3 rounded-lg font-mono text-center">
                    5E+3 = 5 × 10³ = 5000
                  </p>
                </div>

                <div className="p-5 border-2 border-slate-50 rounded-2xl bg-white shadow-sm hover:border-purple-200 transition-all">
                  <p className="font-black text-purple-600 mb-2 underline">3- الثوابت النصية:</p>
                  <p className="text-gray-700 font-bold">
                    توضع بين علامتي " " مثل: <span className="text-green-600 font-mono">"Nawaeya Platform"</span>
                  </p>
                </div>
              </div>
            </section>

            {/* سكشن الروابط التعليمية (فيديوهات) */}
            <section className="bg-blue-50 p-6 rounded-4xl border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">🎬 فيديوهات توضيحية</h2>
              <div className="space-y-3">
                <a href="https://youtu.be/MwQEaCsS6UM?si=jemYJJqS-S_OlBGA" target="_blank" className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:bg-blue-100 transition-colors">
                  <span className="ml-3">🎥</span>
                  <span className="font-bold text-gray-700 text-sm">شرح مفصل: ليه بنستخدم الثوابت؟</span>
                </a>
                <a href="https://youtu.be/r0OuA1Q8jOo?si=d59TodbiTKyViF_C" target="_blank" className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:bg-blue-100 transition-colors">
                  <span className="ml-3">🔢</span>
                  <span className="font-bold text-gray-700 text-sm"> play list للثوابت</span>
                </a>
              </div>
            </section>

          

            {/* نصيحة المبرمج */}
            <div className="bg-indigo-600 text-white p-5 rounded-2xl shadow-lg flex items-center gap-4">
              <div className="text-3xl">💡</div>
              <p className="font-bold text-sm leading-relaxed">
                نصيحة: استخدم الثوابت لأي قيمة عارف إنها مش هتتغير (زي ضريبة القيمة المضافة أو اسم الموقع) عشان كودك يبقى آمن وأسرع!
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-between border-t-2 border-purple-50 pt-8">
            <Link href="/units" className="text-purple-500 font-black hover:underline flex items-center gap-2">
               <span>←</span> العودة للوحدات
            </Link>
            <Link href="/unit1/lesson2" className="bg-purple-600 text-white px-10 py-3 rounded-2xl font-black shadow-lg hover:bg-purple-700 hover:-translate-y-1 transition-all active:scale-95">
              الدرس التالي
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}