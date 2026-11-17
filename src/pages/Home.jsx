import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  Activity,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Search,
  BookOpen,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Clock,
  Stethoscope
} from 'lucide-react';
import SearchBar from '../components/SearchBar';
import HealthTipBanner from '../components/HealthTipBanner';
import ArticleModal from '../components/ArticleModal';
import BookmarkButton from '../components/BookmarkButton';
import { healthCategories } from '../data/healthCategories';
import { communityImpactStats, upcomingCamps } from '../data/communityServicesData';
import { firstAidGuides } from '../data/firstAidData';

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      kicker: "Community Healthcare & Awareness Platform",
      title: "Quality Medical Care & Awareness Facility",
      description: "Dedicated to educating families, students, and underserved communities with essential health literacy, preventive hygiene, nutrition, disease defense, and life-saving first aid.",
      btn1Text: "Explore Health Guides",
      btn1Link: "/health-awareness",
      btn2Text: "Contact Us",
      btn2Link: "/contact",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=2000&q=80"
    },
    {
      kicker: "Emergency Care & Life-Saving Procedures",
      title: "Step-by-Step Emergency First Aid Protocol",
      description: "Immediate, verified medical actions for thermal burns, fractures, cuts, and choking before ambulance responders arrive. Accessible 24x7.",
      btn1Text: "Read First Aid Guide",
      btn1Link: "/first-aid",
      btn2Text: "Emergency Hotlines",
      btn2Link: "tel:108",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2000&q=80"
    },
    {
      kicker: "Grassroots Healthcare Outreach",
      title: "Free Community Screening & Health Camps",
      description: "Organizing free rural physician consultations, voluntary blood donation drives, maternal literacy, and community cleanliness rallies.",
      btn1Text: "Join as Volunteer",
      btn1Link: "/community",
      btn2Text: "View Camp Venues",
      btn2Link: "/community",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentSlide];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION WITH CLINICAL MEDICAL BACKGROUND (MATCHING USER REFERENCE DESIGN) */}
      <section className="relative overflow-hidden">
        {/* Photographic Hero Background with Medical Gradient Overlay */}
        <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
          <img
            src={activeSlide.image}
            alt="Medical Team"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-125 contrast-105 saturate-110 transition-all duration-700"
          />
          {/* Luminous, Bright Medical Cyan/Sky Blue Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 via-cyan-800/40 to-sky-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-black/15" />

          {/* Left Arrow Button */}
          <button
            onClick={handlePrevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 sm:left-8 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center transition border border-white/20 shadow-md group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextSlide}
            aria-label="Next Slide"
            className="absolute right-4 sm:right-8 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center transition border border-white/20 shadow-md group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24 text-center space-y-6">
            
            {/* Tagline / Subtitle */}
            <div className="inline-block text-cyan-200 font-semibold text-xs sm:text-sm tracking-wide uppercase drop-shadow">
              {activeSlide.kicker}
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              {activeSlide.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
              {activeSlide.description}
            </p>

            {/* Pill Action Buttons (Matching Reference Image Style) */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to={activeSlide.btn1Link}
                className="px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {activeSlide.btn1Text}
              </Link>
              
              <Link
                to={activeSlide.btn2Link}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {activeSlide.btn2Text}
              </Link>
            </div>

            {/* Integrated Search Bar inside Hero */}
            <div className="pt-6 max-w-2xl mx-auto">
              <div className="p-2 sm:p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xl">
                <SearchBar onSelectArticle={(art) => setSelectedArticle(art)} placeholder="Search health topics, first aid, symptoms, nutrition..." />
              </div>
            </div>

            {/* Quick Health Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-cyan-100">
              <span className="flex items-center gap-1.5 drop-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified Public Health Guidance
              </span>
              <span className="flex items-center gap-1.5 drop-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Free Community Service
              </span>
              <span className="flex items-center gap-1.5 drop-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Offline Bookmarks Supported
              </span>
            </div>

          </div>
        </div>

        {/* 3 ICONIC OVERLAPPING BOTTOM FEATURE CARDS (EXACT STYLE OF USER REFERENCE IMAGE) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-30">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-3xl overflow-hidden border border-white/20">
            
            {/* Card 1: Emergency Cases */}
            <div className="bg-[#0284c7] text-white p-7 sm:p-9 flex flex-col justify-between space-y-4 hover:bg-[#0369a1] transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Emergency Cases
                </h3>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                  Immediate step-by-step guidance for burns, fractures, deep cuts, and choking. Direct access to 24x7 Ambulance 108.
                </p>
              </div>
              <Link
                to="/first-aid"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-sky-200 transition pt-2"
              >
                <span>First Aid Emergency Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Doctors Schedules / Health Awareness */}
            <div className="bg-[#0369a1] text-white p-7 sm:p-9 flex flex-col justify-between space-y-4 hover:bg-[#075985] transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Health Awareness Hub
                </h3>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                  Explore 8 core health categories: personal hygiene, nutrition, maternal care, mental wellness, and senior healthcare.
                </p>
              </div>
              <Link
                to="/health-awareness"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-sky-200 transition pt-2"
              >
                <span>Explore 8 Health Pillars</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Opening Hours / Community Health Camps */}
            <div className="bg-[#075985] text-white p-7 sm:p-9 flex flex-col justify-between space-y-4 hover:bg-[#0c4a6e] transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <Clock className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-900">
                    24x7 Helpline
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Service Schedules
                </h3>
                <div className="space-y-1.5 text-xs text-sky-100">
                  <div className="flex justify-between border-b border-sky-400/20 pb-1">
                    <span>Emergency Ambulance</span>
                    <span className="font-bold text-white">108 (24x7 Free)</span>
                  </div>
                  <div className="flex justify-between border-b border-sky-400/20 pb-1">
                    <span>Free Health Camps</span>
                    <span className="font-bold text-white">Every Weekend</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blood Donation Registry</span>
                    <span className="font-bold text-white">Available Always</span>
                  </div>
                </div>
              </div>
              <Link
                to="/community"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-sky-200 transition pt-2"
              >
                <span>Camp Venues & Volunteer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED DAILY HEALTH TIP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HealthTipBanner />
      </section>

      {/* HEALTHCARE AWARENESS STATISTICS (NO BCA MENTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-850 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Community Healthcare Impact & Reach
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Real-world impact delivered through grassroots community engagement and rural health adoption.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {communityImpactStats.map((stat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/60">
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE HEALTH CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
              <Activity className="w-4 h-4" />
              <span>Core Medical Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Explore Health Categories
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Practical guides tailored for families, students, and rural living.
            </p>
          </div>

          <Link
            to="/health-awareness"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition"
          >
            <span>View All Categories</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthCategories.slice(0, 4).map((cat) => (
            <div
              key={cat.id}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-700">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${cat.badgeColor}`}>
                    {cat.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <BookmarkButton item={cat} size="sm" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-700">
                  <span className="text-xs text-slate-400 font-medium">
                    {cat.readTime}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(cat)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FIRST AID SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-850 dark:to-slate-900 rounded-3xl p-8 sm:p-10 border border-red-100 dark:border-red-900/30">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Life-Saving First Aid Protocol</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Be Prepared in Medical Emergencies
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                Immediate, correct action in the first 5 minutes of an accident or cardiac event drastically improves patient survival rates.
              </p>
            </div>

            <Link
              to="/first-aid"
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-sm transition flex items-center gap-2"
            >
              <span>View All 6 First Aid Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {firstAidGuides.slice(0, 3).map((guide) => (
              <div
                key={guide.id}
                onClick={() => setSelectedArticle(guide)}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-red-100/60 dark:border-slate-700 cursor-pointer hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/50 px-2 py-0.5 rounded-full">
                    {guide.category}
                  </span>
                  <BookmarkButton item={guide} size="sm" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  {guide.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {guide.summary}
                </p>
                <div className="mt-4 text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                  <span>View Step-by-Step Instructions</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SERVICE HIGHLIGHTS (NO BCA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>On-Ground Social Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Upcoming Community Camps
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Join as a community volunteer or spread the word to local families.
            </p>
          </div>

          <Link
            to="/community"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition"
          >
            <span>Community Dashboard & Registration</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingCamps.map((camp) => (
            <div
              key={camp.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-300">
                  <Calendar className="w-4 h-4" />
                  <span>{camp.date} • {camp.time}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug">
                  {camp.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  📍 {camp.venue}
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
                  <strong>Offered Services:</strong> {camp.services}
                </div>
              </div>

              <Link
                to="/community"
                className="w-full py-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 hover:bg-teal-600 hover:text-white font-semibold text-xs transition text-center"
              >
                Volunteer for This Camp
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION (CTA) SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white p-8 sm:p-12 shadow-soft-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 uppercase tracking-wider text-teal-200">
              Interactive Learning
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Test Your Healthcare Knowledge!
            </h2>
            <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed">
              Take our interactive 10-question health awareness quiz covering nutrition, disease symptoms, first aid, and personal hygiene. Receive instant scores and learn life-saving facts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <Link
              to="/quiz"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-teal-800 hover:bg-teal-50 font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-5 h-5 text-teal-600" />
              <span>Start Health Quiz</span>
            </Link>

            <Link
              to="/community"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-teal-600/80 hover:bg-teal-600 text-white font-bold text-sm border border-teal-400/30 transition flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              <span>Join Volunteer Force</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLE DETAIL MODAL */}
      <ArticleModal
        item={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}
