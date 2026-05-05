"use client";
import Link from "next/link";

export default function UnitsPage() {
  const units = [
    {
      id: 1,
      title: "الوحدة الأولى: أساسيات البرمجة",
      icon: "💻",
      description: "المتغيرات، الثوابت، أنواع البيانات، والعمليات الحسابية الأساسية.",
      lessons: [
        { name: "الدرس الأول: الثوابت", path: "/unit1/lesson1" },
        { name: "الدرس الثاني: المتغيرات", path: "/unit1/lesson2" },
      ]
    },
    {
      id: 2,
      title: "الوحدة الثانية: الكلاسات والكائنات",
      icon: "🏗️",
      description: "مفاهيم الـ OOP الأساسية مثل الكلاس، الكائن، وعملية التغليف.",
      lessons: [
        { name: "الدرس الأول: الكلاس والكائن", path: "/unit2/lesson1" },
        { name: "الدرس الثاني: التغليف (Encapsulation)", path: "/unit2/lesson2" },
      ]
    },
    {
      id: 3,
      title: "الوحدة الثالثة: الوراثة وتعدد الأشكال",
      icon: "🧬",
      description: "تطوير الكود باستخدام الوراثة وفهم تعدد الأشكال في الكائنات.",
      lessons: [
        { name: "الدرس الأول: الوراثة", path: "/unit3/lesson1" },
        { name: "الدرس الثاني: تعدد الأشكال", path: "/unit3/lesson2" },
      ]
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] flex flex-col items-center pt-24 md:pt-32 p-6 font-sans">
      
      {/* رأس الصفحة الفخم */}
      <div className="max-w-4xl w-full text-center mb-16 relative">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg relative z-10 italic">
          رحلة تعلم الـ OOP 🎓
        </h1>
        <p className="text-xl text-purple-100 font-bold relative z-10 max-w-2xl mx-auto opacity-80">
          استكشف الوحدات التعليمية وابدأ في تطوير مهاراتك البرمجية الآن.
        </p>
      </div>

      {/* قائمة الوحدات بالستايل الأول (تحت بعض وعريضة) */}
      <div className="flex flex-col gap-12 w-full max-w-4xl">
        {units.map((unit) => (
          <div 
            key={unit.id}
            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-b-8 border-gray-200 relative group transition-all duration-300 hover:-translate-y-2"
          >
            {/* رقم الوحدة العائم المميز */}
            <span className="absolute -top-6 -right-6 bg-yellow-400 text-[#776ea5] w-20 h-20 rounded-full flex items-center justify-center font-black text-4xl shadow-xl border-4 border-white transform group-hover:rotate-12 transition-transform">
              {unit.id}
            </span>

            <div className="flex flex-col h-full">
              {/* عنوان الوحدة */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-50">
                <div className="text-6xl md:text-7xl">{unit.icon}</div>
                <h2 className="text-3xl md:text-4xl font-black text-[#776ea5] leading-tight">{unit.title}</h2>
              </div>

              {/* الشرح والدروس */}
              <div className="space-y-8 text-right flex-grow">
                <p className="text-gray-600 font-bold text-xl leading-relaxed bg-gray-50 p-6 rounded-[2rem]">
                  {unit.description}
                </p>
                
                <div className="bg-white border-4 border-dashed border-gray-50 p-6 rounded-[2.5rem]">
                  <h3 className="font-black text-gray-300 mb-6 underline text-lg">الدروس المتاحة في هذه الوحدة:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {unit.lessons.map((lesson, lIndex) => (
                      <Link 
                        key={lIndex} 
                        href={lesson.path}
                        className="bg-white p-5 rounded-2xl text-gray-700 font-black hover:bg-purple-50 hover:text-[#776ea5] hover:scale-105 transition-all flex items-center gap-3 border-2 border-gray-50 shadow-sm"
                      >
                        <span className="bg-[#776ea5] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">
                          {lIndex + 1}
                        </span> 
                        {lesson.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* 👇👇 زرار الامتحان المربوط مباشرة برقم الوحدة 👇👇 */}
              <div className="mt-12 text-center">
                <Link 
                  href={`/exam?unit=${unit.id}`} // ده الربط اللي أنت عاوزه يا نجم!
                  className="w-full md:w-auto inline-block bg-[#ffcc00] text-[#776ea5] px-20 py-5 rounded-[2.5rem] font-black text-2xl shadow-[0_10px_0_0_#d4ac00] hover:translate-y-1 hover:shadow-[0_5px_0_0_#d4ac00] active:scale-95 transition-all"
                >
                  ابدأ اختبار الوحدة {unit.id} 🎯
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-20 mb-10 text-white/50 font-black tracking-widest uppercase">
        OOP Learning Platform
      </footer>
    </div>
  );
}