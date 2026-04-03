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

export const advisoryBoard1: TeamMember[] = [
   {
    id: "tm-adv1-1",
    slug: "Prof-Dr-Nezir-Akyesilmen",
    name: "Prof. Dr. Nezir Akyesilmen",
    role: "Faculty member in the Department of International Relations at Selçuk University.",
    about:
      "Prof. Dr. Nezir Akyesilmen is a faculty member in the Department of International Relations at Selçuk University. He received his undergraduate and doctoral degrees in International Relations from Middle East Technical University (METU) and completed his master’s degree at the University of Essex. Following his PhD, he conducted postdoctoral research at the Human Rights Law Centre of the University of Nottingham, and subsequently carried out research projects on cybersecurity at the University of Michigan and the University of Szczecin. Akyesilmen is a member of the Council of Europe’s Expert Group on Digital Citizenship Education (DCE). He currently serves as the president of the Ankara-based Human Rights Education Association (IHED) and as the Editor-in-Chief of Cyberpolitik Journal. His research interests include international relations, human rights, peace studies, human rights education, digital policies, and cybersecurity.",
    experience: [
         ],
    publications: [
      ""
    ],
    headshot: "/Assets/PolicyBrief/Dr.Nezir.png",
  },
  {
    id: "tm-adv1-2",
    slug: "Prof-Dr-Julian-Droogan",
    name: "Prof. Dr. Julian Droogan",
    role: "Head of School of International Studies, Macquarie University",
    about:
      "Dr. Julian is Head of School of International Studies, Macquarie University. He is also Editor-in-Chief of the Journal of Policing, Intelligence and Counter Terrorism (Routledge), and Co-Convener of the AVERT Network. Julian's academic research focusses on online extremism and disinformation, South Asian violent extremism, and terrorist cultures. Julian has worked with a range of stakeholders from government, the private sector, and community groups to apply university-based research to devising solutions to contemporary security challenges. He has led research projects for the Australian and US Departments of Defence, the NSW Government, and the United States Institute for Peace, among others. These encompass topics such as mapping jihadist propaganda, young Australians' engagement with online violent extremist content, the rise of far-right and conspiratorial narratives through social media, and the spread of online disinformation in Australia's region. Julian was instrumental in designing the COMPACT countering violent extremism program, operated by Multicultural NSW and aimed at fostering broad societal resilience to violent extremism.",
    experience: [
      "Head of School of International Studies, Macquarie University",
      "Editor-in-Chief, Journal of Policing, Intelligence and Counter Terrorism (Routledge)",
      "Co-Convener, AVERT Network",
      "Lead Researcher for projects commissioned by the Australian and US Departments of Defence, NSW Government, and United States Institute for Peace"
    ],
    publications: [
      "“Humanitarian Crises as Catalysts for Multi-Polarity: The Case of Afghan Refugees in Iran and Pakistan.”"
    ],
    headshot: "/Assets/Team/JulianDroogan.jpg",
  },
  {
    id: "tm-adv1-3",
    slug: "prof-dr-david-a-palmer",
    name: "Prof. Dr. David A. Palmer",
    role: "Director, HKU Global Society and Sustainability",
    about:
      "Prof. Dr. David A. Palmer is the Director of the HKU Global Society and Sustainability Lab and a Professor of Anthropology in the Department of Sociology and the Institute for Humanities and Social Sciences at the University of Hong Kong. He also serves as Qiushi Visiting Professor at Zhejiang University, China. Dr. Palmer holds a BA from McGill University (Canada) and a PhD from the École Pratique des Hautes Études (Paris PSL University, France). He was previously the Eileen Barker Postdoctoral Fellow on Religion and Contemporary Society at the London School of Economics and Political Science. In 1987–88, he participated in the Pak-Canada World Youth Exchange — a joint initiative of the Pakistan Ministry of Education and the Canadian International Development Agency — where he lived in a village in the former NWFP and engaged in cultural and educational activities across Pakistan. Dr. Palmer is the author of several award-winning books on modern and contemporary China in the context of globalization. He currently leads major collaborative projects funded by the Research Grants Council of Hong Kong on the socio-cultural and religious dimensions of the Belt and Road Initiative. His work involves leading an international research team investigating the social impacts of Chinese infrastructure projects overseas and developing stakeholder engagement and social risk management approaches adapted to Chinese and local contexts.",
    experience: [
      "Director, HKU Global Society and Sustainability Lab",
      "Professor of Anthropology, Department of Sociology and Institute for Humanities and Social Sciences, University of Hong Kong",
      "Qiushi Visiting Professor, Zhejiang University, China",
      "Eileen Barker Postdoctoral Fellow, London School of Economics and Political Science",
      "Participant, Pak-Canada World Youth Exchange Program (1987–88)"
    ],
    publications: [
      "Author of several award-winning books on modern and contemporary China in the context of globalization"
    ],
    headshot: "/Assets/Team/DavidPalmer.jpg"
  },
  {
    id: "tm-adv1-4",
    slug: "dr-roxolana-zigon",
    name: "Dr. Roxolana Zigón",
    role: "Director, Scientific Center of International Research, Moscow",
    about:
      "Dr. Roxolana Zigón, born in Russia, has spent over two decades studying and working abroad. Her professional interests span a wide range of fields, including geopolitics, international relations and diplomacy, strategic and military analysis, science and advanced technologies, arts and philosophy, and neurolinguistics and neuropedagogy. She possesses extensive experience as a strategic adviser to high-ranking politicians, with her strategic insights inspiring decision-makers across countries toward social and technological transformation guided by humanistic ideals. Currently, she serves as the Director of the Scientific Center of International Research in Moscow. In February 2025, she founded the Foreign Policy Public Forum 'Diplomat Speaks'—a platform for dialogues with foreign ambassadors in Russia—which has been met with positive reception both domestically and internationally. Beyond her advisory work, Dr. Zigón is an accomplished writer and television host, having authored numerous academic papers, research articles, theatrical plays, film scripts, and poetry volumes.",
    experience: [
      "Director, Scientific Center of International Research, Moscow",
      "Strategic Adviser to high-ranking politicians in various countries",
      "Founder, Foreign Policy Public Forum 'Diplomat Speaks' (2025)",
      "Writer and TV Host",
      "Researcher in geopolitics, diplomacy, and strategic analysis"
    ],
    publications: [
      ""
    ],
    headshot: "/Assets/Team/RoxolanaZigon.jpg"
  },
  {
    id: "tm-adv1-5",
    slug: "muhammad-zia-ul-haq",
    name: "Prof. Dr. Muhammad Zia-ul-Haq",
    role: "Director General, Islamic Research Institute",
    about:
      "Prof. Dr. Muhammad Zia-ul-Haq is the Director General of the Islamic Research Institute and Professor of Shariah & Islamic Law at the International Islamic University, Islamabad, Pakistan. He previously served as Dean of the Faculty of Shariah and Law (2010–2014) and Chair of the Department of Shariah (2008–2010). Dr. Haq was a Senior Fulbright Fellow and visiting professor at the Edward B. Brueggeman Center for Dialogue, Xavier University, Cincinnati, Ohio (2013–2014). He holds a B.A. and M.A. in Islamic Studies from Bahauddin University, an M.A. in Arabic from the University of the Punjab, and a Ph.D. in Comparative Fiqh (Islamic Law) from Ezzituna University, Tunis. He has also completed post-doctoral research at the University of Glasgow, UK, and held fellowships at the University of Deusto, Spain, and the University of Warsaw, Poland. Earlier, he taught and chaired the Department of Islamic Law at Allama Iqbal Open University (1999–2008). His academic expertise includes Islamic jurisprudence, international Islamic law, human rights from an Islamic perspective, Muslim family law, and interfaith dialogue. Dr. Haq has organized and presented at numerous national and international conferences and authored dozens of research articles in Arabic, Urdu, and English, including his recent publication, 'Muslims Participation in Interfaith Dialogue: Prospects & Challenges.' He advocates for the ethics of disagreement and strives to promote a culture of respectful intellectual dialogue.",
    experience: [
      "Director General, Islamic Research Institute, International Islamic University Islamabad",
      "Professor of Shariah & Islamic Law, International Islamic University Islamabad",
      "Dean, Faculty of Shariah and Law, IIUI (2010–2014)",
      "Chair, Department of Shariah (Islamic Law), IIUI (2008–2010)",
      "Senior Fulbright Fellow & Visiting Professor, Xavier University, Cincinnati, USA (2013–2014)",
      "Chair, Department of Islamic Law, Allama Iqbal Open University (1999–2008)",
      "Post-Doctoral Fellow, University of Glasgow, UK",
      "Fellow, University of Deusto, Spain",
      "Fellow, University of Warsaw, Poland"
    ],
    publications: [
      "Muslims Participation in Interfaith Dialogue: Prospects & Challenges",
      "Dozens of research articles in Arabic, Urdu, and English on Islamic jurisprudence, human rights, and interfaith dialogue"
    ],
    headshot: "/Assets/Team/zia.jpeg"
  },
  {
    id: "tm-adv1-6",
    slug: "naureen-nazar-soomro",
    name: "Dr. Naureen Nazar Soomro",
    role: "Director, Area Study Centre, Far East & Southeast Asia (FESEA), University of Sindh",

    about:
      "Dr. Soomro is the Director and an Associate Professor at the Area Study Centre, Far East & Southeast Asia (FESEA), University of Sindh, Jamshoro. She has been affiliated with the FESEA, for the last 21 years. She completed her doctorate in Politics from the University of York, United Kingdom. She is also the Managing Editor of the “Asia Pacific – A Research Journal of Far East & Southeast Asia.” She has previously been associated with the United Nations World Food Program (UN-WFP).",
    experience: [
      "",
      ""
    ],
    publications: [
      "",
      ""
    ],
    headshot: "/Assets/Team/Naureen.jpg"
  },
];

