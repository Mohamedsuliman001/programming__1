import test from 'node:test';
import assert from 'node:assert/strict';
import { QUESTIONS_BANK } from '../data/questions';
import {
  calculateQuizSummary,
  evaluateGrade,
  filterQuestionsByCategory,
  tokenizeCppLine,
} from './quizLogic';

test('Question bank contains exact 100 questions (50 TF and 50 MCQ)', () => {
  assert.equal(QUESTIONS_BANK.length, 100);

  const tfQuestions = filterQuestionsByCategory(QUESTIONS_BANK, 'tf');
  const mcqQuestions = filterQuestionsByCategory(QUESTIONS_BANK, 'mcq');

  assert.equal(tfQuestions.length, 50);
  assert.equal(mcqQuestions.length, 50);

  // Verify sequential IDs 1..100 and valid options containing correctAnswer
  QUESTIONS_BANK.forEach((q, idx) => {
    assert.equal(q.id, idx + 1, `Question at index ${idx} should have id ${idx + 1}`);
    assert.ok(q.question.length > 0, `Question ${q.id} text should not be empty`);
    assert.ok(q.explanation.length > 0, `Question ${q.id} explanation should not be empty`);
    assert.ok(
      q.options.includes(q.correctAnswer),
      `Question ${q.id} correctAnswer "${q.correctAnswer}" must be in options [${q.options.join(', ')}]`
    );
  });
});

test('Topic filtering partitions the 100 questions into 4 non-empty topics', () => {
  const escapeQs = filterQuestionsByCategory(QUESTIONS_BANK, 'escape');
  const idQs = filterQuestionsByCategory(QUESTIONS_BANK, 'identifiers');
  const opQs = filterQuestionsByCategory(QUESTIONS_BANK, 'operators');
  const condQs = filterQuestionsByCategory(QUESTIONS_BANK, 'conditions');

  assert.ok(escapeQs.length > 0);
  assert.ok(idQs.length > 0);
  assert.ok(opQs.length > 0);
  assert.ok(condQs.length > 0);
  assert.equal(
    escapeQs.length + idQs.length + opQs.length + condQs.length,
    100
  );
});

test('Grade evaluation thresholds return accurate grades', () => {
  assert.equal(evaluateGrade(95).grade, 'Excellent');
  assert.equal(evaluateGrade(85).grade, 'Excellent');
  assert.equal(evaluateGrade(80).grade, 'Very Good');
  assert.equal(evaluateGrade(75).grade, 'Very Good');
  assert.equal(evaluateGrade(70).grade, 'Good');
  assert.equal(evaluateGrade(65).grade, 'Good');
  assert.equal(evaluateGrade(55).grade, 'Accepted');
  assert.equal(evaluateGrade(50).grade, 'Accepted');
  assert.equal(evaluateGrade(49).grade, 'Failed');
  assert.equal(evaluateGrade(0).grade, 'Failed');
});

test('calculateQuizSummary computes accurate scores and counts', () => {
  const sampleQuestions = QUESTIONS_BANK.slice(0, 10);
  const answers: Record<number, string> = {};

  // Answer first 8 correctly, 9th incorrectly, 10th unanswered
  for (let i = 0; i < 8; i++) {
    answers[sampleQuestions[i].id] = sampleQuestions[i].correctAnswer;
  }
  answers[sampleQuestions[8].id] = 'خطأ'; // Q9 correct answer is 'صح'

  const summary = calculateQuizSummary(sampleQuestions, answers);
  assert.equal(summary.totalQuestions, 10);
  assert.equal(summary.answeredCount, 9);
  assert.equal(summary.correctCount, 8);
  assert.equal(summary.incorrectCount, 1);
  assert.equal(summary.unansweredCount, 1);
  assert.equal(summary.percentage, 80);
  assert.equal(summary.scoreOutOf100, 80);
  assert.equal(summary.evaluation.grade, 'Very Good');
});

test('tokenizeCppLine highlights keywords, types, strings, and numbers', () => {
  const tokens = tokenizeCppLine('int x = 3; cout << "z=" << x;');
  assert.ok(tokens.some((t) => t.type === 'type' && t.value === 'int'));
  assert.ok(tokens.some((t) => t.type === 'number' && t.value === '3'));
  assert.ok(tokens.some((t) => t.type === 'function' && t.value === 'cout'));
  assert.ok(tokens.some((t) => t.type === 'string' && t.value === '"z="'));
});
