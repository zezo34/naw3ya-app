"use client";
import React from 'react';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center p-6 bg-purple-50/30">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-purple-100 w-full max-w-md border border-purple-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-purple-600 mb-2">مرحباً بك</h2>
          <p className="text-gray-500 font-medium">سجل دخولك لمتابعة دروس البرمجة</p>
        </div>
        
        <div className="space-y-5">
          {/* زرار جوجل - الآن شغال بجد! */}
          <button 
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-4 bg-white border-2 border-gray-100 py-3.5 rounded-2xl font-bold text-gray-700 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300 shadow-sm"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="Google"/>
            <span>الدخول بواسطة جوجل</span>
          </button>

          <div className="relative flex items-center py-4">
            <div className="flex-1 border-t border-gray-100"></div>
            <span className="px-4 text-gray-400 text-[10px] font-black tracking-widest">أو عبر الإيميل</span>
            <div className="flex-1 border-t border-gray-100"></div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="البريد الإلكتروني" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-purple-400 focus:bg-white transition-all outline-none text-right font-medium" />
            <input type="password" placeholder="كلمة المرور" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-purple-400 focus:bg-white transition-all outline-none text-right font-medium" />
            <button className="w-full bg-purple-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-purple-200 hover:bg-purple-700 transition-all active:scale-95">
              دخول
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}