export const leadership: TeamMember[] = [
  {
    id: "tm-exec-dir",
    slug: "Khuram-Iqbal",
    name: "Dr. Khuram Iqbal",
    role: "President",
    about:"Dr. Khuram Iqbal is an Associate Professor at the Quaid-e-Azam University in Islamabad, Pakistan. He previously served as Head, Department of International Relations,  National Defense University (2020-23).  Dr. Iqbal earned his PhD in Security Studies from Macquarie University, Australia, and a Master’s in Strategic Studies from the Rajaratnam School of International Studies at Nanyang Technological University (NTU), Singapore. His academic and professional journey reflects a strong focus on international security, political violence, and strategic affairs, particularly in the South Asian and Asia-Pacific regions. Prior to joining NDU, he was attached with the Centre for Transnational Crimes Prevention, Australia and International Centre for Political Violence and Terrorism Research, Singapore. As a Post-Doc fellow, he has been affiliated with various prestigious international academic institutions, including the China Institute of International Studies (CIIS), National Defence University of People's Liberation Army (China), Macquarie University (Australia) and University of Maryland (United States).  Drawing on his expertise and academic background from Singapore, Australia, China, and the US, Dr. Iqbal established the Consortium for Asia-Pacific and Eurasian Studies (CAEPS) in 2025. Dr. Iqbal’s research profile features several high-impact publications that explore the various aspects of conflicts and cooperation in South Asia. With a profound editorial and publishing experience, he is ranked among the most globally cited scholars of Security Studies from Pakistan.",
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
    slug: "Faisal-Javaid",
    name: "Dr. Faisal Javaid",
    role: "Senior Vice President",
    about:
      "Dr. Faisal Javaid is the Head of the Department of International Relations and Mass Communication at the Federal Urdu University of Arts, Science & Technology (FUUAST), Islamabad, where he has served since 2009. He also holds the position of Deputy Director at the Office of Research Innovation and Commercialization (ORIC), FUUAST, Karachi. His primary research focuses on the foreign relations of Central Asia, with particular emphasis on regional connectivity between Pakistan, Central Asia, and the Russian Federation. He is the author of Bridging Horizons: Unraveling the Enigma of Connectivity between Pakistan and Central Asia (IPS, Karachi, 2024), editor of two additional books, and contributor of two chapters on regional conflicts and global responses, with another book forthcoming. Dr. Javaid completed a prestigious postdoctoral fellowship at the Harriman Institute, Columbia University, New York, USA, which significantly strengthened his expertise in international relations and regional studies. With more than thirty-three research papers published in international and national journals, he has organized four international conferences, presented around ten research papers at global academic forums, and successfully secured research and travel grants from the Higher Education Commission, Islamabad. He is also an approved PhD supervisor, having supervised three PhD and nine M.Phil. scholars to completion. Dr. Javaid has taught as a Visiting Professor at the Institute of Political Science, University of Warmia and Mazury in Olsztyn, Poland. He is currently a Guest Researcher on the “TRANSECT” project at Eberswalde University for Sustainable Development, Germany, and serves as a Country Expert for the Varieties of Democracy (V-Dem) Project at the University of Gothenburg, Sweden. He has also contributed as a Non-Resident Fellow at the Institute of Policy Studies (IPS), Islamabad. He is an active member of several leading international associations, including the Midwest Political Science Association (MPSA), International Studies Association (ISA), International Political Science Association (IPSA), and the Association for Political Theory (APT).",
    experience: [
      "Head of Department of International Relations and Mass Communication",
      "Deputy Director - ORIC",
      "Federal Urdu University of Arts, Science and Technology, Islamabad, "
    ],
    publications: ["“Humanitarian Crises as Catalysts for Multi-Polarity: The Case of Afghan Refugees in Iran and Pakistan"],
    headshot: "/Assets/Team/faisal javaid.png",
  },
  {
    id: "tm-policy-head3",
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
    headshot: "/Assets/Team/SairaAquil.png",
  },
];

