import React, { useState } from 'react';
import { useBookmarks } from '../context/BookmarkContext';
import { Link } from 'react-router-dom';
import ArticleModal from '../components/ArticleModal';
import {
  Bookmark,
  Trash2,
  BookOpen,
  ArrowRight,
  Heart,
  Share2
} from 'lucide-react';
import { healthCategories } from '../data/healthCategories';
import { firstAidGuides } from '../data/firstAidData';
import { diseasesData } from '../data/diseasesData';

export default function Bookmarks() {
  const { bookmarks, removeBookmark, clearBookmarks } = useBookmarks();
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Helper to find raw object for modal view
  const openBookmarkModal = (bm) => {
    const raw =
      healthCategories.find(c => c.id === bm.id) ||
      firstAidGuides.find(f => f.id === bm.id) ||
      diseasesData.find(d => d.id === bm.id) ||
      bm;

    setSelectedArticle(raw);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Personal Health Library</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Saved Guides & Articles ({bookmarks.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Access your saved first aid protocols and health guidelines anytime, stored in your browser.
          </p>
        </div>

        {bookmarks.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm("Remove all saved bookmarks?")) {
                clearBookmarks();
              }
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-red-600 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 transition self-start sm:self-auto"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All Saved</span>
          </button>
        )}
      </div>

      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((bm) => (
            <div
              key={bm.id}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-card border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img
                    src={bm.image || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"}
                    alt={bm.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-600 text-white shadow-sm">
                      {bm.category}
                    </span>
                  </div>
                  <button
                    onClick={() => removeBookmark(bm.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 text-red-500 hover:bg-red-500 hover:text-white transition shadow-sm"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    {bm.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {bm.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => openBookmarkModal(bm)}
                  className="w-full py-2.5 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white dark:bg-teal-950/40 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white font-bold text-xs transition flex items-center justify-center gap-1.5"
                >
                  <span>Open Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 space-y-4">
          <Bookmark className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            No Bookmarked Guides Yet
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            You can bookmark any health category, first aid procedure, or disease guide across HealthConnect by clicking the bookmark icon on any card.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/health-awareness"
              className="px-5 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition"
            >
              Explore Health Categories
            </Link>
            <Link
              to="/first-aid"
              className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-300 transition"
            >
              First Aid Guide
            </Link>
          </div>
        </div>
      )}

      {/* Article Modal */}
      <ArticleModal
        item={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}

