const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services", navGallery: "Gallery", navFatwas: "Fatwas", navContact: "Contact Us",
        navLangToggle: "العربية / English / اردو",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        servicesSectionTitle: "Our Services",
        service1Title: "Islamic Marriage", service2Title: "Divorce & Khula", service3Title: "Consultations",
        service4Title: "Ruqyah Shariah", service5Title: "Quran Courses", service6Title: "Arabic Language",
        whatsappBtnText: "WhatsApp",
        footerText: "© 2024 Shariah Council. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "خدماتنا", navGallery: "المعرض", navFatwas: "الفتاوى", navContact: "اتصل بنا",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "المجلس الشرعي للأسرة المسلمة في لندن",
        heroText: "إرشاد إسلامي لحياة مستقرة في بيئة آمنة ومهنية.",
        applyNowBtn: "اتصل بنا الآن",
        introSectionTitle: "من نحن",
        servicesSectionTitle: "خدماتنا",
        service1Title: "الزواج الإسلامي", service2Title: "الطلاق والخلع", service3Title: "الاستشارات",
        service4Title: "الرقية الشرعية", service5Title: "دورات القرآن", service6Title: "اللغة العربية",
        whatsappBtnText: "واتساب",
        footerText: "© 2024 المجلس الشرعي. جميع الحقوق محفوظة."
    },
    ur: {
        navHome: "ہوم", navAbout: "ہمارے بارے میں", navServices: "خدمات", navGallery: "گیلری", navFatwas: "فتاویٰ", navContact: "رابطہ کریں",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "لندن میں مسلم خاندان کے لیے شریعہ کونسل",
        heroText: "محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        servicesSectionTitle: "ہماری خدمات",
        service1Title: "اسلامی نکاح", service2Title: "طلاق اور خلع", service3Title: "مشاورت",
        service4Title: "رقیہ شرعیہ", service5Title: "قرآن کورسز", service6Title: "عربی زبان",
        whatsappBtnText: "واٹس ایپ",
        footerText: "© 2024 لندن شریعہ کونسل۔ جملہ حقوق محفوظ ہیں۔"
    }
};

// --- Dark Mode Logic ---
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Load Preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
if(savedTheme === 'dark') themeToggle.querySelector('i').className = 'fas fa-sun';

// --- Language Logic ---
function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
    const data = translations[lang];
    for (const id in data) {
        const el = document.getElementById(id);
        if (el) el.textContent = data[id];
    }
}

document.getElementById('navLangToggle').addEventListener('click', () => {
    const current = document.documentElement.lang;
    let next = current === 'en' ? 'ar' : current === 'ar' ? 'ur' : 'en';
    applyTranslations(next);
});

document.addEventListener('DOMContentLoaded', () => applyTranslations('en'));
