import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: 'منصة نوعية التعليمية',
  description: 'تعلم البرمجة ببساطة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="bg-purple-50 text-gray-800 antialiased flex flex-col min-h-screen">
        
        <header className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center">
            
            {/* اللوجو - ثابت مكانه يمين */}
            <Link href="/" className="text-2xl font-black text-purple-600">
              نـوعـيـة
            </Link>
            
            {/* لينكات الـ PC - بترجع لمكانها الطبيعي على الشمال وبس في الـ PC */}
            <nav className="hidden md:flex items-center gap-8 font-bold text-gray-600">
              <Link href="/" className="hover:text-purple-600 transition-colors">الرئيسية</Link>
              <Link href="/units" className="hover:text-purple-600 transition-colors">الوحدات</Link>
              <Link href="/exam" className="hover:text-purple-600 transition-colors">الاختبار</Link>
              <Link href="/about" className="hover:text-purple-600 transition-colors">عن المنصة</Link>
            </nav>

            {/* في الموبايل: اللوجو بيفضل لوحده فوق، والتبويبات بتنزل تحت في سطر جديد */}
          </div>

          {/* سطر التبويبات (للموبايل فقط) - ده اللي إنت عاوزه للموبايل ومستحيل يظهر في الـ PC */}
          <div className="md:hidden border-t border-purple-50 flex overflow-x-auto no-scrollbar bg-white">
            <Link href="/" className="flex-1 text-center py-3 px-4 text-xs font-bold text-purple-600 border-b-2 border-purple-600 bg-purple-50">الرئيسية</Link>
            <Link href="/units" className="flex-1 text-center py-3 px-4 text-xs font-bold text-gray-500 border-b-2 border-transparent">الوحدات</Link>
            <Link href="/exam" className="flex-1 text-center py-3 px-4 text-xs font-bold text-gray-500 border-b-2 border-transparent">الاختبار</Link>
            <Link href="/about" className="flex-1 text-center py-3 px-4 text-xs font-bold text-gray-500 border-b-2 border-transparent">المنصة</Link>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-white border-t border-purple-100 py-6 text-center text-gray-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} منصة نوعية التعليمية</p>
        </footer>
        
      </body>
    </html>
  );
}