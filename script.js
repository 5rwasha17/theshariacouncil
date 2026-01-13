// 1. كائن الترجمات المحدث - يحتوي على نصوص النماذج والمستندات بدلاً من الفتاوى
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navGallery: "Gallery",
        navForms: "Forms", // الرابط الجديد في القائمة العلوية
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
        gallerySectionTitle: "Image Gallery",
        galleryImageCaption1: "Lecture on the Family in Islam.",
        galleryImageCaption2: "Meeting with BBC in London.",
        galleryImageCaption3: "With Dr. Abdullah Matroud.",
        galleryImageCaption4: "Event snapshot in the UK.",
        galleryImageCaption5: "Malaysian community marriage contract.",
        galleryImageCaption6: "Meeting with Dr. Omar Abdul Kafi.",
        // نصوص قسم النماذج الجديد بالإنجليزية
        formsSectionTitle: "Forms & Documents",
        divorceFormTitle: "Divorce Application",
        divorceFormText: "Please download the official form to begin your application process locally.",
        divorceFormBtn: "Download Form",
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
        footerText: "© 2024 Shariah Council for the Muslim Family in London. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navGallery: "معرض الصور",
        navForms: "النماذج",
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
        gallerySectionTitle: "معرض الصور",
        galleryImageCaption1: "محاضرة عن الأسرة في الإسلام.",
        galleryImageCaption2: "لقاء مع قناة BBC في لندن.",
        galleryImageCaption3: "مع الدكتور عبدالله مطرود.",
        galleryImageCaption4: "لقطة من فعالية في المملكة المتحدة.",
        galleryImageCaption5: "عقد زواج للجالية الماليزية.",
        galleryImageCaption6: "لقاء مع الدكتور عمر عبد الكافي.",
        // نصوص قسم النماذج الجديد بالعربية
        formsSectionTitle: "النماذج والمستندات",
        divorceFormTitle: "طلب الطلاق الشرعي",
        divorceFormText: "يرجى تحميل النموذج الرسمي لبدء إجراءات الطلب مباشرة من الموقع.",
        divorceFormBtn: "تحميل النموذج",
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
        footerText: "© 2024 المجلس الشرعي للأسرة المسلمة في لندن. جميع الحقوق محفوظة."
    },
    ur: {
        navHome: "ہوم",
        navAbout: "ہمارے بارے میں",
        navServices: "خدمات",
        navGallery: "گیلری",
        navForms: "فارمز",
        navContact: "رابطہ کریں",
        navLangToggle: "English / العربية / اردو",
        heroTitle: "لندن میں مسلم خاندان کے لیے شریعہ کونسل",
        heroText: "محفوظ اور پیشہ ورانہ ماحول میں مستحکم زندگی کے لیے اسلامی رہنمائی۔",
        applyNowBtn: "ابھی ہم سے رابطہ کریں",
        introSectionTitle: "ہمارے بارے میں",
        whoWeAreSubheading: "ہم کون ہیں",
        whoWeAreP1: "ہم علماء اور ائمہ کا ایک گروپ ہیں، جو جامعہ الازہر الشریف سے فارغ التحصیل ہیں۔ ہم ممتاز شرعی تخصصات میں اعلیٰ ڈگریاں رکھتے ہیں، بشمول:",
        usulAlDinHeading: "اصول الدین",
        usulAlDinText: "عقیدہ، تفسیر اور حدیث کا مطالعہ۔",
        shariaIslamiyaHeading: "اسلامی شریعہ",
        shariaIslamiyaText: "فقہ، اصول فقہ اور تقابلی قانون کا مطالعہ۔",
        whoWeAreP2: "ہم علم کا پیغام لے کر چلتے ہیں اور اسلام کی معتدل تفہیم کو عام کرنے کی کوشش کرتے ہیں۔",
        whyChooseUsSubheading: "ہمیں کیوں منتخب کریں؟",
        introSectionText: "ہم برطانوی قانون کے دائرے میں قابل اعتماد اسلامی رہنمائی فراہم کرتے ہیں۔",
        aboutFeature1Title: "اعتماد اور ساکھ",
        aboutFeature1Text: "مستند اور عصری اسلامی رہنمائی۔",
        aboutFeature2Title: "انصاف اور شفافیت",
        aboutFeature2Text: "تمام طریقہ کار میں انصاف پر عمل پیرا ہونا۔",
        aboutFeature3Title: "برطانوی قانون کی پاسداری",
        aboutFeature3Text: "برطانوی قوانین کے ساتھ ہم آہنگی میں کام کرنا۔",
        servicesSectionTitle: "ہماری اہم خدمات",
        service1Title: "اسلامی نکاح",
        service1Text: "شرعی احکام کے مطابق اسلامی نکاح کے معاہدوں کی تکمیل۔",
        service1ExtraText: "معاہدوں کی دستاویزی شکل دینا اور تمام شرائط کی تکمیل کو یقینی بنانا شامل ہے۔",
        service1Btn: "مزید جانیں",
        service2Title: "طلاق اور خلع",
        service2Text: "اسلامی طلاق کے طریقہ کار اور ثالثی میں مدد۔",
        service2ExtraText: "ہم تنازعات کو کم کرنے اور بچوں کے مفادات کے تحفظ کی کوشش کرتے ہیں۔",
        service2Btn: "مزید جانیں",
        service3Title: "مشاورت",
        service3Text: "خاندانی معاملات اور وراثت پر اسلامی رہنمائی۔",
        service3ExtraText: "عصری زندگی کو مدنظر رکھتے ہوئے قرآن و سنت کی روشنی میں درست فتاویٰ۔",
        service3Btn: "مزید جانیں",
        service4Title: "رقیہ شرعیہ",
        service4Text: "قرآن و سنت کے مطابق رقیہ سیشنز۔",
        service4ExtraText: "روحانی شفاء کے لیے محفوظ ماحول۔",
        service4Btn: "مزید جانیں",
        service5Title: "قرآن کورسز",
        service5Text: "اجازہ کے امکان کے ساتھ ایڈوانس تجوید کورسز۔",
        service5ExtraText: "مجاز علماء کے زیر نگرانی تدریس۔",
        service5Btn: "مزید جانیں",
        service6Title: "عربی زبان",
        service6Text: "تمام سطحوں کے لیے جامع عربی کورسز۔",
        service6ExtraText: "گرامر، گفتگو، پڑھنا اور لکھنا۔",
        service6Btn: "مزید جانیں",
        gallerySectionTitle: "تصویری گیلری",
        galleryImageCaption1: "اسلام میں خاندان پر لیکچر۔",
        galleryImageCaption2: "لندن میں بی بی سی کے ساتھ ملاقات۔",
        galleryImageCaption3: "ڈاکٹر عبداللہ مطرود کے ساتھ۔",
        galleryImageCaption4: "برطانیہ میں ایک تقریب کی جھلک۔",
        galleryImageCaption5: "ملائیشین کمیونٹی کے نکاح کا معاہدہ۔",
        galleryImageCaption6: "ڈاکٹر عمر عبد الکافی کے ساتھ ملاقات۔",
        // نصوص قسم النماذج الجديد بالأردية
        formsSectionTitle: "فارمز اور دستاویزات",
        divorceFormTitle: "طلاق کی درخواست",
        divorceFormText: "برائے مہربانی اپنی درخواست کا عمل شروع کرنے کے لیے آفیشل فارم ڈاؤن لوڈ کریں۔",
        divorceFormBtn: "فارم ڈاؤن لوڈ کریں",
        contactSectionTitle: "ہم سے رابطہ کریں",
        contactIntro: "مدد کے لیے براہ راست ہم سے رابطہ کریں۔",
        directPhoneLabel: "فون کے ذریعے رابطہ کریں:",
        directEmailLabel: "یا ای میل کے ذریعے:",
        whatsappLabel: "یا واٹس ایپ پر پیغام بھیجیں:",
        whatsappBtnText: "واٹس ایپ",
        formTitle: "ہمیں پیغام بھیجیں",
        contactName: "مکمل نام",
        contactEmail: "ای میل ایڈریس",
        contactPhone: "فون نمبر",
        contactMessage: "آپ کا پیغام",
        submitFormBtn: "پیغام بھیجیں",
        footerText: "© 2024 لندن میں مسلم خاندان کے لیے شریعہ کونسل۔ جملہ حقوق محفوظ ہیں۔"
    }
};

