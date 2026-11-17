import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, PhoneCall, ShieldAlert, Heart, Share2, Printer } from 'lucide-react';
import BookmarkButton from './BookmarkButton';

export default function ArticleModal({ item, onClose, type = "article" }) {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Read about ${item.title} on HealthConnect`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800 transition-all text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Cover / Hero */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-slate-100 dark:bg-slate-800">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          
          {/* Controls bar */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={handleShare}
              title="Share"
              className="p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 shadow-sm transition"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              title="Print Guide"
              className="hidden sm:flex p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 shadow-sm transition"
            >
              <Printer className="w-4 h-4" />
            </button>
            <BookmarkButton item={item} size="md" />
            <button
              onClick={onClose}
              title="Close"
              className="p-2.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 shadow-sm transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-500 text-white mb-2 shadow-sm">
              {item.category || item.tag || item.type || "Healthcare Guide"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
              {item.title}
            </h2>
            {copied && (
              <span className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded ml-2">Link copied!</span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Summary / Overview */}
          {(item.overview || item.intro || item.summary || item.shortDescription) && (
            <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="font-medium text-base">
                {item.overview || item.intro || item.summary || item.shortDescription}
              </p>
            </div>
          )}

          {/* Key Guidelines / Points (Health Awareness) */}
          {item.keyPoints && item.keyPoints.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                Key Guidelines & Health Pillars
              </h3>
              <ul className="space-y-2.5">
                {item.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-normal">
                    <span className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* First Aid Steps */}
          {item.steps && item.steps.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                Step-by-Step Emergency First Aid
              </h3>
              <div className="space-y-4">
                {item.steps.map((s) => (
                  <div key={s.step} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0 shadow-sm text-sm">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                        {s.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disease Symptoms & Prevention */}
          {item.symptoms && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30">
                <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Common Symptoms
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {item.symptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.prevention && (
                <div className="p-4 rounded-2xl bg-green-50/60 dark:bg-green-950/20 border border-green-200/50 dark:border-green-900/30">
                  <h4 className="font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Prevention & Precautions
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {item.prevention.map((prev, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>{prev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Dos and Don'ts */}
          {item.dosAndDonts && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2.5 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Do's
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {item.dosAndDonts.dos.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
                <h4 className="font-bold text-rose-800 dark:text-rose-300 mb-2.5 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Don'ts
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {item.dosAndDonts.donts.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Safety Warnings */}
          {item.safetyWarnings && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
              <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2 text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Critical Safety Warnings
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {item.safetyWarnings.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">⚠️</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* When to Seek ER */}
          {(item.whenToSeekER || item.whenToSeekHelp) && (
            <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
              <h4 className="font-bold text-red-900 dark:text-red-300 mb-2 flex items-center gap-2 text-sm sm:text-base">
                <PhoneCall className="w-5 h-5 text-red-600" />
                When to Seek Immediate Medical Assistance (Ambulance 108 / 112)
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {(item.whenToSeekER || item.whenToSeekHelp).map((er, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">🚨</span>
                    <span>{er}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Community Impact snippet */}
          {item.communityImpact && (
            <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border-l-4 border-teal-600 text-xs sm:text-sm text-teal-900 dark:text-teal-200">
              <strong className="block mb-1 font-semibold">Community Project Impact:</strong>
              {item.communityImpact}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 rounded-b-3xl flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>HealthConnect Community Service Awareness Initiative</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition shadow-sm"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}

