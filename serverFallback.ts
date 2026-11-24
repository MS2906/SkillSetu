export type SupportedLanguage = "en" | "hi" | "kn";

export interface FallbackSkill {
  id: string;
  week: 1 | 2;
  days: string;
  title: string;
  summary: string;
  lesson: string;
  taskPrompt: string;
  rubric: string[];
  keywords: string[];
}

export interface FallbackPathway {
  goal: string;
  language: SupportedLanguage;
  goalSummary: string;
  twoWeekOverview: string;
  skills: FallbackSkill[];
  createdAt: string;
}

interface StarterTemplate {
  matchTerms: string[];
  goalSummary: Record<SupportedLanguage, string>;
  twoWeekOverview: Record<SupportedLanguage, string>;
  skills: Array<{
    id: string;
    week: 1 | 2;
    days: string;
    title: Record<SupportedLanguage, string>;
    summary: Record<SupportedLanguage, string>;
    lesson: Record<SupportedLanguage, string>;
    taskPrompt: Record<SupportedLanguage, string>;
    rubric: Record<SupportedLanguage, string[]>;
    keywords: string[];
  }>;
}

const STARTER_TEMPLATES: StarterTemplate[] = [
  {
    matchTerms: ["solar", "rooftop", "सोलर", "ಸೋಲಾರ್"],
    goalSummary: {
      en: "Solar Rooftop Technician — Field Installation & Safety Basics",
      hi: "सोलर रूफटॉप तकनीशियन — इंस्टॉलेशन और सुरक्षा के मूल कौशल",
      kn: "ಸೋಲಾರ್ ರೂಫ್‌ಟಾಪ್ ಟೆಕ್ನಿಷಿಯನ್ — ಅಳವಡಿಕೆ ಮತ್ತು ಸುರಕ್ಷತಾ ಮೂಲಭೂತಗಳು",
    },
    twoWeekOverview: {
      en: "In 2 weeks you will learn rooftop site safety, DC wiring & multimeter checks, and routine solar panel cleaning and customer handover.",
      hi: "2 सप्ताह में आप छत पर सुरक्षा नियम, DC वायरिंग व मल्टीमीटर जाँच, और सोलर पैनल सफाई व ग्राहक हैंडओवर सीखेंगे।",
      kn: "2 ವಾರಗಳಲ್ಲಿ ನೀವು ಮೇಲ್ಛಾವಣಿ ಸುರಕ್ಷತೆ, DC ವೈರಿಂಗ್ ಮತ್ತು ಮಲ್ಟಿಮೀಟರ್ ಪರೀಕ್ಷೆ, ಹಾಗೂ ಸೋಲಾರ್ ಪ್ಯಾನೆಲ್ ಸ್ವಚ್ಛತೆ ಮತ್ತು ಗ್ರಾಹಕ ಹ್ಯಾಂಡ್‌ಓವರ್ ಕಲಿಯುವಿರಿ.",
    },
    skills: [
      {
        id: "solar-safety",
        week: 1,
        days: "Days 1–4",
        title: {
          en: "Site Safety & Harness Check",
          hi: "साइट सुरक्षा और हार्नेस जाँच",
          kn: "ಸೈಟ್ ಸುರಕ್ಷತೆ ಮತ್ತು ಹಾರ್ನೆಸ್ ಪರೀಕ್ಷೆ",
        },
        summary: {
          en: "Inspect PPE, roof edges, and safety harnesses before climbing onto any customer rooftop.",
          hi: "किसी भी छत पर चढ़ने से पहले PPE, छत के किनारों और सेफ्टी हार्नेस की जाँच करना।",
          kn: "ಯಾವುದೇ ಗ್ರಾಹಕರ ಮೇಲ್ಛಾವಣಿಗೆ ಏರುವ ಮೊದಲು PPE, ಛಾವಣಿಯ ಅಂಚುಗಳು ಮತ್ತು ಸುರಕ್ಷತಾ ಹಾರ್ನೆಸ್ ಪರಿಶೀಲಿಸುವುದು.",
        },
        lesson: {
          en: "Every safe solar installation begins before you touch a single panel. Always inspect your full-body safety harness for frayed straps or loose buckles, wear rubber-soled non-slip shoes and insulated gloves, and check the roof surface for wet algae, loose tiles, or overhead power lines. Keep at least a 2-meter clearance from live AC lines and anchor your lifeline to a strong structural beam rather than a water pipe. When working in teams, designate one person to watch ladder footing while carrying tools in a shoulder pouch so both hands remain free on the rungs.",
          hi: "हर सुरक्षित सोलर काम पैनल छूने से पहले शुरू होता है। छत पर चढ़ने से पहले अपने फुल-बॉडी सेफ्टी हार्नेस की बेल्ट और बकल जाँचें, नॉन-स्लिप रबर जूते और इंसुलेटेड दस्ताने पहनें, और देखें कि छत पर फिसलन, टूटी टाइल या ऊपर से गुजरती बिजली की तार तो नहीं है। लाइव AC तारों से कम से कम 2 मीटर दूर रहें और लाइफलाइन को पानी के पाइप के बजाय मजबूत बीम से बांधें। सीढ़ी चढ़ते समय औजार टूल-बैग में रखें ताकि दोनों हाथ खाली रहें।",
          kn: "ಪ್ರತಿ ಸುರಕ್ಷಿತ ಸೋಲಾರ್ ಕೆಲಸವು ಪ್ಯಾನೆಲ್ ಮುಟ್ಟುವ ಮೊದಲೇ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. ಮೇಲ್ಛಾವಣಿಗೆ ಏರುವ ಮೊದಲು ನಿಮ್ಮ ಫುಲ್-ಬಾಡಿ ಸೇಫ್ಟಿ ಹಾರ್ನೆಸ್ ಬೆಲ್ಟ್ ಮತ್ತು ಬಕಲ್ ಪರಿಶೀಲಿಸಿ, ರಬ್ಬರ್ ಸೋಲ್ ಶೂ ಮತ್ತು ಇನ್ಸುಲೇಟೆಡ್ ಕೈಗವಸುಗಳನ್ನು ಧರಿಸಿ, ಮತ್ತು ಜಾರುವ ಪಾಚಿ ಅಥವಾ ಮೇಲಿನ ವಿದ್ಯುತ್ ತಂತಿಗಳಿವೆಯೇ ಎಂದು ನೋಡಿ. ಲೈವ್ AC ತಂತಿಗಳಿಂದ ಕನಿಷ್ಠ 2 ಮೀಟರ್ ದೂರವಿರಿ ಮತ್ತು ಲೈಫ್‌ಲೈನ್ ಅನ್ನು ನೀರಿನ ಪೈಪ್ ಬದಲು ಗಟ್ಟಿಯಾದ ಬೀಮ್‌ಗೆ ಕಟ್ಟಿ.",
        },
        taskPrompt: {
          en: "You arrive at a home in Bengaluru where the tin roof is slightly damp from morning rain and an overhead electricity wire passes near the east corner. List the exact 4 safety steps you will take before starting work.",
          hi: "आप सुबह की बारिश के बाद हल्की गीली टिन की छत वाले घर पर पहुँचते हैं, जहाँ पूर्वी कोने के पास बिजली का तार गुजरता है। काम शुरू करने से पहले आप कौन-से 4 सुरक्षा कदम उठाएँगे?",
          kn: "ಬೆಳಗಿನ ಮಳೆಯಿಂದ ಸ್ವಲ್ಪ ಒದ್ದೆಯಾಗಿರುವ ತಗಡಿನ ಛಾವಣಿ ಮತ್ತು ಪೂರ್ವ ಮೂಲೆಯಲ್ಲಿ ವಿದ್ಯುತ್ ತಂತಿ ಹಾದುಹೋಗುವ ಮನೆಗೆ ನೀವು ತಲುಪುತ್ತೀರಿ. ಕೆಲಸ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ನೀವು ತೆಗೆದುಕೊಳ್ಳುವ 4 ಸುರಕ್ಷತಾ ಕ್ರಮಗಳನ್ನು ಬರೆಯಿರಿ.",
        },
        rubric: {
          en: [
            "Checks PPE (harness, insulated gloves, non-slip shoes) and roof dryness",
            "Keeps safe distance from the overhead electricity wire",
            "Sets ladder on firm footing",
            "Anchors the lifeline to a structural point",
          ],
          hi: [
            "PPE (हार्नेस, दस्ताने, नॉन-स्लिप जूते) और छत के सूखने की जाँच करता है",
            "ऊपर की बिजली की तार से सुरक्षित दूरी रखता है",
            "सीढ़ी को मजबूत और स्थिर आधार पर रखता है",
            "लाइफलाइन को मजबूत संरचनात्मक बिंदु (बीम) से एंकर करता है",
          ],
          kn: [
            "PPE (ಹಾರ್ನೆಸ್, ಕೈಗವಸು, ನಾನ್-ಸ್ಲಿಪ್ ಶೂ) ಮತ್ತು ಛಾವಣಿ ಒಣಗಿರುವುದನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ",
            "ಮೇಲಿನ ವಿದ್ಯುತ್ ತಂತಿಯಿಂದ ಸುರಕ್ಷಿತ ಅಂತರ ಕಾಯ್ದುಕೊಳ್ಳುತ್ತದೆ",
            "ಏಣಿಯನ್ನು ಗಟ್ಟಿಯಾದ ಮತ್ತು ಸ್ಥಿರವಾದ ನೆಲದ ಮೇಲೆ ಇಡುತ್ತದೆ",
            "ಲೈಫ್‌ಲೈನ್ ಅನ್ನು ಗಟ್ಟಿಯಾದ ರಚನಾತ್ಮಕ ಬಿಂದುವಿಗೆ ಆಂಕರ್ ಮಾಡುತ್ತದೆ",
          ],
        },
        keywords: ["site safety", "harness", "ppe", "solar"],
      },
      {
        id: "solar-multimeter",
        week: 1,
        days: "Days 5–7",
        title: {
          en: "DC Wiring & Multimeter Safety",
          hi: "DC वायरिंग और मल्टीमीटर जाँच",
          kn: "DC ವೈರಿಂಗ್ ಮತ್ತು ಮಲ್ಟಿಮೀಟರ್ ಸುರಕ್ಷತೆ",
        },
        summary: {
          en: "Measure open-circuit DC voltage safely and verify correct MC4 polarity before connecting the inverter.",
          hi: "इन्वर्टर जोड़ने से पहले ओपन-सर्किट DC वोल्टेज मापना और सही MC4 पोलैरिटी की पुष्टि करना।",
          kn: "ಇನ್ವರ್ಟರ್ ಜೋಡಿಸುವ ಮೊದಲು ಓಪನ್-ಸರ್ಕ್ಯೂಟ್ DC ವೋಲ್ಟೇಜ್ ಅಳೆಯುವುದು ಮತ್ತು ಸರಿಯಾದ MC4 ಪೋಲಾರಿಟಿ ಖಚಿತಪಡಿಸುವುದು.",
        },
        lesson: {
          en: "Solar panels generate DC electricity whenever sunlight hits them—there is no off switch on the sun. Before plugging MC4 connectors into the DC isolator or inverter, set your digital multimeter to the DC Voltage (V⎓) range higher than the string rating (for example, 600V DC). Place the red probe on the positive wire and black probe on the negative wire; a steady positive reading confirms polarity, while a minus sign warns that polarity is reversed. Never disconnect an MC4 plug under load because DC arcs can melt connectors and cause burns; always switch off the DC isolator first.",
          hi: "धूप पड़ते ही सोलर पैनल DC बिजली बनाने लगते हैं, इसलिए इन्हें स्विच से बंद नहीं किया जा सकता। MC4 कनेक्टर को इन्वर्टर से जोड़ने से पहले डिजिटल मल्टीमीटर को स्ट्रिंग से अधिक DC वोल्टेज (जैसे 600V DC) पर सेट करें। लाल प्रोब पॉजिटिव (+) और काला प्रोब नेगेटिव (-) तार पर लगाएँ; माइनस चिन्ह दिखे तो पोलैरिटी उल्टी है। लोड चलते समय कभी MC4 प्लग न निकालें, पहले DC आइसोलेटर बंद करें।",
          kn: "ಸೂರ್ಯನ ಬೆಳಕು ಬಿದ್ದ ತಕ್ಷಣ ಸೋಲಾರ್ ಪ್ಯಾನೆಲ್‌ಗಳು DC ವಿದ್ಯುತ್ ಉತ್ಪಾದಿಸುತ್ತವೆ. MC4 ಕನೆಕ್ಟರ್‌ಗಳನ್ನು ಇನ್ವರ್ಟರ್‌ಗೆ ಜೋಡಿಸುವ ಮೊದಲು ಡಿಜಿಟಲ್ ಮಲ್ಟಿಮೀಟರ್ ಅನ್ನು ಸ್ಟ್ರಿಂಗ್ ವೋಲ್ಟೇಜ್‌ಗಿಂತ ಹೆಚ್ಚಿನ DC ಶ್ರೇಣಿಗೆ (ಉದಾ: 600V DC) ಸೆಟ್ ಮಾಡಿ. ಕೆಂಪು ಪ್ರೋಬ್ ಪಾಸಿಟಿವ್ ಮತ್ತು ಕಪ್ಪು ಪ್ರೋಬ್ ನೆಗೆಟಿವ್ ತಂತಿಗೆ ಇಡಿ; ಮೈನಸ್ ಚಿಹ್ನೆ ಬಂದರೆ ಪೋಲಾರಿಟಿ ತಪ್ಪಾಗಿದೆ ಎಂದರ್ಥ. ಲೋಡ್ ಇರುವಾಗ MC4 ಪ್ಲಗ್ ತೆಗೆಯಬೇಡಿ; ಮೊದಲು DC ಐಸೋಲೇಟರ್ ಆಫ್ ಮಾಡಿ.",
        },
        taskPrompt: {
          en: "When testing a 4-panel solar string before connecting the inverter, your multimeter shows -156V DC. Explain these 3 points: (1) what this reading means, (2) why you must not connect it yet, and (3) how you will fix and re-test safely.",
          hi: "इन्वर्टर जोड़ने से पहले 4-पैनल सोलर स्ट्रिंग टेस्ट करने पर मल्टीमीटर -156V DC दिखाता है। ये 3 बातें बताएं: (1) इसका क्या मतलब है, (2) इसे अभी क्यों नहीं जोड़ना चाहिए, और (3) आप इसे सुरक्षित रूप से कैसे ठीक और पुनः टेस्ट करेंगे?",
          kn: "ಇನ್ವರ್ಟರ್ ಜೋಡಿಸುವ ಮೊದಲು 4-ಪ್ಯಾನೆಲ್ ಸೋಲಾರ್ ಸ್ಟ್ರಿಂಗ್ ಪರೀಕ್ಷಿಸಿದಾಗ ಮಲ್ಟಿಮೀಟರ್ -156V DC ತೋರಿಸುತ್ತದೆ. ಈ 3 ಅಂಶಗಳನ್ನು ವಿವರಿಸಿ: (1) ಇದರ ಅರ್ಥವೇನು, (2) ಏಕೆ ಜೋಡಿಸಬಾರದು, ಮತ್ತು (3) ಸುರಕ್ಷಿತವಾಗಿ ಹೇಗೆ ಸರಿಪಡಿಸಿ ಮರು-ಪರೀಕ್ಷಿಸುವಿರಿ?",
        },
        rubric: {
          en: [
            "Correctly explains that the minus sign means reversed positive/negative polarity",
            "Notes the risk of inverter damage or short-circuit if connected reversed",
            "States safe steps: isolate/cover or keep circuit open, swap/re-check MC4 leads, and verify +156V DC reading",
          ],
          hi: [
            "सही बताया हो कि माइनस चिन्ह का मतलब उल्टी पोलैरिटी (+/-) है",
            "उल्टा जोड़ने पर इन्वर्टर खराब होने या शॉर्ट-सर्किट के खतरे का उल्लेख हो",
            "सुरक्षित सुधार के चरण (लीड्स/MC4 जाँच और पुनः +156V DC सत्यापन) लिखे हों",
          ],
          kn: [
            "ಮೈನಸ್ ಚಿಹ್ನೆಯು ತಪ್ಪಾದ ಪೋಲಾರಿಟಿ (+/-) ಸೂಚಿಸುತ್ತದೆ ಎಂದು ಸರಿಯಾಗಿ ವಿವರಿಸಿರುವುದು",
            "ತಪ್ಪಾಗಿ ಜೋಡಿಸಿದರೆ ಇನ್ವರ್ಟರ್ ಹಾನಿ ಅಥವಾ ಶಾರ್ಟ್-ಸರ್ಕ್ಯೂಟ್ ಅಪಾಯವನ್ನು ತಿಳಿಸಿರುವುದು",
            "ಸುರಕ್ಷಿತ ಸರಿಪಡಿಸುವ ಕ್ರಮಗಳು ಮತ್ತು +156V DC ಮರು-ಪರೀಕ್ಷೆ ಉಲ್ಲೇಖಿಸಿರುವುದು",
          ],
        },
        keywords: ["dc wiring", "multimeter", "fault testing", "solar"],
      },
      {
        id: "solar-cleaning",
        week: 2,
        days: "Days 8–14",
        title: {
          en: "Solar Panel Cleaning & Customer Handover",
          hi: "सोलर पैनल सफाई और ग्राहक हैंडओवर",
          kn: "ಸೋಲಾರ್ ಪ್ಯಾನೆಲ್ ಸ್ವಚ್ಛತೆ ಮತ್ತು ಗ್ರಾಹಕ ಹ್ಯಾಂಡ್‌ಓವರ್",
        },
        summary: {
          en: "Clean panels without thermal shock or scratches and walk the customer through basic system checks.",
          hi: "बिना खरोंच या थर्मल शॉक के पैनल साफ करना और ग्राहक को बेसिक सिस्टम जाँच समझाना।",
          kn: "ಗೀರುಗಳು ಅಥವಾ ಥರ್ಮಲ್ ಶಾಕ್ ಇಲ್ಲದೆ ಪ್ಯಾನೆಲ್ ಸ್ವಚ್ಛಗೊಳಿಸುವುದು ಮತ್ತು ಗ್ರಾಹಕರಿಗೆ ಮೂಲಭೂತ ಮಾಹಿತಿ ನೀಡುವುದು.",
        },
        lesson: {
          en: "Dust and bird droppings can cut rooftop solar output by 15% to 25%, but cleaning at midday with cold borewell water can crack hot glass due to thermal shock. Always schedule cleaning early morning or after sunset when panels are cool, turn off the AC/DC isolators, and use plain soft water with a microfiber mop—never detergent, abrasive brushes, or high-pressure jets. After finishing, wipe the frame dry, switch the system back on, show the customer the green generation light on the inverter, and share a simple fortnightly cleaning schedule.",
          hi: "धूल और पक्षियों की बीट से सोलर बिजली उत्पादन 15–25% तक घट सकता है, लेकिन दोपहर की तेज धूप में ठंडा पानी डालने से गर्म कांच चटक सकता है। सफाई हमेशा सुबह जल्दी या शाम को पैनल ठंडे होने पर करें, AC/DC आइसोलेटर बंद करें, और बिना डिटर्जेंट के सादे पानी व सॉफ्ट माइक्रोफाइबर वाइपर का उपयोग करें। अंत में सिस्टम चालू कर ग्राहक को इन्वर्टर की हरी लाइट दिखाएं।",
          kn: "ಧೂಳು ಮತ್ತು ಪಕ್ಷಿಗಳ ಕೊಳೆಯಿಂದ ಸೋಲಾರ್ ಉತ್ಪಾದನೆ 15–25% ಕಡಿಮೆಯಾಗಬಹುದು, ಆದರೆ ಮಧ್ಯಾಹ್ನದ ಬಿಸಿಲಿನಲ್ಲಿ ತಣ್ಣೀರು ಹಾಕಿದರೆ ಗಾಜು ಬಿರುಕು ಬಿಡಬಹುದು. ಯಾವಾಗಲೂ ಬೆಳಿಗ್ಗೆ ಬೇಗ ಅಥವಾ ಸಂಜೆ ಪ್ಯಾನೆಲ್ ತಣ್ಣಗಿರುವಾಗ ಸ್ವಚ್ಛಗೊಳಿಸಿ, AC/DC ಐಸೋಲೇಟರ್ ಆಫ್ ಮಾಡಿ, ಡಿಟರ್ಜೆಂಟ್ ಇಲ್ಲದೆ ಶುದ್ಧ ನೀರು ಮತ್ತು ಮೈಕ್ರೋಫೈಬರ್ ಮಾಪ್ ಬಳಸಿ. ನಂತರ ಗ್ರಾಹಕರಿಗೆ ಇನ್ವರ್ಟರ್ ಹಸಿರು ದೀಪವನ್ನು ತೋರಿಸಿ.",
        },
        taskPrompt: {
          en: "A homeowner asks if they can wash their solar panels at 1:00 PM using washing powder and a hard broom. Write a polite response covering 3 steps: (1) the right time to clean instead of 1:00 PM, (2) what water and tools to use instead, and (3) how to check power generation afterward.",
          hi: "एक मकान मालिक पूछता है कि क्या वह दोपहर 1 बजे डिटर्जेंट पाउडर और सख्त झाड़ू से सोलर पैनल धो सकता है। विनम्रता से 3 कदम बताएं: (1) दोपहर 1 बजे के बजाय सही समय, (2) सादे पानी व सही उपकरण का तरीका, और (3) बाद में बिजली उत्पादन जांचने का तरीका।",
          kn: "ಮಧ್ಯಾಹ್ನ 1 ಗಂಟೆಗೆ ವಾಷಿಂಗ್ ಪೌಡರ್ ಮತ್ತು ಗಟ್ಟಿ ಪೊರಕೆಯಿಂದ ಸೋಲಾರ್ ಪ್ಯಾನೆಲ್ ತೊಳೆಯಬಹುದೇ ಎಂದು ಮನೆ ಮಾಲೀಕರು ಕೇಳುತ್ತಾರೆ. 3 ಹಂತಗಳಲ್ಲಿ ಉತ್ತರಿಸಿ: (1) ಮಧ್ಯಾಹ್ನ 1ರ ಬದಲು ಸರಿಯಾದ ಸಮಯ, (2) ಶುದ್ಧ ನೀರು ಮತ್ತು ಮೃದು ಸಾಧನಗಳ ಬಳಕೆ, ಮತ್ತು (3) ನಂತರ ವಿದ್ಯುತ್ ಉತ್ಪಾದನೆ ಪರಿಶೀಲಿಸುವ ವಿಧಾನ.",
        },
        rubric: {
          en: [
            "Advises cleaning early morning or evening instead of 1 PM to prevent glass cracking",
            "Explains using plain water and soft cloth/microfiber instead of detergent or hard broom",
            "Includes checking the inverter display/green indicator or generation reading during handover",
          ],
          hi: [
            "दोपहर 1 बजे के बजाय सुबह/शाम को सफाई करने की सलाह और कांच टूटने से बचाव बताया हो",
            "डिटर्जेंट व सख्त झाड़ू की जगह सादे पानी और सॉफ्ट वाइपर/कपड़े का सुझाव हो",
            "हैंडओवर में इन्वर्टर लाइट/रीडिंग जाँचने की बात शामिल हो",
          ],
          kn: [
            "ಮಧ್ಯಾಹ್ನ 1 ಗಂಟೆಯ ಬದಲು ಬೆಳಿಗ್ಗೆ ಅಥವಾ ಸಂಜೆ ಸ್ವಚ್ಛಗೊಳಿಸಲು ಸಲಹೆ ನೀಡಿರುವುದು",
            "ಡಿಟರ್ಜೆಂಟ್ ಮತ್ತು ಗಟ್ಟಿ ಪೊರಕೆಯ ಬದಲು ಶುದ್ಧ ನೀರು ಮತ್ತು ಮೃದುವಾದ ಬಟ್ಟೆ ಬಳಸಲು ತಿಳಿಸಿರುವುದು",
            "ನಂತರ ಇನ್ವರ್ಟರ್ ದೀಪ ಅಥವಾ ಉತ್ಪಾದನೆ ರೀಡಿಂಗ್ ಪರಿಶೀಲಿಸುವುದನ್ನು ಉಲ್ಲೇಖಿಸಿರುವುದು",
          ],
        },
        keywords: ["panel cleaning", "maintenance", "customer handover", "solar"],
      },
    ],
  },
  {
    matchTerms: ["tally", "gst", "bookkeep", "account", "टैली", "ಟ್ಯಾಲಿ"],
    goalSummary: {
      en: "Tally & GST Billing Assistant — Invoices, Ledgers & Reconciliation",
      hi: "टैली और GST बिलिंग सहायक — इनवॉइस, लेजर और मिलान",
      kn: "ಟ್ಯಾಲಿ ಮತ್ತು GST ಬಿಲ್ಲಿಂಗ್ ಸಹಾಯಕ — ಇನ್ವಾಯ್ಸ್, ಲೆಡ್ಜರ್ ಮತ್ತು ಹೊಂದಾಣಿಕೆ",
    },
    twoWeekOverview: {
      en: "In 2 weeks you will learn accurate GST invoice preparation, Tally voucher and ledger entry, and daily bank reconciliation checks.",
      hi: "2 सप्ताह में आप सही GST बिल बनाना, टैली वाउचर व लेजर एंट्री, और बैंक रिकंसिलिएशन जाँच सीखेंगे।",
      kn: "2 ವಾರಗಳಲ್ಲಿ ನೀವು ನಿಖರವಾದ GST ಇನ್ವಾಯ್ಸ್, ಟ್ಯಾಲಿ ಲೆಡ್ಜರ್ ಎಂಟ್ರಿ ಮತ್ತು ಬ್ಯಾಂಕ್ ಹೊಂದಾಣಿಕೆ ಕಲಿಯುವಿರಿ.",
    },
    skills: [
      {
        id: "gst-invoice",
        week: 1,
        days: "Days 1–4",
        title: {
          en: "GST Invoice Preparation",
          hi: "GST इनवॉइस तैयार करना",
          kn: "GST ಇನ್ವಾಯ್ಸ್ ತಯಾರಿಕೆ",
        },
        summary: {
          en: "Calculate CGST, SGST, and IGST accurately and verify mandatory buyer/seller invoice fields.",
          hi: "CGST, SGST और IGST की सही गणना करना और बिल की अनिवार्य जानकारी जाँचना।",
          kn: "CGST, SGST ಮತ್ತು IGST ಲೆಕ್ಕಹಾಕುವುದು ಮತ್ತು ಇನ್ವಾಯ್ಸ್ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು.",
        },
        lesson: {
          en: "A valid GST tax invoice protects both the shop and its business buyers when claiming Input Tax Credit. Always verify five essentials before issuing a bill: supplier GSTIN, sequential invoice number and date, HSN/SAC code for the item, taxable value before tax, and the right tax split. If the buyer is in the same state as the seller (for example, Bengaluru to Mysuru), split an 18% GST rate equally into 9% CGST and 9% SGST; if the buyer is in another state (Bengaluru to Pune), apply 18% IGST instead.",
          hi: "सही GST इनवॉइस दुकान और खरीदार दोनों को टैक्स क्रेडिट दिलाता है। बिल जारी करने से पहले 5 बातें जरूर जांचें: विक्रेता का GSTIN, क्रमवार बिल नंबर व तारीख, वस्तु का HSN कोड, टैक्स से पहले की कीमत, और सही टैक्स विभाजन। यदि खरीदार उसी राज्य में है तो 18% GST को 9% CGST और 9% SGST में बाँटें; दूसरे राज्य में बेचने पर पूरा 18% IGST लगाएँ।",
          kn: "ಸರಿಯಾದ GST ಇನ್ವಾಯ್ಸ್ ಮಾರಾಟಗಾರ ಮತ್ತು ಖರೀದಿದಾರರಿಬ್ಬರಿಗೂ ಇನ್‌ಪುಟ್ ಟ್ಯಾಕ್ಸ್ ಕ್ರೆಡಿಟ್ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಬಿಲ್ ನೀಡುವ ಮೊದಲು GSTIN, ಸರಣಿ ಬಿಲ್ ಸಂಖ್ಯೆ, HSN ಕೋಡ್, ತೆರಿಗೆ ಪೂರ್ವ ಮೌಲ್ಯ ಮತ್ತು ಸರಿಯಾದ ತೆರಿಗೆ ವಿಭಜನೆ ಪರಿಶೀಲಿಸಿ. ಒಂದೇ ರಾಜ್ಯದೊಳಗಿನ ಮಾರಾಟಕ್ಕೆ 18% GST ಯನ್ನು 9% CGST + 9% SGST ಆಗಿ, ಬೇರೆ ರಾಜ್ಯಕ್ಕೆ 18% IGST ಆಗಿ ಹಾಕಿ.",
        },
        taskPrompt: {
          en: "A distributor in Hubballi (Karnataka) sells ₹10,000 worth of electrical switches (18% GST) to a shop in Mysuru (Karnataka). Provide these 3 items: (1) the CGST, SGST, and IGST split, (2) the final invoice total, and (3) 3 mandatory details that must appear on the bill.",
          hi: "हुब्बल्ली (कर्नाटक) का एक वितरक मैसूर (कर्नाटक) की दुकान को ₹10,000 के स्विच (18% GST) बेचता है। ये 3 उत्तर लिखें: (1) CGST, SGST और IGST विभाजन, (2) कुल बिल राशि, और (3) बिल की 3 अनिवार्य जानकारियाँ।",
          kn: "ಹುಬ್ಬಳ್ಳಿಯ (ಕರ್ನಾಟಕ) ವಿತರಕರು ಮೈಸೂರಿನ (ಕರ್ನಾಟಕ) ಅಂಗಡಿಗೆ ₹10,000 ಮೌಲ್ಯದ ಸ್ವಿಚ್‌ಗಳನ್ನು (18% GST) ಮಾರುತ್ತಾರೆ. ಈ 3 ವಿವರಗಳನ್ನು ಬರೆಯಿರಿ: (1) CGST, SGST ಮತ್ತು IGST ವಿಭಜನೆ, (2) ಒಟ್ಟು ಬಿಲ್ ಮೊತ್ತ, ಮತ್ತು (3) ಬಿಲ್‌ನಲ್ಲಿರಬೇಕಾದ 3 ಕಡ್ಡಾಯ ವಿವರಗಳು.",
        },
        rubric: {
          en: [
            "Computes CGST = ₹900 (9%) and SGST = ₹900 (9%), IGST = ₹0 because both are in Karnataka",
            "Calculates the correct final invoice total of ₹11,800",
            "Lists at least 3 mandatory fields such as GSTIN, invoice number/date, HSN code, or buyer details",
          ],
          hi: [
            "समान राज्य होने से CGST = ₹900, SGST = ₹900 और IGST = ₹0 सही निकाला हो",
            "कुल बिल राशि ₹11,800 सही जोड़ी हो",
            "GSTIN, बिल नंबर/तारीख, HSN कोड आदि 3 अनिवार्य विवरण लिखे हों",
          ],
          kn: [
            "ಒಂದೇ ರಾಜ್ಯವಾದ್ದರಿಂದ CGST = ₹900, SGST = ₹900 ಮತ್ತು IGST = ₹0 ಎಂದು ಸರಿಯಾಗಿ ಲೆಕ್ಕಹಾಕಿರುವುದು",
            "ಒಟ್ಟು ಇನ್ವಾಯ್ಸ್ ಮೊತ್ತ ₹11,800 ಸರಿಯಾಗಿರುವುದು",
            "GSTIN, ಬಿಲ್ ಸಂಖ್ಯೆ/ದಿನಾಂಕ, HSN ಕೋಡ್ ನಂತಹ 3 ಕಡ್ಡಾಯ ವಿವರಗಳನ್ನು ಬರೆದಿರುವುದು",
          ],
        },
        keywords: ["gst invoice", "cgst", "sgst", "gstin"],
      },
      {
        id: "tally-ledger",
        week: 1,
        days: "Days 5–7",
        title: {
          en: "Tally Ledger Entry & Vouchers",
          hi: "टैली लेजर एंट्री और वाउचर",
          kn: "ಟ್ಯಾಲಿ ಲೆಡ್ಜರ್ ಎಂಟ್ರಿ ಮತ್ತು ವೋಚರ್",
        },
        summary: {
          en: "Choose the right Tally voucher type and map party, purchase, sales, and bank ledgers cleanly.",
          hi: "सही टैली वाउचर चुनना और पार्टी, खरीद, बिक्री तथा बैंक लेजर को सही ग्रुप में रखना।",
          kn: "ಸರಿಯಾದ ಟ್ಯಾಲಿ ವೋಚರ್ ಆಯ್ಕೆ ಮಾಡುವುದು ಮತ್ತು ಪಾರ್ಟಿ, ಖರೀದಿ, ಮಾರಾಟ ಲೆಡ್ಜರ್‌ಗಳನ್ನು ಜೋಡಿಸುವುದು.",
        },
        lesson: {
          en: "Clean books in Tally depend on picking the right voucher and ledger group every time. Use Sales (F8) for customer bills, Purchase (F9) for supplier bills, Receipt (F6) when money comes into cash or bank, Payment (F5) when paying suppliers or expenses, and Contra (F4) only when moving money between your own cash drawer and bank account. Place customers under Sundry Debtors, suppliers under Sundry Creditors, and office rent or electricity under Indirect Expenses so profit and loss reports remain accurate.",
          hi: "टैली में सही हिसाब रखने के लिए सही वाउचर और लेजर ग्रुप चुनना जरूरी है। ग्राहक बिल के लिए Sales (F8), सप्लायर बिल के लिए Purchase (F9), पैसा मिलने पर Receipt (F6), भुगतान पर Payment (F5), और नकद व बैंक के बीच ट्रांसफर के लिए Contra (F4) वाउचर चुनें। ग्राहकों को Sundry Debtors और सप्लायरों को Sundry Creditors ग्रुप में रखें।",
          kn: "ಟ್ಯಾಲಿಯಲ್ಲಿ ಶುದ್ಧ ಲೆಕ್ಕಪತ್ರಕ್ಕಾಗಿ ಸರಿಯಾದ ವೋಚರ್ ಮತ್ತು ಲೆಡ್ಜರ್ ಗುಂಪನ್ನು ಆರಿಸಬೇಕು. ಗ್ರಾಹಕ ಬಿಲ್‌ಗಳಿಗೆ Sales (F8), ಪೂರೈಕೆದಾರ ಬಿಲ್‌ಗಳಿಗೆ Purchase (F9), ಹಣ ಬಂದಾಗ Receipt (F6), ಪಾವತಿಗೆ Payment (F5), ಮತ್ತು ನಗದು-ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಗೆ Contra (F4) ಬಳಸಿ. ಗ್ರಾಹಕರನ್ನು Sundry Debtors ಮತ್ತು ಪೂರೈಕೆದಾರರನ್ನು Sundry Creditors ಅಡಿಯಲ್ಲಿ ಇಡಿ.",
        },
        taskPrompt: {
          en: "Record these 3 daily shop transactions by naming the exact Tally voucher type and the ledger group for the party/account: (1) Deposited ₹15,000 cash into the shop's SBI bank account, (2) Paid ₹4,000 shop rent by UPI, (3) Received ₹8,500 from customer Ganesh Traders.",
          hi: "इन 3 लेन-देन के लिए सही टैली वाउचर और लेजर ग्रुप बताएं: (1) दुकान के SBI बैंक खाते में ₹15,000 नकद जमा किए, (2) UPI से ₹4,000 किराया दिया, (3) ग्राहक गणेश ट्रेडर्स से ₹8,500 मिले।",
          kn: "ಈ 3 ವ್ಯವಹಾರಗಳಿಗೆ ಸರಿಯಾದ ಟ್ಯಾಲಿ ವೋಚರ್ ಮತ್ತು ಲೆಡ್ಜರ್ ಗುಂಪನ್ನು ತಿಳಿಸಿ: (1) SBI ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ₹15,000 ನಗದು ಜಮಾ, (2) UPI ಮೂಲಕ ₹4,000 ಬಾಡಿಗೆ ಪಾವತಿ, (3) ಗ್ರಾಹಕ ಗಣೇಶ್ ಟ್ರೇಡರ್ಸ್‌ರಿಂದ ₹8,500 ಸ್ವೀಕೃತಿ.",
        },
        rubric: {
          en: [
            "Identifies Contra (F4) for cash deposit into own SBI bank account",
            "Identifies Payment (F5) and Indirect Expenses for shop rent",
            "Identifies Receipt (F6) and Sundry Debtors for Ganesh Traders",
          ],
          hi: [
            "नकद बैंक में जमा करने के लिए Contra (F4) सही बताया हो",
            "किराए के लिए Payment (F5) और Indirect Expenses सही चुना हो",
            "ग्राहक से प्राप्ति के लिए Receipt (F6) और Sundry Debtors बताया हो",
          ],
          kn: [
            "ಬ್ಯಾಂಕ್ ನಗದು ಜಮಾ ಮಾಡಲು Contra (F4) ಸರಿಯಾಗಿ ಗುರುತಿಸಿರುವುದು",
            "ಅಂಗಡಿ ಬಾಡಿಗೆಗೆ Payment (F5) ಮತ್ತು Indirect Expenses ಗುರುತಿಸಿರುವುದು",
            "ಗ್ರಾಹಕರಿಂದ ಹಣ ಸ್ವೀಕೃತಿಗೆ Receipt (F6) ಮತ್ತು Sundry Debtors ಗುರುತಿಸಿರುವುದು",
          ],
        },
        keywords: ["tally ledger", "voucher", "bookkeeping", "accounting"],
      },
      {
        id: "bank-recon",
        week: 2,
        days: "Days 8–14",
        title: {
          en: "Bank Reconciliation Basics",
          hi: "बैंक रिकंसिलिएशन के मूल सिद्धांत",
          kn: "ಬ್ಯಾಂಕ್ ಹೊಂದಾಣಿಕೆ ಮೂಲಭೂತಗಳು",
        },
        summary: {
          en: "Spot unrecorded UPI charges, uncleared cheques, and missing entries between Tally and the bank statement.",
          hi: "टैली और बैंक स्टेटमेंट के बीच अनदेखे UPI चार्ज, अनक्लियर चेक और छूटी एंट्री पकड़ना।",
          kn: "ಟ್ಯಾಲಿ ಮತ್ತು ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ ನಡುವಿನ ವ್ಯತ್ಯಾಸಗಳು ಮತ್ತು ಬಾಕಿ ಚೆಕ್‌ಗಳನ್ನು ಗುರುತಿಸುವುದು.",
        },
        lesson: {
          en: "At the end of every week, compare your Tally Bank Book against the actual bank statement line by line. Differences usually come from three sources: cheques issued to suppliers that have not yet cleared the bank, small bank SMS or NEFT charges not yet entered in Tally, or a customer's UPI payment that arrived in the bank without a Receipt voucher recorded. Enter the missing bank charges and customer receipts in Tally, mark cleared dates on cheques, and confirm the reconciled balance matches the bank statement.",
          hi: "हर सप्ताह के अंत में अपने टैली बैंक बुक का मिलान असली बैंक स्टेटमेंट से लाइन-दर-लाइन करें। अंतर अक्सर तीन कारणों से होता है: सप्लायर को दिया चेक अभी क्लियर न हुआ हो, बैंक का छोटा SMS/NEFT चार्ज टैली में दर्ज न हुआ हो, या ग्राहक का UPI भुगतान बैंक में आया हो पर रसीद वाउचर न बना हो। छूटी एंट्री दर्ज करके दोनों बैलेंस बराबर करें।",
          kn: "ಪ್ರತಿ ವಾರದ ಕೊನೆಯಲ್ಲಿ ನಿಮ್ಮ ಟ್ಯಾಲಿ ಬ್ಯಾಂಕ್ ಬುಕ್ ಅನ್ನು ನಿಜವಾದ ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ನೊಂದಿಗೆ ಹೋಲಿಸಿ. ವ್ಯತ್ಯಾಸಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಮೂರು ಕಾರಣಗಳಿಂದ ಬರುತ್ತವೆ: ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಇನ್ನೂ ಕ್ಲಿಯರ್ ಆಗದ ಚೆಕ್‌ಗಳು, ಟ್ಯಾಲಿಯಲ್ಲಿ ದಾಖಲಾಗದ ಬ್ಯಾಂಕ್ SMS/NEFT ಶುಲ್ಕಗಳು, ಅಥವಾ ರಸೀದಿ ಹಾಕದ ಗ್ರಾಹಕರ UPI ಪಾವತಿ. ಬಿಟ್ಟುಹೋದ ಎಂಟ್ರಿಗಳನ್ನು ದಾಖಲಿಸಿ ಬ್ಯಾಲೆನ್ಸ್ ಸರಿಹೊಂದಿಸಿ.",
        },
        taskPrompt: {
          en: "Your Tally bank balance shows ₹52,000, while the bank statement shows ₹54,750. You discover a ₹3,000 supplier cheque hasn't cleared yet and a ₹250 bank fee was deducted. Explain the 3 reconciliation steps: (1) recording the ₹250 fee in Tally, (2) adjusting for the ₹3,000 uncleared cheque, and (3) confirming the adjusted balance matches ₹54,750.",
          hi: "आपकी टैली में बैंक बैलेंस ₹52,000 है, जबकि बैंक स्टेटमेंट में ₹54,750 है। ₹3,000 का चेक अभी क्लियर नहीं हुआ है और ₹250 बैंक शुल्क कटा है। मिलान के 3 चरण बताएं: (1) टैली में ₹250 शुल्क दर्ज करना, (2) ₹3,000 अनक्लियर चेक का समायोजन, और (3) ₹54,750 से अंतिम मिलान दिखाना।",
          kn: "ನಿಮ್ಮ ಟ್ಯಾಲಿ ಬ್ಯಾಂಕ್ ಬ್ಯಾಲೆನ್ಸ್ ₹52,000 ಮತ್ತು ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ ₹54,750 ತೋರಿಸುತ್ತದೆ. ₹3,000 ಚೆಕ್ ಕ್ಲಿಯರ್ ಆಗಿಲ್ಲ ಮತ್ತು ₹250 ಬ್ಯಾಂಕ್ ಶುಲ್ಕ ಕಡಿತವಾಗಿದೆ. ಹೊಂದಾಣಿಕೆಯ 3 ಹಂತಗಳನ್ನು ವಿವರಿಸಿ: (1) ₹250 ಶುಲ್ಕ ದಾಖಲಿಸುವುದು, (2) ₹3,000 ಚೆಕ್ ಸರಿಹೊಂದಿಸುವುದು, ಮತ್ತು (3) ₹54,750 ಬ್ಯಾಲೆನ್ಸ್ ಹೊಂದಾಣಿಕೆ ತೋರಿಸುವುದು.",
        },
        rubric: {
          en: [
            "Records the ₹250 bank fee in Tally as a Payment entry (reducing Tally balance to ₹51,750)",
            "Accounts for the ₹3,000 uncleared cheque as a timing difference (₹51,750 + ₹3,000 = ₹54,750)",
            "Shows that adjusted Tally balance matches the ₹54,750 bank statement",
          ],
          hi: [
            "₹250 बैंक शुल्क को टैली में Payment एंट्री के रूप में दर्ज करना (बैलेंस ₹51,750)",
            "₹3,000 के अनक्लियर चेक को समय-अंतर के रूप में जोड़ना (₹51,750 + ₹3,000 = ₹54,750)",
            "मिलान के बाद बैंक स्टेटमेंट ₹54,750 से सही मेल दिखाना",
          ],
          kn: [
            "₹250 ಬ್ಯಾಂಕ್ ಶುಲ್ಕವನ್ನು ಟ್ಯಾಲಿಯಲ್ಲಿ Payment ಎಂಟ್ರಿಯಾಗಿ ದಾಖಲಿಸುವುದು (₹51,750)",
            "₹3,000 ಕ್ಲಿಯರ್ ಆಗದ ಚೆಕ್ ಅನ್ನು ವ್ಯತ್ಯಾಸವಾಗಿ ಸೇರಿಸುವುದು (₹51,750 + ₹3,000 = ₹54,750)",
            "ಹೊಂದಾಣಿಕೆಯ ನಂತರ ₹54,750 ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗೆ ಸರಿಯಾಗಿ ಹೊಂದಿಕೊಳ್ಳುವುದನ್ನು ತೋರಿಸಿರುವುದು",
          ],
        },
        keywords: ["bank reconciliation", "spreadsheet", "reporting", "tally"],
      },
    ],
  },
  {
    matchTerms: ["retail", "pos", "upi", "store", "रिटेल", "ರಿಟೇಲ್"],
    goalSummary: {
      en: "Retail Store & UPI POS Associate — Billing, Stock & Customer Service",
      hi: "रिटेल स्टोर और UPI POS एसोसिएट — बिलिंग, स्टॉक और ग्राहक सेवा",
      kn: "ರಿಟೇಲ್ ಸ್ಟೋರ್ ಮತ್ತು UPI POS ಅಸೋಸಿಯೇಟ್ — ಬಿಲ್ಲಿಂಗ್, ಸ್ಟಾಕ್ ಮತ್ತು ಗ್ರಾಹಕ ಸೇವೆ",
    },
    twoWeekOverview: {
      en: "In 2 weeks you will master fast UPI & POS billing, friendly customer greeting and add-on suggestions, and shelf expiry & stock checks.",
      hi: "2 सप्ताह में आप तेज UPI और POS बिलिंग, विनम्र ग्राहक सेवा और शेल्फ स्टॉक व एक्सपायरी जाँच सीखेंगे।",
      kn: "2 ವಾರಗಳಲ್ಲಿ ನೀವು ವೇಗದ UPI ಮತ್ತು POS ಬಿಲ್ಲಿಂಗ್, ಗ್ರಾಹಕ ಸೇವೆ ಮತ್ತು ಶೆಲ್ಫ್ ಸ್ಟಾಕ್ ಪರಿಶೀಲನೆ ಕಲಿಯುವಿರಿ.",
    },
    skills: [
      {
        id: "upi-pos",
        week: 1,
        days: "Days 1–4",
        title: {
          en: "UPI & POS Billing",
          hi: "UPI और POS बिलिंग",
          kn: "UPI ಮತ್ತು POS ಬಿಲ್ಲಿಂಗ್",
        },
        summary: {
          en: "Scan items accurately, verify UPI soundbox/merchant confirmation, and handle failed or pending transactions calmly.",
          hi: "सामान सही स्कैन करना, UPI साउंडबॉक्स/पेमेंट कन्फर्मेशन जांचना और पेंडिंग पेमेंट को संभालना।",
          kn: "ವಸ್ತುಗಳನ್ನು ನಿಖರವಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದು, UPI ಸೌಂಡ್‌ಬಾಕ್ಸ್ ದೃಢೀಕರಣ ಪರಿಶೀಲಿಸುವುದು ಮತ್ತು ಪೆಂಡಿಂಗ್ ಪಾವತಿ ನಿರ್ವಹಿಸುವುದು.",
        },
        lesson: {
          en: "Fast, error-free checkout keeps queues short and builds customer trust. Always scan every item barcode individually rather than multiplying damaged packs by guess, read out the final bill total clearly, and wait for your store's UPI soundbox or POS screen to show 'Payment Received'—never rely only on a screenshot on the customer's phone. If a UPI payment shows 'Pending', stay polite, ask the customer to wait 60 seconds, note the transaction reference ID, and offer cash or a fresh QR scan only after confirming whether the first payment settled.",
          hi: "तेज और सही बिलिंग से लाइन छोटी रहती है और ग्राहक का भरोसा बढ़ता है। हर आइटम को अलग से स्कैन करें, कुल राशि साफ बोलकर बताएं, और ग्राहक के फोन के स्क्रीनशॉट के बजाय हमेशा स्टोर के UPI साउंडबॉक्स या POS स्क्रीन पर 'Payment Received' सुनें/देखें। यदि पेमेंट 'Pending' दिखे तो विनम्र रहें, 60 सेकंड प्रतीक्षा करें और ट्रांजेक्शन ID नोट करें।",
          kn: "ವೇಗದ ಮತ್ತು ನಿಖರ ಬಿಲ್ಲಿಂಗ್ ಗ್ರಾಹಕರ ನಂಬಿಕೆ ಹೆಚ್ಚಿಸುತ್ತದೆ. ಪ್ರತಿ ವಸ್ತುವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ, ಒಟ್ಟು ಮೊತ್ತವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳಿ, ಮತ್ತು ಗ್ರಾಹಕರ ಫೋನ್ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಬದಲಿಗೆ ಸ್ಟೋರ್‌ನ UPI ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ POS ಪರದೆಯಲ್ಲಿ 'Payment Received' ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ಪಾವತಿ 'Pending' ತೋರಿಸಿದರೆ ವಿನಯದಿಂದ 60 ಸೆಕೆಂಡ್ ಕಾಯಿರಿ.",
        },
        taskPrompt: {
          en: "During evening rush hour, a customer shows a phone screen saying 'UPI Processing' for ₹640, and the store soundbox has not announced payment. List the exact 3 steps you will take: (1) verifying via store POS/soundbox, (2) waiting politely and noting the transaction reference ID, and (3) resolving payment safely without double charge or loss.",
          hi: "शाम की भीड़ में एक ग्राहक ₹640 का 'UPI Processing' स्क्रीन दिखाता है और स्टोर के साउंडबॉक्स से आवाज नहीं आई। 3 सटीक कदम बताएं: (1) स्टोर POS/साउंडबॉक्स जांचना, (2) विनम्रता से प्रतीक्षा कर UPI रेफरेंस ID नोट करना, और (3) बिना डबल पेमेंट या नुकसान के सुरक्षित समाधान करना।",
          kn: "ಸಂಜೆ ಜನದಟ್ಟಣೆಯಲ್ಲಿ ಗ್ರಾಹಕರೊಬ್ಬರು ₹640 'UPI Processing' ಸ್ಕ್ರೀನ್ ತೋರಿಸುತ್ತಾರೆ, ಆದರೆ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಶಬ್ದ ಬಂದಿಲ್ಲ. 3 ನಿಖರ ಹಂತಗಳನ್ನು ಬರೆಯಿರಿ: (1) ಸ್ಟೋರ್ POS/ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಪರಿಶೀಲಿಸುವುದು, (2) ವಿನಯದಿಂದ ಕಾಯ್ದು UPI ರೆಫರೆನ್ಸ್ ID ದಾಖಲಿಸುವುದು, ಮತ್ತು (3) ದ್ವಿಗುಣ ಪಾವತಿ ಇಲ್ಲದೆ ಸುರಕ್ಷಿತವಾಗಿ ಪರಿಹರಿಸುವುದು.",
        },
        rubric: {
          en: [
            "Checks the store merchant app/POS/soundbox instead of trusting only the customer's phone screen",
            "Explains waiting briefly and noting the UPI transaction reference ID politely",
            "Explains safe resolution (confirm settlement or take alternate payment with clear refund assurance if debited)",
          ],
          hi: [
            "सिर्फ ग्राहक के फोन के बजाय स्टोर के मर्चेंट ऐप/POS/साउंडबॉक्स की जाँच करना",
            "विनम्रता से थोड़ी प्रतीक्षा करना और UPI रेफरेंस ID नोट करना",
            "सुरक्षित समाधान (पेमेंट सेटलमेंट या वैकल्पिक भुगतान व रिफंड आश्वासन) बताना",
          ],
          kn: [
            "ಗ್ರಾಹಕರ ಫೋನ್ ಬದಲು ಸ್ಟೋರ್ ಮರ್ಚೆಂಟ್ ಆ್ಯಪ್/POS/ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಪರಿಶೀಲಿಸುವುದು",
            "ವಿನಯದಿಂದ ಸ್ವಲ್ಪ ಸಮಯ ಕಾಯುವುದು ಮತ್ತು UPI ರೆಫರೆನ್ಸ್ ID ದಾಖಲಿಸುವುದು",
            "ಸುರಕ್ಷಿತ ಪರಿಹಾರ (ಪಾವತಿ ಖಚಿತತೆ ಅಥವಾ ಪರ್ಯಾಯ ಪಾವತಿ ಮತ್ತು ಮರುಪಾವತಿ ಭರವಸೆ) ವಿವರಿಸುವುದು",
          ],
        },
        keywords: ["upi", "pos billing", "cash", "retail"],
      },
      {
        id: "retail-greeting",
        week: 1,
        days: "Days 5–7",
        title: {
          en: "Customer Greeting & Helpful Suggestions",
          hi: "ग्राहक स्वागत और मददगार सुझाव",
          kn: "ಗ್ರಾಹಕ ಸ್ವಾಗತ ಮತ್ತು ಸಹಾಯಕ ಸಲಹೆ",
        },
        summary: {
          en: "Welcome shoppers warmly, locate products quickly, and suggest genuinely useful add-ons.",
          hi: "ग्राहकों का गर्मजोशी से स्वागत करना, सामान जल्दी ढूँढना और उपयोगी कॉम्बो सुझाना।",
          kn: "ಗ್ರಾಹಕರನ್ನು ಆತ್ಮೀಯವಾಗಿ ಸ್ವಾಗತಿಸುವುದು, ವಸ್ತುಗಳನ್ನು ಬೇಗ ಹುಡುಕಿಕೊಡುವುದು ಮತ್ತು ಉಪಯುಕ್ತ ವಸ್ತುಗಳನ್ನು ಸೂಚಿಸುವುದು.",
        },
        lesson: {
          en: "Great retail service feels helpful, never pushy. Greet every customer within 10 seconds with a smile and eye contact, listen carefully to what they need, and walk them to the aisle instead of just pointing. When suggesting an extra item, connect it naturally to what they are already buying—for instance, mentioning a discounted refill pack or a matching item they might otherwise forget—and respect their decision immediately if they decline.",
          hi: "अच्छी ग्राहक सेवा दबाव डालने के बजाय मददगार महसूस होती है। हर ग्राहक का 10 सेकंड के भीतर मुस्कुराकर स्वागत करें, उनकी जरूरत ध्यान से सुनें, और केवल इशारा करने के बजाय उन्हें शेल्फ तक लेकर जाएं। कोई अतिरिक्त सामान सुझाते समय उनकी खरीदारी से जुड़ा उपयोगी विकल्प बताएं और न चाहने पर मुस्कुराकर आगे बढ़ें।",
          kn: "ಉತ್ತಮ ಗ್ರಾಹಕ ಸೇವೆ ಒತ್ತಾಯವಿಲ್ಲದೆ ಸಹಾಯಕವಾಗಿರಬೇಕು. ಪ್ರತಿ ಗ್ರಾಹಕರನ್ನು 10 ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ ನಗುವಿನಿಂದ ಸ್ವಾಗತಿಸಿ, ಅವರ ಅಗತ್ಯವನ್ನು ಗಮನವಿಟ್ಟು ಕೇಳಿ ಮತ್ತು ಶೆಲ್ಫ್‌ಗೆ ಕರೆದೊಯ್ದು ತೋರಿಸಿ. ಹೆಚ್ಚುವರಿ ವಸ್ತುವನ್ನು ಸೂಚಿಸುವಾಗ ಅವರು ಕೊಳ್ಳುತ್ತಿರುವ ವಸ್ತುವಿಗೆ ಉಪಯುಕ್ತವಾದುದನ್ನು ಮಾತ್ರ ತಿಳಿಸಿ.",
        },
        taskPrompt: {
          en: "A customer enters looking stressed because they need snacks and paper plates for a small family gathering in 30 minutes. Write the 3 steps you will say and do: (1) greet them warmly, (2) guide them to the snacks and paper plates, and (3) suggest one helpful add-on.",
          hi: "एक ग्राहक जल्दी में है क्योंकि उसे 30 मिनट में घर के छोटे कार्यक्रम के लिए स्नैक्स और पेपर प्लेट चाहिए। 3 कदम लिखें: (1) गर्मजोशी से स्वागत करना, (2) सामान तक मार्गदर्शन करना, और (3) एक उपयोगी अतिरिक्त विकल्प सुझाना।",
          kn: "30 ನಿಮಿಷಗಳಲ್ಲಿ ನಡೆಯಲಿರುವ ಕುಟುಂಬ ಕಾರ್ಯಕ್ರಮಕ್ಕಾಗಿ ಸ್ನ್ಯಾಕ್ಸ್ ಮತ್ತು ಪೇಪರ್ ಪ್ಲೇಟ್‌ಗಳನ್ನು ಹುಡುಕುತ್ತಾ ಗ್ರಾಹಕರು ಒತ್ತಡದಲ್ಲಿ ಬರುತ್ತಾರೆ. ನೀವು ಮಾಡುವ 3 ಹಂತಗಳನ್ನು ಬರೆಯಿರಿ: (1) ಆತ್ಮೀಯ ಸ್ವಾಗತ, (2) ವಸ್ತುಗಳ ಬಳಿ ಮಾರ್ಗದರ್ಶನ, ಮತ್ತು (3) ಒಂದು ಉಪಯುಕ್ತ ಹೆಚ್ಚುವರಿ ಸಲಹೆ.",
        },
        rubric: {
          en: [
            "Includes a warm, prompt greeting acknowledging their time urgency",
            "Guides them clearly/quickly to snacks and paper plates",
            "Offers one relevant, non-pushy add-on (such as napkins, cups, or cold drinks)",
          ],
          hi: [
            "ग्राहक की जल्दी को समझते हुए गर्मजोशी से स्वागत किया हो",
            "स्नैक्स और पेपर प्लेट तक तुरंत ले जाने/मार्गदर्शन का जिक्र हो",
            "एक उपयोगी, बिना दबाव वाला सुझाव (जैसे नैपकिन, कप या कोल्ड ड्रिंक) दिया हो",
          ],
          kn: [
            "ಅವರ ಸಮಯದ ಒತ್ತಡವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಆತ್ಮೀಯವಾಗಿ ಸ್ವಾಗತಿಸಿರುವುದು",
            "ಸ್ನ್ಯಾಕ್ಸ್ ಮತ್ತು ಪೇಪರ್ ಪ್ಲೇಟ್‌ಗಳಿಗೆ ವೇಗವಾಗಿ ಮಾರ್ಗದರ್ಶನ ನೀಡಿರುವುದು",
            "ಒತ್ತಾಯವಿಲ್ಲದೆ ಒಂದು ಉಪಯುಕ್ತ ಸಲಹೆ (ನ್ಯಾಪ್‌ಕಿನ್, ಕಪ್ ಅಥವಾ ಪಾನೀಯ) ನೀಡಿರುವುದು",
          ],
        },
        keywords: ["customer greeting", "upselling", "friendly customer service"],
      },
      {
        id: "shelf-expiry",
        week: 2,
        days: "Days 8–14",
        title: {
          en: "Shelf Stock & Expiry Check",
          hi: "शेल्फ स्टॉक और एक्सपायरी जाँच",
          kn: "ಶೆಲ್ಫ್ ಸ್ಟಾಕ್ ಮತ್ತು ಎಕ್ಸ್‌ಪೈರಿ ಪರಿಶೀಲನೆ",
        },
        summary: {
          en: "Apply FEFO (First Expired, First Out) rotation and keep shelves clean, priced, and safe.",
          hi: "FEFO नियम से स्टॉक लगाना और शेल्फ को साफ, सही कीमत और सुरक्षित रखना।",
          kn: "FEFO ನಿಯಮದಂತೆ ಸ್ಟಾಕ್ ಜೋಡಿಸುವುದು ಮತ್ತು ಶೆಲ್ಫ್‌ಗಳನ್ನು ಸ್ವಚ್ಛವಾಗಿಡುವುದು.",
        },
        lesson: {
          en: "Selling an expired or damaged packet can hurt a customer and damage the store's reputation. During your morning aisle check, follow the FEFO rule—First Expired, First Out—by placing newer stock behind older packs whose expiry date is closer. Pull any dented tins, torn pouches, or items within 7 days of expiry into the markdown or return bin, wipe dusty shelves, and make sure every shelf price tag matches the POS billing rate.",
          hi: "एक्सपायर या खराब सामान बिकने से ग्राहक को नुकसान और स्टोर की बदनामी होती है। सुबह शेल्फ जाँचते समय FEFO नियम अपनाएं—जिन पैकेट की एक्सपायरी पास है उन्हें आगे रखें और नया स्टॉक पीछे। टूटे-फूटे पैकेट या 7 दिन में एक्सपायर होने वाले सामान को अलग हटाएं, धूल पोंछें और शेल्फ प्राइस टैग को POS रेट से मिलाएं।",
          kn: "ಅವಧಿ ಮೀರಿದ ವಸ್ತುಗಳನ್ನು ಮಾರಾಟ ಮಾಡುವುದರಿಂದ ಗ್ರಾಹಕರಿಗೆ ತೊಂದರೆಯಾಗುತ್ತದೆ. ಬೆಳಗಿನ ಶೆಲ್ಫ್ ತಪಾಸಣೆಯಲ್ಲಿ FEFO ನಿಯಮ ಪಾಲಿಸಿ—ಬೇಗ ಅವಧಿ ಮುಗಿಯುವ ವಸ್ತುಗಳನ್ನು ಮುಂದೆ ಇಡಿ ಮತ್ತು ಹೊಸ ಸ್ಟಾಕ್ ಅನ್ನು ಹಿಂದೆ ಇಡಿ. ಹಾನಿಗೊಳಗಾದ ಪ್ಯಾಕೆಟ್‌ಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಬೆಲೆ ಟ್ಯಾಗ್‌ಗಳು POS ದರಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.",
        },
        taskPrompt: {
          en: "While restocking milk packets and biscuit boxes, you find 4 biscuit packs expiring in 5 days and a shelf tag showing ₹35 while the POS scans ₹40. What 3 actions will you take?",
          hi: "स्टॉक लगाते समय आपको 4 बिस्कुट पैकेट मिलते हैं जो 5 दिन में एक्सपायर होने वाले हैं, और शेल्फ टैग पर ₹35 लिखा है जबकि POS में ₹40 दिखता है। आप कौन-से 3 कदम उठाएँगे?",
          kn: "ಸ್ಟಾಕ್ ಜೋಡಿಸುವಾಗ 5 ದಿನಗಳಲ್ಲಿ ಅವಧಿ ಮುಗಿಯುವ 4 ಬಿಸ್ಕತ್ತು ಪ್ಯಾಕೆಟ್‌ಗಳು ಕಾಣಿಸುತ್ತವೆ ಮತ್ತು ಶೆಲ್ಫ್ ಟ್ಯಾಗ್ ₹35 ಇದ್ದರೆ POS ನಲ್ಲಿ ₹40 ಬರುತ್ತದೆ. ನೀವು ತೆಗೆದುಕೊಳ್ಳುವ 3 ಕ್ರಮಗಳು ಯಾವುವು?",
        },
        rubric: {
          en: [
            "Separates or flags the 4 near-expiry biscuit packs per store markdown/return policy",
            "Applies FEFO rotation so older valid stock stays in front of newer stock",
            "Fixes or escalates the ₹35 vs ₹40 price tag mismatch before customers are overcharged",
          ],
          hi: [
            "5 दिन में एक्सपायर होने वाले पैकेट को अलग/रिपोर्ट करना",
            "FEFO नियम से बाकी वैध स्टॉक को सही क्रम में लगाना",
            "₹35 और ₹40 के प्राइस टैग अंतर को तुरंत ठीक करना/सूचित करना",
          ],
          kn: [
            "5 ದಿನಗಳಲ್ಲಿ ಅವಧಿ ಮುಗಿಯುವ ಪ್ಯಾಕೆಟ್‌ಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸುವುದು ಅಥವಾ ವರದಿ ಮಾಡುವುದು",
            "FEFO ನಿಯಮದಂತೆ ಉಳಿದ ಸ್ಟಾಕ್ ಜೋಡಿಸುವುದು",
            "₹35 ಮತ್ತು ₹40 ಬೆಲೆ ವ್ಯತ್ಯಾಸವನ್ನು ತಕ್ಷಣ ಸರಿಪಡಿಸುವುದು",
          ],
        },
        keywords: ["shelf stock", "expiry check", "stock count"],
      },
    ],
  },
  {
    matchTerms: ["ev", "two-wheeler", "electric vehicle", "scooter", "mechanic", "ईवी", "ಇವಿ"],
    goalSummary: {
      en: "EV Two-Wheeler Service Trainee — Battery Safety, Diagnostics & Job Cards",
      hi: "EV टू-व्हीलर सर्विस ट्रेनी — बैटरी सुरक्षा, जांच और जॉब कार्ड",
      kn: "EV ದ್ವಿಚಕ್ರ ವಾಹನ ಸೇವಾ ತರಬೇತುದಾರ — ಬ್ಯಾಟರಿ ಸುರಕ್ಷತೆ, ತಪಾಸಣೆ ಮತ್ತು ಜಾಬ್ ಕಾರ್ಡ್",
    },
    twoWeekOverview: {
      en: "In 2 weeks you will learn high-voltage EV safety, battery pack and brake/tyre inspection, and structured service job card logging.",
      hi: "2 सप्ताह में आप हाई-वोल्टेज EV सुरक्षा, बैटरी व ब्रेक-टायर जाँच और जॉब कार्ड लॉगिंग सीखेंगे।",
      kn: "2 ವಾರಗಳಲ್ಲಿ ನೀವು ಹೈ-ವೋಲ್ಟೇಜ್ EV ಸುರಕ್ಷತೆ, ಬ್ಯಾಟರಿ ಮತ್ತು ಬ್ರೇಕ್ ತಪಾಸಣೆ ಹಾಗೂ ಜಾಬ್ ಕಾರ್ಡ್ ನಮೂದಿಸುವುದನ್ನು ಕಲಿಯುವಿರಿ.",
    },
    skills: [
      {
        id: "ev-hv-safety",
        week: 1,
        days: "Days 1–4",
        title: {
          en: "High-Voltage Safety & Battery Pack Inspection",
          hi: "हाई-वोल्टेज सुरक्षा और बैटरी पैक जाँच",
          kn: "ಹೈ-ವೋಲ್ಟೇಜ್ ಸುರಕ್ಷತೆ ಮತ್ತು ಬ್ಯಾಟರಿ ಪ್ಯಾಕ್ ತಪಾಸಣೆ",
        },
        summary: {
          en: "Isolate power safely, wear insulated gloves, and inspect orange HV cables and battery enclosures.",
          hi: "पावर आइसोलेट करना, इंसुलेटेड दस्ताने पहनना और नारंगी HV केबल व बैटरी केस की जाँच करना।",
          kn: "ವಿದ್ಯುತ್ ಐಸೋಲೇಟ್ ಮಾಡುವುದು, ಇನ್ಸುಲೇಟೆಡ್ ಕೈಗವಸು ಧರಿಸುವುದು ಮತ್ತು ಕಿತ್ತಳೆ HV ಕೇಬಲ್ ಪರಿಶೀಲಿಸುವುದು.",
        },
        lesson: {
          en: "Electric scooters operate between 48V and 72V DC and can deliver dangerous short-circuit currents if mishandled. Before opening any panel, switch off the scooter key, flip the main MCB/breaker to OFF, remove metal watches or rings, and put on Class-0 insulated gloves. Inspect bright orange high-voltage cables for cuts, burn marks, or loose terminals, and check the battery casing for swelling, water entry, or unusual sweet chemical smell—never puncture or wash a lithium battery pack with water.",
          hi: "इलेक्ट्रिक स्कूटर 48V से 72V DC पर चलते हैं और लापरवाही से खतरनाक शॉर्ट-सर्किट हो सकता है। कोई भी पैनल खोलने से पहले चाबी बंद करें, मुख्य MCB बंद करें, घड़ी-अंगूठी उतारें और इंसुलेटेड दस्ताने पहनें। नारंगी हाई-वोल्टेज केबल में कट या जलने के निशान जांचें, और बैटरी केस में सूजन या पानी जाने के संकेत देखें—लिथियम बैटरी पर कभी पानी न डालें।",
          kn: "ಎಲೆಕ್ಟ್ರಿಕ್ ಸ್ಕೂಟರ್‌ಗಳು 48V–72V DC ಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಯಾವುದೇ ಪ್ಯಾನೆಲ್ ತೆರೆಯುವ ಮೊದಲು ಕೀ ಆಫ್ ಮಾಡಿ, ಮುಖ್ಯ MCB ಆಫ್ ಮಾಡಿ, ಲೋಹದ ಉಂಗುರ/ವಾಚ್ ತೆಗೆಯಿರಿ ಮತ್ತು ಇನ್ಸುಲೇಟೆಡ್ ಕೈಗವಸು ಧರಿಸಿ. ಕಿತ್ತಳೆ ಬಣ್ಣದ ಹೈ-ವೋಲ್ಟೇಜ್ ಕೇಬಲ್‌ಗಳಲ್ಲಿ ಕಡಿತ ಅಥವಾ ಸುಟ್ಟ ಗುರುತುಗಳಿವೆಯೇ, ಬ್ಯಾಟರಿ ಕೇಸ್ ಉಬ್ಬಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.",
        },
        taskPrompt: {
          en: "A customer brings in an EV scooter after riding through deep monsoon water; the battery compartment smells unusual and a warning light is flashing. List the first 3 safety and inspection actions you will perform.",
          hi: "एक ग्राहक मानसून के गहरे पानी में चलाने के बाद EV स्कूटर लाता है; बैटरी हिस्से से अजीब गंध आ रही है और वार्निंग लाइट चमक रही है। आप पहले 3 सुरक्षा और जाँच कदम क्या उठाएँगे?",
          kn: "ಮಳೆಗಾಲದ ಆಳವಾದ ನೀರಿನಲ್ಲಿ ಓಡಿಸಿದ ನಂತರ ಗ್ರಾಹಕರು EV ಸ್ಕೂಟರ್ ತರುತ್ತಾರೆ; ಬ್ಯಾಟರಿ ಭಾಗದಿಂದ ವಿಚಿತ್ರ ವಾಸನೆ ಬರುತ್ತಿದೆ ಮತ್ತು ಎಚ್ಚರಿಕೆ ದೀಪ ಮಿನುಗುತ್ತಿದೆ. ನೀವು ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲ 3 ಸುರಕ್ಷತಾ ಮತ್ತು ತಪಾಸಣೆ ಕ್ರಮಗಳನ್ನು ಬರೆಯಿರಿ.",
        },
        rubric: {
          en: [
            "Turns key/MCB OFF and wears insulated PPE while removing metal jewelry",
            "Keeps water away and moves scooter to a dry, ventilated bay",
            "Inspects battery enclosure, vents, and orange HV connectors for moisture or swelling before powering on",
          ],
          hi: [
            "चाबी/MCB बंद करना, धातु के गहने उतारना और इंसुलेटेड PPE पहनना",
            "पानी से दूर सूखी, हवादार जगह पर जांच करना",
            "चालू करने से पहले बैटरी केस, वेंट और HV कनेक्टर में नमी या सूजन जांचना",
          ],
          kn: [
            "ಕೀ/MCB ಆಫ್ ಮಾಡಿ ಲೋಹದ ಆಭರಣ ತೆಗೆದು ಇನ್ಸುಲೇಟೆಡ್ PPE ಧರಿಸುವುದು",
            "ನೀರಿನಿಂದ ದೂರವಿಟ್ಟು ಒಣ, ಗಾಳಿಯಾಡುವ ಜಾಗದಲ್ಲಿ ಪರೀಕ್ಷಿಸುವುದು",
            "ಆನ್ ಮಾಡುವ ಮೊದಲು ಬ್ಯಾಟರಿ ಕೇಸ್ ಮತ್ತು HV ಕನೆಕ್ಟರ್‌ಗಳಲ್ಲಿ ತೇವಾಂಶ ಪರಿಶೀಲಿಸುವುದು",
          ],
        },
        keywords: ["battery pack", "high-voltage safety", "ev"],
      },
      {
        id: "ev-brakes",
        week: 1,
        days: "Days 5–7",
        title: {
          en: "Brake & Tyre Diagnostics",
          hi: "ब्रेक और टायर जांच",
          kn: "ಬ್ರೇಕ್ ಮತ್ತು ಟೈರ್ ತಪಾಸಣೆ",
        },
        summary: {
          en: "Check brake pad wear, regen cut-off switches, and tyre pressure for optimal EV range.",
          hi: "ब्रेक पैड घिसाव, रीजन कट-ऑफ स्विच और बेहतर EV रेंज के लिए टायर प्रेशर की जाँच।",
          kn: "ಬ್ರೇಕ್ ಪ್ಯಾಡ್ ಸವೆತ, ರೀಜೆನ್ ಕಟ್-ಆಫ್ ಸ್ವಿಚ್ ಮತ್ತು ಟೈರ್ ಗಾಳಿ ಒತ್ತಡ ಪರಿಶೀಲಿಸುವುದು.",
        },
        lesson: {
          en: "In an EV two-wheeler, under-inflated tyres or dragging brake pads silently drain 10% to 15% of riding range and cause customers to complain about low mileage. Check both front and rear tyres against the sidewall PSI specification, spin each wheel freely on the center stand to listen for brake rub, inspect disc pad thickness, and test that pulling either brake lever immediately cuts off throttle power via the brake cut-off switch.",
          hi: "EV टू-व्हीलर में कम हवा वाले टायर या रगड़ते हुए ब्रेक पैड चुपचाप 10–15% रेंज कम कर देते हैं। दोनों टायरों में सही PSI हवा जांचें, सेंटर स्टैंड पर पहिया घुमाकर ब्रेक रगड़ सुनें, डिस्क पैड की मोटाई देखें, और जांचें कि ब्रेक लीवर दबाने पर थ्रॉटल पावर तुरंत कटती है या नहीं।",
          kn: "EV ದ್ವಿಚಕ್ರ ವಾಹನದಲ್ಲಿ ಕಡಿಮೆ ಗಾಳಿ ಇರುವ ಟೈರ್ ಅಥವಾ ಉಜ್ಜುವ ಬ್ರೇಕ್ ಪ್ಯಾಡ್‌ಗಳು 10–15% ರೇಂಜ್ ಕಡಿಮೆ ಮಾಡುತ್ತವೆ. ಟೈರ್‌ಗಳಲ್ಲಿ ಸರಿಯಾದ PSI ಗಾಳಿ ಪರೀಕ್ಷಿಸಿ, ಸೆಂಟರ್ ಸ್ಟ್ಯಾಂಡ್ ಮೇಲೆ ಚಕ್ರ ತಿರುಗಿಸಿ ಬ್ರೇಕ್ ಉಜ್ಜುವಿಕೆ ಗಮನಿಸಿ, ಮತ್ತು ಬ್ರೇಕ್ ಲಿವರ್ ಒತ್ತಿದಾಗ ಥ್ರಾಟಲ್ ಕಟ್ ಆಗುತ್ತದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
        },
        taskPrompt: {
          en: "A rider complains their EV scooter range dropped from 85 km to 65 km and the front wheel feels heavy. Explain 3 checks you will run on the tyres, brakes, and cut-off switch.",
          hi: "एक राइडर शिकायत करता है कि उसके स्कूटर की रेंज 85 किमी से घटकर 65 किमी हो गई है और आगे का पहिया भारी लगता है। आप टायर, ब्रेक और कट-ऑफ स्विच पर कौन-सी 3 जाँच करेंगे?",
          kn: "ಸ್ಕೂಟರ್ ರೇಂಜ್ 85 ಕಿ.ಮೀ ನಿಂದ 65 ಕಿ.ಮೀ ಗೆ ಇಳಿದಿದೆ ಮತ್ತು ಮುಂಭಾಗದ ಚಕ್ರ ಭಾರವಾಗಿದೆ ಎಂದು ಗ್ರಾಹಕರು ಹೇಳುತ್ತಾರೆ. ಟೈರ್, ಬ್ರೇಕ್ ಮತ್ತು ಕಟ್-ಆಫ್ ಸ್ವಿಚ್‌ನಲ್ಲಿ ನೀವು ಮಾಡುವ 3 ಪರೀಕ್ಷೆಗಳನ್ನು ಬರೆಯಿರಿ.",
        },
        rubric: {
          en: [
            "Checks tyre PSI pressure and tread condition",
            "Spins front wheel to check for dragging brake pads or caliper alignment",
            "Tests brake lever cut-off switch function and pad thickness",
          ],
          hi: [
            "टायर PSI प्रेशर और ट्रेड की जांच शामिल हो",
            "पहिया घुमाकर ब्रेक पैड रगड़/कैलिपर जांचने का उल्लेख हो",
            "ब्रेक लीवर कट-ऑफ स्विच और पैड मोटाई जांचने की बात हो",
          ],
          kn: [
            "ಟೈರ್ PSI ಗಾಳಿ ಒತ್ತಡ ಪರಿಶೀಲನೆ ಉಲ್ಲೇಖಿಸಿರುವುದು",
            "ಚಕ್ರ ತಿರುಗಿಸಿ ಬ್ರೇಕ್ ಪ್ಯಾಡ್ ಉಜ್ಜುವಿಕೆ ಪರೀಕ್ಷಿಸುವುದು",
            "ಬ್ರೇಕ್ ಕಟ್-ಆಫ್ ಸ್ವಿಚ್ ಮತ್ತು ಪ್ಯಾಡ್ ದಪ್ಪ ಪರೀಕ್ಷೆ ಬರೆದಿರುವುದು",
          ],
        },
        keywords: ["brake", "tyre diagnostics", "ev"],
      },
      {
        id: "ev-jobcard",
        week: 2,
        days: "Days 8–14",
        title: {
          en: "Service Job Card Logging",
          hi: "सर्विस जॉब कार्ड लॉगिंग",
          kn: "ಸರ್ವೀಸ್ ಜಾಬ್ ಕಾರ್ಡ್ ದಾಖಲೆ",
        },
        summary: {
          en: "Document customer complaints, odometer/SOC readings, parts replaced, and test-ride sign-off.",
          hi: "ग्राहक की शिकायत, ओडोमीटर/बैटरी %, बदले गए पुर्जे और टेस्ट-राइड साइन-ऑफ दर्ज करना।",
          kn: "ಗ್ರಾಹಕರ ದೂರು, ಓಡೋಮೀಟರ್/ಬ್ಯಾಟರಿ %, ಬದಲಿಸಿದ ಭಾಗಗಳು ಮತ್ತು ಟೆಸ್ಟ್-ರೈಡ್ ದಾಖಲಿಸುವುದು.",
        },
        lesson: {
          en: "A clear service job card prevents billing disputes and tracks warranty claims accurately. Always log four items at check-in: vehicle registration or chassis number, odometer reading and battery state-of-charge (SOC%), visible scratches or missing mirrors, and the customer's exact complaint in their own words. After repairs, record every part replaced, torque or safety checks completed, and obtain customer sign-off before handing over the key.",
          hi: "साफ जॉब कार्ड बिलिंग विवाद रोकता है और वारंटी क्लेम में मदद करता है। वाहन आने पर चार बातें दर्ज करें: रजिस्ट्रेशन/चेसिस नंबर, ओडोमीटर व बैटरी %, मौजूदा खरोंचें, और ग्राहक की मुख्य शिकायत। काम पूरा होने पर बदले गए पुर्जे और टेस्ट-राइड जांच लिखकर ग्राहक के हस्ताक्षर लें।",
          kn: "ಸ್ಪಷ್ಟ ಜಾಬ್ ಕಾರ್ಡ್ ಬಿಲ್ಲಿಂಗ್ ಗೊಂದಲಗಳನ್ನು ತಡೆಯುತ್ತದೆ. ವಾಹನ ಬಂದಾಗ ನಾಲ್ಕು ವಿವರ ದಾಖಲಿಸಿ: ನೋಂದಣಿ/ಚಾಸಿಸ್ ಸಂಖ್ಯೆ, ಓಡೋಮೀಟರ್ ಮತ್ತು ಬ್ಯಾಟರಿ %, ಹಳೆಯ ಗೀರುಗಳು, ಮತ್ತು ಗ್ರಾಹಕರ ದೂರು. ರಿಪೇರಿ ನಂತರ ಬದಲಿಸಿದ ಭಾಗಗಳು ಮತ್ತು ಟೆಸ್ಟ್-ರೈಡ್ ವಿವರ ಬರೆದು ಗ್ರಾಹಕರ ಸಹಿ ಪಡೆಯಿರಿ.",
        },
        taskPrompt: {
          en: "Write a concise job card entry for a scooter arriving with 22% battery, 6,420 km on the odometer, a squeaking rear brake, and a cracked left mirror. Include 3 parts: (1) intake notes, (2) work performed, and (3) handover check.",
          hi: "22% बैटरी, 6,420 किमी ओडोमीटर, पीछे के ब्रेक से आवाज और टूटे बाएं शीशे के साथ आए स्कूटर के लिए 3 भागों में संक्षिप्त जॉब कार्ड लिखें: (1) इनटेक नोट्स, (2) किया गया काम, और (3) हैंडओवर जाँच।",
          kn: "22% ಬ್ಯಾಟರಿ, 6,420 ಕಿ.ಮೀ ಓಡೋಮೀಟರ್, ಹಿಂಬದಿ ಬ್ರೇಕ್ ಶಬ್ದ ಮತ್ತು ಒಡೆದ ಎಡ ಕನ್ನಡಿಯೊಂದಿಗೆ ಬಂದ ಸ್ಕೂಟರ್‌ಗೆ 3 ಭಾಗಗಳಲ್ಲಿ ಜಾಬ್ ಕಾರ್ಡ್ ಬರೆಯಿರಿ: (1) ಇನ್‌ಟೇಕ್ ವಿವರ, (2) ಮಾಡಿದ ಕೆಲಸ, ಮತ್ತು (3) ಹ್ಯಾಂಡ್‌ಓವರ್ ಪರಿಶೀಲನೆ.",
        },
        rubric: {
          en: [
            "Captures intake readings (22% SOC, 6,420 km) and pre-existing cracked mirror",
            "Logs the rear brake complaint and repair/cleaning/pad check action",
            "Includes final test-ride verification and customer handover sign-off",
          ],
          hi: [
            "इनटेक रीडिंग (22% बैटरी, 6,420 किमी) और टूटा शीशा दर्ज हो",
            "पीछे के ब्रेक की शिकायत और सुधार कार्य लिखा हो",
            "अंतिम टेस्ट-राइड व ग्राहक हैंडओवर साइन-ऑफ शामिल हो",
          ],
          kn: [
            "22% ಬ್ಯಾಟರಿ, 6,420 ಕಿ.ಮೀ ಮತ್ತು ಒಡೆದ ಕನ್ನಡಿ ದಾಖಲಿಸಿರುವುದು",
            "ಹಿಂಬದಿ ಬ್ರೇಕ್ ದೂರು ಮತ್ತು ಸರಿಪಡಿಸಿದ ವಿವರ ಬರೆದಿರುವುದು",
            "ಅಂತಿಮ ಟೆಸ್ಟ್-ರೈಡ್ ಮತ್ತು ಗ್ರಾಹಕರ ಹ್ಯಾಂಡ್‌ಓವರ್ ಸಹಿ ಉಲ್ಲೇಖಿಸಿರುವುದು",
          ],
        },
        keywords: ["service job card", "logging", "ev"],
      },
    ],
  },
  {
    matchTerms: ["customer", "support", "helpline", "call", "english", "कस्टमर", "ಗ್ರಾಹಕ"],
    goalSummary: {
      en: "Customer Support Executive — Phone Etiquette, Listening & Resolution",
      hi: "कस्टमर सपोर्ट एग्जीक्यूटिव — फोन शिष्टाचार, सुनना और समाधान",
      kn: "ಗ್ರಾಹಕ ಸೇವಾ ಪ್ರತಿನಿಧಿ — ಫೋನ್ ಶಿಷ್ಟಾಚಾರ, ಆಲಿಸುವಿಕೆ ಮತ್ತು ಪರಿಹಾರ",
    },
    twoWeekOverview: {
      en: "In 2 weeks you will build confident phone etiquette, active listening & ticket logging, and calm first-call complaint resolution.",
      hi: "2 सप्ताह में आप आत्मविश्वास से फोन पर बात करना, ध्यान से सुनकर टिकट दर्ज करना और शिकायत सुलझाना सीखेंगे।",
      kn: "2 ವಾರಗಳಲ್ಲಿ ನೀವು ಸ್ಪಷ್ಟ ಫೋನ್ ಸಂಭಾಷಣೆ, ಟಿಕೆಟ್ ದಾಖಲಾತಿ ಮತ್ತು ದೂರು ಪರಿಹಾರವನ್ನು ಕಲಿಯುವಿರಿ.",
    },
    skills: [
      {
        id: "cs-etiquette",
        week: 1,
        days: "Days 1–4",
        title: {
          en: "Polite Phone Etiquette & Clarity",
          hi: "विनम्र फोन शिष्टाचार और स्पष्ट भाषा",
          kn: "ವಿನಯಶೀಲ ಫೋನ್ ಶಿಷ್ಟಾಚಾರ ಮತ್ತು ಸ್ಪಷ್ಟತೆ",
        },
        summary: {
          en: "Open calls warmly, speak at a steady pace, and put callers on hold politely.",
          hi: "कॉल की गर्मजोशी से शुरुआत करना, स्पष्ट बोलना और विनम्रता से होल्ड पर रखना।",
          kn: "ಕರೆಗಳನ್ನು ಆತ್ಮೀಯವಾಗಿ ಪ್ರಾರಂಭಿಸುವುದು, ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡುವುದು ಮತ್ತು ವಿನಯದಿಂದ ಹೋಲ್ಡ್ ಮಾಡುವುದು.",
        },
        lesson: {
          en: "Customers judge your company within the first 5 seconds of a support call. Answer within three rings, smile while speaking so your tone stays warm, and use a simple greeting: 'Good morning, thank you for calling Sahayak Support, my name is [Name], how may I help you today?' Avoid speaking too fast or using internal jargon, and if you need to check a screen, always ask permission before putting the caller on hold for more than 30 seconds.",
          hi: "कस्टमर सपोर्ट कॉल के पहले 5 सेकंड में ही ग्राहक आपकी कंपनी के बारे में राय बना लेता है। तीन रिंग के अंदर कॉल उठाएं, मुस्कुराते हुए साफ व धीमी गति से बोलें, और नाम बताकर मदद पूछें। यदि सिस्टम जांचने के लिए कॉल होल्ड पर रखना हो, तो हमेशा ग्राहक की अनुमति लें और 30 सेकंड से ज्यादा इंतजार न कराएं।",
          kn: "ಬೆಂಬಲ ಕರೆಯ ಮೊದಲ 5 ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ ಗ್ರಾಹಕರು ನಿಮ್ಮ ಸೇವೆಯನ್ನು ಅಳೆಯುತ್ತಾರೆ. ಮೂರು ರಿಂಗ್‌ಗಳೊಳಗೆ ಕರೆ ಸ್ವೀಕರಿಸಿ, ನಗುತ್ತಾ ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಹೆಸರನ್ನು ತಿಳಿಸಿ ಸಹಾಯ ಕೇಳಿ. ಮಾಹಿತಿ ಪರಿಶೀಲಿಸಲು ಹೋಲ್ಡ್ ಮಾಡುವ ಮೊದಲು ಯಾವಾಗಲೂ ಗ್ರಾಹಕರ ಅನುಮತಿ ಪಡೆಯಿರಿ.",
        },
        taskPrompt: {
          en: "Write the exact spoken script you will use to (1) greet a caller, (2) ask permission to place them on hold for 30 seconds to check their account, and (3) thank them when returning to the line.",
          hi: "वह सटीक संवाद लिखें जिसका उपयोग आप (1) कॉल करने वाले का स्वागत करने, (2) खाता जांचने के लिए 30 सेकंड होल्ड की अनुमति लेने, और (3) लाइन पर लौटने पर धन्यवाद देने के लिए करेंगे।",
          kn: "(1) ಕರೆ ಮಾಡಿದವರನ್ನು ಸ್ವಾಗತಿಸಲು, (2) ಖಾತೆ ಪರಿಶೀಲಿಸಲು 30 ಸೆಕೆಂಡ್ ಹೋಲ್ಡ್ ಅನುಮತಿ ಕೇಳಲು, ಮತ್ತು (3) ಮರಳಿ ಬಂದಾಗ ಧನ್ಯವಾದ ಹೇಳಲು ನೀವು ಬಳಸುವ ಸ್ಪಷ್ಟ ಮಾತುಗಳನ್ನು ಬರೆಯಿರಿ.",
        },
        rubric: {
          en: [
            "Includes a complete warm opening greeting with brand/name and offer to help",
            "Asks polite permission before placing the customer on hold with timeframe",
            "Thanks the customer for holding upon returning to the call",
          ],
          hi: [
            "नाम और मदद की पेशकश के साथ विनम्र शुरुआत शामिल हो",
            "समय बताकर होल्ड करने की विनम्र अनुमति ली हो",
            "कॉल पर लौटने पर इंतजार के लिए धन्यवाद दिया हो",
          ],
          kn: [
            "ಹೆಸರು ಮತ್ತು ಸಹಾಯದ ಭರವಸೆಯೊಂದಿಗೆ ಆತ್ಮೀಯ ಸ್ವಾಗತವಿದೆ",
            "ಸಮಯ ತಿಳಿಸಿ ಹೋಲ್ಡ್ ಮಾಡಲು ವಿನಯದಿಂದ ಅನುಮತಿ ಕೇಳಿರುವುದು",
            "ಮರಳಿ ಬಂದಾಗ ಕಾದಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದ ತಿಳಿಸಿರುವುದು",
          ],
        },
        keywords: ["phone etiquette", "spoken english clarity", "customer support"],
      },
      {
        id: "cs-listening",
        week: 1,
        days: "Days 5–7",
        title: {
          en: "Active Listening & Issue Logging",
          hi: "ध्यान से सुनना और टिकट लॉगिंग",
          kn: "ಸಕ್ರಿಯ ಆಲಿಸುವಿಕೆ ಮತ್ತು ಟಿಕೆಟ್ ದಾಖಲಾತಿ",
        },
        summary: {
          en: "Paraphrase the caller's issue without interrupting and capture accurate ticket details.",
          hi: "बिना टोके ग्राहक की समस्या को दोहराकर पुष्टि करना और सही टिकट विवरण लिखना।",
          kn: "ಮಧ್ಯೆ ಮಾತನಾಡದೆ ಗ್ರಾಹಕರ ಸಮಸ್ಯೆಯನ್ನು ಆಲಿಸಿ ನಿಖರ ಟಿಕೆಟ್ ವಿವರ ದಾಖಲಿಸುವುದು.",
        },
        lesson: {
          en: "An angry customer often calms down simply when they feel truly heard. Never interrupt while they explain what went wrong; take brief notes on dates, order IDs, and amounts. Once they finish, paraphrase the problem in one clear sentence—'Just to confirm, your ₹1,200 EMI was debited yesterday, but the app still shows Pending, correct?'—and log a clean ticket with customer ID, issue category, and exact timestamp.",
          hi: "नाराज ग्राहक अक्सर तब शांत हो जाता है जब उसे लगता है कि उसकी बात ध्यान से सुनी गई। बीच में न टोकें; तारीख, ऑर्डर ID और राशि नोट करें। ग्राहक के बोलने के बाद एक वाक्य में समस्या दोहराकर पुष्टि करें और सही ग्राहक ID व समय के साथ टिकट लॉग करें।",
          kn: "ಕೋಪಗೊಂಡ ಗ್ರಾಹಕರು ತಮ್ಮ ಮಾತನ್ನು ಗಮನವಿಟ್ಟು ಕೇಳುತ್ತಿದ್ದಾರೆ ಎಂದು ಅನಿಸಿದಾಗ ಶಾಂತರಾಗುತ್ತಾರೆ. ಅವರು ಮಾತನಾಡುವಾಗ ಮಧ್ಯೆ ತಡೆಯಬೇಡಿ; ದಿನಾಂಕ, ಆರ್ಡರ್ ID ಮತ್ತು ಮೊತ್ತವನ್ನು ಬರೆದುಕೊಳ್ಳಿ. ನಂತರ ಒಂದೇ ವಾಕ್ಯದಲ್ಲಿ ಸಮಸ್ಯೆಯನ್ನು ಪುನರುಚ್ಚರಿಸಿ ಖಚಿತಪಡಿಸಿ ಮತ್ತು ಟಿಕೆಟ್ ದಾಖಲಿಸಿ.",
        },
        taskPrompt: {
          en: "A caller says rapidly: 'I ordered groceries for ₹850 at 9 AM, the delivery boy never came, my money got cut, and nobody is replying!' Write 3 items: (1) a calm paraphrase confirming the issue, (2) an empathetic acknowledgement without blaming the caller, and (3) 4 concrete fields you will record in the support ticket.",
          hi: "एक ग्राहक तेजी से कहता है: 'मैंने सुबह 9 बजे ₹850 का राशन ऑर्डर किया, डिलीवरी नहीं आई और पैसे कट गए!' 3 बातें लिखें: (1) समस्या दोहराकर शांत पुष्टि, (2) बिना दोष दिए सहानुभूति, और (3) टिकट में दर्ज करने वाले 4 सटीक विवरण।",
          kn: "ಗ್ರಾಹಕರು ವೇಗವಾಗಿ ಹೇಳುತ್ತಾರೆ: 'ಬೆಳಿಗ್ಗೆ 9 ಗಂಟೆಗೆ ₹850 ದಿನಸಿ ಆರ್ಡರ್ ಮಾಡಿದೆ, ಡೆಲಿವರಿ ಬಂದಿಲ್ಲ, ಹಣ ಕಟ್ ಆಗಿದೆ!' 3 ಅಂಶಗಳನ್ನು ಬರೆಯಿರಿ: (1) ಸಮಸ್ಯೆಯ ಶಾಂತ ಪುನರುಚ್ಚಾರಣೆ, (2) ದೂಷಿಸದೆ ಸಹಾನುಭೂತಿ, ಮತ್ತು (3) ಟಿಕೆಟ್‌ನಲ್ಲಿ ದಾಖಲಿಸುವ 4 ಸ್ಪಷ್ಟ ವಿವರಗಳು.",
        },
        rubric: {
          en: [
            "Paraphrases the ₹850 morning order, non-delivery, and debited payment calmly",
            "Shows genuine empathy without blaming the caller",
            "Lists 4 concrete ticket fields (Customer/Phone, Order ID, Amount/Time, Issue Category)",
          ],
          hi: [
            "₹850 ऑर्डर, डिलीवरी न मिलने और पैसे कटने की शांत पुष्टि की हो",
            "ग्राहक के प्रति सहानुभूति दिखाई हो",
            "4 सटीक टिकट फील्ड (ग्राहक/फोन, ऑर्डर ID, राशि/समय, समस्या श्रेणी) लिखे हों",
          ],
          kn: [
            "₹850 ಆರ್ಡರ್, ಡೆಲಿವರಿ ಆಗದಿರುವುದು ಮತ್ತು ಹಣ ಕಡಿತವನ್ನು ಶಾಂತವಾಗಿ ಪುನರುಚ್ಚರಿಸಿರುವುದು",
            "ಗ್ರಾಹಕರ ಬಗ್ಗೆ ಸಹಾನುಭೂತಿ ವ್ಯಕ್ತಪಡಿಸಿರುವುದು",
            "4 ಸ್ಪಷ್ಟ ಟಿಕೆಟ್ ವಿವರಗಳನ್ನು (ಗ್ರಾಹಕ/ಫೋನ್, ಆರ್ಡರ್ ID, ಮೊತ್ತ/ಸಮಯ, ಸಮಸ್ಯೆಯ ವಿಧ) ಬರೆದಿರುವುದು",
          ],
        },
        keywords: ["active listening", "issue logging", "digital record"],
      },
      {
        id: "cs-resolution",
        week: 2,
        days: "Days 8–14",
        title: {
          en: "Complaint Resolution & Follow-Up",
          hi: "शिकायत समाधान और फॉलो-अप",
          kn: "ದೂರು ಪರಿಹಾರ ಮತ್ತು ಫಾಲೋ-ಅಪ್",
        },
        summary: {
          en: "Give clear timelines, set honest expectations, and confirm customer satisfaction before closing.",
          hi: "सही समयसीमा बताना, ईमानदार जानकारी देना और कॉल बंद करने से पहले संतुष्टि पूछना।",
          kn: "ಸ್ಪಷ್ಟ ಸಮಯಮಿತಿ ನೀಡುವುದು, ಪ್ರಾಮಾಣಿಕ ಮಾಹಿತಿ ತಿಳಿಸುವುದು ಮತ್ತು ಕರೆ ಮುಗಿಸುವ ಮೊದಲು ತೃಪ್ತಿ ಖಚಿತಪಡಿಸುವುದು.",
        },
        lesson: {
          en: "Never make a false promise just to end a difficult call—honest timelines earn lasting trust. State clearly what action you are taking right now, give a realistic turnaround time (such as 'refund in 3 to 5 working days' or 'technician visit tomorrow between 10 AM and 12 PM'), share the ticket number for tracking, and end with 'Is there anything else I can assist you with today?'",
          hi: "कॉल जल्दी खत्म करने के लिए कभी झूठा वादा न करें। साफ बताएं कि आप अभी क्या कदम उठा रहे हैं, सही समयसीमा दें (जैसे '3 से 5 कार्यदिवसों में रिफंड'), ग्राहक को टिकट नंबर दें, और अंत में पूछें कि क्या उन्हें किसी और मदद की जरूरत है।",
          kn: "ಕರೆ ಮುಗಿಸಲು ಸುಳ್ಳು ಭರವಸೆ ನೀಡಬೇಡಿ. ನೀವು ಈಗ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿರುವ ಕ್ರಮ, ನಿಜವಾದ ಸಮಯಮಿತಿ (ಉದಾ: 3–5 ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಮರುಪಾವತಿ), ಮತ್ತು ಟಿಕೆಟ್ ಸಂಖ್ಯೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಸಿ, ಕೊನೆಯಲ್ಲಿ ಬೇರೆ ಯಾವುದೇ ಸಹಾಯ ಬೇಕೇ ಎಂದು ಕೇಳಿ.",
        },
        taskPrompt: {
          en: "You have initiated a ₹850 refund for a failed order, which takes 3–5 working days to reach the customer's bank. Write your closing message covering 3 points: (1) confirming the ₹850 refund has been initiated, (2) stating the 3–5 working day timeline and ticket reference, and (3) giving a polite closing check.",
          hi: "आपने असफल ऑर्डर के लिए ₹850 का रिफंड शुरू कर दिया है, जिसे बैंक में आने में 3–5 कार्यदिवस लगेंगे। 3 बिंदुओं में अंतिम संदेश लिखें: (1) ₹850 रिफंड की पुष्टि, (2) 3–5 दिन की समयसीमा व टिकट नंबर, और (3) विनम्र समापन जाँच।",
          kn: "ವಿಫಲವಾದ ಆರ್ಡರ್‌ಗೆ ₹850 ಮರುಪಾವತಿ ಪ್ರಾರಂಭಿಸಿದ್ದೀರಿ, ಇದು ಬ್ಯಾಂಕ್ ತಲುಪಲು 3–5 ದಿನ ಬೇಕಾಗುತ್ತದೆ. 3 ಅಂಶಗಳಲ್ಲಿ ಮುಕ್ತಾಯ ಸಂದೇಶ ಬರೆಯಿರಿ: (1) ₹850 ಮರುಪಾವತಿ ದೃಢೀಕರಣ, (2) 3–5 ದಿನಗಳ ಸಮಯಮಿತಿ ಮತ್ತು ಟಿಕೆಟ್ ಸಂಖ್ಯೆ, ಮತ್ತು (3) ವಿನಯಶೀಲ ಮುಕ್ತಾಯ ಪ್ರಶ್ನೆ.",
        },
        rubric: {
          en: [
            "Clearly confirms the ₹850 refund has been initiated",
            "States the honest 3–5 working days timeline and shares a ticket reference",
            "Includes a polite closing check asking if further help is needed",
          ],
          hi: [
            "₹850 रिफंड शुरू होने की स्पष्ट पुष्टि हो",
            "3–5 कार्यदिवस की ईमानदार समयसीमा और टिकट नंबर दिया हो",
            "विनम्रता से आगे की मदद के बारे में पूछा हो",
          ],
          kn: [
            "₹850 ಮರುಪಾವತಿ ಪ್ರಾರಂಭವಾಗಿದೆ ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ದೃಢೀಕರಿಸಿರುವುದು",
            "3–5 ಕೆಲಸದ ದಿನಗಳ ಸಮಯಮಿತಿ ಮತ್ತು ಟಿಕೆಟ್ ಸಂಖ್ಯೆ ನೀಡಿರುವುದು",
            "ಬೇರೆ ಸಹಾಯ ಬೇಕೇ ಎಂದು ವಿನಯದಿಂದ ಕೇಳಿ ಮುಕ್ತಾಯಗೊಳಿಸಿರುವುದು",
          ],
        },
        keywords: ["complaint resolution", "empathetic communication", "follow-up"],
      },
    ],
  },
];

