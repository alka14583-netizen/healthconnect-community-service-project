# HealthConnect – Community Healthcare & Awareness Platform
> **BCA Final Year Community Service Project**  
> *Domain: Healthcare Education, Social Computing & Community Outreach*

---

## 🏥 1. Project Overview & Abstract

**HealthConnect** is a comprehensive, modern, and accessible digital healthcare awareness platform developed as a **Bachelor of Computer Applications (BCA) Community Service Project**. 

In developing nations and rural jurisdictions, a significant portion of preventable mortality and chronic disease complications stems not merely from a shortage of clinics, but from a profound **health literacy deficit**—unawareness of simple hand hygiene, improper first-aid responses during accidents (such as applying toothpaste or mud to burns), neglected water sanitation leading to dengue/malaria, undernutrition, and cultural taboos surrounding adolescent menstrual hygiene and mental health.

**HealthConnect** bridges this critical gap. It equips families, students, and underserved populations with structured, evidence-based healthcare knowledge, life-saving first-aid instructions, an interactive daily healthy habit checklist, hydration monitoring, vector-control protocols, and on-ground community volunteer coordination.

---

## 🎯 2. Project Objectives

1. **Promote Preventive Healthcare Literacy:** Educate communities on handwashing, balanced nutrition using low-cost traditional millets and leafy vegetables, clean water safety, and physical exercise.
2. **Standardize Life-Saving First Aid Protocols:** Provide unambiguous step-by-step first-aid manuals for thermal burns, lacerations, bone fractures, acute nosebleeds, foreign airway choking (Heimlich maneuver), and bystander Hands-Only CPR following the universal **DR ABC** algorithm.
3. **Enhance Epidemic & Disease Defense:** Break down common symptoms, vector life cycles, and clinical warning signs for endemic illnesses including Malaria, Dengue, Tuberculosis, Nutritional Anemia, Diabetes Mellitus, Hypertension, and seasonal flu.
4. **Facilitate Grassroots Community Outreach:** Coordinate free health screening camps, voluntary blood donation drives, Swachhata cleanliness rallies, women's menstrual health literacy workshops, and school hygiene campaigns through an interactive volunteer registry.
5. **Interactive Engagement & Retention:** Gamify health literacy through a 10-question interactive health quiz with instant scoring, celebratory milestones, daily rotating tips, and habit trackers.
6. **Ensure Privacy & Offline Accessibility:** Leverage browser `LocalStorage` so users in low-connectivity areas can bookmark life-saving guides and persist their daily habits without server dependencies.

---

## 💻 3. Technology Stack

- **Frontend Framework:** React.js (v18.3.1) with Vite (v5.4.2)
- **Routing:** React Router DOM (v6.26.1)
- **Styling & Design System:** Tailwind CSS (v3.4.10) with modern medical color palette, dark mode classes, and custom utility classes
- **Icons:** Lucide React (v0.438.0)
- **Celebration Effects:** Canvas Confetti (v1.9.3)
- **State Management & Persistence:** React Context API (`ThemeContext`, `BookmarkContext`) + Browser `LocalStorage`
- **Typography:** Plus Jakarta Sans & Inter (Google Fonts)

---

## 🎨 4. Design & Color Palette

HealthConnect follows a modern medical startup design aesthetic:
- **Primary Teal:** `#0D9488` (`teal-600`) — symbolising healing, cleanliness, and clinical precision.
- **Secondary Soft Green:** `#22C55E` (`green-500`) — representing vitality, nature, and community wellness.
- **Light Teal Background:** `#F0FDFA` (`teal-50`) — soft, calming background that minimizes eye strain.
- **Dark Navy / Slate:** `#0F172A` / `#1E293B` — crisp contrast for high readability.
- **Alert Red / Coral:** `#EF4444` — for emergency helplines and immediate danger warnings.

---

## 🚀 5. Website Architecture & Pages

| Page | URL Path | Core Features |
|---|---|---|
| **Home Page** | `/` | Hero section, search bar, health categories preview, daily tip banner, impact statistics, first-aid highlights, upcoming camps, CTA |
| **Health Awareness** | `/health-awareness` | 8 core pillars: Personal Hygiene, Women's Health, Child Healthcare, Mental Health, Nutrition, Fitness, Disease Prevention, Senior Citizen Care |
| **First Aid Guide** | `/first-aid` | Universal DR ABC triage, 6 step-by-step guides (Burns, Cuts, Fractures, Nosebleeds, Choking, CPR), safety warnings, ambulance callout |
| **Disease Awareness** | `/diseases` | Detailed profiles for Diabetes, Malaria, Dengue, TB, Anemia, Hypertension, Seasonal Flu; symptoms, prevention, when to seek ER |
| **Healthy Lifestyle** | `/healthy-lifestyle` | Rotating tips, interactive 8-habit daily checklist, hydration calculator (+250ml logger), superfoods guide, exercise, sleep hygiene, mental wellness |
| **Community Services** | `/community` | 6 BCA outreach programs, impact stats, upcoming camp venues & dates, interactive volunteer registration form with LocalStorage database viewer |
| **Health Quiz** | `/quiz` | 10 multiple-choice questions, live progress, score calculation, percentage, high-score tracking, answer review with medical explanations |
| **Contact Us** | `/contact` | Validated contact form, project team credentials, college department info, 24x7 emergency hotlines, interactive FAQ accordion |
| **Saved Bookmarks** | `/bookmarks` | Offline health library, bookmark manager, quick-modal reader, clear all functionality |

