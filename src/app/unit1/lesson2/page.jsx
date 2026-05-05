"use client";
import Link from "next/link";

export default function Lesson2() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] flex flex-col items-center">
      {/* الـ pt-32 بتضمن إن الكارت يبدأ تحت النوافبار بمسافة كافية */}
      <div className="max-w-4xl w-full pt-32 pb-16 px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-b-8 border-gray-200">
          
          {/* رأس الصفحة: الأيقونة والعنوان ماشيين مع بعض طبيعي */}
          <div className="flex items-center gap-4 mb-10 border-b-4 border-gray-50 pb-8">
            <div className="bg-[#ffcc00] text-4xl p-4 rounded-3xl shadow-xl flex-shrink-0">
              📦
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#776ea5]">
              الدرس الثاني: المتغيرات (Variables)
            </h1>
          </div>

          <div className="space-y-10 text-right">
            {/* كارت التعريف */}
            <section className="bg-gray-50 p-8 rounded-[2.5rem] border-r-8 border-[#776ea5] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📌</span>
                <h2 className="text-2xl font-black text-gray-800">ما هي المتغيرات؟</h2>
              </div>
              <p className="text-gray-700 font-bold leading-relaxed text-lg">
                المتغير هو عبارة عن **عنوان** لمكان في الذاكرة. سمي "متغيراً" لأن القيمة التي بداخله يمكن أن تتبدل وتتغير آلاف المرات أثناء تنفيذ البرنامج.. تخيله كأنه صندوق بتغير اللي جواه!
              </p>
            </section>

            {/* شبكة الأمثلة */}
            <section>
              <div className="flex items-center gap-3 mb-6 mr-2">
                <span className="text-3xl">📊</span>
                <h2 className="text-2xl font-black text-gray-800">أمثلة على المتغيرات</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "عددي (X)", icon: "🔢", values: "X = 50 / Y = 12.5", color: "blue" },
                  { title: "نصي (Name$)", icon: "abc", values: 'Name$ = "Nawaeya"', color: "green" }
                ].map((item, i) => (
                  <div key={i} className="p-6 border-2 border-gray-50 rounded-[2rem] bg-white shadow-md text-center">
                    <div className="bg-gray-50 w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center font-black text-xl text-[#776ea5]">
                      {item.icon}
                    </div>
                    <p className="font-black text-gray-400 mb-2 underline decoration-[#776ea5]">{item.title}</p>
                    <p className="font-bold text-gray-700 font-mono text-xl">{item.values}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* سكشن الشروط - بنفس ستايل الدرس الأول */}
            <section className="bg-amber-50 p-8 rounded-[2.5rem] border-2 border-amber-100 shadow-sm">
              <h2 className="text-2xl font-black text-amber-800 mb-6 flex items-center gap-3 italic">⚠️ شروط التسمية الصحيحة</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "يبدأ بحرف (A-Z) فقط.",
                  "ممنوع استخدام المسافات.",
                  "لا يستخدم كلمات محجوزة.",
                  "الأرقام مسموحة (مش في الأول)."
                ].map((rule, i) => (
                  <div key={i} className="flex items-center gap-3 text-amber-900 font-bold bg-white/50 p-3 rounded-xl border border-amber-200">
                    <span className="bg-amber-400 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">✔</span>
                    {rule}
                  </div>
                ))}
              </div>
            </section>

            {/* سكشن الفيديو - رجعناه بنفس الاستايل */}
            <section className="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100">
              <h2 className="text-2xl font-black text-blue-800 mb-6 flex items-center gap-3 italic">🎥 فيديو الشرح</h2>
              <a href="https://youtu.be/nWS_4xag_Xc?si=0-F0dQUIaPJeLszW" target="_blank" className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm hover:translate-x-[-10px] transition-transform font-bold text-gray-700 border-l-8 border-red-500">
                <span>ليه بنستخدم المتغيرات في البرمجة؟</span>
                <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">شاهد الآن</span>
              </a>
            </section>
          </div>

          {/* أزرار التنقل */}
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t-4 border-gray-50 pt-10">
            <Link href="/unit1/lesson1" className="text-[#776ea5] font-black text-xl hover:underline order-2 md:order-1">
              ← الدرس السابق
            </Link>
            <Link href="/exam?unit=1" className="w-full md:w-auto bg-[#ffcc00] text-[#776ea5] px-16 py-5 rounded-[2rem] font-black text-2xl shadow-[0_8px_0_0_#d4ac00] hover:translate-y-1 hover:shadow-[0_4px_0_0_#d4ac00] transition-all text-center order-1 md:order-2">
              ابدأ اختبار الوحدة 🎯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}