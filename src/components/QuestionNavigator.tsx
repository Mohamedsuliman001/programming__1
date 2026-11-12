import React, { useState } from 'react';
import { Flag, LayoutGrid } from 'lucide-react';
import { Question, QuizMode } from '../types/quiz';

interface QuestionNavigatorProps {
  questions: Question[];
  currentIndex: number;
  answers: Record<number, string>;
  flaggedIds: Set<number>;
  mode: QuizMode;
  onSelectQuestion: (index: number) => void;
}

type NavFilter = 'all' | 'unanswered' | 'flagged';

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  currentIndex,
  answers,
  flaggedIds,
  mode,
  onSelectQuestion,
}) => {
  const [navFilter, setNavFilter] = useState<NavFilter>('all');

  const answeredCount = questions.filter(
    (q) => answers[q.id] !== undefined
  ).length;
  const remainingCount = questions.length - answeredCount;
  const flaggedCount = questions.filter((q) => flaggedIds.has(q.id)).length;

  return (
    <aside
      aria-label="خريطة التنقل بين الأسئلة"
      className="rounded-2xl bg-[#131B2E] border border-slate-800/90 p-5 space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-4 h-4 text-[#00F0FF]" />
          <h2 className="font-bold text-sm sm:text-base text-white">
            خريطة الأسئلة
          </h2>
        </div>
        <span className="text-xs text-slate-400 tabular-nums">
          تمت الإجابة: <strong className="text-[#00F0FF]">{answeredCount}</strong> /{' '}
          {questions.length}
        </span>
      </div>

      {/* Filter Segmented Control */}
      <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-[#0A0E17] border border-slate-800/80 text-xs">
        <button
          type="button"
          onClick={() => setNavFilter('all')}
          className={`py-1.5 px-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
            navFilter === 'all'
              ? 'bg-[#131B2E] text-[#00F0FF] border border-[#00F0FF]/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          الكل ({questions.length})
        </button>
        <button
          type="button"
          onClick={() => setNavFilter('unanswered')}
          className={`py-1.5 px-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
            navFilter === 'unanswered'
              ? 'bg-[#131B2E] text-[#FFB800] border border-[#FFB800]/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          متبقٍ ({remainingCount})
        </button>
        <button
          type="button"
          onClick={() => setNavFilter('flagged')}
          className={`py-1.5 px-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
            navFilter === 'flagged'
              ? 'bg-[#131B2E] text-amber-400 border border-amber-400/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          مُعلّم ({flaggedCount})
        </button>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#00F0FF]" />
          <span>السؤال الحالي</span>
        </span>
        {mode === 'practice' ? (
          <>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/40 border border-emerald-400" />
              <span>إجابة صحيحة</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-500/40 border border-rose-400" />
              <span>إجابة خاطئة</span>
            </span>
          </>
        ) : (
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#00F0FF]/25 border border-[#00F0FF]/60" />
            <span>تمت الإجابة</span>
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#0A0E17] border border-slate-700" />
          <span>لم يُجب</span>
        </span>
      </div>

      {/* Grid of Question Numbers */}
      <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2 max-h-[340px] overflow-y-auto pr-1">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const userAnswer = answers[q.id];
          const isAnswered = userAnswer !== undefined;
          const isFlagged = flaggedIds.has(q.id);

          if (navFilter === 'unanswered' && isAnswered) return null;
          if (navFilter === 'flagged' && !isFlagged) return null;

          let buttonStyle =
            'bg-[#0A0E17] border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white';

          if (isCurrent) {
            buttonStyle =
              'bg-[#00F0FF] border-[#00F0FF] text-[#0A0E17] font-extrabold shadow-sm shadow-[#00F0FF]/30';
          } else if (isAnswered) {
            if (mode === 'practice') {
              const isCorrect = userAnswer === q.correctAnswer;
              buttonStyle = isCorrect
                ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                : 'bg-rose-500/20 border-rose-500/60 text-rose-300 font-bold';
            } else {
              buttonStyle =
                'bg-[#00F0FF]/15 border-[#00F0FF]/50 text-[#00F0FF] font-bold';
            }
          }

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onSelectQuestion(idx)}
              aria-label={`الانتقال إلى السؤال ${idx + 1} (رقم ${q.id} في البنك)`}
              aria-current={isCurrent ? 'step' : undefined}
              className={`relative h-10 rounded-lg border text-xs font-mono tabular-nums transition-all cursor-pointer flex items-center justify-center ${buttonStyle}`}
            >
              <span>{idx + 1}</span>
              {isFlagged && (
                <Flag
                  className={`w-2.5 h-2.5 absolute top-1 left-1 ${
                    isCurrent ? 'text-[#0A0E17]' : 'text-[#FFB800]'
                  } fill-current`}
                />
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
