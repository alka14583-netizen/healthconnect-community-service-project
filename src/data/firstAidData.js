export const firstAidGuides = [
  {
    id: "burns",
    title: "Burns & Scalds",
    category: "Thermal Injury",
    severity: "Immediate Action Required",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    summary: "Immediate first aid for thermal, chemical, or scald burns to minimize tissue damage and prevent infection.",
    steps: [
      {
        step: 1,
        title: "Cool the Burn Immediately",
        description: "Hold the burned area under cool running tap water for at least 10 to 20 minutes. Do not use ice, iced water, or freezing compresses, as extreme cold causes secondary thermal shock and tissue necrosis."
      },
      {
        step: 2,
        title: "Remove Restricting Items Gently",
        description: "Carefully remove rings, watches, bracelets, or tight clothing around the burned area before swelling begins. Do NOT peel away clothing that is firmly stuck to the burnt flesh."
      },
      {
        step: 3,
        title: "Cover with Sterile Non-Stick Dressing",
        description: "Cover loosely with a clean, sterile non-adherent dressing, clean lint-free cloth, or clean plastic cling wrap laid flat. This shields exposed nerve endings from air and reduces excruciating pain."
      },
      {
        step: 4,
        title: "Manage Pain and Hydration",
        description: "Offer sips of clean water to prevent dehydration. Mild over-the-counter paracetamol can help reduce pain for superficial first-degree burns."
      }
    ],
    safetyWarnings: [
      "NEVER apply butter, toothpaste, cooking oil, mud, or raw flour to burns. These trap heat and introduce severe bacterial infections.",
      "NEVER pop or puncture intact burn blisters. The blister skin acts as a sterile natural biological dressing.",
      "Do NOT breathe directly on, cough over, or touch the open burned flesh."
    ],
    whenToSeekER: [
      "The burn is larger than the palm of the casualty's hand.",
      "The burn affects the face, eyes, neck, hands, feet, joints, or groin.",
      "The burn is caused by chemicals, high-voltage electricity, or inhalation of smoke/hot gases.",
      "The burn is full-thickness (3rd degree): skin looks charred black, white, leathery, or is numb.",
      "The victim is an infant, young child, or elderly individual."
    ]
  },
  {
    id: "cuts-wounds",
    title: "Cuts, Scrapes & Wounds",
    category: "Bleeding & Trauma",
    severity: "Direct Pressure",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80",
    summary: "Effective bleeding control, cleaning protocol, and aseptic dressing to stop hemorrhaging and stave off tetanus.",
    steps: [
      {
        step: 1,
        title: "Apply Direct Firm Pressure",
        description: "Press firmly on the wound with a sterile gauze pad or clean folded cloth for at least 5 straight minutes without lifting to check. Maintain steady pressure until bleeding subsides."
      },
      {
        step: 2,
        title: "Elevate the Injured Limb",
        description: "If the cut is on an arm or leg and there is no suspected bone fracture, elevate the limb above heart level to reduce blood pressure at the bleeding site."
      },
      {
        step: 3,
        title: "Clean Under Gentle Running Water",
        description: "Rinse the wound gently under cool running drinking water to dislodge dirt and debris. Wash the skin surrounding the cut with mild soap, avoiding putting harsh soap directly into deep cuts."
      },
      {
        step: 4,
        title: "Apply Antiseptic and Bandage",
        description: "Apply a thin layer of povidone-iodine ointment or antibiotic cream if available, and cover with a sterile adhesive bandage or gauze secured with medical tape."
      }
    ],
    safetyWarnings: [
      "Do NOT probe inside a deep wound or attempt to extract deeply embedded foreign objects (like glass shards or metal). Pad around the object and seek medical removal.",
      "Avoid using harsh hydrogen peroxide or rubbing alcohol directly in deep open cuts as it damages healthy granulation tissue.",
      "Do not remove the first gauze if soaked with blood; place fresh pads directly over the soaked ones and increase pressure."
    ],
    whenToSeekER: [
      "Blood spurts rhythmically in pulses or does not stop after 10 minutes of direct pressure (arterial bleed).",
      "The cut is deep, gaping, or exposes fat, muscle, tendon, or bone (requires sutures).",
      "The cut was caused by a dirty, rusty nail, animal bite, or human bite (high tetanus and rabies risk).",
      "Signs of infection emerge after 24-48 hours: redness, warmth, throbbing, pus, or fever.",
      "The person has not had a Tetanus Toxoid (TT) booster in the past 5-10 years."
    ]
  },
  {
    id: "fractures",
    title: "Fractures & Severe Sprains",
    category: "Orthopedic Injury",
    severity: "Immobilization First",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    summary: "Stabilization and the R.I.C.E. method to support suspected broken bones and prevent neurovascular damage.",
    steps: [
      {
        step: 1,
        title: "Immobilize the Injured Limb",
        description: "Support the injured bone and joints above and below the fracture site. Keep the patient still. Do not let them walk on an injured leg or ankle."
      },
      {
        step: 2,
        title: "Apply a Splint if Necessary",
        description: "If moving the patient is mandatory, fashion a makeshift splint using rigid rolled magazines, cardboard, or wooden slats, padded with cloth and secured with bandages or strips of cloth."
      },
      {
        step: 3,
        title: "Apply Ice Pack (Wrapped)",
        description: "Place ice cubes or a cold pack wrapped in a dry towel over the area for 15-20 minutes every 2 hours to diminish swelling and dull acute throbbing."
      },
      {
        step: 4,
        title: "Check Circulation (Pulse & Sensation)",
        description: "Ensure toes or fingers distal to the injury remain warm, pink, and capable of mild sensation. If they turn blue, pale, or numb, the splint is dangerously tight."
      }
    ],
    safetyWarnings: [
      "NEVER attempt to push back exposed broken bone fragments protruding through open skin (compound fracture). Cover the open wound with sterile gauze.",
      "NEVER force a deformed bone or dislocated joint back into anatomical alignment.",
      "Do NOT massage or vigorously rub an acutely sprained joint or suspected fracture."
    ],
    whenToSeekER: [
      "Bone is piercing through the skin (compound fracture).",
      "Limb is visibly bent at an unnatural angle or joint appears completely dislocated.",
      "Loss of feeling, numbness, or pale blue cold sensation in fingers or toes.",
      "Injury involves head, neck, spine, pelvis, or femur.",
      "Inability to bear any weight accompanied by severe swelling and bruising within minutes."
    ]
  },
  {
    id: "nosebleeds",
    title: "Nosebleeds (Epistaxis)",
    category: "Vascular Emergency",
    severity: "Posture Correction",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    summary: "Correct posture and anterior pinch protocol to halt nasal bleeding swiftly and safely.",
    steps: [
      {
        step: 1,
        title: "Sit Upright and Lean Slightly Forward",
        description: "Have the person sit upright and tilt their head slightly forward. Leaning backward is a dangerous myth that forces blood down the esophagus and trachea, provoking vomiting or choking."
      },
      {
        step: 2,
        title: "Pinch the Soft Part of the Nose",
        description: "Using thumb and index finger, firmly compress the soft fleshy part of the nose just beneath the nasal bridge. Breathe slowly and calmly through the mouth."
      },
      {
        step: 3,
        title: "Hold for 10-15 Continuous Minutes",
        description: "Maintain steady pinch pressure without letting go to check. Continuous pressure gives blood platelets the opportunity to coagulate and form a clot."
      },
      {
        step: 4,
        title: "Apply Cold Compress to Bridge",
        description: "Place a cold damp cloth or ice pack wrapped in a cloth on the bridge of the nose and back of the neck to stimulate local vasoconstriction."
      }
    ],
    safetyWarnings: [
      "DO NOT tilt the head backward or lay the victim flat on their back.",
      "DO NOT blow the nose, sniff vigorously, or insert cotton plugs deeply into the nostrils for at least several hours following the bleed.",
      "Avoid lifting heavy objects or bending over immediately after bleeding stops."
    ],
    whenToSeekER: [
      "Bleeding continues persistently for more than 20 minutes despite continuous pinching.",
      "The nosebleed occurs following a severe trauma to the head, face, or motor accident.",
      "The person feels faint, extremely dizzy, lightheaded, or displays pale clammy skin.",
      "Large quantities of blood are flowing rapidly down the back of the throat.",
      "The patient takes prescription blood thinners (Warfarin, Aspirin, Heparin) or has high BP."
    ]
  },
  {
    id: "choking",
    title: "Choking (Foreign Body Airway Obstruction)",
    category: "Critical Respiratory Emergency",
    severity: "Immediate Life Threat",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    summary: "Recognizing universal distress signals, performing the Heimlich maneuver, back blows, and infant rescue.",
    steps: [
      {
        step: 1,
        title: "Identify Universal Choking Sign",
        description: "Ask: 'Are you choking?' If the victim can cough loudly or speak, encourage them to cough forcefully. If they cannot speak, breathe, or make sounds and clutch their throat, act immediately."
      },
      {
        step: 2,
        title: "Deliver 5 Sharp Back Blows",
        description: "Stand slightly behind and to the side. Support their chest with one hand, bend them forward at the waist, and deliver 5 firm heel-of-hand blows between the shoulder blades."
      },
      {
        step: 3,
        title: "Perform 5 Abdominal Thrusts (Heimlich)",
        description: "Stand behind the victim. Wrap arms around their waist. Make a fist with one hand, place thumb side just above their navel (below ribcage), grasp with other hand, and pull inward and upward sharply 5 times."
      },
      {
        step: 4,
        title: "Alternate and Check Unconsciousness",
        description: "Continue alternating 5 back blows and 5 abdominal thrusts until object dislodges. If the person falls unconscious, gently lower to floor, call 108/112 emergency services, and begin CPR chest compressions."
      }
    ],
    safetyWarnings: [
      "NEVER perform abdominal thrusts on infants under 1 year old! For infants, use 5 gentle back blows with infant face down across your forearm, followed by 5 two-finger chest thrusts.",
      "Do NOT perform blind finger sweeps in the mouth; you may push the lodged foreign object further into the larynx.",
      "For pregnant women or obese individuals, place hands in the center of the breastbone (chest thrusts) instead of the abdomen."
    ],
    whenToSeekER: [
      "Any individual who required abdominal thrusts must be evaluated by a doctor to rule out internal abdominal trauma.",
      "If the object is expelled but the casualty suffers persistent stridor (wheezing noise), difficulty swallowing, or throat pain.",
      "If the person becomes unresponsive at any point (immediate emergency resuscitation)."
    ]
  },
  {
    id: "emergency-response",
    title: "Emergency Scene & CPR Protocol",
    category: "Life Support",
    severity: "Code Blue / Ambulance 108",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80",
    summary: "The DR ABC emergency protocol and hands-only CPR to save lives during cardiac arrest and accidents.",
    steps: [
      {
        step: 1,
        title: "D - Danger (Check Scene Safety)",
        description: "Assess the surroundings first for live electrical wires, fire, oncoming traffic, gas leaks, or falling debris. Protect yourself first; do not become a second casualty."
      },
      {
        step: 2,
        title: "R - Response (Check Consciousness)",
        description: "Gently tap the victim's shoulders and shout loudly: 'Are you okay? Open your eyes!' If there is no response, loudly assign a bystander to call Emergency Ambulance (108/112)."
      },
      {
        step: 3,
        title: "A & B - Airway & Breathing",
        description: "Gently tilt head back and lift chin. Look, listen, and feel for normal breathing for no more than 10 seconds. Agonal gasps are NOT normal breathing."
      },
      {
        step: 4,
        title: "C - Compressions (Hands-Only CPR)",
        description: "Place heel of one hand in center of chest, interlock fingers with other hand. Push hard and fast at 100-120 beats per minute (to the rhythm of 'Stayin' Alive'), depressing chest 2 inches (5 cm) and allowing full chest recoil."
      }
    ],
    safetyWarnings: [
      "Do NOT interrupt chest compressions for more than 10 seconds at a time.",
      "Do not hesitate: even imperfect bystander hands-only CPR doubles or triples survival rates compared to doing nothing.",
      "If an Automated External Defibrillator (AED) is on site, turn it on immediately and follow the automated voice prompts."
    ],
    whenToSeekER: [
      "CALL 108 / 112 / 102 IMMEDIATELY on encountering an unconscious individual.",
      "Suspicion of heart attack: crushing chest pain radiating to left arm/jaw, diaphoresis, shortness of breath.",
      "Suspicion of stroke (FAST): Facial drooping, Arm weakness, Slurred speech, Time to call emergency.",
      "Severe road traffic accident or polytrauma."
    ]
  }
];

