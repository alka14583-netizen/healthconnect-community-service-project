import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  PhoneCall,
  Mail,
  MapPin,
  Shield,
  Send,
  CheckCircle2,
  ExternalLink,
  Users,
  Award
} from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      return;
    }
    try {
      const stored = localStorage.getItem('healthconnect_subscribers');
      const list = stored ? JSON.parse(stored) : [];
      list.push({ email: newsletterEmail, date: new Date().toISOString() });
      localStorage.setItem('healthconnect_subscribers', JSON.stringify(list));
    } catch (err) {
      console.error(err);
    }
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Emergency Helplines Callout Box */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-teal-900/60 via-slate-850 to-emerald-950/60 border border-teal-500/20 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  National Emergency Medical Helplines (24x7 Free)
                </h4>
                <p className="text-xs text-slate-400">
                  Save these numbers or tap to dial immediately during accidents and severe medical distress.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:108"
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition"
              >
                <span>🚑 Ambulance: 108</span>
              </a>
              <a
                href="tel:112"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
              >
                <span>🚨 All-in-One: 112</span>
              </a>
              <a
                href="tel:102"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
              >
                <span>👶 Pregnant & Infant: 102</span>
              </a>
              <a
                href="tel:14416"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
              >
                <span>🧠 Tele-MANAS: 14416</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & College Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-600 flex items-center justify-center text-white shadow-soft">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">
                  Health<span className="text-teal-400">Connect</span>
                </span>
                <span className="block text-[10px] text-teal-400 font-semibold uppercase tracking-wider">
                  Community Healthcare Platform
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              A comprehensive digital healthcare awareness portal built as a <strong>BCA Community Service Project</strong>. Designed to bridge the healthcare literacy gap for students, families, and underserved rural populations through verified medical guidance, disease prevention, and voluntary service.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Award className="w-4 h-4 text-teal-400" />
              <span>Department of Computer Applications • BCA 2026</span>
            </div>
          </div>

          {/* Col 2: Health Resources */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Health Awareness
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/health-awareness" className="hover:text-teal-400 transition">
                  Personal Hygiene
                </Link>
              </li>
              <li>
                <Link to="/health-awareness" className="hover:text-teal-400 transition">
                  Women's & Maternal Health
                </Link>
              </li>
              <li>
                <Link to="/health-awareness" className="hover:text-teal-400 transition">
                  Child Nutrition & Growth
                </Link>
              </li>
              <li>
                <Link to="/health-awareness" className="hover:text-teal-400 transition">
                  Mental Wellness & Mind
                </Link>
              </li>
              <li>
                <Link to="/health-awareness" className="hover:text-teal-400 transition">
                  Senior Citizen Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Guides & Emergency */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Guides & Services
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/first-aid" className="hover:text-teal-400 transition">
                  First Aid Emergency Guide
                </Link>
              </li>
              <li>
                <Link to="/diseases" className="hover:text-teal-400 transition">
                  Disease Symptoms & Shield
                </Link>
              </li>
              <li>
                <Link to="/healthy-lifestyle" className="hover:text-teal-400 transition">
                  Healthy Habits Checklist
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-teal-400 transition">
                  Free Medical Camps
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-teal-400 transition">
                  Interactive Health Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community Newsletter / Updates */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Health Alerts & Camps
            </h5>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe to receive weekly health tips and announcements about free local medical camps.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-teal-900/40 border border-teal-500/30 text-teal-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Thank you! You are subscribed to health alerts.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe Alerts</span>
                </button>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-800">
              <Link to="/contact" className="text-xs text-teal-400 hover:underline flex items-center gap-1">
                <span>Contact Project Team & FAQs</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} HealthConnect. Built for BCA Community Service Project. All rights reserved.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] leading-tight text-slate-500">
            <strong>Disclaimer:</strong> Content on HealthConnect is developed for educational awareness and community service. It is not intended as medical diagnosis or professional clinical advice. Always consult certified physicians for acute health conditions.
          </p>
        </div>

      </div>
    </footer>
  );
}

