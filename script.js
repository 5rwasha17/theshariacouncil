const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services",
        navGallery: "Gallery", navFatwas: "Fatwas", navContact: "Contact",
        navLangToggle: "العربية",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        whoWeAreSubheading: "Who We Are",
        whoWeAreP1: "We are a group of scholars and Imams, graduates of Al-Azhar Al-Sharif University. We hold degrees in:",
        usulAlDinHeading: "Usul al-Din",
        usulAlDinText: "Study of creed, exegesis, and Hadith.",
        shariaIslamiyaHeading: "Islamic Sharia",
        shariaIslamiyaText: "Study of Fiqh, its principles, and comparative law.",
        footerText: "© 2024 Shariah Council. All Rights Reserved.",
        geminiErrorModalLabel: "Error",
        geminiErrorModalBody: "Try again later.",
        geminiErrorModalCloseBtn: "Close"
    },
    ar: {
        navHome: "الرئيسية", navAbout: "عن المجلس", navServices: "خدماتنا",
        navGallery: "معرض الصور", navFatwas: "فتاوى", navContact: "تواصل معنا",
        navLangToggle: "English",
        heroTitle: "مجلس الشريعة للأسرة المسلمة في لندن",
        heroText: "إرشاد شرعي لحياة مستقرة في بيئة آمنة واحترافية.",
        applyNowBtn: "تواصل معنا الآن",
        introSectionTitle: "عن المجلس",
        whoWeAreSubheading: "من نحن",
        whoWeAreP1: "نحن مجموعة من العلماء والأئمة، تخرجنا في جامعة الأزهر الشريف. نحمل تخصصات شرعية تشمل:",
        usulAlDinHeading: "أصول الدين",
        usulAlDinText: "دراسة العقيدة والتفسير والحديث الشريف.",
        shariaIslamiyaHeading: "الشريعة الإسلامية",
        shariaIslamiyaText: "دراسة الفقه وأصوله والقانون المقارن.",
        footerText: "جميع الحقوق محفوظة © 2024 مجلس الشريعة.",
        geminiErrorModalLabel: "خطأ",
        geminiErrorModalBody: "يرجى المحاولة لاحقاً.",
        geminiErrorModalCloseBtn: "إغلاق"
    }
};

function applyTranslations(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    for (const key in t) {
        const el = document.getElementById(key);
        if (el) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[key];
            else el.textContent = t[key];
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations('en'); // اللغة الأساسية إنجليزي

    const langBtn = document.getElementById('navLangToggle');
    langBtn.addEventListener('click', () => {
        const newLang = document.documentElement.lang === 'en' ? 'ar' : 'en';
        applyTranslations(newLang);
    });
});
