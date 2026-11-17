import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { BookmarkProvider } from './context/BookmarkContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';
import SearchBar from './components/SearchBar';
import ArticleModal from './components/ArticleModal';

// Pages
import Home from './pages/Home';
import HealthAwareness from './pages/HealthAwareness';
import FirstAid from './pages/FirstAid';
import DiseaseAwareness from './pages/DiseaseAwareness';
import HealthyLifestyle from './pages/HealthyLifestyle';
import CommunityServices from './pages/CommunityServices';
import HealthQuiz from './pages/HealthQuiz';
import ContactUs from './pages/ContactUs';
import Bookmarks from './pages/Bookmarks';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSelectFromSearch = (article) => {
    setSelectedArticle(article);
    setIsSearchOpen(false);
  };

  return (
    <ThemeProvider>
      <BookmarkProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-200">
            {/* Scroll-To-Top automation and floating button */}
            <ScrollToTop />

            {/* Top Navigation */}
            <Navbar onOpenSearch={handleOpenSearch} />

            {/* Quick Search Overlay Modal */}
            {isSearchOpen && (
              <div 
                className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fadeIn"
                onClick={handleCloseSearch}
              >
                <div 
                  className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      Search HealthConnect Platform
                    </span>
                    <button
                      onClick={handleCloseSearch}
                      className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      Close (Esc)
                    </button>
                  </div>
                  <SearchBar onSelectArticle={handleSelectFromSearch} />
                </div>
              </div>
            )}

            {/* Main Page Routing View */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/health-awareness" element={<HealthAwareness />} />
                <Route path="/first-aid" element={<FirstAid />} />
                <Route path="/diseases" element={<DiseaseAwareness />} />
                <Route path="/healthy-lifestyle" element={<HealthyLifestyle />} />
                <Route path="/community" element={<CommunityServices />} />
                <Route path="/quiz" element={<HealthQuiz />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Toast Alerts for bookmarks/actions */}
            <Toast />

            {/* Global Article Modal */}
            <ArticleModal
              item={selectedArticle}
              onClose={() => setSelectedArticle(null)}
            />
          </div>
        </Router>
      </BookmarkProvider>
    </ThemeProvider>
  );
}