// 2. دالة تطبيق الترجمة وتغيير اتجاه الصفحة (LTR/RTL)
function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';

    const data = translations[lang];
    for (const id in data) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = data[id];
            } else {
                // الحفاظ على الأيقونات داخل العناصر أثناء تبديل النص
                const icon = element.querySelector('i');
                element.textContent = data[id] + " "; 
                if (icon) element.appendChild(icon);
            }
        }
    }
}

// 3. دالة إغلاق القائمة في الموبايل عند الضغط
function forceCloseNavbar() {
    const navbarCollapseElement = document.getElementById('navbarNav');
    if (navbarCollapseElement) {
        if (navbarCollapseElement.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseElement) || new bootstrap.Collapse(navbarCollapseElement);
            bsCollapse.hide();
        }
    }
}

// 4. تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    // البدء بالإنجليزية افتراضياً
    applyTranslations('en');

    // زر تبديل اللغة (يدور بين الإنجليزية -> العربية -> الأردية)
    const langToggleButton = document.getElementById('navLangToggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            let nextLang;
            if (currentLang === 'en') {
                nextLang = 'ar';
            } else if (currentLang === 'ar') {
                nextLang = 'ur';
            } else {
                nextLang = 'en';
            }
            applyTranslations(nextLang);
            forceCloseNavbar();
        });
    }

    // إغلاق القائمة عند الضغط على أي رابط تنقل
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            forceCloseNavbar();
        });
    });

    // منطق أزرار "Learn More" (إظهار المزيد / إظهار أقل)
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
                
                // نصوص أزرار الإغلاق بناءً على اللغة الحالية
                let closeText = "Show Less";
                if (currentLang === 'ar') closeText = "عرض أقل";
                if (currentLang === 'ur') closeText = "کم دکھائیں";
                
                this.innerHTML = closeText + ' <i class="fas fa-arrow-up"></i>';
            } else {
                if(extraContentElement) extraContentElement.style.display = 'none';
                
                // استعادة النص الأصلي من كائن الترجمة بناءً على الـ ID الخاص بالزر
                const originalText = translations[currentLang][this.id];
                this.innerHTML = originalText + ' <i class="fas fa-arrow-right"></i>';
            }
        });
    });
});
