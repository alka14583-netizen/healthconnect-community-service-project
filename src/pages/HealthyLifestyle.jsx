import React, { useState } from 'react';
import HealthTipBanner from '../components/HealthTipBanner';
import HabitsChecklist from '../components/HabitsChecklist';
import WaterTracker from '../components/WaterTracker';
import {
  foodRecommendations,
  exerciseRoutines,
  sleepHygieneGuidelines,
  mentalWellnessTips
} from '../data/healthyLifestyleData';
import {
  Sparkles,
  Apple,
  Dumbbell,
  Moon,
  Brain,
  CheckCircle2,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';

export default function HealthyLifestyle() {
  const [activeTab, setActiveTab] = useState('habits');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Daily Wellness & Habit Optimization</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Healthy Lifestyle & Wellness
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Small, consistent daily habits prevent 80% of chronic metabolic diseases. Track your hydration, check off your daily wellness goals, and adopt nutritious Indian superfoods.
        </p>
      </div>

      {/* Daily Rotating Health Tip */}
      <HealthTipBanner />

      {/* Interactive Habit & Hydration Trackers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <HabitsChecklist />
        <WaterTracker />
      </div>

      {/* Navigation Pills to Explore Food, Fitness, Sleep, Mind */}
      <div className="pt-6">
        <div className="border-b border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 sm:gap-6 justify-center">
          <button
            onClick={() => setActiveTab('nutrition')}
            className={`pb-4 px-3 text-sm sm:text-base font-bold flex items-center gap-2 border-b-2 transition ${
              activeTab === 'nutrition'
                ? 'border-teal-600 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Apple className="w-4 h-4" />
            <span>Nutritious Foods & Millets</span>
          </button>

          <button
            onClick={() => setActiveTab('exercise')}
            className={`pb-4 px-3 text-sm sm:text-base font-bold flex items-center gap-2 border-b-2 transition ${
              activeTab === 'exercise'
                ? 'border-teal-600 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>Daily Exercise Routines</span>
          </button>

          <button
            onClick={() => setActiveTab('sleep')}
            className={`pb-4 px-3 text-sm sm:text-base font-bold flex items-center gap-2 border-b-2 transition ${
              activeTab === 'sleep'
                ? 'border-teal-600 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>Restorative Sleep Tips</span>
          </button>

          <button
            onClick={() => setActiveTab('mental')}
            className={`pb-4 px-3 text-sm sm:text-base font-bold flex items-center gap-2 border-b-2 transition ${
              activeTab === 'mental'
                ? 'border-teal-600 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Mental Wellness & Mindfulness</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="pt-8">
          
          {/* TAB 1: NUTRITION */}
          {activeTab === 'nutrition' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Wholesome Indian Superfoods & Balanced Plate
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  You do not need expensive foreign supplements. Traditional millets, seasonal greens, and plant lentils build unshakeable immunity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {foodRecommendations.map((grp, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700 space-y-4"
                  >
                    <div>
                      <h4 className="text-lg font-bold text-teal-700 dark:text-teal-300">
                        {grp.category}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {grp.description}
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {grp.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800"
                        >
                          <div className="font-bold text-slate-900 dark:text-white text-sm">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                            {item.benefits}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: EXERCISE */}
          {activeTab === 'exercise' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Accessible Movement Routines for All Ages
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Target 150 minutes of moderate activity weekly to elevate cardiovascular capacity and mental vigor.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exerciseRoutines.map((ex, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200/50">
                        {ex.intensity} • {ex.duration}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {ex.target}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {ex.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ex.description}
                    </p>

                    <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/30 text-xs text-teal-900 dark:text-teal-200 border border-teal-100 dark:border-teal-900/40">
                      <strong>Coach Tip:</strong> {ex.tips}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SLEEP */}
          {activeTab === 'sleep' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Sleep Hygiene & Restorative Circadian Rhythms
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Quality sleep cleanses cerebral beta-amyloid proteins and regulates glucose metabolism.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sleepHygieneGuidelines.map((sl, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700 flex items-start gap-4"
                  >
                    <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                      <Moon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                        {sl.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {sl.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MENTAL WELLNESS */}
          {activeTab === 'mental' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Mental Wellness & Coping Mechanisms
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Manage academic pressures, stress, and anxiety through mindful grounding techniques.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mentalWellnessTips.map((mw, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700 flex items-start gap-4"
                  >
                    <div className="p-3 rounded-2xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex-shrink-0">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                        {mw.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {mw.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