export function buildFallbackPathway(
  goal: string,
  language: SupportedLanguage,
): FallbackPathway {
  const lower = goal.toLowerCase();
  const matchedTemplate =
    STARTER_TEMPLATES.find((tpl) =>
      tpl.matchTerms.some((term) => lower.includes(term)),
    ) ?? null;

  if (matchedTemplate) {
    return {
      goal,
      language,
      goalSummary: matchedTemplate.goalSummary[language],
      twoWeekOverview: matchedTemplate.twoWeekOverview[language],
      skills: matchedTemplate.skills.map((s) => ({
        id: s.id,
        week: s.week,
        days: s.days,
        title: s.title[language],
        summary: s.summary[language],
        lesson: s.lesson[language],
        taskPrompt: s.taskPrompt[language],
        rubric: s.rubric[language],
        keywords: s.keywords,
      })),
      createdAt: new Date().toISOString(),
    };
  }

  // Generic workplace-ready fallback for custom goals
  const cleanGoal = goal.trim();
  const templates: Record<SupportedLanguage, FallbackPathway> = {
    en: {
      goal: cleanGoal,
      language: "en",
      goalSummary: `${cleanGoal} — 2-Week Job Readiness Pathway`,
      twoWeekOverview: `In 2 weeks you will practice core workplace safety & setup, step-by-step daily execution, and polite customer/team communication for ${cleanGoal}.`,
      skills: [
        {
          id: "skill-1",
          week: 1,
          days: "Days 1–4",
          title: `Workplace Readiness & Safety for ${cleanGoal}`,
          summary: "Prepare tools, checklists, and safe working habits before starting any shift.",
          lesson: `Every dependable ${cleanGoal} starts the day with a calm 5-minute readiness check. Verify your workspace is clean and hazard-free, confirm your essential tools or digital apps are charged and logged in, and review the day's priority tasks before serving anyone. Keeping a neat checklist prevents costly mistakes, reduces stress during busy hours, and shows supervisors that you are reliable from day one.`,
          taskPrompt: `Imagine your supervisor asks you to open the work shift for ${cleanGoal} today. Describe 3 readiness and safety checks in order: (1) tool or workspace readiness, (2) a safety or error-prevention habit, and (3) your step-by-step opening sequence.`,
          rubric: [
            "Names concrete tool, workspace, or system readiness checks",
            "Includes at least one safety or error-prevention habit",
            "Shows clear step-by-step sequence for starting the shift",
          ],
          keywords: ["safety", "check", "workplace", "basics"],
        },
        {
          id: "skill-2",
          week: 1,
          days: "Days 5–7",
          title: "Accurate Record-Keeping & Billing Basics",
          summary: "Track daily tasks, receipts, and numbers without missing entries.",
          lesson: `Whether you handle cash, UPI receipts, inventory counts, or customer logs, accuracy builds instant trust. Record every transaction or completed job immediately instead of waiting until evening, double-check names, dates, and totals, and flag any mismatch politely to your supervisor the same day. Simple habits like writing clear reference numbers save hours of confusion at month-end.`,
          taskPrompt: `During a busy afternoon as a ${cleanGoal}, you notice a mismatch between a customer receipt and your daily register. Explain the 3 exact steps you will take: (1) checking the original receipt calmly, (2) recording accurate details without guessing, and (3) escalating the mismatch the same day.`,
          rubric: [
            "Checks the original receipt/transaction reference calmly",
            "Records the finding accurately rather than guessing",
            "Communicates or escalates the mismatch clearly on the same day",
          ],
          keywords: ["reporting", "verification", "upi", "billing"],
        },
        {
          id: "skill-3",
          week: 2,
          days: "Days 8–14",
          title: "Customer Communication & Problem Solving",
          summary: "Listen calmly, give honest timelines, and resolve everyday issues professionally.",
          lesson: `Strong communication turns an ordinary worker into a valued team member. When a customer or colleague brings an issue, listen completely without interrupting, summarize what you understood in one simple sentence, and explain what you can do next with an honest timeline. Always close by confirming they are satisfied with the solution.`,
          taskPrompt: `A customer is upset about a delay in your work as a ${cleanGoal}. Write a response covering 3 points: (1) polite empathy without arguing, (2) a clear next action, and (3) an honest timeframe with a closing check.`,
          rubric: [
            "Acknowledges the customer's concern politely without arguing",
            "States a clear, practical next action",
            "Gives an honest timeframe and asks if anything else is needed",
          ],
          keywords: ["customer service", "communication", "resolution"],
        },
      ],
      createdAt: new Date().toISOString(),
    },
    hi: {
      goal: cleanGoal,
      language: "hi",
      goalSummary: `${cleanGoal} — 2-सप्ताह की कार्य-तैयारी योजना`,
      twoWeekOverview: `2 सप्ताह में आप ${cleanGoal} के लिए कार्यस्थल सुरक्षा, दैनिक रिकॉर्ड व सटीकता, और विनम्र ग्राहक संवाद सीखेंगे।`,
      skills: [
        {
          id: "skill-1",
          week: 1,
          days: "Days 1–4",
          title: `${cleanGoal}: कार्यस्थल तैयारी और सुरक्षा`,
          summary: "शिफ्ट शुरू करने से पहले औजार, स्थान और सुरक्षा नियम जांचना।",
          lesson: `हर भरोसेमंद ${cleanGoal} काम शुरू करने से पहले 5 मिनट की तैयारी जाँच करता है। कार्यक्षेत्र साफ व सुरक्षित रखें, जरूरी औजार या डिजिटल ऐप चार्ज और लॉगिन रखें, और दिन के मुख्य कामों की सूची देख लें। यह आदत गलतियों से बचाती है और टीम का भरोसा बढ़ाती है।`,
          taskPrompt: `मान लीजिए आपको ${cleanGoal} के रूप में आज शिफ्ट की शुरुआत करनी है। 3 जाँच क्रम से बताएं: (1) औजार या कार्यस्थान जाँच, (2) सुरक्षा या गलती रोकने की आदत, और (3) शिफ्ट शुरू करने का चरणबद्ध क्रम।`,
          rubric: [
            "औजार, कार्यस्थान या सिस्टम की जाँच का उल्लेख हो",
            "कम से कम एक सुरक्षा या गलती रोकने की आदत बताई हो",
            "स्पष्ट चरणबद्ध क्रम लिखा हो",
          ],
          keywords: ["safety", "check", "workplace", "basics"],
        },
        {
          id: "skill-2",
          week: 1,
          days: "Days 5–7",
          title: "सटीक रिकॉर्ड और लेन-देन जाँच",
          summary: "दैनिक काम, रसीद और संख्याओं का सही हिसाब रखना।",
          lesson: `चाहे नकद हो, UPI रसीद हो या स्टॉक रजिस्टर, सही हिसाब से तुरंत भरोसा बनता है। हर काम या भुगतान को शाम का इंतजार किए बिना तुरंत दर्ज करें, तारीख व राशि दो बार जांचें और किसी भी अंतर की सूचना उसी दिन दें।`,
          taskPrompt: `व्यस्त समय में आपको रसीद और दैनिक रजिस्टर के बीच अंतर दिखता है। 3 सटीक कदम बताएं: (1) मूल रसीद की जाँच, (2) बिना अनुमान सही विवरण दर्ज करना, और (3) उसी दिन स्पष्ट रूप से सूचित करना।`,
          rubric: [
            "मूल रसीद या ट्रांजेक्शन संदर्भ की जाँच की हो",
            "अनुमान लगाने के बजाय सही विवरण दर्ज किया हो",
            "उसी दिन स्पष्ट रूप से सूचित/समाधान किया हो",
          ],
          keywords: ["reporting", "verification", "upi", "billing"],
        },
        {
          id: "skill-3",
          week: 2,
          days: "Days 8–14",
          title: "विनम्र संवाद और समस्या समाधान",
          summary: "ध्यान से सुनना, ईमानदार समयसीमा देना और समस्या सुलझाना।",
          lesson: `अच्छा संवाद आपको टीम में खास बनाता है। जब कोई ग्राहक नाराज हो तो बिना टोके पूरा सुनें, समस्या को एक वाक्य में दोहराएं, और सही समयसीमा के साथ अगला कदम बताएं। अंत में संतुष्टि जरूर पूछें।`,
          taskPrompt: `काम में देरी से एक ग्राहक नाराज है। 3 बिंदुओं में उत्तर लिखें: (1) बिना बहस विनम्र सहानुभूति, (2) स्पष्ट अगला कदम, और (3) ईमानदार समयसीमा व संतुष्टि जाँच।`,
          rubric: [
            "बिना बहस किए विनम्रता से चिंता समझी हो",
            "स्पष्ट अगला कदम बताया हो",
            "ईमानदार समयसीमा और अंतिम संतुष्टि जाँच शामिल हो",
          ],
          keywords: ["customer service", "communication", "resolution"],
        },
      ],
      createdAt: new Date().toISOString(),
    },
    kn: {
      goal: cleanGoal,
      language: "kn",
      goalSummary: `${cleanGoal} — 2-ವಾರಗಳ ಉದ್ಯೋಗ ಸಿದ್ಧತಾ ಮಾರ್ಗ`,
      twoWeekOverview: `2 ವಾರಗಳಲ್ಲಿ ನೀವು ${cleanGoal} ಗಾಗಿ ಸುರಕ್ಷತಾ ಸಿದ್ಧತೆ, ನಿಖರ ದಾಖಲೆ ನಿರ್ವಹಣೆ ಮತ್ತು ಗ್ರಾಹಕ ಸಂವಹನ ಕಲಿಯುವಿರಿ.`,
      skills: [
        {
          id: "skill-1",
          week: 1,
          days: "Days 1–4",
          title: `${cleanGoal}: ಕೆಲಸದ ಸ್ಥಳ ಸಿದ್ಧತೆ ಮತ್ತು ಸುರಕ್ಷತೆ`,
          summary: "ಕೆಲಸ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ಉಪಕರಣಗಳು ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ಪರಿಶೀಲಿಸುವುದು.",
          lesson: `ಪ್ರತಿ ವಿಶ್ವಾಸಾರ್ಹ ${cleanGoal} ದಿನದ ಕೆಲಸವನ್ನು 5 ನಿಮಿಷಗಳ ಸಿದ್ಧತಾ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸುತ್ತಾರೆ. ಕೆಲಸದ ಸ್ಥಳವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಿ, ಅಗತ್ಯ ಉಪಕರಣಗಳು ಅಥವಾ ಆ್ಯಪ್‌ಗಳು ಸಿದ್ಧವಾಗಿವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿ, ಮತ್ತು ಸುರಕ್ಷತಾ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಿ.`,
          taskPrompt: `ಇಂದು ${cleanGoal} ಆಗಿ ನೀವು ಶಿಫ್ಟ್ ಪ್ರಾರಂಭಿಸಬೇಕಿದೆ. ಕ್ರಮವಾಗಿ 3 ಪರಿಶೀಲನೆಗಳನ್ನು ಬರೆಯಿರಿ: (1) ಉಪಕರಣ ಮತ್ತು ಸ್ಥಳದ ಸಿದ್ಧತೆ, (2) ಸುರಕ್ಷತೆ ಅಥವಾ ತಪ್ಪು ತಡೆಯುವ ಅಭ್ಯಾಸ, ಮತ್ತು (3) ಶಿಫ್ಟ್ ಆರಂಭಿಸುವ ಹಂತ-ಹಂತದ ಕ್ರಮ.`,
          rubric: [
            "ಉಪಕರಣ, ಸ್ಥಳ ಅಥವಾ ಸಿಸ್ಟಮ್ ಸಿದ್ಧತೆ ಪರಿಶೀಲಿಸಿರುವುದು",
            "ಕನಿಷ್ಠ ಒಂದು ಸುರಕ್ಷತೆ ಅಥವಾ ತಪ್ಪು ತಡೆಗಟ್ಟುವ ಕ್ರಮ ಬರೆದಿರುವುದು",
            "ಸ್ಪಷ್ಟ ಹಂತ-ಹಂತದ ಕ್ರಮ ನೀಡಿರುವುದು",
          ],
          keywords: ["safety", "check", "workplace", "basics"],
        },
        {
          id: "skill-2",
          week: 1,
          days: "Days 5–7",
          title: "ನಿಖರ ದಾಖಲೆ ಮತ್ತು ಲೆಕ್ಕಪತ್ರ ಪರಿಶೀಲನೆ",
          summary: "ದೈನಂದಿನ ಕೆಲಸ, ರಸೀದಿ ಮತ್ತು ಅಂಕಿಅಂಶಗಳನ್ನು ತಪ್ಪಿಲ್ಲದೆ ದಾಖಲಿಸುವುದು.",
          lesson: `ನಗದು, UPI ರಸೀದಿ ಅಥವಾ ಸ್ಟಾಕ್ ಲೆಕ್ಕವಿರಲಿ, ನಿಖರತೆ ನಂಬಿಕೆ ಬೆಳೆಸುತ್ತದೆ. ಪ್ರತಿ ವ್ಯವಹಾರವನ್ನು ಸಂಜೆಯವರೆಗೆ ಕಾಯದೆ ತಕ್ಷಣ ದಾಖಲಿಸಿ, ದಿನಾಂಕ ಮತ್ತು ಮೊತ್ತವನ್ನು ಮರು-ಪರಿಶೀಲಿಸಿ ಮತ್ತು ವ್ಯತ್ಯಾಸ ಕಂಡರೆ ತಕ್ಷಣ ತಿಳಿಸಿ.`,
          taskPrompt: `ಬಿಡುವಿಲ್ಲದ ಸಮಯದಲ್ಲಿ ರಸೀದಿ ಮತ್ತು ದೈನಂದಿನ ಪುಸ್ತಕದ ನಡುವೆ ವ್ಯತ್ಯಾಸ ಕಂಡುಬಂದಿದೆ. 3 ನಿಖರ ಹಂತಗಳನ್ನು ಬರೆಯಿರಿ: (1) ಮೂಲ ರಸೀದಿ ಪರಿಶೀಲನೆ, (2) ಊಹೆ ಮಾಡದೆ ನಿಖರ ದಾಖಲೆ, ಮತ್ತು (3) ಅದೇ ದಿನ ಮೇಲ್ವಿಚಾರಕರಿಗೆ ತಿಳಿಸುವುದು.`,
          rubric: [
            "ಮೂಲ ರಸೀದಿ ಅಥವಾ ಟ್ರಾನ್ಸಾಕ್ಷನ್ ಸಂಖ್ಯೆ ಪರಿಶೀಲಿಸಿರುವುದು",
            "ಊಹೆ ಮಾಡದೆ ನಿಖರ ವಿವರ ದಾಖಲಿಸಿರುವುದು",
            "ಅದೇ ದಿನ ಮೇಲ್ವಿಚಾರಕರಿಗೆ ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಸಿರುವುದು",
          ],
          keywords: ["reporting", "verification", "upi", "billing"],
        },
        {
          id: "skill-3",
          week: 2,
          days: "Days 8–14",
          title: "ಗ್ರಾಹಕ ಸಂವಹನ ಮತ್ತು ಸಮಸ್ಯೆ ಪರಿಹಾರ",
          summary: "ಶಾಂತವಾಗಿ ಆಲಿಸುವುದು, ಪ್ರಾಮಾಣಿಕ ಸಮಯ ನೀಡುವುದು ಮತ್ತು ಪರಿಹಾರ ಒದಗಿಸುವುದು.",
          lesson: `ಉತ್ತಮ ಸಂವಹನ ನಿಮ್ಮ ಮೌಲ್ಯವನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ. ಗ್ರಾಹಕರು ಸಮಸ್ಯೆ ಹೇಳಿದಾಗ ಮಧ್ಯೆ ತಡೆಯದೆ ಕೇಳಿ, ಒಂದೇ ವಾಕ್ಯದಲ್ಲಿ ದೃಢೀಕರಿಸಿ, ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ಸಮಯಮಿತಿಯೊಂದಿಗೆ ಮುಂದಿನ ಕ್ರಮವನ್ನು ತಿಳಿಸಿ.`,
          taskPrompt: `ಕೆಲಸದ ವಿಳಂಬದಿಂದ ಗ್ರಾಹಕರು ಅಸಮಾಧಾನಗೊಂಡಿದ್ದಾರೆ. 3 ಅಂಶಗಳಲ್ಲಿ ಉತ್ತರಿಸಿ: (1) ವಾದ ಮಾಡದೆ ವಿನಯದ ಸಹಾನುಭೂತಿ, (2) ಸ್ಪಷ್ಟ ಮುಂದಿನ ಕ್ರಮ, ಮತ್ತು (3) ಪ್ರಾಮಾಣಿಕ ಸಮಯಮಿತಿ ಹಾಗೂ ತೃಪ್ತಿ ಪ್ರಶ್ನೆ.`,
          rubric: [
            "ವಾದ ಮಾಡದೆ ವಿನಯದಿಂದ ಗ್ರಾಹಕರ ಕಾಳಜಿಯನ್ನು ಒಪ್ಪಿಕೊಂಡಿರುವುದು",
            "ಸ್ಪಷ್ಟ ಮುಂದಿನ ಕ್ರಮ ತಿಳಿಸಿರುವುದು",
            "ಪ್ರಾಮಾಣಿಕ ಸಮಯಮಿತಿ ಮತ್ತು ಕೊನೆಯ ತೃಪ್ತಿ ಪ್ರಶ್ನೆ ಸೇರಿರುವುದು",
          ],
          keywords: ["customer service", "communication", "resolution"],
        },
      ],
      createdAt: new Date().toISOString(),
    },
  };

  return templates[language];
}

