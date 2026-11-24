import type { Language } from "../types";

export interface UIStrings {
  tagline: string;
  navHome: string;
  navPathway: string;
  navPassport: string;
  navJobs: string;
  homeHeading: string;
  homeSubheading: string;
  goalLabel: string;
  goalPlaceholder: string;
  micLabel: string;
  micListening: string;
  micUnsupported: string;
  languageLabel: string;
  buildPathwayBtn: string;
  buildingPathway: string;
  popularGoalsLabel: string;
  starterGoals: string[];
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  pathwayTitle: string;
  openLesson: string;
  startTask: string;
  reviewTask: string;
  completedLabel: string;
  readyLabel: string;
  listenBtn: string;
  stopListenBtn: string;
  loadingAudioBtn: string;
  ttsPlayingElevenLabs: string;
  ttsFallbackNotice: string;
  goToTaskBtn: string;
  backToPathway: string;
  rubricTitle: string;
  answerLabel: string;
  answerPlaceholder: string;
  submitTaskBtn: string;
  gradingTask: string;
  passedLabel: string;
  tryAgainLabel: string;
  gradedByGemini: string;
  gradedOffline: string;
  rubricChecklistLabel: string;
  evidenceLabel: string;
  missedEvidenceLabel: string;
  viewPassportBtn: string;
  passportTitle: string;
  passportSubtitle: string;
  shareLinkLabel: string;
  copyLinkBtn: string;
  copiedBtn: string;
  qrTitle: string;
  qrHint: string;
  noBadgesTitle: string;
  noBadgesDesc: string;
  opportunitiesTitle: string;
  opportunitiesSubtitle: string;
  whyYouMatch: string;
  skillMissing: string;
  learnMissingSkill: string;
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  en: {
    tagline: "Learn it. Prove it. Get hired.",
    navHome: "Home",
    navPathway: "Pathway",
    navPassport: "Passport",
    navJobs: "Jobs",
    homeHeading: "What do you want to become?",
    homeSubheading:
      "Get a free 2-week practical skill plan, earn verified proof badges, and match directly with entry-level employers across India.",
    goalLabel: "Your career or skill goal",
    goalPlaceholder: "e.g. Solar rooftop technician, Tally GST assistant, Retail store associate...",
    micLabel: "Speak your goal",
    micListening: "Listening... speak clearly",
    micUnsupported:
      "Voice input uses your browser microphone when supported. Type your goal in the box above anytime.",
    languageLabel: "Choose learning language",
    buildPathwayBtn: "Create My 2-Week Pathway",
    buildingPathway: "Creating your 2-week plan...",
    popularGoalsLabel: "Popular starter goals",
    starterGoals: [
      "Solar Rooftop Technician",
      "Tally & GST Billing Assistant",
      "Retail Store & UPI POS Associate",
      "EV Two-Wheeler Service Trainee",
      "Customer Support Executive",
    ],
    step1Title: "1. Learn it",
    step1Desc: "Short, practical one-paragraph lessons in English, Hindi, or Kannada with audio support.",
    step2Title: "2. Prove it",
    step2Desc: "Complete a real-world task graded on a transparent rubric to earn your badge.",
    step3Title: "3. Get hired",
    step3Desc: "Share your QR Skill Passport and see entry-level jobs ranked by your verified badges.",
    pathwayTitle: "Your 2-Week Skill Pathway",
    openLesson: "Read Lesson",
    startTask: "Do Practical Task",
    reviewTask: "View / Retry Task",
    completedLabel: "Badge Earned",
    readyLabel: "Ready to Learn",
    listenBtn: "Listen",
    stopListenBtn: "Stop Audio",
    loadingAudioBtn: "Loading audio...",
    ttsPlayingElevenLabs: "Audio powered by ElevenLabs",
    ttsFallbackNotice: "Using browser voice fallback (ElevenLabs audio unavailable).",
    goToTaskBtn: "Continue to Practical Task",
    backToPathway: "Back to Pathway",
    rubricTitle: "{count}-Point Grading Rubric",
    answerLabel: "Your Practical Answer",
    answerPlaceholder: "Write step-by-step how you would handle this real workplace situation...",
    submitTaskBtn: "Submit for Grading",
    gradingTask: "Grading against rubric...",
    passedLabel: "Passed — Badge Added to Skill Passport",
    tryAgainLabel: "Needs Improvement — Review Feedback & Retry",
    gradedByGemini: "Graded by Gemini",
    gradedOffline: "Offline rubric check",
    rubricChecklistLabel: "Rubric Checklist",
    evidenceLabel: "Evidence",
    missedEvidenceLabel: "Not covered in your answer",
    viewPassportBtn: "Open Skill Passport",
    passportTitle: "Verified Skill Passport",
    passportSubtitle: "Shareable proof of practical skills earned through rubric-graded tasks.",
    shareLinkLabel: "Public shareable link",
    copyLinkBtn: "Copy Link",
    copiedBtn: "Copied",
    qrTitle: "Scan to verify",
    qrHint: "Employers can scan this QR code to inspect your badges and scores.",
    noBadgesTitle: "No badges earned yet",
    noBadgesDesc: "Complete a practical task with a score of 60 or higher to unlock your first Skill Passport badge.",
    opportunitiesTitle: "Matched Entry-Level Opportunities",
    opportunitiesSubtitle: "12 entry-level roles across India, ranked by overlap with your earned Skill Passport badges.",
    whyYouMatch: "Why you match",
    skillMissing: "Skill missing",
    learnMissingSkill: "Learn this skill",
  },
  hi: {
    tagline: "सीखो। साबित करो। नौकरी पाओ।",
    navHome: "होम",
    navPathway: "योजना",
    navPassport: "पासपोर्ट",
    navJobs: "नौकरियाँ",
    homeHeading: "आप क्या बनना चाहते हैं?",
    homeSubheading:
      "2 सप्ताह की आसान व्यावहारिक योजना पाएँ, प्रैक्टिकल टास्क से बैज कमाएँ, और भारत में एंट्री-लेवल नौकरियों से जुड़ें।",
    goalLabel: "आपका करियर या कौशल लक्ष्य",
    goalPlaceholder: "जैसे: सोलर तकनीशियन, टैली GST सहायक, रिटेल स्टोर एसोसिएट...",
    micLabel: "बोलकर लक्ष्य बताएं",
    micListening: "सुन रहे हैं... स्पष्ट बोलें",
    micUnsupported: "ब्राउज़र माइक उपलब्ध न होने पर ऊपर बॉक्स में अपना लक्ष्य लिखें।",
    languageLabel: "सीखने की भाषा चुनें",
    buildPathwayBtn: "मेरी 2-सप्ताह की योजना बनाएँ",
    buildingPathway: "आपकी योजना बन रही है...",
    popularGoalsLabel: "लोकप्रिय लक्ष्य",
    starterGoals: [
      "सोलर रूफटॉप तकनीशियन",
      "टैली और GST बिलिंग सहायक",
      "रिटेल स्टोर और UPI POS एसोसिएट",
      "EV टू-व्हीलर सर्विस ट्रेनी",
      "कस्टमर सपोर्ट एग्जीक्यूटिव",
    ],
    step1Title: "1. सीखें",
    step1Desc: "हिंदी, अंग्रेज़ी या कन्नड़ में सरल एक-पैराग्राफ के पाठ और सुनने की सुविधा।",
    step2Title: "2. साबित करें",
    step2Desc: "स्पष्ट रूब्रिक पर प्रैक्टिकल टास्क पूरा करें और सत्यापित बैज पाएं।",
    step3Title: "3. नौकरी पाएँ",
    step3Desc: "अपना QR स्किल पासपोर्ट साझा करें और अपने बैज से मेल खाती नौकरियाँ देखें।",
    pathwayTitle: "आपकी 2-सप्ताह की कौशल योजना",
    openLesson: "पाठ पढ़ें",
    startTask: "टास्क पूरा करें",
    reviewTask: "टास्क देखें / फिर प्रयास करें",
    completedLabel: "बैज प्राप्त",
    readyLabel: "सीखने के लिए तैयार",
    listenBtn: "सुनें",
    stopListenBtn: "ऑडियो रोकें",
    loadingAudioBtn: "ऑडियो लोड हो रहा है...",
    ttsPlayingElevenLabs: "ElevenLabs द्वारा ऑडियो",
    ttsFallbackNotice: "ब्राउज़र वॉइस फ़ॉलबैक चल रहा है (ElevenLabs ऑडियो अनुपलब्ध)।",
    goToTaskBtn: "प्रैक्टिकल टास्क पर जाएँ",
    backToPathway: "योजना पर लौटें",
    rubricTitle: "{count}-पॉइंट ग्रेडिंग रूब्रिक",
    answerLabel: "आपका व्यावहारिक उत्तर",
    answerPlaceholder: "यहाँ लिखें कि आप कार्यस्थल पर इस स्थिति को कैसे संभालेंगे...",
    submitTaskBtn: "मूल्यांकन के लिए भेजें",
    gradingTask: "रूब्रिक से जाँच हो रही है...",
    passedLabel: "उत्तीर्ण — स्किल पासपोर्ट में बैज जोड़ा गया",
    tryAgainLabel: "सुधार आवश्यक — सुझाव पढ़ें और फिर प्रयास करें",
    gradedByGemini: "Gemini द्वारा मूल्यांकन",
    gradedOffline: "ऑफ़लाइन रूब्रिक जाँच",
    rubricChecklistLabel: "रूब्रिक चेकलिस्ट",
    evidenceLabel: "प्रमाण",
    missedEvidenceLabel: "आपके उत्तर में शामिल नहीं",
    viewPassportBtn: "स्किल पासपोर्ट देखें",
    passportTitle: "सत्यापित स्किल पासपोर्ट",
    passportSubtitle: "प्रैक्टिकल टास्क द्वारा अर्जित कौशलों का साझा करने योग्य प्रमाण।",
    shareLinkLabel: "साझा करने योग्य लिंक",
    copyLinkBtn: "लिंक कॉपी करें",
    copiedBtn: "कॉपी हुआ",
    qrTitle: "सत्यापन के लिए स्कैन करें",
    qrHint: "नियोक्ता आपके बैज और स्कोर देखने के लिए यह QR कोड स्कैन कर सकते हैं।",
    noBadgesTitle: "अभी कोई बैज नहीं मिला है",
    noBadgesDesc: "पहला बैज पाने के लिए किसी प्रैक्टिकल टास्क में 60 या अधिक अंक प्राप्त करें।",
    opportunitiesTitle: "आपके लिए उपयुक्त अवसर",
    opportunitiesSubtitle: "आपके स्किल पासपोर्ट बैज के आधार पर रैंक की गई 12 एंट्री-लेवल नौकरियाँ।",
    whyYouMatch: "आप क्यों उपयुक्त हैं",
    skillMissing: "कमी वाला कौशल",
    learnMissingSkill: "यह कौशल सीखें",
  },
  kn: {
    tagline: "ಕಲಿಯಿರಿ. ಸಾಬೀತುಪಡಿಸಿ. ಉದ್ಯೋಗ ಪಡೆಯಿರಿ.",
    navHome: "ಮುಖಪುಟ",
    navPathway: "ಮಾರ್ಗ",
    navPassport: "ಪಾಸ್‌ಪೋರ್ಟ್",
    navJobs: "ಉದ್ಯೋಗಗಳು",
    homeHeading: "ನೀವು ಏನಾಗಲು ಬಯಸುತ್ತೀರಿ?",
    homeSubheading:
      "2 ವಾರಗಳ ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯ ಯೋಜನೆ ಪಡೆಯಿರಿ, ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗಳಿಸಿ ಮತ್ತು ಭಾರತದ ಎಂಟ್ರಿ-ಲೆವೆಲ್ ಉದ್ಯೋಗಗಳಿಗೆ ಹೊಂದಾಣಿಕೆ ಪಡೆಯಿರಿ.",
    goalLabel: "ನಿಮ್ಮ ವೃತ್ತಿ ಅಥವಾ ಕೌಶಲ್ಯ ಗುರಿ",
    goalPlaceholder: "ಉದಾ: ಸೋಲಾರ್ ಟೆಕ್ನಿಷಿಯನ್, ಟ್ಯಾಲಿ GST ಸಹಾಯಕ, ರಿಟೇಲ್ ಸ್ಟೋರ್ ಅಸೋಸಿಯೇಟ್...",
    micLabel: "ಮಾತನಾಡಿ ಗುರಿ ತಿಳಿಸಿ",
    micListening: "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದೆ... ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ",
    micUnsupported: "ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ, ಮೇಲಿನ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ ನಿಮ್ಮ ಗುರಿಯನ್ನು ಟೈಪ್ ಮಾಡಿ.",
    languageLabel: "ಕಲಿಕೆಯ ಭಾಷೆಯನ್ನು ಆರಿಸಿ",
    buildPathwayBtn: "ನನ್ನ 2-ವಾರಗಳ ಮಾರ್ಗ ರಚಿಸಿ",
    buildingPathway: "ನಿಮ್ಮ ಯೋಜನೆ ಸಿದ್ಧವಾಗುತ್ತಿದೆ...",
    popularGoalsLabel: "ಜನಪ್ರಿಯ ಗುರಿಗಳು",
    starterGoals: [
      "ಸೋಲಾರ್ ರೂಫ್‌ಟಾಪ್ ಟೆಕ್ನಿಷಿಯನ್",
      "ಟ್ಯಾಲಿ ಮತ್ತು GST ಬಿಲ್ಲಿಂಗ್ ಸಹಾಯಕ",
      "ರಿಟೇಲ್ ಸ್ಟೋರ್ ಮತ್ತು UPI POS ಅಸೋಸಿಯೇಟ್",
      "EV ದ್ವಿಚಕ್ರ ವಾಹನ ಸೇವಾ ತರಬೇತುದಾರ",
      "ಗ್ರಾಹಕ ಸೇವಾ ಪ್ರತಿನಿಧಿ",
    ],
    step1Title: "1. ಕಲಿಯಿರಿ",
    step1Desc: "ಕನ್ನಡ, ಹಿಂದಿ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಸರಳ ಪಾಠಗಳು ಮತ್ತು ಆಡಿಯೋ ಕೇಳುವ ಸೌಲಭ್ಯ.",
    step2Title: "2. ಸಾಬೀತುಪಡಿಸಿ",
    step2Desc: "ಸ್ಪಷ್ಟ ಮಾನದಂಡದ ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ ಬ್ಯಾಡ್ಜ್ ಗಳಿಸಿ.",
    step3Title: "3. ಉದ್ಯೋಗ ಪಡೆಯಿರಿ",
    step3Desc: "ನಿಮ್ಮ QR ಸ್ಕಿಲ್ ಪಾಸ್‌ಪೋರ್ಟ್ ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಹೊಂದಾಣಿಕೆಯ ಉದ್ಯೋಗಗಳನ್ನು ನೋಡಿ.",
    pathwayTitle: "ನಿಮ್ಮ 2-ವಾರಗಳ ಕೌಶಲ್ಯ ಮಾರ್ಗ",
    openLesson: "ಪಾಠ ಓದಿ",
    startTask: "ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯ ಮಾಡಿ",
    reviewTask: "ಕಾರ್ಯ ನೋಡಿ / ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
    completedLabel: "ಬ್ಯಾಡ್ಜ್ ಗಳಿಸಲಾಗಿದೆ",
    readyLabel: "ಕಲಿಕೆಗೆ ಸಿದ್ಧ",
    listenBtn: "ಕೇಳಿ",
    stopListenBtn: "ಆಡಿಯೋ ನಿಲ್ಲಿಸಿ",
    loadingAudioBtn: "ಆಡಿಯೋ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    ttsPlayingElevenLabs: "ElevenLabs ಆಡಿಯೋ",
    ttsFallbackNotice: "ಬ್ರೌಸರ್ ಧ್ವನಿ ಫಾಲ್‌ಬ್ಯಾಕ್ ಬಳಸಲಾಗುತ್ತಿದೆ (ElevenLabs ಆಡಿಯೋ ಲಭ್ಯವಿಲ್ಲ).",
    goToTaskBtn: "ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ",
    backToPathway: "ಮಾರ್ಗಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    rubricTitle: "{count}-ಅಂಶಗಳ ಮೌಲ್ಯಮಾಪನ ಮಾನದಂಡ",
    answerLabel: "ನಿಮ್ಮ ಪ್ರಾಯೋಗಿಕ ಉತ್ತರ",
    answerPlaceholder: "ಈ ಕೆಲಸದ ಸನ್ನಿವೇಶವನ್ನು ನೀವು ಹೇಗೆ ನಿಭಾಯಿಸುತ್ತೀರಿ ಎಂದು ಹಂತ ಹಂತವಾಗಿ ಬರೆಯಿರಿ...",
    submitTaskBtn: "ಮೌಲ್ಯಮಾಪನಕ್ಕೆ ಕಳುಹಿಸಿ",
    gradingTask: "ಮಾನದಂಡದ ಪ್ರಕಾರ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
    passedLabel: "ಉತ್ತೀರ್ಣ — ಸ್ಕಿಲ್ ಪಾಸ್‌ಪೋರ್ಟ್‌ಗೆ ಬ್ಯಾಡ್ಜ್ ಸೇರಿಸಲಾಗಿದೆ",
    tryAgainLabel: "ಸುಧಾರಣೆ ಅಗತ್ಯ — ಸಲಹೆ ಓದಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
    gradedByGemini: "Gemini ಮೌಲ್ಯಮಾಪನ",
    gradedOffline: "ಆಫ್‌ಲೈನ್ ಮಾನದಂಡ ಪರಿಶೀಲನೆ",
    rubricChecklistLabel: "ಮಾನದಂಡ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    evidenceLabel: "ಪುರಾವೆ",
    missedEvidenceLabel: "ನಿಮ್ಮ ಉತ್ತರದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿಲ್ಲ",
    viewPassportBtn: "ಸ್ಕಿಲ್ ಪಾಸ್‌ಪೋರ್ಟ್ ತೆರೆಯಿರಿ",
    passportTitle: "ಪರಿಶೀಲಿಸಿದ ಸ್ಕಿಲ್ ಪಾಸ್‌ಪೋರ್ಟ್",
    passportSubtitle: "ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯಗಳಿಂದ ಗಳಿಸಿದ ಕೌಶಲ್ಯಗಳ ಹಂಚಿಕೊಳ್ಳಬಹುದಾದ ಪುರಾವೆ.",
    shareLinkLabel: "ಸಾರ್ವಜನಿಕ ಹಂಚಿಕೆ ಲಿಂಕ್",
    copyLinkBtn: "ಲಿಂಕ್ ನಕಲಿಸಿ",
    copiedBtn: "ನಕಲಿಸಲಾಗಿದೆ",
    qrTitle: "ಪರಿಶೀಲಿಸಲು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    qrHint: "ಉದ್ಯೋಗದಾತರು ನಿಮ್ಮ ಬ್ಯಾಡ್ಜ್ ಮತ್ತು ಅಂಕಗಳನ್ನು ನೋಡಲು ಈ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಬಹುದು.",
    noBadgesTitle: "ಇನ್ನೂ ಯಾವುದೇ ಬ್ಯಾಡ್ಜ್ ಗಳಿಸಿಲ್ಲ",
    noBadgesDesc: "ನಿಮ್ಮ ಮೊದಲ ಬ್ಯಾಡ್ಜ್ ಪಡೆಯಲು ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯದಲ್ಲಿ 60 ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ಅಂಕ ಗಳಿಸಿ.",
    opportunitiesTitle: "ಹೊಂದಾಣಿಕೆಯ ಎಂಟ್ರಿ-ಲೆವೆಲ್ ಉದ್ಯೋಗಗಳು",
    opportunitiesSubtitle: "ನಿಮ್ಮ ಸ್ಕಿಲ್ ಪಾಸ್‌ಪೋರ್ಟ್ ಬ್ಯಾಡ್ಜ್‌ಗಳ ಆಧಾರದ ಮೇಲೆ ಶ್ರೇಣೀಕರಿಸಿದ 12 ಉದ್ಯೋಗಗಳು.",
    whyYouMatch: "ನೀವು ಏಕೆ ಸೂಕ್ತ",
    skillMissing: "ಕೊರತೆಯಿರುವ ಕೌಶಲ್ಯ",
    learnMissingSkill: "ಈ ಕೌಶಲ್ಯ ಕಲಿಯಿರಿ",
  },
};
