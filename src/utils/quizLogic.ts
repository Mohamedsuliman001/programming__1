import {
  CategoryFilter,
  GradeEvaluation,
  Question,
  QuestionTopic,
  QuizSummary,
  TopicStat,
} from '../types/quiz';

export const TOPIC_LABELS: Record<QuestionTopic, string> = {
  escape: 'رموز الهروب للطباعة',
  identifiers: 'المعرفات والأساسيات',
  operators: 'العمليات وتتبع البرامج',
  conditions: 'الجمل الشرطية والمسار',
};

export interface CategoryOption {
  id: CategoryFilter;
  title: string;
  subtitle: string;
  badgeText: string;
}

export const CATEGORY_OPTIONS: CategoryOption[] = [
  {
    id: 'all',
    title: 'بنك الأسئلة الكامل (الشامل)',
    subtitle: 'جميع أسئلة المقرر: صح أم خطأ + اختيار من متعدد',
    badgeText: '100 سؤال',
  },
  {
    id: 'tf',
    title: 'القسم الأول: أسئلة صح أم خطأ',
    subtitle: 'اختبر سرعة البديهة والمفاهيم الأساسية في C++',
    badgeText: '50 سؤالاً',
  },
  {
    id: 'mcq',
    title: 'القسم الثاني: الاختيار من متعدد',
    subtitle: 'أسئلة تتبع البرامج والمعادلات الجبرية والشروط',
    badgeText: '50 سؤالاً',
  },
  {
    id: 'escape',
    title: 'محور رموز الهروب للطباعة',
    subtitle: 'الرموز الخاصة للطباعة مثل `\\n` و `\\t` و `\\b` و `\\r` و `\\a`',
    badgeText: 'موضوع مخصص',
  },
  {
    id: 'identifiers',
    title: 'محور المعرفات وأنواع البيانات والإدخال',
    subtitle: 'شروط تسمية المتغيرات، الكلمات المحجوزة، `cin` و `cout`',
    badgeText: 'موضوع مخصص',
  },
  {
    id: 'operators',
    title: 'محور العمليات الحسابية وتتبع الكود',
    subtitle: 'الأولويات، باقي القسمة `%`، الزيادة القبلية والبعدية، الدوال الرياضية',
    badgeText: 'موضوع مخصص',
  },
  {
    id: 'conditions',
    title: 'محور الجمل الشرطية (`if / else`)',
    subtitle: 'المقارنات، المؤثرات المنطقية `&&` و `||`، وتتبع الشروط المتداخلة',
    badgeText: 'موضوع مخصص',
  },
];

export function filterQuestionsByCategory(
  questions: Question[],
  category: CategoryFilter
): Question[] {
  switch (category) {
    case 'all':
      return questions;
    case 'tf':
      return questions.filter((q) => q.type === 'tf');
    case 'mcq':
      return questions.filter((q) => q.type === 'mcq');
    case 'escape':
    case 'identifiers':
    case 'operators':
    case 'conditions':
      return questions.filter((q) => q.topic === category);
    default:
      return questions;
  }
}

export function evaluateGrade(percentage: number): GradeEvaluation {
  if (percentage >= 85) {
    return {
      grade: 'Excellent',
      arabicLabel: 'ممتاز',
      description: 'أداء استثنائي! إتقان كامل لمفاهيم لغة C++ وتتبع البرامج.',
      colorClass: 'text-[#00F0FF]',
      borderClass: 'border-[#00F0FF]/50',
      bgClass: 'bg-[#00F0FF]/10',
    };
  }
  if (percentage >= 75) {
    return {
      grade: 'Very Good',
      arabicLabel: 'جيد جداً',
      description: 'مستوى متقدم جداً! لديك فهم متين للقواعد البرمجية مع أخطاء طفيفة.',
      colorClass: 'text-emerald-400',
      borderClass: 'border-emerald-400/50',
      bgClass: 'bg-emerald-500/10',
    };
  }
  if (percentage >= 65) {
    return {
      grade: 'Good',
      arabicLabel: 'جيد',
      description: 'مستوى جيد، ننصح بمراجعة الأسئلة الخاطئة لتعزيز مهارات تتبع الكود.',
      colorClass: 'text-[#FFB800]',
      borderClass: 'border-[#FFB800]/50',
      bgClass: 'bg-[#FFB800]/10',
    };
  }
  if (percentage >= 50) {
    return {
      grade: 'Accepted',
      arabicLabel: 'مقبول',
      description: 'اجتزت الحد الأدنى، ولكنك بحاجة للتدرب أكثر على الشروط والعمليات الحسابية.',
      colorClass: 'text-amber-400',
      borderClass: 'border-amber-400/50',
      bgClass: 'bg-amber-500/10',
    };
  }
  return {
    grade: 'Failed',
    arabicLabel: 'راسب (يحتاج لمراجعة)',
    description: 'ننصح بإعادة التدريب عبر "وضع التدريب الفوري" وقراءة الشروحات التفصيلية لكل سؤال.',
    colorClass: 'text-rose-400',
    borderClass: 'border-rose-400/50',
    bgClass: 'bg-rose-500/10',
  };
}

