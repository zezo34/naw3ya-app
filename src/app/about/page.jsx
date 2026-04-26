"use client"; // ده أهم سطر عشان يمنع الـ Server Error

import Link from "next/link";

export default function AboutPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-purple-400 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-b-8 border-purple-200">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-purple-600 mb-4">
              عن منصة "نوعية"
            </h1>
            <div className="h-1.5 w-20 bg-purple-200 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 text-right">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">🚀</span> ما هي منصة نوعية؟
              </h2>
              <p className="text-gray-600 leading-relaxed font-semibold">
                منصة تعليمية تفاعلية مخصصة لطلاب تكنولوجيا التعليم، تهدف لتبسيط مفاهيم البرمجة مثل الثوابت والمتغيرات بأسلوب عصري.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-purple-500">🎯</span> أهدافنا:
              </h2>
              <ul className="space-y-3">
                {[
                  "شرح الثوابت والمتغيرات بوضوح.",
                  "توفير اختبارات تفاعلية فورية.",
                  "دعم مهارات البرمجة لطلاب جامعة عين شمس."
                ].map((goal, i) => (
                  <li key={i} className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-gray-700 font-bold">
                    • {goal}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/" 
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}