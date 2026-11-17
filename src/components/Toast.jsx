import React from 'react';
import { useBookmarks } from '../context/BookmarkContext';
import { CheckCircle2, Bookmark } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useBookmarks();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 animate-bounce">
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900 text-white dark:bg-teal-700 dark:text-white shadow-xl text-sm font-medium border border-teal-500/30">
        <Bookmark className="w-4 h-4 text-teal-400 fill-teal-400" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}

