import React, { useState } from 'react';
import { X, CheckCircle2, UserCheck, Heart, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteerModal({ isOpen, onClose, preselectedCamp = "" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: 'ABC College of BCA & Technology',
    bloodGroup: 'B+',
    preferredService: preselectedCamp || 'Free Health Camps',
    availability: 'Weekends',
    motivation: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-+ ]/g, ''))) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.preferredService) {
      errs.preferredService = "Please select a preferred service";
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

    const generatedId = `HC-VOL-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRecord = {
      ...formData,
      id: generatedId,
      registeredAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('healthconnect_volunteers');
      const list = stored ? JSON.parse(stored) : [];
      list.push(newRecord);
      localStorage.setItem('healthconnect_volunteers', JSON.stringify(list));
    } catch (err) {
      console.error("Failed to save volunteer registration", err);
    }

    setRegId(generatedId);
    setIsSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      college: 'ABC College of BCA & Technology',
      bloodGroup: 'B+',
      preferredService: 'Free Health Camps',
      availability: 'Weekends',
      motivation: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Community Outreach Program
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Join as a Health Volunteer
            </h3>
            <p className="text-teal-100 text-xs sm:text-sm mt-0.5">
              BCA Community Service Project • Empowering Rural & Local Health
            </p>
          </div>
          <button
            onClick={resetForm}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                Registration Successful!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-teal-600 dark:text-teal-400">{formData.fullName}</strong>. Your volunteer profile has been registered in the HealthConnect Community Service database.
              </p>

              <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/50 max-w-sm mx-auto text-left">
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                  Volunteer ID Badge
                </div>
                <div className="text-lg font-mono font-extrabold text-teal-700 dark:text-teal-300">
                  {regId}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Service: <strong>{formData.preferredService}</strong> ({formData.availability})
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  Blood Group: <strong>{formData.bloodGroup}</strong>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition ${
                    errors.fullName ? "border-red-500 focus:ring-red-400" : "border-slate-200 dark:border-slate-700 focus:ring-teal-500"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition ${
                      errors.email ? "border-red-500 focus:ring-red-400" : "border-slate-200 dark:border-slate-700 focus:ring-teal-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition ${
                      errors.phone ? "border-red-500 focus:ring-red-400" : "border-slate-200 dark:border-slate-700 focus:ring-teal-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Blood Group & College / Institution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Availability
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  >
                    <option value="Weekends">Weekends Only</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Flexible">Flexible / On-Call for Emergencies</option>
                  </select>
                </div>
              </div>

              {/* Preferred Campaign */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Preferred Community Service *
                </label>
                <select
                  name="preferredService"
                  value={formData.preferredService}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                >
                  <option value="Free Health Camps">Free Health Awareness & Screening Camps</option>
                  <option value="Blood Donation Drives">Voluntary Blood Donation Drives</option>
                  <option value="Community Cleanliness Drives">Community Cleanliness Drives (Swachhata)</option>
                  <option value="Women's Health Campaigns">Women's Health & Menstrual Literacy</option>
                  <option value="Nutrition Awareness">Nutrition Awareness & Poshan Abhiyaan</option>
                  <option value="School Hygiene Campaigns">School Hygiene & Handwashing Campaigns</option>
                </select>
              </div>

              {/* Motivation / Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Why do you want to volunteer? (Optional)
                </label>
                <textarea
                  name="motivation"
                  rows="2"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Share a short note about your interest in community service..."
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-soft hover:shadow-soft-lg transition flex items-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Register Volunteer</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

