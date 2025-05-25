// Language Toggle Logic
const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services",
        navFatwas: "Fatwas & Articles", navContact: "Contact Us", navApply: "Apply Now",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Apply Now",
        introSectionTitle: "Why Choose Our Shariah Council?",
        introSectionText: "We provide reliable Islamic guidance and operate within the framework of British law, committed to transparency and justice in all our services. Our team of scholars and specialists is dedicated to serving our community and providing the necessary family support.",
        aboutFeature1Title: "Trust & Reliability", aboutFeature1Text: "We offer authentic and contemporary Islamic guidance.",
        aboutFeature2Title: "Fairness & Transparency", aboutFeature2Text: "We adhere to fairness and transparency in all our procedures and services.",
        aboutFeature3Title: "Adherence to UK Law", aboutFeature3Text: "We operate in full harmony with UK laws and its judicial system.",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage (Nikah)", service1Text: "Completing Islamic marriage contracts according to the noble Shariah rulings, and providing guidance to couples for building a stable family.", service1Btn: "Learn More",
        service2Title: "Divorce & Khula", service2Text: "Assistance with Islamic divorce and Khula procedures, mediation between parties, and providing advice to ensure everyone's rights.", service2Btn: "Learn More",
        service3Title: "Consultations & Fatwas", service3Text: "Islamic guidance on family matters, inheritance, financial transactions, and acts of worship, to answer your religious inquiries.", service3Btn: "Learn More",
        fatwasSectionTitle: "Latest Fatwas & Articles", fatwasSectionText: "Explore our growing library of fatwas and articles covering various aspects of Muslim life.",
        fatwaTitle1: "Rulings on Inheritance in Islam", fatwaText1: "A simplified guide to understanding the distribution of inheritance according to Islamic law.", readMore1: "Read More",
        fatwaTitle2: "Building a Happy Family in the West", fatwaText2: "Tips and guidance for addressing contemporary family challenges.", readMore2: "Read More",
        viewAllFatwas: "View All Fatwas & Articles",
        contactSectionTitle: "Contact Us",
        contactIntro: "You can contact us directly for assistance and Islamic guidance.",
        contactNote: "Note: Our team currently works remotely, and calls are redirected to mobile devices. We appreciate your patience and understanding!",
        directPhoneLabel: "Contact us by phone:",
        directEmailLabel: "Or by email:",
        contactClosingText: "We look forward to serving you and answering your inquiries as soon as possible.",
        footerText: "&copy; 2024 Shariah Council for the Muslim Family in London. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية", navAbout: "عن المجلس", navServices: "خدماتنا",
        navFatwas: "فتاوى ومقالات", navContact: "تواصل معنا", navApply: "تقديم طلب",
        heroTitle: "مجلس الشريعة للأسرة المسلمة في لندن",
        heroText: "إرشاد شرعي لحياة مستقرة في بيئة آمنة واحترافية.",
        applyNowBtn: "قدم طلبك الآن",
        introSectionTitle: "لماذا تختار مجلس الشريعة؟",
        introSectionText: "نحن نقدم إرشادات شرعية موثوقة ونعمل ضمن إطار القانون البريطاني، ملتزمون بالشفافية والعدل في كل خدماتنا. فريقنا من العلماء والمختصين مكرس لخدمة مجتمعنا وتوفير الدعم الأسري اللازم.",
        aboutFeature1Title: "ثقة وموثوقية", aboutFeature1Text: "نقدم إرشادات شرعية تستند إلى منهج إسلامي أصيل ومعاصر.",
        aboutFeature2Title: "عدالة وشفافية", aboutFeature2Text: "نلتزم بالعدل والشفافية في جميع إجراءاتنا وخدماتنا.",
        aboutFeature3Title: "التزام بالقانون البريطاني", aboutFeature3Text: "نعمل بانسجام تام مع قوانين المملكة المتحدة ونظامها القضائي.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        service1Title: "الزواج الإسلامي (النيكاح)", service1Text: "إتمام عقود الزواج الشرعية وفقًا لأحكام الشريعة الغراء، وتقديم الإرشاد للمقبلين على الزواج لبناء أسرة مستقرة.", service1Btn: "تعرف على المزيد",
        service2Title: "الطلاق والخلع", service2Text: "المساعدة في إجراءات الطلاق والخلع الشرعية، والوساطة بين الطرفين، وتقديم النصائح لضمان حقوق الجميع.", service2Btn: "تعرف على المزيد",
        service3Title: "الاستشارات والفتاوى", service3Text: "إرشادات شرعية حول مسائل الأسرة، الميراث، المعاملات المالية، والعبادات، للإجابة على تساؤلاتكم الدينية.", service3Btn: "تعرف على المزيد",
        fatwasSectionTitle: "فتاوى ومقالات حديثة", fatwasSectionText: "استكشف مكتبتنا المتنامية من الفتاوى والمقالات التي تغطي جوانب متعددة من حياة المسلم.",
        fatwaTitle1: "أحكام الميراث في الإسلام", fatwaText1: "دليل مبسط لفهم توزيع الميراث وفق الشريعة الإسلامية.", readMore1: "اقرأ المزيد",
        fatwaTitle2: "بناء أسرة سعيدة في الغرب", fatwaText2: "نصائح وإرشادات للتعامل مع التحديات الأسرية المعاصرة.", readMore2: "اقرأ المزيد",
        viewAllFatwas: "عرض جميع الفتاوى والمقالات",
        contactSectionTitle: "تواصل معنا",
        contactIntro: "يمكنكم التواصل معنا مباشرةً للحصول على المساعدة والإرشاد الشرعي.",
        contactNote: "ملاحظة: فريقنا يعمل حالياً عن بعد، ويتم تحويل المكالمات إلى الأجهزة المحمولة. نقدر صبركم وتفهمكم!",
        directPhoneLabel: "للتواصل عبر الهاتف:",
        directEmailLabel: "للتواصل عبر البريد الإلكتروني:",
        contactClosingText: "نتطلع إلى خدمتكم والرد على استفساراتكم بأسرع وقت ممكن.",
        footerText: "&copy; 2024 مجلس الشريعة للأسرة المسلمة في لندن. جميع الحقوق محفوظة."
    }
};

