import React, { useState, useEffect } from 'react';
import { healthyHabitsList } from '../data/healthyLifestyleData';
import { Check, RotateCcw, Award, CheckCircle2, Flame, Droplets, Sparkles, Footprints, Apple, HeartPulse, ShieldCheck, Moon, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';

const ICON_MAP = {
  Droplets,
  Sparkles,
  Footprints,
  Apple,
  HeartPulse,
  ShieldCheck,
  Moon,
  Smile
};

export default function HabitsChecklist() {
  const [completedHabits, setCompletedHabits] = useState(() => {
    try {
      const stored = localStorage.getItem('healthconnect_habits');
      const savedDate = localStorage.getItem('healthconnect_habits_date');
      const today = new Date().toDateString();

      // If stored from a previous day, keep history or start fresh
      if (savedDate === today && stored) {
        return JSON.parse(stored);
      }
      return [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('healthconnect_habits', JSON.stringify(completedHabits));
      localStorage.setItem('healthconnect_habits_date', new Date().toDateString());
    } catch (e) {
      console.error("Habits storage error", e);
    }
  }, [completedHabits]);

  const toggleHabit = (id) => {
    setCompletedHabits(prev => {
      const isAlreadyChecked = prev.includes(id);
      let updated;
      if (isAlreadyChecked) {
        updated = prev.filter(item => item !== id);
      } else {
        updated = [...prev, id];
        // If this completes all habits, fire celebratory confetti!
        if (updated.length === healthyHabitsList.length) {
          triggerCelebration();
        }
      }
      return updated;
    });
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setCompletedHabits([]);
  };

  const progress = Math.round((completedHabits.length / healthyHabitsList.length) * 100);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 dark:border-slate-700/60 transition">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
              <Award className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Daily Wellness Tracker
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Today's Healthy Habits Checklist
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Check off your preventive habits each day. Stored automatically in your browser.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Today</span>
        </button>
      </div>

      {/* Progress Bar & Stats */}
      <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 mb-6">
        <div className="flex items-center justify-between text-sm font-semibold mb-2">
          <div className="flex items-center gap-2 text-teal-900 dark:text-teal-200">
            <Flame className="w-4 h-4 text-teal-600 dark:text-teal-400 fill-teal-600" />
            <span>Progress: {completedHabits.length} of {healthyHabitsList.length} habits done</span>
          </div>
          <span className="text-teal-700 dark:text-teal-300 font-bold">{progress}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-teal-200/50 dark:bg-teal-900/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {progress === 100 && (
          <div className="mt-2.5 flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Outstanding work! You've achieved all 8 community wellness goals today!</span>
          </div>
        )}
      </div>

      {/* Habits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {healthyHabitsList.map((habit) => {
          const isDone = completedHabits.includes(habit.id);
          const Icon = ICON_MAP[habit.icon] || CheckCircle2;

          return (
            <div
              key={habit.id}
              onClick={() => toggleHabit(habit.id)}
              className={`p-3.5 sm:p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-3.5 select-none ${
                isDone
                  ? "bg-teal-50/80 dark:bg-teal-950/40 border-teal-300 dark:border-teal-800 shadow-sm"
                  : "bg-white dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-700/80 hover:border-teal-400/60 hover:bg-slate-50/60 dark:hover:bg-slate-800/60"
              }`}
            >
              {/* Custom checkbox */}
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-0.5 ${
                  isDone
                    ? "bg-teal-600 text-white shadow-sm scale-105"
                    : "border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                }`}
              >
                {isDone && <Check className="w-4 h-4 stroke-[3]" />}
              </div>

              {/* Habit Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {habit.category}
                  </span>
                </div>
                <p
                  className={`text-sm font-medium leading-snug transition-colors ${
                    isDone
                      ? "line-through text-slate-400 dark:text-slate-500"
                      : "text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {habit.text}
                </p>
              </div>

              <div
                className={`p-2 rounded-xl flex-shrink-0 ${
                  isDone
                    ? "bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300"
                    : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

