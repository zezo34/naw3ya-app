"use client";
import Link from "next/link";

export default function InheritanceLesson() {
  const codeSnippet = `public class Vehicle { // الأب (Base Class)
    public int Speed;
    public void Move() { 
        Console.WriteLine("بيتحرك..."); 
    }
}

public class Plane : Vehicle { // الابن (Derived Class)
    public void Fly() { 
        Console.WriteLine("بيطير في الجو!"); 
    }
}`;

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] p-4 md:p-10 flex flex-col items-center overflow-x-hidden">
      <div className="max-w-4xl w-full pt-8 md:pt-12">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-b-8 border-gray-200">
          
          <h1 className="text-3xl md:text-5xl font-black text-[#776ea5] mb-10 border-b-4 border-gray-50 pb-6 text-center md:text-right">
            الوحدة 3: الوراثة (Inheritance) 🧬
          </h1>

          <div className="space-y-10 text-right">
            
            <div className="bg-green-50 p-6 md:p-8 rounded-[2rem] border-r-8 border-green-500 shadow-sm">
              <h2 className="text-2xl font-black text-green-900 mb-4 flex items-center gap-2">
                <span>🧬</span> ليه بنورث الكود؟
              </h2>
              <p className="text-gray-700 font-bold text-lg md:text-xl leading-relaxed">
                عشان نوفر مجهود! الكلاس <span className="text-green-600 underline">الابن</span> بياخد كل شغل وصفات الكلاس <span className="text-green-600 underline">الأب</span> وبيضيف عليه مميزاته الخاصة.
              </p>
            </div>

            {/* سكشن الصورة - التعديل هنا لضبط الجودة ومنع التمطيط */}
            <div className="flex flex-col items-center bg-gray-50 p-4 md:p-10 rounded-[2.5rem] border-2 border-dashed border-green-200 shadow-inner">
              <p className="mb-6 font-black text-green-700 underline text-xl italic text-center">شجرة العائلة البرمجية (Hierarchy):</p>
              
              {/* حددنا max-w-md عشان الصورة ما تفرشش بزيادة وتكسل */}
              <div className="w-full max-w-md bg-white rounded-3xl p-3 shadow-md overflow-hidden">
                <img 
                  src="/image/4.png" 
                  alt="Inheritance Hierarchy" 
                  className="w-full h-auto rounded-2xl transition-transform duration-500 hover:scale-[1.05]" 
                />
              </div>
              
              <p className="mt-6 text-sm text-gray-500 font-bold bg-green-100/50 px-4 py-1 rounded-full">
                * الوراثة تسمح للابن بالحصول على صفات الأب تلقائياً.
              </p>
            </div>

            <div className="bg-slate-900 p-6 md:p-8 rounded-[2rem] text-left shadow-2xl relative group" dir="ltr">
              <pre className="text-green-400 font-mono text-sm md:text-lg overflow-x-auto leading-loose">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t-4 border-gray-50 pt-10">
            <Link href="/unit2/lesson2" className="text-[#776ea5] font-black text-xl hover:underline order-2 md:order-1 transition-all hover:translate-x-2">
              ← العودة للوحدة السابقة
            </Link>
            
            <Link href="/unit3/lesson2" className="w-full md:w-auto bg-[#ffcc00] text-[#776ea5] px-16 py-5 rounded-[2rem] font-black text-2xl shadow-[0_8px_0_0_#d4ac00] hover:translate-y-1 hover:shadow-[0_4px_0_0_#d4ac00] transition-all text-center order-1 md:order-2">
              الدرس التالي 🎯
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}