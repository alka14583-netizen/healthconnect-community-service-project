import React, { useState, useMemo } from 'react';
import { healthCategories } from '../data/healthCategories';
import ArticleModal from '../components/ArticleModal';
import BookmarkButton from '../components/BookmarkButton';
import { Search, Stethoscope, Filter, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function HealthAwareness() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { label: 'All Categories', value: 'All' },
    { label: 'Everyday Hygiene & Food', value: 'everyday' },
    { label: 'Maternal & Pediatric', value: 'family' },
    { label: 'Mind & Exercise', value: 'wellness' },
    { label: 'Prevention & Geriatric', value: 'care' }
  ];

  const filteredCategories = useMemo(() => {
    return healthCategories.filter(cat => {
      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        cat.title.toLowerCase().includes(q) || 
        cat.shortDescription.toLowerCase().includes(q) ||
        cat.tag.toLowerCase().includes(q);

      // Filter category group
      let matchesFilter = true;
      if (activeFilter === 'everyday') {
        matchesFilter = ['personal-hygiene', 'nutrition'].includes(cat.id);
      } else if (activeFilter === 'family') {
        matchesFilter = ['womens-health', 'child-healthcare'].includes(cat.id);
      } else if (activeFilter === 'wellness') {
        matchesFilter = ['mental-health', 'fitness-exercise'].includes(cat.id);
      } else if (activeFilter === 'care') {
        matchesFilter = ['disease-prevention', 'senior-healthcare'].includes(cat.id);
      }

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-xs font-bold uppercase tracking-wider">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Core Healthcare Awareness Pillars</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Health & Wellness Categories
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore evidence-based, practical guides on personal sanitation, nutrition, maternal wellness, child safety, exercise, and senior healthcare.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === tab.value
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200/60 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter categories..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

      </div>

      {/* Categories Cards Grid */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 dark:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <BookmarkButton item={item} size="sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {item.readTime}
                </span>
                <button
                  onClick={() => setSelectedCategory(item)}
                  className="px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white dark:bg-teal-950/40 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white font-bold text-xs transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
          <HeartPulse className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-slate-800 dark:text-white">
            No health categories found
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Try adjusting your search terms or select "All Categories".
          </p>
          <button
            onClick={() => {
              setActiveFilter('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-teal-600 text-white font-semibold text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detail Modal */}
      <ArticleModal
        item={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />

    </div>
  );
}

