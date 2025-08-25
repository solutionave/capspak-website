export interface TeamMember {
  id: string;
  slug: string; // used for profile route
  name: string;
  role: string;
  unit?: string;
  bio?: string; // short line used in listings
  about?: string; // longer paragraph for profile
  experience?: string[]; // bullet list
  publications?: string[]; // placeholder titles
  headshot?: string;
  email?: string;
  linkedin?: string;
}

export interface GovernanceBody {
  id: string;
  title: string;
  description?: string;
  members: TeamMember[];
}

export const leadership: TeamMember[] = [
  {
    id: "tm-exec-dir",
    slug: "Khuram-Iqbal",
    name: "Dr. Khuram Iqbal",
    role: "President",
    about:
      "Dr. Khuram Iqbal is an Associate Professor with the Department of International Relations at the National Defence University (NDU) in Islamabad, Pakistan. He previously served as Head of the Department from 2020 to 2023. Dr. Iqbal earned his PhD in Security Studies from Macquarie University, Australia, and a Master’s in Strategic Studies from the Rajaratnam School of International Studies at Nanyang Technological University (NTU), Singapore. His academic and professional journey reflects a strong focus on international security, political violence, and strategic affairs, particularly in the South Asian and Asia-Pacific regions.",
    experience: [
      "National Defence University, Islamabad Associate Professor, Department of International Relations Head of Department (2020–2023)",
      "Centre for Transnational Crimes Prevention, Australia Researcher – Focused on South Asian security issues",
      "International Centre for Political Violence and Terrorism Research, Singapore Researcher – Specialized in counter-terrorism and political violence",
      "University of Maryland (USA) Visiting Fellow – Research on global security trends",
      "China Institute of International Studies (CIIS), Beijing Fellowship – Studied the global implications of the Belt and Road Initiative",
      "Consultancy Roles Worked with international organisations such as UNESCO, Hanns Seidel Foundation (HSF, Germany), National Counter Terrorism Authority (NACTA, Pakistan), and the US Department of Justice on Countering Violent Extremism initiatives",
      "Awards & Fellowships HSF Distinguished Fellowship on Non-Traditional Security (2022)",
    ],
    publications: [
      "Aerospace Resilience Pathways (2025)",
      "Dual-Use Tech Governance in Emerging Economies (2024)",
    ],
    headshot: "/Assets/Team/Dr.KhuramIqbal.jpg",
  },
  {
    id: "tm-policy-head",
    slug: "Muhammad-Shoaib",
    name: "Dr. Muhammad Shoaib",
    role: "Senior Vice President",
    about:
      "Dr. Muhammad Shoaib is an Assistant Professor at the Area Study Centre for Africa, North and South America, Quaid-i-Azam University, Islamabad. He holds a PhD in American Studies and has previously served at COMSATS University, Islamabad. His research interests center on U.S. and Chinese politics, as well as Pakistan’s foreign policy. Dr. Shoaib’s work has been published in leading academic journals, including Asian Survey, the Journal of Policing, Intelligence and Counter Terrorism, the Journal of International Development, and Space Policy. In addition to academic publications, he is also a regular contributor to various national and international newspapers.",
    experience: [
      "Quaid-i-Azam University, Islamabad Assistant Professor, Area Study Centre for Africa, North and South America",
      "COMSATS University, Islamabad Faculty Member (previous appointment)",
      "Research & Publications",
      "Focus on U.S. and Chinese politics, and Pakistan’s foreign policy",
      "Articles published in Asian Survey, Journal of Policing, Intelligence and Counter Terrorism, Journal of International Development, Space Policy",
    ],
    publications: ["Escalation Ladders & Autonomous Systems (2025)"],
    headshot: "/Assets/Team/MuhammadShoaib.jpg",
  },
  {
    id: "tm-policy-head2",
    slug: "Saira-Aquil",
    name: "Dr. Saira Aquil",
    role: "Vice President",
    about:
      "Dr. Saira Aquil is an Assistant Professor in the Department of Defence & Strategic Studies at Quaid-i-Azam University. She is the author of Destined to Fail: Democracy and State Building Experiment in Post-Taliban Afghanistan, published by Oxford University Press, Karachi. Her academic interests focus on defence, strategy, and political transitions in conflict-affected states.",
    experience: [
      "Quaid-i-Azam University, Islamabad Assistant Professor, Department of Defence & Strategic Studies",
      "Publications in Author of Destined to Fail: Democracy and State Building Experiment in Post-Taliban Afghanistan (Oxford University Press, Karachi)",
    ],
    publications: ["Escalation Ladders & Autonomous Systems (2025)"],
    headshot: "/Assets/Team/SairaAquil.jpg",
  },
];

