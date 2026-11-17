import React, { useState } from 'react';
import { faqData, projectTeamInfo } from '../data/faqData';
import {
  Mail,
  Send,
  PhoneCall,
  MapPin,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Award,
  BookOpen,
  Users,
  ShieldAlert
} from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState({});

  const toggleFaq = (idx) => {
    setOpenFaq(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Your name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const stored = localStorage.getItem('healthconnect_messages');
      const list = stored ? JSON.parse(stored) : [];
      list.push({
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleString()
      });
      localStorage.setItem('healthconnect_messages', JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch & Project Info</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Contact HealthConnect
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Have an inquiry regarding community health camps, volunteer partnerships, or feedback on our BCA Community Service platform? Reach out directly.
        </p>
      </div>

      {/* Grid: Contact Form + Project Team Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 shadow-card border border-slate-100 dark:border-slate-700">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              All messages are logged securely for student coordinator follow-up.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
              <h4 className="text-xl font-bold text-teal-900 dark:text-teal-200">
                Message Sent Successfully!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you for contacting HealthConnect. Our student outreach team has received your message and will respond promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Sen"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition ${
                      errors.name ? 'border-red-500 focus:ring-red-400' : 'border-slate-200 dark:border-slate-700 focus:ring-teal-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition ${
                      errors.email ? 'border-red-500 focus:ring-red-400' : 'border-slate-200 dark:border-slate-700 focus:ring-teal-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Free Health Camp in Ward 4 / Volunteering"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition ${
                    errors.subject ? 'border-red-500 focus:ring-red-400' : 'border-slate-200 dark:border-slate-700 focus:ring-teal-500'
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your query, suggestion, or community partnership request here..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition ${
                    errors.message ? 'border-red-500 focus:ring-red-400' : 'border-slate-200 dark:border-slate-700 focus:ring-teal-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-soft hover:shadow-soft-lg transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Project Team & College Information (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-teal-700 to-emerald-800 text-white rounded-3xl p-6 sm:p-8 shadow-soft-lg space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-teal-100">
              <Award className="w-3.5 h-3.5" />
              <span>Project Credential</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
              {projectTeamInfo.projectTitle}
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-teal-100/90 pt-1">
              <div>
                <strong>Academic Program:</strong> {projectTeamInfo.academicProgram}
              </div>
              <div>
                <strong>Curriculum:</strong> {projectTeamInfo.courseType}
              </div>
              <div>
                <strong>Academic Year:</strong> {projectTeamInfo.academicYear}
              </div>
              <div>
                <strong>Supervision:</strong> {projectTeamInfo.supervision}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <strong className="block text-xs uppercase tracking-wider font-bold text-teal-200">
                Core Academic Objectives:
              </strong>
              {projectTeamInfo.keyPillars.map((p, idx) => (
                <div key={idx} className="text-xs text-teal-100/80">
                  <span className="font-bold text-white">• {p.title}:</span> {p.desc}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact & Helplines Card */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              Emergency Contact Direct Lines
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-red-500" />
                <span>Ambulance: <a href="tel:108" className="font-bold text-red-600 underline">108</a> (Toll-Free 24x7)</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-teal-500" />
                <span>National Health Helpline: <a href="tel:1075" className="font-bold text-teal-600 underline">1075</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Email: contact@healthconnect-community.org</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Common answers about community service initiatives, first-aid protocols, and volunteer eligibility.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((category, catIdx) => (
            <div key={catIdx} className="space-y-2.5">
              <h3 className="text-sm font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider px-2 pt-2">
                {category.category}
              </h3>

              {category.questions.map((faq, qIdx) => {
                const uniqueKey = `${catIdx}-${qIdx}`;
                const isOpen = openFaq[uniqueKey];
                return (
                  <div
                    key={qIdx}
                    className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-sm transition"
                  >
                    <button
                      onClick={() => toggleFaq(uniqueKey)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-teal-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

