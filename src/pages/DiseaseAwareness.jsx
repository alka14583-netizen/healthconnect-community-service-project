import React, { useState, useMemo } from 'react';
import { diseasesData } from '../data/diseasesData';
import ArticleModal from '../components/ArticleModal';
import BookmarkButton from '../components/BookmarkButton';
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  PhoneCall,
  Search,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';

export default function DiseaseAwareness() {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { label: 'All Conditions', value: 'All' },
    { label: 'Vector-Borne (Mosquitoes)', value: 'vector' },
    { label: 'Chronic Lifestyle', value: 'chronic' },
    { label: 'Airborne & Seasonal', value: 'respiratory' },
    { label: 'Nutritional', value: 'nutritional' },
  ];

  const filteredDiseases = useMemo(() => {
    return diseasesData.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.intro.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.symptoms.some(s => s.toLowerCase().includes(q));

      let matchesFilter = true;
      if (activeCategory === 'vector') {
        matchesFilter = ['malaria', 'dengue'].includes(item.id);
      } else if (activeCategory === 'chronic') {
        matchesFilter = ['diabetes', 'hypertension'].includes(item.id);
      } else if (activeCategory === 'respiratory') {
        matchesFilter = ['tuberculosis', 'seasonal-infections'].includes(item.id);
      } else if (activeCategory === 'nutritional') {
        matchesFilter = ['anemia'].includes(item.id);
      }

      return matchesSearch && matchesFilter;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs font-bold uppercase tracking-wider">
          <Activity className="w-3.5 h-3.5" />
          <span>Disease Prevention & Early Diagnosis</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Disease Awareness Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Recognize early danger signs, understand vectors, practice preventive sanitation, and know precisely when to consult hospital professionals.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === tab.value
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200/60 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search symptoms or disease..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Disease Cards Grid with High Quality Disease Imagery */}
      <div className="space-y-10">
        {filteredDiseases.map((d) => (
          <div
            key={d.id}
            className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 dark:border-slate-700 transition-all duration-300"
          >
            {/* Visual Disease Image Header */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
              <img
                src={d.image}
                alt={d.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              
              {/* Category Badges on Top Left */}
              <div className="absolute top-4 left-4 sm:left-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-white bg-teal-600/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-sm">
                  {d.category}
                </span>
                <span className="text-xs font-semibold text-slate-200 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {d.type}
                </span>
              </div>

              {/* Bookmark Button on Top Right */}
              <div className="absolute top-4 right-4 sm:right-6">
                <BookmarkButton item={d} size="md" />
              </div>

              {/* Title & Headline on Image Scrim */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {d.title}
                </h2>
              </div>
            </div>

            {/* Disease Details Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Introduction paragraph */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {d.intro}
              </p>

              {/* Three Pillar Cards: Symptoms, Prevention, When to Seek ER */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Symptoms */}
                <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                  <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Common Symptoms</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {d.symptoms.slice(0, 4).map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                    {d.symptoms.length > 4 && (
                      <li className="text-xs font-semibold text-amber-700 dark:text-amber-400 pt-1">
                        + {d.symptoms.length - 4} more symptoms
                      </li>
                    )}
                  </ul>
                </div>

                {/* Prevention */}
                <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-300 mb-3 flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Prevention & Protection</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {d.prevention.slice(0, 4).map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to Seek Help */}
                <div className="p-5 rounded-2xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
                  <h4 className="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-sm">
                    <PhoneCall className="w-4 h-4 text-red-600" />
                    <span>When to Seek Medical Help</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {d.whenToSeekHelp.slice(0, 4).map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">🚨</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Card Action Bar */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Verified clinical prevention guidelines • WHO & National Health Mission aligned
                </span>
                <button
                  onClick={() => setSelectedDisease(d)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white dark:bg-teal-950/40 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Open Full Clinical Guide (Modal)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ArticleModal
        item={selectedDisease}
        onClose={() => setSelectedDisease(null)}
      />

    </div>
  );
}
