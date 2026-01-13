const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services", navGallery: "Gallery", navFatwas: "Fatwas & Articles", navContact: "Contact Us",
        navLangToggle: "العربية / English / اردو",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        service1Title: "Islamic Marriage",
        whatsappBtnText: "WhatsApp",
        footerText: "© 2024 Shariah Council. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "خدماتنا", navGallery: "المعرض", navFatwas: "فتاوى ومقالات", navContact: "اتصل بنا",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "المجلس الشرعي للأسرة المسلمة في لندن",
        heroText: "إرشاد إسلامي لحياة مستقرة في بيئة آمنة ومهنية.",
        applyNowBtn: "اتصل بنا الآن",
        introSectionTitle: "من نحن",
        service1Title: "الزواج الإسلامي",
        whatsappBtnText: "واتساب",
        footerText: "© 2024 المجلس الشرعي. جميع الحقوق محفوظة."
    },
    ur: {
        navHome: "ہوم", navAbout: "ہمارے بارے میں", navServices: "خدمات", navGallery: "گیلری", navFatwas: "فتاویٰ اور مضامین", navContact: "رابطہ کریں",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "لندن میں مسلم خاندان کے لیے شریعہ کونسل",
        heroText: "محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        service1Title: "اسلامی نکاح",
        whatsappBtnText: "واٹس ایپ",
        footerText: "© 2024 لندن شریعہ کونسل۔ جملہ حقوق محفوظ ہیں۔"
    }
};

// --- وظيفة تبديل الثيم وحفظه ---
const themeBtn = document.getElementById('themeToggle');
const html = document.documentElement;

themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const target = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', target);
    localStorage.setItem('theme', target);
    updateThemeIcon(target);
});

function updateThemeIcon(theme) {
    themeBtn.querySelector('i').className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// --- استعادة الثيم المفضل ---
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// --- منطق الترجمة (كما أرفقت مع تعديل الأردو) ---
function applyTranslations(lang) {
    html.lang = lang;
    html.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
    const data = translations[lang];
    for (const id in data) {
        const el = document.getElementById(id);
        if (el) el.textContent = data[id];
    }
}

document.getElementById('navLangToggle').addEventListener('click', () => {
    const current = html.lang;
    let next = current === 'en' ? 'ar' : current === 'ar' ? 'ur' : 'en';
    applyTranslations(next);
});

document.addEventListener('DOMContentLoaded', () => applyTranslations('en'));
