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
    <nav dir="rtl" className="bg-white py-4 px-12 flex justify-between items-center shadow-sm border-b border-gray-100">
      {/* اسم المنصة على اليمين */}
      <div className="text-[#776ea5] font-black text-3xl">نوعية</div>

      {/* الروابط في النص */}
      <div className="flex gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xl font-bold transition-all pb-1 ${
                isActive 
                ? "text-[#776ea5] border-b-4 border-[#776ea5]" 
                : "text-gray-400 hover:text-[#776ea5]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}