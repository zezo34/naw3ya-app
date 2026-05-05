"use client";
import Link from "next/link";

export default function UnitsPage() {
  // البيانات المحدثة لربط الوحدات بالدروس والامتحانات
  const units = [
    {
      unitNumber: "1",
      title: "الوحدة الأولى: أساسيات البرمجة",
      courseName: "الكمبيوتر التعليمي",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400",
      isAvailable: true,
      lessons: [
        { name: "الدرس 1: الثوابت", href: "/unit1/lesson1" },
        { name: "الدرس 2: المتغيرات", href: "/unit1/lesson2" }
      ]
    },
    {
      unitNumber: "2",
      title: "الوحدة الثانية: البرمجة الكائنية (OOP)",
      courseName: "البرمجة الهيكلية",
      imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400",
      isAvailable: true,
      lessons: [
        { name: "الدرس 1: الكائنات والـ Classes", href: "/unit2/lesson1" },
        { name: "الدرس 2: التغليف (Encapsulation)", href: "/unit2/lesson2" }
      ]
    },
    {
      unitNumber: "3",
      title: "الوحدة الثالثة: الوراثة وتعدد الأشكال",
      courseName: "تكنولوجيا المعلومات",
      imageSrc: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=400",
      isAvailable: true,
      lessons: [
        { name: "الدرس 1: الوراثة (Inheritance)", href: "/unit3/lesson1" },
        { name: "الدرس 2: تعدد الأشكال (Polymorphism)", href: "/unit3/lesson2" }
      ]
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5]"> 
      
      {/* سكشن العنوان */}
      <div className="py-16 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-md tracking-tighter">المقرر الدراسي</h1>
        <p className="text-xl md:text-2xl font-bold opacity-90">منصة نوعية - كلية التربية النوعية</p>
      </div>

      {/* شبكة الوحدات */}
      <div className="max-w-7xl mx-auto pb-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {units.map((unit, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col transition-all duration-500 ${!unit.isAvailable ? 'opacity-70 grayscale cursor-not-allowed' : 'hover:translate-y-[-10px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]'}`}
            >
              {/* الصورة والتاج */}
              <div className="relative h-48 overflow-hidden">
                <img src={unit.imageSrc} alt={unit.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute top-4 right-4 bg-[#ffcc00] text-[#776ea5] font-black px-5 py-1.5 rounded-full shadow-lg text-sm">
                  وحدة {unit.unitNumber}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[#776ea5]/60 font-black text-xs uppercase tracking-[0.2em] mb-2 block">{unit.courseName}</span>
                <h2 className="text-2xl font-black text-gray-800 mb-6 min-h-[64px] leading-tight">{unit.title}</h2>
                
                {unit.isAvailable ? (
                  <div className="space-y-3">
                    {unit.lessons.map((lesson, idx) => (
                      <Link 
                        key={idx} 
                        href={lesson.href}
                        className="flex items-center justify-between w-full bg-gray-50 border border-transparent hover:border-[#776ea5]/20 hover:bg-[#776ea5] hover:text-white p-4 rounded-2xl font-bold transition-all group"
                      >
                        <span>{lesson.name}</span>
                        <span className="bg-[#ffcc00] text-[#776ea5] w-8 h-8 flex items-center justify-center rounded-full text-sm group-hover:scale-110 group-hover:bg-white transition-all shadow-sm">←</span>
                      </Link>
                    ))}

                    {/* التعديل الجوهري: ربط الامتحان بالـ unitNumber */}
                    <Link 
                      href={`/exam?unit=${unit.unitNumber}`} 
                      className="group flex items-center justify-center gap-2 w-full mt-6 bg-[#ffcc00] text-[#776ea5] py-4 rounded-2xl font-black text-center shadow-[0_5px_0_0_#d4ac00] hover:shadow-[0_2px_0_0_#d4ac00] hover:translate-y-[3px] transition-all"
                    >
                      <span>📝 اختبار الوحدة</span>
                    </Link>
                  </div>
                ) : (
                  <div className="mt-auto bg-gray-100 text-gray-400 py-6 rounded-2xl font-black text-center border-2 border-dashed border-gray-200">
                    قريباً في التيرم التاني.. 🛠️
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center text-white/40 font-bold pb-10 border-t border-white/10 pt-10 mx-10">
        <p>© 2026 جميع الحقوق محفوظة لطلاب الفرقة الثالثة - قسم تكنولوجيا التعليم</p>
      </footer>
    </div>
  );
}