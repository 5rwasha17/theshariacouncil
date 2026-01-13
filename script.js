// 1. كائن الترجمات - تم إضافة لغة الأردو (Urdu)
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navGallery: "Gallery",
        navFatwas: "Fatwas & Articles",
        navContact: "Contact Us",
        navLangToggle: "العربية / English / اردو",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        whoWeAreSubheading: "Who We Are",
        whoWeAreP1: "We are a group of scholars and Imams, graduates of Al-Azhar Al-Sharif University. We hold high degrees in distinguished Sharia specializations, including:",
        usulAlDinHeading: "Fundamentals of Religion",
        usulAlDinText: "Study of creed, Tafsir, and Hadith.",
        shariaIslamiyaHeading: "Islamic Sharia",
        shariaIslamiyaText: "Study of Fiqh, Usul al-Fiqh, and comparative law.",
        whoWeAreP2: "We carry the message of knowledge and strive to spread a moderate understanding of Islam.",
        whyChooseUsSubheading: "Why Choose Us?",
        introSectionText: "We provide reliable Islamic guidance within the framework of British law.",
        aboutFeature1Title: "Trust & Reliability",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage",
        service1Btn: "Learn More",
        service2Title: "Divorce & Khula",
        service3Title: "Consultations",
        contactSectionTitle: "Contact Us",
        whatsappBtnText: "WhatsApp",
        submitFormBtn: "Send Message",
        footerText: "© 2024 Shariah Council. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navGallery: "معرض الصور",
        navFatwas: "فتاوى ومقالات",
        navContact: "اتصل بنا",
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
        whoWeAreP2: "نحمل رسالة العلم ونسعى لنشر الفهم الوسطي للإسلام.",
        whyChooseUsSubheading: "لماذا تختارنا؟",
        introSectionText: "نقدم إرشاداً إسلامياً موثوقاً في إطار القانون البريطاني.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        service1Title: "الزواج الإسلامي",
        service1Btn: "تعرف على المزيد",
        service2Title: "الطلاق والخلع",
        service3Title: "الاستشارات",
        contactSectionTitle: "اتصل بنا",
        whatsappBtnText: "واتساب",
        submitFormBtn: "إرسال الرسالة",
        footerText: "© 2024 المجلس الشرعي للأسرة المسلمة. جميع الحقوق محفوظة."
    },
    ur: {
        navHome: "ہوم",
        navAbout: "ہمارے بارے میں",
        navServices: "خدمات",
        navGallery: "گیلری",
        navFatwas: "فتاویٰ اور مضامین",
        navContact: "رابطہ کریں",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "لندن میں مسلم خاندان کے لیے شریعہ کونسل",
        heroText: "محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی ہم سے رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        whoWeAreSubheading: "ہم کون ہیں",
        whoWeAreP1: "ہم علماء اور ائمہ کا ایک گروپ ہیں، جو جامعہ الازہر الشریف سے فارغ التحصیل ہیں۔ ہم شریعت کے ممتاز شعبوں میں اعلیٰ ڈگریاں رکھتے ہیں۔",
        usulAlDinHeading: "اصول الدین",
        usulAlDinText: "عقیدہ، تفسیر اور حدیث کا مطالعہ۔",
        shariaIslamiyaHeading: "اسلامی شریعہ",
        shariaIslamiyaText: "فقہ، اصول فقہ اور تقابلی قانون کا مطالعہ۔",
        whoWeAreP2: "ہم علم کا پیغام لے کر چلتے ہیں اور اسلام کی معتدل تفہیم کو عام کرنے کی کوشش کرتے ہیں۔",
        whyChooseUsSubheading: "ہمیں کیوں منتخب کریں؟",
        introSectionText: "ہم برطانوی قانون کے دائرے میں قابل اعتماد اسلامی رہنمائی فراہم کرتے ہیں۔",
        servicesSectionTitle: "ہماری اہم خدمات",
        service1Title: "اسلامی نکاح",
        service1Btn: "مزید جانیں",
        service2Title: "طلاق اور خلع",
        service3Title: "مشاورت",
        contactSectionTitle: "ہم سے رابطہ کریں",
        whatsappBtnText: "واٹس ایپ",
        submitFormBtn: "پیغام بھیجیں",
        footerText: "© 2024 شریعہ کونسل۔ جملہ حقوق محفوظ ہیں۔"
    }
};

// دالة تطبيق الترجمة ودعم اتجاه النص (RTL) للأردو والعربية
function applyTranslations(lang) {
    document.documentElement.lang = lang;
    // العربية والأردو كلاهما RTL
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';

    const data = translations[lang];
    for (const id in data) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = data[id];
            } else {
                const icon = element.querySelector('i');
                element.textContent = data[id] + " "; 
                if (icon) element.appendChild(icon);
            }
        }
    }
}

function forceCloseNavbar() {
    const navbarCollapseElement = document.getElementById('navbarNav');
    if (navbarCollapseElement && navbarCollapseElement.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseElement) || new bootstrap.Collapse(navbarCollapseElement);
        bsCollapse.hide();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // البدء بالإنجليزية افتراضياً
    applyTranslations('en');

    // منطق زر تبديل اللغة (EN -> AR -> UR)
    const langToggleButton = document.getElementById('navLangToggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            let nextLang;
            if (currentLang === 'en') nextLang = 'ar';
            else if (currentLang === 'ar') nextLang = 'ur';
            else nextLang = 'en';
            
            applyTranslations(nextLang);
            forceCloseNavbar();
        });
    }

    // منطق إغلاق القائمة عند الضغط على الروابط
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', forceCloseNavbar);
    });

    // منطق أزرار التوسع (Learn More)
    document.querySelectorAll('.toggle-content, .toggle-fatwa').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const contentContainer = document.getElementById(targetId);
            const extraContentId = this.dataset.extra;
            const extraContentElement = document.getElementById(extraContentId);
            const currentLang = document.documentElement.lang;

            contentContainer.classList.toggle('expanded');

            if (contentContainer.classList.contains('expanded')) {
                if(extraContentElement) extraContentElement.style.display = 'block';
                this.innerHTML = (currentLang === 'ar' ? 'عرض أقل' : currentLang === 'ur' ? 'کم دکھائیں' : 'Show Less') + ' <i class="fas fa-arrow-up"></i>';
            } else {
                if(extraContentElement) extraContentElement.style.display = 'none';
                this.innerHTML = (currentLang === 'ar' ? 'تعرف على المزيد' : currentLang === 'ur' ? 'مزید جانیں' : 'Learn More') + ' <i class="fas fa-arrow-right"></i>';
            }
        });
    });
});
