// 1. كائن الترجمات - يحتوي على الإنجليزية والعربية والأوردو
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navGallery: "Gallery",
        navForms: "Application Forms",
        navContact: "Contact Us",
        navLangToggle: "English / العربية / اردو",
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
        aboutFeature1Text: "Authentic and contemporary Islamic guidance.",
        aboutFeature2Title: "Fairness & Transparency",
        aboutFeature2Text: "Adhering to fairness in all procedures.",
        aboutFeature3Title: "UK Law Adherence",
        aboutFeature3Text: "Operating in harmony with UK laws.",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage",
        service1Text: "Completing Islamic marriage contracts according to Shariah rulings.",
        service1ExtraText: "Includes documenting contracts and ensuring all conditions are met.",
        service1Btn: "Learn More",
        service2Title: "Divorce & Khula",
        service2Text: "Assistance with Islamic divorce procedures and mediation.",
        service2ExtraText: "We strive to minimize disputes and protect children's interests.",
        service2Btn: "Learn More",
        service3Title: "Consultations",
        service3Text: "Islamic guidance on family matters and inheritance.",
        service3ExtraText: "Accurate fatwas based on Quran and Sunnah considering contemporary life.",
        service3Btn: "Learn More",
        service4Title: "Ruqyah Shariah",
        service4Text: "Ruqyah sessions adhering to Quran and Sunnah.",
        service4ExtraText: "Safe environment for spiritual healing.",
        service4Btn: "Learn More",
        service5Title: "Quran Courses",
        service5Text: "Advanced Tajweed courses with Ijazah possibility.",
        service5ExtraText: "Taught by authorized scholars.",
        service5Btn: "Learn More",
        service6Title: "Arabic Language",
        service6Text: "Comprehensive Arabic courses for all levels.",
        service6ExtraText: "Grammar, conversation, reading, and writing.",
        service6Btn: "Learn More",
        service7Title: "Circumcision Services",
        service7Text: "Circumcision for newborns and new Muslims by specialist doctors.",
        service7ExtraText: "Safe medical procedures performed by licensed professionals following health standards.",
        service7Btn: "Learn More",
        service8Title: "Cupping Therapy (Hijama)",
        service8Text: "Professional cupping for men and women by licensed specialists.",
        service8ExtraText: "We provide a hygienic environment and expert practitioners for both genders.",
        service8Btn: "Learn More",
        gallerySectionTitle: "Image Gallery",
        galleryImageCaption1: "Lecture on the Family in Islam.",
        galleryImageCaption2: "Meeting with BBC in London.",
        galleryImageCaption3: "With Dr. Abdullah Matroud.",
        galleryImageCaption4: "Event snapshot in the UK.",
        galleryImageCaption5: "Malaysian community marriage contract.",
        galleryImageCaption6: "Meeting with Dr. Omar Abdul Kafi.",
        
        // نصوص قسم النماذج الجديد
        formsSectionTitle: "Application Forms",
        formsSectionText: "Download the necessary forms to start your application.",
        divorceFormTitle: "Islamic Divorce Application Form",
        divorceFormDesc: "Please complete this form accurately and honestly. All information will be kept confidential.",
        downloadBtnText: "Download Form",

        contactSectionTitle: "Contact Us",
        contactIntro: "Contact us directly for assistance.",
        directPhoneLabel: "Contact us by phone:",
        directEmailLabel: "Or by email:",
        whatsappLabel: "Or send a message on WhatsApp:",
        whatsappBtnText: "WhatsApp",
        formTitle: "Send Us a Message",
        contactName: "Full Name",
        contactEmail: "Email Address",
        contactPhone: "Phone Number",
        contactMessage: "Your Message",
        submitFormBtn: "Send Message",
        footerText: "© 2024 Shariah Council for the Muslim Family in London. All Rights Reserved.",
        showLess: "Show Less"
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navGallery: "معرض الصور",
        navForms: "نماذج الطلبات",
        navContact: "اتصل بنا",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "المجلس الشرعي للأسرة المسلمة في لندن",
        heroText: "إرشاد إسلامي لحياة مستقرة في بيئة آمنة ومهنية.",
        applyNowBtn: "اتصل بنا الآن",
        introSectionTitle: "من نحن",
        whoWeAreSubheading: "من نحن",
        whoWeAreP1: "نحن مجموعة من العلماء والأئمة، خريجي جامعة الأزهر الشريف. نحمل درجات علمية عالية في تخصصات شرعية متميزة، منها:",
        usulAlDinHeading: "أصول الدين",
        usulAlDinText: "دراسة العقيدة، التفسير، والحديث.",
        shariaIslamiyaHeading: "الشريعة الإسلامية",
        shariaIslamiyaText: "دراسة الفقه، أصول الفقه، والقانون المقارن.",
        whoWeAreP2: "نحمل رسالة العلم ونسعى لنشر الفهم الوسطي للإسلام.",
        whyChooseUsSubheading: "لماذا تختارنا؟",
        introSectionText: "نقدم إرشاداً إسلامياً موثوقاً في إطار القانون البريطاني.",
        aboutFeature1Title: "الثقة والمصداقية",
        aboutFeature1Text: "إرشاد إسلامي أصيل ومعاصر.",
        aboutFeature2Title: "العدل والشفافية",
        aboutFeature2Text: "الالتزام بالعدالة في جميع الإجراءات.",
        aboutFeature3Title: "الالتزام بالقانون البريطاني",
        aboutFeature3Text: "العمل بانسجام مع القوانين البريطانية.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        service1Title: "الزواج الإسلامي",
        service1Text: "إتمام عقود الزواج الإسلامي وفق الأحكام الشرعية.",
        service1ExtraText: "يشمل توثيق العقود والتأكد من استيفاء كافة الشروط.",
        service1Btn: "تعرف على المزيد",
        service2Title: "الطلاق والخلع",
        service2Text: "المساعدة في إجراءات الطلاق الإسلامي والوساطة.",
        service2ExtraText: "نسعى لتقليل النزاعات وحماية مصالح الأطفال.",
        service2Btn: "تعرف على المزيد",
        service3Title: "الاستشارات",
        service3Text: "إرشاد إسلامي في قضايا الأسرة والمواريث.",
        service3ExtraText: "فتاوى دقيقة مبنية على الكتاب والسنة مع مراعاة الحياة المعاصرة.",
        service3Btn: "تعرف على المزيد",
        service4Title: "الرقية الشرعية",
        service4Text: "جلسات رقية ملتزمة بالكتاب والسنة.",
        service4ExtraText: "بيئة آمنة للاستشفاء الروحي.",
        service4Btn: "تعرف على المزيد",
        service5Title: "دورات القرآن",
        service5Text: "دورات تجويد متقدمة مع إمكانية الحصول على إجازة.",
        service5ExtraText: "تُدرس على يد علماء مجازين.",
        service5Btn: "تعرف على المزيد",
        service6Title: "اللغة العربية",
        service6Text: "دورات شاملة في اللغة العربية لجميع المستويات.",
        service6ExtraText: "النحو، المحادثة، القراءة والكتابة.",
        service6Btn: "تعرف على المزيد",
        service7Title: "خدمات الختان",
        service7Text: "ختان حديثي الولادة والمسلمين الجدد على يد أطباء متخصصين.",
        service7ExtraText: "إجراءات طبية آمنة ينفذها متخصصون مرخصون وفق المعايير الصحية.",
        service7Btn: "تعرف على المزيد",
        service8Title: "الحجامة الشرعية",
        service8Text: "حجامة احترافية للرجال والنساء على يد أخصائيين مرخصين.",
        service8ExtraText: "نوفر بيئة صحية معقمة وأخصائيين ذوي خبرة لكلا الجنسين.",
        service8Btn: "تعرف على المزيد",
        gallerySectionTitle: "معرض الصور",
        galleryImageCaption1: "محاضرة عن الأسرة في الإسلام.",
        galleryImageCaption2: "لقاء مع قناة BBC في لندن.",
        galleryImageCaption3: "مع الدكتور عبدالله مطرود.",
        galleryImageCaption4: "لقطة من فعالية في المملكة المتحدة.",
        galleryImageCaption5: "عقد زواج للجالية الماليزية.",
        galleryImageCaption6: "لقاء مع الدكتور عمر عبد الكافي.",

        // نصوص قسم النماذج الجديد
        formsSectionTitle: "نماذج الطلبات",
        formsSectionText: "قم بتحميل النماذج اللازمة لبدء طلبك.",
        divorceFormTitle: "نموذج طلب طلاق إسلامي",
        divorceFormDesc: "يرجى تعبئة هذا النموذج بدقة وأمانة. سيتم التعامل مع جميع المعلومات بسرية تامة.",
        downloadBtnText: "تحميل النموذج",

        contactSectionTitle: "اتصل بنا",
        contactIntro: "تواصل معنا مباشرة للحصول على المساعدة.",
        directPhoneLabel: "اتصل بنا هاتفياً:",
        directEmailLabel: "أو عبر البريد الإلكتروني:",
        whatsappLabel: "أو أرسل رسالة عبر واتساب:",
        whatsappBtnText: "واتساب",
        formTitle: "أرسل لنا رسالة",
        contactName: "الاسم الكامل",
        contactEmail: "البريد الإلكتروني",
        contactPhone: "رقم الهاتف",
        contactMessage: "رسالتك",
        submitFormBtn: "إرسال الرسالة",
        footerText: "© 2024 المجلس الشرعي للأسرة المسلمة في لندن. جميع الحقوق محفوظة.",
        showLess: "عرض أقل"
    },
    ur: {
        navHome: "ہوم",
        navAbout: "ہمارے بارے میں",
        navServices: "خدمات",
        navGallery: "گیلری",
        navForms: "درخواست فارم",
        navContact: "رابطہ کریں",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "لندن میں مسلم خاندان کے لیے شرعی کونسل",
        heroText: "ایک محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        whoWeAreSubheading: "ہم کون ہیں",
        whoWeAreP1: "ہم علماء اور ائمہ کا ایک گروپ ہیں، جو جامعہ الازہر الشریف سے فارغ التحصیل ہیں۔ ہم ممتاز شرعی تخصصات میں اعلیٰ ڈگریاں رکھتے ہیں، بشمول:",
        usulAlDinHeading: "اصول دین",
        usulAlDinText: "عقیدہ، تفسیر اور حدیث کا مطالعہ۔",
        shariaIslamiyaHeading: "اسلامی شریعہ",
        shariaIslamiyaText: "فقہ، اصول فقہ اور تقابلی قانون کا مطالعہ۔",
        whoWeAreP2: "ہم علم کا پیغام لے کر چلتے ہیں اور اسلام کی اعتدال پسند سمجھ بوجھ کو پھیلانے کی کوشش کرتے ہیں۔",
        whyChooseUsSubheading: "ہمیں کیوں منتخب کریں؟",
        introSectionText: "ہم برطانوی قانون کے دائرہ کار میں قابل اعتماد اسلامی رہنمائی فراہم کرتے ہیں۔",
        aboutFeature1Title: "اعتماد اور بھروسہ",
        aboutFeature1Text: "مستند اور عصری اسلامی رہنمائی۔",
        aboutFeature2Title: "انصاف اور شفافیت",
        aboutFeature2Text: "تمام طریقہ کار میں انصاف کی پابندی۔",
        aboutFeature3Title: "یوکے قانون کی پابندی",
        aboutFeature3Text: "یوکے کے قوانین کے مطابق کام کرنا۔",
        servicesSectionTitle: "ہماری اہم خدمات",
        service1Title: "اسلامی نکاح",
        service1Text: "شرعی احکام کے مطابق اسلامی نکاح کے معاہدوں کی تکمیل۔",
        service1ExtraText: "اس میں معاہدوں کی دستاویز سازی اور تمام شرائط کی تکمیل کو یقینی بنانا شامل ہے۔",
        service1Btn: "مزید جانیں",
        service2Title: "طلاق اور خلع",
        service2Text: "اسلامی طلاق کے طریقہ کار اور ثابت میں مدد۔",
        service2ExtraText: "ہم تنازعات کو کم کرنے اور بچوں کے مفادات کے تحفظ کی کوشش کرتے ہیں۔",
        service2Btn: "مزید جانیں",
        service3Title: "مشاورت",
        service3Text: "خاندانی معاملات اور وراثت پر اسلامی رہنمائی۔",
        service3ExtraText: "عصری زندگی کو مدنظر رکھتے ہوئے قرآن و سنت کی روشنی میں درست فتاویٰ۔",
        service3Btn: "مزید جانیں",
        service4Title: "رقیہ شرعیہ",
        service4Text: "قرآن و سنت کے مطابق رقیہ کے سیشن۔",
        service4ExtraText: "روحانی شفاء کے لیے محفوظ ماحول۔",
        service4Btn: "مزید جانیں",
        service5Title: "قرآن کورسز",
        service5Text: "اجازہ کے امکان کے ساتھ تجوید کے جدید کورسز۔",
        service5ExtraText: "مستند علماء کے ذریعے پڑھایا جاتا ہے۔",
        service5Btn: "مزید جانیں",
        service6Title: "عربی زبان",
        service6Text: "تمام سطحوں کے لیے عربی زبان کے جامع کورسز۔",
        service6ExtraText: "گرائمر، گفتگو، پڑھنا اور لکھنا۔",
        service6Btn: "مزید جانیں",
        service7Title: "ختنہ کی خدمات",
        service7Text: "نوزائیدہ بچوں اور نئے مسلمانوں کے لیے ماہر ڈاکٹروں کے ذریعے ختنہ کی خدمات۔",
        service7ExtraText: "صحت کے معیار کے مطابق لائسنس یافتہ پیشہ ور افراد کے ذریعے محفوظ طبی طریقہ کار۔",
        service7Btn: "مزید جانیں",
        service8Title: "حجامہ تھراپی",
        service8Text: "لائسنس یافتہ ماہرین کے ذریعے مردوں اور عورتوں کے لیے پیشہ ورانہ حجامہ۔",
        service8ExtraText: "ہم دونوں جنسوں کے لیے صحت بخش ماحول اور ماہر معالج فراہم کرتے ہیں۔",
        service8Btn: "مزيد جانیں",
        gallerySectionTitle: "گیلری",
        galleryImageCaption1: "اسلام میں خاندان پر لیکچر۔",
        galleryImageCaption2: "لندن میں بی بی سي کے ساتھ ملاقات۔",
        galleryImageCaption3: "ڈاکٹر عبداللہ مطرود کے ساتھ۔",
        galleryImageCaption4: "برطانیہ میں ایک تقریب کی جھلک۔",
        galleryImageCaption5: "ملائیشین کمیونٹی کے نکاح کا معاہدہ۔",
        galleryImageCaption6: "ڈاکٹر عمر عبد الکافی کے ساتھ ملاقات۔",

        // نصوص قسم النماذج الجديد
        formsSectionTitle: "درخواست فارم",
        formsSectionText: "اپنی درخواست شروع کرنے کے لیے ضروری فارم ڈاؤن لوڈ کریں۔",
        divorceFormTitle: "اسلامی طلاق کی درخواست کا فارم",
        divorceFormDesc: "براہ کرم اس فارم کو درستگی اور دیانتداري سے پُر کریں۔ تمام معلومات کو خفیہ رکھا جائے گا۔",
        downloadBtnText: "فارم ڈاؤن لوڈ کریں",

        contactSectionTitle: "رابطہ کریں",
        contactIntro: "مدد کے لیے براہ راست ہم سے رابطہ کریں۔",
        directPhoneLabel: "فون کے ذریعے رابطہ کریں:",
        directEmailLabel: "یا ای میل کے ذریعے:",
        whatsappLabel: "یا واٹس ایپ پر پیغام بھیجیں:",
        whatsappBtnText: "واٹس ایپ",
        formTitle: "ہمیں پیغام بھیجیں",
        contactName: "پورا نام",
        contactEmail: "ای میل ایڈريس",
        contactPhone: "فون نمبر",
        contactMessage: "آپ کا پیغام",
        submitFormBtn: "پیغام بھیجیں",
        footerText: "© 2024 لندن میں مسلم خاندان کے لیے شرعی کونسل۔ جملہ حقوق محفوظ ہیں۔",
        showLess: "کم دکھائیں"
    }
};

// 2. دالة تطبيق الترجمة
function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';

    const data = translations[lang];
    for (const id in data) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = data[id];
            } else if (element.id === 'downloadBtnText') {
                 // تعامل خاص لنص زر التحميل
                 element.textContent = data[id];
            } else {
                const icon = element.querySelector('i');
                element.textContent = data[id] + " "; 
                if (icon) element.appendChild(icon);
            }
        }
    }
}

// 3. دالة إغلاق القائمة
function forceCloseNavbar() {
    const navbarCollapseElement = document.getElementById('navbarNav');
    if (navbarCollapseElement && navbarCollapseElement.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseElement) || new bootstrap.Collapse(navbarCollapseElement);
        bsCollapse.hide();
    }
}

// 4. تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations('en');

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

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', forceCloseNavbar);
    });

    // تم حذف .toggle-fatwa هنا
    document.querySelectorAll('.toggle-content').forEach(button => {
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
                this.innerHTML = translations[currentLang].showLess + ' <i class="fas fa-arrow-up"></i>';
            } else {
                if(extraContentElement) extraContentElement.style.display = 'none';
                const originalText = translations[currentLang][this.id];
                this.innerHTML = originalText + ' <i class="fas fa-arrow-right"></i>';
            }
        });
    });
});
