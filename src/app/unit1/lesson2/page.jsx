"use client";
import Link from "next/link";

export default function Lesson2() {
  return (
    <div dir="rtl" className="min-h-screen bg-purple-400 p-4 md:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-b-8 border-purple-200">
          
          <h1 className="text-4xl font-black text-purple-600 mb-8 border-b-2 border-purple-50 pb-4">
            الدرس الثاني: المتغيرات (Variables)
          </h1>

          <div className="space-y-8 text-right">
            {/* تعريف أعمق */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">📝 ما هو المتغير؟</h2>
              <div className="text-gray-700 bg-purple-50 p-5 rounded-2xl border border-purple-100 shadow-sm">
                <p className="font-semibold leading-relaxed">
                  المتغير هو عبارة عن **عنوان** لمكان في الذاكرة. سمي "متغيراً" لأن القيمة التي بداخله يمكن أن تتبدل وتتغير آلاف المرات أثناء تنفيذ البرنامج.
                </p>
              </div>
            </section>

            {/* أنواع المتغيرات */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="p-6 border-2 border-purple-50 rounded-3xl">
                <h2 className="text-xl font-bold text-purple-700 mb-3">🔢 المتغيرات العددية</h2>
                <p className="text-sm text-gray-600 mb-4 font-bold">تخزن الأرقام فقط (صحيحة أو عشرية).</p>
                <code className="bg-slate-900 text-green-400 p-4 block rounded-2xl font-mono text-center">
                  X = 50 <br/>
                  Y = 12.5
                </code>
              </section>

              <section className="p-6 border-2 border-purple-50 rounded-3xl">
                <h2 className="text-xl font-bold text-purple-700 mb-3">🔤 المتغيرات النصية</h2>
                <p className="text-sm text-gray-600 mb-4 font-bold">تخزن الكلمات، وعلامة ($) هي الدليل!</p>
                <code className="bg-slate-900 text-green-400 p-4 block rounded-2xl font-mono text-center">
                  Name$ = "Nawaeya"
                </code>
              </section>
            </div>

            {/* سكشن الروابط التعليمية (فيديوهات) */}
            <section className="bg-red-50 p-6 rounded-[2rem] border-2 border-red-100">
              <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">🎬 فيديوهات توضيحية</h2>
              <div className="space-y-3">
                <a href="https://youtu.be/nWS_4xag_Xc?si=phGuuhnb1uUYBjzq" target="_blank" className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:bg-red-100 transition-colors">
                  <span className="ml-3">📺</span>
                  <span className="font-bold text-gray-700 text-sm">شرح مفهوم المتغيرات (Video Guide)</span>
                </a>
              </div>

            

            </section>

        

            {/* شروط التسمية */}
            <section className="bg-amber-50 p-6 rounded-[2rem] border-2 border-amber-100">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">⚠️ شروط تسمية المتغير</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  "يبدأ بحرف (A-Z).",
                  "لا يحتوي على مسافات.",
                  "لا يستخدم كلمات محجوزة.",
                  "يمكن أن يحتوي على أرقام (ليس في البداية)."
                ].map((rule, i) => (
                  <div key={i} className="flex items-center gap-2 text-amber-900 font-bold">
                    <span className="text-amber-500">●</span> {rule}
                  </div>
                ))}
              </div>
            </section>

            {/* نصيحة المبرمج */}
            <div className="bg-indigo-600 text-white p-5 rounded-2xl shadow-lg flex items-center gap-4">
              <div className="text-3xl">💡</div>
              <p className="font-bold text-sm leading-relaxed">
                تذكر: المتغير مثل "الصندوق" يمكنك استبدال ما بداخله في أي وقت، لكن "اسمه" يظل ثابتاً لتعرف مكانه!
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-between border-t-2 border-purple-50 pt-8">
            <Link href="/unit1/lesson1" className="text-purple-500 font-black hover:underline flex items-center gap-2">
               <span>→</span> الدرس السابق
            </Link>
            <Link href="/exam" className="bg-purple-600 text-white px-10 py-3 rounded-2xl font-black shadow-lg hover:bg-purple-700 hover:-translate-y-1 transition-all active:scale-95">
              ابدأ الاختبار 🎯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}