export const conveningCommittee: TeamMember[] = [
  {
    id: "tm-fellow-aero",
    slug: "Umair-Pervez-Khan",
    name: "Umair Pervez Khan",
    role: "General Secretary and Director Northeast Chapter",
    bio: "",
    about:
      "Umair Pervez Khan is currently working as lecturer at department of International Relations, National Defence University, Islamabad and is also attached as General Secretary with Consortium for Asia Pacific and Eurasian Studies (CAPES), Pakistan. He is perusing PhD, International Relations, from Selcuk University, Türkiye. Holding an MPhil degree in International Relations, has worked with Standing Committee on Foreign Affairs, Senate of Pakistan. Khan having teaching experience in top universities of Pakistan, is also a prolific column writer in number of national and international Urdu/ English Newspapers including: South China Morning Post, Daily Sabah (Türkiye), Daily Times and other international outlets. Khan has number of research publications to his name and has been guest speaker at different national and international conferences. He is a regular commentator on national and international media on the topics of his expertise including South Asian Security, Indian Strategic Culture, Hindutva, Nationalism-Populism, Democracy and Kashmir conflict.",
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
    id: "tm-fellow-aer",
    slug: "Gul-i-Ayesha-Bhatti",
    name: "Dr. Gul-i-Ayesha Bhatti",
    role: "Director Eurasian Chapter.",
    bio: "",
    about:
    "Dr. Gul-i-Ayesha Bhatti is associated as an Assistant Professor with Jinnah School of public policy and Leadership, National University of Sciences and Technology, Islamabad. She has done her PhD in International relations from Minhaj University. Her Specialization include geopolitics, defense cooperation, regional stability, human rights, and foreign policy. She also regularly contributes to national and international media.",
    experience: [
      "Assistant Professor at NUST (School of Social Sciences & Humanities) in Islamabad",
      "PhD in International Relations from Minhaj University, Lahore",
     ],
    headshot: "/Assets/Team/Gul-i-Ayesha.jpg",
  },
  {
    id: "tm-fellow-stability",
    slug: "Sardar-Bakhsh",
    name: "Sardar Bakhsh",
    role: "Chief Organiser and Director Southeast Chapter",
    bio: "",
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
    id: "tm-adv-3",
    slug: "Waleed-Ahmed",
    name: "Waleed Ahmed ",
    role: "",
    bio: "",
    about:
      "Waleed Ahmad, an M.Phil. scholar in International Relations specializing in Emerging Technologies, AI, and Cyber Security. With a Bachelor's degree in Peace and Conflict Studies, he delves into the intersection of Cyber security and its impact on reshaping the dimensions of Peace and Conflict. Waleed's passion for understanding the evolving landscape of global security is reflected in his research, which explores the intricate dynamics between technological advancements and international relations.",
    headshot: "/Assets/Team/WaleedAhmad.png",
  },
  
  
];


