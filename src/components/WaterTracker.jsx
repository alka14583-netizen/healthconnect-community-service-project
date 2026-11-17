import React, { useState, useEffect } from 'react';
import { Droplets, Plus, Minus, RotateCcw, CheckCircle2, Sparkles } from 'lucide-react';

export default function WaterTracker() {
  const DAILY_GOAL_ML = 2500;
  const GLASS_SIZE_ML = 250;

  const [intake, setIntake] = useState(() => {
    try {
      const stored = localStorage.getItem('healthconnect_water');
      const savedDate = localStorage.getItem('healthconnect_water_date');
      const today = new Date().toDateString();

      if (savedDate === today && stored) {
        return parseInt(stored, 10);
      }
      return 0;
    } catch (e) {
      return 0;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('healthconnect_water', intake.toString());
      localStorage.setItem('healthconnect_water_date', new Date().toDateString());
    } catch (e) {
      console.error("Water tracker storage error", e);
    }
  }, [intake]);

  const addGlass = () => {
    setIntake(prev => Math.min(prev + GLASS_SIZE_ML, 4000));
  };

  const removeGlass = () => {
    setIntake(prev => Math.max(prev - GLASS_SIZE_ML, 0));
  };

  const resetWater = () => {
    setIntake(0);
  };

  const glassesCount = Math.round(intake / GLASS_SIZE_ML);
  const totalGlassesTarget = DAILY_GOAL_ML / GLASS_SIZE_ML;
  const percentage = Math.min(Math.round((intake / DAILY_GOAL_ML) * 100), 100);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 dark:border-slate-700/60 transition">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300">
              <Droplets className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Hydration Calculator & Tracker
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Daily Water Intake Tracker
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Maintain mental alertness, detoxify kidneys, and regulate blood volume.
          </p>
        </div>

        <button
          onClick={resetWater}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Visual Indicator Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-slate-900 dark:to-slate-850 border border-cyan-100 dark:border-slate-700 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide">
              Today's Intake
            </span>
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                {(intake / 1000).toFixed(2)}
              </span>
              <span className="text-slate-500 dark:text-slate-400 font-medium text-lg">
                / {(DAILY_GOAL_ML / 1000).toFixed(1)} Liters
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {glassesCount} of {totalGlassesTarget} glasses (250 ml each)
            </p>
          </div>

          {/* Quick Glass Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={removeGlass}
              disabled={intake === 0}
              className="p-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition"
              title="Remove a glass"
            >
              <Minus className="w-5 h-5" />
            </button>

            <button
              onClick={addGlass}
              className="px-5 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold flex items-center gap-2 shadow-soft hover:shadow-soft-lg active:scale-95 transition"
              title="Add 250ml glass"
            >
              <Plus className="w-5 h-5" />
              <span>+1 Glass (250ml)</span>
            </button>
          </div>
        </div>

        {/* Hydration progress gauge */}
        <div className="mt-5">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
            <span>Hydration Goal ({percentage}%)</span>
            <span>{intake >= DAILY_GOAL_ML ? "Goal Achieved! 💧" : `${DAILY_GOAL_ML - intake} ml remaining`}</span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-200/80 dark:bg-slate-700 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Hydration Advice */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
          <strong className="block text-slate-900 dark:text-white mb-0.5">Morning Ritual</strong>
          Drink 500ml upon waking to activate intestinal motility.
        </div>
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
          <strong className="block text-slate-900 dark:text-white mb-0.5">Meal Timing</strong>
          Drink water 30 minutes before meals rather than gulping during food.
        </div>
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
          <strong className="block text-slate-900 dark:text-white mb-0.5">Clean Source</strong>
          Always use boiled, filtered, or trusted RO safe drinking water.
        </div>
      </div>
    </div>
  );
}

