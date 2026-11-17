import React from 'react';
import { Bookmark } from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';

export default function BookmarkButton({ item, size = "md", showLabel = false }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(item.id);

  const sizeClasses = {
    sm: "p-1.5 text-xs",
    md: "p-2.5 text-sm",
    lg: "p-3 text-base"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleBookmark(item);
      }}
      title={bookmarked ? "Remove from Bookmarks" : "Save to Bookmarks"}
      aria-label={bookmarked ? "Remove from Bookmarks" : "Save to Bookmarks"}
      className={`inline-flex items-center gap-1.5 rounded-xl transition-all duration-200 border ${
        bookmarked
          ? "bg-primary text-white border-primary shadow-sm"
          : "bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-primary dark:hover:text-primary hover:border-primary/40"
      } ${sizeClasses[size] || sizeClasses.md}`}
    >
      <Bookmark
        className={`${iconSizes[size] || iconSizes.md} ${
          bookmarked ? "fill-white" : ""
        } transition-transform duration-200 hover:scale-110`}
      />
      {showLabel && (
        <span className="font-medium">
          {bookmarked ? "Saved" : "Save Guide"}
        </span>
      )}
    </button>
  );
}

