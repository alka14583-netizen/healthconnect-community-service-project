import React, { useState, useEffect } from 'react';
import {
  communityServices,
  communityImpactStats,
  upcomingCamps
} from '../data/communityServicesData';
import VolunteerModal from '../components/VolunteerModal';
import {
  Users,
  Award,
  Heart,
  Calendar,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  UserPlus,
  ShieldCheck,
  FileCheck,
  Trash2
} from 'lucide-react';

export default function CommunityServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampName, setSelectedCampName] = useState('');
  const [volunteerList, setVolunteerList] = useState([]);

  // Load registered volunteers from LocalStorage to showcase dynamic persistence
  const loadVolunteers = () => {
    try {
      const stored = localStorage.getItem('healthconnect_volunteers');
      setVolunteerList(stored ? JSON.parse(stored) : []);
    } catch (e) {
      setVolunteerList([]);
    }
  };

  useEffect(() => {
    loadVolunteers();
  }, [isModalOpen]);

  const handleOpenModal = (campName = '') => {
    setSelectedCampName(campName);
    setIsModalOpen(true);
  };

  const clearVolunteers = () => {
    if (window.confirm("Are you sure you want to clear stored volunteer registrations?")) {
      localStorage.removeItem('healthconnect_volunteers');
      setVolunteerList([]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>BCA Community Service & Social Responsibility Project</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Community Health Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Bridging the healthcare divide through student-led field outreach, free diagnosis camps, swachhata cleanliness rallies, and adolescent menstrual dignity campaigns.
        </p>

        <div className="pt-2">
          <button
            onClick={() => handleOpenModal()}
            className="px-6 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-soft hover:shadow-soft-lg transition flex items-center gap-2 mx-auto"
          >
            <UserPlus className="w-5 h-5" />
            <span>Register as Community Volunteer</span>
          </button>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {communityImpactStats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700/80 text-center space-y-1"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400">
              {stat.value}
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
              {stat.label}
            </div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* 6 Core Community Service Initiatives */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Our 6 Core Community Outreach Pillars
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Designed specifically to address public health priorities outlined in national healthcare mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-card border border-slate-100 dark:border-slate-700/80 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-600 text-white shadow-sm">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <strong className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                      Program Objectives:
                    </strong>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {service.objectives.slice(0, 3).map((obj, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="p-3 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 text-[11px] font-medium text-teal-800 dark:text-teal-300 mb-3 border border-teal-100 dark:border-teal-900/40">
                  <strong>Impact:</strong> {service.stats}
                </div>
                <button
                  onClick={() => handleOpenModal(service.title)}
                  className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition shadow-sm"
                >
                  Volunteer for this Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Medical Camps Schedule */}
      <div className="bg-slate-50 dark:bg-slate-850 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Field Schedules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-0.5">
              Upcoming Community Camps & Venues
            </h2>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition self-start sm:self-auto"
          >
            Register to Participate
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingCamps.map((camp) => (
            <div
              key={camp.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/70 dark:border-slate-700 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-300">
                <Calendar className="w-4 h-4" />
                <span>{camp.date}</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {camp.title}
              </h3>
              <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{camp.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{camp.venue}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                  <span>Partner: {camp.partner}</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleOpenModal(camp.title)}
                  className="w-full py-2 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white dark:bg-teal-950/40 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white text-xs font-semibold transition"
                >
                  Join Camp Volunteer Team
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registered Volunteers LocalStorage Showcase */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 dark:border-slate-700/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
          <div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Registered Community Volunteers ({volunteerList.length})
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Live registrations saved in your browser's LocalStorage. Register using the button above to add yourself!
            </p>
          </div>

          {volunteerList.length > 0 && (
            <button
              onClick={clearVolunteers}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition self-start sm:self-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Database</span>
            </button>
          )}
        </div>

        {volunteerList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {volunteerList.map((vol) => (
              <div
                key={vol.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/80 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded">
                    {vol.id}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    Blood: {vol.bloodGroup}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {vol.fullName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {vol.email} • {vol.phone}
                  </p>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-100 dark:border-slate-700">
                  <strong>Service:</strong> {vol.preferredService} ({vol.availability})
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            No registered volunteers yet. Click <strong>"Register as Community Volunteer"</strong> above to submit your details!
          </div>
        )}
      </div>

      {/* Volunteer Registration Modal */}
      <VolunteerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedCamp={selectedCampName}
      />

    </div>
  );
}

