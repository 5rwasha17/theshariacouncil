// Language Toggle Logic
const translations = {
    en: {
        navHome: "Home", navAbout: "About Us", navServices: "Services",
        navGallery: "Gallery", 
        navFatwas: "Fatwas & Articles", navContact: "Contact Us",
        heroTitle: "Shariah Council for the Muslim Family in London",
        heroText: "Islamic guidance for a stable life in a safe and professional environment.",
        applyNowBtn: "Contact Us Now",
        introSectionTitle: "About Us", 
        whoWeAreSubheading: "Who We Are", 
        whoWeAreP1: "We are a group of scholars and Imams, graduates of Al-Azhar Al-Sharif University, the oldest Islamic university in the world. We hold a higher degree (Bachelor's) in distinguished Sharia specializations, including:", 
        usulAlDinHeading: "Fundamentals of Religion (Usul al-Din)", 
        usulAlDinText: "Study of creed, exegesis (Tafsir), and Hadith.", 
        shariaIslamiyaHeading: "Islamic Sharia", 
        shariaIslamiyaText: "Study of Fiqh (jurisprudence), its principles (Usul al-Fiqh), and comparative law.", 
        whoWeAreP2: "We carry the message of knowledge and Da'wah (call to Islam), and strive to spread a moderate, enlightened understanding of Islam, based on profound knowledge and the moderate Azhari methodology.", 
        whoWeAreP3: "We work to provide reliable religious content, based on authentic sources, in a contemporary style that meets the needs of Muslims in their time, without negligence or extremism.", 
        whyChooseUsSubheading: "Why Choose Our Shariah Council?", 
        introSectionText: "We provide reliable Islamic guidance and operate within the framework of British law, committed to transparency and justice in all our services. Our team of scholars and specialists is dedicated to serving our community and providing the necessary family support.",
        aboutFeature1Title: "Trust & Reliability", aboutFeature1Text: "We offer authentic and contemporary Islamic guidance.",
        aboutFeature2Title: "Fairness & Transparency", aboutFeature2Text: "We adhere to fairness and transparency in all our procedures and services.",
        aboutFeature3Title: "Adherence to UK Law", aboutFeature3Text: "We operate in full harmony with UK laws and its judicial system.",
        servicesSectionTitle: "Our Main Services",
        service1Title: "Islamic Marriage (Nikah)",
        service1Text: "Completing Islamic marriage contracts according to the noble Shariah rulings, and providing guidance to couples for building a stable family.",
        service1ExtraText: "This includes documenting contracts, ensuring all pillars and conditions of Shariah are met, and offering essential advice to couples to ensure a happy and stable marital life in accordance with Islamic teachings and local laws.",
        service1Btn: "Learn More", service1BtnLess: "Show Less",
        service2Title: "Divorce & Khula",
        service2Text: "Assistance with Islamic divorce and Khula procedures, mediation between parties, and providing advice to ensure everyone's rights.",
        service2ExtraText: "We strive to minimize disputes and protect the interests of children if any. We offer Shariah and legal advice regarding spousal maintenance, child custody, and property division, while maintaining an amicable atmosphere as much as possible.",
        service2Btn: "Learn More", service2BtnLess: "Show Less",
        service3Title: "Consultations & Fatwas",
        service3Text: "Islamic guidance on family matters, inheritance, financial transactions, and acts of worship, to answer your religious inquiries.",
        service3ExtraText: "Our specialized scholars provide accurate and reliable fatwas based on evidence from the Quran, Sunnah, and consensus, considering the contemporary circumstances of Muslims in the West, to offer practical Islamic solutions for various daily life issues.",
        service3Btn: "Learn More", service3BtnLess: "Show Less",
        service4Title: "Ruqyah Shariah",
        service4Text: "Providing Ruqyah Shariah sessions adhering to the Quran and Sunnah for treating envy, evil eye, and magic, committed to the highest standards of safety and privacy.",
        service4ExtraText: "We perform Ruqyah Shariah according to the correct prophetic methodology, using verses from the Holy Quran and authentic supplications. We ensure a safe and respectful environment for beneficiaries, with guidance and necessary advice for self-follow-up.",
        service4Btn: "Learn More", service4BtnLess: "Show Less",
        service5Title: "Quranic Recitation & Ijazah Courses",
        service5Text: "Advanced courses in Tajweed (Quranic recitation) for adults, with the possibility of obtaining an Ijazah (authorized chain of narration) with a continuous chain to Hafs 'an 'Asim from the way of Shatibiyyah.",
        service5ExtraText: "Courses are held under the supervision of specialized and authorized scholars, teaching theoretical and applied Tajweed rules, and helping students master Quran recitation. We also provide Ijazah pathways for those wishing to master the narration with a continuous chain.",
        service5Btn: "Learn More", service5BtnLess: "Show Less",
        service6Title: "Arabic Language Courses",
        service6Text: "Comprehensive Arabic language courses for adults of all levels, aiming to enable them to understand the Holy Quran and Sunnah and communicate effectively.",
        service6ExtraText: "Courses include grammar, morphology, conversation, reading, and writing. We use modern and engaging teaching methods to ensure the best results, whether for beginners or those wishing to refine their skills.",
        service6Btn: "Learn More", service6BtnLess: "Show Less",
        
        gallerySectionTitle: "Image Gallery", 
        galleryImageCaption1: "Brief caption for the first image", 
        galleryImageCaption2: "Brief caption for the second image", 
        galleryImageCaption3: "Brief caption for the third image", 

        fatwasSectionTitle: "Latest Fatwas & Articles", fatwasSectionText: "Explore our growing library of fatwas and articles covering various aspects of Muslim life.",
        fatwaTitle2: "Building a Happy Family in the West",
        fatwaText2: "Tips and guidance for addressing contemporary family challenges. In this article, we discuss how to maintain Islamic identity in Western societies, the importance of family communication, and building a positive educational environment for children.",
        fatwaExtraText2: "We offer practical solutions for facing difficulties that Muslim families may encounter, such as reconciling Islamic values with the surrounding societal culture, and enhancing the role of mosques and Islamic centers in supporting the family and providing spiritual and social support. We also focus on the importance of Islamic upbringing for children amidst modern challenges, and ways to instill good values and ethics in them to become righteous individuals in society.",
        readMore2: "Read More", readLess2: "Show Less",
        geminiBtnTextFatwa2: "✨ Request Clarification", 
        geminiLoadingTextFatwa2: "Processing your request...", 
        viewAllFatwas: "View All Fatwas & Articles",
        contactSectionTitle: "Contact Us",
        contactIntro: "You can contact us directly for assistance and Islamic guidance.",
        contactNote: "Note: Our team currently works remotely, and calls are redirected to mobile devices. We appreciate your patience and understanding!",
        directPhoneLabel: "Contact us by phone:",
        phone1: "00447404949128", 
        phone2: "00447450209680",
        directEmailLabel: "Or by email:",
        emailContact: "theshariacouncil@gmail.com", 
        whatsappLabel: "Or send a message on WhatsApp:", 
        whatsappBtnText: "WhatsApp", 
        contactName: "Full Name", 
        contactEmail: "Email Address", 
        contactPhone: "Phone Number", // Added for new phone field placeholder
        contactMessage: "Your Message", 
        submitFormBtn: "Send your Message", // Added for button text
        contactClosingText: "We look forward to serving you and answering your inquiries as soon as possible.",
        footerText: "&copy; 2024 Shariah Council for the Muslim Family in London. All Rights Reserved.",
        geminiErrorModalLabel: "Connection Error",
        geminiErrorModalBody: "Sorry, an error occurred while trying to process your request. Please try again later.",
        geminiErrorModalCloseBtn: "Close"
    },
    ar: {
        navHome: "الرئيسية", navAbout: "عن المجلس", navServices: "خدماتنا",
        navGallery: "معرض الصور", 
        navFatwas: "فتاوى ومقالات", navContact: "تواصل معنا",
        heroTitle: "مجلس الشريعة للأسرة المسلمة في لندن",
        heroText: "إرشاد شرعي لحياة مستقرة في بيئة آمنة واحترافية.",
        applyNowBtn: "تواصل معنا الآن",
        introSectionTitle: "عن المجلس", 
        whoWeAreSubheading: "من نحن", 
        whoWeAreP1: "نحن مجموعة من العلماء والأئمة، تخرجنا في جامعة الأزهر الشريف، أعرق جامعة إسلامية في العالم. نحمل الإجازة العالية (البكالوريوس) في تخصصات شرعية رفيعة، تشمل:", 
        usulAlDinHeading: "أصول الدين", 
        usulAlDinText: "دراسة العقيدة والتفسير والحديث الشريف.", 
        shariaIslamiyaHeading: "الشريعة الإسلامية", 
        shariaIslamiyaText: "دراسة الفقه وأصوله والقانون المقارن.", 
        whoWeAreP2: "نحمل على عاتقنا رسالة العلم والدعوة، ونسعى لنشر الفهم الوسطي المستنير للإسلام، مستندين إلى العلم الراسخ والمنهج الأزهري المعتدل.", 
        whoWeAreP3: "نعمل على تقديم محتوى ديني موثوق، مستند إلى المصادر الأصيلة، وبأسلوب معاصر يلبي حاجات المسلمين في زمانهم، دون تفريط أو غلو.", 
        whyChooseUsSubheading: "لماذا تختار مجلس الشريعة؟", 
        introSectionText: "نحن نقدم إرشادات شرعية موثوقة ونعمل ضمن إطار القانون البريطاني، ملتزمون بالشفافية والعدل في كل خدماتنا. فريقنا من العلماء والمختصين مكرس لخدمة مجتمعنا وتوفير الدعم الأسري اللازم.",
        aboutFeature1Title: "ثقة وموثوقية", aboutFeature1Text: "نقدم إرشادات شرعية تستند إلى منهج إسلامي أصيل ومعاصر.",
        aboutFeature2Title: "عدالة وشفافية", aboutFeature2Text: "نلتزم بالعدل والشفافية في جميع إجراءاتنا وخدماتنا.",
        aboutFeature3Title: "التزام بالقانون البريطاني", aboutFeature3Text: "نعمل بانسجام تام مع قوانين المملكة المتحدة ونظامها القضائي.",
        servicesSectionTitle: "خدماتنا الرئيسية",
        service1Title: "الزواج الإسلامي (النكاح)",
        service1Text: "إتمام عقود الزواج الشرعية وفقًا لأحكام الشريعة الغراء، وتقديم الإرشاد للمقبلين على الزواج لبناء أسرة مستقرة.",
        service1ExtraText: "يشمل ذلك توثيق العقود، التأكد من استيفاء جميع الأركان والشروط الشرعية، وتقديم نصائح مهمة للزوجين لضمان حياة زوجية سعيدة ومستقرة تتفق مع تعاليم الإسلام والقوانين المحلية.",
        service1Btn: "تعرف على المزيد", service1BtnLess: "أقل",
        service2Title: "الطلاق والخلع",
        service2Text: "المساعدة في إجراءات الطلاق والخلع الشرعية، والوساطة بين الطرفين، وتقديم النصائح لضمان حقوق الجميع.",
        service2ExtraText: "نسعى جاهدين لتقليل النزاعات وحماية مصالح الأطفال إن وجدوا. نقدم المشورة الشرعية والقانونية حول نفقة الزوجة، حضانة الأطفال، وتقسيم الممتلكات، مع الحفاظ على الأجواء الودية قدر الإمكان.",
        service2Btn: "تعرف على المزيد", service2BtnLess: "أقل",
        service3Title: "الاستشارات والفتاوى",
        service3Text: "إرشادات شرعية حول مسائل الأسرة، الميراث، المعاملات المالية، والعبادات، للإجابة على تساؤلاتكم الدينية.",
        service3ExtraText: "يقدم علماؤنا المتخصصون فتاوى دقيقة وموثوقة بناءً على أدلة الكتاب والسنة والإجماع، مع مراعاة الظروف المعاصرة للمسلمين في الغرب، لتقديم حلول شرعية عملية لمختلف قضايا الحياة اليومية.",
        service3Btn: "تعرف على المزيد", service3BtnLess: "أقل",
        service4Title: "الرقية الشرعية",
        service4Text: "تقديم جلسات الرقية الشرعية المطابقة للكتاب والسنة لعلاج الحسد، العين، والسحر، مع التزام بأعلى معايير الأمان والخصوصية.",
        service4ExtraText: "نقوم بالرقية الشرعية وفق المنهج النبوي الصحيح، باستخدام آيات القرآن الكريم والأدعية المأثورة. نضمن بيئة آمنة ومحترمة للمستفيدين، مع التوجيه والنصائح اللازمة للمتابعة الذاتية.",
        service4Btn: "تعرف على المزيد", service4BtnLess: "أقل",
        service5Title: "دورات تجويد وإجازات قرآنية",
        service5Text: "دورات متقدمة في تجويد القرآن الكريم للكبار، مع إمكانية الحصول على إجازة بسند متصل برواية حفص عن عاصم من طريق الشاطبية.",
        service5ExtraText: "تُعقد الدورات على يد مشايخ متخصصين ومجازين، لتعليم أحكام التجويد النظرية والتطبيقية، ومساعدة الطلاب على إتقان تلاوة القرآن الكريم. كما نوفر مسارات للإجازة لمن يرغبون في إتقان الرواية بسند متصل.",
        service5Btn: "تعرف على المزيد", service5BtnLess: "أقل",
        service6Title: "دورات اللغة العربية",
        service6Text: "تقديم دورات شاملة لتعليم اللغة العربية للكبار من جميع المستويات، بهدف تمكينهم من فهم القرآن الكريم والسنة النبوية والتواصل الفعال.",
        service6ExtraText: "تشمل الدورات القواعد النحوية والصرفية، المحادثة، القراءة، والكتابة. نستخدم أساليب تعليمية حديثة وممتعة لضمان أفضل النتائج، سواء للمبتدئين أو لمن يرغبون في صقل مهاراتهم.",
        service6Btn: "تعرف على المزيد", service6BtnLess: "أقل",

        gallerySectionTitle: "معرض الصور", 
        galleryImageCaption1: "وصف مختصر للصورة الأولى", 
        galleryImageCaption2: "وصف مختصر للصورة الثانية", 
        galleryImageCaption3: "وصف مختصر للصورة الثالثة", 

        fatwasSectionTitle: "فتاوى ومقالات حديثة", fatwasSectionText: "استكشف مكتبتنا المتنامية من الفتاوى والمقالات التي تغطي جوانب متعددة من حياة المسلم.",
        fatwaTitle2: "بناء أسرة سعيدة في الغرب",
        fatwaText2: "نصائح وإرشادات للتعامل مع التحديات الأسرية المعاصرة. نتناول في هذا المقال كيفية الحفاظ على الهوية الإسلامية في المجتمعات الغربية، وأهمية التواصل الأسري، وبناء بيئة تعليمية إيجابية للأطفال.",
        fatwaExtraText2: "نقدم حلولاً عملية لمواجهة الصعوبات التي قد تواجه الأسر المسلمة، مثل التوفيق بين القيم الإسلامية وثقافة المجتمع المحيط، وتعزيز دور المسجد والمراكز الإسلامية في دعم الأسرة وتوفير الدعم الروحي والاجتماعي. كما نركز على أهمية التربية الإسلامية للأبناء في ظل التحديات الحديثة، وسبل غرس القيم والأخلاق الحميدة في نفوسهم ليكونوا أفراداً صالحين في المجتمع.",
        readMore2: "اقرأ المزيد", readLess2: "أقل",
        geminiBtnTextFatwa2: "✨ اطلب توضيحًا", 
        geminiLoadingTextFatwa2: "جاري معالجة طلبك...", 
        viewAllFatwas: "عرض جميع الفتاوى والمقالات",
        contactSectionTitle: "تواصل معنا",
        contactIntro: "يمكنكم التواصل معنا مباشرةً للحصول على المساعدة والإرشاد الشرعي.",
        contactNote: "ملاحظة: فريقنا يعمل حالياً عن بعد، ويتم تحويل المكالمات إلى الأجهزة المحمولة. نقدر صبركم وتفهمكم!",
        directPhoneLabel: "للتواصل عبر الهاتف:",
        phone1: "00447404949128",
        phone2: "00447450209680",
        directEmailLabel: "للتواصل عبر البريد الإلكتروني:",
        emailContact: "theshariacouncil@gmail.com",
        whatsappLabel: "أو ارسل رسالة على الواتس اب:", 
        whatsappBtnText: "واتساب", 
        contactName: "الاسم الكامل", 
        contactEmail: "عنوان البريد الإلكتروني", 
        contactPhone: "رقم الهاتف", // Added for new phone field placeholder
        contactMessage: "رسالتك", 
        submitFormBtn: "إرسال الرسالة", // Added for button text
        contactClosingText: "نتطلع إلى خدمتكم والرد على استفساراتكم بأسرع وقت ممكن.",
        footerText: "&copy; 2024 مجلس الشريعة للأسرة المسلمة في لندن. جميع الحقوق محفوظة.",
        geminiErrorModalLabel: "خطأ في الاتصال",
        geminiErrorModalBody: "عذرًا، حدث خطأ أثناء محاولة معالجة طلبك. يرجى المحاولة مرة أخرى لاحقًا.",
        geminiErrorModalCloseBtn: "إغلاق"
    }
};

