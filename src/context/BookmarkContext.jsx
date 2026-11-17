import React, { createContext, useContext, useState, useEffect } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const stored = localStorage.getItem('healthconnect_bookmarks');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to load bookmarks", e);
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('healthconnect_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error("Failed to save bookmarks", e);
    }
  }, [bookmarks]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const isBookmarked = (id) => {
    return bookmarks.some(item => item.id === id);
  };

  const toggleBookmark = (item) => {
    if (isBookmarked(item.id)) {
      setBookmarks(prev => prev.filter(b => b.id !== item.id));
      showToast(`Removed "${item.title}" from saved guides`);
    } else {
      setBookmarks(prev => [
        ...prev,
        {
          id: item.id,
          title: item.title,
          category: item.category || item.tag || 'Health Guide',
          type: item.type || 'Article',
          image: item.image,
          path: item.path || `/health-awareness?id=${item.id}`,
          summary: item.shortDescription || item.summary || item.intro || ''
        }
      ]);
      showToast(`Saved "${item.title}" to your bookmarks`);
    }
  };

  const removeBookmark = (id) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
    showToast("Guide removed from bookmarks");
  };

  const clearBookmarks = () => {
    setBookmarks([]);
    showToast("Cleared all bookmarks");
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        isBookmarked,
        toggleBookmark,
        removeBookmark,
        clearBookmarks,
        bookmarkCount: bookmarks.length,
        toastMessage
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);

