// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Configure i18n
i18n
  .use(Backend) // Load translations from a server (optional)
  .use(LanguageDetector) // Detect user's language automatically (optional)
  .use(initReactI18next) // Integrate i18n with React
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug logs to see what's happening
    interpolation: {
      escapeValue: false, // Not needed for React
    },
    resources: {
      en: {
        translation: {
          dashboard: {
            heading: "Welcome to your Dashboard",
            text: "Here you can view your balance and manage your funds.",
            view_balance: "View Balance",
            deposit_money: "Deposit Money",
            withdraw_money: "Withdraw Money",
            send_money: "Send Money"
          }
        }
      },
      es: {
        translation: {
          dashboard: {
            heading: "Bienvenido a tu Panel",
            text: "Aquí puedes ver tu saldo y gestionar tus fondos.",
            view_balance: "Ver Saldo",
            deposit_money: "Depositar Dinero",
            withdraw_money: "Retirar Dinero",
            send_money: "Enviar Dinero"
          }
        }
      },
      hi: {
        translation: {
          dashboard: {
            heading: "आपके डैशबोर्ड में स्वागत है",
            text: "यहां आप अपना बैलेंस देख सकते हैं और अपने फंड्स का प्रबंधन कर सकते हैं।",
            view_balance: "बैलेंस देखें",
            deposit_money: "पैसे जमा करें",
            withdraw_money: "पैसे निकालें",
            send_money: "पैसे भेजें"
          }
        }
      },
      ta: {
        translation: {
          dashboard: {
            heading: "உங்கள் டாஷ்போர்டிற்கு வரவேற்கின்றேன்",
            text: "இங்கு நீங்கள் உங்கள் இருப்பு பார்க்கவும் உங்கள் நிதிகளை மேலாண்மை செய்யவும் முடியும்.",
            view_balance: "இருப்பை பார்க்கவும்",
            deposit_money: "பணம் வைப்பு",
            withdraw_money: "பணம் திரும்பப் பெறு",
            send_money: "பணம் அனுப்பு"
          }
        }
      },
      te: {
        translation: {
          dashboard: {
            heading: "మీ డ్యాష్‌బోర్డులో స్వాగతం",
            text: "ఇక్కడ మీరు మీ బ్యాలెన్స్‌ను చూడవచ్చు మరియు మీ నిధులను నిర్వహించవచ్చు.",
            view_balance: "బ్యాలెన్స్ చూడండి",
            deposit_money: "డబ్బు పెడితే",
            withdraw_money: "డబ్బు తీసుకోండి",
            send_money: "డబ్బు పంపండి"
          }
        }
      },
      ka: {
        translation: {
          dashboard: {
            heading: "ನಿಮ್ಮ ಡ್ಯಾಶ್ಬೋರ್ಡ್‌ಗೆ ಸ್ವಾಗತ",
            text: "ಇಲ್ಲಿ ನೀವು ನಿಮ್ಮ ಶೇಷವನ್ನು ನೋಡಬಹುದು ಮತ್ತು ನಿಮ್ಮ ಹಣವನ್ನು ನಿರ್ವಹಿಸಬಹುದು.",
            view_balance: "ಶೇಷವನ್ನು ನೋಡಿ",
            deposit_money: "ಹಣ ಹೂಡಿರಿ",
            withdraw_money: "ಹಣ ಹಿಂತೆಗೆದುಕೊಳ್ಳಿ",
            send_money: "ಹಣ ಕಳುಹಿಸಿ"
          }
        }
      }
    },
  });

export default i18n;