// Function to apply translations
function applyTranslations(lang) {
    const t = translations[lang];
    for (const key in t) {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'A' && (element.id === 'phone1' || element.id === 'phone2' || element.id === 'emailContact')) {
                // Link text is the number/email itself, no need to change it
            } else if (element.id === 'navLangToggle') {
                 element.textContent = lang === 'ar' ? 'English / العربية' : 'العربية / English';
            }
            else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            }
            else if (element.tagName === 'BUTTON' && element.id === 'submitFormBtn') { // Specifically handle submit button text
                element.textContent = t[key];
            }
            else {
                element.textContent = t[key];
            }
        }
    }
    document.documentElement.lang = lang; // Update html lang attribute
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; // Update html dir attribute

    const logoImg = document.querySelector('.navbar-brand img');
    if (logoImg) {
        logoImg.alt = lang === 'ar' ? 'شعار مجلس الشريعة' : 'Shariah Council Logo';
    }
}

// --- Helper function to display Gemini API errors ---
let geminiErrorModalInstance = null;
function showGeminiErrorModal() {
    const modalElement = document.getElementById('geminiErrorModal');
    if (modalElement) {
        if (!geminiErrorModalInstance) {
            geminiErrorModalInstance = new bootstrap.Modal(modalElement);
        }
        const currentLang = document.documentElement.lang || 'ar';
        document.getElementById('geminiErrorModalLabel').textContent = translations[currentLang].geminiErrorModalLabel;
        document.getElementById('geminiErrorModalBody').textContent = translations[currentLang].geminiErrorModalBody;
        document.getElementById('geminiErrorModalCloseBtn').textContent = translations[currentLang].geminiErrorModalCloseBtn;
        geminiErrorModalInstance.show();
    }
}


