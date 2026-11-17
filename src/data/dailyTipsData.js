export const dailyTips = [
  {
    id: 1,
    day: "Monday",
    title: "Kickstart with Morning Hydration",
    category: "Hydration",
    icon: "Droplets",
    tip: "Drink 2 glasses of lukewarm water right after waking up to activate internal organs, flush toxins, and replenish fluids lost overnight.",
    action: "Keep a water bottle on your nightstand so it's ready the moment you wake up.",
    fact: "Over 70% of human brain tissue is water. Mild dehydration can trigger morning headaches and fatigue."
  },
  {
    id: 2,
    day: "Tuesday",
    title: "The 20-20-20 Rule for Digital Eye Strain",
    category: "Digital Wellness",
    icon: "Eye",
    tip: "Every 20 minutes spent looking at a screen, take a 20-second break and focus your eyes on something at least 20 feet away.",
    action: "Blink intentionally 10 times during each break to lubricate dry eyes.",
    fact: "Screen blink rates drop by up to 50%, causing digital eye strain and dry eye syndrome."
  },
  {
    id: 3,
    day: "Wednesday",
    title: "Power of Color on Your Plate",
    category: "Nutrition",
    icon: "Salad",
    tip: "Aim to consume at least 3 different naturally colored fruits or vegetables each meal (green, red, orange/yellow, purple).",
    action: "Add a fistful of spinach to your dal or slice a carrot and cucumber with lunch.",
    fact: "Different colors represent distinct phytonutrients and antioxidants that combat cellular damage."
  },
  {
    id: 4,
    day: "Thursday",
    title: "Post-Meal 1000-Step Walk",
    category: "Fitness",
    icon: "Footprints",
    tip: "A gentle 10-15 minute walk after meals helps lower postprandial blood sugar spikes and aids digestion.",
    action: "Avoid lying down immediately after dinner; stroll inside the house or in your garden.",
    fact: "Light walking after meals helps muscles absorb glucose without needing extra insulin."
  },
  {
    id: 5,
    day: "Friday",
    title: "Master the 4-7-8 Calming Breath",
    category: "Mental Health",
    icon: "HeartPulse",
    tip: "Inhale quietly through the nose for 4 seconds, hold your breath for 7 seconds, and exhale completely through the mouth for 8 seconds.",
    action: "Repeat this cycle 4 times when feeling stressed or before going to sleep.",
    fact: "Rhythmic breath control stimulates the vagus nerve, triggering the parasympathetic nervous system."
  },
  {
    id: 6,
    day: "Saturday",
    title: "Screen Curfew for Restorative Sleep",
    category: "Sleep",
    icon: "Moon",
    tip: "Turn off all smartphones, tablets, and TV screens at least 45 minutes before bedtime to allow melatonin release.",
    action: "Swap phone scrolling for reading a paperback book or listening to soothing sounds.",
    fact: "Blue light from LED screens suppresses melatonin production twice as much as other light wavelengths."
  },
  {
    id: 7,
    day: "Sunday",
    title: "Thorough 20-Second Handwashing",
    category: "Hygiene",
    icon: "Sparkles",
    tip: "Wash your hands thoroughly with soap and clean water for at least 20 seconds, especially before eating and after returning home.",
    action: "Clean between fingers, backs of hands, under fingernails, and around wrists.",
    fact: "Correct hand hygiene reduces diarrheal diseases by up to 40% and respiratory infections by 21%."
  }
];

export const getTodayTip = () => {
  const dayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  // Map JS day (0=Sun, 1=Mon...6=Sat) to tips array
  const map = [6, 0, 1, 2, 3, 4, 5];
  return dailyTips[map[dayIndex]] || dailyTips[0];
};