export interface FallbackRubricItem {
  point: string;
  met: boolean;
  evidence: string;
}

export interface FallbackGradeResult {
  rubric: FallbackRubricItem[];
  score: number;
  passed: boolean;
  feedback: string;
}

interface KeywordGroupRule {
  triggers: string[];
  keywords: string[];
}

const RUBRIC_KEYWORD_GROUPS: KeywordGroupRule[] = [
  {
    triggers: ["ppe", "harness", "roof dryness", "हार्नेस", "ಹಾರ್ನೆಸ್"],
    keywords: [
      "harness",
      "ppe",
      "glove",
      "gloves",
      "insulated",
      "shoe",
      "shoes",
      "boots",
      "non-slip",
      "rubber",
      "dry",
      "damp",
      "wet",
      "slip",
      "helmet",
      "हार्नेस",
      "दस्ताने",
      "जूते",
      "सूख",
      "गील",
      "ಹಾರ್ನೆಸ್",
      "ಕೈಗವಸು",
      "ಶೂ",
      "ಒಣ",
    ],
  },
  {
    triggers: ["distance", "clearance", "overhead", "wire", "दूरी", "तार", "ವಿದ್ಯುತ್", "ತಂತಿ", "ಅಂತರ"],
    keywords: [
      "overhead",
      "wire",
      "wires",
      "cable",
      "line",
      "lines",
      "clearance",
      "distance",
      "meter",
      "meters",
      "metre",
      "metres",
      "2m",
      "2-m",
      "away",
      "electricity",
      "electric",
      "power",
      "बिजली",
      "तार",
      "दूरी",
      "मीटर",
      "ವಿದ್ಯುತ್",
      "ತಂತಿ",
      "ದೂರ",
      "ಮೀಟರ್",
    ],
  },
  {
    triggers: ["ladder", "footing", "सीढ़ी", "आधार", "ಏಣಿ", "ನೆಲದ"],
    keywords: [
      "ladder",
      "footing",
      "firm",
      "level",
      "base",
      "hold",
      "holding",
      "teammate",
      "partner",
      "steady",
      "ground",
      "stable",
      "सीढ़ी",
      "आधार",
      "स्थिर",
      "मजबूत",
      "पकड़",
      "ಏಣಿ",
      "ನೆಲ",
      "ಸ್ಥಿರ",
    ],
  },
  {
    triggers: ["anchor", "anchors", "lifeline", "structural", "लाइफलाइन", "एंकर", "ಲೈಫ್‌ಲೈನ್", "ಆಂಕರ್"],
    keywords: [
      "anchor",
      "anchored",
      "anchoring",
      "lifeline",
      "beam",
      "rafter",
      "pillar",
      "structural",
      "structure",
      "point",
      "hook",
      "tie",
      "tied",
      "fasten",
      "secure",
      "secured",
      "लाइफलाइन",
      "बीम",
      "एंकर",
      "संरचनात्मक",
      "बांध",
      "ಲೈಫ್‌ಲೈನ್",
      "ಬೀಮ್",
      "ಆಂಕರ್",
      "ಕಟ್ಟಿ",
    ],
  },
  {
    triggers: ["polarity", "minus", "पोलैरिटी", "माइनस", "ಪೋಲಾರಿಟಿ", "ಮೈನಸ್"],
    keywords: [
      "minus",
      "negative",
      "reverse",
      "reversed",
      "polarity",
      "positive",
      "swap",
      "उल्ट",
      "उल्टी",
      "माइनस",
      "पोलैरिटी",
      "पॉजिटिव",
      "नेगेटिव",
      "ಮೈನಸ್",
      "ಪೋಲಾರಿಟಿ",
      "ತಪ್ಪ",
      "ಪಾಸಿಟಿವ್",
      "ನೆಗೆಟಿವ್",
    ],
  },
  {
    triggers: ["inverter", "damage", "short-circuit", "इन्वर्टर", "शॉर्ट", "ಇನ್ವರ್ಟರ್", "ಶಾರ್ಟ್"],
    keywords: [
      "inverter",
      "damage",
      "short",
      "burn",
      "arc",
      "fault",
      "protect",
      "not connect",
      "इन्वर्टर",
      "खराब",
      "शॉर्ट",
      "नष्ट",
      "आग",
      "बच",
      "नुकसान",
      "ಇನ್ವರ್ಟರ್",
      "ಹಾನಿ",
      "ಶಾರ್ಟ್",
      "ಬೆಂಕಿ",
      "ಅಪಾಯ",
    ],
  },
  {
    triggers: ["isolator", "mc4", "re-test", "156v", "आइसोलेटर", "लीड्स", "ಐಸೋಲೇಟರ್", "ಮರು-ಪರೀಕ್ಷೆ"],
    keywords: [
      "isolate",
      "isolator",
      "off",
      "mc4",
      "lead",
      "leads",
      "swap",
      "re-test",
      "retest",
      "156v",
      "multimeter",
      "dc",
      "आइसोलेटर",
      "बंद",
      "लीड",
      "तार",
      "मल्टीमीटर",
      "टेस्ट",
      "156",
      "ಐಸೋಲೇಟರ್",
      "ಆಫ್",
      "ತಂತಿ",
      "ಮಲ್ಟಿಮೀಟರ್",
      "ಪರೀಕ್ಷೆ",
    ],
  },
  {
    triggers: ["morning", "evening", "1 pm", "cracking", "सुबह", "दोपहर", "ಬೆಳಿಗ್ಗೆ", "ಮಧ್ಯಾಹ್ನ"],
    keywords: [
      "morning",
      "evening",
      "sunset",
      "cool",
      "thermal",
      "shock",
      "crack",
      "cracking",
      "glass",
      "सुबह",
      "शाम",
      "ठंड",
      "कांच",
      "टूट",
      "चटक",
      "ಬೆಳಿಗ್ಗೆ",
      "ಸಂಜೆ",
      "ತಣ್ಣ",
      "ಗಾಜು",
      "ಬಿರುಕು",
    ],
  },
  {
    triggers: ["plain water", "detergent", "microfiber", "डिटर्जेंट", "सादे पानी", "ಡಿಟರ್ಜೆಂಟ್", "ಶುದ್ಧ ನೀರು"],
    keywords: [
      "plain",
      "water",
      "soft",
      "microfiber",
      "cloth",
      "mop",
      "no detergent",
      "avoid detergent",
      "brush",
      "broom",
      "सादे",
      "पानी",
      "कपड़",
      "वाइपर",
      "सॉफ्ट",
      "डिटर्जेंट",
      "झाड़ू",
      "ಶುದ್ಧ",
      "ನೀರು",
      "ಬಟ್ಟೆ",
      "ಮಾಪ್",
      "ಮೃದು",
      "ಡಿಟರ್ಜೆಂಟ್",
      "ಪೊರಕೆ",
    ],
  },
  {
    triggers: ["display", "indicator", "generation", "handover", "इन्वर्टर लाइट", "रीडिंग", "ಹಸಿರು", "ದೀಪ", "ಉತ್ಪಾದನೆ"],
    keywords: [
      "inverter",
      "green",
      "light",
      "display",
      "indicator",
      "generation",
      "reading",
      "output",
      "check",
      "इन्वर्टर",
      "हरी",
      "लाइट",
      "रीडिंग",
      "उत्पादन",
      "जाँच",
      "ಇನ್ವರ್ಟರ್",
      "ಹಸಿರು",
      "ದೀಪ",
      "ರೀಡಿಂಗ್",
      "ಉತ್ಪಾದನೆ",
      "ಪರಿಶೀಲ",
    ],
  },
  {
    triggers: ["cgst", "sgst", "igst", "900", "₹900"],
    keywords: ["cgst", "sgst", "igst", "900", "9%", "0", "karnataka", "same state", "intrastate", "कर्नाटक", "ರಾಜ್ಯ"],
  },
  {
    triggers: ["11,800", "11800", "invoice total", "कुल बिल", "ಒಟ್ಟು ಇನ್ವಾಯ್ಸ್"],
    keywords: ["11,800", "11800", "total", "10,000", "1800", "1,800", "final", "कुल", "ಒಟ್ಟು"],
  },
  {
    triggers: ["gstin", "hsn", "mandatory", "अनिवार्य", "ಕಡ್ಡಾಯ"],
    keywords: ["gstin", "invoice", "number", "date", "hsn", "sac", "buyer", "taxable", "address", "तारीख", "नंबर", "कोड", "ದಿನಾಂಕ", "ಸಂಖ್ಯೆ"],
  },
  {
    triggers: ["contra", "f4"],
    keywords: ["contra", "f4", "cash", "sbi", "bank", "deposit", "नकद", "बैंक", "ನಗದು", "ಬ್ಯಾಂಕ್"],
  },
  {
    triggers: ["payment", "f5", "indirect"],
    keywords: ["payment", "f5", "indirect", "expense", "expenses", "rent", "upi", "किराया", "ಬಾಡಿಗೆ"],
  },
  {
    triggers: ["receipt", "f6", "debtors"],
    keywords: ["receipt", "f6", "sundry", "debtor", "debtors", "ganesh", "customer", "ग्राहक", "ಗ್ರಾಹಕ"],
  },
  {
    triggers: ["250", "fee", "51,750"],
    keywords: ["250", "fee", "charge", "payment", "51,750", "51750", "deduct", "tally", "शुल्क", "ಶುಲ್ಕ"],
  },
  {
    triggers: ["3,000", "3000", "uncleared", "cheque", "चेक", "ಚೆಕ್"],
    keywords: ["3,000", "3000", "cheque", "check", "uncleared", "timing", "add", "supplier", "चेक", "क्लियर", "ಚೆಕ್", "ಕ್ಲಿಯರ್"],
  },
  {
    triggers: ["54,750", "54750", "matches", "मेल", "ಹೊಂದಿ"],
    keywords: ["54,750", "54750", "reconcile", "reconciled", "match", "matches", "statement", "bank", "मिलान", "बैलेंस", "ಬ್ಯಾಲೆನ್ಸ್"],
  },
  {
    triggers: ["soundbox", "merchant", "pos", "साउंडबॉक्स", "ಮರ್ಚೆಂಟ್", "ಸೌಂಡ್‌ಬಾಕ್ಸ್"],
    keywords: ["soundbox", "merchant", "pos", "app", "screen", "confirm", "store", "device", "साउंडबॉक्स", "ऐप", "स्टोर", "ಮರ್ಚೆಂಟ್", "ಆ್ಯಪ್", "ಸೌಂಡ್‌ಬಾಕ್ಸ್"],
  },
  {
    triggers: ["reference id", "wait", "politely", "प्रतीक्षा", "रेफरेंस", "ಕಾಯುವುದು", "ರೆಫರೆನ್ಸ್"],
    keywords: ["wait", "60", "second", "seconds", "polite", "politely", "reference", "transaction", "id", "utr", "प्रतीक्षा", "विनम्र", "रेफरेंस", "ಕಾಯ", "ವಿನಯ", "ರೆಫರೆನ್ಸ್"],
  },
  {
    triggers: ["settlement", "refund", "alternate", "समाधान", "रिफंड", "ಪರಿಹಾರ", "ಮರುಪಾವತಿ"],
    keywords: ["settle", "settlement", "cash", "alternate", "fresh", "qr", "refund", "double", "debited", "नकद", "रिफंड", "वैकल्पिक", "ನಗದು", "ಮರುಪಾವತಿ", "ಪರ್ಯಾಯ"],
  },
  {
    triggers: ["greeting", "urgency"],
    keywords: ["welcome", "hello", "good", "help", "happy", "quickly", "rush", "minutes", "assist"],
  },
  {
    triggers: ["aisle", "snacks", "paper plates"],
    keywords: ["snacks", "plate", "plates", "aisle", "walk", "show", "guide", "section", "shelf"],
  },
  {
    triggers: ["add-on", "napkins", "cups"],
    keywords: ["napkin", "napkins", "cup", "cups", "spoon", "drink", "drinks", "water", "combo", "suggest"],
  },
  {
    triggers: ["near-expiry", "markdown", "5 days"],
    keywords: ["separate", "remove", "pull", "markdown", "return", "bin", "flag", "expiry", "expire", "5 days"],
  },
  {
    triggers: ["fefo", "rotation"],
    keywords: ["fefo", "front", "back", "behind", "older", "newer", "rotate", "rotation", "first expired"],
  },
  {
    triggers: ["price tag", "35", "40", "price tag mismatch"],
    keywords: ["tag", "price", "35", "40", "pos", "update", "fix", "escalate", "supervisor", "overcharge"],
  },
  {
    triggers: ["mcb", "insulated", "jewelry"],
    keywords: ["key", "off", "mcb", "breaker", "glove", "gloves", "insulated", "ring", "watch", "metal", "ppe"],
  },
  {
    triggers: ["dry", "ventilated", "water away"],
    keywords: ["dry", "ventilated", "bay", "water", "away", "no water", "wipe", "air"],
  },
  {
    triggers: ["enclosure", "swelling", "hv connectors"],
    keywords: ["battery", "case", "enclosure", "swelling", "moisture", "orange", "hv", "connector", "smell", "vent"],
  },
  {
    triggers: ["psi", "tread"],
    keywords: ["psi", "air", "pressure", "tyre", "tire", "tread", "inflate", "sidewall"],
  },
  {
    triggers: ["dragging", "caliper", "spins"],
    keywords: ["spin", "wheel", "center stand", "drag", "dragging", "rub", "caliper", "heavy", "free"],
  },
  {
    triggers: ["cut-off", "pad thickness"],
    keywords: ["cut-off", "cutoff", "switch", "lever", "throttle", "pad", "thickness", "disc", "brake"],
  },
  {
    triggers: ["22%", "6,420", "mirror"],
    keywords: ["22%", "soc", "6420", "6,420", "odometer", "mirror", "cracked", "left", "intake"],
  },
  {
    triggers: ["rear brake", "brake repair"],
    keywords: ["rear", "brake", "squeak", "squeaking", "clean", "pad", "adjust", "repair", "check"],
  },
  {
    triggers: ["test-ride", "sign-off"],
    keywords: ["test", "ride", "test-ride", "sign", "sign-off", "signature", "handover", "customer"],
  },
  {
    triggers: ["opening greeting", "brand/name"],
    keywords: ["good", "morning", "afternoon", "thank", "calling", "sahayak", "name", "help", "assist"],
  },
  {
    triggers: ["asks permission", "putting on hold", "hold timeframe"],
    keywords: ["permission", "may i", "please", "hold", "30", "seconds", "check", "account", "wait"],
  },
  {
    triggers: ["thanks", "returning"],
    keywords: ["thank", "thanks", "holding", "waiting", "back", "patience", "appreciate"],
  },
  {
    triggers: ["paraphrases", "850", "debited"],
    keywords: ["confirm", "understand", "850", "order", "delivery", "debited", "deducted", "9 am", "morning"],
  },
  {
    triggers: ["empathy", "blaming"],
    keywords: ["sorry", "apologize", "understand", "frustrating", "inconvenience", "help", "assure"],
  },
  {
    triggers: ["4 concrete ticket", "ticket fields"],
    keywords: ["customer", "phone", "order", "id", "amount", "850", "time", "category", "ticket", "issue"],
  },
  {
    triggers: ["850 refund", "initiated"],
    keywords: ["850", "refund", "initiated", "processed", "started", "confirmed"],
  },
  {
    triggers: ["3–5", "3-5", "working-day timeline", "ticket reference"],
    keywords: ["3", "5", "days", "working", "business", "ticket", "reference", "number", "track"],
  },
  {
    triggers: ["closing check", "further help"],
    keywords: ["anything else", "further", "assist", "help", "thank", "day", "questions"],
  },
  // Generic / Custom Career Goal & Opportunity Fallback Rubric Rules (EN / HI / KN)
  {
    triggers: [
      "readiness checks",
      "tool, workspace, or system",
      "औजार, कार्यस्थान या सिस्टम",
      "ಉಪಕರಣ, ಸ್ಥಳ ಅಥವಾ ಸಿಸ್ಟಮ್",
    ],
    keywords: [
      "tool",
      "tools",
      "equipment",
      "scanner",
      "barcode",
      "machine",
      "app",
      "system",
      "device",
      "charger",
      "charge",
      "battery",
      "logged",
      "login",
      "clean",
      "cleaning",
      "workspace",
      "workstation",
      "station",
      "bay",
      "checklist",
      "register",
      "stock",
      "inventory",
      "uniform",
      "counter",
      "pipe",
      "wrench",
      "meter",
      "oven",
      "check",
      "verify",
      "inspect",
      "inspection",
      "prepare",
      "ready",
      "औजार",
      "औज़ार",
      "टूल",
      "टूलकिट",
      "उपकरण",
      "कार्यस्थान",
      "कार्यक्षेत्र",
      "कार्यस्थल",
      "साफ",
      "साफ़",
      "सफाई",
      "स्वच्छ",
      "चार्ज",
      "लॉगिन",
      "सिस्टम",
      "मशीन",
      "स्कैनर",
      "जाँच",
      "जांच",
      "निरीक्षण",
      "तैयार",
      "सूची",
      "रजिस्टर",
      "स्टॉक",
      "ಉಪಕರಣ",
      "ಸ್ಥಳ",
      "ಸ್ವಚ್ಛ",
      "ಚಾರ್ಜ್",
      "ಲಾಗಿನ್",
      "ಸಿಸ್ಟಮ್",
      "ಯಂತ್ರ",
      "ಸ್ಕ್ಯಾನರ್",
      "ಪರಿಶೀಲ",
      "ಸಿದ್ಧ",
      "ಪಟ್ಟಿ",
      "ಸ್ಟಾಕ್",
    ],
  },
  {
    triggers: [
      "error-prevention",
      "safety or error",
      "सुरक्षा या गलती",
      "ಸುರಕ್ಷತೆ ಅಥವಾ ತಪ್ಪು",
    ],
    keywords: [
      "safety",
      "safe",
      "hazard",
      "hazards",
      "ppe",
      "glove",
      "gloves",
      "mask",
      "shoes",
      "boots",
      "helmet",
      "apron",
      "dry",
      "switch",
      "power",
      "lock",
      "label",
      "labels",
      "verify",
      "double-check",
      "prevent",
      "prevention",
      "mistake",
      "mistakes",
      "error",
      "errors",
      "spill",
      "damage",
      "hygiene",
      "protective",
      "सुरक्षा",
      "सुरक्षित",
      "खतरा",
      "दस्ताने",
      "मास्क",
      "जूते",
      "हेलमेट",
      "एप्रन",
      "गलती",
      "गलतियों",
      "त्रुटि",
      "बच",
      "बचाव",
      "रोक",
      "सावधानी",
      "बंद",
      "लॉक",
      "ಸುರಕ್ಷತ",
      "ಸುರಕ್ಷಿತ",
      "ಅಪಾಯ",
      "ಕೈಗವಸು",
      "ಮಾಸ್ಕ್",
      "ಶೂ",
      "ಹೆಲ್ಮೆಟ್",
      "ಅಪ್ರಾನ್",
      "ತಪ್ಪು",
      "ತಡೆ",
      "ಎಚ್ಚರಿಕೆ",
      "ಆಫ್",
      "ಬಂದ್",
    ],
  },
  {
    triggers: [
      "starting the shift",
      "step-by-step sequence",
      "चरणबद्ध क्रम",
      "ಹಂತ-ಹಂತದ ಕ್ರಮ",
    ],
    keywords: [
      "sequence",
      "step-by-step",
      "step 1",
      "step 2",
      "step 3",
      "first",
      "second",
      "third",
      "finally",
      "shift",
      "open",
      "opening",
      "review",
      "priority",
      "schedule",
      "plan",
      "serving",
      "briefing",
      "log",
      "morning",
      "complete",
      "confirm",
      "supervisor",
      "checklist",
      "tasks",
      "शिफ्ट",
      "क्रम",
      "चरण",
      "कदम",
      "कार्य",
      "योजना",
      "प्राथमिकता",
      "समीक्षा",
      "प्रारंभ",
      "शुरू",
      "आरंभ",
      "पूरा",
      "ಶಿಫ್ಟ್",
      "ಕ್ರಮ",
      "ಹಂತ",
      "ಕೆಲಸ",
      "ಯೋಜನೆ",
      "ಪರಿಶೀಲ",
      "ಆರಂಭ",
      "ಪಟ್ಟಿ",
      "ಪೂರ್ಣ",
    ],
  },
  {
    triggers: [
      "original receipt",
      "transaction reference",
      "मूल रसीद",
      "ट्रांजेक्शन संदर्भ",
      "ಮೂಲ ರಸೀದಿ",
      "ಟ್ರಾನ್ಸಾಕ್ಷನ್ ಸಂಖ್ಯೆ",
    ],
    keywords: [
      "receipt",
      "bill",
      "invoice",
      "slip",
      "utr",
      "reference",
      "transaction",
      "id",
      "number",
      "date",
      "amount",
      "register",
      "original",
      "copy",
      "pos",
      "upi",
      "cash",
      "compare",
      "check",
      "verify",
      "रसीद",
      "बिल",
      "मूल",
      "संदर्भ",
      "नंबर",
      "संख्या",
      "तारीख",
      "दिनांक",
      "राशि",
      "रजिस्टर",
      "ट्रांजेक्शन",
      "लेन-देन",
      "मिलान",
      "जाँच",
      "जांच",
      "ರಸೀದಿ",
      "ಬಿಲ್",
      "ಮೂಲ",
      "ಸಂಖ್ಯೆ",
      "ದಿನಾಂಕ",
      "ಮೊತ್ತ",
      "ಪುಸ್ತಕ",
      "ಟ್ರಾನ್ಸಾಕ್ಷನ್",
      "ವ್ಯವಹಾರ",
      "ಪರಿಶೀಲ",
      "ಹೋಲಿಸಿ",
    ],
  },
  {
    triggers: [
      "rather than guessing",
      "records the finding",
      "अनुमान लगाने",
      "सही विवरण दर्ज",
      "ಊಹೆ ಮಾಡದೆ",
      "ನಿಖರ ವಿವರ",
    ],
    keywords: [
      "record",
      "records",
      "write",
      "note",
      "log",
      "entry",
      "enter",
      "accurate",
      "accurately",
      "exact",
      "actual",
      "correct",
      "finding",
      "difference",
      "mismatch",
      "count",
      "verify",
      "without guessing",
      "not guess",
      "don't guess",
      "do not guess",
      "never guess",
      "no guessing",
      "दर्ज",
      "लिख",
      "नोट",
      "सही",
      "सटीक",
      "वास्तविक",
      "विवरण",
      "अंतर",
      "रिकॉर्ड",
      "हिसाब",
      "गिनती",
      "बिना अनुमान",
      "अनुमान लगाए बिना",
      "अनुमान के बिना",
      "अनुमान न",
      "ದಾಖಲ",
      "ಬರೆ",
      "ನಮೂದ",
      "ನಿಖರ",
      "ಸರಿಯಾದ",
      "ವಾಸ್ತವ",
      "ವಿವರ",
      "ವ್ಯತ್ಯಾಸ",
      "ಲೆಕ್ಕ",
      "ಎಣಿಕೆ",
      "ಊಹೆ ಮಾಡದೆ",
      "ಊಹಿಸದೆ",
      "ಊಹೆ ಇಲ್ಲದೆ",
    ],
  },
  {
    triggers: [
      "escalates the mismatch",
      "on the same day",
      "उसी दिन स्पष्ट",
      "सूचित/समाधान",
      "ಅದೇ ದಿನ ಮೇಲ್ವಿಚಾರಕರಿಗೆ",
    ],
    keywords: [
      "escalate",
      "escalates",
      "inform",
      "report",
      "tell",
      "notify",
      "communicate",
      "share",
      "show",
      "supervisor",
      "manager",
      "lead",
      "senior",
      "team",
      "accounts",
      "same day",
      "today",
      "immediately",
      "promptly",
      "mismatch",
      "सूचित",
      "बता",
      "रिपोर्ट",
      "सुपरवाइजर",
      "मैनेजर",
      "वरिष्ठ",
      "उसी दिन",
      "आज",
      "तुरंत",
      "अंतर",
      "ತಿಳಿಸಿ",
      "ವರದಿ",
      "ಹೇಳಿ",
      "ಮೇಲ್ವಿಚಾರಕ",
      "ಮ್ಯಾನೇಜರ್",
      "ಹಿರಿಯ",
      "ಅದೇ ದಿನ",
      "ತಕ್ಷಣ",
      "ವ್ಯತ್ಯಾಸ",
    ],
  },
  {
    triggers: [
      "without arguing",
      "concern politely",
      "बिना बहस",
      "चिंता समझी",
      "ವಾದ ಮಾಡದೆ",
      "ಕಾಳಜಿಯನ್ನು ಒಪ್ಪಿಕೊಂಡಿರುವುದು",
    ],
    keywords: [
      "sorry",
      "apologize",
      "apology",
      "understand",
      "concern",
      "inconvenience",
      "delay",
      "polite",
      "politely",
      "calm",
      "calmly",
      "listen",
      "listening",
      "thank",
      "patient",
      "empathy",
      "respect",
      "without arguing",
      "not argue",
      "don't argue",
      "do not argue",
      "never argue",
      "without blaming",
      "never blame",
      "माफ",
      "माफ़",
      "माफी",
      "माफ़ी",
      "क्षमा",
      "खेद",
      "असुविधा",
      "चिंता",
      "समझ",
      "विनम्र",
      "शांत",
      "ध्यान",
      "सुन",
      "देरी",
      "बिना बहस",
      "बहस किए बिना",
      "बहस न",
      "बहस मत",
      "ಕ್ಷಮಿಸಿ",
      "ವಿಷಾದ",
      "ತೊಂದರೆ",
      "ಕಾಳಜಿ",
      "ಅರ್ಥ",
      "ವಿನಯ",
      "ಶಾಂತ",
      "ಆಲಿಸಿ",
      "ವಿಳಂಬ",
      "ಸಹಾನುಭೂತಿ",
      "ವಾದ ಮಾಡದೆ",
      "ವಾದಿಸದೆ",
      "ಜಗಳವಾಡದೆ",
    ],
  },
  {
    triggers: [
      "practical next action",
      "अगला कदम बताया",
      "ಮುಂದಿನ ಕ್ರಮ ತಿಳಿಸಿರುವುದು",
    ],
    keywords: [
      "action",
      "check",
      "status",
      "update",
      "priority",
      "expedite",
      "assign",
      "resolve",
      "fix",
      "dispatch",
      "process",
      "replace",
      "arrange",
      "track",
      "verify",
      "call",
      "contact",
      "confirm",
      "अगला",
      "कदम",
      "जाँच",
      "जांच",
      "स्थिति",
      "अपडेट",
      "तुरंत",
      "प्राथमिकता",
      "हल",
      "समाधान",
      "प्रक्रिया",
      "तैयार",
      "भेज",
      "शुरू",
      "ठीक",
      "ಮುಂದಿನ",
      "ಕ್ರಮ",
      "ಪರಿಶೀಲ",
      "ಸ್ಥಿತಿ",
      "ಅಪ್‌ಡೇಟ್",
      "ತಕ್ಷಣ",
      "ಆದ್ಯತೆ",
      "ಪರಿಹಾರ",
      "ಸರಿಪಡಿಸ",
      "ಪ್ರಕ್ರಿಯೆ",
      "ಕಳುಹಿಸ",
    ],
  },
  {
    triggers: [
      "honest timeframe",
      "anything else is needed",
      "ईमानदार समयसीमा",
      "संतुष्टि जाँच",
      "ಪ್ರಾಮಾಣಿಕ ಸಮಯಮಿತಿ",
      "ತೃಪ್ತಿ ಪ್ರಶ್ನೆ",
    ],
    keywords: [
      "minutes",
      "minute",
      "hour",
      "hours",
      "today",
      "tonight",
      "evening",
      "tomorrow",
      "within",
      "timeframe",
      "timeline",
      "__CLOCK_TIME__",
      "anything else",
      "satisfied",
      "assist",
      "further",
      "questions",
      "मिनट",
      "घंटे",
      "घंटा",
      "आज",
      "शाम",
      "कल",
      "समय",
      "समयसीमा",
      "भीतर",
      "तक",
      "संतुष्ट",
      "संतुष्टि",
      "मदद",
      "सहायता",
      "पूछ",
      "बताएं",
      "चाहिए",
      "ನಿಮಿಷ",
      "ಗಂಟೆ",
      "ಇಂದು",
      "ಸಂಜೆ",
      "ನಾಳೆ",
      "ಸಮಯ",
      "ಸಮಯಮಿತಿ",
      "ಒಳಗೆ",
      "ತೃಪ್ತಿ",
      "ಸಹಾಯ",
      "ಬೇಕೇ",
      "ತಿಳಿಸಿ",
    ],
  },
];

