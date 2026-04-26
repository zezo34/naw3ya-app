"use client";
import Link from "next/link";

export default function UnitsPage() {
  // تم تعديل الـ path ليشاور على المجلدات الحقيقية في مشروعك
  const unitOne = {
    title: "الوحدة الأولى: الثوابت والمتغيرات",
    lessons: [
      {
        id: 1,
        name: "الدرس الأول: الثوابت (Constants)",
        details: "تعريف الثوابت، الثوابت العددية، والأسية، والنصية.",
        icon: "🎯",
        path: "/unit1/lesson1", // المسار الصحيح حسب هيكل ملفاتك
      },
      {
        id: 2,
        name: "الدرس الثاني: المتغيرات (Variables)",
        details: "تعريف المتغير، المتغيرات العددية، والمتغيرات النصية.",
        icon: "📝",
        path: "/unit1/lesson2", // المسار الصحيح حسب هيكل ملفاتك
      },
      {
        id: 3,
        name: "اختبار الوحدة",
        details: "اختبار شامل لتقييم فهمك للثوابت والمتغيرات.",
        icon: "⭐",
        path: "/exam",
      }
    ]
  };

  return (
    <div dir="rtl" className="min-h-screen bg-purple-400 p-4 md:p-10">
      <div className="max-w-3xl mx-auto">
        
        {/* عنوان الوحدة الكبير */}
        <div className="text-center mb-12">
          <h1 className="text-white text-5xl font-black mb-4 drop-shadow-md">
            {unitOne.title}
          </h1>
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold">
            قسم تكنولوجيا التعليم - جامعة عين شمس
          </div>
        </div>

        {/* قائمة الدروس */}
        <div className="space-y-6">
          {unitOne.lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              className="bg-white rounded-[2.5rem] p-6 shadow-2xl flex items-center gap-6 border-b-8 border-purple-200 active:scale-95 transition-all"
            >
              {/* أيقونة الدرس */}
              <div className="w-16 h-16 bg-purple-100 rounded-3xl flex items-center justify-center text-3xl shadow-inner">
                {lesson.icon}
              </div>

              {/* تفاصيل الدرس */}
              <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-gray-800 mb-1">
                  {lesson.name}
                </h2>
                <p className="text-gray-500 font-semibold text-sm">
                  {lesson.details}
                </p>
              </div>

              {/* زر الدخول */}
              <Link 
                href={lesson.path}
                className="bg-purple-500 hover:bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-colors"
              >
                <span className="text-xl font-bold">←</span>
              </Link>
            </div>
          ))}
        </div>

        {/* زرار الرجوع للرئيسية */}
        <div className="mt-12 text-center">
          <Link href="/" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-2xl font-bold transition-all inline-block">
            العودة للقائمة الرئيسية
          </Link>
        </div>

      </div>
    </div>
  );
}