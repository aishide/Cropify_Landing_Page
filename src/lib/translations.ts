export type Language = "en" | "hi" | "mr";

const translations = {
  en: {
    languageLabel: "Language",
    navbar: {
      toggleTheme: "Toggle dark mode",
      toggleMenu: "Toggle menu",
      enterSandbox: "Enter Sandbox",
    },
    footer: {
      description:
        "The friendly, easy-to-use Digital Twin platform enabling growers to simulate crops, forecast weather, and scale carbon conservation.",
      explore: "Explore Cropify",
      launchSandbox: "Launch Sandbox",
      terms: "System Terms",
      documentation: "Documentation",
      help: "Help & Support",
      copyright: "Open-Core Farm License.",
      questions: [
        {
          question: "What is Cropify?",
          answer:
            "Cropify is an interactive experience that shows how digital tools can help farmers plan and manage their farms.",
        },
        {
          question: "What can I explore in the sandbox?",
          answer:
            "Explore a visual farm story featuring crop planning, soil insights, and virtual growing scenarios.",
        },
        {
          question: "How do I get started?",
          answer:
            "Choose “Launch Sandbox” or “Enter Sandbox” to explore the Cropify experience.",
        },
      ],
    },
    video: {
      aiPlatform: "Neuro-Symbolic AI Platform",
      digitalTwinTitle: "Cropify OS: Creating Your Digital Twin",
      digitalTwinDescription:
        "Real-time satellite & drone mapping digitizes your physical farm into an active 3D virtual sandbox.",
      scrollDiagnostics: "Scroll to diagnostics",
      simulationTitle: "Risk-Free Virtual Simulation",
      simulationDescription:
        "Test crop rotations and water schedules in the virtual farm before spending money in the real world.",
      profitBoost: "+25% Profit Boost",
      waterSaved: "1,200L Water Saved",
      carbonCredits: "+$420 Carbon Credits",
      soilDiagnostics: "Instant Soil Diagnostics",
      npkHealth: "NPK HEALTH",
      excellent: "94% Excellent",
      moisture: "MOISTURE",
      optimum: "42% Optimum",
      do: "DO:",
      dont: "DON'T:",
      plantAdvice: "Tomato Seeds (+22% predicted)",
      irrigationAdvice: "Flood irrigate (Rain forecasted)",
      transformTitle: "Ready to Transform Decisions?",
      transformDescription:
        "Join thousands of modern farmers optimizing yield and cutting costs.",
      launchApplication: "🚀 Launch Application",
      simulationProgress: "Simulation Progress",
      virtualTwinActive: "Virtual Twin Active",
      aiPlatformShort: "🌱 AI PLATFORM",
      plantHybrid: "✅ DO: Plant Tomato Hybrid Seeds (+22%)",
      rainIncoming: "❌ DON'T: Irrigate today — Rain incoming",
      transformFarmTitle: "Ready to Transform Your Farm Decisions?",
      modalTitle: "Entering Virtual Twin Sandbox!",
      modalDescription:
        "System is synchronizing real-time multispectral drone arrays and loading the Neo4j Knowledge Graph. Prepare for intercropping recommendations!",
      telemetry: "SYS_TELEMETRY: ONLINE (v3.2.1-PROLOG)",
      closeConsole: "Close Console",
    },
  },
  hi: {
    languageLabel: "भाषा",
    navbar: {
      toggleTheme: "डार्क मोड बदलें",
      toggleMenu: "मेनू खोलें या बंद करें",
      enterSandbox: "सैंडबॉक्स खोलें",
    },
    footer: {
      description:
        "किसानों के लिए एक सरल डिजिटल ट्विन प्लेटफ़ॉर्म, जहाँ वे फसलों का अनुकरण कर सकते हैं, मौसम का अनुमान देख सकते हैं और टिकाऊ खेती की योजना बना सकते हैं।",
      explore: "Cropify देखें",
      launchSandbox: "सैंडबॉक्स खोलें",
      terms: "सिस्टम की शर्तें",
      documentation: "दस्तावेज़",
      help: "सहायता और समर्थन",
      copyright: "ओपन-कोर फार्म लाइसेंस।",
      questions: [
        {
          question: "Cropify क्या है?",
          answer:
            "Cropify एक इंटरैक्टिव अनुभव है जो दिखाता है कि डिजिटल टूल किसानों को खेत की योजना बनाने और प्रबंधन में कैसे मदद कर सकते हैं।",
        },
        {
          question: "सैंडबॉक्स में क्या देख सकते हैं?",
          answer:
            "फसल योजना, मिट्टी की जानकारी और खेती के आभासी परिदृश्यों वाली एक दृश्य कहानी देखें।",
        },
        {
          question: "शुरुआत कैसे करें?",
          answer:
            "Cropify अनुभव देखने के लिए “सैंडबॉक्स खोलें” चुनें।",
        },
      ],
    },
    video: {
      aiPlatform: "न्यूरो-सिम्बॉलिक AI प्लेटफ़ॉर्म",
      digitalTwinTitle: "Cropify OS: अपना डिजिटल ट्विन बनाएं",
      digitalTwinDescription:
        "उपग्रह और ड्रोन मैपिंग आपके खेत को एक सक्रिय 3D आभासी सैंडबॉक्स में बदलती है।",
      scrollDiagnostics: "मिट्टी की जाँच देखने के लिए स्क्रॉल करें",
      simulationTitle: "जोखिम-मुक्त आभासी अनुकरण",
      simulationDescription:
        "वास्तविक खेत में खर्च करने से पहले फसल चक्र और सिंचाई योजनाएँ आज़माएँ।",
      profitBoost: "+25% लाभ वृद्धि",
      waterSaved: "1,200 लीटर पानी बचा",
      carbonCredits: "+$420 कार्बन क्रेडिट",
      soilDiagnostics: "तुरंत मिट्टी की जाँच",
      npkHealth: "NPK स्वास्थ्य",
      excellent: "94% उत्कृष्ट",
      moisture: "नमी",
      optimum: "42% उपयुक्त",
      do: "करें:",
      dont: "न करें:",
      plantAdvice: "टमाटर के बीज (+22% अनुमानित)",
      irrigationAdvice: "खेत में पानी न भरें (बारिश का अनुमान)",
      transformTitle: "बेहतर फैसलों की ओर बढ़ें",
      transformDescription:
        "उपज बढ़ाने और लागत घटाने वाले आधुनिक किसानों के साथ जुड़ें।",
      launchApplication: "🚀 ऐप शुरू करें",
      simulationProgress: "अनुकरण की प्रगति",
      virtualTwinActive: "आभासी ट्विन सक्रिय",
      aiPlatformShort: "🌱 AI प्लेटफ़ॉर्म",
      plantHybrid: "✅ करें: टमाटर के हाइब्रिड बीज लगाएँ (+22%)",
      rainIncoming: "❌ न करें: आज सिंचाई — बारिश आने वाली है",
      transformFarmTitle: "अपने खेत के फैसलों को बेहतर बनाएं",
      modalTitle: "आभासी ट्विन सैंडबॉक्स खुल रहा है!",
      modalDescription:
        "सिस्टम ड्रोन डेटा से जुड़ रहा है और खेत की जानकारी लोड कर रहा है। फसल संयोजन के सुझावों के लिए तैयार रहें!",
      telemetry: "सिस्टम स्थिति: ऑनलाइन",
      closeConsole: "बंद करें",
    },
  },
  mr: {
    languageLabel: "भाषा",
    navbar: {
      toggleTheme: "डार्क मोड बदला",
      toggleMenu: "मेनू उघडा किंवा बंद करा",
      enterSandbox: "सँडबॉक्स उघडा",
    },
    footer: {
      description:
        "शेतकऱ्यांसाठी सोपे डिजिटल ट्विन व्यासपीठ—पिकांचे नियोजन, हवामानाचा अंदाज आणि शाश्वत शेतीसाठी मदत.",
      explore: "Cropify पाहा",
      launchSandbox: "सँडबॉक्स उघडा",
      terms: "सिस्टमच्या अटी",
      documentation: "मार्गदर्शक",
      help: "मदत आणि सहाय्य",
      copyright: "ओपन-कोअर फार्म परवाना.",
      questions: [
        {
          question: "Cropify म्हणजे काय?",
          answer:
            "Cropify हा परस्परसंवादी अनुभव आहे, जो डिजिटल साधने शेतकऱ्यांना शेतीचे नियोजन आणि व्यवस्थापन करण्यास कशी मदत करतात हे दाखवतो.",
        },
        {
          question: "सँडबॉक्समध्ये काय पाहता येईल?",
          answer:
            "पीक नियोजन, मातीची माहिती आणि आभासी शेतीचे पर्याय असलेली दृश्य कथा पाहा.",
        },
        {
          question: "सुरुवात कशी करावी?",
          answer:
            "Cropify अनुभव पाहण्यासाठी “सँडबॉक्स उघडा” निवडा.",
        },
      ],
    },
    video: {
      aiPlatform: "न्यूरो-सिम्बॉलिक AI व्यासपीठ",
      digitalTwinTitle: "Cropify OS: तुमचा डिजिटल ट्विन तयार करा",
      digitalTwinDescription:
        "उपग्रह आणि ड्रोन मॅपिंग तुमच्या शेताचे सक्रिय 3D आभासी सॅंडबॉक्समध्ये रूपांतर करते.",
      scrollDiagnostics: "मातीची तपासणी पाहण्यासाठी स्क्रोल करा",
      simulationTitle: "जोखीममुक्त आभासी अनुकरण",
      simulationDescription:
        "प्रत्यक्ष शेतात खर्च करण्यापूर्वी पीक फेरपालट आणि पाणी देण्याचे वेळापत्रक तपासा.",
      profitBoost: "+25% नफा वाढ",
      waterSaved: "1,200 लिटर पाण्याची बचत",
      carbonCredits: "+$420 कार्बन क्रेडिट्स",
      soilDiagnostics: "मातीची त्वरित तपासणी",
      npkHealth: "NPK आरोग्य",
      excellent: "94% उत्कृष्ट",
      moisture: "ओलावा",
      optimum: "42% योग्य",
      do: "करा:",
      dont: "करू नका:",
      plantAdvice: "टोमॅटो बियाणे (+22% अंदाजित)",
      irrigationAdvice: "शेतात पाणी भरू नका (पावसाचा अंदाज)",
      transformTitle: "उत्तम निर्णयांकडे वाटचाल करा",
      transformDescription:
        "उत्पन्न वाढवणाऱ्या आणि खर्च कमी करणाऱ्या आधुनिक शेतकऱ्यांसोबत सहभागी व्हा.",
      launchApplication: "🚀 अॅप सुरू करा",
      simulationProgress: "अनुकरणाची प्रगती",
      virtualTwinActive: "आभासी ट्विन सक्रिय",
      aiPlatformShort: "🌱 AI व्यासपीठ",
      plantHybrid: "✅ करा: टोमॅटोची संकरित बियाणे लावा (+22%)",
      rainIncoming: "❌ करू नका: आज पाणी देऊ नका — पाऊस येणार आहे",
      transformFarmTitle: "तुमच्या शेतीचे निर्णय अधिक चांगले करा",
      modalTitle: "आभासी ट्विन सँडबॉक्स सुरू होत आहे!",
      modalDescription:
        "सिस्टम ड्रोन डेटाशी जोडत आहे आणि शेताची माहिती लोड करत आहे. आंतरपीक शिफारशींसाठी तयार राहा!",
      telemetry: "सिस्टम स्थिती: ऑनलाइन",
      closeConsole: "बंद करा",
    },
  },
} as const;

export default translations;
