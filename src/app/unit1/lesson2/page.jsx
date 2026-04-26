"use client";
import Link from "next/link";

export default function Lesson2() {
  return (
    <div dir="rtl" className="min-h-screen bg-purple-400 p-4 md:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-b-8 border-purple-200">
          
          <h1 className="text-4xl font-black text-purple-600 mb-8 border-b-2 border-purple-50 pb-4">
            الدرس الثاني: المتغيرات
          </h1>

          <div className="space-y-8 text-right">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">📝 تعريف المتغير</h2>
              <p className="text-gray-700 bg-purple-50 p-4 rounded-2xl font-semibold border border-purple-100">
                المتغير هو مكان في الذاكرة يُستخدم لتخزين قيمة يمكن تغييرها أثناء تنفيذ البرنامج.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="p-6 border-2 border-purple-50 rounded-3xl">
                <h2 className="text-xl font-bold text-purple-700 mb-3">🔢 المتغيرات العددية</h2>
                <p className="text-gray-600 font-bold mb-4">تُستخدم لتخزين الأعداد فقط.</p>
                <code className="bg-slate-900 text-green-400 p-4 block rounded-2xl font-mono text-center">A = 15</code>
              </section>

              <section className="p-6 border-2 border-purple-50 rounded-3xl">
                <h2 className="text-xl font-bold text-purple-700 mb-3">🔤 المتغيرات النصية</h2>
                <p className="text-gray-600 font-bold mb-4">تنتهي دائماً بعلامة ($) وتخزن نصوص.</p>
                <code className="bg-slate-900 text-green-400 p-4 block rounded-2xl font-mono text-center">A$ = "ALI"</code>
              </section>
            </div>

            <section className="bg-slate-50 p-6 rounded-[2rem]">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ خصائص المتغير</h2>
              <ul className="space-y-3">
                {[
                  "يمكن تغيير قيمته أثناء البرنامج",
                  "يمثل موقعاً حقيقياً في الذاكرة",
                  "يحمل قيمة واحدة فقط في المرة الواحدة"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                    <span className="w-6 h-6 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 flex justify-between border-t-2 border-purple-50 pt-8">
            <Link href="/unit1/lesson1" className="text-purple-500 font-black hover:underline">السابق</Link>
            <Link href="/exam" className="bg-purple-600 text-white px-10 py-3 rounded-2xl font-black shadow-lg hover:bg-purple-700 transition-all">ابدأ الاختبار</Link>
          </div>
        </div>
      </div>
    </div>
  );
}