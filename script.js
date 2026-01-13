const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navGallery: "Gallery",
        navContact: "Contact",
        heroTitle: "Shariah Council for the Muslim Family",
        heroText: "A safe and professional environment for Islamic guidance.",
        applyNowBtn: "Contact Us Now",
        services: [
            { title: "Marriage (Nikah)", icon: "fa-ring", desc: "Official Islamic marriage contracts." },
            { title: "Divorce (Khula/Talaq)", icon: "fa-handshake-slash", desc: "Solving marital disputes legally." },
            { title: "Fatwas", icon: "fa-book-quran", desc: "Trusted answers to your questions." }
        ]
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navGallery: "الصور",
        navContact: "اتصل بنا",
        heroTitle: "المجلس الشرعي للأسرة المسلمة",
        heroText: "بيئة آمنة ومهنية للتوجيه الشرعي في لندن.",
        applyNowBtn: "اتصل بنا الآن",
        services: [
            { title: "عقود الزواج", icon: "fa-ring", desc: "توثيق الزواج الشرعي." },
            { title: "الطلاق والخلع", icon: "fa-handshake-slash", desc: "حل النزاعات الزوجية شرعياً." },
            { title: "الفتاوى", icon: "fa-book-quran", desc: "إجابات موثوقة لتساؤلاتكم." }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('en'); // البداية بالإنجليزية
    
    window.addEventListener('scroll', () => {
        document.getElementById('mainNavbar').classList.toggle('scrolled', window.scrollY > 50);
    });
});

document.getElementById('navLangToggle').addEventListener('click', function() {
    const newLang = document.documentElement.lang === 'en' ? 'ar' : 'en';
    updateLanguage(newLang);
});

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('navLangToggle').textContent = lang === 'en' ? 'العربية' : 'English';

    const t = translations[lang];
    // تحديث النصوص الثابتة
    for (let id in t) {
        if (id !== 'services' && document.getElementById(id)) {
            document.getElementById(id).textContent = t[id];
        }
    }

    // تحديث بطاقات الخدمات
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
