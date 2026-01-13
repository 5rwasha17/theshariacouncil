// 1. كائن الترجمات - يحتوي على جميع نصوص الموقع باللغتين
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navGallery: "Gallery",
        navFatwas: "Fatwas & Articles",
        navContact: "Contact Us",
        navLangToggle: "العربية / English",
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
        service1BtnLess: "Show Less",
        service2Title: "Divorce & Khula",
        service2Text: "Assistance with Islamic divorce procedures and mediation.",
        service2ExtraText: "We strive to minimize disputes and protect children's interests.",
        service2Btn: "Learn More",
        service2BtnLess: "Show Less",
        service3Title: "Consultations",
        service3Text: "Islamic guidance on family matters and inheritance.",
        service3ExtraText: "Accurate fatwas based on Quran and Sunnah considering contemporary life.",
        service3Btn: "Learn More",
        service3BtnLess: "Show Less",
        service4Title: "Ruqyah Shariah",
        service4Text: "Ruqyah sessions adhering to Quran and Sunnah.",
        service4ExtraText: "Safe environment for spiritual healing.",
        service4Btn: "Learn More",
        service4BtnLess: "Show Less",
        service5Title: "Quran Courses",
        service5Text: "Advanced Tajweed courses with Ijazah possibility.",
        service5ExtraText: "Taught by authorized scholars.",
        service5Btn: "Learn More",
        service5BtnLess: "Show Less",
        service6Title: "Arabic Language",
        service6Text: "Comprehensive Arabic courses for all levels.",
        service6ExtraText: "Grammar, conversation, reading, and writing.",
        service6Btn: "Learn More",
        service6BtnLess: "Show Less",
        gallerySectionTitle: "Image Gallery",
        galleryImageCaption1: "Lecture on the Family in Islam.",
        galleryImageCaption2: "Meeting with BBC in London.",
        galleryImageCaption3: "With Dr. Abdullah Matroud.",
        galleryImageCaption4: "Event snapshot in the UK.",
        galleryImageCaption5: "Malaysian community marriage contract.",
        galleryImageCaption6: "Meeting with Dr. Omar Abdul Kafi.",
        fatwasSectionTitle: "Latest Fatwas & Articles",
        fatwasSectionText: "Explore our growing library of fatwas and articles.",
        fatwaTitle2: "Building a Happy Family in the West",
        fatwaText2: "Tips and guidance for addressing contemporary family challenges and maintaining Islamic identity.",
        fatwaExtraText2: "Practical solutions for facing difficulties Muslim families may encounter, reconciling values with culture, and Islamic upbringing.",
        readMore2: "Read More",
        readMore2Less: "Read Less",
        geminiBtnTextFatwa2: "Request Clarification",
        geminiLoadingTextFatwa2: "Processing...",
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
        navFatwas: "فتاوى ومقالات",
        navContact: "اتصل بنا",
        navLangToggle: "English / العربية",
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
        service1BtnLess: "عرض أقل",
        service2Title: "الطلاق والخلع",
        service2Text: "المساعدة في إجراءات الطلاق الإسلامي والوساطة.",
        service2ExtraText: "نسعى لتقليل النزاعات وحماية مصالح الأطفال.",
        service2Btn: "تعرف على المزيد",
        service2BtnLess: "عرض أقل",
        service3Title: "الاستشارات",
        service3Text: "إرشاد إسلامي في قضايا الأسرة والمواريث.",
        service3ExtraText: "فتاوى دقيقة مبنية على الكتاب والسنة مع مراعاة الحياة المعاصرة.",
        service3Btn: "تعرف على المزيد",
        service3BtnLess: "عرض أقل",
        service4Title: "الرقية الشرعية",
        service4Text: "جلسات رقية ملتزمة بالكتاب والسنة.",
        service4ExtraText: "بيئة آمنة للاستشفاء الروحي.",
        service4Btn: "تعرف على المزيد",
        service4BtnLess: "عرض أقل",
        service5Title: "دورات القرآن",
        service5Text: "دورات تجويد متقدمة مع إمكانية الحصول على إجازة.",
        service5ExtraText: "تُدرس على يد علماء مجازين.",
        service5Btn: "تعرف على المزيد",
        service5BtnLess: "عرض أقل",
        service6Title: "اللغة العربية",
        service6Text: "دورات شاملة في اللغة العربية لجميع المستويات.",
        service6ExtraText: "النحو، المحادثة، القراءة والكتابة.",
        service6Btn: "تعرف على المزيد",
        service6BtnLess: "عرض أقل",
        gallerySectionTitle: "معرض الصور",
        galleryImageCaption1: "محاضرة عن الأسرة في الإسلام.",
        galleryImageCaption2: "لقاء مع قناة BBC في لندن.",
        galleryImageCaption3: "مع الدكتور عبدالله مطرود.",
        galleryImageCaption4: "لقطة من فعالية في المملكة المتحدة.",
        galleryImageCaption5: "عقد زواج للجالية الماليزية.",
        galleryImageCaption6: "لقاء مع الدكتور عمر عبد الكافي.",
        fatwasSectionTitle: "أحدث الفتاوى والمقالات",
        fatwasSectionText: "استكشف مكتبتنا المتنامية من الفتاوى والمقالات.",
        fatwaTitle2: "بناء أسرة سعيدة في الغرب",
        fatwaText2: "نصائح وإرشادات لمواجهة التحديات الأسرية المعاصرة والحفاظ على الهوية الإسلامية.",
        fatwaExtraText2: "حلول عملية للصعوبات التي قد تواجهها الأسر المسلمة، والتربية الإسلامية.",
        readMore2: "اقرأ المزيد",
        readMore2Less: "اقرأ أقل",
        geminiBtnTextFatwa2: "طلب توضيح",
        geminiLoadingTextFatwa2: "جاري المعالجة...",
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
    }
};

// 2. دالة تطبيق الترجمة - تقوم بتغيير النصوص واتجاه الصفحة
function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    Object.keys(translations[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][id];
            } else {
                // الحفاظ على الأيقونات عند تغيير النص
                const icon = element.querySelector('i');
                element.innerText = translations[lang][id];
                if (icon) element.appendChild(icon);
            }
        }
    });
}

// 3. منطق التشغيل الأساسي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // البدء باللغة الإنجليزية كافتراضي
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';

    // زر تبديل اللغة
    const langToggleButton = document.getElementById('navLangToggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            applyTranslations(newLang);
            
            // إغلاق القائمة في الموبايل بعد التبديل
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        });
    }

    // منطق أزرار "تعرف على المزيد" (Learn More)
    document.querySelectorAll('.toggle-content, .toggle-fatwa').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const contentContainer = document.getElementById(targetId);
            const extraContentId = this.dataset.extra;
            const extraContentElement = document.getElementById(extraContentId);
            const currentLang = document.documentElement.lang;
            const buttonId = this.id;

            contentContainer.classList.toggle('expanded');

            if (contentContainer.classList.contains('expanded')) {
                if(extraContentElement) extraContentElement.style.display = 'block';
                const textKey = `${buttonId}Less`;
                const text = translations[currentLang][textKey] || (currentLang === 'ar' ? 'أقل' : 'Show Less');
                this.innerHTML = `${text} <i class="fas fa-arrow-up"></i>`;
            } else {
                if(extraContentElement) extraContentElement.style.display = 'none';
                const text = translations[currentLang][buttonId];
                this.innerHTML = `${text} <i class="fas fa-arrow-right"></i>`;
            }
        });
    });
});
