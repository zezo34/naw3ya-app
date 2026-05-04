import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: 'منصة نوعية التعليمية',
  description: 'تعلم البرمجة ببساطة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-800 antialiased flex flex-col min-h-screen">
        
        <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center">
            
            {/* اللوجو باللون الموحد */}
            <Link href="/" className="text-2xl font-black text-[#776ea5]">
              نـوعـيـة
            </Link>
            
            {/* لينكات الـ PC */}
            <nav className="hidden md:flex items-center gap-8 font-black text-gray-600">
              <Link href="/" className="hover:text-[#776ea5] transition-colors">الرئيسية</Link>
              <Link href="/units" className="hover:text-[#776ea5] transition-colors">الوحدات</Link>
              <Link href="/exam" className="hover:text-[#776ea5] transition-colors">الاختبار</Link>
              <Link href="/about" className="hover:text-[#776ea5] transition-colors">عن المنصة</Link>
            </nav>
          </div>

          {/* سطر التبويبات للموبايل - ألوان موحدة */}
          <div className="md:hidden border-t border-gray-50 flex overflow-x-auto no-scrollbar bg-white">
            <Link href="/" className="flex-1 text-center py-4 px-4 text-sm font-black text-[#776ea5] border-b-4 border-[#776ea5] bg-gray-50">الرئيسية</Link>
            <Link href="/units" className="flex-1 text-center py-4 px-4 text-sm font-black text-gray-400 border-b-4 border-transparent hover:text-[#776ea5]">الوحدات</Link>
            <Link href="/exam" className="flex-1 text-center py-4 px-4 text-sm font-black text-gray-400 border-b-4 border-transparent hover:text-[#776ea5]">الاختبار</Link>
            <Link href="/about" className="flex-1 text-center py-4 px-4 text-sm font-black text-gray-400 border-b-4 border-transparent hover:text-[#776ea5]">المنصة</Link>
          </div>
        </header>

        <main className="grow">
          {children}
        </main>

        <footer className="bg-white border-t border-gray-100 py-8 text-center text-gray-400 text-sm font-bold">
          <p>© {new Date().getFullYear()} منصة نوعية التعليمية</p>
        </footer>
        
      </body>
    </html>
  );
}