import React from 'react';
import { BookOpen, CheckCircle2, Code2, Play, Terminal } from 'lucide-react';

interface WelcomeScreenProps {
  totalQuestions: number;
  onStartQuiz: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  totalQuestions,
  onStartQuiz,
}) => {
  return (
    <div className="min-h-[calc(100vh-9rem)] flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <div className="w-full max-w-3xl rounded-2xl sm:rounded-3xl bg-[#131B2E] border border-[#00F0FF]/30 p-6 sm:p-10 md:p-12 shadow-2xl text-center space-y-8">
        {/* Top Kicker */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#00F0FF] font-semibold">
          <Code2 className="w-4 h-4 shrink-0" />
          <span>
            مقرر برمجة (1) —{' '}
            <bdi dir="ltr" className="font-mono">
              Programming in C++
            </bdi>
          </span>
          <span aria-hidden="true" className="text-slate-600">
            ·
          </span>
          <span className="text-[#FFB800]">
            {totalQuestions} سؤال بالترتيب (1 – {totalQuestions})
          </span>
        </div>

        {/* Main Heading & Description */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight text-balance">
            منصة التدريب الشامل للغة{' '}
            <bdi dir="ltr" className="text-[#00F0FF] font-mono">
              C++
            </bdi>
          </h1>
          <div className="text-base sm:text-lg font-bold text-[#FFB800]">
            إعداد المهندس محمد أبوغفة
          </div>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            تدرّب على جميع أسئلة المقرر بالتسلسل من السؤال الأول وحتى السؤال
            المائة، مع تصحيح فوري وشرح برمجي تفصيلي لكل إجابة.
          </p>
        </div>

        {/* Clean Responsive Summary Grid (Static Informative Overview, Not Interactive Options) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-right bg-[#0A0E17]/80 p-4 sm:p-5 rounded-2xl border border-slate-800/90">
          <div className="flex items-center sm:items-start gap-3 p-2">
            <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-sm sm:text-base">
                50 سؤال صح أم خطأ
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                الأسئلة من 1 إلى 50
              </div>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3 p-2 border-y sm:border-y-0 sm:border-x border-slate-800/80">
            <Terminal className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-sm sm:text-base">
                50 سؤال اختيار من متعدد
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                الأسئلة من 51 إلى 100
              </div>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3 p-2">
            <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-sm sm:text-base">
                تصحيح وشرح فوري
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                توضيح كامل بعد كل سؤال
              </div>
            </div>
          </div>
        </div>

        {/* Single Primary CTA Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onStartQuiz}
            className="w-full sm:w-auto min-w-[260px] min-h-[54px] inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-extrabold text-base sm:text-lg bg-[#00F0FF] text-[#0A0E17] hover:bg-[#00F0FF]/90 active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-[#00F0FF]/20"
          >
            <Play className="w-5 h-5 fill-current shrink-0" />
            <span>بدء التدريب الشامل</span>
          </button>
        </div>
      </div>
    </div>
  );
};
