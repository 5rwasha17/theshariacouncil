// Language Toggle Logic
const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services",
        navFatwas: "Fatwas & Articles", navContact: "Contact Us",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now", // Added specific text for the button
        introSectionTitle: "Why Choose Our Shariah Council?",
        introSectionText: "We provide reliable Islamic guidance and operate within the framework of British law, committed to transparency and justice in all our services. Our team of scholars and specialists is dedicated to serving our community and providing the necessary family support.",
        aboutFeature1Title: "Trust & Reliability", aboutFeature1Text: "We offer authentic and contemporary Islamic guidance.",
        aboutFeature2Title: "Fairness & Transparency", aboutFeature2Text: "We adhere to fairness and transparency in all our procedures and services.",
        aboutFeature3Title: "Adherence to UK Law", aboutFeature3Text: "We operate in full harmony with UK laws and its judicial system.",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage (Nikah)",
        service1Text: "Completing Islamic marriage contracts according to the noble Shariah rulings, and providing guidance to couples for building a stable family.",
        service1ExtraText: "This includes documenting contracts, ensuring all pillars and conditions of Shariah are met, and offering essential advice to couples to ensure a happy and stable marital life in accordance with Islamic teachings and local laws.",
        service1Btn: "Learn More",
        service1BtnLess: "Show Less", // New for services
        service2Title: "Divorce & Khula",
        service2Text: "Assistance with Islamic divorce and Khula procedures, mediation between parties, and providing advice to ensure everyone's rights.",
        service2ExtraText: "We strive to minimize disputes and protect the interests of children if any. We offer Shariah and legal advice regarding spousal maintenance, child custody, and property division, while maintaining an amicable atmosphere as much as possible.",
        service2Btn: "Learn More",
        service2BtnLess: "Show Less", // New for services
        service3Title: "Consultations & Fatwas",
        service3Text: "Islamic guidance on family matters, inheritance, financial transactions, and acts of worship, to answer your religious inquiries.",
        service3ExtraText: "Our specialized scholars provide accurate and reliable fatwas based on evidence from the Quran, Sunnah, and consensus, considering the contemporary circumstances of Muslims in the West, to offer practical Islamic solutions for various daily life issues.",
        service3Btn: "Learn More",
        service3BtnLess: "Show Less", // New for services
        service4Title: "Ruqyah Shariah",
        service4Text: "Providing Ruqyah Shariah sessions adhering to the Quran and Sunnah for treating envy, evil eye, and magic, committed to the highest standards of safety and privacy.",
        service4ExtraText: "We perform Ruqyah Shariah according to the correct prophetic methodology, using verses from the Holy Quran and authentic supplications. We ensure a safe and respectful environment for beneficiaries, with guidance and necessary advice for self-follow-up.",
        service4Btn: "Learn More",
        service4BtnLess: "Show Less", // New for services
        service5Title: "Quranic Recitation & Ijazah Courses",
        service5Text: "Advanced courses in Tajweed (Quranic recitation) for adults, with the possibility of obtaining an Ijazah (authorized chain of narration) with a continuous chain to Hafs 'an 'Asim from the way of Shatibiyyah.",
        service5ExtraText: "Courses are held under the supervision of specialized and authorized scholars, teaching theoretical and applied Tajweed rules, and helping students master Quran recitation. We also provide Ijazah pathways for those wishing to master the narration with a continuous chain.",
        service5Btn: "Learn More",
        service5BtnLess: "Show Less", // New for services
        service6Title: "Arabic Language Courses",
        service6Text: "Comprehensive Arabic language courses for adults of all levels, aiming to enable them to understand the Holy Quran and Sunnah and communicate effectively.",
        service6ExtraText: "Courses include grammar, morphology, conversation, reading, and writing. We use modern and engaging teaching methods to ensure the best results, whether for beginners or those wishing to refine their skills.",
        service6Btn: "Learn More",
        service6BtnLess: "Show Less", // New for services

        fatwasSectionTitle: "Latest Fatwas & Articles", fatwasSectionText: "Explore our growing library of fatwas and articles covering various aspects of Muslim life.",
        fatwaTitle2: "Building a Happy Family in the West",
        fatwaText2: "Tips and guidance for addressing contemporary family challenges. In this article, we discuss how to maintain Islamic identity in Western societies, the importance of family communication, and building a positive educational environment for children.",
        fatwaExtraText2: "We offer practical solutions for facing difficulties that Muslim families may encounter, such as reconciling Islamic values with the surrounding societal culture, and enhancing the role of mosques and Islamic centers in supporting the family and providing spiritual and social support. We also focus on the importance of Islamic upbringing for children amidst modern challenges, and ways to instill good values and ethics in them to become righteous individuals in society.",
        readMore2: "Read More",
        readLess2: "Show Less",
        viewAllFatwas: "View All Fatwas & Articles", // Added specific text for the button
        contactSectionTitle: "Contact Us",
        contactIntro: "You can contact us directly for assistance and Islamic guidance.",
        contactNote: "Note: Our team currently works remotely, and calls are redirected to mobile devices. We appreciate your patience and understanding!",
        directPhoneLabel: "Contact us by phone:",
        phone1: "00447404949128",
        phone2: "00447450209680",
        directEmailLabel: "Or by email:",
        contactClosingText: "We look forward to serving you and answering your inquiries as soon as possible.",
        footerText: "&copy; 2024 Shariah Council for the Muslim Family in London. All Rights Reserved."
    },
    ar: {
        navHome: "الرئيسية", navAbout: "عن المجلس", navServices: "خدماتنا",
        navFatwas: "فتاوى ومقالات", navContact: "تواصل معنا",
        heroTitle: "مجلس الشريعة للأسرة المسلمة في لندن",
        heroText: "إرشاد شرعي لحياة مستقرة في بيئة آمنة واحترافية.",
        applyNowBtn: "تواصل معنا الآن", // Added specific text for the button
        introSectionTitle: "لماذا تختار مجلس الشريعة؟",
        introSectionText: "نحن نقدم إرشادات شرعية موثوقة ونعمل ضمن إطار القانون البريطاني، ملتزمون بالشفافية والعدل في كل خدماتنا. فريقنا من العلماء والمختصين مكرس لخدمة مجتمعنا وتوفير الدعم الأسري اللازم.",
        aboutFeature1Title: "ثقة وموثوقية", aboutFeature1Text: "نقدم إرشادات شرعية تستند إلى منهج إسلامي أصيل ومعاصر.",
        aboutFeature2Title: "عدالة وشفافية", aboutFeature2Text: "نلتزم بالعدل والشفافية في جميع إجراءاتنا وخدماتنا.",
        aboutFeature3Title: "التزام بالقانون البريطاني", aboutFeature3Text: "نعمل بانسجام تام مع قوانين المملكة المتحدة ونظامها القضائي.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        service1Title: "الزواج الإسلامي (النكاح)",
        service1Text: "إتمام عقود الزواج الشرعية وفقًا لأحكام الشريعة الغراء، وتقديم الإرشاد للمقبلين على الزواج لبناء أسرة مستقرة.",
        service1ExtraText: "يشمل ذلك توثيق العقود، التأكد من استيفاء جميع الأركان والشروط الشرعية، وتقديم نصائح مهمة للزوجين لضمان حياة زوجية سعيدة ومستقرة تتفق مع تعاليم الإسلام والقوانين المحلية.",
        service1Btn: "تعرف على المزيد",
        service1BtnLess: "أقل",
        service2Title: "الطلاق والخلع",
        service2Text: "المساعدة في إجراءات الطلاق والخلع الشرعية، والوساطة بين الطرفين، وتقديم النصائح لضمان حقوق الجميع.",
        service2ExtraText: "نسعى جاهدين لتقليل النزاعات وحماية مصالح الأطفال إن وجدوا. نقدم المشورة الشرعية والقانونية حول نفقة الزوجة، حضانة الأطفال، وتقسيم الممتلكات، مع الحفاظ على الأجواء الودية قدر الإمكان.",
        service2Btn: "تعرف على المزيد",
        service2BtnLess: "أقل",
        service3Title: "الاستشارات والفتاوى",
        service3Text: "إرشادات شرعية حول مسائل الأسرة، الميراث، المعاملات المالية، والعبادات، للإجابة على تساؤلاتكم الدينية.",
        service3ExtraText: "يقدم علماؤنا المتخصصون فتاوى دقيقة وموثوقة بناءً على أدلة الكتاب والسنة والإجماع، مع مراعاة الظروف المعاصرة للمسلمين في الغرب، لتقديم حلول شرعية عملية لمختلف قضايا الحياة اليومية.",
        service3Btn: "تعرف على المزيد",
        service3BtnLess: "أقل",
        service4Title: "الرقية الشرعية",
        service4Text: "تقديم جلسات الرقية الشرعية المطابقة للكتاب والسنة لعلاج الحسد، العين، والسحر، مع التزام بأعلى معايير الأمان والخصوصية.",
        service4ExtraText: "نقوم بالرقية الشرعية وفق المنهج النبوي الصحيح، باستخدام آيات القرآن الكريم والأدعية المأثورة. نضمن بيئة آمنة ومحترمة للمستفيدين، مع التوجيه والنصائح اللازمة للمتابعة الذاتية.",
        service4Btn: "تعرف على المزيد",
        service4BtnLess: "أقل",
        service5Title: "دورات تجويد وإجازات قرآنية",
        service5Text: "دورات متقدمة في تجويد القرآن الكريم للكبار، مع إمكانية الحصول على إجازة بسند متصل برواية حفص عن عاصم من طريق الشاطبية.",
        service5ExtraText: "تُعقد الدورات على يد مشايخ متخصصين ومجازين، لتعليم أحكام التجويد النظرية والتطبيقية، ومساعدة الطلاب على إتقان تلاوة القرآن الكريم. كما نوفر مسارات للإجازة لمن يرغبون في إتقان الرواية بسند متصل.",
        service5Btn: "تعرف على المزيد",
        service5BtnLess: "أقل",
        service6Title: "دورات اللغة العربية",
        service6Text: "تقديم دورات شاملة لتعليم اللغة العربية للكبار من جميع المستويات، بهدف تمكينهم من فهم القرآن الكريم والسنة النبوية والتواصل الفعال.",
        service6ExtraText: "تشمل الدورات القواعد النحوية والصرفية، المحادثة، القراءة، والكتابة. نستخدم أساليب تعليمية حديثة وممتعة لضمان أفضل النتائج، سواء للمبتدئين أو لمن يرغبون في صقل مهاراتهم.",
        service6Btn: "تعرف على المزيد",
        service6BtnLess: "أقل",

        fatwasSectionTitle: "فتاوى ومقالات حديثة", fatwasSectionText: "استكشف مكتبتنا المتنامية من الفتاوى والمقالات التي تغطي جوانب متعددة من حياة المسلم.",
        fatwaTitle2: "بناء أسرة سعيدة في الغرب",
        fatwaText2: "نصائح وإرشادات للتعامل مع التحديات الأسرية المعاصرة. نتناول في هذا المقال كيفية الحفاظ على الهوية الإسلامية في المجتمعات الغربية، وأهمية التواصل الأسري، وبناء بيئة تعليمية إيجابية للأطفال.",
        fatwaExtraText2: "نقدم حلولاً عملية لمواجهة الصعوبات التي قد تواجه الأسر المسلمة، مثل التوفيق بين القيم الإسلامية وثقافة المجتمع المحيط، وتعزيز دور المسجد والمراكز الإسلامية في دعم الأسرة وتوفير الدعم الروحي والاجتماعي. كما نركز على أهمية التربية الإسلامية للأبناء في ظل التحديات الحديثة، وسبل غرس القيم والأخلاق الحميدة في نفوسهم ليكونوا أفراداً صالحين في المجتمع.",
        readMore2: "اقرأ المزيد",
        readLess2: "أقل",
        viewAllFatwas: "عرض جميع الفتاوى والمقالات", // Added specific text for the button
        contactSectionTitle: "تواصل معنا",
        contactIntro: "يمكنكم التواصل معنا مباشرةً للحصول على المساعدة والإرشاد الشرعي.",
        contactNote: "ملاحظة: فريقنا يعمل حالياً عن بعد، ويتم تحويل المكالمات إلى الأجهزة المحمولة. نقدر صبركم وتفهمكم!",
        directPhoneLabel: "للتواصل عبر الهاتف:",
        phone1: "00447404949128",
        phone2: "00447450209680",
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
            if (element.id === 'navLangToggle') {
                element.textContent = targetLang === 'ar' ? 'English / العربية' : 'العربية / English';
            } else {
                element.textContent = t[key];
            }
        }
    }

    // Update logo alt text based on language
    const logoImg = document.querySelector('.navbar-brand img');
    if (logoImg) {
        logoImg.alt = targetLang === 'ar' ? 'شعار مجلس الشريعة' : 'Shariah Council Logo';
    }

    // After changing language, reset all expandable sections to their initial (collapsed) state
    document.querySelectorAll('.service-description, .fatwa-content').forEach(content => {
        content.classList.remove('expanded');
    });

    // Reset "Learn More"/"Read More" button texts and icon direction
    document.querySelectorAll('.toggle-content, .toggle-fatwa').forEach(button => {
        const currentLang = document.documentElement.lang;
        let buttonTextKey = button.id; // e.g., 'service1Btn', 'readMore2'

        // Determine if it's a "Show Less" or "Read Less" state that needs to revert to "Learn More"/"Read More"
        const isServiceBtn = button.classList.contains('toggle-content');
        const isFatwaBtn = button.classList.contains('toggle-fatwa');

        if (isServiceBtn && button.innerHTML.includes(translations[currentLang][`${button.id}Less`])) {
            button.innerHTML = `${translations[currentLang][button.id]} <i class="fas fa-arrow-right"></i>`;
        } else if (isFatwaBtn && button.innerHTML.includes(translations[currentLang][button.id.replace('readMore', 'readLess')])) {
             button.innerHTML = `${translations[currentLang][button.id]} <i class="fas fa-arrow-right"></i>`;
        } else {
            // Default state or if it's already in the "Learn More"/"Read More" state
            button.innerHTML = `${translations[currentLang][buttonTextKey]} <i class="fas fa-arrow-right"></i>`;
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language to Arabic
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    const langToggleButton = document.getElementById('navLangToggle');
    if (langToggleButton) {
        langToggleButton.textContent = 'English / العربية';
    }
    // Set initial text for buttons (like applyNowBtn, viewAllFatwas)
    for (const key in translations['ar']) {
        const element = document.getElementById(key);
        if (element && translations['ar'][key]) { // Check if translation exists for the element
            if (element.id === 'navLangToggle') {
                element.textContent = 'English / العربية';
            } else {
                element.textContent = translations['ar'][key];
            }
        }
    }


    // Add event listeners for both "Learn More" (services) and "Read More" (fatwas) buttons
    document.querySelectorAll('.toggle-content, .toggle-fatwa').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.dataset.target; // Get the ID of the content div (service-description or fatwa-content)
            const content = document.getElementById(targetId);
            const currentLang = document.documentElement.lang;
            const buttonId = this.id; // e.g., service1Btn, readMore2

            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                // Change text to 'Learn More' or 'Read More'
                if (this.classList.contains('toggle-content')) {
                    this.innerHTML = `${translations[currentLang][buttonId]} <i class="fas fa-arrow-right"></i>`;
                } else if (this.classList.contains('toggle-fatwa')) {
                    this.innerHTML = `${translations[currentLang][buttonId]} <i class="fas fa-arrow-right"></i>`;
                }
            } else {
                content.classList.add('expanded');
                // Change text to 'Show Less' or 'Read Less'
                if (this.classList.contains('toggle-content')) {
                    const buttonLessKey = `${buttonId}Less`; // e.g., service1BtnLess
                    this.innerHTML = `${translations[currentLang][buttonLessKey]} <i class="fas fa-arrow-up"></i>`;
                } else if (this.classList.contains('toggle-fatwa')) {
                    const readLessKey = buttonId.replace('readMore', 'readLess'); // e.g., readLess2
                    this.innerHTML = `${translations[currentLang][readLessKey]} <i class="fas fa-arrow-up"></i>`;
                }
            }
        });
    });
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
        // Adjust trigger point for animation
        if (sectionTop < viewportHeight - 150) { /* Changed from 100 to 150 */
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
    const navbarHeight = document.getElementById('mainNavbar').offsetHeight;
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight; // Adjust sectionTop by navbar height
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
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
