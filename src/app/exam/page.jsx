"use client";
import { useState } from "react";

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { q: "ما هو التعريف الصحيح للثوابت في البرمجة؟", options: ["قيم تتغير أثناء التنفيذ", "قيم تبقى ثابتة ولا تتغير أثناء تنفيذ البرنامج", "أماكن محجوزة في الذاكرة تتغير قيمتها", "دوال رياضية فقط"], answer: 1 },
    { q: "أي من القيم التالية يعتبر ثابتاً عدداً صحيحاً (Integer)؟", options: ["27.55", "-74.32", "+93", "23E-2"], answer: 2 },
    { q: "الثوابت العددية الكسرية (Real / Decimal) تشمل؟", options: ["أعداداً صحيحة فقط", "أعداداً تحتوي على فاصلة عشرية", "نصوصاً فقط", "رموزاً خاصة"], answer: 1 },
    { q: "ماذا تمثل الصيغة الأسية 23E-2؟", options: ["23 × 10²", "23 + 2", "23 × 10⁻²", "23 ÷ 2"], answer: 2 },
    { q: "أي من الأمثلة التالية يمثل ثابتاً للسلاسل النصية (String Constants)؟", options: ["100", "\"My Computer\"", "A$", "+55.23"], answer: 1 },
    { q: "المتغير في البرمجة يمثل؟", options: ["قيمة لا يمكن الوصول إليها", "موقع تخزين في الذاكرة يمكن تغيير قيمته", "أمراً للطباعة فقط", "ثابتاً نصياً دائماً"], answer: 1 },
    { q: "المتغير النصي (String Variable) ينتهي اسمه بـ؟", options: ["علامة #", "علامة $", "علامة %", "علامة !"], answer: 1 },
    { q: "أي مما يلي يعتبر اسم متغير عددي صحيح؟", options: ["A$", "E5", "\"Hello\"", "B$9"], answer: 1 },
    { q: "عند تخزين قيمة جديدة في المتغير، القيمة القديمة:", options: ["تظل موجودة", "تُمسح ويحل محلها الجديدة", "تنتقل لمتغير آخر", "تُجمع مع الجديدة"], answer: 1 },
    { q: "الثوابت النصية هي مجموعة حروف أو رموز تكتب بين:", options: ["أقواس ( )", "علامتي اقتباس \" \"", "مربعات [ ]", "نجوم * *"], answer: 1 },
    { q: "تستخدم الثوابت الأسية لتمثيل الأعداد:", options: ["الصغيرة جداً أو الكبيرة جداً", "النصية فقط", "المتغيرة", "الأسماء"], answer: 0 },
    { q: "في الصيغة 23E-2، ماذا يمثل الحرف E؟", options: ["جمع", "طرح", "10 أس", "قسمة"], answer: 2 },
    { q: "الصيغة -2.1E2 تعني رياضياً -2.1 × 10².", options: ["صح", "خطأ"], answer: 0 },
    { q: "تستخدم الثوابت النصية في العمليات الحسابية.", options: ["صح", "خطأ"], answer: 1 },
    { q: "من أهمية الثوابت تسهيل قراءة الكود وتقليل الأخطاء.", options: ["صح", "خطأ"], answer: 0 },
    { q: "الثابت \"My Computer\" هو ثابت نصي.", options: ["صح", "خطأ"], answer: 0 },
    { q: "القيمة +55.23 تعتبر ثابتاً كسرى.", options: ["صح", "خطأ"], answer: 0 },
    { q: "الثوابت النصية تستخدم لتمثيل البيانات غير العددية.", options: ["صح", "خطأ"], answer: 0 },
    { q: "الصيغة الأسية تساعد في اختصار الأصفار الكثيرة.", options: ["صح", "خطأ"], answer: 0 },
    { q: "تغيير قيمة الثابت أثناء تشغيل البرنامج يسبب خطأ برمجياً.", options: ["صح", "خطأ"], answer: 0 },
    { q: "العدد -5 يعتبر ثابت صحيح.", options: ["صح", "خطأ"], answer: 0 },
    { q: "هل يمكن أن يحتوي الثابت النصي على أرقام؟", options: ["نعم، كرموز نصية", "لا، أرقام فقط"], answer: 0 },
    { q: "الثابت 0.005 يمكن تمثيله بصيغة أسية.", options: ["صح", "خطأ"], answer: 0 },
    { q: "الثوابت العددية الموجبة لا تحتاج دائماً لعلامة +.", options: ["صح", "خطأ"], answer: 0 },
    { q: "الثابت النصي \"123\" يعامل معاملة الأرقام.", options: ["صح", "خطأ"], answer: 1 },
    { q: "الأسية تستخدم مع الأعداد الكسرية فقط.", options: ["صح", "خطأ"], answer: 1 },
    { q: "الثابت الصحيح لا يحتوي على أي كسور.", options: ["صح", "خطأ"], answer: 0 },
    { q: "علامة الاقتباس ضرورية للثوابت العددية.", options: ["صح", "خطأ"], answer: 1 },
    { q: "المتغير يحجز مساحة في الذاكرة (RAM).", options: ["صح", "خطأ"], answer: 0 },
    { q: "نهاية الاختبار هي الخطوة الأولى للنجاح.", options: ["صح", "خطأ"], answer: 0 }
  ];

  const handleOptionSelect = (idx) => setSelectedOptions({ ...selectedOptions, [currentQuestion]: idx });

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
    return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-purple-400 p-6">
        <div className="bg-white rounded-[3rem] shadow-2xl p-10 text-center max-w-md w-full">
          <h2 className="text-4xl font-black text-purple-600 mb-4">انتهى الاختبار!</h2>
          <p className="text-2xl font-bold text-gray-700 mb-6">درجتك هي: <span className="text-purple-500">{calculateScore()}</span> من {questions.length}</p>
          <button onClick={() => window.location.reload()} className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:bg-purple-700 transition-all">إعادة المحاولة</button>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen flex flex-col items-center bg-purple-400 p-6">
      <div className="max-w-2xl w-full text-center mt-10">
        <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">اختبار الوحدة الأولى</h1>
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 text-right border-b-8 border-purple-200">
          <div className="flex justify-between items-center mb-8">
             <span className="bg-purple-100 text-purple-600 px-5 py-1.5 rounded-full font-black text-sm">سؤال {currentQuestion + 1} من {questions.length}</span>
             <div className="w-1/2 bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full transition-all duration-300" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-10 leading-relaxed">{questions[currentQuestion].q}</h2>

          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-5 border-2 rounded-3xl text-right font-bold transition-all transform active:scale-[0.97] ${selectedOptions[currentQuestion] === index ? "bg-purple-600 border-purple-600 text-white shadow-lg" : "border-purple-50 text-gray-600 hover:bg-purple-50"}`}
              >
                <span className={`inline-block w-8 h-8 rounded-full ml-3 text-center leading-8 ${selectedOptions[currentQuestion] === index ? 'bg-white text-purple-600' : 'bg-purple-100 text-purple-500'}`}>{index + 1}</span>
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between gap-4 mt-12 pt-8 border-t-2 border-purple-50">
            <button onClick={() => setCurrentQuestion(q => Math.max(0, q - 1))} disabled={currentQuestion === 0} className={`px-8 py-4 rounded-2xl font-black transition-all ${currentQuestion === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-purple-600 border-2 border-purple-600'}`}>السابق</button>
            <button onClick={handleNext} className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:bg-purple-700 transition-all">
              {currentQuestion === questions.length - 1 ? "إنهاء الاختبار" : "التالي"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}