// --- Gemini API Integration ---
async function handleGeminiClarify(buttonElement) {
    const fatwaTextId = buttonElement.dataset.fatwaTextId;
    const fatwaTitleId = buttonElement.dataset.fatwaTitleId;
    const responseAreaId = buttonElement.dataset.responseAreaId;
    const loadingIndicatorId = buttonElement.dataset.loadingIndicatorId;

    const fatwaTextElement = document.getElementById(fatwaTextId);
    const fatwaTitleElement = document.getElementById(fatwaTitleId);
    const responseArea = document.getElementById(responseAreaId);
    const loadingIndicator = document.getElementById(loadingIndicatorId);

    if (!fatwaTextElement || !responseArea || !loadingIndicator || !fatwaTitleElement) {
        console.error("Gemini feature elements not found for button:", buttonElement.id);
        showGeminiErrorModal();
        return;
    }

    const fatwaText = fatwaTextElement.textContent.trim();
    const fatwaTitle = fatwaTitleElement.textContent.trim();
    const currentLang = document.documentElement.lang || 'ar';

    if (!fatwaText) {
        responseArea.textContent = currentLang === 'ar' ? "لا يوجد نص لتوضيحه." : "No text to clarify.";
        responseArea.style.display = 'block';
        return;
    }

    loadingIndicator.style.display = 'flex'; 
    responseArea.style.display = 'none'; 
    responseArea.textContent = ''; 
    buttonElement.disabled = true;

    let prompt;
    if (currentLang === 'ar') {
        prompt = `يرجى توضيح الإرشاد الإسلامي التالي بعنوان "${fatwaTitle}" بعبارات بسيطة وموجزة، مع التركيز على النقاط الرئيسية لعامة الناس. اجعل التوضيح سهل الفهم ومناسبًا للجمهور العام. النص الأصلي: ${fatwaText}`;
    } else {
        prompt = `Please clarify the following Islamic guidance titled "${fatwaTitle}" in simple and concise terms, focusing on its key takeaways for a general audience. Make the clarification easy to understand and suitable for the general public. Original text: ${fatwaText}`;
    }

    try {
        const apiKey = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        
        let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API Error:", errorData);
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const generatedText = result.candidates[0].content.parts[0].text;
            responseArea.textContent = generatedText;
        } else {
            console.error("Unexpected Gemini API response structure:", result);
            responseArea.textContent = currentLang === 'ar' ? "لم يتمكن النموذج من إنشاء توضيح." : "The model could not generate a clarification.";
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        responseArea.textContent = currentLang === 'ar' ? "حدث خطأ أثناء محاولة الحصول على توضيح. يرجى المحاولة مرة أخرى." : "An error occurred while trying to get clarification. Please try again.";
        showGeminiErrorModal();
    } finally {
        loadingIndicator.style.display = 'none'; 
        responseArea.style.display = 'block'; 
        buttonElement.disabled = false;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Initial application of Arabic translations
    applyTranslations('ar');

    const modalElement = document.getElementById('geminiErrorModal');
    if (modalElement) {
        geminiErrorModalInstance = new bootstrap.Modal(modalElement);
    }

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
                this.innerHTML = `${translations[currentLang][buttonLessKey]} <i class="fas fa-arrow-up"></i>`;
            } else {
                if(extraContentElement) extraContentElement.style.display = 'none';
                this.innerHTML = `${translations[currentLang][buttonId]} <i class="fas fa-arrow-right"></i>`;
            }
        });
    });
    
    document.querySelectorAll('.gemini-clarify-btn').forEach(button => {
        button.addEventListener('click', () => handleGeminiClarify(button));
    });

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Add event listener for language toggle button
    const langToggleButton = document.getElementById('navLangToggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            applyTranslations(newLang);
        });
    }
});

document.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionTop < viewportHeight - 100) { 
            section.classList.add('animate-in');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const navLinks = document.querySelectorAll('.navbar .nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const navbarHeight = document.getElementById('mainNavbar').offsetHeight; 

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight; 
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop -1 && window.scrollY < sectionBottom -1) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    if (!currentSectionId && window.scrollY < sections[0].offsetTop - navbarHeight) {
        currentSectionId = 'heroSection';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
});
