// Language Toggle Logic
const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services",
        navFatwas: "Fatwas & Articles", navContact: "Contact Us",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us", // Updated
        whoWeAreSubheading: "Who We Are", // New
        whoWeAreP1: "We are a group of scholars and Imams, graduates of Al-Azhar Al-Sharif University, the oldest Islamic university in the world. We hold a higher degree (Bachelor's) in distinguished Sharia specializations, including:", // New
        usulAlDinHeading: "Fundamentals of Religion (Usul al-Din):", // New
        usulAlDinText: "Study of creed, exegesis (Tafsir), and Hadith.", // New
        shariaIslamiyaHeading: "Islamic Sharia:", // New
        shariaIslamiyaText: "Study of Fiqh (jurisprudence), its principles (Usul al-Fiqh), and comparative law.", // New
        whoWeAreP2: "We carry the message of knowledge and Da'wah (call to Islam), and strive to spread a moderate, enlightened understanding of Islam, based on profound knowledge and the moderate Azhari methodology.", // New
        whoWeAreP3: "We work to provide reliable religious content, based on authentic sources, in a contemporary style that meets the needs of Muslims in their time, without negligence or extremism.", // New
        whyChooseUsSubheading: "Why Choose Our Shariah Council?", // New - This was the old introSectionTitle
        introSectionText: "We provide reliable Islamic guidance and operate within the framework of British law, committed to transparency and justice in all our services. Our team of scholars and specialists is dedicated to serving our community and providing the necessary family support.",
        aboutFeature1Title: "Trust & Reliability", aboutFeature1Text: "We offer authentic and contemporary Islamic guidance.",
        aboutFeature2Title: "Fairness & Transparency", aboutFeature2Text: "We adhere to fairness and transparency in all our procedures and services.",
        aboutFeature3Title: "Adherence to UK Law", aboutFeature3Text: "We operate in full harmony with UK laws and its judicial system.",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage (Nikah)",
        service1Text: "Completing Islamic marriage contracts according to the noble Shariah rulings, and providing guidance to couples for building a stable family.",
        service1ExtraText: "This includes documenting contracts, ensuring all pillars and conditions of Shariah are met, and offering essential advice to couples to ensure a happy and stable marital life in accordance with Islamic teachings and local laws.",
        service1Btn: "Learn More",
        service1BtnLess: "Show Less",
        service2Title: "Divorce & Khula",
        service2Text: "Assistance with Islamic divorce and Khula procedures, mediation between parties, and providing advice to ensure everyone's rights.",
        service2ExtraText: "We strive to minimize disputes and protect the interests of children if any. We offer Shariah and legal advice regarding spousal maintenance, child custody, and property division, while maintaining an amicable atmosphere as much as possible.",
        service2Btn: "Learn More",
        service2BtnLess: "Show Less",
        service3Title: "Consultations & Fatwas",
        service3Text: "Islamic guidance on family matters, inheritance, financial transactions, and acts of worship, to answer your religious inquiries.",
        service3ExtraText: "Our specialized scholars provide accurate and reliable fatwas based on evidence from the Quran, Sunnah, and consensus, considering the contemporary circumstances of Muslims in the West, to offer practical Islamic solutions for various daily life issues.",
        service3Btn: "Learn More",
        service3BtnLess: "Show Less",
        service4Title: "Ruqyah Shariah",
        service4Text: "Providing Ruqyah Shariah sessions adhering to the Quran and Sunnah for treating envy, evil eye, and magic, committed to the highest standards of safety and privacy.",
        service4ExtraText: "We perform Ruqyah Shariah according to the correct prophetic methodology, using verses from the Holy Quran and authentic supplications. We ensure a safe and respectful environment for beneficiaries, with guidance and necessary advice for self-follow-up.",
        service4Btn: "Learn More",
        service4BtnLess: "Show Less",
        service5Title: "Quranic Recitation & Ijazah Courses",
        service5Text: "Advanced courses in Tajweed (Quranic recitation) for adults, with the possibility of obtaining an Ijazah (authorized chain of narration) with a continuous chain to Hafs 'an 'Asim from the way of Shatibiyyah.",
        service5ExtraText: "Courses are held under the supervision of specialized and authorized scholars, teaching theoretical and applied Tajweed rules, and helping students master Quran recitation. We also provide Ijazah pathways for those wishing to master the narration with a continuous chain.",
        service5Btn: "Learn More",
        service5BtnLess: "Show Less",
        service6Title: "Arabic Language Courses",
        service6Text: "Comprehensive Arabic language courses for adults of all levels, aiming to enable them to understand the Holy Quran and Sunnah and communicate effectively.",
        service6ExtraText: "Courses include grammar, morphology, conversation, reading, and writing. We use modern and engaging teaching methods to ensure the best results, whether for beginners or those wishing to refine their skills.",
        service6Btn: "Learn More",
        service6BtnLess: "Show Less",

        fatwasSectionTitle: "Latest Fatwas & Articles", fatwasSectionText: "Explore our growing library of fatwas and articles covering various aspects of Muslim life.",
        fatwaTitle2: "Building a Happy Family in the West",
        fatwaText2: "Tips and guidance for addressing contemporary family challenges. In this article, we discuss how to maintain Islamic identity in Western societies, the importance of family communication, and building a positive educational environment for children.",
        fatwaExtraText2: "We offer practical solutions for facing difficulties that Muslim families may encounter, such as reconciling Islamic values with the surrounding societal culture, and enhancing the role of mosques and Islamic centers in supporting the family and providing spiritual and social support. We also focus on the importance of Islamic upbringing for children amidst modern challenges, and ways to instill good values and ethics in them to become righteous individuals in society.",
        readMore2: "Read More",
        readLess2: "Show Less",
        viewAllFatwas: "View All Fatwas & Articles",
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
        applyNowBtn: "تواصل معنا الآن",
        introSectionTitle: "عن المجلس", // Updated
        whoWeAreSubheading: "من نحن", // New
        whoWeAreP1: "نحن مجموعة من العلماء والأئمة، تخرجنا في جامعة الأزهر الشريف، أعرق جامعة إسلامية في العالم. نحمل الإجازة العالية (البكالوريوس) في تخصصات شرعية رفيعة، تشمل:", // New
        usulAlDinHeading: "أصول الدين:", // New
        usulAlDinText: "دراسة العقيدة والتفسير والحديث الشريف.", // New
        shariaIslamiyaHeading: "الشريعة الإسلامية:", // New
        shariaIslamiyaText: "دراسة الفقه وأصوله والقانون المقارن.", // New
        whoWeAreP2: "نحمل على عاتقنا رسالة العلم والدعوة، ونسعى لنشر الفهم الوسطي المستنير للإسلام، مستندين إلى العلم الراسخ والمنهج الأزهري المعتدل.", // New
        whoWeAreP3: "نعمل على تقديم محتوى ديني موثوق، مستند إلى المصادر الأصيلة، وبأسلوب معاصر يلبي حاجات المسلمين في زمانهم، دون تفريط أو غلو.", // New
        whyChooseUsSubheading: "لماذا تختار مجلس الشريعة؟", // New - This was the old introSectionTitle
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
        viewAllFatwas: "عرض جميع الفتاوى والمقالات",
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

