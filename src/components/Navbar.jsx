"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "الوحدات", href: "/units" },
    { name: "الاختبار", href: "/exam" },
    { name: "عن المنصة", href: "/about" }, 
  ];

  return (
    <nav 
      dir="rtl" 
      className="bg-white sticky top-0 z-[9999] w-full shadow-md border-b border-gray-100"
    >
      {/* Container ملموم بيحافظ على المسافات */}
      <div className="max-w-5xl mx-auto px-4 md:px-12 h-16 md:h-20 flex justify-between items-center gap-2">
        
        {/* اللوجو - صغرناه في الموبايل */}
        <div className="text-[#776ea5] font-black text-xl md:text-3xl italic flex-shrink-0">
          نوعية
        </div>

        {/* الروابط - التعديل الجوهري هنا */}
        <div className="flex gap-3 md:gap-10 overflow-x-auto no-scrollbar py-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm md:text-xl font-bold whitespace-nowrap transition-all pb-1 ${
                  isActive 
                  ? "text-[#776ea5] border-b-2 md:border-b-4 border-[#776ea5]" 
                  : "text-gray-400 hover:text-[#776ea5]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}