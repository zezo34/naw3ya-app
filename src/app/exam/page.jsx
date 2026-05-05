"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ExamPage() {
  const searchParams = useSearchParams();
  const unitId = searchParams.get("unit") || "1"; // بيقرأ رقم الوحدة من اللينك

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);

  // قاعدة بيانات الأسئلة لكل وحدة
  const allExams = {
    "1": {
      title: "امتحان الوحدة الأولى: الأساسيات",
      questions: [
        { q: "ما هو التعريف الصحيح للثوابت؟", options: ["تتغير قيمتها", "تبقى ثابتة", "دوال رياضية", "مساحة مؤقتة"], answer: 1 },
        { q: "أي مما يلي اسم متغير صحيح؟", options: ["1Score", "User Name", "total_2", "first-name"], answer: 2 },
        { q: "المتغير يحجز مساحة في الـ RAM.", options: ["صح", "خطأ"], answer: 0 },
        { q: "لتخزين النصوص نستخدم نوع:", options: ["Integer", "Boolean", "String", "Double"], answer: 2 },
        { q: "الثابت النصي يوضع بين \" \".", options: ["صح", "خطأ"], answer: 0 },
      ]
    },
    "2": {
      title: "امتحان الوحدة الثانية: الكلاسات والتغليف",
      questions: [
        { q: "مفهوم إخفاء البيانات وحمايتها يسمى:", options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], answer: 1 },
        { q: "الـ Class يعتبر مخطط (Blueprint) لإنشاء الكائنات.", options: ["صح", "خطأ"], answer: 0 },
        { q: "الـ Private يمكن الوصول إليه من خارج الكلاس.", options: ["صح", "خطأ"], answer: 1 },
        { q: "دالة تنفذ تلقائياً عند إنشاء الكائن:", options: ["Destructor", "Constructor", "Method", "Property"], answer: 1 },
        { q: "يمكن إنشاء أكثر من كائن من نفس الكلاس.", options: ["صح", "خطأ"], answer: 0 },
      ]
    },
    "3": {
      title: "امتحان الوحدة الثالثة: الوراثة وتعدد الأشكال",
      questions: [
        { q: "الوراثة تسمح لكلاس بوراثة صفات من كلاس آخر.", options: ["صح", "خطأ"], answer: 0 },
        { q: "العلاقة 'is-a' تشير إلى مفهوم:", options: ["Encapsulation", "Inheritance", "Abstraction", "Interface"], answer: 1 },
        { q: "تستخدم كلمة virtual في الكلاس الأب للسماح بالتعديل.", options: ["صح", "خطأ"], answer: 0 },
        { q: "تستخدم كلمة override في الكلاس الابن.", options: ["صح", "خطأ"], answer: 0 },
        { q: "الوراثة تساعد في تقليل تكرار الكود.", options: ["صح", "خطأ"], answer: 0 },
      ]
    }
  };

  const exam = allExams[unitId] || allExams["1"];
  const questions = exam.questions;

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
    else setShowResult(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => { if (selectedOptions[i] === q.answer) score++; });
    return score;
  };

  if (showResult) {
    const finalScore = calculateScore();
    return (
      <div dir="rtl" className="min-h-screen bg-[#776ea5] flex items-center justify-center p-6 text-center">
        <div className="bg-white rounded-[3rem] p-12 max-w-md w-full shadow-2xl border-b-8 border-gray-200 text-[#776ea5]">
          <h2 className="text-3xl font-black mb-4">انتهى امتحان {exam.title}</h2>
          <p className="text-6xl font-black text-yellow-500 mb-8">{finalScore} / {questions.length}</p>
          <Link href="/units" className="block bg-[#776ea5] text-white py-4 rounded-2xl font-black text-xl shadow-lg">العودة للدروس 📚</Link>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] flex flex-col items-center pt-20 p-6">
      <div className="max-w-3xl w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-b-8 border-gray-200">
        <h1 className="text-xl font-bold text-gray-400 mb-2 italic underline">{exam.title}</h1>
        <h2 className="text-2xl md:text-3xl font-black text-[#776ea5] mb-10 leading-tight">
          {questions[currentQuestion].q}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {questions[currentQuestion].options.map((op, i) => (
            <button
              key={i}
              onClick={() => setSelectedOptions({ ...selectedOptions, [currentQuestion]: i })}
              className={`p-5 rounded-2xl text-right font-bold text-lg border-2 transition-all ${
                selectedOptions[currentQuestion] === i ? "border-[#776ea5] bg-purple-50 text-[#776ea5]" : "border-gray-100 text-gray-700"
              }`}
            >
              {op}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selectedOptions[currentQuestion] === undefined}
          className="mt-12 w-full bg-yellow-400 text-[#776ea5] py-5 rounded-2xl font-black text-2xl shadow-xl disabled:bg-gray-200 disabled:text-gray-400 transition-all"
        >
          {currentQuestion === questions.length - 1 ? "رؤية النتيجة ✅" : "السؤال التالي ←"}
        </button>
      </div>
    </div>
  );
}