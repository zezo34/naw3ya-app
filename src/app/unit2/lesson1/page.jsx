"use client";
import Link from "next/link";

export default function ClassesLesson() {
  const codeSnippet = `// الكلاس هو "الخريطة" (Blueprint)
public class Car {
    public string Model;
    public int Year;

    public void Drive() {
        Console.WriteLine("العربية ماشية...");
    }
}

// الأوبجكت هو "التنفيذ الحقيقي" (Instance)
Car myCar = new Car();
myCar.Model = "Toyota";
myCar.Drive();`;

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] p-4 md:p-10 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border-b-8 border-gray-200">
          
          <h1 className="text-3xl md:text-4xl font-black text-[#776ea5] mb-8 border-b-4 border-gray-50 pb-4">
            الدرس الأول: الكلاس والكائن 🏗️
          </h1>

          <div className="space-y-8 text-right">
            
            <div className="bg-blue-50 p-6 rounded-[2rem] border-r-8 border-blue-500">
              <h2 className="text-2xl font-black text-blue-900 mb-2">💡 إيه الفرق؟</h2>
              <p className="text-gray-700 font-bold leading-relaxed">
                الكلاس (Class) هو الرسم الهندسي للعمارة، أما الأوبجكت (Object) فهو العمارة اللي اتبنت فعلاً على الأرض.
              </p>
            </div>

            {/* سكشن الصورة المعدل */}
            <div className="flex flex-col items-center bg-gray-50 p-4 md:p-8 rounded-[2rem] border-2 border-dashed border-blue-200">
              <p className="mb-6 font-black text-blue-700 underline text-lg">توضيح العلاقة بين الكلاس والكائنات:</p>
              
              <div className="w-full overflow-hidden rounded-xl shadow-sm bg-white p-2">
                 <img 
                  src="/image/2.jpg" 
                  alt="Class vs Object" 
                  className="w-full h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-[1.02] cursor-zoom-in"
                />
              </div>
              
              <p className="mt-4 text-sm text-gray-500 font-bold italic text-center">
                * الصورة توضح كيف يتحول المخطط (Class) إلى نماذج حقيقية (Objects)
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-[2rem] text-left shadow-inner" dir="ltr">
               <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
                 <span className="text-slate-400 text-xs font-mono uppercase">C# Example</span>
                 <div className="flex gap-1">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
               </div>
              <pre className="text-green-400 font-mono text-sm md:text-base overflow-x-auto leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-between items-center border-t-2 pt-8">
            <Link href="/units" className="text-[#776ea5] font-black text-lg hover:underline order-2 md:order-1">
              ← العودة للوحدات
            </Link>
            <Link href="/unit2/lesson2" className="w-full md:w-auto bg-[#ffcc00] text-[#776ea5] px-12 py-4 rounded-full font-black shadow-lg hover:bg-[#e6b800] transition-colors text-center order-1 md:order-2">
              الدرس التالي 🎯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}