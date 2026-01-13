const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services", navGallery: "Gallery", navFatwas: "Fatwas", navContact: "Contact Us",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        service1Title: "Islamic Marriage",
        whatsappBtnText: "WhatsApp",
        submitFormBtn: "Send Message",
        // ... اضف الباقي هنا بنفس النمط
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "خدماتنا", navGallery: "المعرض", navFatwas: "فتاوى", navContact: "اتصل بنا",
        heroTitle: "المجلس الشرعي للأسرة المسلمة في لندن",
        heroText: "إرشاد إسلامي لحياة مستقرة في بيئة آمنة ومهنية.",
        applyNowBtn: "اتصل بنا الآن",
        introSectionTitle: "من نحن",
        service1Title: "الزواج الإسلامي",
        whatsappBtnText: "واتساب",
        submitFormBtn: "إرسال الرسالة",
    },
    ur: {
        navHome: "ہوم", navAbout: "ہمارے بارے میں", navServices: "ہماری خدمات", navGallery: "گیلری", navFatwas: "فتاویٰ", navContact: "رابطہ کریں",
        heroTitle: "لندن میں مسلم خاندان کے لیے شریعہ کونسل",
        heroText: "محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        service1Title: "اسلامی نکاح",
        whatsappBtnText: "واٹس ایپ",
        submitFormBtn: "پیغام بھیجیں",
    }
};

// 1. Theme Logic
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// 2. Language Logic
function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
    const data = translations[lang];
    
    for (const key in data) {
        const el = document.getElementById(key);
        if (el) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = data[key];
            else el.textContent = data[key];
        }
    }
}

document.getElementById('navLangToggle').addEventListener('click', () => {
    const current = document.documentElement.lang;
    let next = 'en';
    if (current === 'en') next = 'ar';
    else if (current === 'ar') next = 'ur';
    applyTranslations(next);
});

// 3. Learn More Collapse Logic
document.querySelectorAll('.toggle-content, .toggle-fatwa').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const extra = document.getElementById(this.dataset.extra);
        const isHidden = extra.style.display === 'none';
        extra.style.display = isHidden ? 'block' : 'none';
        this.querySelector('i').className = isHidden ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => applyTranslations('en'));