const STOP_WORDS = new Set([
  "that",
  "this",
  "with",
  "from",
  "they",
  "them",
  "your",
  "have",
  "will",
  "what",
  "when",
  "where",
  "which",
  "into",
  "about",
  "such",
  "before",
  "after",
  "including",
  "mentions",
  "identifies",
  "describes",
  "explains",
  "states",
  "notes",
  "correctly",
  "clearly",
  "shows",
  "includes",
  "step",
  "steps",
  "least",
  "concrete",
]);

function extractKeywordsForCriterion(criterion: string): string[] {
  const lower = criterion.toLowerCase();
  const matchedKeywords = new Set<string>();

  for (const rule of RUBRIC_KEYWORD_GROUPS) {
    if (rule.triggers.some((trig) => lower.includes(trig))) {
      for (const kw of rule.keywords) {
        matchedKeywords.add(kw);
      }
    }
  }

  // Only extract generic criterion words when no curated domain rule matched
  if (matchedKeywords.size === 0) {
    const criterionWords = lower
      .replace(/[^a-z0-9\u0900-\u097F\u0C80-\u0CFF\s-]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length >= 4 && !STOP_WORDS.has(w));

    for (const w of criterionWords) {
      matchedKeywords.add(w);
    }
  }

  return Array.from(matchedKeywords);
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesKeyword(lowerText: string, kw: string): boolean {
  if (kw === "__CLOCK_TIME__") {
    return /\b\d{1,2}(?::\d{2})?\s*(?:am|pm)\b/i.test(lowerText);
  }
  const isAscii = /^[\x00-\x7F]+$/.test(kw);
  if (!isAscii) {
    // Multi-word non-ASCII safe phrases match directly; single stems must avoid Kannada/Hindi negated tokens
    if (kw.includes(" ")) {
      return lowerText.includes(kw);
    }
    const tokens = lowerText
      .replace(/[^\u0900-\u097F\u0C80-\u0CFFa-z0-9\s-]/gi, " ")
      .split(/\s+/)
      .filter(Boolean);
    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i];
      if (!tok.includes(kw)) {
        continue;
      }
      // Reject Kannada negative participial suffix (-ಅದೆ/-ಸದೆ/-ಯದೆ/-ಳದೆ) & negative imperatives (-ಬೇಡಿ/-ಬಾರದು)
      if (/^[\u0C80-\u0CFF]+$/.test(tok)) {
        if (/(?:ಸದೆ|ಯದೆ|ಳದೆ|ಣದೆ|ಡದೆ|ತದೆ|ಬೇಡಿ|ಬಾರದು)$/.test(tok)) {
          continue;
        }
        const nextTok = tokens[i + 1] ?? "";
        if (/^(?:ಇಲ್ಲದೆ|ಇಲ್ಲ|ಬೇಡ|ಬಾರದು)$/.test(nextTok)) {
          continue;
        }
      }
      // Reject Hindi words immediately negated by बिना / मत / न / नहीं / छोड़ / फेंक
      if (/^[\u0900-\u097F]+$/.test(tok)) {
        const prev1 = tokens[i - 1] ?? "";
        const prev2 = tokens[i - 2] ?? "";
        const next1 = tokens[i + 1] ?? "";
        if (
          prev1 === "बिना" ||
          prev2 === "बिना" ||
          prev1 === "मत" ||
          prev1 === "न" ||
          next1 === "बिना" ||
          next1 === "मत" ||
          next1 === "छोड़" ||
          next1 === "फेंक"
        ) {
          continue;
        }
      }
      return true;
    }
    return false;
  }
  const regex = new RegExp(`(?:^|[^a-z0-9])${escapeRegExp(kw)}(?:$|[^a-z0-9])`, "i");
  return regex.test(lowerText);
}

