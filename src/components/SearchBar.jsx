import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, ShieldCheck, HeartPulse, Stethoscope } from 'lucide-react';
import { healthCategories } from '../data/healthCategories';
import { firstAidGuides } from '../data/firstAidData';
import { diseasesData } from '../data/diseasesData';

export default function SearchBar({ onSelectArticle, placeholder = "Search health topics, first aid, symptoms, nutrition..." }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Combine and index all searchable datasets
  const allArticles = useMemo(() => {
    const list = [];
    
    healthCategories.forEach(item => {
      list.push({
        id: item.id,
        title: item.title,
        type: 'Health Awareness',
        badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300',
        summary: item.shortDescription,
        keywords: `${item.title} ${item.tag} ${item.shortDescription} ${item.keyPoints ? item.keyPoints.join(' ') : ''}`,
        raw: item,
        icon: HeartPulse
      });
    });

    firstAidGuides.forEach(item => {
      list.push({
        id: item.id,
        title: item.title,
        type: 'First Aid Guide',
        badgeColor: 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-300',
        summary: item.summary,
        keywords: `${item.title} ${item.category} ${item.summary} first aid emergency`,
        raw: item,
        icon: ShieldCheck
      });
    });

    diseasesData.forEach(item => {
      list.push({
        id: item.id,
        title: item.title,
        type: 'Disease Awareness',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
        summary: item.intro,
        keywords: `${item.title} ${item.category} ${item.type} ${item.symptoms.join(' ')}`,
        raw: item,
        icon: Stethoscope
      });
    });

    return list;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allArticles.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query, allArticles]);

  const handleSelect = (item) => {
    if (onSelectArticle) {
      onSelectArticle(item.raw);
    }
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-slate-400">
          <Search className="w-5 h-5 text-teal-600" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-soft text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm sm:text-base font-medium"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-4 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <>
          <div
            className="fixed inset-0 z-20"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 right-0 mt-2 z-30 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 max-h-96 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-700/60 animate-fadeIn">
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <span>Matching Articles & Guides ({results.length})</span>
              <span>Press Esc to close</span>
            </div>

            {results.length > 0 ? (
              results.map((res) => {
                const Icon = res.icon;
                return (
                  <button
                    key={`${res.type}-${res.id}`}
                    onClick={() => handleSelect(res)}
                    className="w-full text-left p-3.5 sm:p-4 hover:bg-teal-50/70 dark:hover:bg-teal-950/30 transition flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-teal-100/70 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 mt-0.5 group-hover:scale-105 transition-transform flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${res.badgeColor}`}>
                          {res.type}
                        </span>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">
                          {res.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 leading-relaxed">
                        {res.summary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1 transition-all self-center" />
                  </button>
                );
              })
            ) : (
              <div className="p-6 text-center text-slate-500 dark:text-slate-400 text-sm">
                No matching topics found for "{query}". Try searching for <span className="text-teal-600 font-semibold cursor-pointer" onClick={() => setQuery('burns')}>burns</span>, <span className="text-teal-600 font-semibold cursor-pointer" onClick={() => setQuery('hygiene')}>hygiene</span>, or <span className="text-teal-600 font-semibold cursor-pointer" onClick={() => setQuery('fever')}>fever</span>.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

