import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#776ea5] min-h-screen flex flex-col overflow-x-hidden antialiased text-gray-900">
        <Navbar />
        
        {/* التعديل السحري هنا: تحديد عرض الموقع كله وتوسيطه */}
        <main className="grow w-full max-w-5xl mx-auto px-4 md:px-8 relative">
          {children}
        </main>

        <footer className="py-8 text-center text-white/20 text-xs">
          منصة نوعية التعليمية © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}