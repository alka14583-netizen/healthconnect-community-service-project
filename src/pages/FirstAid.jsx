import React, { useState } from 'react';
import { firstAidGuides } from '../data/firstAidData';
import ArticleModal from '../components/ArticleModal';
import BookmarkButton from '../components/BookmarkButton';
import {
  ShieldAlert,
  Flame,
  Bandage,
  Bone,
  AlertOctagon,
  LifeBuoy,
  PhoneCall,
  CheckCircle,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  burns: Flame,
  'cuts-wounds': Bandage,
  fractures: Bone,
  nosebleeds: AlertOctagon,
  choking: LifeBuoy,
  'emergency-response': ShieldAlert
};

export default function FirstAid() {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [activeTab, setActiveTab] = useState('burns');

  const activeItem = firstAidGuides.find(g => g.id === activeTab) || firstAidGuides[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Emergency First Aid Manual</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          First Aid & Immediate Care
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Accidents occur without warning. Follow these step-by-step medical protocols to stabilize injuries and prevent complications before emergency responders arrive.
        </p>

        {/* Emergency Callout */}
        <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-red-500 text-white font-bold text-xs sm:text-sm shadow-md animate-subtle-pulse">
          <PhoneCall className="w-4 h-4" />
          <span>In Life-Threatening Emergencies, Call 108 (Ambulance) or 112 Immediately!</span>
        </div>
      </div>

      {/* DR ABC Protocol Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-soft-lg">
        <div className="max-w-3xl mb-6">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
            Standard Emergency Triage
          </span>
          <h2 className="text-xl sm:text-2xl font-bold mt-1">
            The Universal DR ABC Emergency Protocol
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Always execute these 5 checks in sequence when encountering an unconscious or injured casualty:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-2xl font-extrabold text-teal-400">D</span>
            <h3 className="font-bold text-sm text-white mt-1">Danger</h3>
            <p className="text-xs text-slate-300 mt-0.5">Ensure scene is safe for you, bystanders, and casualty.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-2xl font-extrabold text-teal-400">R</span>
            <h3 className="font-bold text-sm text-white mt-1">Response</h3>
            <p className="text-xs text-slate-300 mt-0.5">Tap shoulders and speak aloud. Check consciousness.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-2xl font-extrabold text-teal-400">A</span>
            <h3 className="font-bold text-sm text-white mt-1">Airway</h3>
            <p className="text-xs text-slate-300 mt-0.5">Gently tilt head back and lift chin to clear airway.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-2xl font-extrabold text-teal-400">B</span>
            <h3 className="font-bold text-sm text-white mt-1">Breathing</h3>
            <p className="text-xs text-slate-300 mt-0.5">Look, listen, and feel for normal breathing (10 secs).</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-2xl font-extrabold text-teal-400">C</span>
            <h3 className="font-bold text-sm text-white mt-1">CPR / Circulation</h3>
            <p className="text-xs text-slate-300 mt-0.5">If not breathing, immediately start hard & fast chest compressions.</p>
          </div>
        </div>
      </div>

      {/* Interactive Tabs for the 6 Guides */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 max-w-4xl mx-auto">
        {firstAidGuides.map((guide) => {
          const Icon = ICON_MAP[guide.id] || ShieldAlert;
          const isActive = activeTab === guide.id;
          return (
            <button
              key={guide.id}
              onClick={() => setActiveTab(guide.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                isActive
                  ? 'bg-white dark:bg-slate-750 text-red-600 dark:text-red-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{guide.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Guide Detailed View */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 shadow-card border border-slate-100 dark:border-slate-700 space-y-8">
        
        {/* Guide Top Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-700">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider bg-red-50 dark:bg-red-950/50 px-2.5 py-0.5 rounded-full border border-red-200/50">
                {activeItem.category}
              </span>
              <span className="text-xs text-slate-400">• Priority: {activeItem.severity}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {activeItem.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {activeItem.summary}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <BookmarkButton item={activeItem} size="lg" showLabel={true} />
            <button
              onClick={() => setSelectedGuide(activeItem)}
              className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-sm transition flex items-center gap-2"
            >
              <span>Full Screen View</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span>Step-by-Step Action Plan</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeItem.steps.map((st) => (
              <div
                key={st.step}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/80 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-sm shadow-sm">
                  {st.step}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warnings & When to Seek ER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Critical Warnings */}
          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
            <h4 className="font-bold text-amber-900 dark:text-amber-300 text-base mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>Things You Must NEVER Do</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {activeItem.safetyWarnings.map((warn, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✕</span>
                  <span>{warn}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When to Seek ER */}
          <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40">
            <h4 className="font-bold text-red-900 dark:text-red-300 text-base mb-3 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-red-600" />
              <span>When to Seek Immediate Medical Assistance</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {activeItem.whenToSeekER.map((er, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">🚨</span>
                  <span>{er}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Modal */}
      <ArticleModal
        item={selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />

    </div>
  );
}

