"use client";
import { useState } from "react";

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({}); // حفظ الإجابات المختارة
  const [showResult, setShowResult] = useState(false); // إظهار النتيجة النهائية

  const questions = [
    {
      q: "ما هو التعريف الصحيح للثوابت في البرمجة؟",
      options: ["قيم تتغير أثناء التنفيذ", "قيم تبقى ثابتة ولا تتغير أثناء تنفيذ البرنامج", "أماكن محجوزة في الذاكرة تتغير قيمتها", "دوال رياضية فقط"],
      answer: 1,
    },
    {
      q: "أي من القيم التالية يعتبر ثابتاً عدداً صحيحاً (Integer)؟",
      options: ["27.55", "-74.32", "+93", "23E-2"],
      answer: 2,
    },
    {
      q: "الثوابت العددية الكسرية (Real / Decimal) تشمل؟",
      options: ["أعداداً صحيحة فقط", "أعداداً تحتوي على فاصلة عشرية", "نصوصاً فقط", "رموزاً خاصة"],
      answer: 1,
    },
    {
      q: "ماذا تمثل الصيغة الأسية 23E-2؟",
      options: ["23 × 10²", "23 + 2", "23 × 10⁻²", "23 ÷ 2"],
      answer: 2,
    },
    {
      q: "أي من الأمثلة التالية يمثل ثابتاً للسلاسل النصية (String Constants)؟",
      options: ["100", "\"My Computer\"", "A$", "+55.23"],
      answer: 1,
    },
    {
        q: "المتغير في البرمجة يمثل؟",
        options: ["قيمة لا يمكن الوصول إليها", "موقع تخزين في الذاكرة يمكن تغيير قيمته", "أمراً للطباعة فقط", "ثابتاً نصياً دائماً"],
        answer: 1,
    },
    
    ,{
    q: "ما هو الثابت في البرمجة؟",
    options: ["قيمة تتغير", "قيمة ثابتة لا تتغير", "دالة", "متغير"],
    answer: 1,
  },
  {
    q: "أي مما يلي يعتبر عدد صحيح؟",
    options: ["3.5", "10", "2.7", "0.9"],
    answer: 1,
  },
  {
    q: "الثوابت النصية تُكتب بين؟",
    options: ["()", "{}", "'' أو \"\"", "<>"],
    answer: 2,
  },
  {
    q: "أي مما يلي مثال على ثابت نصي؟",
    options: ["100", "A$", "\"Hello\"", "3.5"],
    answer: 2,
  },
  {
    q: "الثابت لا يمكن؟",
    options: ["استخدامه", "تخزينه", "تغييره", "قراءته"],
    answer: 2,
  },
  {
    q: "ما هو المتغير؟",
    options: [
      "قيمة ثابتة",
      "مكان لتخزين قيمة يمكن تغييرها",
      "دالة",
      "أمر",
    ],
    answer: 1,
  },
  {
    q: "أي مما يلي مثال على متغير عددي؟",
    options: ["A$", "B$", "A = 5", "\"Ali\""],
    answer: 2,
  },
  {
    q: "المتغير النصي ينتهي بـ؟",
    options: ["#", "$", "&", "!"],
    answer: 1,
  },
  {
    q: "أي مما يلي يمثل عدد كسري؟",
    options: ["10", "3.14", "A", "\"Text\""],
    answer: 1,
  },
  {
    q: "الثوابت العددية تشمل؟",
    options: ["أعداد فقط", "نصوص فقط", "دوال", "أوامر"],
    answer: 0,
  },
  {
    q: "أي مما يلي مثال على صيغة أسية؟",
    options: ["10", "2.5", "2E3", "\"Hello\""],
    answer: 2,
  },
  {
    q: "23E-2 تعني؟",
    options: ["23 × 10²", "23 × 10⁻²", "23 + 2", "23 - 2"],
    answer: 1,
  },
  {
    q: "المتغير يمكن؟",
    options: ["تغييره", "حذفه فقط", "لا يتغير", "طباعته فقط"],
    answer: 0,
  },
  {
    q: "أي مما يلي متغير نصي؟",
    options: ["A", "B", "C$", "10"],
    answer: 2,
  },
  {
    q: "القيمة داخل المتغير؟",
    options: ["ثابتة", "تتغير", "لا تُستخدم", "محذوفة"],
    answer: 1,
  },
  {
    q: "A = 10 يعني؟",
    options: [
      "طباعة 10",
      "تخزين 10 في A",
      "حذف A",
      "مقارنة",
    ],
    answer: 1,
  },
  {
    q: "أي مما يلي ليس متغير؟",
    options: ["A", "B$", "\"Hello\"", "C"],
    answer: 2,
  },
  {
    q: "الثوابت تُستخدم لـ؟",
    options: ["تغيير القيم", "تثبيت القيم", "حذف القيم", "مقارنة"],
    answer: 1,
  },
  {
    q: "المتغير يمثل؟",
    options: ["ملف", "ذاكرة", "برنامج", "جهاز"],
    answer: 1,
  },
  {
    q: "يمكن للمتغير حمل؟",
    options: ["قيمة واحدة", "قيمتين", "ثلاثة", "لا شيء"],
    answer: 0,
  },
  // --- الدروس: الثوابت (1-40) ---
  { q: "الثوابت هي قيم تبقى ثابتة ولا تتغير أثناء تنفيذ البرنامج.", options: ["صح", "خطأ"], answer: 0 },
  { q: "أي مما يلي يعتبر من الثوابت العددية الصحيحة؟", options: ["27.55", "100", "A$", "23E-2"], answer: 1 },
  { q: "الثابت -5 يعتبر من الثوابت العددية:", options: ["الكسرية", "النصية", "الصحيحة", "الأسية"], answer: 2 },
  { q: "الثوابت العددية الكسرية (Real) تشمل الأعداد التي تحتوي على:", options: ["حروف", "فاصلة عشرية", "علامة $", "علامة #"], answer: 1 },
  { q: "القيمة +93 تعتبر ثابتاً عدداً صحيحاً.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الثابت -74.32 يصنف كـ:", options: ["ثابت نصي", "ثابت عددي كسرى", "ثابت أسي", "متغير"], answer: 1 },
  { q: "تستخدم الثوابت الأسية لتمثيل الأعداد:", options: ["الصغيرة جداً أو الكبيرة جداً", "النصية فقط", "المتغيرة", "الأسماء"], answer: 0 },
  { q: "في الصيغة 23E-2، ماذا يمثل الحرف E؟", options: ["جمع", "طرح", "10 أس", "قسمة"], answer: 2 },
  { q: "الصيغة -2.1E2 تعني رياضياً -2.1 × 10².", options: ["صح", "خطأ"], answer: 0 },
  { q: "الثوابت النصية هي مجموعة حروف أو رموز تكتب بين:", options: ["أقواس ( )", "علامتي اقتباس \" \"", "مربعات [ ]", "نجوم * *"], answer: 1 },
  { q: "تستخدم الثوابت النصية في العمليات الحسابية.", options: ["صح", "خطأ"], answer: 1 },
  { q: "أي مثال مما يلي يعتبر ثابتاً نصياً صحيحاً؟", options: ["100", "A = 5", "\"Hello\"", "23E-2"], answer: 2 },
  { q: "الثابت \"My Computer\" هو ثابت نصي.", options: ["صح", "خطأ"], answer: 0 },
  { q: "من أهمية الثوابت تسهيل قراءة الكود وتقليل الأخطاء.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الثوابت تساعد في تثبيت القيم المهمة داخل البرنامج.", options: ["صح", "خطأ"], answer: 0 },
  { q: "القيمة +55.23 تعتبر ثابتاً كسرى.", options: ["صح", "خطأ"], answer: 0 },
  { q: "أي مما يلي ليس من أنواع الثوابت؟", options: ["عددي", "نصي", "أسي", "متحرك"], answer: 3 },
  { q: "الثوابت النصية تستخدم لتمثيل البيانات غير العددية.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الصيغة الأسية تساعد في اختصار الأصفار الكثيرة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "تغيير قيمة الثابت أثناء تشغيل البرنامج يسبب خطأ برمجياً.", options: ["صح", "خطأ"], answer: 0 },
  // (هنا تكرار الأنماط السابقة مع تغيير الأرقام والقيم لضمان الفهم الشامل)
  { q: "العدد -5 يعتبر ثابت صحيح.", options: ["صح", "خطأ"], answer: 0 },
  { q: "هل يمكن أن يحتوي الثابت النصي على أرقام؟", options: ["نعم، كرموز نصية", "لا، أرقام فقط"], answer: 0 },
  { q: "الثابت 0.005 يمكن تمثيله بصيغة أسية.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الثوابت العددية الموجبة لا تحتاج دائماً لعلامة +.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الهدف من درس الثوابت هو تمييز أنواع البيانات الثابتة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الثابت النصي \"123\" يعامل معاملة الأرقام.", options: ["صح", "خطأ"], answer: 1 },
  { q: "الأسية تستخدم مع الأعداد الكسرية فقط.", options: ["صح", "خطأ"], answer: 1 },
  { q: "الثابت الصحيح لا يحتوي على أي كسور.", options: ["صح", "خطأ"], answer: 0 },
  { q: "كلمة constants تعني الثوابت.", options: ["صح", "خطأ"], answer: 0 },
  { q: "علامة الاقتباس ضرورية للثوابت العددية.", options: ["صح", "خطأ"], answer: 1 },

  // --- الدروس: المتغيرات (41-80) ---
  { q: "المتغير هو مكان في الذاكرة يستخدم لتخزين قيمة يمكن تغييرها.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغيرات العددية تستخدم لتخزين القيم:", options: ["النصية", "العددية فقط", "الصور", "الملفات"], answer: 1 },
  { q: "شكل اسم المتغير العددي قد يكون حرف واحد مثل A.", options: ["صح", "خطأ"], answer: 0 },
  { q: "هل الاسم E5 يعتبر اسماً صحيحاً لمتغير عددي؟", options: ["نعم", "لا"], answer: 0 },
  { q: "في الجملة A = 15، القيمة المخزنة هي:", options: ["A", "15", "=", "لا شيء"], answer: 1 },
  { q: "المتغيرات النصية (String Variables) تستخدم لتخزين:", options: ["الأرقام فقط", "النصوص والكلمات", "العمليات الحسابية", "التاريخ"], answer: 1 },
  { q: "يجب أن ينتهي اسم المتغير النصي دائماً بالعلامة:", options: ["#", "$", "%", "&"], answer: 1 },
  { q: "أي مما يلي اسم متغير نصي صحيح؟", options: ["A", "5B", "C$", "A+B"], answer: 2 },
  { q: "المثال A$ = \"ALI\" يعني تخزين النص ALI داخل المتغير A$.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغير يمثل موقع تخزين في الذاكرة (RAM).", options: ["صح", "خطأ"], answer: 0 },
  { q: "من خصائص المتغير أنه يأخذ قيمة واحدة فقط في كل مرة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "عند تخزين قيمة جديدة في المتغير، فإنها تمسح القيمة القديمة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "يمكن تغيير قيمة المتغير أثناء تنفيذ البرنامج.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغير N3 يعتبر متغيراً:", options: ["نصياً", "عددياً", "أسباً", "ثابتاً"], answer: 1 },
  { q: "المتغير B$9 يعتبر متغيراً نصياً صحيحاً.", options: ["صح", "خطأ"], answer: 0 },
  { q: "حرف متبوع بالرمز $ هو قاعدة تسمية المتغير:", options: ["العددي", "النصي", "الصحيح", "الأسي"], answer: 1 },
  { q: "العملية الحسابية تتم على المتغيرات النصية.", options: ["صح", "خطأ"], answer: 1 },
  { q: "المتغير يمثل موقع ثابت لا يتغير في الذاكرة.", options: ["صح (الموقع ثابت والقيمة متغيرة)", "خطأ"], answer: 0 },
  { q: "هل يمكن تسمية متغير بـ 5A؟", options: ["نعم", "لا (يجب أن يبدأ بحرف)"], answer: 1 },
  { q: "الغرض من المتغيرات هو جعل البرنامج تفاعلياً.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغير Z$3 نوعه نصي.", options: ["صح", "خطأ"], answer: 0 },
  { q: "القيمة التي تلي علامة = في جملة التخصيص هي التي تخزن.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغيرات تساعد في تنظيم البيانات داخل الذاكرة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الاسم H$ يعتبر متغيراً نصياً.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغير يحجز مساحة مؤقتة في الذاكرة.", options: ["صح", "خطأ"], answer: 0 },

  // --- مراجعة شاملة ومقارنات (81-100) ---
  { q: "الفرق بين الثابت والمتغير هو إمكانية تغيير القيمة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الثابت \"15\" يختلف عن المتغير A = 15.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الذاكرة تفقد محتويات المتغيرات عند إغلاق البرنامج.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الرمز $ ضروري لتمييز المتغير النصي.", options: ["صح", "خطأ"], answer: 0 },
  { q: "ثوابت السلاسل النصية لا تدخل في الحسابات.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغير العددي يمكنه تخزين حروف.", options: ["صح", "خطأ"], answer: 1 },
  { q: "كل متغير له اسم ونوع وقيمة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "يمكن للثابت أن يكون قيمة عددية سالبة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الصيغة الأسية تستخدم للثوابت فقط.", options: ["صح", "خطأ"], answer: 1 },
  { q: "جملة التخصيص تستخدم للمتغيرات.", options: ["صح", "خطأ"], answer: 0 },
  { q: "يسمى المتغير في البرمجة Variable.", options: ["صح", "خطأ"], answer: 0 },
  { q: "يسمى الثابت في البرمجة Constant.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الاسم A$9 اسم متغير نصي.", options: ["صح", "خطأ"], answer: 0 },
  { q: "القيمة \"55\" هي ثابت نصي.", options: ["صح", "خطأ"], answer: 0 },
  { q: "القيمة 55 هي ثابت عددي.", options: ["صح", "خطأ"], answer: 0 },
  { q: "تستخدم الفواصل العشرية في الثوابت الصحيحة.", options: ["صح", "خطأ"], answer: 1 },
  { q: "الثوابت تزيد من دقة البرنامج.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغيرات النصية يمكنها تخزين كلمات طويلة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "لا يمكن أن يبدأ اسم المتغير برقم.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الكمبيوتر يفرق بين A و A$ في النوع.", options: ["صح", "خطأ"], answer: 0 },
  { q: "الثوابت والأسماء هي أساس بناء أي برنامج.", options: ["صح", "خطأ"], answer: 0 },
  { q: "القيمة 23E-2 تساوي 0.23.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المتغير A يشغل مكاناً في الذاكرة.", options: ["صح", "خطأ"], answer: 0 },
  { q: "نستخدم علامة التنصيص مع المتغيرات النصية عند التخصيص.", options: ["صح", "خطأ"], answer: 0 },
  { q: "المنصة التعليمية تساعدك في فهم هذه المفاهيم.", options: ["صح", "خطأ"], answer: 0 }




];







  // وظيفة اختيار الإجابة
  const handleOptionSelect = (optionIndex) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true); // إظهار النتيجة عند نهاية الأسئلة
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // حساب الدرجة النهائية
  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedOptions[index] === q.answer) {
        score++;
      }
    });
    return score;
  };

  if (showResult) {
    return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-purple-400 p-6">
        <div className="bg-white rounded-[3rem] shadow-2xl p-10 text-center max-w-md w-full">
          <h2 className="text-4xl font-black text-purple-600 mb-4">انتهى الاختبار!</h2>
          <p className="text-2xl font-bold text-gray-700 mb-6">
            درجتك هي: <span className="text-purple-500">{calculateScore()}</span> من {questions.length}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:bg-purple-700 transition-all"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen flex flex-col items-center bg-purple-400 p-6">
      <div className="max-w-2xl w-full text-center mt-10">
        
        <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">
          اختبار الوحدة الأولى
        </h1>

        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 text-right border-b-8 border-purple-200">
          <div className="flex justify-between items-center mb-8">
             <span className="bg-purple-100 text-purple-600 px-5 py-1.5 rounded-full font-black text-sm">
               سؤال {currentQuestion + 1} من {questions.length}
             </span>
             <div className="w-1/2 bg-gray-100 h-2 rounded-full overflow-hidden">
                <div 
                    className="bg-purple-500 h-full transition-all duration-300" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-10 leading-relaxed">
            {questions[currentQuestion].q}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedOptions[currentQuestion] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full p-5 border-2 rounded-3xl text-right font-bold transition-all transform active:scale-[0.97] ${
                    isSelected 
                    ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-100" 
                    : "border-purple-50 text-gray-600 hover:bg-purple-50 hover:border-purple-200"
                  }`}
                >
                  <span className={`inline-block w-8 h-8 rounded-full ml-3 text-center leading-8 ${isSelected ? 'bg-white text-purple-600' : 'bg-purple-100 text-purple-500'}`}>
                    {index + 1}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between gap-4 mt-12 pt-8 border-t-2 border-purple-50">
            <button 
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={`px-8 py-4 rounded-2xl font-black transition-all ${currentQuestion === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'}`}
            >
              السابق
            </button>
            <button 
              onClick={handleNext}
              className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:bg-purple-700 transition-all"
            >
              {currentQuestion === questions.length - 1 ? "إنهاء الاختبار" : "التالي"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}