export const researchFellows: TeamMember[] = [
  {
    id: "tm-fellow-aero",
    slug: "Umair-Pervez-Khan",
    name: "Umair Pervez Khan",
    role: "General Secretary",
    bio: "Launch, orbital infrastructure & civil/military aerospace.",
    about:
      "Umair Pervez Khan is a Lecturer of International Relations at the National Defence University, Islamabad, Pakistan, and is currently pursuing a PhD in International Relations at Selcuk University, Konya, Türkiye. He has extensive teaching experience at leading universities in Pakistan and actively contributes as a columnist to both Urdu and English newspapers. His areas of expertise include South Asian security, Indian strategic culture, Indian politics and Hindutva, and the dynamics of the Kashmir conflict.",
    experience: [
      "National Defence University, Islamabad Lecturer, Department of International Relations",
      "Selcuk University, Konya, Türkiye PhD Candidate in International Relations",
      "Standing Committee on Foreign Affairs, Senate of Pakistan Professional experience contributing to parliamentary foreign affairs work",
      "Teaching & Academia are in Experience teaching at top universities in Pakistan, Research publications on South Asian and Indian strategic/security issues, Guest speaker at various national and international conferences",
      "Writing & Media such as, Regular columnist for national Urdu and English newspapers on regional and international affairs",
    ],
    headshot: "/Assets/Team/UmairPervezKhan.jpg",
  },
  {
    id: "tm-fellow-stability",
    slug: "Sardar-Bakhsh",
    name: "Sardar Bakhsh",
    role: "Joint Secretary and Chief Organiser",
    bio: "Deterrence dynamics & escalation risk mapping.",
    about:
      "Sardar Bakhsh is a Lecturer at the National Defence University, Islamabad, where he is also pursuing his PhD. His research focuses on homeland security, counterterrorism, climate change, and foreign policy. He has contributed to the field through publications and academic research, with his recent article, Evolving Dynamics of China-Pakistan Counterterrorism Cooperation, appearing in the Journal of Policing, Intelligence and Counter Terrorism.",
     experience: [
      "National Defence University, Islamabad Lecturer, Department of International Relations PhD Candidate in International Relations",
      "Research & Publications",
      "Author of Evolving Dynamics of China-Pakistan Counterterrorism Cooperation published in the Journal of Policing, Intelligence and Counter Terrorism",
      "Research interests: Homeland security, counterterrorism, climate change, and foreign policy",
    ],
      headshot: "/Assets/Team/SardarBukhsh.jpg",
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    id: "tm-adv-1",
    slug: "Muhammad-Muneeb-Suleman",
    name: "Muhammad Muneeb Suleman",
    role: "",
    bio: "",
    about:
      "Muneeb Salman is a Research Associate at the China Pakistan Study Centre (CPSC), Institute of Strategic Studies, Islamabad (ISSI). He holds an MPhil in International Relations with a specialization in Pakistan’s national security policy process. His research interests include security policy, strategic culture, maritime security, and elitism.",
    headshot: "/Assets/Team/MuneebSulaiman.jpg",  
  },
  {
    id: "tm-adv-2",
    slug: "Muhammad-Ahmed-Khan",
    name: "Muhammad Ahmed Khan",
    role: "",
    bio: "",
    about:
      "Muhammad Ahmad Khan is a Research Associate at the India Study Centre, Institute of Strategic Studies Islamabad. He completed his Masters in International Relations from National Defence University, Islamabad. His interests include India's domestic and foreign policy, India-Pakistan relations, and South Asian politics. ",
      headshot: "/Assets/Team/MuhammadAhmadKhan.jpg",
  },
  {
    id: "tm-adv-3",
    slug: "Waleed-Ahmed",
    name: "Waleed Ahmed ",
    role: "",
    bio: "",
    about:
      "Waleed Ahmad, an M.Phil. scholar in International Relations specializing in Emerging Technologies, AI, and Cyber Security. With a Bachelor's degree in Peace and Conflict Studies, he delves into the intersection of Cyber security and its impact on reshaping the dimensions of Peace and Conflict. Waleed's passion for understanding the evolving landscape of global security is reflected in his research, which explores the intricate dynamics between technological advancements and international relations.",
      headshot: "/Assets/Team/WaleedAhmed.jpg",
  },
  {
    id: "tm-adv-4",
    slug: "Ali-Raza",
    name: "Ali Raza",
    role: "",
    bio: "",
    about:
      "Muhammad Ali Raza is a security issues enthusiast with expertise in Afghanistan's domestic politics and ethnic conflicts. His experience includes roles at PICSS, focusing on data collection for research, and at ISSI's Arms Control and Disarmament Center. Currently, he contributes to the South Asia Times.",
      headshot: "/Assets/Team/MuhammadAliRaza.jpg",
  },
  {
    id: "tm-adv-5",
    slug: "Sheraz-Sheikh",
    name: "Sheraz Sheikh",
    role: "",
    bio: "",
    about:
      "Shiraz Shaikh is an Assistant Research Associate at the Islamabad Policy Research Institute, a public think tank affiliated with the National Security Division of Pakistan. He also holds an M.Phil. in International Relations and has previously worked as a Deputy Editor at Hilal Publications, ISPR. He has a keen interest in terrorism, traditional and non-traditional approaches to security, extremism, far-right and Islamic movements, and alliance politics.",
      headshot: "/Assets/Team/ShirazSheikh.jpg",
  },
];