export const residentfellow: TeamMember[] = [
  
  {
    id: "tm-ae-2",
    slug: "Muhammad-Umar",
    name: "Muhammad Umar",
    role: "",
    bio: "",
    about:
      "Muhammad Umar is a policy analyst and writer specializing in international security, governance, and South Asian affairs. His work spans the intersections of geopolitics, nuclear policy, and strategic stability, with experience in nuclear safety and security, nuclear energy policy, and arms control and disarmament affairs across Washington, D.C., South Asia, and international organizations such as the International Atomic Energy Agency (IAEA). He has also worked as an assistant professor at the National University of Sciences and Technology, Islamabad. Prior to joining NUST, Umar has also worked as an anchorperson and manager in-charge of product and content development at Pakistan Television Networks.He has spent time in the tribal belt between Afghanistan and Pakistan documenting human rights violations against local populations by Al-Qaeda and the Tehrik-e-Taliban Pakistan (TTP). He is a regular contributor to The News International, and his commentary appears in South Asian Voices at the Stimson Center, Quartz India, The Washington Post, and other international outlets. He frequently provides television analysis on regional security and policy issues. His current research focuses on Afghanistan’s post-conflict trajectory, emerging technologies in governance, and the evolution of global security architectures.He tweets @umarwrites.Umar has a Bachelors degree in Political Science from Kutztown University of Pennsylvania and a Masters in Journalism from the Graduate School of Journalism at Columbia University in New York.",
    headshot: "/Assets/Team/Screenshot From 2025-12-25 06-45-22.png"
  },
  {
    id: "tm-ae-1",
    slug: "Muhammad-WaqarAnwar",
    name: "Muhammad Waqar Anwar",
    role: "",
    bio: "",
    about:
      "Muhammad Waqar Anwar holds a Postgraduate Diploma in Defence and Security Studies and a Postgraduate Diploma in International Relations, both from Massey University, New Zealand. During his academic tenure in New Zealand, he actively engaged with student and community networks, serving as an Executive Committee Member of the New Zealand Institute of International Affairs. He has presented his research at academic conferences across Australia and New Zealand, and has contributed scholarly articles and opinion pieces to various journals and media platforms. His academic and policy interests lie at the intersection of security studies, international relations, and Asia-Pacific regional dynamics.",
    headshot: "/Assets/Team/MuhammadWaqarAnwar.jpg"
  },
];

