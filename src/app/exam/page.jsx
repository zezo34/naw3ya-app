"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ExamPage() {
  const searchParams = useSearchParams();
  const unitParam = searchParams.get("unit"); // قراءة رقم الوحدة من الرابط

  const [selectedExam, setSelectedExam] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);

  // قاعدة بيانات الامتحانات مربوطة برقم الوحدة
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

  // تفعيل الامتحان بناءً على الـ Param عند التحميل
  useEffect(() => {
    if (unitParam && allExams[unitParam]) {
      setSelectedExam(unitParam);
    }
  }, [unitParam]);

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

  // 1. شاشة اختيار الوحدة (تظهر فقط لو لم يتم تحديد وحدة في الرابط)
  if (!selectedExam) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#776ea5] flex flex-col items-center justify-center p-6 text-white">
        <h1 className="text-5xl font-black mb-12 drop-shadow-lg">اختر امتحان الوحدة 📝</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[1, 2, 3].map((num) => (
            <button 
              key={num} 
              onClick={() => setSelectedExam(num)}
              className="bg-white text-[#776ea5] p-10 rounded-[3rem] shadow-2xl hover:scale-105 transition-all group"
            >
              <div className="text-6xl mb-4 group-hover:rotate-12 transition-transform">
                {num === 1 ? "💻" : num === 2 ? "🏗️" : "🧬"}
              </div>
              <h2 className="text-2xl font-black">الوحدة {num}</h2>
              <p className="mt-4 opacity-70 font-bold">بدء التقييم النهائي</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. شاشة النتيجة
  if (showResult) {
    return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-[#776ea5] p-6">
        <div className="bg-white rounded-[3rem] shadow-2xl p-10 text-center max-w-md w-full">
          <div className="text-7xl mb-4">
             {calculateScore() >= 7 ? "🎉" : "📚"}
          </div>
          <h2 className="text-4xl font-black text-[#776ea5] mb-4">
            {calculateScore() >= 7 ? "بطل متميز!" : "محاولة جيدة!"}
          </h2>
          <p className="text-xl font-bold text-gray-600 mb-2">درجتك في {allExams[selectedExam].title}</p>
          <div className="text-6xl font-black text-[#ffcc00] my-6">{calculateScore()} / 10</div>
          
          <div className="flex flex-col gap-3">
             <button onClick={() => window.location.reload()} className="w-full bg-[#776ea5] text-white py-4 rounded-2xl font-black shadow-lg hover:opacity-90">إعادة الاختبار</button>
             <Link href="/units" className="w-full bg-gray-100 text-[#776ea5] py-4 rounded-2xl font-black">العودة للوحدات</Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. شاشة الأسئلة
  return (
    <div dir="rtl" className="min-h-screen bg-[#776ea5] p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full mt-10">
        <div className="flex justify-between items-center text-white mb-6">
           <Link href="/units" className="font-bold opacity-80 underline">خروج</Link>
           <h1 className="text-2xl font-black">{allExams[selectedExam].title}</h1>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border-b-8 border-gray-100">
           <div className="flex justify-between items-center mb-8">
              <span className="text-[#776ea5] font-black text-lg">سؤال {currentQuestion + 1} من 10</span>
              <div className="w-1/2 bg-gray-100 h-3 rounded-full overflow-hidden">
                 <div className="bg-[#ffcc00] h-full transition-all duration-500" style={{ width: `${((currentQuestion+1)/10)*100}%` }}></div>
              </div>
           </div>

           <h2 className="text-2xl font-bold text-gray-800 mb-10 leading-relaxed min-h-[80px]">
             {currentQuestions[currentQuestion].q}
           </h2>

           <div className="grid grid-cols-1 gap-4">
             {currentQuestions[currentQuestion].options.map((option, index) => (
               <button
                 key={index}
                 onClick={() => handleOptionSelect(index)}
                 className={`w-full p-5 border-2 rounded-3xl text-right font-bold transition-all ${selectedOptions[currentQuestion] === index ? "bg-[#776ea5] border-[#776ea5] text-white shadow-xl scale-[1.02]" : "border-gray-50 text-gray-600 hover:bg-gray-50"}`}
               >
                 <span className={`ml-3 px-2 py-1 rounded-lg ${selectedOptions[currentQuestion] === index ? "bg-white/20" : "bg-gray-100"}`}>{index + 1}</span> {option}
               </button>
             ))}
           </div>

           <button 
              onClick={handleNext} 
              disabled={selectedOptions[currentQuestion] === undefined}
              className={`w-full mt-10 py-5 rounded-2xl font-black text-xl shadow-lg transition-all ${selectedOptions[currentQuestion] === undefined ? 'bg-gray-200 text-gray-400' : 'bg-[#ffcc00] text-[#776ea5] hover:scale-[1.02]'}`}
           >
             {currentQuestion === 9 ? "إنهاء الامتحان وعرض النتيجة" : "السؤال التالي ⬅️"}
           </button>
        </div>
      </div>
    </div>
  );
}