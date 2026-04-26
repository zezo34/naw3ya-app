import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: 'منصة نوعية التعليمية',
  description: 'تعلم البرمجة ببساطة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-purple-50 text-gray-800 antialiased">
        {/* NAV - تصميم ثابت واحترافي */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
          <Link href="/" className="text-2xl font-black text-purple-600">
            نـوعـيـة
          </Link>

          <div className="hidden md:flex gap-8 font-bold text-gray-600">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              الرئيسية
            </Link>
            <Link href="/units" className="hover:text-purple-600 transition-colors">
              الوحدات
            </Link>
            <Link href="/exam" className="hover:text-purple-600 transition-colors">
              الاختبار
            </Link>
            <Link href="/about" className="hover:text-purple-600 transition-colors">
              عن المنصة
            </Link>
          </div>
          
          {/* زر جانبي للتميز */}
          <div className="md:hidden text-purple-600 font-bold">
            القائمة
          </div>
        </nav>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}