// export const seniorResearchAnalyst: TeamMember[] = [
//   {
//     id: "tm-ae-4",
//     slug: "Muneeb",
//     name: "Muneeb Salman",
//     role: "Senior Research Analyst",
//     bio: "",
//     about:
//       "Muneeb Salman is a Senior Research Analyst at the Consortium for Asia Pacific and Eurasian Studies (CAPES). He holds BS and MPhil degrees from the Department of International Relations at National Defence University, where he received the President’s Gold Medal for the MPhil batch of 2022-2024. He also received research and professional training at the University of Lausanne, Switzerland, and ADA University, Azerbaijan. Muneeb has been working with several public and private think tanks in Islamabad and Lahore for more than six years, including the Institute of Strategic Studies Islamabad (ISSI), the Islamabad Policy Research Institute (IPRI), and the Maritime Study Forum (MSF). He also worked for over a year as a Research Assistant with a senior faculty member at the National Defence University and led the pioneer social media team at the Department of International Relations. His research interests include Pakistan’s foreign and security policies, political sociology with a focus on sociology of elites, strategic culture, and epistemic communities. Muneeb has published peer-reviewed literature in internationally recognised journals. His opinion pieces have appeared in national and international platforms, including South Asia @ LSE, CIMSEC, and The Express Tribune. He has also engaged widely with national and international media on numerous issues.",
//     headshot: "/Assets/Team/Muneeb.jpeg",
//   },
// ];

