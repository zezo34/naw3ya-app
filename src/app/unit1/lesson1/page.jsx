"use client";
import Link from "next/link";

export default function Lesson1() {
  return (
    <div dir="rtl" className="min-h-screen bg-purple-400 p-4 md:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-b-8 border-purple-200">
          
          <h1 className="text-4xl font-black text-purple-600 mb-8 border-b-2 border-purple-50 pb-4">
            الدرس الأول: الثوابت
          </h1>

          <div className="space-y-8 text-right">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">📌 تعريف الثوابت</h2>
              <p className="text-gray-700 bg-purple-50 p-4 rounded-2xl font-semibold border border-purple-100">
                الثوابت هي القيم التي تبقى ثابتة ولا تتغير أثناء تنفيذ البرنامج.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 أنواع الثوابت</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 border-2 border-slate-50 rounded-2xl bg-white shadow-sm">
                  <p className="font-black text-purple-600 mb-2 underline">1- الثوابت العددية:</p>
                  <ul className="list-disc pr-6 text-gray-700 font-bold space-y-1">
                    <li>أعداد صحيحة: <span className="text-blue-600">100 ، -5 ، +93</span></li>
                    <li>أعداد كسرية: <span className="text-blue-600">27.55 ، -74.32</span></li>
                  </ul>
                </div>

                <div className="p-5 border-2 border-slate-50 rounded-2xl bg-white shadow-sm">
                  <p className="font-black text-purple-600 mb-2 underline">2- الثوابت الأسية:</p>
                  <p className="text-gray-700 font-bold bg-slate-50 p-3 rounded-lg font-mono text-center">
                    23E-2 = 23 × 10⁻²
                  </p>
                </div>

                <div className="p-5 border-2 border-slate-50 rounded-2xl bg-white shadow-sm">
                  <p className="font-black text-purple-600 mb-2 underline">3- الثوابت النصية:</p>
                  <p className="text-gray-700 font-bold">
                    تكتب بين " " مثل: <span className="text-green-600">"Hello" ، "My Computer"</span>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">⭐ أهمية الثوابت</h2>
              <div className="flex flex-wrap gap-3">
                {["تثبيت القيم", "تسهيل قراءة الكود", "تقليل الأخطاء"].map((tag, i) => (
                  <span key={i} className="bg-purple-600 text-white px-4 py-2 rounded-xl font-bold shadow-md">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 flex justify-between border-t-2 border-purple-50 pt-8">
            <Link href="/units" className="text-purple-500 font-black hover:underline">← العودة للوحدات</Link>
            <Link href="/unit1/lesson2" className="bg-purple-600 text-white px-10 py-3 rounded-2xl font-black shadow-lg hover:bg-purple-700 transition-all">الدرس التالي</Link>
          </div>
        </div>
      </div>
    </div>
  );
}