export const residentfellow: TeamMember[] = [
  {
    id: "tm-ae-1",
    slug: "Muhammad-Waqar-Anwar",
    name: "Muhammad Waqar Anwar",
    role: "",
    bio: "",
    about:
      "",
  },
];

export const researchteam: TeamMember[] = [
  {
    id: "tm-ac-1",
    slug: "Muhammad-Asif",
    name: "Muhammad Asif",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-ac-2",
    slug: "Sharjeel-Siddiqui",
    name: "Sharjeel Siddiqui",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-ac-3",
    slug: "Yusra-Sarwar",
    name: "Yusra Sarwar",
    role: "",
    bio: "",
    about:
      "",
  },
  {
    id: "tm-ac-4",
    slug: "Hadia-Allaudin",
    name: "Hadia Allaudin",
    role: "",
    bio: "",
    about:
      "",
  },
];

export const governanceBodies: GovernanceBody[] = [
  {
    id: "gb-board",
    title: "Advisory Board",
    description:
      "Provides strategic guidance, integrity oversight & horizon scanning on emerging risks.",
    members: advisoryBoard,
  },
  {
    id: "gb-exec",
    title: "Executive Leadership",
    description:
      "Accountable for implementation, partnerships and resource stewardship.",
    members: leadership,
  },
];

export function getAllTeam(): TeamMember[] {
  return [...leadership, ...researchFellows, ...advisoryBoard];
}
export function getTeamMember(slug: string): TeamMember | undefined {
  return getAllTeam().find((m) => m.slug === slug);
}
export function getTeamSlugs(): string[] {
  return getAllTeam().map((m) => m.slug);
}
