const translations = {
    en: {
        navHome: "Home", navAbout: "About", navServices: "Services", navGallery: "Gallery", navFatwas: "Fatwas", navContact: "Contact",
        navLangToggle: "العربية / اردو / English",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        whoWeAreP1: "We are a group of scholars and Imams, graduates of Al-Azhar Al-Sharif University.",
        fatwasTitle: "Common Fatwas",
        fatwaQ1: "What are the conditions for Islamic marriage?",
        fatwaA1: "The presence of the wali, two witnesses, and the mutual consent of both parties.",
        fatwaQ2: "Does civil divorce count as Islamic divorce?",
        fatwaA2: "It depends on the intention and the specific case; we recommend consulting the council.",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage", service1Text: "Completing Islamic marriage contracts.",
        service1Btn: "Learn More",
        contactSectionTitle: "Contact Us", contactIntro: "Get in touch for professional guidance.",
        whatsappBtnText: "WhatsApp", contactName: "Full Name", contactEmail: "Email", contactMessage: "Message", submitFormBtn: "Send Message",
        footerText: "© 2024 Shariah Council for the Muslim Family in London. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "خدماتنا", navGallery: "المعرض", navFatwas: "الفتاوى", navContact: "اتصل بنا",
        navLangToggle: "English / اردو / العربية",
        heroTitle: "المجلس الشرعي للأسرة المسلمة في لندن",
        heroText: "إرشاد إسلامي لحياة مستقرة في بيئة آمنة ومهنية.",
        applyNowBtn: "اتصل بنا الآن",
        introSectionTitle: "من نحن",
        whoWeAreP1: "نحن مجموعة من العلماء والأئمة، خريجي جامعة الأزهر الشريف.",
        fatwasTitle: "فتاوى شائعة",
        fatwaQ1: "ما هي شروط الزواج الإسلامي؟",
        fatwaA1: "حضور الولي، والشاهدين، والقبول المتبادل بين الطرفين.",
        fatwaQ2: "هل يعتبر الطلاق المدني طلاقاً شرعياً؟",
        fatwaA2: "يعتمد ذلك على النية وتفاصيل الحالة، وننصح بمراجعة المجلس للتحقق.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        service1Title: "الزواج الإسلامي", service1Text: "إتمام عقود الزواج وفق الأحكام الشرعية.",
        service1Btn: "المزيد",
        contactSectionTitle: "اتصل بنا", contactIntro: "تواصل معنا مباشرة للحصول على استشارة احترافية.",
        whatsappBtnText: "واتساب", contactName: "الاسم الكامل", contactEmail: "البريد الإلكتروني", contactMessage: "الرسالة", submitFormBtn: "إرسال الرسالة",
        footerText: "© 2024 المجلس الشرعي للأسرة المسلمة في لندن. جميع الحقوق محفوظة."
    },
    ur: {
        navHome: "ہوم", navAbout: "ہمارے بارے میں", navServices: "خدمات", navGallery: "گیلری", navFatwas: "فتویٰ", navContact: "رابطہ",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "لندن میں مسلم خاندان کے لیے شریعہ کونسل",
        heroText: "ایک محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        whoWeAreP1: "ہم علماء اور ائمہ کا ایک گروپ ہیں، جو جامعہ الازهر الشريف کے فارغ التحصیل ہیں۔",
        fatwasTitle: "عام فتاویٰ",
        fatwaQ1: "اسلامی نکاح کی شرائط کیا ہیں؟",
        fatwaA1: "ولی کی موجودگی، دو گواہ، اور دونوں فریقوں کی باہمی رضامندی۔",
        fatwaQ2: "کیا سول طلاق اسلامی طلاق شمار ہوتی ہے؟",
        fatwaA2: "یہ نیت اور مخصوص کیس پر منحصر ہے؛ ہم کونسل سے رجوع کرنے کی سفارش کرتے ہیں۔",
        servicesSectionTitle: "ہماری اہم خدمات",
        service1Title: "اسلامی نکاح", service1Text: "شرعی احکامات کے مطابق اسلامی نکاح۔",
        service1Btn: "مزید جانیں",
        contactSectionTitle: "رابطہ کریں", contactIntro: "پیشہ ورانہ رہنمائی کے لیے رابطہ کریں۔",
        whatsappBtnText: "واٹس ایپ", contactName: "پورا نام", contactEmail: "ای میل", contactMessage: "پیغام", submitFormBtn: "پیغام بھیجیں",
        footerText: "© 2024 لندن میں مسلم خاندان کے لیے شریعہ کونسل۔"
    }
};

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
    const data = translations[lang];
    for (const id in data) {
        const el = document.getElementById(id);
        if (el) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = data[id];
            else el.textContent = data[id];
        }
    }
}

document.getElementById('navLangToggle').addEventListener('click', () => {
    const curr = document.documentElement.lang;
    let next = curr === 'en' ? 'ar' : (curr === 'ar' ? 'ur' : 'en');
    applyTranslations(next);
});

applyTranslations('en');
