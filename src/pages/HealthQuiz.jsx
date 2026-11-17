import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quizData';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Trophy,
  Award,
  Sparkles,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HealthQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const [highScore, setHighScore] = useState(() => {
    try {
      const saved = localStorage.getItem('healthconnect_quiz_highscore');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const totalQuestions = quizQuestions.length;
  const currentQ = quizQuestions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQ.id];

  const handleSelectOption = (index) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: index
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    const percentage = Math.round((score / totalQuestions) * 100);

    if (percentage >= 70) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
      });
    }

    // Save high score in local storage
    try {
      const record = {
        score,
        total: totalQuestions,
        percentage,
        date: new Date().toLocaleDateString()
      };
      if (!highScore || percentage > highScore.percentage) {
        localStorage.setItem('healthconnect_quiz_highscore', JSON.stringify(record));
        setHighScore(record);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
    setShowExplanation(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Quiz Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Community Health Literacy Test</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Interactive Health Awareness Quiz
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          Test your understanding of personal hygiene, disease prevention, nutrition, and first aid emergencies.
        </p>

        {highScore && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-semibold border border-amber-200/50">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Personal Best: {highScore.score}/{highScore.total} ({highScore.percentage}%) on {highScore.date}</span>
          </div>
        )}
      </div>

      {!isSubmitted ? (
        /* QUIZ IN PROGRESS CARD */
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 shadow-card border border-slate-100 dark:border-slate-700 space-y-8">
          
          {/* Progress Bar & Indicators */}
          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
              <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
              <span>{answeredCount} of {totalQuestions} Answered</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Category & Prompt */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/50">
              {currentQ.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-4 select-none ${
                    isSelected
                      ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-600 dark:border-teal-500 shadow-sm'
                      : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold transition ${
                        isSelected
                          ? 'bg-teal-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                      {option}
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation & Submit Controls */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-700">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs sm:text-sm transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-soft transition flex items-center gap-1.5"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                disabled={answeredCount === 0}
                className="px-7 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-soft transition disabled:opacity-50 flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit Final Quiz</span>
              </button>
            )}
          </div>

        </div>
      ) : (
        /* QUIZ RESULTS VIEW */
        <div className="space-y-8 animate-fadeIn">
          
          {/* Result Score Banner */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-card border border-slate-100 dark:border-slate-700 text-center space-y-6">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400">
              {percentage >= 70 ? (
                <Trophy className="w-10 h-10 text-amber-500" />
              ) : (
                <Award className="w-10 h-10 text-teal-600" />
              )}
            </div>

            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Quiz Result Summary
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                You Scored {score} / {totalQuestions} ({percentage}%)
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
                {percentage >= 80
                  ? "Outstanding! You have exceptional mastery of public healthcare and emergency response."
                  : percentage >= 60
                  ? "Good job! You have solid baseline knowledge, with a few areas to brush up on."
                  : "Keep learning! Review the explanations below to strengthen your emergency preparedness."}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={handleRestart}
                className="px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-soft transition flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart Quiz</span>
              </button>
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-sm transition"
              >
                {showExplanation ? "Hide Answer Explanations" : "Review All Answers & Explanations"}
              </button>
            </div>
          </div>

          {/* Detailed Question Review & Explanations */}
          {(showExplanation || isSubmitted) && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Detailed Review & Medical Explanations
              </h3>

              {quizQuestions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-3xl border transition ${
                      isCorrect
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40'
                        : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Question {idx + 1} • {q.category}
                      </span>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" /> Correct (+1)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400">
                          <XCircle className="w-4 h-4" /> Incorrect (0)
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-3">
                      {q.question}
                    </h4>

                    <div className="space-y-1.5 text-xs sm:text-sm mb-4">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <strong>Correct Answer:</strong>{' '}
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          {q.options[q.correctAnswer]}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <strong>Your Answer:</strong>{' '}
                          <span className="text-rose-600 dark:text-rose-400 font-medium">
                            {userAns !== undefined ? q.options[userAns] : 'Not Answered'}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-2xl bg-white/80 dark:bg-slate-850 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-2">
                      <Info className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Medical Rationale:</strong> {q.explanation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

    </div>
  );
}