---

## ⚡ 6. Implemented Dynamic Functionalities

1. **React Router Navigation:** Seamless single-page routing without page reloads.
2. **Omni-Search Engine:** Real-time search across health categories, first-aid guides, diseases, and symptoms with keyboard shortcut (Esc) and direct guide modal opening.
3. **Category Filtering:** Filter health topics by category pills in real-time.
4. **Daily Rotating Health Tips:** Dynamically calculates the tip of the day based on the calendar day, with interactive slider controls to browse all weekly tips.
5. **Interactive Health Quiz:**
   - 10 comprehensive MCQs spanning hygiene, nutrition, disease vectors, and first aid.
   - Live progress bar, question counter, and choice selection.
   - Result calculation with percentage score.
   - Celebratory confetti trigger on scores $\ge 70\%$.
   - High-score persistence in `LocalStorage`.
   - Comprehensive review mode displaying correct answers and medical rationales.
6. **Daily Healthy Habits Checklist:**
   - 8 evidence-based preventive health habits.
   - Checkbox toggle with live progress bar and completion percentage.
   - Celebratory confetti on completing all 8 habits.
   - Auto-resets or persists date-stamped in `LocalStorage`.
7. **Hydration Calculator & Logger:**
   - Daily target gauge (2,500 ml).
   - Glass-by-glass (+250 ml / -250 ml) tracker with visual progress bar.
   - Hydration persistence in `LocalStorage`.
8. **Bookmark System:**
   - One-click bookmarking on any card across all pages.
   - Real-time counter badge in the navigation bar.
   - Floating toast notification on save/remove.
   - Dedicated `/bookmarks` library page.
9. **Dark and Light Theme Toggle:**
   - Smooth theme transition supporting system preference and manual toggle.
   - State persisted in `localStorage('healthconnect_theme')`.
10. **Volunteer Registration Form:**
    - Field validation (Full name, 10-digit mobile number, email format, preferred camp, blood group).
    - Generates unique Volunteer ID Badge (`HC-VOL-XXXX`).
    - Stored in `localStorage('healthconnect_volunteers')` with dynamic live admin list preview.
11. **Contact Form Validation:**
    - Validates mandatory fields, email formatting, and message length.
    - Saves inquiry logs in `localStorage('healthconnect_messages')`.
12. **Responsive Mobile Navigation:**
    - Slide-down mobile drawer with emergency call button and active page highlighting.
13. **Scroll-To-Top Functionality:**
    - Automatically scrolls to top on route navigation.
    - Floating animated button appearing after scrolling 320px down.

---

## 🛠️ 7. Installation & Running Instructions

### Prerequisites
- **Node.js** (v18.x, v20.x, or v22.x recommended)
- **npm** (v9.x or above)

### Steps to Run:

1. **Clone or Navigate to the Project Directory:**
   ```bash
   cd "c:\Users\Alka singh\Desktop\healthcoonect"
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The application will be live at: `http://localhost:3000` (or the terminal-assigned port).

4. **Build for Production:**
   ```bash
   npm run build
   ```
   Compiles optimized static assets to the `dist/` directory.

5. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 🔮 8. Future Scope & Enhancements

- **Multilingual Support (i18n):** Translating awareness articles into Hindi, Bengali, Telugu, Tamil, and regional dialects to expand rural reach.
- **AI Symptom Checker Assistant:** Integrating a localized conversational chatbot for preliminary non-emergency symptom guidance.
- **SMS & WhatsApp Alerts:** Sending daily SMS hygiene tips and camp notification alerts for villagers without smartphones.
- **Doctor Tele-Consultation Booking:** Linking with Primary Health Centres (PHCs) for tele-medicine slots.
- **PWA (Progressive Web App):** Enabling full offline service worker caching and mobile app installation directly from the browser.

---

## 🎓 9. College Project Credits

- **Course:** Bachelor of Computer Applications (BCA)
- **Project Type:** BCA Community Service & Social Responsibility Project
- **Academic Year:** Final Year (2026)
- **Guidance & Supervision:** Department of Computer Applications & Community Outreach Cell

