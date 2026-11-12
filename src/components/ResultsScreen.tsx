import React, { useState } from 'react';
import {
  Award,
  BarChart3,
  CheckCircle2,
  FileWarning,
  Home,
  Lightbulb,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { Question } from '../types/quiz';
import { calculateQuizSummary, TOPIC_LABELS } from '../utils/quizLogic';
import { CodeBlock } from './CodeBlock';
import { InlineFormattedText } from './InlineFormattedText';

interface ResultsScreenProps {
  questions: Question[];
  answers: Record<number, string>;
  onRetrySameQuiz: () => void;
  onBackHome: () => void;
}

type ReviewFilter = 'incorrect' | 'unanswered' | 'all';

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  questions,
  answers,
  onRetrySameQuiz,
  onBackHome,
}) => {
  const summary = calculateQuizSummary(questions, answers);

  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>(
    summary.incorrectCount > 0
      ? 'incorrect'
      : summary.unansweredCount > 0
      ? 'unanswered'
      : 'all'
  );

  const filteredReviewQuestions = questions.filter((q) => {
    const userAnswer = answers[q.id];
    if (reviewFilter === 'incorrect') {
      return userAnswer !== q.correctAnswer;
    }
    if (reviewFilter === 'unanswered') {
      return userAnswer === undefined;
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
      {/* Top Score & Grade Evaluation Card */}
      <section className="rounded-2xl bg-[#131B2E] border border-[#00F0FF]/30 p-5 sm:p-8 shadow-2xl space-y-6 sm:space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#00F0FF]">
              <Award className="w-4 h-4 shrink-0" />
              <span>التقرير النهائي لنتيجة التدريب الشامل (100 سؤال)</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white text-balance">
              كشف الدرجات والتقييم الأكاديمي — مقرر برمجة (1) بلغة{' '}
              <bdi dir="ltr" className="text-[#00F0FF] font-mono">
                C++
              </bdi>
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onRetrySameQuiz}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold bg-[#00F0FF] text-[#0A0E17] hover:bg-[#00F0FF]/90 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 shrink-0" />
              <span>إعادة التدريب من السؤال 1</span>
            </button>
            <button
              type="button"
              onClick={onBackHome}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold bg-[#0A0E17] border border-slate-700 text-slate-200 hover:border-[#00F0FF] transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4 shrink-0" />
              <span>الواجهة الرئيسية</span>
            </button>
          </div>
        </div>

        {/* Main Score Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Final Score Out of 100 & Grade Box */}
          <div
            className={`md:col-span-5 rounded-2xl p-5 sm:p-6 border flex flex-col justify-between ${summary.evaluation.bgClass} ${summary.evaluation.borderClass}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  الدرجة النهائية (من 100)
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span
                    className={`text-4xl sm:text-5xl font-extrabold font-mono tabular-nums ${summary.evaluation.colorClass}`}
                  >
                    {summary.scoreOutOf100}
                  </span>
                  <span className="text-lg text-slate-400 font-mono">/ 100</span>
                </div>
              </div>

              <div className="text-left">
                <div className="text-xs text-slate-400">النسبة المئوية</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mt-1">
                  {summary.percentage}%
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm text-slate-300">
                  التقدير العام (Grade):
                </span>
                <span
                  className={`text-sm sm:text-lg font-extrabold ${summary.evaluation.colorClass}`}
                >
                  {summary.evaluation.grade} — {summary.evaluation.arabicLabel}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {summary.evaluation.description}
              </p>
            </div>
          </div>

          {/* Detailed Breakdown Counters */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
            <div className="rounded-xl bg-[#0A0E17] border border-slate-800 p-4 flex flex-col justify-between">
              <span className="text-xs text-slate-400">إجمالي الأسئلة</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mt-2">
                {summary.totalQuestions}
              </span>
              <span className="text-[11px] text-slate-500 mt-1">
                بنك الأسئلة الشامل
              </span>
            </div>

            <div className="rounded-xl bg-[#0A0E17] border border-emerald-500/30 p-4 flex flex-col justify-between">
              <span className="text-xs text-emerald-400">إجابات صحيحة</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums mt-2">
                {summary.correctCount}
              </span>
              <span className="text-[11px] text-slate-400 mt-1">
                إجابة متقنة
              </span>
            </div>

            <div className="rounded-xl bg-[#0A0E17] border border-rose-500/30 p-4 flex flex-col justify-between">
              <span className="text-xs text-rose-400">إجابات خاطئة</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono tabular-nums mt-2">
                {summary.incorrectCount}
              </span>
              <span className="text-[11px] text-slate-400 mt-1">
                تحتاج لمراجعة
              </span>
            </div>

            <div className="rounded-xl bg-[#0A0E17] border border-amber-500/30 p-4 flex flex-col justify-between">
              <span className="text-xs text-[#FFB800]">غير مُجاب عنها</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FFB800] font-mono tabular-nums mt-2">
                {summary.unansweredCount}
              </span>
              <span className="text-[11px] text-slate-400 mt-1">
                سؤال متروك
              </span>
            </div>

            {/* Topic Performance Bars spanning full row */}
            <div className="col-span-2 sm:col-span-4 rounded-xl bg-[#0A0E17] border border-slate-800 p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <BarChart3 className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <span>تحليل الأداء حسب المحاور البرمجية:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {summary.topicStats.map((stat) => (
                  <div key={stat.topic} className="space-y-1">
                    <div className="flex items-center justify-between text-xs gap-2">
                      <span className="text-slate-300 truncate">
                        {stat.label}
                      </span>
                      <span className="font-mono text-[#00F0FF] tabular-nums shrink-0">
                        {stat.correct}/{stat.total} ({stat.percentage}%)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#00F0FF]"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Review Section */}
      <section className="rounded-2xl bg-[#131B2E] border border-slate-800/90 p-4 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              مراجعة الإجابات والشروحات التفصيلية
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              راجع الأسئلة التي أخطأت فيها أو تصفح البنك بالكامل مع التفسير
              البرمجي الدقيق لكل سؤال.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0A0E17] border border-slate-800 self-start">
            <button
              type="button"
              onClick={() => setReviewFilter('incorrect')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                reviewFilter === 'incorrect'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              الأخطاء والمتروك ({summary.incorrectCount + summary.unansweredCount})
            </button>
            <button
              type="button"
              onClick={() => setReviewFilter('unanswered')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                reviewFilter === 'unanswered'
                  ? 'bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              غير المجاب ({summary.unansweredCount})
            </button>
            <button
              type="button"
              onClick={() => setReviewFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                reviewFilter === 'all'
                  ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              جميع الأسئلة ({summary.totalQuestions})
            </button>
          </div>
        </div>

        {filteredReviewQuestions.length === 0 ? (
          <div className="p-8 sm:p-10 text-center rounded-xl bg-[#0A0E17] border border-emerald-500/30 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">
              أحسنت! لا توجد أي أخطاء في هذا القسم
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              لقد أجبت على جميع الأسئلة بشكل صحيح. يمكنك الضغط على تبويب &quot;جميع
              الأسئلة&quot; لاستعراض الشروحات الكاملة.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReviewQuestions.map((q) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              const isUnanswered = userAnswer === undefined;

              return (
                <article
                  key={q.id}
                  className={`rounded-xl bg-[#0A0E17] border p-4 sm:p-6 space-y-4 ${
                    isCorrect
                      ? 'border-emerald-500/30'
                      : isUnanswered
                      ? 'border-[#FFB800]/40'
                      : 'border-rose-500/40'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#00F0FF]">
                        سؤال #{q.id}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{TOPIC_LABELS[q.topic]}</span>
                    </div>

                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>إجابة صحيحة</span>
                      </span>
                    ) : isUnanswered ? (
                      <span className="inline-flex items-center gap-1 text-[#FFB800] font-bold">
                        <FileWarning className="w-4 h-4" />
                        <span>لم تتم الإجابة عليه</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-400 font-bold">
                        <XCircle className="w-4 h-4" />
                        <span>إجابة خاطئة</span>
                      </span>
                    )}
                  </div>

                  {/* Question Text & Code */}
                  <div className="space-y-3 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                      <InlineFormattedText text={q.question} />
                    </h3>
                    {q.code && (
                      <CodeBlock code={q.code} label={`review_q${q.id}.cpp`} />
                    )}
                  </div>

                  {/* Student Answer vs Correct Answer */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div
                      className={`p-3.5 rounded-xl border ${
                        isCorrect
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                          : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                      }`}
                    >
                      <div className="text-xs opacity-75 mb-1">إجابتك:</div>
                      <div className="font-bold" dir="auto">
                        {isUnanswered ? (
                          'متروك بدون إجابة'
                        ) : (
                          <InlineFormattedText text={userAnswer} />
                        )}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-emerald-200">
                      <div className="text-xs opacity-75 mb-1">
                        الإجابة الصحيحة المعتمدة:
                      </div>
                      <div className="font-bold" dir="auto">
                        <InlineFormattedText text={q.correctAnswer} />
                      </div>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="p-4 rounded-xl bg-[#131B2E] border border-[#FFB800]/30 flex items-start gap-3 text-sm">
                    <Lightbulb className="w-4 h-4 text-[#FFB800] shrink-0 mt-1" />
                    <div className="space-y-1">
                      <span className="font-bold text-[#FFB800] block text-xs">
                        التوضيح البرمجي:
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        <InlineFormattedText text={q.explanation} />
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
