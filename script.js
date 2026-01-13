const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services",
        navGallery: "Gallery", navFatwas: "Fatwas", navContact: "Contact",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us",
        whoWeAreSubheading: "Who We Are",
        whoWeAreP1: "We are a group of scholars and Imams, graduates of Al-Azhar Al-Sharif University, the oldest Islamic university in the world.",
        whoWeAreP2: "We carry the message of knowledge and Da'wah, striving to spread a moderate, enlightened understanding of Islam.",
        servicesSectionTitle: "Our Main Services",
        fatwasSectionTitle: "Latest Fatwas & Articles",
        fatwaTitle2: "Building a Happy Family in the West",
        fatwaText2: "Tips for maintaining Islamic identity in Western societies and building a positive environment for children.",
        contactSectionTitle: "Contact Us",
        contactIntro: "Contact us directly for assistance and Islamic guidance.",
        services: [
            { id: "s1", title: "Islamic Marriage (Nikah)", icon: "fa-ring", desc: "Completing marriage contracts according to Shariah and guiding couples." },
            { id: "s2", title: "Divorce & Khula", icon: "fa-handshake-slash", desc: "Assistance with divorce procedures, mediation, and ensuring rights." },
            { id: "s3", title: "Consultations & Fatwas", icon: "fa-book-quran", desc: "Islamic guidance on family, inheritance, and financial matters." },
            { id: "s4", title: "Ruqyah Shariah", icon: "fa-heart-pulse", desc: "Ruqyah sessions adhering to Quran and Sunnah for healing." },
            { id: "s5", title: "Quran Courses", icon: "fa-mosque", desc: "Advanced Tajweed courses and Ijazah with continuous chains." }
        ]
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من نحن", navServices: "خدماتنا",
        navGallery: "معرض الصور", navFatwas: "فتاوى", navContact: "تواصل معنا",
        heroTitle: "مجلس الشريعة للأسرة المسلمة في لندن",
        heroText: "إرشاد شرعي لحياة مستقرة في بيئة آمنة واحترافية.",
        applyNowBtn: "تواصل معنا الآن",
        introSectionTitle: "عن المجلس",
        whoWeAreSubheading: "من نحن",
        whoWeAreP1: "نحن مجموعة من العلماء والأئمة، تخرجنا في جامعة الأزهر الشريف، أعرق جامعة إسلامية في العالم.",
        whoWeAreP2: "نحمل على عاتقنا رسالة العلم والدعوة، ونسعى لنشر الفهم الوسطي المستنير للإسلام.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        fatwasSectionTitle: "فتاوى ومقالات حديثة",
        fatwaTitle2: "بناء أسرة سعيدة في الغرب",
        fatwaText2: "نصائح للحفاظ على الهوية الإسلامية في المجتمعات الغربية وبناء بيئة إيجابية للأطفال.",
        contactSectionTitle: "تواصل معنا",
        contactIntro: "يمكنكم التواصل معنا مباشرةً للحصول على المساعدة والإرشاد الشرعي.",
        services: [
            { id: "s1", title: "الزواج الإسلامي (النكاح)", icon: "fa-ring", desc: "إتمام عقود الزواج الشرعية وتقديم الإرشاد للمقبلين على الزواج." },
            { id: "s2", title: "الطلاق والخلع", icon: "fa-handshake-slash", desc: "المساعدة في إجراءات الطلاق والوساطة لضمان الحقوق." },
            { id: "s3", title: "الاستشارات والفتاوى", icon: "fa-book-quran", desc: "إرشادات شرعية حول مسائل الأسرة، الميراث، والمعاملات المالية." },
            { id: "s4", title: "الرقية الشرعية", icon: "fa-heart-pulse", desc: "جلسات الرقية الشرعية المطابقة للكتاب والسنة لعلاج الحسد والسحر." },
            { id: "s5", title: "دورات القرآن الكريم", icon: "fa-mosque", desc: "دورات متقدمة في التجويد والحصول على إجازات بسند متصل." }
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
            <div class="service-card shadow-sm">
                <i class="fas ${s.icon}"></i>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('en'); // اللغة الافتراضية
    document.getElementById('navLangToggle').addEventListener('click', () => {
        updateLanguage(document.documentElement.lang === 'en' ? 'ar' : 'en');
    });
});
