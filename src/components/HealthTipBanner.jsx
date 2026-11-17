import React, { useState } from 'react';
import { dailyTips, getTodayTip } from '../data/dailyTipsData';
import { Sparkles, ChevronLeft, ChevronRight, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function HealthTipBanner() {
  const todayTip = getTodayTip();
  const initialIndex = dailyTips.findIndex(t => t.id === todayTip.id);
  const [currentIndex, setCurrentIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

  const currentTip = dailyTips[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? dailyTips.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === dailyTips.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-800 text-white shadow-soft-lg p-6 sm:p-8">
      {/* Background Decorative Pattern */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Side: Badge & Tip Content */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-teal-100 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-200" />
              Daily Health Tip • {currentTip.day}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/30 text-emerald-100 border border-emerald-400/20">
              {currentTip.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            {currentTip.title}
          </h3>

          <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
            {currentTip.tip}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 text-xs sm:text-sm text-teal-200/90">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span><strong>Action:</strong> {currentTip.action}</span>
            </div>
            <div className="hidden sm:inline text-teal-400">•</div>
            <div className="flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <span className="italic">{currentTip.fact}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Slider Navigation Controls */}
        <div className="flex items-center gap-2 self-end md:self-center">
          <button
            onClick={handlePrev}
            aria-label="Previous Health Tip"
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-xs font-semibold px-2 text-teal-100">
            {currentIndex + 1} / {dailyTips.length}
          </div>
          <button
            onClick={handleNext}
            aria-label="Next Health Tip"
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

