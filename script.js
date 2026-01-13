const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services",
        navGallery: "Gallery", navContact: "Contact",
        welcomeBadge: "Trusted Islamic Guidance",
        heroTitle: "Shariah Council for the Muslim Family",
        heroText: "A professional beacon for Shariah services in London, rooted in Al-Azhar methodology and committed to UK law.",
        applyNowBtn: "Contact Our Scholars",
        introSectionTitle: "About the Council",
        whoWeAreSubheading: "Expertise from Al-Azhar",
        whoWeAreP1: "We are a group of scholars and Imams from Al-Azhar Al-Sharif University, holding degrees in Fundamentals of Religion (Usul al-Din), Sharia and Law, and Arabic Language.",
        whoWeAreP2: "We strive to spread moderate Islamic values to help Muslims in London balance their faith and contemporary life through expert fatwas and counseling.",
        ourVisionHeading: "Our Core Vision",
        ourVisionText: "Promoting family stability and a peaceful, moderate Islamic presence in British society.",
        servicesSectionTitle: "Our Services",
        contactSectionTitle: "Contact Us",
        services: [
            { title: "Islamic Marriage", icon: "fa-ring", desc: "Official Nikah contracts following Shariah principles and legal guidance." },
            { title: "Divorce & Khula", icon: "fa-handshake-slash", desc: "Expert mediation and Shariah-compliant dissolution of marriage with full confidentiality." },
            { title: "Fatwas & Consultations", icon: "fa-book-quran", desc: "Trusted answers to family, inheritance, and personal issues based on Azhari methodology." },
            { title: "Ruqyah Shariah", icon: "fa-heart-pulse", desc: "Spiritual sessions according to Quran and Sunnah for healing and peace." },
            { title: "Quran & Arabic", icon: "fa-mosque", desc: "Specialized courses in Tajweed, memorization, and Arabic for all ages." }
        ]
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "خدماتنا",
        navGallery: "معرض الصور", navContact: "اتصل بنا",
        welcomeBadge: "إرشاد شرعي موثوق",
        heroTitle: "مجلس الشريعة للأسرة المسلمة في لندن",
        heroText: "منارة مهنية للخدمات الشرعية، تنطلق من المنهج الأزهري الوسطي وتلتزم بالقانون البريطاني.",
        applyNowBtn: "تواصل مع علمائنا",
        introSectionTitle: "عن المجلس",
        whoWeAreSubheading: "خبرة من قلب الأزهر",
        whoWeAreP1: "نحن مجموعة من العلماء والأئمة خريجي جامعة الأزهر الشريف، نحمل تخصصات في أصول الدين، الشريعة والقانون، واللغة العربية.",
        whoWeAreP2: "نسعى لنشر قيم الإسلام الوسطي لمساعدة المسلمين في لندن على الموازنة بين دينهم وحياتهم المعاصرة من خلال الفتاوى والاستشارات.",
        ourVisionHeading: "رؤيتنا الجوهرية",
        ourVisionText: "تعزيز الاستقرار الأسري وضمان وجود إسلامي وسطى مسالم في المجتمع البريطاني.",
        servicesSectionTitle: "خدماتنا",
        contactSectionTitle: "اتصل بنا",
        services: [
            { title: "الزواج الإسلامي", icon: "fa-ring", desc: "إتمام عقود النكاح الشرعية وفق الضوابط مع تقديم الإرشاد للمقبلين على الزواج." },
            { title: "الطلاق والخلع", icon: "fa-handshake-slash", desc: "وساطة خبيرة وإجراءات شرعية لإنهاء الزواج مع الحفاظ الكامل على الخصوصية." },
            { title: "الفتاوى والاستشارات", icon: "fa-book-quran", desc: "إجابات موثوقة في قضايا الأسرة والمواريث وفق المنهج الأزهري." },
            { title: "الرقية الشرعية", icon: "fa-heart-pulse", desc: "جلسات استشفاء روحي وفق الكتاب والسنة للطمأنينة والسكينة." },
            { title: "القرآن والعربية", icon: "fa-mosque", desc: "دورات متخصصة في التجويد، الحفظ، واللغة العربية لكافة الأعمار." }
        ]
    }
};

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('navLangToggle').textContent = lang === 'en' ? 'العربية' : 'English';

    const t = translations[lang];
    for (let key in t) {
        const el = document.getElementById(key);
        if (el && key !== 'services') el.textContent = t[key];
    }

    const container = document.getElementById('servicesContainer');
    container.innerHTML = t.services.map(s => `
        <div class="col-md-4">
            <div class="service-card-modern shadow-sm">
                <i class="fas ${s.icon}"></i>
                <h3 class="h5 fw-bold text-white">${s.title}</h3>
                <p class="text-white-50 small mt-3">${s.desc}</p>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('en'); 
    document.getElementById('navLangToggle').addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        updateLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
});
