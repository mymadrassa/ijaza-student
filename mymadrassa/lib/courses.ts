export interface Module {
  title: string;
  desc: string;
}

export interface Course {
  slug: string;
  name: string;
  subtitle: string;
  category: "quran" | "arabic";
  icon: string;
  level: string;
  duration: string;
  students: number;
  price: string;
  tagline: string;
  overview: string;
  modules: Module[];
  whoFor: string[];
  prerequisites: string[];
  included: string[];
}

export const courses: Course[] = [
  {
    slug: "qaaida",
    name: "Qaaida",
    subtitle: "Arabic Reading Foundation",
    category: "quran",
    icon: "ق",
    level: "Beginner",
    duration: "3–6 months",
    students: 284,
    price: "£40/mo",
    tagline: "The essential first step. Learn to read the Qur'an from scratch.",
    overview:
      "The Qaaida is the foundation for anyone who cannot yet read Arabic script. Before a student can recite the Qur'an, they must first master the Arabic alphabet, its sounds, and the rules that govern how letters join and how vowels shape pronunciation. This course takes students from zero — no prior knowledge of Arabic required — through to independent Qur'anic reading. Lessons are one-to-one with a certified teacher and progress at the student's own pace, ensuring no rule is moved past until it is fully understood.",
    modules: [
      {
        title: "Arabic Alphabet",
        desc: "Recognition and correct pronunciation of all 29 Arabic letters in isolation — articulated from their proper points in the throat, mouth, and lips.",
      },
      {
        title: "Letter Forms",
        desc: "How each letter changes shape depending on its position in a word — beginning, middle, end, or standalone — and how letters connect to form words.",
      },
      {
        title: "Short Vowels (Harakat)",
        desc: "Fatha, kasra, and damma — the three foundational vowel marks — and how each alters the sound of the letter it sits above or below.",
      },
      {
        title: "Sukoon & Shaddah",
        desc: "Sukoon (no vowel, the letter rests) and shaddah (the doubled consonant) — two critical diacritics essential for correct Qur'anic reading.",
      },
      {
        title: "Tanween",
        desc: "The nunation marks — tanween fath, kasr, and damm — and how each is pronounced at the end of words in continuous recitation.",
      },
      {
        title: "Long Vowels (Madd Asli)",
        desc: "Introduction to the three natural elongations: alif, waw, and ya, and the minimum two-count lengthening each requires.",
      },
      {
        title: "Connected Reading",
        desc: "Applying all rules together in continuous Qur'anic text — moving from word-by-word reading to flowing, independent recitation.",
      },
    ],
    whoFor: [
      "Complete beginners with no Arabic reading ability",
      "Children starting their Qur'anic education",
      "Adults who grew up without formal Islamic schooling",
      "Anyone who wants to recite the Qur'an independently",
    ],
    prerequisites: ["No prior knowledge required — this is the starting point"],
    included: [
      "One-to-one live sessions with a certified teacher",
      "Personalised pace — no rushing until mastery is confirmed",
      "Digital Qaaida workbook provided",
      "WhatsApp support between sessions",
      "Regular progress assessments",
      "Certificate upon completion",
    ],
  },
  {
    slug: "hifz",
    name: "Hifz Program",
    subtitle: "Full Qur'an Memorisation",
    category: "quran",
    icon: "ح",
    level: "All levels",
    duration: "Ongoing — self-paced",
    students: 189,
    price: "£50/mo",
    tagline: "Carry the Qur'an in your heart. Structured memorisation with daily accountability.",
    overview:
      "Memorising the Qur'an is among the most honoured goals in Islamic tradition. Our Hifz Program provides the structure, accountability, and expert guidance needed to achieve it — whether you are starting from scratch or continuing from where you left off. Each student is assigned a dedicated teacher who oversees daily new memorisation, short-term revision, and long-term retention. No new memorisation begins until previous portions are solid, and progress is tracked carefully every session.",
    modules: [
      {
        title: "Assessment & Placement",
        desc: "An initial session to assess current Qur'anic reading fluency, Tajweed level, and any existing memorisation. A personalised memorisation schedule is then built around the student's capacity and goals.",
      },
      {
        title: "Hifz Jadid (New Memorisation)",
        desc: "Daily new portions assigned by the teacher based on the student's proven capacity. Typically beginning from Juz Amma and progressing through the Qur'an in a structured order.",
      },
      {
        title: "Sabqi (Recent Revision)",
        desc: "Revision of the most recently memorised pages — typically the last 5–7 pages — to consolidate short-term retention before any new portion is added.",
      },
      {
        title: "Manzil (Long-Term Revision)",
        desc: "Systematic revision of all previously memorised portions to ensure long-term retention. This is the most critical element in preventing forgetfulness of older sections.",
      },
      {
        title: "Tajweed Integration",
        desc: "All memorisation is done with correct Tajweed. Teachers correct recitation in real time so the Qur'an is memorised with proper pronunciation from the very first verse.",
      },
      {
        title: "Periodic Assessment & Completion",
        desc: "Regular assessments testing retention across large portions. A final recitation to the teacher upon completion, with a certificate and formal recommendation letter issued.",
      },
    ],
    whoFor: [
      "Students who can read Arabic fluently",
      "Those wanting to begin Hifz from scratch",
      "Students who started Hifz and want to continue or consolidate",
      "Adults fitting memorisation around work and family life",
    ],
    prerequisites: [
      "Ability to read the Qur'an fluently (Qaaida level or equivalent)",
      "A Tajweed foundation is recommended — this can be studied alongside Hifz",
    ],
    included: [
      "One-to-one sessions — daily or multiple times per week",
      "Personalised memorisation schedule",
      "Structured sabqi and manzil revision system",
      "WhatsApp daily check-in and support",
      "Progress reports shared with parents (for students under 18)",
      "Certificate and recommendation letter upon completion",
    ],
  },
  {
    slug: "tajweed",
    name: "Tajweed",
    subtitle: "Tuhfatul Atfaal",
    category: "quran",
    icon: "ت",
    level: "Beginner → Intermediate",
    duration: "4–8 months",
    students: 312,
    price: "£40/mo",
    tagline: "Recite with precision. Master the foundational rules of Tajweed through a classical text.",
    overview:
      "Tajweed — the science of correct Qur'anic recitation — ensures the words of the Qur'an are pronounced as they were revealed. The Tuhfatul Atfaal, a classical poem by Imam al-Jamzuri, is one of the most studied foundational Tajweed texts and covers every essential rule a reciter must know. Through careful study and applied recitation, students gain a structured, lasting command of the rules governing every letter and vowel in the Qur'an. Suitable for anyone who can read the Qur'an and wants to significantly raise the quality of their recitation.",
    modules: [
      {
        title: "Introduction to Tajweed",
        desc: "The definition, ruling, and history of Tajweed. Why correct recitation is obligatory, and what constitutes a major versus minor mistake.",
      },
      {
        title: "Noon Sakinah & Tanween",
        desc: "The four rules governing noon sakinah and tanween: Idhar (clear), Idgham (merge, with and without ghunnah), Iqlab (convert), and Ikhfa (conceal).",
      },
      {
        title: "Meem Sakinah",
        desc: "The three rules for meem sakinah: Ikhfa Shafawi, Idgham Shafawi (Mutamathalain), and Idhar Shafawi — identified by the letter that follows.",
      },
      {
        title: "Idgham (Assimilation)",
        desc: "Idgham Mutajanisain and Idgham Mutaqaribain — assimilation between similar and adjacent letters, with Qur'anic examples for each case.",
      },
      {
        title: "Madd (Elongation)",
        desc: "The full range of Madd types — Asli (natural) and Fari (secondary) — including Muttasil, Munfasil, Lazim, Aridh, Badal, Leen, and Silah, with counts for each.",
      },
      {
        title: "Qalqalah",
        desc: "The five qalqalah letters and the bouncing sound produced when they bear sukoon. Minor and major qalqalah, and the strongest occurrences at the end of verses.",
      },
      {
        title: "Waqf & Ibtida",
        desc: "The rules of stopping and starting — obligatory, preferred, permissible, and impermissible stops — and how to resume recitation correctly after each.",
      },
    ],
    whoFor: [
      "Students who can read the Qur'an but have never formally studied Tajweed",
      "Hifz students who want to memorise with correct rules from day one",
      "Adults who were taught informally and want to correct their recitation",
      "Anyone seeking a foundation for the Ijaazah pathway",
    ],
    prerequisites: ["Ability to read the Qur'an at Qaaida level or above"],
    included: [
      "One-to-one live sessions with a Tajweed-certified scholar",
      "Tuhfatul Atfaal text and translation provided",
      "Rule-by-rule recitation correction on live text",
      "WhatsApp support between sessions",
      "Regular assessments with written feedback",
      "Certificate upon completion",
    ],
  },
  {
    slug: "ijaazah",
    name: "Ijaazah",
    subtitle: "Tuhfatul Atfaal & Al-Jazariyyah",
    category: "quran",
    icon: "إ",
    level: "Advanced",
    duration: "12–24 months",
    students: 94,
    price: "£60/mo",
    tagline: "Join an unbroken chain. Receive your ijazah with a sanad connected to the Prophet ﷺ.",
    overview:
      "The Ijaazah is one of the most prestigious achievements in Islamic scholarship — a formal licence to teach the Qur'an, granted by a qualified scholar through an unbroken chain of transmission (sanad) back to the Prophet Muhammad ﷺ. This course takes students through deep study and memorisation of two classical Tajweed texts — the Tuhfatul Atfaal and the Jazariyyah of Ibn al-Jazari — and culminates in a live recitation examination before a qualified Shaykh. Upon success, the student receives their written ijazah and joins a chain that has remained unbroken for over 1,400 years.",
    modules: [
      {
        title: "Tuhfatul Atfaal — Review & Mastery",
        desc: "Complete review and mastery of the Tuhfatul Atfaal text, its rules, and their application across the Qur'an. Students must demonstrate full command before advancing.",
      },
      {
        title: "Al-Jazariyyah — Introduction",
        desc: "Introduction to the Jazariyyah of Ibn al-Jazari — a more advanced classical poem covering Makharij, Sifaat, and Tajweed topics beyond the Tuhfatul Atfaal.",
      },
      {
        title: "Makharij al-Huruf (Advanced)",
        desc: "Detailed study of the 17 articulation points and the 29 letters mapped to them, with practical exercises correcting longstanding pronunciation errors.",
      },
      {
        title: "Sifaat al-Huruf",
        desc: "The characteristics of Arabic letters — the five pairs of opposites and the remaining single attributes — and how each shapes the sound of a letter in recitation.",
      },
      {
        title: "Al-Jazariyyah — Memorisation",
        desc: "Line-by-line memorisation of the Jazariyyah poem with its meaning. Students are tested on both the recitation of the poem and the application of its rules in the Qur'an.",
      },
      {
        title: "Full Qur'an Recitation Review",
        desc: "The student recites large portions of the Qur'an to the teacher with all Tajweed rules applied. Errors are corrected and revisited until recitation meets ijazah standard.",
      },
      {
        title: "Examination & Ijazah Grant",
        desc: "Final recitation examination before the granting scholar. Upon success, the student receives a written ijazah certificate containing their full sanad.",
      },
    ],
    whoFor: [
      "Students who have completed Tajweed at Tuhfatul Atfaal level or above",
      "Hifz graduates wanting to raise their recitation to ijazah standard",
      "Those who want to teach the Qur'an with formal scholarly authorisation",
      "Scholars seeking to obtain or complete their sanad",
    ],
    prerequisites: [
      "Completion of Tajweed (Tuhfatul Atfaal) or equivalent",
      "Strong Qur'anic reading fluency required",
      "Full Hifz recommended but not mandatory",
    ],
    included: [
      "One-to-one sessions with an ijazah-holding scholar",
      "Tuhfatul Atfaal and Jazariyyah texts provided",
      "WhatsApp support and recitation feedback between sessions",
      "Full preparation for the ijazah examination",
      "Written ijazah certificate with complete sanad upon success",
    ],
  },
  {
    slug: "qiraat",
    name: "Qira'aat",
    subtitle: "Al-Shaatibiyyah",
    category: "quran",
    icon: "ر",
    level: "Expert",
    duration: "2–4 years",
    students: 47,
    price: "£70/mo",
    tagline: "Master the seven canonical readings. Study Al-Shaatibiyyah with a specialist scholar.",
    overview:
      "The science of Qira'aat encompasses the multiple canonically-authenticated modes of reciting the Qur'an, each transmitted back to the Prophet ﷺ through a different authoritative chain. Al-Shaatibiyyah (Hirz al-Amani) by Imam al-Shaatibi is the primary classical text through which the Seven Qira'aat are studied. This is among the most advanced courses in Islamic scholarship and is open only to students who hold an ijazah or possess equivalent mastery of Tajweed. Teaching is strictly one-to-one with a specialist who themselves holds authority in the Qira'aat.",
    modules: [
      {
        title: "Introduction to Qira'aat",
        desc: "The definition, history, and conditions for an authentic Qira'ah. The seven Imams of recitation, their transmitters (ruwat), and the theological importance of the multiple readings.",
      },
      {
        title: "Riwayat Hafs & Warsh",
        desc: "Beginning with the most widely used narrations — Hafs an Asim and Warsh an Nafi — establishing a comparative baseline before studying the full range of differences.",
      },
      {
        title: "The Seven Qira'aat — Usul",
        desc: "The foundational principles (usul) of each of the seven Imams: Nafi, Ibn Kathir, Abu Amr, Ibn Amir, Asim, Hamzah, and al-Kisai.",
      },
      {
        title: "Al-Shaatibiyyah — Memorisation",
        desc: "Memorisation of the Shaatibiyyah poem (over 1,100 lines) with full understanding of the differences each line encodes between the Qira'aat.",
      },
      {
        title: "Practical Application Across the Qur'an",
        desc: "Reciting Qur'anic passages according to each of the seven Qira'aat, switching between narrators, and demonstrating mastery of each mode's rules.",
      },
      {
        title: "Tahriraat (Combinations)",
        desc: "The advanced study of permissible and impermissible combinations when blending Qira'aat — a specialised and nuanced field within the science.",
      },
      {
        title: "Examination & Qira'aat Ijazah",
        desc: "Recitation examination across all seven Qira'aat before the granting scholar. A separate ijazah sanad is issued for each Qira'ah upon successful completion.",
      },
    ],
    whoFor: [
      "Scholars who hold an ijazah in Hafs or another recognised Qira'ah",
      "Advanced students seeking the highest level of Qur'anic authority",
      "Those who want to teach the seven Qira'aat with full scholarly licence",
      "Students who have memorised the Shaatibiyyah or are ready to begin",
    ],
    prerequisites: [
      "Ijazah in Hafs recitation (or equivalent authority in another Qira'ah)",
      "Full Hifz of the Qur'an strongly recommended",
      "Advanced Tajweed mastery required",
    ],
    included: [
      "One-to-one sessions with a specialist scholar in the Qira'aat",
      "Al-Shaatibiyyah text and annotated notes provided",
      "Structured progression through all seven Qira'aat",
      "Session recordings provided for review",
      "Individual ijazah sanad for each Qira'ah upon completion",
    ],
  },
  {
    slug: "sciences",
    name: "Sciences of the Qur'an",
    subtitle: "Ulum al-Qur'an",
    category: "quran",
    icon: "ع",
    level: "Intermediate",
    duration: "6–10 months",
    students: 211,
    price: "£40/mo",
    tagline: "Understand the Qur'an more deeply. Study the scholarly disciplines surrounding the Book of Allah.",
    overview:
      "The Qur'an is not only recited — it is studied. The Sciences of the Qur'an (Ulum al-Qur'an) encompass the scholarly disciplines that illuminate the context, composition, preservation, and proper interpretation of the Qur'an. This course covers the history of revelation, the compilation of the Mushaf, the methodology of Tafsir, abrogation, and more. It is an essential foundation for anyone wishing to study Tafsir or Islamic theology at a deeper level, and is suitable for students with basic Arabic reading ability and a general grounding in Islamic knowledge.",
    modules: [
      {
        title: "History of Revelation (Nuzul al-Qur'an)",
        desc: "The manner, stages, and wisdom behind the gradual revelation of the Qur'an over 23 years. The first and last verses revealed, and the significance of the Meccan and Medinan periods.",
      },
      {
        title: "Asbab al-Nuzul (Reasons for Revelation)",
        desc: "The circumstances and events that prompted specific verses to be sent down. How understanding context clarifies meaning and resolves apparent tension between verses.",
      },
      {
        title: "Makki and Madani Verses",
        desc: "The distinction between verses revealed before and after the Hijra, their respective characteristics, and why this distinction matters for correct interpretation.",
      },
      {
        title: "Compilation of the Qur'an",
        desc: "How the Qur'an was preserved during the Prophet's lifetime, compiled under Abu Bakr, and standardised under Uthman ibn Affan — and how this confirms its perfect preservation.",
      },
      {
        title: "Al-Naskh (Abrogation)",
        desc: "The concept of abrogation — which verses supersede others, the conditions required for a valid claim of naskh, and the scholarly discussion around it.",
      },
      {
        title: "I'jaz al-Qur'an (The Miraculous Nature)",
        desc: "The linguistic, prophetic, and other dimensions of the Qur'an's inimitability — the challenge to produce its like, and why that challenge has never been met.",
      },
      {
        title: "Introduction to Tafsir Methodology",
        desc: "The different schools of Tafsir, the conditions for a sound interpretation, and an introduction to the major classical commentaries and how to use them.",
      },
    ],
    whoFor: [
      "Students with Islamic knowledge who want to deepen their Qur'anic understanding",
      "Those studying Tafsir or Islamic theology",
      "Imams and Islamic teachers seeking to enrich their knowledge",
      "Students of Islamic studies at university level",
    ],
    prerequisites: [
      "Ability to read Arabic",
      "A basic grounding in Islamic knowledge is recommended",
    ],
    included: [
      "One-to-one live sessions with a qualified scholar",
      "Course notes and selected readings provided",
      "WhatsApp support for questions between sessions",
      "Regular knowledge assessments",
      "Certificate upon completion",
    ],
  },
  {
    slug: "arabic",
    name: "Arabic",
    subtitle: "Arabiyya Bayna Yadayk",
    category: "arabic",
    icon: "ع",
    level: "Beginner → Mastery",
    duration: "6–12 months per book",
    students: 693,
    price: "£50/mo per level",
    tagline: "From beginner to fluency. Master classical and modern Arabic through the world's most studied Arabic series.",
    overview:
      "The Arabiyya Bayna Yadayk (Arabic Between Your Hands) series is among the most widely used Arabic language curricula in the world. Our four-book program takes students from complete beginner — no prior knowledge required — through to strong fluency in reading, writing, listening, and speaking Modern Standard Arabic, with direct application to classical and Qur'anic Arabic. Each book is studied one-to-one with a qualified Arabic teacher, and placement assessments are available for students entering at Book Two or above.",
    modules: [
      {
        title: "Book One — Foundation",
        desc: "Arabic alphabet, basic vocabulary, simple sentence structure, greetings, numbers, days, family, and daily life. Students become comfortable with basic reading and writing by the end.",
      },
      {
        title: "Book Two — Elementary",
        desc: "Verb conjugation (past, present, command forms), expanding vocabulary, introduction to Arabic grammar cases (raf, nasb, jarr), longer reading passages and basic conversation.",
      },
      {
        title: "Book Three — Intermediate",
        desc: "Advanced grammar including dual and broken plural forms, relative clauses, verbal nouns (masdar), complex sentence structures, formal writing, and extended oral expression.",
      },
      {
        title: "Book Four — Advanced",
        desc: "Full command of Arabic grammar, exposure to classical Arabic texts, advanced vocabulary, essay writing, and the ability to read scholarly and religious texts independently.",
      },
    ],
    whoFor: [
      "Complete beginners with no Arabic knowledge",
      "Students who want to understand the Qur'an directly in Arabic",
      "Those seeking to read classical Islamic texts in the original",
      "Anyone wanting conversational or academic Arabic fluency",
    ],
    prerequisites: [
      "Book One: No prerequisites at all",
      "Book Two onwards: Completion of the previous book, or a placement assessment",
    ],
    included: [
      "One-to-one live sessions with a qualified Arabic teacher",
      "Arabiyya Bayna Yadayk student textbook and workbook provided",
      "Audio materials for listening and pronunciation practice",
      "WhatsApp support between sessions",
      "Regular written and oral assessments",
      "Certificate upon completion of each book",
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
