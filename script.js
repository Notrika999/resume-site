/* ==========================================================================
   Omid Haghi — Portfolio interactions
   ========================================================================== */
(function () {
    'use strict';

    /* ----------------------------------------------------------------------
       Translations
       ---------------------------------------------------------------------- */
    var I18N = {
        fa: {
            'meta.title': 'امید حقی | توسعه‌دهنده فرانت‌اند',
            'meta.desc': 'پرتفولیوی امید حقی، توسعه‌دهنده فرانت‌اند با تمرکز بر React و Next.js؛ پروژه‌ها، مهارت‌ها و راه‌های ارتباطی.',

            'skip': 'رفتن به محتوای اصلی',

            'brand.homeLabel': 'خانه',
            'brand.name': 'امید حقی',
            'brand.role': 'توسعه‌دهنده فرانت‌اند',

            'nav.label': 'ناوبری اصلی',
            'nav.home': 'خانه',
            'nav.about': 'درباره من',
            'nav.skills': 'مهارت‌ها',
            'nav.projects': 'پروژه‌ها',
            'nav.contact': 'تماس',
            'nav.open': 'باز کردن منو',
            'nav.close': 'بستن منو',

            'action.themeDark': 'فعال کردن حالت تاریک',
            'action.themeLight': 'فعال کردن حالت روشن',
            'action.lang': 'تغییر زبان',
            'action.langToEn': 'تغییر زبان به انگلیسی',
            'action.langToFa': 'تغییر زبان به فارسی',
            'action.top': 'بازگشت به بالای صفحه',

            'hero.badge': 'پرتفولیوی شخصی',
            'hero.title': '<span class="grad">Front-End Developer</span> | React &amp; Next.js',
            'hero.role': 'Front-End Developer | React & Next.js',
            'hero.lead': 'توسعه‌دهنده فرانت‌اند با تمرکز بر React و Next.js. علاقه‌مند به ساخت رابط‌های کاربری داینامیک، تجربه کاربری مناسب و توسعه وب‌سایت‌های سریع و قابل نگهداری.',
            'hero.ctaPrimary': 'مشاهده نمونه‌کارها',
            'hero.ctaSecondary': 'ارتباط با من',
            'hero.metaLocationLabel': 'محل سکونت',
            'hero.metaLocation': 'نکا، مازندران',
            'hero.metaFocusLabel': 'تمرکز',
            'hero.metaFocus': 'رابط و تجربه کاربری',
            'hero.socialLabel': 'شبکه‌های اجتماعی',
            'hero.photoAlt': 'پرتره‌ی امید حقی',
            'hero.floatCode': 'کد تمیز',
            'hero.scroll': 'اسکرول کنید',

            'about.eyebrow': 'درباره من',
            'about.title': 'از ایده تا تجربه‌ی دیجیتال',
            'about.subtitle': 'کمی بیشتر با من و روش کارم آشنا شوید.',
            'about.body': 'توسعه‌دهنده فرانت‌اند با تمرکز بر React و Next.js هستم. مسیر برنامه‌نویسی را از سال ۱۴۰۱ با JavaScript آغاز کردم و در ادامه با React، Vue.js، Nuxt.js و Next.js کار کردم. در پروژه CarUp24، اولین تجربه واقعی توسعه یک فروشگاه اینترنتی را به دست آوردم و با توسعه رابط کاربری، اتصال به API، هماهنگی با بک‌اند و همکاری با مدیر پروژه آشنا شدم. در کنار آن، چند پروژه شخصی با Vue.js و Nuxt.js توسعه داده‌ام و به‌صورت مستمر در حال ارتقای مهارت‌های فنی خود هستم.',
            'about.factRoleLabel': 'نقش',
            'about.factRole': 'توسعه‌دهنده فرانت‌اند',
            'about.factFocusLabel': 'تمرکز',
            'about.factFocus': 'رابط و تجربه کاربری',
            'about.factLocationLabel': 'محل سکونت',
            'about.factLocation': 'نکا، مازندران',
            'about.photoAlt': 'تصویر مرتبط با توسعه‌ی فرانت‌اند',
            'about.sticker': 'فرانت‌اند، با وسواس',
            'about.f1.title': 'کد تمیز و ماندگار',
            'about.f1.body': 'ساختاری خوانا و بهینه که توسعه و نگهداری پروژه را ساده می‌کند.',
            'about.f2.title': 'واکنش‌گرا و سریع',
            'about.f2.body': 'تجربه‌ای یکدست روی موبایل، تبلت و دسکتاپ با تمرکز بر عملکرد.',
            'about.f3.title': 'حل مسئله',
            'about.f3.body': 'توانمند در دیباگ و حل چالش‌های پیچیده‌ی جاوااسکریپت و رابط کاربری.',

            'learning.eyebrow': 'مسیر یادگیری',
            'learning.title': 'مسیر توسعه مهارت‌ها',
            'learning.y1401': 'شروع برنامه‌نویسی با JavaScript',
            'learning.y1402': 'یادگیری React',
            'learning.y1403': 'یادگیری Vue.js و Nuxt.js',
            'learning.y1404': 'تمرکز بر توسعه با Next.js',
            'learning.y1405': 'توسعه پروژه واقعی CarUp24',

            'skills.eyebrow': 'مهارت‌ها',
            'skills.title': 'مهارت‌های فنی',
            'skills.subtitle': 'تکنولوژی‌هایی که در مسیر یادگیری و توسعه پروژه‌های شخصی و واقعی با آن‌ها کار کرده‌ام.',
            'skills.filterLabel': 'فیلتر مهارت‌ها',
            'skills.all': 'همه',
            'skills.languages': 'زبان‌ها',
            'skills.frameworks': 'فریم‌ورک‌ها',
            'skills.state': 'مدیریت وضعیت',
            'skills.tools': 'ابزارها',

            'projects.eyebrow': 'نمونه‌کارها',
            'projects.title': 'پروژه‌های منتخب',
            'projects.subtitle': 'چند نمونه از کارهایی که با دقت و علاقه ساخته‌ام.',
            'projects.portfolio': 'پروژه شخصی',
            'projects.featured': 'پروژه‌ی شاخص',
            'projects.view': 'مشاهده سایت',
            'projects.more': 'ادامه توضیحات',
            'projects.less': 'کمتر',
            'projects.listLabel': 'تکنولوژی‌های استفاده‌شده',

            'projects.p1.index': '۰۲',
            'projects.p1.title': 'فروشگاه گجت‌های هوشمند',
            'projects.p1.date': 'پروژه شخصی',
            'projects.p1.desc': 'یک فروشگاه گجت با Vue 3 و Pinia؛ داده‌ها با JSON مدیریت شده و رابط واکنش‌گرا همراه با فیلتر و دسته‌بندی محصولات پیاده‌سازی شده است.',
            'projects.p1.alt': 'اسکرین‌شات فروشگاه گجت‌های هوشمند',

            'projects.p2.index': '۰۳',
            'projects.p2.title': 'کافه من',
            'projects.p2.date': 'پروژه‌ی شخصی',
            'projects.p2.desc': 'پروژه شخصی کافه با Nuxt 3 و Pinia؛ شامل منو و بخش فروشگاه با دسته‌بندی و فیلتر ساده برای نمایش آیتم‌ها.',
            'projects.p2.alt': 'اسکرین‌شات وب‌سایت کافه من',

            'projects.p3.index': '۰۱',
            'projects.p3.title': 'CarUp24 — فروشگاه اینترنتی تجهیزات خودرو',
            'projects.p3.date': '۱۴۰۵ · حدود ۳ ماه (خرداد تا آبان)',
            'projects.p3.desc': 'CarUp24 یک فروشگاه اینترنتی داینامیک در حوزه تجهیزات و لوازم جانبی خودرو است که فرانت‌اند آن با Next.js و React توسعه داده شده است. این پروژه اولین تجربه واقعی من در توسعه یک فروشگاه اینترنتی بود. در این پروژه مسئولیت توسعه بخش‌های فرانت‌اند، پیاده‌سازی صفحات و قابلیت‌های داینامیک، اتصال به API و هماهنگی با توسعه‌دهنده بک‌اند و مدیر پروژه را بر عهده داشتم. همچنین سئوی اولیه سایت شامل ساختاردهی صفحات و پیاده‌سازی متادیتاها انجام شد. بخش‌های مختلف فروشگاه از طریق پنل مدیریت قابل کنترل هستند.',
            'projects.p3.backend': 'مشخصات کلی بک‌اند: ASP.NET (C#) و معماری BFF',
            'projects.p3.alt': 'اسکرین‌شات فروشگاه آنلاین CarUp24',

            'note.eyebrow': 'درباره این وب‌سایت',
            'note.title': 'پشت صحنه‌ی همین صفحه',
            'note.body': 'این پرتفولیو با ساده‌ترین ابزارهای توسعه وب یعنی HTML، CSS و JavaScript طراحی و پیاده‌سازی شده است. هدف من از ساخت آن، نمایش مهارت‌ها و نمونه‌کارهایم در قالبی تمیز، سریع و سبک بوده. با وجود سادگی ابزارها، تلاش کردم قابلیت‌های حرفه‌ای مانند تم تاریک/روشن و چندزبانه بودن (فارسی/انگلیسی) را نیز پیاده‌سازی کنم تا تجربه کاربری مدرن و به‌روز ارائه شود.',
            'note.chipTheme': 'تم تاریک و روشن',
            'note.chipLang': 'دوزبانه',

            'contact.eyebrow': 'تماس',
            'contact.title': 'بیایید چیزی عالی بسازیم',
            'contact.lead': 'برای همکاری در پروژه‌های توسعه فرانت‌اند، توسعه رابط‌های کاربری و پروژه‌های وب، خوشحال می‌شوم با من در ارتباط باشید.',
            'contact.emailLabel': 'ایمیل',
            'contact.telegramLabel': 'تلگرام',
            'contact.phoneLabel': 'موبایل',
            'contact.copyEmail': 'کپی ایمیل',
            'contact.copyTelegram': 'کپی آیدی تلگرام',
            'contact.copyPhone': 'کپی شماره موبایل',
            'contact.phoneValue': '۰۹۳۵ ۵۷۵ ۸۹۹۶',

            'footer.tagline': 'توسعه‌دهنده فرانت‌اند · React، Next.js و Nuxt',
            'footer.navLabel': 'لینک‌های سریع',
            'footer.built': 'ساخته‌شده با HTML، CSS و JavaScript',
            'footer.rights': 'امید حقی — تمامی حقوق محفوظ است.',

            'toast.copied': 'کپی شد!',
            'toast.error': 'کپی نشد؛ لطفاً به‌صورت دستی کپی کنید.'
        },

        en: {
            'meta.title': 'Omid Haghi | Front-end Developer',
            'meta.desc': 'Portfolio of Omid Haghi, a front-end developer focused on React and Next.js, with projects, skills and contact information.',

            'skip': 'Skip to main content',

            'brand.homeLabel': 'Home',
            'brand.name': 'Omid Haghi',
            'brand.role': 'Front-end Developer',

            'nav.label': 'Main navigation',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'nav.open': 'Open menu',
            'nav.close': 'Close menu',

            'action.themeDark': 'Switch to dark mode',
            'action.themeLight': 'Switch to light mode',
            'action.lang': 'Switch language',
            'action.langToEn': 'Switch language to English',
            'action.langToFa': 'Switch language to Persian',
            'action.top': 'Back to top',

            'hero.badge': 'Personal portfolio',
            'hero.title': '<span class="grad">Front-End Developer</span> | React &amp; Next.js',
            'hero.role': 'Front-End Developer | React & Next.js',
            'hero.lead': 'Front-end developer focused on React and Next.js. Interested in building dynamic interfaces, thoughtful user experiences, and fast, maintainable websites.',
            'hero.ctaPrimary': 'View my work',
            'hero.ctaSecondary': 'Get in touch',
            'hero.metaLocationLabel': 'Location',
            'hero.metaLocation': 'Neka, Mazandaran',
            'hero.metaFocusLabel': 'Focus',
            'hero.metaFocus': 'UI & UX',
            'hero.socialLabel': 'Social links',
            'hero.photoAlt': 'Portrait of Omid Haghi',
            'hero.floatCode': 'Clean code',
            'hero.scroll': 'Scroll to explore',

            'about.eyebrow': 'About me',
            'about.title': 'From idea to digital experience',
            'about.subtitle': 'A little more about me and how I work.',
            'about.body': 'توسعه‌دهنده فرانت‌اند با تمرکز بر React و Next.js هستم. مسیر برنامه‌نویسی را از سال ۱۴۰۱ با JavaScript آغاز کردم و در ادامه با React، Vue.js، Nuxt.js و Next.js کار کردم. در پروژه CarUp24، اولین تجربه واقعی توسعه یک فروشگاه اینترنتی را به دست آوردم و با توسعه رابط کاربری، اتصال به API، هماهنگی با بک‌اند و همکاری با مدیر پروژه آشنا شدم. در کنار آن، چند پروژه شخصی با Vue.js و Nuxt.js توسعه داده‌ام و به‌صورت مستمر در حال ارتقای مهارت‌های فنی خود هستم.',
            'about.factRoleLabel': 'Role',
            'about.factRole': 'Front-end Developer',
            'about.factFocusLabel': 'Focus',
            'about.factFocus': 'UI & UX',
            'about.factLocationLabel': 'Location',
            'about.factLocation': 'Neka, Mazandaran',
            'about.photoAlt': 'Front-end development illustration',
            'about.sticker': 'Front-end, with care',
            'about.f1.title': 'Clean, lasting code',
            'about.f1.body': 'A readable, optimized structure that makes projects easy to grow and maintain.',
            'about.f2.title': 'Responsive & fast',
            'about.f2.body': 'A consistent experience across mobile, tablet and desktop with performance in mind.',
            'about.f3.title': 'Problem solving',
            'about.f3.body': 'Strong at debugging and solving complex JavaScript and UI challenges.',

            'learning.eyebrow': 'Learning path',
            'learning.title': 'Skill development timeline',
            'learning.y1401': 'Started programming with JavaScript',
            'learning.y1402': 'Learned React',
            'learning.y1403': 'Learned Vue.js and Nuxt.js',
            'learning.y1404': 'Focused on Next.js development',
            'learning.y1405': 'Developed the real-world CarUp24 project',

            'skills.eyebrow': 'Skills',
            'skills.title': 'Technical skills',
            'skills.subtitle': 'Technologies I have used while learning and building personal and real-world projects.',
            'skills.filterLabel': 'Filter skills',
            'skills.all': 'All',
            'skills.languages': 'Languages',
            'skills.frameworks': 'Frameworks',
            'skills.state': 'State management',
            'skills.tools': 'Tools',

            'projects.eyebrow': 'Portfolio',
            'projects.title': 'Selected projects',
            'projects.subtitle': 'A few things I’ve built with care and curiosity.',
            'projects.portfolio': 'Personal project',
            'projects.featured': 'Featured project',
            'projects.view': 'Visit site',
            'projects.more': 'Read more',
            'projects.less': 'Show less',
            'projects.listLabel': 'Technologies used',

            'projects.p1.index': '02',
            'projects.p1.title': 'Smart Gadgets Store',
            'projects.p1.date': 'Personal project',
            'projects.p1.desc': 'یک فروشگاه گجت با Vue 3 و Pinia؛ داده‌ها با JSON مدیریت شده و رابط واکنش‌گرا همراه با فیلتر و دسته‌بندی محصولات پیاده‌سازی شده است.',
            'projects.p1.alt': 'Screenshot of the Smart Gadgets store',

            'projects.p2.index': '03',
            'projects.p2.title': 'My Café',
            'projects.p2.date': 'Personal project',
            'projects.p2.desc': 'A personal café website built with Nuxt 3 and Pinia, featuring a menu and shop with simple filtering and category-based browsing.',
            'projects.p2.alt': 'Screenshot of the My Café website',

            'projects.p3.index': '01',
            'projects.p3.title': 'CarUp24 — Online Car Accessories Store',
            'projects.p3.date': '2026 · About 3 months (June–November)',
            'projects.p3.desc': 'CarUp24 is a dynamic online store for automotive accessories, with its front end built using Next.js and React. This was my first real experience developing an online store. I worked on front-end sections, dynamic pages and features, API integration, and coordination with the backend developer and project manager. I also handled initial SEO work, including page structure and metadata. Store sections are manageable through the admin panel.',
            'projects.p3.backend': 'Backend overview: ASP.NET (C#) and BFF architecture',
            'projects.p3.alt': 'Screenshot of the CarUp24 online store',

            'note.eyebrow': 'About this site',
            'note.title': 'Behind this page',
            'note.body': 'This portfolio was built with the simplest web tools — HTML, CSS and JavaScript. The goal was to showcase my skills and projects in a clean, fast and lightweight format. Despite the simplicity of the stack, I implemented professional features such as a dark/light theme and bilingual support (Persian/English) to deliver a modern user experience.',
            'note.chipTheme': 'Dark & light theme',
            'note.chipLang': 'Bilingual',

            'contact.eyebrow': 'Contact',
            'contact.title': 'Let’s build something great',
            'contact.lead': 'I’d be glad to connect about front-end development, UI implementation, and web projects.',
            'contact.emailLabel': 'Email',
            'contact.telegramLabel': 'Telegram',
            'contact.phoneLabel': 'Phone',
            'contact.copyEmail': 'Copy email',
            'contact.copyTelegram': 'Copy Telegram ID',
            'contact.copyPhone': 'Copy phone number',
            'contact.phoneValue': '0935 575 8996',

            'footer.tagline': 'Front-end Developer · React, Next.js & Nuxt',
            'footer.navLabel': 'Quick links',
            'footer.built': 'Built with HTML, CSS and JavaScript',
            'footer.rights': 'Omid Haghi — All rights reserved.',

            'toast.copied': 'Copied!',
            'toast.error': 'Couldn’t copy — please copy manually.'
        }
    };

    var root = document.documentElement;
    var currentLang = root.lang === 'en' ? 'en' : 'fa';

    var storage = {
        get: function (key) {
            try { return window.localStorage.getItem(key); } catch (e) { return null; }
        },
        set: function (key, value) {
            try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ }
        }
    };

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    var header = document.getElementById('site-header');
    var nav = document.getElementById('primary-nav');
    var navBackdrop = document.getElementById('nav-backdrop');
    var menuToggle = document.getElementById('menu-toggle');
    var themeToggle = document.getElementById('theme-toggle');
    var langToggle = document.getElementById('lang-toggle');
    var langLabel = document.getElementById('lang-label');
    var progressBar = document.getElementById('scroll-progress-bar');
    var toTop = document.getElementById('to-top');
    var toast = document.getElementById('toast');
    var yearEl = document.getElementById('year');

    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link[data-nav]'));
    var sections = navLinks
        .map(function (link) { return document.getElementById(link.dataset.nav); })
        .filter(Boolean);

    function t(key) {
        var dict = I18N[currentLang] || I18N.fa;
        return typeof dict[key] === 'string' ? dict[key] : key;
    }

    function toFaDigits(value) {
        return String(value).replace(/\d/g, function (digit) {
            return '۰۱۲۳۴۵۶۷۸۹'.charAt(Number(digit));
        });
    }

    function updateMeta(dict) {
        document.title = dict['meta.title'];

        var description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute('content', dict['meta.desc']);

        var ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', dict['meta.title']);

        var ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', dict['meta.desc']);
    }

    function updateYear() {
        if (!yearEl) return;
        var year = new Date().getFullYear();
        yearEl.textContent = currentLang === 'fa' ? toFaDigits(year) : String(year);
    }

    function updateThemeLabel() {
        if (!themeToggle) return;
        var isDark = root.getAttribute('data-theme') === 'dark';
        var label = t(isDark ? 'action.themeLight' : 'action.themeDark');
        themeToggle.setAttribute('aria-label', label);
        themeToggle.setAttribute('title', label);
        themeToggle.setAttribute('aria-pressed', String(isDark));
    }

    function updateLangLabel() {
        if (!langToggle || !langLabel) return;
        var visible = currentLang === 'fa' ? 'EN' : 'فا';
        var label = t(currentLang === 'fa' ? 'action.langToEn' : 'action.langToFa');
        langLabel.textContent = visible;
        langToggle.setAttribute('aria-label', visible + ' — ' + label);
        langToggle.setAttribute('title', label);
    }

    function updateMenuLabel() {
        if (!menuToggle || !nav) return;
        var open = nav.classList.contains('is-open');
        menuToggle.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.open'));
    }

    function applyLanguage(lang, persist) {
        currentLang = lang === 'en' ? 'en' : 'fa';
        var dict = I18N[currentLang];

        root.lang = currentLang;
        root.dir = currentLang === 'fa' ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.dataset.i18n;
            if (typeof dict[key] === 'string') el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.dataset.i18nHtml;
            if (typeof dict[key] === 'string') el.innerHTML = dict[key];
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            var key = el.dataset.i18nAlt;
            if (typeof dict[key] === 'string') el.setAttribute('alt', dict[key]);
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
            var key = el.dataset.i18nAriaLabel;
            if (typeof dict[key] === 'string') el.setAttribute('aria-label', dict[key]);
        });

        updateMeta(dict);
        updateYear();
        updateThemeLabel();
        updateLangLabel();
        updateMenuLabel();
        updateActiveNav();

        if (persist) storage.set('lang', currentLang);
    }

    function applyTheme(theme, persist) {
        var next = theme === 'dark' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);

        var themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) themeColor.setAttribute('content', next === 'dark' ? '#070b14' : '#f7f8fc');

        updateThemeLabel();
        if (persist) storage.set('theme', next);
    }

    /* ----------------------------------------------------------------------
       Theme
       ---------------------------------------------------------------------- */
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
        });
    }

    var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    var onSystemThemeChange = function (event) {
        if (!storage.get('theme')) applyTheme(event.matches ? 'dark' : 'light', false);
    };

    if (typeof systemDark.addEventListener === 'function') {
        systemDark.addEventListener('change', onSystemThemeChange);
    } else if (typeof systemDark.addListener === 'function') {
        systemDark.addListener(onSystemThemeChange);
    }

    /* ----------------------------------------------------------------------
       Language
       ---------------------------------------------------------------------- */
    if (langToggle) {
        langToggle.addEventListener('click', function () {
            applyLanguage(currentLang === 'fa' ? 'en' : 'fa', true);
        });
    }

    /* ----------------------------------------------------------------------
       Mobile navigation
       ---------------------------------------------------------------------- */
    function setMenu(open) {
        if (!nav || !navBackdrop || !menuToggle) return;

        nav.classList.toggle('is-open', open);
        navBackdrop.classList.toggle('is-open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('menu-open', open);
        updateMenuLabel();

        if (open) {
            window.setTimeout(function () {
                if (!nav.classList.contains('is-open')) return;
                var firstLink = nav.querySelector('a');
                if (firstLink) firstLink.focus({ preventScroll: true });
            }, 90);
        } else if (nav.contains(document.activeElement)) {
            menuToggle.focus({ preventScroll: true });
        }
    }

    function closeMenu() {
        if (nav && nav.classList.contains('is-open')) setMenu(false);
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            setMenu(!nav.classList.contains('is-open'));
        });
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMenu);
    }

    if (nav) {
        nav.addEventListener('click', function (event) {
            if (event.target.closest('a')) closeMenu();
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeMenu();
    });

    var desktopQuery = window.matchMedia('(min-width: 921px)');
    var onDesktopChange = function (event) {
        if (event.matches) closeMenu();
    };

    if (typeof desktopQuery.addEventListener === 'function') {
        desktopQuery.addEventListener('change', onDesktopChange);
    } else if (typeof desktopQuery.addListener === 'function') {
        desktopQuery.addListener(onDesktopChange);
    }

    /* ----------------------------------------------------------------------
       Scroll state: progress bar, header, back-to-top, active nav
       ---------------------------------------------------------------------- */
    function updateActiveNav() {
        if (!sections.length) return;

        var marker = window.scrollY + window.innerHeight * 0.38;
        var activeId = sections[0].id;

        sections.forEach(function (section) {
            var top = section.getBoundingClientRect().top + window.scrollY;
            if (top <= marker) activeId = section.id;
        });

        var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        if (atBottom) activeId = sections[sections.length - 1].id;

        navLinks.forEach(function (link) {
            var isActive = link.dataset.nav === activeId;
            link.classList.toggle('is-active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    var ticking = false;

    function updateScrollState() {
        var scrollTop = window.scrollY;
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        if (progressBar) {
            progressBar.style.width = maxScroll > 0
                ? Math.min(100, (scrollTop / maxScroll) * 100) + '%'
                : '0%';
        }

        if (header) header.classList.toggle('is-scrolled', scrollTop > 6);
        if (toTop) toTop.classList.toggle('is-visible', scrollTop > 620);

        updateActiveNav();
    }

    function onScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
            updateScrollState();
            ticking = false;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    if (toTop) {
        toTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: reduceMotion.matches ? 'auto' : 'smooth'
            });
        });
    }

    /* ----------------------------------------------------------------------
       Reveal on scroll
       ---------------------------------------------------------------------- */
    var revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && !reduceMotion.matches) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

        revealElements.forEach(function (el) { revealObserver.observe(el); });
    } else {
        revealElements.forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* ----------------------------------------------------------------------
       Skills filter
       ---------------------------------------------------------------------- */
    var filterButtons = Array.prototype.slice.call(document.querySelectorAll('.filter-btn'));
    var skillCards = Array.prototype.slice.call(document.querySelectorAll('.skill-card'));

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var filter = button.dataset.filter;

            filterButtons.forEach(function (btn) {
                var active = btn === button;
                btn.classList.toggle('is-active', active);
                btn.setAttribute('aria-pressed', String(active));
            });

            skillCards.forEach(function (card) {
                var show = filter === 'all' || card.dataset.category === filter;
                card.classList.toggle('is-hidden', !show);
                if (show) card.classList.add('is-visible');
            });
        });
    });

    /* ----------------------------------------------------------------------
       Expandable project descriptions
       ---------------------------------------------------------------------- */
    document.querySelectorAll('.read-more').forEach(function (button) {
        button.addEventListener('click', function () {
            var target = document.getElementById(button.getAttribute('aria-controls'));
            if (!target) return;

            var expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!expanded));
            target.classList.toggle('is-expanded', !expanded);
        });
    });

    /* ----------------------------------------------------------------------
       Copy to clipboard + toast
       ---------------------------------------------------------------------- */
    var toastTimer;

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('is-visible');
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(function () {
            toast.classList.remove('is-visible');
        }, 2200);
    }

    function fallbackCopy(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.top = '-1000px';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        var copied = false;
        try { copied = document.execCommand('copy'); } catch (e) { copied = false; }
        textarea.remove();
        return copied;
    }

    function copyText(text) {
        if (!text) return Promise.resolve(false);

        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text).then(function () {
                return true;
            }).catch(function () {
                return fallbackCopy(text);
            });
        }

        return Promise.resolve(fallbackCopy(text));
    }

    document.querySelectorAll('.copy-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            copyText(button.dataset.copy || '').then(function (copied) {
                if (!copied) {
                    showToast(t('toast.error'));
                    return;
                }

                button.classList.add('is-copied');
                showToast(t('toast.copied'));

                window.clearTimeout(button._copyTimer);
                button._copyTimer = window.setTimeout(function () {
                    button.classList.remove('is-copied');
                }, 1600);
            });
        });
    });

    /* ----------------------------------------------------------------------
       Initialise
       ---------------------------------------------------------------------- */
    applyTheme(root.getAttribute('data-theme') || 'light', false);
    applyLanguage(currentLang, false);
    updateScrollState();

    window.__portfolioReady = true;
})();
