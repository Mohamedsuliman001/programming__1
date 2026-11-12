import { Question } from '../types/quiz';

export const QUESTIONS_BANK: Question[] = [
  // ==================== Part 1: True / False Questions (1 - 50) ====================
  {
    id: 1,
    type: 'tf',
    topic: 'escape',
    question: 'للتقدم 7 مسافات أفقية (جدولة أفقية) قبل الطباعة نستخدم الرمز `\\t`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الرمز `\\t` يمثل Horizontal Tab ويقوم بإزاحة المؤشر أفقياً.'
  },
  {
    id: 2,
    type: 'tf',
    topic: 'escape',
    question: 'للقفز إلى سطر جديد أثناء الطباعة نستخدم الرمز `\\b`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'للقفز لسطر جديد نستخدم `\\n` أو `endl`، بينما `\\b` يستخدم لمسافة إلى الخلف (Backspace).'
  },
  {
    id: 3,
    type: 'tf',
    topic: 'escape',
    question: 'لطباعة علامة الاستفهام أو الفاصلة المنقوطة نستخدم الرمز `\\0`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'الرمز `\\0` يمثل حرف النهاية الصفري (Null character) وليس علامة ترقيم.'
  },
  {
    id: 4,
    type: 'tf',
    topic: 'escape',
    question: 'لطباعة علامة التنصيص المزدوجة `"` داخل جملة الطباعة نستخدم الرمز `\\"`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'تُستخدم الشرطة المائلة العكسية قبل علامة التنصيص `\\"` لطباعتها كنص.'
  },
  {
    id: 5,
    type: 'tf',
    topic: 'escape',
    question: "لطباعة علامة التنصيص المفردة `'` داخل النص نستخدم الرمز `\\'`.",
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: "الرمز `\\'` يسمح بطباعة علامة التنصيص المفردة دون إنهاء الحرف النصي."
  },
  {
    id: 6,
    type: 'tf',
    topic: 'escape',
    question: 'للانتقال إلى صفحة جديدة عند الطباعة نستخدم الرمز `\\f`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الرمز `\\f` يمثل Form Feed أي الانتقال لصفحة جديدة.'
  },
  {
    id: 7,
    type: 'tf',
    topic: 'escape',
    question: 'لإصدار صوت تنبيه (استخدام الجرس) من الحاسوب نستخدم الرمز `\\a`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الرمز `\\a` يمثل Alert/Bell ويصدر صوت تنبيه.'
  },
  {
    id: 8,
    type: 'tf',
    topic: 'escape',
    question: 'للرجوع مسافة واحدة إلى الخلف (Backspace) نستخدم الرمز `\\b`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الرمز `\\b` يرجع بالمؤشر خطوة واحدة للخلف.'
  },
  {
    id: 9,
    type: 'tf',
    topic: 'escape',
    question: 'لطباعة الشرطة المائلة العكسية `\\` نفسها داخل جملة `cout` نستخدم الرمز `\\\\`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'كتابة `\\\\` تطبع شرطة عكسية واحدة على الشاشة.'
  },
  {
    id: 10,
    type: 'tf',
    topic: 'escape',
    question: 'الرمز `\\r` يقوم بإرجاع المؤشر إلى بداية السطر الحالي (Carriage Return).',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: '`\\r` يعيد المؤشر لأول السطر الحالي دون النزول لسطر جديد.'
  },
  {
    id: 11,
    type: 'tf',
    topic: 'identifiers',
    question: 'المعرف `Button11` يعتبر معرفاً مقبولاً وصحيحاً في لغة C++.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'يبدأ بحرف أبجدي ويحتوي على حروف وأرقام فقط دون مسافات.'
  },
  {
    id: 12,
    type: 'tf',
    topic: 'identifiers',
    question: 'المعرف `5ykl` يعتبر معرفاً مقبولاً لتسمية متغير في لغة C++.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'غير مقبول لأنه يبدأ برقم، ويشترط أن يبدأ المعرف بحرف أو شرطة سفلية `_`.'
  },
  {
    id: 13,
    type: 'tf',
    topic: 'identifiers',
    question: 'المعرف `name b` يعتبر معرفاً غير مقبول لوجود مسافة فارغة بين الكلمتين.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'لا يُسمح بوجود مسافات فارغة داخل اسم المتغير.'
  },
  {
    id: 14,
    type: 'tf',
    topic: 'identifiers',
    question: 'المعرف `_duoble` يعتبر معرفاً مقبولاً في لغة C++.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'يبدأ بشرطة سفلية `_`، وحتى لو شابه كلمة `double` فهو مختلف إملائياً وليس كلمة محجوزة.'
  },
  {
    id: 15,
    type: 'tf',
    topic: 'identifiers',
    question: 'الكلمة `float` يمكن استخدامها كاسم لمتغير (معرف مقبول) في البرنامج.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'غير مقبول لأن `float` كلمة محجوزة (Reserved Word) لتعريف الأعداد الكسرية.'
  },
  {
    id: 16,
    type: 'tf',
    topic: 'identifiers',
    question: 'المعرف `sum` يعتبر معرفاً مقبولاً لتسمية متغير في لغة C++.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'كلمة `sum` ليست محجوزة في C++ وتتبع قواعد التسمية الصحيحة.'
  },
  {
    id: 17,
    type: 'tf',
    topic: 'identifiers',
    question: 'المعرف `total_name` يعتبر معرفاً مقبولاً في لغة C++.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الشرطة السفلية `_` هي الرمز الخاص الوحيد المسموح به في تسمية المتغيرات.'
  },
  {
    id: 18,
    type: 'tf',
    topic: 'identifiers',
    question: 'المعرف `first-name` يعتبر معرفاً مقبولاً في لغة C++.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'غير مقبول لاحتوائه على علامة الناقص `-` (تُفسر كعملية طرح).'
  },
  {
    id: 19,
    type: 'tf',
    topic: 'identifiers',
    question: 'لغة C++ حساسة لحالة الأحرف (Case Sensitive)، لذلك المتغير `Z` يختلف عن المتغير `z`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الحروف الكبيرة والصغيرة تعتبر رموزاً مختلفة تماماً في C++.'
  },
  {
    id: 20,
    type: 'tf',
    topic: 'identifiers',
    question: 'الجملة `using namespace std;` تسمح باستخدام عناصر المكتبة القياسية مثل `cout` و `cin` مباشرة دون كتابة `std::` قبلها.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'هي تستدعي نطاق الأسماء القياسي لتسهيل كتابة أوامر الإدخال والإخراج.'
  },
  {
    id: 21,
    type: 'tf',
    topic: 'operators',
    question: 'الدالة `sqrt(x)` تُستخدم لحساب الجذر التربيعي للعدد `x` وتتطلب تضمين مكتبة `<cmath>` أو `<math.h>`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'دالة `sqrt` تحسب الجذر التربيعي وتوجد في مكتبة الرياضيات.'
  },
  {
    id: 22,
    type: 'tf',
    topic: 'identifiers',
    question: 'النوع `float` يُستخدم لتعريف المتغيرات التي تخزن الأعداد الصحيحة فقط بدون كسور.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'النوع `float` يُستخدم للأعداد الحقيقية (العشرية/الكسرية)، بينما `int` للأعداد الصحيحة.'
  },
  {
    id: 23,
    type: 'tf',
    topic: 'identifiers',
    question: 'الأمر `cin` يُستخدم لإخراج وطباعة البيانات على شاشة التنفيذ.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'الأمر `cin` للإدخال من لوحة المفاتيح، و `cout` للإخراج والطباعة.'
  },
  {
    id: 24,
    type: 'tf',
    topic: 'identifiers',
    question: 'مع الأمر `cout` نستخدم معامل الإخراج `<<` بينما مع الأمر `cin` نستخدم معامل الإدخال `>>`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: '`cout <<` يوجه البيانات للشاشة، و `cin >>` يأخذ البيانات إلى المتغير.'
  },
  {
    id: 25,
    type: 'tf',
    topic: 'identifiers',
    question: 'كتابة الجملة `cout >> a;` هي صيغة صحيحة لطباعة قيمة المتغير `a`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'اتجاه الأسهم خاطئ؛ الصحيح هو `cout << a;`.'
  },
  {
    id: 26,
    type: 'tf',
    topic: 'identifiers',
    question: 'لتعريف متغير نصي يحمل الاسم أو الجنسية نستخدم النوع `string` مع تضمين مكتبة `<string>`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'النوع `string` مخصص للسلاسل النصية.'
  },
  {
    id: 27,
    type: 'tf',
    topic: 'identifiers',
    question: 'تنتهي معظم الجمل البرمجية التنفيذية في لغة C++ بفاصلة منقوطة `;` (Semicolon).',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الفاصلة المنقوطة تُعلم المترجم بنهاية التعليمة البرمجية.'
  },
  {
    id: 28,
    type: 'tf',
    topic: 'identifiers',
    question: 'الدالة `int main()` هي نقطة البداية الأساسية لتنفيذ أي برنامج مكتوب بلغة C++.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'يبدأ تنفيذ البرنامج دائماً من دالة `main`.'
  },
  {
    id: 29,
    type: 'tf',
    topic: 'operators',
    question: 'المعامل `%` (باقي القسمة) يمكن استخدامه مع الأعداد العشرية `float` والأعداد الصحيحة `int` على حد سواء.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'معامل باقي القسمة `%` يعمل مع الأعداد الصحيحة فقط.'
  },
  {
    id: 30,
    type: 'tf',
    topic: 'operators',
    question: 'ناتج العملية الحسابية `10 / 4` عندما يكون العددان من نوع `int` هو `2` وليس `2.5`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'قسمة عدد صحيح على عدد صحيح في C++ تعطي الجزء الصحيح فقط وتهمل الكسر.'
  },
  {
    id: 31,
    type: 'tf',
    topic: 'operators',
    question: 'في التعبير `k = y++;` يتم إسناد قيمة `y` الحالية إلى `k` أولاً، ثم تزداد قيمة `y` بمقدار 1.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'لأن الزيادة هنا بعدية (Post-increment).'
  },
  {
    id: 32,
    type: 'tf',
    topic: 'operators',
    question: 'في التعبير `t = ++z;` يتم زيادة قيمة `z` بمقدار 1 أولاً، ثم تُسند القيمة الجديدة إلى `t`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'لأن الزيادة هنا قبلية (Pre-increment).'
  },
  {
    id: 33,
    type: 'tf',
    topic: 'operators',
    question: 'إذا كانت `x = 6` فإن تنفيذ الجملة `--x;` يجعل قيمة `x` تساوي `7`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'المعامل `--` ينقص القيمة بمقدار 1 فتصبح `5`.'
  },
  {
    id: 34,
    type: 'tf',
    topic: 'operators',
    question: 'التعبير `a += 6;` يكافئ تماماً التعبير `a = a + 6;`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'كلاهما يضيف 6 إلى القيمة الحالية للمتغير `a`.'
  },
  {
    id: 35,
    type: 'tf',
    topic: 'conditions',
    question: 'للمقارنة بين قيمتين إذا كانتا متساويتين داخل شرط `if` نستخدم علامة يساوي واحدة `=`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'نستخدم `==` للمقارنة، بينما `=` تستخدم للإسناد (التخزين).'
  },
  {
    id: 36,
    type: 'tf',
    topic: 'conditions',
    question: 'في لغة C++، كتابة الكلمة المحجوزة `If` بحرف `I` كبير تعتبر صحيحة برمجياً وتعمل بدون أخطاء.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'الكلمات المحجوزة في C++ يجب أن تُكتب بأحرف صغيرة `if`.'
  },
  {
    id: 37,
    type: 'tf',
    topic: 'conditions',
    question: 'المؤثر المنطقي `AND` يُكتب في لغة C++ على شكل الرمز `&&`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الرمز `&&` يمثل الرابط المنطقي AND.'
  },
  {
    id: 38,
    type: 'tf',
    topic: 'conditions',
    question: 'الشرط المركب باستخدام `&&` يكون صحيحاً (True) فقط إذا كان كلا الشرطين صحيحين معاً.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'معامل `&&` يشترط تحقق جميع الأطراف.'
  },
  {
    id: 39,
    type: 'tf',
    topic: 'conditions',
    question: 'المؤثر المنطقي `OR` يُكتب في لغة C++ على شكل الرمز `||` ويكتفي بتحقق أحد الشرطين ليكون الناتج صحيحاً.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'معامل `||` يعطي True إذا تحقق شرط واحد على الأقل.'
  },
  {
    id: 40,
    type: 'tf',
    topic: 'conditions',
    question: 'المعامل `!=` يُستخدم لاختبار "عدم المساواة" (لا يساوي) بين قيمتين.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: '`x != y` تعني هل `x` لا تساوي `y`.'
  },
  {
    id: 41,
    type: 'tf',
    topic: 'conditions',
    question: 'لاختبار ما إذا كان العدد الصحيح `b` عدداً فردياً نستخدم الشرط `if (b % 2 == 1)` (للأعداد الموجبة).',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'العدد الفردي الموجب باقي قسمته على 2 يساوي 1.'
  },
  {
    id: 42,
    type: 'tf',
    topic: 'conditions',
    question: 'إذا كانت قيمة `b = 32`، فإن الشرط `if (b % 2 == 1)` يكون ناتجه صحيحاً (True).',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'العدد 32 زوجي، وباقي قسمته على 2 هو 0 وليس 1.'
  },
  {
    id: 43,
    type: 'tf',
    topic: 'conditions',
    question: 'إذا كان هناك أكثر من جملة برمجية واحدة تابعة لجملة `if`، فيجب وضعها داخل أقواس متعرجة `{ }`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'بدون `{ }` تنفذ `if` أول جملة تليها فقط.'
  },
  {
    id: 44,
    type: 'tf',
    topic: 'conditions',
    question: 'وضع فاصلة منقوطة `;` مباشرة بعد قوس الشرط `if (x > 5);` يؤدي إلى فصل الشرط عن الجملة التي تليه.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الفاصلة المنقوطة تنهي جملة `if` كجملة فارغة، فتنفذ الجملة التالية دائماً.'
  },
  {
    id: 45,
    type: 'tf',
    topic: 'conditions',
    question: 'لاختبار ما إذا كان العدد المدخل موجباً نستخدم الشرط `if (num > 0)`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الأعداد الأكبر من الصفر هي الأعداد الموجبة (Positive).'
  },
  {
    id: 46,
    type: 'tf',
    topic: 'operators',
    question: 'في الأولويات الحسابية، عملية الضرب `*` تنفذ قبل عملية الجمع `+` ما لم توجد أقواس `()`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'الضرب والقسمة وباقي القسمة لها أولوية أعلى من الجمع والطرح.'
  },
  {
    id: 47,
    type: 'tf',
    topic: 'operators',
    question: 'للتعبير عن المعادلة الجبرية `x` مضروبة في `y` في لغة C++ يكفي كتابة `xy` بدون علامة `*`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'يجب كتابة `x * y`، لأن `xy` تُفسر كاسم متغير واحد.'
  },
  {
    id: 48,
    type: 'tf',
    topic: 'operators',
    question: 'الدالة `pow(x, 2)` تُستخدم لحساب مربع العدد `x` (أي x²).',
    options: ['صح', 'خطأ'],
    correctAnswer: 'صح',
    explanation: 'دالة `pow(base, exp)` ترفع الأساس للأس المحدد.'
  },
  {
    id: 49,
    type: 'tf',
    topic: 'conditions',
    question: 'جملة `else` يمكن أن تأتي منفردة في البرنامج دون وجود جملة `if` تسبقها.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'جملة `else` تتبع دائماً جملة `if` ولا يمكن كتابتها بمفردها.'
  },
  {
    id: 50,
    type: 'tf',
    topic: 'conditions',
    question: 'إذا كانت `x = 3` و `y = 6`، فإن الشرط `if (x > 4 && y > x)` يتحقق وينفذ جملة `if`.',
    options: ['صح', 'خطأ'],
    correctAnswer: 'خطأ',
    explanation: 'لأن الشق الأول `x > 4` خاطئ (3 ليست أكبر من 4)، ومع `&&` يفشل الشرط الكلي وينتقل إلى `else`.'
  },

  // ==================== Part 2: Multiple Choice Questions (51 - 100) ====================
  {
    id: 51,
    type: 'mcq',
    topic: 'escape',
    question: 'أي من رموز الهروب التالية يُستخدم للقفز إلى سطر جديد؟',
    options: ['\\t', '\\n', '\\b', '\\a'],
    correctAnswer: '\\n',
    explanation: 'الرمز `\\n` يمثل New Line.'
  },
  {
    id: 52,
    type: 'mcq',
    topic: 'escape',
    question: 'ما هو الرمز المستخدم للتقدم 7 مسافات أفقية (Tab) قبل الطباعة؟',
    options: ['\\f', '\\t', '\\r', '\\v'],
    correctAnswer: '\\t',
    explanation: 'الرمز `\\t` يقوم بعمل إزاحة أفقية.'
  },
  {
    id: 53,
    type: 'mcq',
    topic: 'identifiers',
    question: 'أي من المعرفات التالية يعتبر معرفاً غير مقبول في لغة C++؟',
    options: ['Button11', '_duoble', '5ykl', 'sum'],
    correctAnswer: '5ykl',
    explanation: 'لأنه يبدأ برقم، والمعرفات لا يمكن أن تبدأ بأرقام.'
  },
  {
    id: 54,
    type: 'mcq',
    topic: 'identifiers',
    question: 'لماذا يعتبر المعرف `name b` غير مقبول في لغة C++؟',
    options: [
      'لأنه يبدأ بحرف صغير',
      'لوجود مسافة فارغة داخله',
      'لأنه كلمة محجوزة',
      'لأنه قصير جداً'
    ],
    correctAnswer: 'لوجود مسافة فارغة داخله',
    explanation: 'المسافات غير مسموحة في أسماء المتغيرات.'
  },
  {
    id: 55,
    type: 'mcq',
    topic: 'identifiers',
    question: 'لماذا لا يمكن تسمية متغير بالاسم `float`؟',
    options: [
      'لأنه يحتوي على أرقام',
      'لأنه كلمة محجوزة في اللغة',
      'لأنه يبدأ بحرف كبير',
      'لوجود رمز خاص'
    ],
    correctAnswer: 'لأنه كلمة محجوزة في اللغة',
    explanation: '`float` كلمة محجوزة لتعريف الأعداد الحقيقية.'
  },
  {
    id: 56,
    type: 'mcq',
    topic: 'identifiers',
    question: 'أي من المعرفات التالية يعتبر صحيحاً ومقبولاً في لغة C++؟',
    options: ['int', 'total name', 'total_name', '2total'],
    correctAnswer: 'total_name',
    explanation: 'يحتوي على حروف وشرطة سفلية فقط ولا يبدأ برقم.'
  },
  {
    id: 57,
    type: 'mcq',
    topic: 'operators',
    question: 'ما وظيفة الدالة `sqrt(x)` في لغة C++؟',
    options: [
      'تربيع العدد x',
      'حساب الجذر التربيعي للعدد x',
      'حساب القيمة المطلقة للعدد x',
      'تقريب العدد x'
    ],
    correctAnswer: 'حساب الجذر التربيعي للعدد x',
    explanation: '`sqrt` هي اختصار Square Root.'
  },
  {
    id: 58,
    type: 'mcq',
    topic: 'operators',
    question: 'أي مكتبة يجب تضمينها لاستخدام الدوال الرياضية مثل `sqrt` و `pow`؟',
    options: ['<iostream>', '<string>', '<cmath>', '<iomanip>'],
    correctAnswer: '<cmath>',
    explanation: 'مكتبة `<cmath>` (أو `<math.h>`) تحتوي على الدوال الرياضية.'
  },
  {
    id: 59,
    type: 'mcq',
    topic: 'identifiers',
    question: 'ما وظيفة الكلمة المحجوزة `float`؟',
    options: [
      'تعريف متغير نصي',
      'تعريف متغير لعدد صحيح',
      'تعريف متغير لعدد عشري (كسري)',
      'تعريف حرف واحد فقط'
    ],
    correctAnswer: 'تعريف متغير لعدد عشري (كسري)',
    explanation: '`float` مخصصة للأعداد ذات الفاصلة العشرية.'
  },
  {
    id: 60,
    type: 'mcq',
    topic: 'identifiers',
    question: 'لإدخال ثلاثة أعداد في المتغيرات `a, b, c` باستخدام جملة إدخال واحدة نكتب:',
    options: [
      'cin << a << b << c;',
      'cin >> a >> b >> c;',
      'cout >> a >> b >> c;',
      'cin >> a, b, c;'
    ],
    correctAnswer: 'cin >> a >> b >> c;',
    explanation: 'معامل الإدخال مع `cin` هو `>>`.'
  },
  {
    id: 61,
    type: 'mcq',
    topic: 'conditions',
    question: 'ما هو ناتج تنفيذ الكود التالي؟',
    code: `int x = 3, y = 6, z;
if (x > 4 && y > x)
    z = ++y + x;
else
    z = x * y;
cout << "z=" << z;`,
    options: ['z=10', 'z=18', 'z=9', 'z=21'],
    correctAnswer: 'z=18',
    explanation: 'الشرط `x > 4` خاطئ لأن `x=3`، فينتقل إلى `else` ويحسب `z = 3 * 6 = 18`.'
  },
  {
    id: 62,
    type: 'mcq',
    topic: 'conditions',
    question: 'في نفس الكود السابق، لو كان الشرط `if (x < 4 && y > x)`، فما هي قيمة `z` التي ستُطبع؟',
    code: `int x = 3, y = 6, z;
if (x < 4 && y > x)
    z = ++y + x;
else
    z = x * y;
cout << "z=" << z;`,
    options: ['z=9', 'z=10', 'z=18', 'z=21'],
    correctAnswer: 'z=10',
    explanation: 'الشرط صحيح، فتزداد `y` أولاً لتصبح 7، ثم `z = 7 + 3 = 10`.'
  },
  {
    id: 63,
    type: 'mcq',
    topic: 'operators',
    question: 'تتبع البرنامج التالي: ما هو السطر الأول الذي سيُطبع على الشاشة؟',
    code: `int x = 6, y = 5, z = 4;
int w = --x + y;
cout << w << "\\t" << x << endl;`,
    options: ['11\\t6', '10\\t5', '11\\t5', '10\\t6'],
    correctAnswer: '10\\t5',
    explanation: '`--x` تنقص `x` أولاً فتصبح `5`، ثم `w = 5 + 5 = 10`، فيطبع `10` ثم مسافة جدولة ثم `5`.'
  },
  {
    id: 64,
    type: 'mcq',
    topic: 'operators',
    question: 'بناءً على الكود التالي، ما هي قيم `k` و `y` التي ستُطبع؟',
    code: `int y = 5;
int k = y++;
cout << k << "\\t" << y << endl;`,
    options: ['5\\t6', '6\\t6', '5\\t5', '6\\t5'],
    correctAnswer: '5\\t6',
    explanation: '`k` تأخذ قيمة `y` قبل الزيادة (`5`)، ثم تزداد `y` لتصبح (`6`).'
  },
  {
    id: 65,
    type: 'mcq',
    topic: 'operators',
    question: 'بناءً على الكود التالي، ما هي قيم `t` و `z` التي ستُطبع؟',
    code: `int z = 4;
int t = ++z;
cout << t << "\\t" << z;`,
    options: ['4\\t5', '5\\t5', '4\\t4', '5\\t4'],
    correctAnswer: '5\\t5',
    explanation: '`++z` تزيد `z` أولاً لتصبح `5`، ثم تسندها إلى `t` فتصبح `5` أيضاً.'
  },
  {
    id: 66,
    type: 'mcq',
    topic: 'operators',
    question: 'إذا أردنا كتابة المعادلة الجبرية b = 4.5(x + 2.3y)² / (z + w) بلغة C++، فأي الصيغ التالية صحيحة؟',
    options: [
      'b = 4.5 * pow(x + 2.3 * y, 2) / (z + w);',
      'b = 4.5(x + 2.3y)^2 / z + w;',
      'b = 4.5 * (x + 2.3 * y) * 2 / (z + w);',
      'b = 4.5 * sqrt(x + 2.3 * y) / (z + w);'
    ],
    correctAnswer: 'b = 4.5 * pow(x + 2.3 * y, 2) / (z + w);',
    explanation: 'يجب وضع علامة الضرب `*` واستخدام `pow(..., 2)` للتربيع ووضع المقام `(z + w)` بين قوسين.'
  },
  {
    id: 67,
    type: 'mcq',
    topic: 'operators',
    question: 'في المعادلة `b = 10 / (z + w)`، ماذا يحدث لو كتبناها `b = 10 / z + w` بدون أقواس؟',
    options: [
      'تعطي نفس النتيجة تماماً',
      'يقسم 10 على z فقط ثم يجمع الناتج مع w',
      'يجمع z مع w أولاً ثم يقسم',
      'يعطي خطأ برمجي ولا يعمل'
    ],
    correctAnswer: 'يقسم 10 على z فقط ثم يجمع الناتج مع w',
    explanation: 'لأن أولوية القسمة `/` أعلى من الجمع `+`.'
  },
  {
    id: 68,
    type: 'mcq',
    topic: 'conditions',
    question: 'أي مما يلي هو الشرط الصحيح لطباعة العدد الأكبر `a` من بين ثلاثة أعداد `a, b, c` باستخدام المؤثر المنطقي `AND`؟',
    options: [
      'if (a >= b && a >= c)',
      'if (a >= b || a >= c)',
      'if (a > b > c)',
      'if (a = b && a = c)'
    ],
    correctAnswer: 'if (a >= b && a >= c)',
    explanation: 'يجب أن يكون `a` أكبر من أو يساوي `b` و `c` معاً باستخدام `&&`.'
  },
  {
    id: 69,
    type: 'mcq',
    topic: 'conditions',
    question: 'تتبع البرنامج التالي عندما تكون القيم الأولية `a = 50, b = 32, c = 10`: هل يتحقق الشرط الأول `if (b % 2 == 1)`؟',
    code: `int a = 50, b = 32, c = 10;
if (b % 2 == 1) {
    a = a + 6;
    b = b + 4;
}
cout << "a=" << a << " b=" << b;`,
    options: [
      'لا يتحقق وتبقى a=50 b=32',
      'يتحقق وتصبح a=56 b=36',
      'يتحقق وتصبح a=50 b=36',
      'يعطي خطأ في القسمة'
    ],
    correctAnswer: 'لا يتحقق وتبقى a=50 b=32',
    explanation: 'لأن `32 % 2` يساوي `0` وليس `1`، فلا يدخل لتنفيذ بلوك `if`.'
  },
  {
    id: 70,
    type: 'mcq',
    topic: 'conditions',
    question: 'تتبع الكود التالي بعناية عندما تكون `a = 50, b = 32, c = 10`:',
    code: `int a = 50, b = 32, c = 10;
if (a / 2 == 25) {
    c--;
    b--;
    a++;
    a = a + 3;
    b = b + 2;
}
cout << "a=" << a << " b=" << b;`,
    options: ['a=54 b=33', 'a=50 b=32', 'a=53 b=34', 'a=54 b=31'],
    correctAnswer: 'a=54 b=33',
    explanation: 'الشرط `50 / 2 == 25` صحيح؛ `b` تنقص لـ 31 ثم تزيد 2 فتصبح `33`، و `a` تزيد لـ 51 ثم تزيد 3 فتصبح `54`.'
  },
  {
    id: 71,
    type: 'mcq',
    topic: 'conditions',
    question: 'في نفس الكود السابق، لو كان الشرط `if (a / 2 == 1)` عندما `a = 50`، فما هي المخرجات؟',
    options: ['a=50 b=32', 'a=54 b=33', 'a=1 b=32', 'a=25 b=32'],
    correctAnswer: 'a=50 b=32',
    explanation: 'لأن `50 / 2` تساوي `25` وهي لا تساوي `1`، فلا يتنفذ جسم الشرط وتبقى القيم كما هي.'
  },
  {
    id: 72,
    type: 'mcq',
    topic: 'conditions',
    question: 'في برنامج حساب التقدير، إذا كانت الدرجة `mark` بين 85 و 100 يطبع `Excellent`، فما هو الشرط الصحيح؟',
    options: [
      'if (mark >= 85 && mark <= 100)',
      'if (85 <= mark <= 100)',
      'if (mark > 85 || mark < 100)',
      'if (mark == 85 && mark == 100)'
    ],
    correctAnswer: 'if (mark >= 85 && mark <= 100)',
    explanation: 'لحصر قيمة بين حدين في C++ نربط الشرطين بالمعامل `&&`.'
  },
  {
    id: 73,
    type: 'mcq',
    topic: 'conditions',
    question: 'في برنامج التقديرات، إذا طلب السؤال طباعة `Error` عندما تكون الدرجة أكبر من 100 أو أقل من 0، نكتب:',
    options: [
      'if (mark > 100 || mark < 0)',
      'if (mark > 100 && mark < 0)',
      'if (mark == 100)',
      'if (mark != 100)'
    ],
    correctAnswer: 'if (mark > 100 || mark < 0)',
    explanation: 'نستخدم `||` (أو) لأنه يستحيل أن تكون الدرجة أكبر من 100 وأقل من 0 في نفس اللحظة.'
  },
  {
    id: 74,
    type: 'mcq',
    topic: 'conditions',
    question: 'ما هو ناتج تنفيذ الكود التالي؟',
    code: `int n = -7;
if (n > 0)
    cout << "positive";
else
    cout << "Negative";`,
    options: ['positive', 'Negative', '0', 'لا يطبع شيئاً'],
    correctAnswer: 'Negative',
    explanation: 'بما أن `-7` ليست أكبر من 0، ينتقل التنفيذ إلى `else` ويطبع `Negative`.'
  },
  {
    id: 75,
    type: 'mcq',
    topic: 'identifiers',
    question: 'ما هو الخطأ في جملة تضمين المكتبة التالية: `#include <iostream, h>`؟',
    options: [
      'وجود فاصلة بدلاً من نقطة أو كتابتها بدون امتداد <iostream>',
      'استخدام رمز # في البداية',
      'كتابة كلمة include بحروف صغيرة',
      'استخدام الأقواس الزاوية < >'
    ],
    correctAnswer: 'وجود فاصلة بدلاً من نقطة أو كتابتها بدون امتداد <iostream>',
    explanation: 'الصحيح في C++ القياسية هو `#include <iostream>` (أو `<iostream.h>` قديماً بنقطة وليس فاصلة).'
  },
  {
    id: 76,
    type: 'mcq',
    topic: 'identifiers',
    question: 'ما هو الخطأ القواعدي في السطر: `int x = 3 , y = 6 ; z ;`؟',
    options: [
      'وضع فاصلة منقوطة قبل z بدلاً من فاصلة عادية',
      'إعطاء قيمة ابتدائية لـ x و y',
      'استخدام النوع int',
      'لا يوجد أي خطأ'
    ],
    correctAnswer: 'وضع فاصلة منقوطة قبل z بدلاً من فاصلة عادية',
    explanation: 'الفاصلة المنقوطة بعد 6 أنهت جملة التعريف، فأصبحت `z;` بمفردها بدون نوع بيانات؛ والصحيح `, z;`.'
  },
  {
    id: 77,
    type: 'mcq',
    topic: 'operators',
    question: 'ما هو ناتج العملية الحسابية: `17 % 5`؟',
    options: ['3', '2', '3.4', '0'],
    correctAnswer: '2',
    explanation: '17 تقسيم 5 تساوي 3 والباقي `2` (لأن 3 × 5 = 15، و 17 - 15 = 2).'
  },
  {
    id: 78,
    type: 'mcq',
    topic: 'operators',
    question: 'ما هو ناتج العملية الحسابية: `4 + 3 * 2`؟',
    options: ['14', '10', '12', '9'],
    correctAnswer: '10',
    explanation: 'الأولوية للضرب: `3 * 2 = 6`، ثم الجمع: `4 + 6 = 10`.'
  },
  {
    id: 79,
    type: 'mcq',
    topic: 'operators',
    question: 'ما هو ناتج العملية الحسابية: `(4 + 3) * 2`؟',
    options: ['14', '10', '11', '24'],
    correctAnswer: '14',
    explanation: 'الأولوية لما بداخل الأقواس: `4 + 3 = 7`، ثم `7 * 2 = 14`.'
  },
  {
    id: 80,
    type: 'mcq',
    topic: 'identifiers',
    question: "أي من الأنواع التالية يُستخدم لتخزين حرف واحد فقط مثل `'A'`؟",
    options: ['char', 'string', 'int', 'float'],
    correctAnswer: 'char',
    explanation: 'النوع `char` مخصص لتخزين رمز أو حرف واحد بين علامتي تنصيص مفردة.'
  },
  {
    id: 81,
    type: 'mcq',
    topic: 'identifiers',
    question: 'أي من الأنواع التالية يمتلك دقة مضاعفة وحجماً أكبر لتخزين الأعداد العشرية مقارنة بـ `float`؟',
    options: ['double', 'int', 'char', 'bool'],
    correctAnswer: 'double',
    explanation: 'النوع `double` يخزن أعداداً عشرية بدقة مضاعفة (8 بايت عادةً مقابل 4 بايت لـ `float`).'
  },
  {
    id: 82,
    type: 'mcq',
    topic: 'identifiers',
    question: 'ما هي القيمة التي يخزنها المتغير من نوع `bool`؟',
    options: [
      'true (1) أو false (0) فقط',
      'جميع الأعداد الصحيحة',
      'النصوص الطويلة',
      'الأعداد السالبة فقط'
    ],
    correctAnswer: 'true (1) أو false (0) فقط',
    explanation: 'النوع المنطقي `bool` يقبل قيمتين فقط: صح (1) أو خطأ (0).'
  },
  {
    id: 83,
    type: 'mcq',
    topic: 'conditions',
    question: 'ما هو ناتج الكود التالي؟',
    code: `int a = 10;
if (a == 10)
    cout << "Yes";`,
    options: ['Yes', '10', 'a', 'لا يطبع شيئاً'],
    correctAnswer: 'Yes',
    explanation: 'الشرط `a == 10` محقق، فيطبع النص `Yes`.'
  },
  {
    id: 84,
    type: 'mcq',
    topic: 'identifiers',
    question: 'ماذا يطبع الكود التالي؟',
    code: `int a = 5;
cout << "a";`,
    options: ['a', '5', 'a=5', 'خطأ برمجي'],
    correctAnswer: 'a',
    explanation: 'أي شيء يوضع بين علامتي تنصيص مزدوجة `"a"` يُطبع كنص حرفي كما هو ولا تُطبع قيمة المتغير.'
  },
  {
    id: 85,
    type: 'mcq',
    topic: 'identifiers',
    question: 'لطباعة قيمة المتغير `a` متبوعة بسطر جديد نكتب:',
    options: [
      'cout << a << endl;',
      'cout << "a" << endl;',
      'cin >> a >> endl;',
      'cout << a << /n;'
    ],
    correctAnswer: 'cout << a << endl;',
    explanation: 'نكتب اسم المتغير `a` بدون علامات تنصيص ثم `endl` للنزول لسطر جديد.'
  },
  {
    id: 86,
    type: 'mcq',
    topic: 'operators',
    question: 'ما هو ناتج الكود التالي؟',
    code: `int x = 8;
x -= 3;
cout << x;`,
    options: ['5', '11', '3', '24'],
    correctAnswer: '5',
    explanation: 'الجملة `x -= 3` تعني `x = x - 3` أي `8 - 3 = 5`.'
  },
  {
    id: 87,
    type: 'mcq',
    topic: 'operators',
    question: 'ما هو ناتج الكود التالي؟',
    code: `int x = 4;
x *= 2 + 3;
cout << x;`,
    options: ['20', '11', '9', '14'],
    correctAnswer: '20',
    explanation: 'المعامل `*=` يُنفذ بعد حساب الطرف الأيمن بالكامل: `x = x * (2 + 3) = 4 * 5 = 20`.'
  },
  {
    id: 88,
    type: 'mcq',
    topic: 'operators',
    question: 'ما هي قيمة `y` بعد تنفيذ السطرين التاليين؟',
    code: `int x = 9;
double y = sqrt(x);`,
    options: ['3', '81', '4.5', '9'],
    correctAnswer: '3',
    explanation: 'الجذر التربيعي للعدد 9 هو 3.'
  },
  {
    id: 89,
    type: 'mcq',
    topic: 'identifiers',
    question: 'ما هو الرمز الذي يُستخدم لكتابة تعليق من سطر واحد (Single-line comment) لا يقرأه المترجم؟',
    options: ['//', '\\\\', '**', '##'],
    correctAnswer: '//',
    explanation: 'الشرطتان المائلتان `//` تستخدمان لكتابة تعليق توضيحي في سطر واحد.'
  },
  {
    id: 90,
    type: 'mcq',
    topic: 'conditions',
    question: 'ما هو ناتج التعبير المنطقي `!(5 > 3)`؟',
    options: ['0 (خطأ)', '1 (صح)', '5', '3'],
    correctAnswer: '0 (خطأ)',
    explanation: 'التعبير `5 > 3` صحيح (1)، ومعامل النفي `!` يعكسه ليصبح خطأ (0).'
  },
  {
    id: 91,
    type: 'mcq',
    topic: 'conditions',
    question: 'أي من الشروط التالية يتحقق إذا كان المتغير `x` يقبل القسمة على 5 بدون باقٍ؟',
    options: [
      'if (x % 5 == 0)',
      'if (x / 5 == 0)',
      'if (x % 5 == 1)',
      'if (x * 5 == 0)'
    ],
    correctAnswer: 'if (x % 5 == 0)',
    explanation: 'قابلية القسمة بدون باقٍ تعني أن باقي القسمة `%` يساوي صفراً.'
  },
  {
    id: 92,
    type: 'mcq',
    topic: 'conditions',
    question: 'ما هو ناتج الكود التالي إذا أدخل المستخدم الدرجة `70`؟',
    code: `int deg = 70;
if (deg >= 85)
    cout << "Excellent";
else if (deg >= 75)
    cout << "Very Good";
else if (deg >= 65)
    cout << "Good";
else
    cout << "Accepted";`,
    options: ['Good', 'Very Good', 'Accepted', 'Excellent'],
    correctAnswer: 'Good',
    explanation: 'الدرجة 70 تحقق الشرط `deg >= 65` فتطبع `Good`.'
  },
  {
    id: 93,
    type: 'mcq',
    topic: 'conditions',
    question: 'ما هو ناتج الكود التالي؟',
    code: `int a = 4, b = 4;
if (a > b)
    cout << "A";
else if (b > a)
    cout << "B";
else
    cout << "Equal";`,
    options: ['Equal', 'A', 'B', 'AB'],
    correctAnswer: 'Equal',
    explanation: 'لأن `a` تساوي `b`، يفشل الشرطان الأول والثاني وينفذ `else`.'
  },
  {
    id: 94,
    type: 'mcq',
    topic: 'escape',
    question: 'ماذا يطبع الكود التالي؟',
    code: `cout << "Hello\\nWorld";`,
    options: [
      'كلمة Hello في سطر وكلمة World في السطر التالي',
      'Hello\\nWorld في سطر واحد',
      'Hello World مع 7 مسافات بينهما',
      'World فقط'
    ],
    correctAnswer: 'كلمة Hello في سطر وكلمة World في السطر التالي',
    explanation: 'الرمز `\\n` ينزل سطراً جديداً قبل طباعة `World`.'
  },
  {
    id: 95,
    type: 'mcq',
    topic: 'escape',
    question: 'ماذا يطبع الكود التالي؟',
    code: `cout << "C++\\tProgramming";`,
    options: [
      'C++ ثم مسافة جدولة (Tab) ثم Programming في نفس السطر',
      'C++ في سطر و Programming في سطر',
      'C++\\tProgramming',
      'Programming فقط'
    ],
    correctAnswer: 'C++ ثم مسافة جدولة (Tab) ثم Programming في نفس السطر',
    explanation: 'الرمز `\\t` يترك مسافة جدولة أفقية في نفس السطر.'
  },
  {
    id: 96,
    type: 'mcq',
    topic: 'conditions',
    question: 'في الكود التالي، ما هي قيمة `x` النهائية؟',
    code: `int x = 10;
if (x > 5)
    x = x + 2;
if (x > 10)
    x = x + 3;
cout << x;`,
    options: ['15', '12', '13', '10'],
    correctAnswer: '15',
    explanation: 'الجملتان منفصلتان (`if` وليست `else if`)؛ في الأولى تصبح `x = 12`، وفي الثانية بما أن `12 > 10` تزيد 3 فتصبح `15`.'
  },
  {
    id: 97,
    type: 'mcq',
    topic: 'conditions',
    question: 'في الكود التالي (لاحظ استخدام `else if`)، ما هي قيمة `x` النهائية؟',
    code: `int x = 10;
if (x > 5)
    x = x + 2;
else if (x > 8)
    x = x + 3;
cout << x;`,
    options: ['12', '15', '13', '10'],
    correctAnswer: '12',
    explanation: 'عند تحقق أول شرط `if (x > 5)` تصبح `x = 12`، ويتم تجاهل `else if` التابعة لها.'
  },
  {
    id: 98,
    type: 'mcq',
    topic: 'identifiers',
    question: 'أي من الجمل التالية تُستخدم في نهاية دالة `int main()` للدلالة على انتهاء البرنامج بنجاح؟',
    options: ['return 0;', 'stop 0;', 'end main;', 'exit();'],
    correctAnswer: 'return 0;',
    explanation: 'الجملة `return 0;` تعيد القيمة 0 لنظام التشغيل كإشارة لنجاح التنفيذ.'
  },
  {
    id: 99,
    type: 'mcq',
    topic: 'operators',
    question: 'ما هو ناتج الكود التالي؟',
    code: `int x = 5, y = 2;
cout << x / y;`,
    options: ['2', '2.5', '1', '3'],
    correctAnswer: '2',
    explanation: 'كلا المتغيرين من نوع `int`، فقسمة `5 / 2` تعطي العدد الصحيح `2` فقط.'
  },
  {
    id: 100,
    type: 'mcq',
    topic: 'operators',
    question: 'للحصول على الناتج العشري الدقيق `2.5` عند قسمة `5` على `2`، أي مما يلي صحيح؟',
    options: [
      'تعريف أحد المتغيرين على الأقل من نوع float أو double',
      'استخدام معامل % بدلاً من /',
      'وضع العملية داخل دالة sqrt',
      'كتابة 5 / 2 داخل متغير int'
    ],
    correctAnswer: 'تعريف أحد المتغيرين على الأقل من نوع float أو double',
    explanation: 'عند وجود طرف عشري (`float` أو `double`) في القسمة، يحتفظ البرنامج بالجزء الكسري `2.5`.'
  }
];
