import Link from "next/link";

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen flex items-center justify-center bg-[#776ea5] p-6 text-center font-sans">
      <div className="max-w-xl w-full bg-white rounded-[3.5rem] p-12 shadow-2xl flex flex-col items-center">
        
        {/* أيقونة القبعة الصفراء */}
        <div className="w-28 h-28 bg-[#ffcc00] rounded-[2.5rem] flex items-center justify-center mb-10 shadow-md border-4 border-white">
          <span className="text-6xl">🎓</span>
        </div>

        <h1 className="text-5xl font-black text-[#776ea5] mb-4">
          منصة <span className="text-[#ffcc00]">نواعية</span>
        </h1>

        <p className="text-2xl font-bold text-gray-700 mb-2">أهلاً بك في بيتك الثاني للتعلم التفاعلي..</p>
        <p className="text-gray-400 font-bold mb-12">قسم تكنولوجيا التعليم - جامعة عين شمس</p>

        <div className="flex flex-row-reverse gap-4 w-full">
          {/* زرار دخول المنصة */}
          <Link
            href="/units"
            className="flex-1 bg-[#ffcc00] hover:bg-[#e6b800] text-[#776ea5] py-5 rounded-3xl font-black text-2xl shadow-lg transition-transform active:scale-95"
          >
            دخول المنصة 🚀
          </Link>

        
        </div>
      </div>
    </main>
  );
}