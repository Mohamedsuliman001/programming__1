import React, { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Flag,
  LayoutGrid,
  Lightbulb,
  Send,
  X,
  XCircle,
} from 'lucide-react';
import { Question, QuizMode } from '../types/quiz';
import { TOPIC_LABELS } from '../utils/quizLogic';
import { CodeBlock } from './CodeBlock';
import { InlineFormattedText } from './InlineFormattedText';
import { QuestionNavigator } from './QuestionNavigator';

interface QuizScreenProps {
  questions: Question[];
  mode: QuizMode;
  answers: Record<number, string>;
  onSelectAnswer: (questionId: number, option: string) => void;
  onFinishQuiz: () => void;
}

function isAsciiCodeOption(opt: string): boolean {
  const hasArabic = /[\u0600-\u06FF]/.test(opt);
  return !hasArabic;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  mode,
  answers,
  onSelectAnswer,
  onFinishQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flaggedIds, setFlaggedIds] = useState<Set<number>>(new Set());
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showMobileNavigator, setShowMobileNavigator] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = questions.filter(
    (q) => answers[q.id] !== undefined
  ).length;
  const progressPercentage =
    totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const selectedOption = answers[currentQuestion.id];
  const isAnswered = selectedOption !== undefined;
  const isFlagged = flaggedIds.has(currentQuestion.id);

  const toggleFlag = () => {
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentQuestion.id)) {
        next.delete(currentQuestion.id);
      } else {
        next.add(currentQuestion.id);
      }
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAttemptFinish = () => {
    if (answeredCount < totalQuestions) {
      setShowConfirmModal(true);
    } else {
      onFinishQuiz();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 space-y-4 sm:space-y-6">
      {/* Top Progress Bar Card */}
      <div className="rounded-2xl bg-[#131B2E] border border-slate-800/90 p-3.5 sm:p-5 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
            <span className="font-bold text-[#00F0FF] tabular-nums">
              السؤال {currentIndex + 1} من {totalQuestions}
            </span>
            <span aria-hidden="true" className="text-slate-600">
              ·
            </span>
            <span className="text-slate-300 tabular-nums">
              تمت الإجابة:{' '}
              <strong className="text-[#FFB800] font-mono">
                {answeredCount}
              </strong>{' '}
              / {totalQuestions} ({progressPercentage}%)
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile & iPad Question Map Toggle Button */}
            <button
              type="button"
              onClick={() => setShowMobileNavigator(true)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs sm:text-sm font-bold bg-[#0A0E17] border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-colors cursor-pointer whitespace-nowrap"
            >
              <LayoutGrid className="w-4 h-4 shrink-0" />
              <span>خريطة الأسئلة</span>
            </button>

            <button
              type="button"
              onClick={handleAttemptFinish}
              className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-xl text-xs sm:text-sm font-bold bg-[#FFB800] text-[#0A0E17] hover:bg-[#FFB800]/90 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Send className="w-3.5 h-3.5 shrink-0" />
              <span>إنهاء وعرض النتيجة</span>
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="نسبة التقدم في التدريب"
          className="w-full h-2.5 bg-[#0A0E17] rounded-full overflow-hidden border border-slate-800"
        >
          <div
            className="h-full bg-gradient-to-l from-[#00F0FF] to-[#FFB800] transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Main Responsive Grid: 1 col on Mobile/iPad, 12 cols on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Question Stage */}
        <div className="lg:col-span-8 space-y-6 min-w-0">
          <article className="rounded-2xl bg-[#131B2E] border border-[#00F0FF]/25 p-4 sm:p-6 md:p-8 shadow-xl space-y-5 sm:space-y-6">
            {/* Question Metadata Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3.5">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-400">
                <span className="font-bold text-[#00F0FF] tabular-nums">
                  سؤال #{currentQuestion.id}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#FFB800]">
                  {currentQuestion.type === 'tf'
                    ? 'صح أم خطأ'
                    : 'اختيار من متعدد'}
                </span>
                <span aria-hidden="true">·</span>
                <span>{TOPIC_LABELS[currentQuestion.topic]}</span>
              </div>

              <button
                type="button"
                onClick={toggleFlag}
                aria-pressed={isFlagged}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  isFlagged
                    ? 'bg-[#FFB800]/15 border-[#FFB800] text-[#FFB800]'
                    : 'bg-[#0A0E17] border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Flag
                  className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`}
                />
                <span>{isFlagged ? 'مُعلّم للمراجعة' : 'تعليم للمراجعة'}</span>
              </button>
            </div>

            {/* Question Prompt & Optional C++ Code */}
            <div className="space-y-4 min-w-0">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed">
                <InlineFormattedText text={currentQuestion.question} />
              </h2>

              {currentQuestion.code && (
                <CodeBlock
                  code={currentQuestion.code}
                  label={`question_${currentQuestion.id}.cpp`}
                />
              )}
            </div>

            {/* Answer Options */}
            <div
              role="radiogroup"
              aria-label={`خيارات السؤال ${currentIndex + 1}`}
              className={`grid gap-3 sm:gap-3.5 ${
                currentQuestion.type === 'tf'
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1'
              }`}
            >
              {currentQuestion.options.map((option, optIdx) => {
                const isSelected = selectedOption === option;
                const isCorrectOption = option === currentQuestion.correctAnswer;
                const isCodeLike = isAsciiCodeOption(option);

                let optionContainerStyle =
                  'bg-[#0A0E17]/90 border-slate-800 text-slate-200 hover:border-[#00F0FF]/50 hover:bg-[#0A0E17]';
                let badgeStyle = 'bg-slate-800 text-slate-300';
                let statusIcon = null;

                if (mode === 'practice' && isAnswered) {
                  if (isCorrectOption) {
                    optionContainerStyle =
                      'bg-emerald-500/15 border-emerald-500 text-white shadow-md';
                    badgeStyle = 'bg-emerald-500 text-[#0A0E17] font-bold';
                    statusIcon = (
                      <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-400 text-xs font-bold shrink-0">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>إجابة صحيحة</span>
                      </div>
                    );
                  } else if (isSelected && !isCorrectOption) {
                    optionContainerStyle =
                      'bg-rose-500/15 border-rose-500 text-white';
                    badgeStyle = 'bg-rose-500 text-white font-bold';
                    statusIcon = (
                      <div className="flex items-center gap-1 sm:gap-1.5 text-rose-400 text-xs font-bold shrink-0">
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>اختيارك خاطئ</span>
                      </div>
                    );
                  } else {
                    optionContainerStyle =
                      'bg-[#0A0E17]/40 border-slate-800/60 text-slate-500 opacity-75';
                  }
                } else if (isSelected) {
                  optionContainerStyle =
                    'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-md';
                  badgeStyle = 'bg-[#00F0FF] text-[#0A0E17] font-bold';
                  statusIcon = (
                    <div className="flex items-center gap-1.5 text-[#00F0FF] text-xs font-bold shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>تم الاختيار</span>
                    </div>
                  );
                }

                const optionLetters = ['أ', 'ب', 'ج', 'د'];

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onSelectAnswer(currentQuestion.id, option)}
                    aria-pressed={isSelected}
                    className={`w-full min-h-[52px] p-3.5 sm:p-4 rounded-xl border text-right transition-all cursor-pointer flex items-center justify-between gap-3 ${optionContainerStyle}`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 transition-colors ${badgeStyle}`}
                      >
                        {optionLetters[optIdx] ?? optIdx + 1}
                      </span>

                      {isCodeLike ? (
                        <span
                          dir="ltr"
                          className="font-mono text-sm sm:text-base font-semibold tracking-wide text-left break-all sm:break-normal"
                        >
                          {option}
                        </span>
                      ) : (
                        <span className="text-sm sm:text-base font-semibold leading-relaxed">
                          <InlineFormattedText text={option} />
                        </span>
                      )}
                    </div>

                    {statusIcon}
                  </button>
                );
              })}
            </div>

            {/* Immediate Explanation Box */}
            {mode === 'practice' && isAnswered && (
              <div
                role="region"
                aria-label="تفسير الإجابة"
                className={`p-4 sm:p-5 rounded-xl border transition-all ${
                  selectedOption === currentQuestion.correctAnswer
                    ? 'bg-emerald-950/30 border-emerald-500/40'
                    : 'bg-amber-950/30 border-[#FFB800]/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
                  <div className="space-y-1.5 text-sm sm:text-base min-w-0">
                    <div className="font-bold text-[#FFB800]">
                      الشرح والتوضيح البرمجي:
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      <InlineFormattedText text={currentQuestion.explanation} />
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Previous / Next Navigation Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold bg-[#0A0E17] border border-slate-700 text-slate-200 hover:border-[#00F0FF] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <ArrowRight className="w-4 h-4 shrink-0" />
                <span>السؤال السابق</span>
              </button>

              <span
                dir="ltr"
                className="text-xs text-slate-400 font-mono tabular-nums whitespace-nowrap shrink-0"
              >
                {currentIndex + 1} / {totalQuestions}
              </span>

              {currentIndex < totalQuestions - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold bg-[#00F0FF] text-[#0A0E17] hover:bg-[#00F0FF]/90 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>السؤال التالي</span>
                  <ArrowLeft className="w-4 h-4 shrink-0" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleAttemptFinish}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold bg-[#FFB800] text-[#0A0E17] hover:bg-[#FFB800]/90 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>عرض النتيجة النهائية</span>
                </button>
              )}
            </div>
          </article>
        </div>

        {/* Desktop Question Navigator Sidebar */}
        <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-20">
          <QuestionNavigator
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            flaggedIds={flaggedIds}
            mode={mode}
            onSelectQuestion={(idx) => setCurrentIndex(idx)}
          />
        </div>
      </div>

      {/* Mobile & Tablet (iPad) Question Navigator Drawer Modal */}
      {showMobileNavigator && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="خريطة التنقل بين الأسئلة"
          className="fixed inset-0 z-50 lg:hidden flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-xs"
        >
          <div className="w-full sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#131B2E] border-t sm:border border-[#00F0FF]/30 p-4 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="font-bold text-white text-sm">
                اختر رقم السؤال للانتقال السريع (1 – {totalQuestions})
              </span>
              <button
                type="button"
                onClick={() => setShowMobileNavigator(false)}
                aria-label="إغلاق خريطة الأسئلة"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <QuestionNavigator
              questions={questions}
              currentIndex={currentIndex}
              answers={answers}
              flaggedIds={flaggedIds}
              mode={mode}
              onSelectQuestion={(idx) => {
                setCurrentIndex(idx);
                setShowMobileNavigator(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        </div>
      )}

      {/* Confirmation Dialog Modal when Unanswered Questions Remain */}
      {showConfirmModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-finish-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
        >
          <div className="w-full max-w-md rounded-2xl bg-[#131B2E] border border-[#FFB800]/50 p-5 sm:p-6 space-y-5 shadow-2xl">
            <div className="flex items-center gap-3 text-[#FFB800]">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 id="confirm-finish-title" className="text-lg font-bold text-white">
                تأكيد إنهاء التدريب
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              لقد أجبت على{' '}
              <strong className="text-[#00F0FF] tabular-nums">
                {answeredCount}
              </strong>{' '}
              سؤال من أصل{' '}
              <strong className="text-white tabular-nums">
                {totalQuestions}
              </strong>
              . يتبقى لديك{' '}
              <strong className="text-[#FFB800] tabular-nums">
                {totalQuestions - answeredCount}
              </strong>{' '}
              سؤال بدون إجابة. هل ترغب في إنهاء التدريب الآن وعرض التقرير النهائي؟
            </p>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2.5 min-h-[44px] rounded-xl text-sm font-medium bg-[#0A0E17] border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                متابعة حل الأسئلة
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmModal(false);
                  onFinishQuiz();
                }}
                className="px-5 py-2.5 min-h-[44px] rounded-xl text-sm font-bold bg-[#FFB800] text-[#0A0E17] hover:bg-[#FFB800]/90 transition-colors cursor-pointer"
              >
                نعم، عرض النتيجة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
