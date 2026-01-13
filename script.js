// 1. Translations Object (English, Arabic, Urdu)
const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services", navGallery: "Gallery", navFatwas: "Fatwas", navContact: "Contact Us",
        navLangToggle: "العربية / English / اردو",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        whoWeAreSubheading: "Who We Are",
        whoWeAreP1: "We are a group of scholars and Imams, graduates of Al-Azhar Al-Sharif University. We hold high degrees in distinguished Sharia specializations.",
        usulAlDinHeading: "Fundamentals of Religion",
        usulAlDinText: "Study of creed, Tafsir, and Hadith.",
        shariaIslamiyaHeading: "Islamic Sharia",
        shariaIslamiyaText: "Study of Fiqh, Usul al-Fiqh, and comparative law.",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage",
        service1Text: "Completing Islamic marriage contracts according to Shariah rulings.",
        service2Title: "Divorce & Khula",
        service2Text: "Assistance with Islamic divorce procedures and mediation.",
        service3Title: "Consultations",
        service3Text: "Islamic guidance on family matters and inheritance.",
        service4Title: "Ruqyah Shariah",
        service4Text: "Ruqyah sessions adhering to Quran and Sunnah.",
        service5Title: "Quran Courses",
        service5Text: "Advanced Tajweed courses with Ijazah possibility.",
        service6Title: "Arabic Language",
        service6Text: "Comprehensive Arabic courses for all levels.",
        gallerySectionTitle: "Image Gallery",
        galleryImageCaption1: "Lecture on the Family in Islam.",
        galleryImageCaption2: "Meeting with BBC in London.",
        galleryImageCaption3: "With Dr. Abdullah Matroud.",
        galleryImageCaption4: "Event snapshot in the UK.",
        galleryImageCaption5: "Malaysian community marriage contract.",
        galleryImageCaption6: "Meeting with Dr. Omar Abdul Kafi.",
        contactSectionTitle: "Contact Us",
        contactIntro: "Contact us directly for assistance.",
        whatsappBtnText: "WhatsApp",
        formTitle: "Send Us a Message",
        contactName: "Full Name",
        contactEmail: "Email Address",
        contactMessage: "Your Message",
        submitFormBtn: "Send Message",
        footerText: "© 2024 Shariah Council for the Muslim Family in London. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "خدماتنا", navGallery: "المعرض", navFatwas: "فتاوى", navContact: "اتصل بنا",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "المجلس الشرعي للأسرة المسلمة في لندن",
        heroText: "إرشاد إسلامي لحياة مستقرة في بيئة آمنة ومهنية.",
        applyNowBtn: "اتصل بنا الآن",
        introSectionTitle: "من نحن",
        whoWeAreSubheading: "من نحن",
        whoWeAreP1: "نحن مجموعة من العلماء والأئمة، خريجي جامعة الأزهر الشريف. نحمل درجات علمية عالية في تخصصات شرعية متميزة.",
        usulAlDinHeading: "أصول الدين",
        usulAlDinText: "دراسة العقيدة، التفسير، والحديث.",
        shariaIslamiyaHeading: "الشريعة الإسلامية",
        shariaIslamiyaText: "دراسة الفقه، أصول الفقه، والقانون المقارن.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        service1Title: "الزواج الإسلامي",
        service1Text: "إتمام عقود الزواج الإسلامي وفق الأحكام الشرعية.",
        service2Title: "الطلاق والخلع",
        service2Text: "المساعدة في إجراءات الطلاق الإسلامي والوساطة.",
        service3Title: "الاستشارات",
        service3Text: "إرشاد إسلامي في قضايا الأسرة والمواريث.",
        service4Title: "الرقية الشرعية",
        service4Text: "جلسات رقية ملتزمة بالكتاب والسنة.",
        service5Title: "دورات القرآن",
        service5Text: "دورات تجويد متقدمة مع إمكانية الحصول على إجازة.",
        service6Title: "اللغة العربية",
        service6Text: "دورات شاملة في اللغة العربية لجميع المستويات.",
        gallerySectionTitle: "معرض الصور",
        galleryImageCaption1: "محاضرة عن الأسرة في الإسلام.",
        galleryImageCaption2: "لقاء مع قناة BBC في لندن.",
        galleryImageCaption3: "مع الدكتور عبدالله مطرود.",
        galleryImageCaption4: "لقطة من فعالية في المملكة المتحدة.",
        galleryImageCaption5: "عقد زواج للجالية الماليزية.",
        galleryImageCaption6: "لقاء مع الدكتور عمر عبد الكافي.",
        contactSectionTitle: "اتصل بنا",
        contactIntro: "تواصل معنا مباشرة للحصول على المساعدة.",
        whatsappBtnText: "واتساب",
        formTitle: "أرسل لنا رسالة",
        contactName: "الاسم الكامل",
        contactEmail: "البريد الإلكتروني",
        contactMessage: "رسالتك",
        submitFormBtn: "إرسال الرسالة",
        footerText: "© 2024 المجلس الشرعي للأسرة المسلمة في لندن. جميع الحقوق محفوظة."
    },
    ur: {
        navHome: "ہوم", navAbout: "ہمارے بارے میں", navServices: "ہماری خدمات", navGallery: "گیلری", navFatwas: "فتاویٰ", navContact: "رابطہ کریں",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "لندن میں مسلم خاندان کے لیے شریعہ کونسل",
        heroText: "محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        whoWeAreSubheading: "ہم کون ہیں",
        whoWeAreP1: "ہم علماء اور ائمہ کا ایک گروپ ہیں، جو جامعہ الازہر الشریف سے فارغ التحصیل ہیں۔ ہم ممتاز شرعی تخصصات میں اعلیٰ ڈگریاں رکھتے ہیں۔",
        usulAlDinHeading: "اصول الدین",
        usulAlDinText: "عقیدہ، تفسیر اور حدیث کا مطالعہ۔",
        shariaIslamiyaHeading: "اسلامی شریعہ",
        shariaIslamiyaText: "فقہ، اصول فقہ اور تقابلی قانون کا مطالعہ۔",
        servicesSectionTitle: "ہماری اہم خدمات",
        service1Title: "اسلامی نکاح",
        service1Text: "شرعی احکام کے مطابق اسلامی نکاح کے معاہدوں کی تکمیل۔",
        service2Title: "طلاق اور خلع",
        service2Text: "اسلامی طلاق کے طریقہ کار اور ثالثی میں مدد۔",
        service3Title: "مشاورت",
        service3Text: "خاندانی معاملات اور وراثت پر اسلامی رہنمائی۔",
        service4Title: "رقیہ شرعیہ",
        service4Text: "قرآن و سنت کے مطابق رقیہ سیشنز۔",
        service5Title: "قرآن کورسز",
        service5Text: "اجازہ کے امکان کے ساتھ ایڈوانس تجوید کورسز۔",
        service6Title: "عربی زبان",
        service6Text: "تمام سطحوں کے لیے جامع عربی کورسز۔",
        gallerySectionTitle: "تصویری گیلری",
        galleryImageCaption1: "اسلام میں خاندان پر لیکچر۔",
        galleryImageCaption2: "لندن میں بی بی سي کے ساتھ ملاقات۔",
        galleryImageCaption3: "ڈاکٹر عبداللہ مطرود کے ساتھ۔",
        galleryImageCaption4: "برطانیہ میں ایک تقریب کی جھلک۔",
        galleryImageCaption5: "ملائیشین کمیونٹی کے نکاح کا معاہدہ۔",
        galleryImageCaption6: "ڈاکٹر عمر عبد الکافی کے ساتھ ملاقات۔",
        contactSectionTitle: "ہم سے رابطہ کریں",
        contactIntro: "مدد کے لیے براہ راست ہم سے رابطہ کریں۔",
        whatsappBtnText: "واٹس ایپ",
        formTitle: "ہمیں پیغام بھیجیں",
        contactName: "مکمل نام",
        contactEmail: "ای میل ایڈریس",
        contactMessage: "آپ کا پیغام",
        submitFormBtn: "پیغام بھیجیں",
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

// Load Saved Preference
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
        if (el) {
            if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = data[id];
            else el.textContent = data[id];
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

// Initialize
document.addEventListener('DOMContentLoaded', () => applyTranslations('en'));
