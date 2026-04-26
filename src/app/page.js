import Link from "next/link";

export default function HomePage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col items-center justify-center bg-purple-400 p-6"
    >
      <div className="max-w-2xl text-center">

        <h1 className="text-5xl font-extrabold text-white mb-6">
          منصة "نوعية" التعليمية
        </h1>

        <p className="text-lg text-white/90 mb-10">
          تعلم البرمجة بطريقة بسيطة وتفاعلية
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            href="/units"
            className="px-10 py-4 bg-white text-purple-500 rounded-full font-bold
            shadow-lg hover:scale-105 transition-all"
          >
            ابدأ التعلم
          </Link>

          <Link
            href="/exam"
            className="px-10 py-4 bg-purple-500 text-white rounded-full font-bold
            shadow-lg hover:scale-105 transition-all"
          >
            اختبر نفسك
          </Link>

        </div>

      </div>
    </div>
  );
}