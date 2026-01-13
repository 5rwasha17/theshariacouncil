const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services", navGallery: "Gallery", navContact: "Contact Us",
        navLangToggle: "العربية / English / اردو",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        usulAlDinHeading: "Fundamentals of Religion",
        usulAlDinText: "Study of creed, Tafsir, and Hadith.",
        shariaIslamiyaHeading: "Islamic Sharia",
        shariaIslamiyaText: "Study of Fiqh, Usul al-Fiqh, and comparative law.",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage", service1Btn: "Learn More",
        service2Title: "Divorce & Khula", service2Btn: "Learn More",
        service3Title: "Consultations", service3Btn: "Learn More",
        service4Title: "Ruqyah Shariah", service4Btn: "Learn More",
        service5Title: "Quran Courses", service5Btn: "Learn More",
        service6Title: "Arabic Language", service6Btn: "Learn More",
        contactSectionTitle: "Contact Us",
        whatsappBtnText: "WhatsApp",
        footerText: "© 2024 Shariah Council for the Muslim Family in London. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "خدماتنا", navGallery: "المعرض", navContact: "اتصل بنا",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "المجلس الشرعي للأسرة المسلمة في لندن",
        heroText: "إرشاد إسلامي لحياة مستقرة في بيئة آمنة ومهنية.",
        applyNowBtn: "اتصل بنا الآن",
        introSectionTitle: "من نحن",
        usulAlDinHeading: "أصول الدين",
        usulAlDinText: "دراسة العقيدة، التفسير، والحديث.",
        shariaIslamiyaHeading: "الشريعة الإسلامية",
        shariaIslamiyaText: "دراسة الفقه والقانون المقارن.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        service1Title: "الزواج الإسلامي", service1Btn: "تعرف على المزيد",
        service2Title: "الطلاق والخلع", service2Btn: "تعرف على المزيد",
        service3Title: "الاستشارات", service3Btn: "تعرف على المزيد",
        service4Title: "الرقية الشرعية", service4Btn: "تعرف على المزيد",
        service5Title: "دورات القرآن", service5Btn: "تعرف على المزيد",
        service6Title: "اللغة العربية", service6Btn: "تعرف على المزيد",
        contactSectionTitle: "اتصل بنا",
        whatsappBtnText: "واتساب",
        footerText: "© 2024 المجلس الشرعي للأسرة المسلمة في لندن. جميع الحقوق محفوظة."
    },
    ur: {
        navHome: "ہوم", navAbout: "ہمارے بارے میں", navServices: "ہماری خدمات", navGallery: "گیلری", navContact: "رابطہ کریں",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "لندن میں مسلم خاندان کے لیے شریعہ کونسل",
        heroText: "محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        usulAlDinHeading: "اصول الدین",
        usulAlDinText: "عقیدہ، تفسیر اور حدیث کا مطالعہ۔",
        shariaIslamiyaHeading: "اسلامی شریعہ",
        shariaIslamiyaText: "فقہ اور تقابلی قانون کا مطالعہ۔",
        servicesSectionTitle: "ہماری اہم خدمات",
        service1Title: "اسلامی نکاح", service1Btn: "مزید جانیں",
        service2Title: "طلاق اور خلع", service2Btn: "مزید جانیں",
        service3Title: "مشاورت", service3Btn: "مزید جانیں",
        service4Title: "رقیہ شرعیہ", service4Btn: "مزيد جانیں",
        service5Title: "قرآن کورسز", service5Btn: "مزید جانیں",
        service6Title: "عربی زبان", service6Btn: "مزید جانیں",
        contactSectionTitle: "ہم سے رابطہ کریں",
        whatsappBtnText: "واٹس ایپ",
        footerText: "© 2024 لندن میں مسلم خاندان کے لیے شریعہ کونسل۔ جملہ حقوق محفوظ ہیں۔"
    }
};

// --- Dark Mode Logic ---
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const target = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', target);
    themeToggle.querySelector('i').className = target === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('theme', target);
});

// استعادة الثيم المفضل
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
if(savedTheme === 'dark') themeToggle.querySelector('i').className = 'fas fa-sun';

// --- Translation Logic ---
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
    let next = 'en';
    if (current === 'en') next = 'ar';
    else if (current === 'ar') next = 'ur';
    applyTranslations(next);
});

// Learn More Toggle
document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.getElementById(this.dataset.target);
        const isHidden = target.style.display === 'none';
        target.style.display = isHidden ? 'block' : 'none';
        this.textContent = isHidden ? (document.documentElement.lang === 'ar' ? 'عرض أقل' : 'Show Less') : 'Learn More';
    });
});

document.addEventListener('DOMContentLoaded', () => applyTranslations('en'));
