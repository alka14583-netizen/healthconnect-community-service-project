export const healthCategories = [
  {
    id: "personal-hygiene",
    title: "Personal Hygiene",
    shortDescription: "Essential daily habits for clean hands, oral care, skin protection, and pathogen prevention.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    tag: "Everyday Wellness",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
    overview: "Personal hygiene is the bedrock of community health. Practicing good hygiene shields individuals from microbial infections, parasites, dermatological issues, and gastrointestinal illness. Especially in underserved and rural areas, standard hygiene habits such as proper hand sanitation and clean drinking water drastically curb infant mortality and transmission of communicable sickness.",
    keyPoints: [
      "20-second handwashing with soap before handling meals and after sanitary visits.",
      "Twice-daily oral brushing with fluoride toothpaste and routine tongue scraping.",
      "Daily bathing with mild soap, paying special attention to folds and feet.",
      "Nail hygiene: keeping fingernails trimmed and clean prevents harboring bacteria.",
      "Clean clothing and laundering linens in sunlight to naturally sanitize fabrics."
    ],
    dosAndDonts: {
      dos: [
        "Lather soap on the back of hands, between fingers, and under nails.",
        "Store toothbrushes upright in dry, ventilated spaces.",
        "Trim nails straight across and gently curve corners with a file.",
        "Use safe, boiled or filtered water for face washing and teeth cleaning."
      ],
      donts: [
        "Don't rely solely on water without soap when cleaning soiled hands.",
        "Never share personal razors, nail cutters, or towels with others.",
        "Avoid biting fingernails or picking at cuticles with bare fingers.",
        "Don't wear damp or sweaty clothing for extended durations."
      ]
    },
    communityImpact: "Community surveys reveal that simple hand hygiene education reduces diarrhea incidence by over 30% in rural primary schools."
  },
  {
    id: "womens-health",
    title: "Women's Health",
    shortDescription: "Maternal wellness, menstrual hygiene, anemia prevention, and reproductive health awareness.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    tag: "Maternal & Reproductive",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
    overview: "Women's healthcare encompasses physical, emotional, and reproductive well-being at every stage of life. From adolescent menstrual literacy to pregnancy nutrition and menopausal transition, breaking taboos and providing access to clean sanitary products and iron supplementation is critical for community prosperity.",
    keyPoints: [
      "Dignified Menstrual Hygiene: Switching to clean sanitary pads or sterile cups, changing every 4-6 hours.",
      "Combating Nutritional Anemia: Consuming iron-rich green leafy veggies, jaggery, lentils, and vitamin C.",
      "Antenatal Care (ANC): Minimum 4 medical checkups during pregnancy, tetanus toxoid shots, and ultrasound screenings.",
      "Cervical & Breast Self-Examinations: Early detection awareness for lumps and abnormal discharge.",
      "Postpartum Recovery: Rest, hydration, mental health monitoring for postpartum blues, and exclusive breastfeeding for 6 months."
    ],
    dosAndDonts: {
      dos: [
        "Dispose of sanitary waste wrapped in paper, never flush or dispose openly.",
        "Take iron and folic acid supplements as prescribed during pregnancy and adolescence.",
        "Consult a female healthcare worker or gynecologist for severe pelvic pain or irregular cycles.",
        "Track menstrual cycles to understand hormonal changes and body rhythms."
      ],
      donts: [
        "Never use unwashed, damp cloth rags repeatedly during menstruation.",
        "Don't ignore persistent fatigue, dizziness, or paleness of inner eyelids (signs of anemia).",
        "Avoid self-medicating with unverified home concoctions during pregnancy.",
        "Don't skip postnatal medical checkups after childbirth."
      ]
    },
    communityImpact: "Our BCA community outreach distributes biodegradable sanitary pads and runs anemia screening camps across rural panchayats."
  },
  {
    id: "child-healthcare",
    title: "Child Healthcare",
    shortDescription: "Pediatric immunization, balanced growth milestones, malnutrition defense, and infectious disease safety.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    tag: "Pediatric Care",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    overview: "The initial 1,000 days of a child's life—from conception through age two—define lifelong cognitive and physical potential. Ensuring complete immunization, continuous monitoring of height and weight milestones, and clean infant feeding practices protects children against stunting, pneumonia, and preventable childhood illnesses.",
    keyPoints: [
      "Universal Immunization: Adhering to the national vaccine schedule (BCG, Polio, Pentavalent, Rotavirus, Measles-Rubella).",
      "Exclusive Breastfeeding: Feeding only mother's milk for the first six months, followed by nutrient-dense weaning foods.",
      "Oral Rehydration Therapy (ORS) & Zinc: Immediate treatment protocol during diarrhea episodes to prevent fatal dehydration.",
      "Growth Monitoring: Regular checks at local Anganwadi/PHC centers using the WHO growth chart.",
      "Deworming & Vitamin A: Biannual deworming tablets (Albendazole) to ensure gut health and nutrient absorption."
    ],
    dosAndDonts: {
      dos: [
        "Keep the child's immunization card updated and accessible.",
        "Boil and cool drinking water used for preparing infant supplementary food.",
        "Introduce homemade mashed bananas, khichdi, and soft vegetables after 6 months.",
        "Seek immediate medical help if a child shows lethargy, sunken eyes, or fast breathing."
      ],
      donts: [
        "Don't give packaged sugary snacks or unfiltered commercial baby formula without advice.",
        "Never delay hospital visits when an infant has a high fever with refusal to feed.",
        "Don't skip booster doses of scheduled childhood vaccines.",
        "Avoid keeping babies in smoke-filled kitchens or unventilated areas."
      ]
    },
    communityImpact: "Timely administration of ORS and zinc solutions saves over 500,000 children globally every single year."
  },
  {
    id: "mental-health",
    title: "Mental Health",
    shortDescription: "Managing academic stress, anxiety, emotional balance, community support, and destigmatizing therapy.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    tag: "Mind & Emotions",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
    overview: "Mental health is just as essential as physical health. Stress, anxiety, and depression can affect anyone regardless of age or background. In student and rural communities, mental distress is frequently ignored due to social stigma. Opening compassionate dialogue, practicing mindfulness, and normalizing counseling fosters resilience and well-being.",
    keyPoints: [
      "Recognizing Emotional Signals: Chronic insomnia, mood swings, loss of interest in hobbies, and withdrawal.",
      "Stress Management Tools: Diaphragmatic breathing, progressive muscle relaxation, and journaling.",
      "Social Connection: Sharing worries with trusted friends, mentors, family members, or helplines.",
      "Sleep and Mood: Establishing a calm 7-8 hour sleep schedule to regulate neurotransmitters.",
      "Tele-Counseling Resources: Utilizing national mental health helplines (Tele-MANAS: 14416 / KIRAN: 1800-599-0019)."
    ],
    dosAndDonts: {
      dos: [
        "Acknowledge feelings of burnout or overwhelm without self-criticism.",
        "Take scheduled breaks from competitive academic and digital environments.",
        "Encourage peers who seem isolated or distressed by offering an empathetic ear.",
        "Reach out to trained mental health professionals when distress persists for weeks."
      ],
      donts: [
        "Don't label mental illness as personal weakness or lack of willpower.",
        "Never dismiss suicidal thoughts or self-harm statements made by peers.",
        "Avoid turning to alcohol, tobacco, or unprescribed sedatives to numb anxiety.",
        "Don't isolate yourself in silence when going through grief or failure."
      ]
    },
    communityImpact: "Mental wellness workshops in colleges improve academic performance and student satisfaction by over 45%."
  },
  {
    id: "nutrition",
    title: "Nutrition & Balanced Diet",
    shortDescription: "Affordable wholesome meals, macronutrients, traditional millets, vitamins, and combating malnutrition.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    tag: "Dietary Health",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    overview: "Wholesome nutrition does not require expensive imported superfoods. Traditional, local, and seasonal grains like ragi, jowar, bajra, pulses, seasonal greens, and fermented foods provide abundant micronutrients. Good nutrition strengthens immunity, powers daily work, and prevents chronic lifestyle diseases like type 2 diabetes.",
    keyPoints: [
      "The Balanced Thali Model: 50% vegetables & salads, 25% whole grains/millets, 25% plant/animal proteins.",
      "Millets Renaissance: High fiber, low glycemic index, rich in calcium (finger millet/ragi) and iron (pearl millet/bajra).",
      "Hydration & Electrolytes: Consuming clean water, lemon water, buttermilk, and coconut water instead of carbonated sodas.",
      "Combating Micro-deficiencies: Vitamin D from sunlight, Vitamin B12, and Iodine from iodized salt.",
      "Food Safety: Washing raw produce under flowing water, eating freshly cooked warm meals, avoiding cross-contamination."
    ],
    dosAndDonts: {
      dos: [
        "Incorporate a protein source (dal, chickpeas, eggs, paneer, sprouts) in every major meal.",
        "Chew food slowly and mindfully to assist digestive enzyme secretion.",
        "Choose local, seasonal fruits like guava, amla, papaya, and oranges rich in vitamin C.",
        "Read packaged food labels to spot hidden refined sugars and hydrogenated palm oils."
      ],
      donts: [
        "Don't skip breakfast, especially before demanding school or fieldwork hours.",
        "Avoid excessive consumption of ultra-processed snacks, instant noodles, and deep-fried roadside treats.",
        "Don't reheat cooking oils repeatedly; this generates hazardous trans-fats and free radicals.",
        "Avoid excessive table salt (keep daily sodium under 5 grams/1 teaspoon)."
      ]
    },
    communityImpact: "Promoting millet cultivation and consumption directly supports both smallholder farmers and community nutritional security."
  },
  {
    id: "fitness-exercise",
    title: "Fitness & Physical Activity",
    shortDescription: "Daily aerobic movements, yoga asanas, muscle strengthening, posture, and beating sedentary lifestyles.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    tag: "Physical Fitness",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    overview: "Regular physical activity is one of the most powerful medicines known to science. Achieving 150 minutes of moderate aerobic exercise per week improves cardiovascular stamina, controls weight, enhances mood through endorphin release, and protects joint mobility across the lifespan.",
    keyPoints: [
      "Daily Movement Target: At least 30 minutes of brisk walking, cycling, swimming, or dancing 5 days a week.",
      "Traditional Yoga & Pranayama: Surya Namaskar sequences improve flexibility, spinal alignment, and breath control.",
      "Strength Training: Bodyweight push-ups, squats, lunges, or resistance bands build bone density.",
      "Workplace Ergonomics: Standing up every 45 minutes, adjusting desk monitor to eye level, and shoulder rolls.",
      "Safe Progression: Warming up with dynamic stretches and cooling down with static stretches to prevent injury."
    ],
    dosAndDonts: {
      dos: [
        "Wear comfortable footwear with appropriate arch support when jogging or walking.",
        "Stay hydrated before, during, and after strenuous workouts.",
        "Listen to pain signals: sharp joint pain means stop and reassess technique.",
        "Engage in active commuting (walking, cycling) whenever feasible."
      ],
      donts: [
        "Don't leap into intense heavy lifting without mastering movement form first.",
        "Avoid sitting continuously for more than 2 hours without moving.",
        "Don't workout immediately after a heavy feast; allow 2 hours for digestion.",
        "Never skip the warm-up, especially during chilly mornings."
      ]
    },
    communityImpact: "Regular physical activity cuts the risk of cardiovascular disease by 35% and type 2 diabetes by 40%."
  },
  {
    id: "disease-prevention",
    title: "Disease Prevention",
    shortDescription: "Vector control, clean water sanitation, air quality, barrier precautions, and seasonal epidemic shields.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    tag: "Preventive Medicine",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    overview: "An ounce of prevention is worth a pound of cure. Understanding transmission routes—whether airborne, waterborne, or vector-borne—allows communities to implement early protective measures like eliminating mosquito breeding grounds, purifying water supplies, and practicing respiratory etiquette.",
    keyPoints: [
      "Vector Control: Preventing stagnant water accumulation in discarded tires, coolers, flowerpots, and open drains.",
      "Water Purification: Boiling water for 1-3 minutes or using ceramic/RO filters to eliminate cholera, typhoid, and hepatitis A.",
      "Respiratory Hygiene: Covering coughs and sneezes with bent elbow or tissue; wearing masks during viral outbreaks.",
      "Food Hygiene: Keeping cooked foods covered, preventing fly contact, and consuming hot meals.",
      "Preventive Health Checkups: Annual blood sugar, lipid profile, and blood pressure monitoring for adults over 30."
    ],
    dosAndDonts: {
      dos: [
        "Sleep under insecticide-treated bed nets in mosquito-endemic areas.",
        "Empty and scrub desert coolers weekly (Dry Day habit).",
        "Wash vegetables thoroughly before cooking or peeling.",
        "Report clusters of fever or diarrhea in the neighborhood to local health authorities."
      ],
      donts: [
        "Don't allow open puddles of water to collect near living quarters.",
        "Never consume roadside cut fruits left exposed to flies and dust.",
        "Don't spit in public places; it spreads tuberculosis and respiratory viruses.",
        "Avoid self-prescribing antibiotics for viral fevers and colds."
      ]
    },
    communityImpact: "Community vector surveillance drives have brought down Dengue and Malaria transmission by over 60% in pilot wards."
  },
  {
    id: "senior-healthcare",
    title: "Senior Citizen Healthcare",
    shortDescription: "Geriatric mobility, joint care, chronic medication adherence, fall prevention, and cognitive vitality.",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    tag: "Geriatric Health",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
    overview: "Elderly family members require thoughtful medical, psychological, and environmental care. Fall prevention, managing polypharmacy (multiple chronic medications), maintaining social connectivity, and supporting memory function ensure aging with grace, autonomy, and dignified comfort.",
    keyPoints: [
      "Fall Prevention at Home: Installing grab bars in bathrooms, non-slip floor mats, and night lamps in hallways.",
      "Medication Management: Using labeled pill organizers (morning, afternoon, night) to prevent missed or duplicate doses.",
      "Joint and Bone Health: Adequate calcium, vitamin D supplements, and low-impact joint movements (water aerobics, chair yoga).",
      "Vision and Hearing Screenings: Regular eye checks for cataracts/glaucoma and audiometry tests to prevent sensory isolation.",
      "Cognitive Engagement: Encouraging reading, solving puzzles, storytelling, and community social clubs to stave off dementia."
    ],
    dosAndDonts: {
      dos: [
        "Keep emergency contact numbers and doctor prescription lists printed near the bedside.",
        "Encourage gentle daily walks to maintain balance and muscle tone.",
        "Provide warm, easily digestible, low-sodium and nutrient-rich meals.",
        "Spend quality family time listening and engaging elders in daily decisions."
      ],
      donts: [
        "Don't leave electrical cords or loose rugs in primary walking paths.",
        "Never discontinue prescribed heart or diabetes medications without physician review.",
        "Don't dismiss memory lapses or sudden confusion as merely 'normal aging'.",
        "Avoid leaving seniors isolated without social interaction or telephone check-ins."
      ]
    },
    communityImpact: "Home safety modifications reduce devastating hip fractures and hospitalization among elderly citizens by over 50%."
  }
];

