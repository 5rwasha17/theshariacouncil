// تم تغيير الترتيب هنا لتبدأ الإنجليزية أولاً
document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'en'; // اللغة الأساسية الآن إنجليزية
    document.documentElement.lang = defaultLang;
    document.documentElement.dir = 'ltr';
    applyTranslations(defaultLang);

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('mainNavbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
});

// إضافة وظيفة التبديل الذكي
document.getElementById('navLangToggle').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    applyTranslations(newLang);
    
    // إغلاق المنيو في الموبايل بعد الاختيار
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
});

// تحديث مصفوفة الترجمة لضمان دقة اللغة الإنجليزية
function applyTranslations(lang) {
    const t = translations[lang];
    // ... دالة التطبيق (نفس المنطق السابق مع تحديث الـ IDs)
    document.querySelectorAll('[id]').forEach(el => {
        if (t[el.id]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[el.id];
            } else {
                el.textContent = t[el.id];
            }
        }
    });
}
