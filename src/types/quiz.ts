export type QuestionType = 'tf' | 'mcq';

export type QuestionTopic =
  | 'escape'
  | 'identifiers'
  | 'operators'
  | 'conditions';

export type CategoryFilter =
  | 'all'
  | 'tf'
  | 'mcq'
  | 'escape'
  | 'identifiers'
  | 'operators'
  | 'conditions';

export type QuizMode = 'practice' | 'exam';

export type GradeKey =
  | 'Excellent'
  | 'Very Good'
  | 'Good'
  | 'Accepted'
  | 'Failed';

export interface Question {
  id: number;
  type: QuestionType;
  topic: QuestionTopic;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface StudentInfo {
  name: string;
  studentId: string;
}

export interface GradeEvaluation {
  grade: GradeKey;
  arabicLabel: string;
  description: string;
  colorClass: string;
  borderClass: string;
  bgClass: string;
}

export interface TopicStat {
  topic: QuestionTopic;
  label: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface QuizSummary {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  scoreOutOf100: number;
  percentage: number;
  evaluation: GradeEvaluation;
  topicStats: TopicStat[];
}
