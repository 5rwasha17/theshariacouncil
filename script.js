// ... (The translations object remains exactly the same as before) ...
// فقط انسخ كائن الترجمات translations القديم وضعه هنا، ثم استخدم الكود التالي للتهيئة:

// ... (Rest of translations object) ...

// --- Initialization Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // START IN ENGLISH (تغيير الافتراضي للإنجليزية)
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    // We don't need to call applyTranslations('en') initially because 
    // the HTML is already hardcoded in English to prevent flashing.
    
    // Setup Modal
    const modalElement = document.getElementById('geminiErrorModal');
    if (modalElement) {
        geminiErrorModalInstance = new bootstrap.Modal(modalElement);
    }

    // Toggle Buttons Logic
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
                let buttonLessKey;
                if (this.classList.contains('toggle-content')) {
                    buttonLessKey = `${buttonId}Less`;
                } else {
                    buttonLessKey = buttonId.replace('More', 'Less');
                }
                // Check if translation exists, otherwise fallback (simple fix)
                const text = translations[currentLang][buttonLessKey] || (currentLang === 'ar' ? 'أقل' : 'Show Less');
                this.innerHTML = `${text} <i class="fas fa-arrow-up"></i>`;
            } else {
                if(extraContentElement) extraContentElement.style.display = 'none';
                const text = translations[currentLang][buttonId] || (currentLang === 'ar' ? 'تعرف على المزيد' : 'Learn More'); // Fallback check
                this.innerHTML = `${text} <i class="fas fa-arrow-right"></i>`;
            }
        });
    });

    // Gemini Listener
    document.querySelectorAll('.gemini-clarify-btn').forEach(button => {
        button.addEventListener('click', () => handleGeminiClarify(button));
    });

    // Mobile Menu Auto-Close
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Language Toggle Listener
    const langToggleButton = document.getElementById('navLangToggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'en' ? 'ar' : 'en'; // Switch logic
            applyTranslations(newLang);

            // Close menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); 
            }
        });
    }
});

// ... (Rest of scroll logic remains the same) ...
