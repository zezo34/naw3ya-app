"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect, Suspense } from "react"; // ضفنا Suspense و useEffect
import { useSearchParams } from "next/navigation"; // عشان نعرف رقم الوحدة من الرابط
import Link from "next/link";

function ExamContent() {
  const searchParams = useSearchParams();
  const unitFromUrl = searchParams.get("unit"); // بيجيب الرقم من الرابط ?unit=1

  const [selectedExam, setSelectedExam] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);

  // تحديث الامتحان المختار بناءً على الرابط
  useEffect(() => {
    if (unitFromUrl && allExams[unitFromUrl]) {
      setSelectedExam(unitFromUrl);
    }
  }, [unitFromUrl]);

  const allExams = {
    1: {
      title: "امتحان الوحدة الأولى: الأساسيات",
      questions: [
        { q: "ما هو التعريف الصحيح للثوابت في البرمجة؟", options: ["قيم تتغير أثناء التنفيذ", "قيم تبقى ثابتة ولا تتغير", "أماكن تتغير قيمتها", "دوال رياضية"], answer: 1 },
        { q: "أي مما يلي يعتبر اسم متغير صحيح؟", options: ["5Score", "User Name", "total_2", "first-name"], answer: 2 },
        { q: "المتغير يحجز مساحة تخزينية في الذاكرة المؤقتة (RAM).", options: ["صح", "خطأ"], answer: 0 },
        { q: "لتخزين اسم المستخدم نستخدم نوع البيانات:", options: ["Integer", "Boolean", "String", "Double"], answer: 2 },
        { q: "الثابت النصي يوضع بين علامتي اقتباس \" \".", options: ["صح", "خطأ"], answer: 0 },
        { q: "أي قيمة تمثل ثابتاً عدداً صحيحاً؟", options: ["27.5", "100", "\"100\"", "0.5"], answer: 1 },
        { q: "تغيير قيمة الثابت أثناء التشغيل يسبب خطأ (Error).", options: ["صح", "خطأ"], answer: 0 },
        { q: "الأسية تستخدم لتمثيل الأرقام الكبيرة جداً أو الصغيرة جداً.", options: ["صح", "خطأ"], answer: 0 },
        { q: "عند تخزين قيمة جديدة في متغير، القيمة القديمة تمسح.", options: ["صح", "خطأ"], answer: 0 },
        { q: "ماذا تمثل الصيغة 23E-2؟", options: ["23 × 10²", "23 × 10⁻²", "23 ÷ 2", "23 + 2"], answer: 1 },
      ]
    },
    2: {
      title: "امتحان الوحدة الثانية: التغليف والكلاسات",
      questions: [
        { q: "ما هو الكائن (Object) في البرمجة؟", options: ["دالة برمجية", "وحدة بناء مشتقة من الـ Class", "نوع بيانات رقمي", "ملف نصي"], answer: 1 },
        { q: "مفهوم إخفاء البيانات وحمايتها داخل الكائن يسمى:", options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], answer: 1 },
        { q: "الـ Class يعتبر مخطط (Blueprint) يتم إنشاء الكائنات بناءً عليه.", options: ["صح", "خطأ"], answer: 0 },
        { q: "الـ Private member يمكن الوصول إليه من خارج الـ Class.", options: ["صح", "خطأ"], answer: 1 },
        { q: "ما هو الـ Constructor؟", options: ["دالة تمسح الكائن", "دالة تنفذ تلقائياً عند إنشاء الكائن", "متغير نصي", "نوع من أنواع الـ Loop"], answer: 1 },
        { q: "الـ Static Method يمكن استدعاؤها بدون إنشاء كائن.", options: ["صح", "خطأ"], answer: 0 },
        { q: "أي من هذه لغات تدعم الـ OOP بشكل كامل؟", options: ["C++", "HTML", "CSS", "SQL"], answer: 0 },
        { q: "الهدف الأساسي من الـ Encapsulation هو حماية البيانات.", options: ["صح", "خطأ"], answer: 0 },
        { q: "يمكن إنشاء أكثر من Object من نفس الـ Class.", options: ["صح", "خطأ"], answer: 0 },
        { q: "الـ Property تستخدم للتحكم في قراءة وكتابة المتغيرات (Get/Set).", options: ["صح", "خطأ"], answer: 0 },
      ]
    },
    3: {
      title: "امتحان الوحدة الثالثة: الوراثة وتعدد الأشكال",
      questions: [
        { q: "الوراثة (Inheritance) تسمح لـ Class بوراثة صفات من Class آخر.", options: ["صح", "خطأ"], answer: 0 },
        { q: "تعدد الأشكال (Polymorphism) يعني أن الدالة تأخذ أكثر من صورة.", options: ["صح", "خطأ"], answer: 0 },
        { q: "العلاقة 'is-a' تشير إلى مفهوم الوراثة.", options: ["صح", "خطأ"], answer: 0 },
        { q: "الكلمة المحجوزة المستخدمة للوراثة في C# هي:", options: [":", "extends", "inherits", "base"], answer: 0 },
        { q: "تستخدم كلمة virtual في الكلاس الأب للسماح للابن بتعديل الدالة.", options: ["صح", "خطأ"], answer: 0 },
        { q: "تستخدم كلمة override في الكلاس الابن لتعديل دالة الأب.", options: ["صح", "خطأ"], answer: 0 },
        { q: "الكلاس الذي يرث منه يسمى Base Class.", options: ["صح", "خطأ"], answer: 0 },
        { q: "الوراثة تساعد في تقليل تكرار الكود (Code Reusability).", options: ["صح", "خطأ"], answer: 0 },
        { q: "يمكن للابن الوصول لجميع الدوال الـ Private في الأب.", options: ["صح", "خطأ"], answer: 1 },
        { q: "الـ Polymorphism يساعد في التعامل مع كائنات مختلفة بأمر واحد.", options: ["صح", "خطأ"], answer: 0 },
      ]
    }
  };

  const currentQuestions = selectedExam ? allExams[selectedExam].questions : [];

  const handleOptionSelect = (idx) => setSelectedOptions({ ...selectedOptions, [currentQuestion]: idx });

  const handleNext = () => {
    if (currentQuestion < currentQuestions.length - 1) setCurrentQuestion(currentQuestion + 1);
    else setShowResult(true);
  };

  const calculateScore = () => {
    let score = 0;
    currentQuestions.forEach((q, i) => { if (selectedOptions[i] === q.answer) score++; });
    return score;
  };

  // شاشة اختيار الامتحان (لو مفيش رقم وحدة في الرابط)
  if (!selectedExam) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#776ea5] flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-12 drop-shadow-lg text-center">اختر امتحان الوحدة 📝</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedExam(num)}
              className="bg-white text-[#776ea5] p-10 rounded-[3rem] shadow-2xl hover:scale-105 transition-transform border-b-8 border-gray-200 group"
            >
              <span className="text-6xl block mb-4 group-hover:animate-bounce">📖</span>
              <h2 className="text-2xl font-black italic">{allExams[num].title}</h2>
              <p className="mt-2 font-bold text-gray-400">ابدأ الآن 🎯</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // شاشة النتيجة
  if (showResult) {
    const finalScore = calculateScore();
    return (
      <div dir="rtl" className="min-h-screen bg-[#776ea5] flex items-center justify-center p-6 text-center">
        <div className="bg-white rounded-[3rem] p-12 max-w-md w-full shadow-2xl border-b-8 border-gray-200">
          <div className="text-7xl mb-6"> {finalScore >= (currentQuestions.length / 2) ? "🎉" : "💪"} </div>
          <h2 className="text-3xl font-black text-[#776ea5] mb-2 text-center">انتهى الاختبار!</h2>
          <p className="text-6xl font-black text-yellow-500 mb-8">{finalScore} / {currentQuestions.length}</p>
          <div className="flex flex-col gap-4">
            <button onClick={() => { setShowResult(false); setCurrentQuestion(0); setSelectedOptions({}); }} className="bg-[#776ea5] text-white py-4 rounded-2xl font-black text-xl shadow-lg active:translate-y-1 transition-all">إعادة المحاولة 🔄</button>
            <Link href="/units" className="bg-gray-100 text-gray-600 py-4 rounded-2xl font-black text-xl hover:bg-gray-200 transition-all text-center">رجوع للدروس 📚</Link>
          </div>
        </div>
      </div>
    );
  }

  // شاشة الأسئلة
  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] flex flex-col items-center pt-20 p-6 font-sans">
      <div className="max-w-3xl w-full">
        <div className="w-full bg-white/20 h-4 rounded-full mb-8 overflow-hidden">
          <div className="bg-yellow-400 h-full transition-all duration-500" style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}></div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-b-8 border-gray-200 relative">
          <span className="absolute -top-6 right-8 bg-yellow-400 text-[#776ea5] px-6 py-2 rounded-full font-black shadow-md">سؤال {currentQuestion + 1} من {currentQuestions.length}</span>
          <h1 className="text-xl font-bold text-gray-400 mb-4">{allExams[selectedExam].title}</h1>
          <h2 className="text-2xl md:text-3xl font-black text-[#776ea5] mb-10 leading-tight">{currentQuestions[currentQuestion].q}</h2>

          <div className="grid grid-cols-1 gap-4 text-center">
            {currentQuestions[currentQuestion].options.map((op, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(i)}
                className={`p-5 rounded-2xl text-right font-bold text-lg border-2 transition-all ${selectedOptions[currentQuestion] === i ? "border-[#776ea5] bg-purple-50 text-[#776ea5] ring-4 ring-purple-100" : "border-gray-100 hover:border-[#776ea5] hover:bg-gray-50 text-gray-700"}`}
              >
                <span className={`inline-block w-8 h-8 rounded-full ml-3 text-center leading-8 ${selectedOptions[currentQuestion] === i ? "bg-[#776ea5] text-white" : "bg-gray-100 text-gray-400"}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                {op}
              </button>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <button
              onClick={handleNext}
              disabled={selectedOptions[currentQuestion] === undefined}
              className={`px-12 py-4 rounded-2xl font-black text-xl shadow-xl transition-all ${selectedOptions[currentQuestion] !== undefined ? "bg-yellow-400 text-[#776ea5] hover:scale-105 active:translate-y-1" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
            >
              {currentQuestion === currentQuestions.length - 1 ? "إنهاء الاختبار ✅" : "السؤال التالي ←"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// التصدير النهائي مع Suspense عشان Vercel
export default function FinalExamPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#776ea5] flex items-center justify-center text-white text-2xl font-bold italic">جاري تحميل الاختبار... 🚀</div>}>
      <ExamContent />
    </Suspense>
  );
}