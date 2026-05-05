"use client";
import Link from "next/link";

export default function PolymorphismLesson() {
  const codeSnippet = `// 1. Compile-time (Method Overloading)
public void Print(int i) { ... }
public void Print(string s) { ... }

// 2. Runtime (Method Overriding)
public override void Draw() { 
    Console.WriteLine("رسم شكل محدد"); 
}`;

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] p-4 md:p-10 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-b-8 border-gray-200">
          <h1 className="text-3xl md:text-4xl font-black text-[#776ea5] mb-8 border-b-4 border-gray-50 pb-4 text-center md:text-right">تعدد الأشكال (Polymorphism) 🎭</h1>
          
          <div className="space-y-8 text-right">
            <section className="bg-purple-50 p-6 rounded-[2rem] border-r-8 border-purple-500 shadow-sm font-bold">
              <p className="text-gray-700 leading-relaxed text-lg">
                تعدد الأشكال مش نوع واحد، هو بينقسم لنوعين أساسيين زي ما واضح في المخطط: نوع بيحصل وقت الكود ما بيتحول (Compile-time) ونوع بيحصل وقت ما البرنامج شغال فعلياً (Runtime).
              </p>
            </section>

            {/* سكشن الصورة الجديدة - ملموم وواضح */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-[2.5rem] border-2 border-dashed border-purple-200">
              <p className="mb-6 font-black text-purple-800 underline italic text-lg text-center">مخطط أنواع تعدد الأشكال (Types of Polymorphism):</p>
              
              <div className="w-full max-w-lg bg-white p-4 rounded-3xl shadow-sm">
                <img 
                  src="/image/5.png" 
                  alt="Types of Polymorphism Diagram" 
                  className="w-full h-auto rounded-xl mx-auto transition-all duration-300 hover:scale-[1.02]" 
                />
              </div>
              
              {/* شرح لمحتويات الصورة بالعربي */}
              <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-lg">
                <div className="bg-white p-3 rounded-xl border border-purple-100 text-center">
                  <p className="font-black text-purple-600 text-sm">Compile-time</p>
                  <p className="text-xs text-gray-500 font-bold italic">تحميل زائد للدوال</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-purple-100 text-center">
                  <p className="font-black text-purple-600 text-sm">Runtime</p>
                  <p className="text-xs text-gray-500 font-bold italic">إعادة كتابة الدوال</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-[2rem] text-left shadow-inner" dir="ltr">
              <pre className="text-green-400 font-mono text-sm md:text-base overflow-x-auto"><code>{codeSnippet}</code></pre>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t-2 pt-8">
            <Link href="/unit3/lesson1" className="text-[#776ea5] font-black text-xl hover:underline order-2 md:order-1 transition-transform hover:-translate-x-2">← الدرس السابق</Link>
            
            <Link href="/exam?unit=3" className="w-full md:w-auto bg-[#ffcc00] text-[#776ea5] px-12 py-4 rounded-full font-black shadow-[0_6px_0_0_#d4ac00] hover:scale-105 active:translate-y-1 transition-all text-xl order-1 md:order-2">
              امتحان الوحدة الثالثة 📝
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}