const UNSAFE_CLAUSE_PATTERNS: RegExp[] = [
  // English unsafe / sabotaging instructions (after neutralizing safe double-negations like "do not skip")
  /\b(?:skip|ignore|omit)\s+(?:the\s+|any\s+|all\s+)?(?:inspection|check|checks|safety|cleaning|ppe|harness|gloves|shoes|ladder|receipt|bill|customer|racks?|steps?|plan|timeline|timeframe)\b/i,
  /\b(?:throw\s+away|discard|destroy|hide|conceal|fabricate|make\s+up|made-up|invent)\b/i,
  /\bwithout\s+(?:checking|inspecting|cleaning|safety|ppe|harness|gloves|telling|informing|reporting|notifying|recording|verifying|asking|waiting|listening|a\s+plan)\b/i,
  /\b(?:don't|do\s+not|never|no\s+need\s+to)\s+(?:tell|inform|report|notify|escalate|check|inspect|wear|record|write|verify|give\s+(?:a\s+)?time(?:frame)?|mention|apologize|listen|wait)\b/i,
  /\b(?:don't|do\s+not|never)\s+clean(?!\s+(?:at\s+1|at\s+midday|at\s+noon|in\s+hot|with\s+(?:detergent|soap|hard|abrasive)))/i,
  /\b(?:argue\s+with|blame\s+the\s+customer|yell\s+at|walk\s+away|randomly|blindly|by\s+guessing|guess\s+(?:a|any|the)\s+number)\b/i,
  /\b(?:leave\s+blocked\s+aisles|ignore\s+damaged\s+racks)\b/i,
  // Hindi unsafe / sabotaging instructions
  /बिना\s+(?:जाँच|जांच|सुरक्षा|सफाई|सफ़ाई|बताए|पूछे|देखे|औजार|औज़ार|टूल|तैयारी|रसीद|सुने|इंतजार)/,
  /(?:जाँच|जांच|सुरक्षा|सफाई|सफ़ाई|रसीद)\s+(?:किए\s+)?के\s+बिना/,
  /(?:मत|न|नहीं)\s+(?:बताएं|बताइए|बताओ|लिखें|लिखिए|दर्ज\s+करें|जांचें|जाँचें|पूछें|सुनें|दें)/,
  /(?:रसीद|बिल)\s*(?:को\s+)?(?:फेंक|फाड़|छोड़|छिपा)/,
  /(?:अनुमान\s+से|अंदाजे\s+से|मनगढ़ंत|झूठा|झूठी|गलत\s+(?:नंबर|संख्या))/,
  /(?:ग्राहक\s+से\s+(?:बहस\s+करें|लड़ें|झगड़ा\s+करें)|गलती\s+उनकी\s+है)/,
  // Kannada unsafe / sabotaging instructions
  /[\u0C80-\u0CFF]*(?:ಗೊಳಿಸದೆ|ಪರಿಶೀಲಿಸದೆ|ತಪಾಸಣೆ\s+ಮಾಡದೆ|ತಿಳಿಸದೆ|ಹೇಳದೆ|ದಾಖಲಿಸದೆ|ಬರೆಯದೆ|ಕಾಯದೆ|ಆಲಿಸದೆ|ಕೇಳದೆ|ಧರಿಸದೆ)/,
  /(?:ಸುರಕ್ಷತೆ|ಸುರಕ್ಷತಾ|ಉಪಕರಣ|ಹಾರ್ನೆಸ್|ಕೈಗವಸು|ರಸೀದಿ|ದಾಖಲೆ|ಸಮಯ|ಪರಿಹಾರ)\s+ಇಲ್ಲದೆ/,
  /(?:ಪರಿಶೀಲಿಸ|ದಾಖಲಿಸ|ತಿಳಿಸ|ಹೇಳ|ಸ್ವಚ್ಛಗೊಳಿಸ|ಕಾಯ|ಆಲಿಸ)ಬೇಡಿ/,
  /(?:ತಪ್ಪು\s+(?:ಸಂಖ್ಯೆ|ಲೆಕ್ಕ|ವಿವರ)|ಸುಳ್ಳು\s+(?:ಸಂಖ್ಯೆ|ಲೆಕ್ಕ)|ಜಗಳವಾಡಿ|ವಾದ\s+ಮಾಡಿ|ಹೇಳದೆ\s+ಬಿಟ್ಟುಬಿಡಿ|ಎಸೆಯಿರಿ)/,
];

function isUnsafeOrNegatedClause(clause: string): boolean {
  const neutralized = clause
    .replace(
      /\b(?:do\s+not|don't|never|avoid)\s+(?:skip|ignore|throw\s+away|discard|fabricate|make\s+up|argue|blame|guess|rush|leave)\b/gi,
      " ",
    )
    .replace(
      /(?:फेंक|छोड़|नजरअंदाज|अनदेखा|बहस|अनुमान)\s*(?:न|मत|नहीं)\s*(?:करें|लगाएं|दें)?/g,
      " ",
    )
    .replace(
      /(?:ಬಿಸಾಡ|ಬಿಟ್ಟುಬಿಡ|ನಿರ್ಲಕ್ಷಿಸ|ಜಗಳವಾಡ|ವಾದ\s*ಮಾಡ)\s*(?:ಬೇಡಿ|ಬಾರದು|ಇಲ್ಲ)?/g,
      " ",
    );

  return UNSAFE_CLAUSE_PATTERNS.some((pattern) => pattern.test(neutralized));
}

function extractSafeClausesText(cleanedText: string): string {
  if (!cleanedText) return "";
  const rawClauses = cleanedText
    .replace(/\s+\b(and\s+(?:do\s+not|don't|never|without|skip|ignore|मत|न))\b/gi, "; $1")
    .split(/(?:[.!?\n;।]+|,\s*(?=[a-zA-Z\u0900-\u097F\u0C80-\u0CFF])|\s+\b(?:but|पर|लेकिन|ಆದರೆ)\b\s+)/)
    .map((s) => s.trim())
    .filter(Boolean);

  const safeClauses = rawClauses.filter((c) => !isUnsafeOrNegatedClause(c));
  return safeClauses.join(". ");
}

const HEDGING_PATTERNS: RegExp[] = [
  /\b(?:honestly\s+)?i\s+(?:really\s+)?(?:don'?t|do\s+not)\s+know(?:\s+(?:initially|at\s+first|right\s+now))?(?:\s*,\s*but\b|\s+but\b)?/gi,
  /\b(?:really\s+)?(?:don'?t|do\s+not)\s+know(?:\s+(?:initially|at\s+first))?(?:\s*,\s*but\b|\s+but\b)?/gi,
  /\bidk\b/gi,
  /\bi\s+have\s+no\s+idea\b/gi,
  /\bno\s+idea\b/gi,
  /\bi\s*(?:'m|am)\s+not\s+(?:really\s+)?sure(?:\s+(?:initially|at\s+first))?(?:\s*,\s*but\b|\s+but\b)?/gi,
  /\bnot\s+(?:really\s+)?sure(?:\s+(?:initially|at\s+first))?(?:\s*,\s*but\b|\s+but\b)?/gi,
  /\bnot\s+confident\b/gi,
  /\bunsure\b/gi,
  /\bi\s+guess\b/gi,
  /\bi\s+suppose\b/gi,
  /\bmaybe\b/gi,
  /\bperhaps\b/gi,
  /\bprobably\b/gi,
  /मुझे\s+पक्का\s+नहीं\s+पता/g,
  /मुझे\s+नहीं\s+पता/g,
  /पता\s+नहीं/g,
  /पक्का\s+नहीं/g,
  /शायद/g,
  /ನನಗೆ\s+ಗೊತ್ತಿಲ್ಲ/g,
  /ಗೊತ್ತಿಲ್ಲ/g,
  /ಖಚಿತವಾಗಿಲ್ಲ/g,
  /ಬಹುಶಃ/g,
];

const VAGUE_NON_STEP_WORDS = new Set([
  "i",
  "we",
  "you",
  "will",
  "would",
  "can",
  "could",
  "should",
  "just",
  "only",
  "simply",
  "also",
  "then",
  "next",
  "first",
  "firstly",
  "second",
  "secondly",
  "third",
  "thirdly",
  "fourth",
  "fourthly",
  "finally",
  "lastly",
  "initially",
  "here",
  "there",
  "correct",
  "step",
  "steps",
  "and",
  "or",
  "but",
  "the",
  "a",
  "an",
  "to",
  "for",
  "of",
  "on",
  "in",
  "at",
  "by",
  "with",
  "it",
  "this",
  "that",
  "my",
  "our",
  "do",
  "be",
  "am",
  "is",
  "are",
  "climb",
  "go",
  "start",
  "started",
  "begin",
  "work",
  "working",
  "things",
  "something",
  "anything",
  "everything",
]);

export interface AnswerAnalysis {
  originalWordCount: number;
  cleanedText: string;
  cleanedWordCount: number;
  substantiveWordCount: number;
  strippedWordCount: number;
  hedgingRatio: number;
  isMostlyHedging: boolean;
  hasMinimumSubstance: boolean;
  concreteStepCount: number;
}

export function stripHedgingText(text: string): string {
  let cleaned = text;
  for (const pattern of HEDGING_PATTERNS) {
    cleaned = cleaned.replace(pattern, " ");
  }
  cleaned = cleaned
    .replace(/\s*[,;:]+\s*(?=[,;:.!?]|$)/g, "")
    .replace(/^[\s,;:.–-]+/, "")
    .replace(/([.!?]\s+)[,;:\s-]+/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
  return cleaned;
}

export function countConcreteSteps(cleanedText: string): number {
  if (!cleanedText) return 0;

  const normalized = cleanedText
    .replace(/(?:^|[\s;])(\d{1,2})[.)]\s+/g, "\n")
    .replace(/(?:^|\s)step\s+\d+\s*[:.-]?\s+/gi, "\n")
    .replace(/,\s*(?:and\s+)?then\s+/gi, "\n")
    .replace(/\b(?:first(?:ly)?|second(?:ly)?|third(?:ly)?|fourth(?:ly)?|fifth(?:ly)?|next|then|finally|lastly)\b[:,]?\s+/gi, "\n");

  const rawSegments = normalized
    .split(/[.!?\n;]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  let concreteCount = 0;
  for (const seg of rawSegments) {
    const words = seg
      .toLowerCase()
      .replace(/[^a-z0-9\u0900-\u097F\u0C80-\u0CFF\s-]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    const substantiveWords = words.filter((w) => !VAGUE_NON_STEP_WORDS.has(w) && w.length >= 2);
    if (words.length >= 3 && substantiveWords.length >= 2) {
      concreteCount += 1;
    }
  }

  return concreteCount;
}

export function analyzeAnswerForGrading(answer: string): AnswerAnalysis {
  const originalTrimmed = answer.trim();
  const originalWordCount = originalTrimmed.split(/\s+/).filter(Boolean).length;
  const cleanedText = stripHedgingText(originalTrimmed);
  const cleanedWords = cleanedText
    ? cleanedText
        .toLowerCase()
        .replace(/[^a-z0-9\u0900-\u097F\u0C80-\u0CFF\s-]/g, " ")
        .split(/\s+/)
        .filter(Boolean)
    : [];
  const cleanedWordCount = cleanedText ? cleanedText.split(/\s+/).filter(Boolean).length : 0;
  const substantiveWordCount = cleanedWords.filter(
    (w) => !VAGUE_NON_STEP_WORDS.has(w) && w.length >= 2,
  ).length;
  const strippedWordCount = Math.max(0, originalWordCount - cleanedWordCount);
  const hedgingRatio = originalWordCount > 0 ? strippedWordCount / originalWordCount : 1;

  // Treat as mostly hedging only when little or no concrete technical content remains after stripping hedging
  const isMostlyHedging =
    cleanedWordCount === 0 ||
    (strippedWordCount > 0 && cleanedWordCount < 6) ||
    (strippedWordCount > 0 && substantiveWordCount < 4);

  // Permit concise (5-7 word) answers only when there is zero hedging and every word is substantive
  const hasMinimumSubstance =
    (cleanedWordCount >= 8 && substantiveWordCount >= 4) ||
    (strippedWordCount === 0 && cleanedWordCount >= 5 && substantiveWordCount >= 5);
  const concreteStepCount = countConcreteSteps(cleanedText);

  return {
    originalWordCount,
    cleanedText,
    cleanedWordCount,
    substantiveWordCount,
    strippedWordCount,
    hedgingRatio,
    isMostlyHedging,
    hasMinimumSubstance,
    concreteStepCount,
  };
}

/**
 * Shared deterministic rubric scoring rule:
 * - 3-point rubric: >= 2/3 criteria required to pass.
 * - 4-point rubric: >= 3/4 criteria required to pass.
 * - Base score = Math.round((metCount / totalPoints) * 100).
 * - Detail adjustment is bounded to [-5, +5] and strictly clamped so it NEVER crosses
 *   the pass/fail threshold (failing < 60, partial pass 60..85, full pass 95..100).
 */
export function computeRubricScore(
  metCount: number,
  totalPoints: number,
  detailDelta: number,
  qualifies: boolean,
): { score: number; passed: boolean; requiredToPass: number } {
  const safeTotal = Math.max(1, totalPoints);
  const requiredToPass = safeTotal >= 4 ? safeTotal - 1 : Math.min(safeTotal, 2);

  if (!qualifies || metCount <= 0) {
    return { score: 0, passed: false, requiredToPass };
  }

  const baseScore = Math.round((metCount / safeTotal) * 100);
  const boundedDelta = Math.max(-5, Math.min(5, Math.round(detailDelta)));
  const adjusted = baseScore + boundedDelta;

  if (metCount < requiredToPass) {
    return {
      score: Math.max(0, Math.min(55, adjusted)),
      passed: false,
      requiredToPass,
    };
  }

  if (metCount < safeTotal) {
    return {
      score: Math.max(60, Math.min(85, adjusted)),
      passed: true,
      requiredToPass,
    };
  }

  return {
    score: Math.max(95, Math.min(100, adjusted)),
    passed: true,
    requiredToPass,
  };
}

export function findCleanEvidenceQuote(
  cleanedAnswer: string,
  matchedKeywords: string[] = [],
): string {
  if (!cleanedAnswer) return "";
  const clauses = cleanedAnswer
    .split(/(?<=[.!?।\n;])\s+/)
    .map((s) => stripHedgingText(s))
    .filter(Boolean);

  let bestClause = "";
  let bestHits = 0;

  for (const clause of clauses) {
    const lowerClause = clause.toLowerCase();
    const hits = matchedKeywords.filter((kw) => matchesKeyword(lowerClause, kw)).length;
    if (hits > bestHits) {
      bestHits = hits;
      bestClause = clause;
    }
  }

  const chosen = bestClause || clauses[0] || cleanedAnswer;
  return chosen.length > 110 ? `${chosen.slice(0, 107).trim()}...` : chosen;
}

export function buildFallbackGrade(
  answer: string,
  rubric: string[],
  language: SupportedLanguage,
): FallbackGradeResult {
  const analysis = analyzeAnswerForGrading(answer);
  const safeCleanedText = extractSafeClausesText(analysis.cleanedText);
  const lowerSafeCleaned = safeCleanedText.toLowerCase();

  const criteriaList = rubric.slice(0, 6);
  const totalPoints = criteriaList.length || 3;
  const qualifies =
    !analysis.isMostlyHedging &&
    analysis.hasMinimumSubstance &&
    safeCleanedText.trim().length > 0;

  const rubricEval: FallbackRubricItem[] = [];
  let totalMatchedKeywordHits = 0;

  for (const criterion of criteriaList) {
    const keywordGroup = extractKeywordsForCriterion(criterion);
    const matched = keywordGroup.filter((kw) => matchesKeyword(lowerSafeCleaned, kw));
    const met = qualifies && matched.length >= 2;
    totalMatchedKeywordHits += matched.length;

    rubricEval.push({
      point: criterion,
      met,
      evidence: met ? findCleanEvidenceQuote(safeCleanedText, matched) : "",
    });
  }

  const metCount = rubricEval.filter((r) => r.met).length;

  // Bounded detail adjustment [-5, +5]: rewards extra keyword depth without ever crossing pass/fail
  const expectedHitsForMet = Math.max(1, metCount * 2);
  const detailDelta =
    metCount === totalPoints
      ? totalMatchedKeywordHits >= totalPoints * 2
        ? 0
        : -3
      : Math.max(-5, Math.min(5, totalMatchedKeywordHits - expectedHitsForMet));

  const { score, passed, requiredToPass } = computeRubricScore(
    metCount,
    totalPoints,
    detailDelta,
    qualifies,
  );

  if (!qualifies) {
    const missedPoints = rubricEval.map((r) => `• ${r.point}`).join(" ");
    const reasonEn = analysis.isMostlyHedging
      ? "Your answer is mostly hedging or uncertainty without concrete workplace actions"
      : "Your answer is too brief or vague and lacks concrete technical steps";
    const reasonHi = analysis.isMostlyHedging
      ? "आपका उत्तर मुख्य रूप से अनिश्चित शब्दों पर आधारित है और इसमें ठोस कदम नहीं हैं"
      : "आपका उत्तर बहुत संक्षिप्त या अस्पष्ट है और इसमें ठोस व्यावहारिक विवरण नहीं हैं";
    const reasonKn = analysis.isMostlyHedging
      ? "ನಿಮ್ಮ ಉತ್ತರದಲ್ಲಿ ಹೆಚ್ಚಾಗಿ ಅನಿಶ್ಚಿತ ಪದಗಳಿವೆ ಮತ್ತು ಸ್ಪಷ್ಟ ಕ್ರಮಗಳಿಲ್ಲ"
      : "ನಿಮ್ಮ ಉತ್ತರವು ತುಂಬಾ ಸಂಕ್ಷಿಪ್ತ ಅಥವಾ ಅಸ್ಪಷ್ಟವಾಗಿದೆ ಮತ್ತು ಸ್ಪಷ್ಟ ತಾಂತ್ರಿಕ ಹಂತಗಳಿಲ್ಲ";

    const briefFeedback: Record<SupportedLanguage, string> = {
      en: `${reasonEn}, so it did not pass. Write clear, concrete details covering: ${missedPoints}`,
      hi: `${reasonHi}, इसलिए यह पास नहीं हुआ। कृपया इन रूब्रिक बिंदुओं को स्पष्ट लिखें: ${missedPoints}`,
      kn: `${reasonKn}, ಆದ್ದರಿಂದ ಉತ್ತೀರ್ಣವಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಈ ಮಾನದಂಡಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಬರೆಯಿರಿ: ${missedPoints}`,
    };

    return {
      rubric: rubricEval.map((r) => ({ ...r, met: false, evidence: "" })),
      score: 0,
      passed: false,
      feedback: briefFeedback[language],
    };
  }

  const metNames = rubricEval.filter((r) => r.met).map((r) => r.point);
  const missedNames = rubricEval.filter((r) => !r.met).map((r) => r.point);

  let feedback = "";
  if (language === "en") {
    const metPart =
      metNames.length > 0
        ? `Met (${metNames.length}/${totalPoints}): ${metNames.join("; ")}.`
        : `Met (0/${totalPoints}): None of the rubric criteria were clearly addressed.`;
    const missedPart =
      missedNames.length > 0
        ? ` Missed: ${missedNames.join("; ")}. Add specific actions, tools, or numbers for the missed criteria (at least ${requiredToPass} of ${totalPoints} required to pass).`
        : ` All ${totalPoints} rubric criteria were clearly demonstrated with specific practical steps.`;
    feedback = `${metPart}${missedPart}`;
  } else if (language === "hi") {
    const metPart =
      metNames.length > 0
        ? `पूर्ण बिंदु (${metNames.length}/${totalPoints}): ${metNames.join("; ")}।`
        : `पूर्ण बिंदु (0/${totalPoints}): कोई भी रूब्रिक बिंदु स्पष्ट रूप से शामिल नहीं था।`;
    const missedPart =
      missedNames.length > 0
        ? ` छूटे हुए बिंदु: ${missedNames.join("; ")}। कृपया इन बिंदुओं के लिए सटीक कदम और विवरण जोड़ें (पास होने के लिए कम से कम ${requiredToPass}/${totalPoints} आवश्यक)।`
        : ` सभी ${totalPoints} रूब्रिक बिंदु स्पष्ट रूप से पूरे किए गए।`;
    feedback = `${metPart}${missedPart}`;
  } else {
    const metPart =
      metNames.length > 0
        ? `ಪೂರೈಸಿದ ಅಂಶಗಳು (${metNames.length}/${totalPoints}): ${metNames.join("; ")}.`
        : `ಪೂರೈಸಿದ ಅಂಶಗಳು (0/${totalPoints}): ಯಾವುದೇ ಮಾನದಂಡ ಸ್ಪಷ್ಟವಾಗಿಲ್ಲ.`;
    const missedPart =
      missedNames.length > 0
        ? ` ಬಿಟ್ಟುಹೋದ ಅಂಶಗಳು: ${missedNames.join("; ")}. ದಯವಿಟ್ಟು ಇವುಗಳಿಗೆ ನಿಖರ ಹಂತಗಳನ್ನು ಸೇರಿಸಿ (ಉತ್ತೀರ್ಣವಾಗಲು ಕನಿಷ್ಠ ${requiredToPass}/${totalPoints} ಅಗತ್ಯವಿದೆ).`
        : ` ಎಲ್ಲಾ ${totalPoints} ಮಾನದಂಡಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಲಾಗಿದೆ.`;
    feedback = `${metPart}${missedPart}`;
  }

  return {
    rubric: rubricEval,
    score,
    passed,
    feedback,
  };
}
