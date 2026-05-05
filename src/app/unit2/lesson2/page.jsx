"use client";
import Link from "next/link";

export default function EncapsulationLesson() {
  const codeSnippet = `public class BankAccount {
    private double balance; // محمي من الخارج - Private

    public void Deposit(double amount) {
        if (amount > 0) balance += amount; // تعديل محكوم
    }

    public double GetBalance() {
        return balance; // قراءة فقط
    }
}`;

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] p-4 md:p-10 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-b-8 border-gray-200">
          <h1 className="text-3xl md:text-5xl font-black text-[#776ea5] mb-8 border-b-4 border-gray-50 pb-6 text-center md:text-right italic">
            التغليف (Encapsulation) 🛡️
          </h1>
          
          <div className="space-y-8 text-right">
            <section className="bg-blue-50 p-6 rounded-[2rem] border-r-8 border-blue-500 shadow-sm font-bold">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                التغليف هو إنك "تقفل" على بياناتك وما تخليش حد يعدل عليها مباشرة. بنستخدم كلمة <span className="text-blue-600 underline">private</span> عشان نخفي المتغيرات، وبنعمل دوال <span className="text-blue-600 underline">public</span> عشان نتحكم في الوصول ليها (زي الكبسولة اللي بتحمي الدوا اللي جواها).
              </p>
            </section>

            {/* سكشن الصورة المعدل - تكبير وتوضيح */}
            <div className="flex flex-col items-center bg-gray-50 p-4 md:p-8 rounded-[2rem] border-2 border-dashed border-blue-200">
              <p className="mb-6 font-black text-blue-800 underline text-lg md:text-xl italic">
                مفهوم الكبسولة: حماية البيانات بالدوال
              </p>
              
              <div className="w-full bg-white rounded-2xl p-2 shadow-sm overflow-hidden">
                <img 
                  src="/image/3.webp" 
                  alt="Encapsulation Concept" 
                  className="w-full h-auto max-w-full rounded-xl transition-transform duration-500 hover:scale-[1.03] cursor-zoom-in" 
                />
              </div>
              
              <p className="mt-4 text-sm text-gray-500 font-bold">
                * لاحظ كيف يتم إخفاء المتغيرات (Private) وإظهار الطرق (Public) فقط.
              </p>
            </div>

            {/* سكشن الكود الاحترافي */}
            <div className="bg-slate-900 p-6 rounded-[2rem] text-left shadow-inner group relative" dir="ltr">
              <div className="absolute top-4 right-4 text-slate-500 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                C# Example
              </div>
              <pre className="text-green-400 font-mono text-sm md:text-base overflow-x-auto leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* أزرار التنقل */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t-4 border-gray-50 pt-10">
            <Link href="/unit2/lesson1" className="text-[#776ea5] font-black text-xl hover:underline order-2 md:order-1">
              ← الدرس السابق
            </Link>
            
            <Link href="/exam?unit=2" className="w-full md:w-auto bg-[#ffcc00] text-[#776ea5] px-16 py-5 rounded-[2rem] font-black text-2xl shadow-[0_8px_0_0_#d4ac00] hover:translate-y-1 hover:shadow-[0_4px_0_0_#d4ac00] transition-all text-center order-1 md:order-2">
              امتحان الوحدة الثانية 🎯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}