// Function to apply translations
function applyTranslations(lang) {
    const t = translations[lang];
    for (const key in t) {
        const element = document.getElementById(key);
        if (element) {
            if (element.id === 'navLangToggle') {
                element.textContent = lang === 'ar' ? 'English / العربية' : 'العربية / English';
            } else {
                element.textContent = t[key];
            }
        }
    }

    const logoImg = document.querySelector('.navbar-brand img');
    if (logoImg) {
        logoImg.alt = lang === 'ar' ? 'شعار مجلس الشريعة' : 'Shariah Council Logo';
    }
}

// Function to toggle language
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const targetLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = targetLang;
    document.documentElement.dir = targetLang === 'ar' ? 'rtl' : 'ltr';

    applyTranslations(targetLang);

    // After changing language, reset all expandable sections to their initial (collapsed) state
    // and reset button texts and icons to 'Learn More' / 'Read More' with right arrow
    document.querySelectorAll('.service-description, .fatwa-content').forEach(content => {
        content.classList.remove('expanded');
    });

    document.querySelectorAll('.toggle-content, .toggle-fatwa').forEach(button => {
        const currentLang = document.documentElement.lang;
        const buttonTextKey = button.id;
        button.innerHTML = `${translations[currentLang][buttonTextKey]} <i class="fas fa-arrow-right"></i>`;
    });
}

// Initialize language and events on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language to Arabic and apply translations
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    applyTranslations('ar');

    // Add event listeners for both "Learn More" (services) and "Read More" (fatwas) buttons
    document.querySelectorAll('.toggle-content, .toggle-fatwa').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const content = document.getElementById(targetId);
            const currentLang = document.documentElement.lang;
            const buttonId = this.id;

            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                if (this.classList.contains('toggle-content')) {
                    this.innerHTML = `${translations[currentLang][buttonId]} <i class="fas fa-arrow-right"></i>`;
                } else if (this.classList.contains('toggle-fatwa')) {
                    this.innerHTML = `${translations[currentLang][buttonId]} <i class="fas fa-arrow-right"></i>`;
                }
            } else {
                content.classList.add('expanded');
                if (this.classList.contains('toggle-content')) {
                    const buttonLessKey = `${buttonId}Less`;
                    this.innerHTML = `${translations[currentLang][buttonLessKey]} <i class="fas fa-arrow-up"></i>`;
                } else if (this.classList.contains('toggle-fatwa')) {
                    const readLessKey = buttonId.replace('readMore', 'readLess');
                    this.innerHTML = `${translations[currentLang][readLessKey]} <i class="fas fa-arrow-up"></i>`;
                }
            }
        });
    });

    // Add event listener to close navbar when a nav-link is clicked on mobile
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.getElementById('navbarNav');
            // Check if the navbar is currently expanded (on mobile)
            if (navbarCollapse.classList.contains('show')) {
                // Manually trigger the collapse (simulating a click on the toggler)
                navbarToggler.click();
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
        if (sectionTop < viewportHeight - 150) {
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
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight - 50) {
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