// Function to toggle language
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const targetLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = targetLang;
    document.documentElement.dir = targetLang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[targetLang];

    for (const key in t) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = t[key];
        }
    }

    // Update logo alt text based on language
    const logoImg = document.querySelector('.navbar-brand img');
    if (logoImg) {
        logoImg.alt = targetLang === 'ar' ? 'شعار مجلس الشريعة' : 'Shariah Council Logo';
    }

    // Update the button text itself
    const langToggleButton = document.querySelector('.language-toggle');
    if (langToggleButton) {
        langToggleButton.textContent = targetLang === 'ar' ? 'English / العربية' : 'العربية / English';
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language to Arabic and direction to RTL
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    // Update the button text to show the option to switch to English
    const langToggleButton = document.querySelector('.language-toggle');
    if (langToggleButton) {
        langToggleButton.textContent = 'English / العربية';
    }
});

// Navbar Sticky and Scroll Animation
document.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionTop < viewportHeight - 100) {
            section.classList.add('animate-in');
        }
    });
});

// Smooth Scrolling for Navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - (document.getElementById('mainNavbar').offsetHeight),
                behavior: 'smooth'
            });
        }
    });
});

// Set active class on navbar links based on scroll position
const navLinks = document.querySelectorAll('.navbar .nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = sectionRect.top + window.scrollY;
        const sectionHeight = sectionRect.height;
        const navbarHeight = document.getElementById('mainNavbar').offsetHeight;

        if (pageYOffset >= sectionTop - navbarHeight && pageYOffset < sectionTop + sectionHeight - navbarHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});