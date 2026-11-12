import { useMemo, useState } from 'react';
import { QUESTIONS_BANK } from './data/questions';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';

type AppView = 'welcome' | 'quiz' | 'results';

export default function App() {
  const initialAutostart = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('autostart') === '1';
  }, []);

  const [view, setView] = useState<AppView>(
    initialAutostart ? 'quiz' : 'welcome'
  );
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // Starts the 100 questions sequentially from Question 1 to Question 100
  const handleStartQuiz = () => {
    setAnswers({});
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAnswer = (questionId: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleFinishQuiz = () => {
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setView('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0E17] text-slate-100">
      {/* Responsive Header Bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-4 px-4 sm:px-8 py-3.5 bg-[#0A0E17]/95 backdrop-blur-md border-b border-slate-800/90">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleGoHome();
          }}
          className="text-base sm:text-lg font-extrabold tracking-tight text-white hover:text-[#00F0FF] transition-colors whitespace-nowrap shrink-0"
        >
          منصة برمجة (1) —{' '}
          <bdi dir="ltr" className="text-[#00F0FF] font-mono">
            C++
          </bdi>
        </a>

        <div className="text-xs sm:text-sm font-semibold text-[#FFB800] hidden sm:block">
          إعداد المهندس محمد أبوغفة
        </div>

        {view !== 'welcome' && (
          <button
            type="button"
            onClick={handleGoHome}
            className="px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-200 bg-[#131B2E] border border-slate-700 rounded-xl hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            الواجهة الرئيسية
          </button>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {view === 'welcome' && (
          <WelcomeScreen
            totalQuestions={QUESTIONS_BANK.length}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {view === 'quiz' && (
          <QuizScreen
            questions={QUESTIONS_BANK}
            mode="practice"
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            onFinishQuiz={handleFinishQuiz}
          />
        )}

        {view === 'results' && (
          <ResultsScreen
            questions={QUESTIONS_BANK}
            answers={answers}
            onRetrySameQuiz={handleStartQuiz}
            onBackHome={handleGoHome}
          />
        )}
      </main>

      {/* Quiet Responsive Footer */}
      <footer className="border-t border-slate-800/80 py-5 px-4 sm:px-8 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            منصة اختبارات مقرر برمجة (1) بلغة{' '}
            <bdi dir="ltr" className="font-mono text-[#00F0FF]">
              C++
            </bdi>{' '}
            — بنك الأسئلة التفاعلي الشامل (100 سؤال)
          </span>
          <span className="font-semibold text-[#FFB800]">
            إعداد المهندس محمد أبوغفة
          </span>
        </div>
      </footer>
    </div>
  );
}