export const researchfellows: TeamMember[] = [
   {
    id: "tm-ae-3",
    slug: "Dr-Sundas-Khizar",
    name: "Dr. Sundas Khizar",
    role: "",
    bio: "",
    about:
      "Dr. Sundas Khizar is an Assistant Professor at the University of Sargodha, Pakistan. Her expertise encompasses regional politics, strategic partnerships, and the geopolitical significance of Central Asia within the broader Russia–Pakistan and Eurasian contexts. With extensive teaching and research experience, Dr. Khizar is also a regular media analyst, providing insightful analyses on international affairs, geopolitical trends, and regional developments. Her scholarly work demonstrates a deep understanding of political dynamics, security challenges, and strategic relations shaping Eurasia and South Asia. Through her research and teaching, Dr. Khizar emphasizes the importance of understanding emerging global trends and their implications for Pakistan’s foreign policy and regional stability.",
    headshot: "/Assets/Team/Dr. Sundas Khizar.jpg"
  },
];

export const researchteam: TeamMember[] = [
  {
    id: "tm-ac-1",
    slug: "Muneeb",
    name: "Muneeb Salman",
    role: "Senior Research Analyst",
    bio: "",
    about:
      "Muneeb Salman is a Senior Research Analyst at the Consortium for Asia Pacific and Eurasian Studies (CAPES). He holds BS and MPhil degrees from the Department of International Relations at National Defence University, where he received the President’s Gold Medal for the MPhil batch of 2022-2024. He also received research and professional training at the University of Lausanne, Switzerland, and ADA University, Azerbaijan. Muneeb has been working with several public and private think tanks in Islamabad and Lahore for more than six years, including the Institute of Strategic Studies Islamabad (ISSI), the Islamabad Policy Research Institute (IPRI), and the Maritime Study Forum (MSF). He also worked for over a year as a Research Assistant with a senior faculty member at the National Defence University and led the pioneer social media team at the Department of International Relations. His research interests include Pakistan’s foreign and security policies, political sociology with a focus on sociology of elites, strategic culture, and epistemic communities. Muneeb has published peer-reviewed literature in internationally recognised journals. His opinion pieces have appeared in national and international platforms, including South Asia @ LSE, CIMSEC, and The Express Tribune. He has also engaged widely with national and international media on numerous issues.",
    headshot: "/Assets/Team/Muneeb.jpeg"
  },
  {
    id: "tm-ac-2",
    slug: "Sharjeel-Siddiqui",
    name: "Sharjeel Siddiqui",
    role: "",
    bio: "",
    about:
      "Sharjeel Siddiqui is an M.Phil. Scholar and researcher affiliated with the Consortium for Asia-Pacific and Eurasian Studies (CAPES). His research focuses on the geopolitics of the Asia Pacific and migrationpatterns, with particular emphasis on socio-political and institutional factors shaping movementwithin and across South Asia.",
    headshot: "/Assets/Team/Sharjeel.jpg"
  },
  {
    id: "tm-ac-3",
    slug: "Yusra-Sarwar",
    name: "Yusra Sarwar",
    role: "",
    bio: "",
    about:
      "Yusra Sarwar is a researcher at the Consortium for Asia Pacific and Eurasian Studies (CAPES). She has completed her MPhil in International Relations, with her areas of interest including climate changeand the politics of the Oceania region.",
    headshot: "/Assets/Team/YusraSarwar.jpg"
  },
  {
    id: "tm-ac-4",
    slug: "Hadia-Allaudin",
    name: "Hadia Allaudin",
    role: "",
    bio: "",
    about:
      "Hadia Allaudin is a researcher at the Consortium for Asia Pacific and Eurasian Studies (CAPES). She has a keen interest in geopolitics, climate change and global affairs, particularly in Asia.",
    headshot: "/Assets/Team/Hadia.jpg"
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
    id: "gb-advBoard",
    title: "Advisory Board",
    description:
      "Provides strategic guidance, integrity oversight & horizon scanning on emerging risks.",
    members: advisoryBoard1,
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
  return [
    ...leadership,
    ...researchfellows,
    ...conveningCommittee,
    ...advisoryBoard1,
    ...advisoryBoard,
    // ...seniorResearchAnalyst,
    ...residentfellow,
    ...researchteam,
  ];
}
export function getTeamMember(slug: string): TeamMember | undefined {
  return getAllTeam().find((m) => m.slug === slug);
}
export function getTeamSlugs(): string[] {
  return getAllTeam().map((m) => m.slug);
}
