"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        
        <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-2xl border-b-8 border-gray-100">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-[#776ea5] mb-4">
              عن منصة "نواعية"
            </h1>
            <div className="h-2 w-24 bg-[#ffcc00] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 text-right">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-[#ffcc00]">🚀</span> ما هي منصة نوعية؟
              </h2>
              <p className="text-gray-600 leading-relaxed font-semibold text-lg">
                منصة تعليمية تفاعلية مخصصة لطلاب تكنولوجيا التعليم، تهدف لتبسيط مفاهيم البرمجة مثل الثوابت والمتغيرات بأسلوب عصري وجذاب.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-[#ffcc00]">🎯</span> أهدافنا:
              </h2>
              <ul className="space-y-3">
                {[
                  "شرح الثوابت والمتغيرات بوضوح.",
                  "توفير اختبارات تفاعلية فورية.",
                  "دعم مهارات البرمجة لطلاب جامعة عين شمس."
                ].map((goal, i) => (
                  <li key={i} className="bg-gray-50 p-4 rounded-2xl border-r-8 border-[#776ea5] text-gray-700 font-bold">
                    • {goal}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-block bg-[#ffcc00] text-[#776ea5] px-12 py-4 rounded-2xl font-black text-xl hover:bg-[#e6b800] transition-all shadow-xl"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}