export function calculateQuizSummary(
  questions: Question[],
  answers: Record<number, string>
): QuizSummary {
  const totalQuestions = questions.length;
  let answeredCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  const topicMap: Record<
    QuestionTopic,
    { total: number; correct: number }
  > = {
    escape: { total: 0, correct: 0 },
    identifiers: { total: 0, correct: 0 },
    operators: { total: 0, correct: 0 },
    conditions: { total: 0, correct: 0 },
  };

  for (const q of questions) {
    topicMap[q.topic].total += 1;
    const userAnswer = answers[q.id];
    if (userAnswer !== undefined) {
      answeredCount += 1;
      if (userAnswer === q.correctAnswer) {
        correctCount += 1;
        topicMap[q.topic].correct += 1;
      } else {
        incorrectCount += 1;
      }
    }
  }

  const unansweredCount = totalQuestions - answeredCount;
  const percentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const scoreOutOf100 = percentage;
  const evaluation = evaluateGrade(percentage);

  const topicsOrder: QuestionTopic[] = [
    'escape',
    'identifiers',
    'operators',
    'conditions',
  ];

  const topicStats: TopicStat[] = topicsOrder
    .filter((t) => topicMap[t].total > 0)
    .map((t) => {
      const { total, correct } = topicMap[t];
      return {
        topic: t,
        label: TOPIC_LABELS[t],
        total,
        correct,
        percentage: Math.round((correct / total) * 100),
      };
    });

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    incorrectCount,
    unansweredCount,
    scoreOutOf100,
    percentage,
    evaluation,
    topicStats,
  };
}

export interface CodeToken {
  type: 'keyword' | 'type' | 'string' | 'number' | 'operator' | 'function' | 'plain';
  value: string;
}

const CPP_KEYWORDS = new Set([
  'if',
  'else',
  'return',
  'using',
  'namespace',
  'include',
  'true',
  'false',
]);

const CPP_TYPES = new Set([
  'int',
  'float',
  'double',
  'char',
  'string',
  'bool',
  'void',
  'std',
]);

const CPP_FUNCTIONS = new Set([
  'main',
  'cout',
  'cin',
  'endl',
  'sqrt',
  'pow',
]);

export function tokenizeCppLine(line: string): CodeToken[] {
  const tokens: CodeToken[] = [];
  const regex =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][A-Za-z0-9_]*\b|<<|>>|<=|>=|==|!=|&&|\|\||\+\+|--|\+=|-=|\*=|\/=|[+\-*/%=<>!&|;:,(){}])/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({
        type: 'plain',
        value: line.slice(lastIndex, match.index),
      });
    }

    const raw = match[0];
    if (raw.startsWith('"') || raw.startsWith("'")) {
      tokens.push({ type: 'string', value: raw });
    } else if (/^\d/.test(raw)) {
      tokens.push({ type: 'number', value: raw });
    } else if (CPP_KEYWORDS.has(raw)) {
      tokens.push({ type: 'keyword', value: raw });
    } else if (CPP_TYPES.has(raw)) {
      tokens.push({ type: 'type', value: raw });
    } else if (CPP_FUNCTIONS.has(raw)) {
      tokens.push({ type: 'function', value: raw });
    } else if (/^[A-Za-z_]/.test(raw)) {
      tokens.push({ type: 'plain', value: raw });
    } else {
      tokens.push({ type: 'operator', value: raw });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    tokens.push({
      type: 'plain',
      value: line.slice(lastIndex),
    });
  }

  return tokens;
}
