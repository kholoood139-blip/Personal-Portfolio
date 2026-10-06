/**
 * Academic Experience Script for Khulood Abdulrahman (خلود عبدالرحمن)
 * Teaching Assistant @ Hadhramout University & University of the Holy Quran
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initAcademicStats();
  initCourseFilter();
  initCourseDetailsModal();
  initAcademicContactForm();
  initBackToTop();
});

/* ==========================================================
   1. Theme Management (Shared with Main Site)
   ========================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIconDark = document.getElementById('themeIconDark');
  const themeIconLight = document.getElementById('themeIconLight');

  const savedTheme = localStorage.getItem('khulood-theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
  } else {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('khulood-theme', isDark ? 'dark' : 'light');
      updateThemeIcons(isDark);
    });
  }

  function updateThemeIcons(isDark) {
    if (!themeIconDark || !themeIconLight) return;
    if (isDark) {
      themeIconDark.classList.add('hidden');
      themeIconLight.classList.remove('hidden');
    } else {
      themeIconDark.classList.remove('hidden');
      themeIconLight.classList.add('hidden');
    }
  }
}

/* ==========================================================
   2. Mobile Navigation
   ========================================================== */
function initNavigation() {
  const navbar = document.getElementById('mainNavbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const menuIconOpen = document.getElementById('menuIconOpen');
  const menuIconClose = document.getElementById('menuIconClose');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-lg', 'shadow-indigo-500/5', 'backdrop-blur-xl');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-indigo-500/5');
    }
  });

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    menuIconOpen.classList.add('hidden');
    menuIconClose.classList.remove('hidden');
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  }
}

/* ==========================================================
   3. Detailed Academic Courses Data
   ========================================================== */
const academicCoursesData = [
  {
    id: "cs-tech",
    institution: "hadhramout",
    institutionName: "جامعة حضرموت",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    courseTitle: "مهارات الحاسوب وتطبيقات الرقمنة (Computer Skills)",
    targetLevels: "المستوى الأول والثاني • تخصصات تقنية المعلومات والحاسوب",
    shortDesc: "تدريب عملي مكثف يركز على تزويد طلبة التخصصات التقنية بالمهارات الحاسوبية الأساسية والمتقدمة، مع بناء خلفية قوية في هندسة البرمجيات وبيئات التطوير.",
    fullDesc: "يهدف هذا المقرر إلى سد الفجوة بين المعرفة النظرية والممارسة التقنية المتقدمة لطلبة كليات الحاسوب وتقنية المعلومات في سنتهم الدراسية الأولى والثانية. يتضمن المقرر جوانب عملية تطبيقية داخل معامل الجامعة لإتقان التعامل مع نظم التشغيل، أدوات الإنتاجية، الخوارزميات، ومبادئ تطوير الواجهات والأتمتة البرمجية.",
    hoursWeekly: "4 ساعات معملية ونظرية أسبوعياً",
    toolsUsed: ["Linux & Windows CLI", "VS Code", "Git & GitHub", "Office 365 Cloud", "Markdown", "Browser DevTools"],
    syllabus: [
      "بنية الحاسوب الداخلية، العتاد (Hardware) ونظم التشغيل الحديثة (OS Architecture)",
      "مهارات سطر الأوامر (Command Line Interface - CLI) وإدارة الملفات والشبكات",
      "أدوات الإنتاجية السحابية المتقدمة وتقنيات التعاون البرمجي الجماعي",
      "مبادئ التفكير الخوارزمي، حل المشكلات والمنطق الحسابي (Computational Thinking)",
      "الأمن الرقمي الأساسي، النسخ الاحتياطي، وحماية البيانات الشخصية والأكاديمية",
      "مشاريع معملية تطبيقية وورش عمل تدريبية جماعية"
    ],
    outcomes: [
      "تمكين الطالب من استخدام بيئات التطوير الحديثة والتعامل باحتراف مع الملفات والأنظمة",
      "إتقان إعداد التقارير الفنية البرمجية والمستندات التقنية بمعايير أكاديمية دولية",
      "بناء أساس صلب يؤهل الطلبة للمقررات البرمجية المتقدمة مثل الخوارزميات وتراكيب البيانات"
    ]
  },
  {
    id: "cs-law",
    institution: "hadhramout",
    institutionName: "جامعة حضرموت",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
    courseTitle: "مهارات الحاسوب والمعلوماتية القانونية (Computer Skills for Law)",
    targetLevels: "المستوى الأول والثاني • كلية القانون والعلوم السياسية",
    shortDesc: "مقرر نوعي مخصص لطلبة القانون يدمج بين المهارات الرقمية المتقدمة واحتياجات العمل القانوني الحديث، من الصياغة الآلية والبحث القضائي إلى الجرائم السيبرانية.",
    fullDesc: "في عصر المحاكم الرقمية والتحول الإلكتروني، يحتاج رجل القانون إلى تسليح تقني متكامل. يقدم هذا المقرر لطلبة كلية القانون بجامعة حضرموت منهجاً عملياً موجهاً للصياغة القضائية الإلكترونية، البحث في الموسوعات والجرائد الرسمية الرقمية، الأرشفة الذكية للقضايا، والتعرف على أساسيات الأدلة الرقمية والجرائم السيبرانية.",
    hoursWeekly: "3 ساعات أسبوعياً (نظري + معملي)",
    toolsUsed: ["Advanced Word Legal Formatting", "Excel for Legal Cases & Retainers", "Digital Legal Libraries", "PDF Cryptography & Electronic Signatures"],
    syllabus: [
      "التنسيق المتقدم للوائح الدعاوى والمذكرات القضائية وصياغة العقود الإلكترونية",
      "إدارة بيانات القضايا والجداول الإحصائية للأتعاب والمواعيد القضائية عبر جداول البيانات",
      "استراتيجيات البحث المتقدم في قواعد البيانات والمواقع الرسمية للمحاكم والتشريعات",
      "التوقيع الرقمي، التشفير وحجية المحررات الإلكترونية أمام القضاء",
      "مقدمة في الجرائم المعلوماتية (Cybercrimes) وكيفية التعامل مع الأدلة الرقمية",
      "أخلاقيات استخدام أدوات الذكاء الاصطناعي في البحث والصياغة القانونية"
    ],
    outcomes: [
      "قدرة الطالب القانوني على صياغة صحائف الدعوى والعقود بتنسيق مهني خالي من الأخطاء",
      "إتقان البحث القانوني في المكتبات الرقمية واستخراج السوابق القضائية في دقائق معدودة",
      "فهم عميق للبيئة القانونية الرقمية ومفاهيم الإثبات الإلكتروني الحديث"
    ]
  },
  {
    id: "logic-design",
    institution: "quran-uni",
    institutionName: "جامعة القرآن الكريم والعلوم الإسلامية",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    courseTitle: "تصميم المنطق الرقمي (Digital Logic Design)",
    targetLevels: "مقرر تخصصي رئيسي • أقسام الحاسوب وتقنية المعلومات",
    shortDesc: "المقرر التأسيسي الأهم في هندسة الحاسوب، يتناول كيفية بناء العقل المفكر للأجهزة الرقمية بدءاً من البوابات المنطقية وصولاً إلى الدوائر التتابعية والمعالجات.",
    fullDesc: "يقدم المقرر فهماً هندسياً عميقاً للأساس الرياضي والمنطقي الذي بُنيت عليه أجهزة الحاسوب الحديثة. يتعلم الطلبة في جامعة القرآن الكريم والعلوم الإسلامية كيفية تمثيل البيانات رقمياً، تبسيط المعادلات المنطقية المعقدة، وتصميم الدوائر التوافقية والتتابعية، ومحاكاتها باستخدام برمجيات المحاكاة المعملية الحديثة قبل بنائها عملياً.",
    hoursWeekly: "4 ساعات أسبوعياً (محاضرات نظرية + جلسات محاكاة معملية)",
    toolsUsed: ["Logisim Simulator", "Digital Circuit Design Tools", "Boolean Algebra Calculators", "Truth Table Analyzers"],
    syllabus: [
      "أنظمة العد الرقمية (Binary, Octal, Hexadecimal) والتحويلات الحسابية والمتممات (1's & 2's Complement)",
      "البوابات المنطقية الأساسية والمشتقة (AND, OR, NOT, NAND, NOR, XOR, XNOR) وجداول الحقيقة",
      "الجبر البولياني ونظريات دي مورجان (De Morgan's Laws) لتبسيط المعادلات",
      "خرائط كارنوف (K-Maps) للتبسيط البصري للدوائر المنطقية حتى 5 متغيرات",
      "الدوائر المنطقية التوافقية (Combinational Logic): الجامع (Adders)، الطارح، وفك التشفير (Decoders / MUX)",
      "الدوائر المنطقية التتابعية (Sequential Logic): القلابات (Flip-Flops: SR, D, JK, T)",
      "تصميم العدادات الرقمية (Counters)، وسجلات الإزاحة (Shift Registers)، وذاكرات التخزين المؤقت"
    ],
    outcomes: [
      "امتلاك القدرة على تحليل وتصميم أي دائرة منطقية رقمية تبسيطاً وبناءً",
      "التمكن من محاكاة واختبار الدوائر الإلكترونية الحاسوبية عبر برنامج Logisim بكفاءة تامة",
      "بناء الجسر الأساسي لفهم معمارية الحاسوب (Computer Architecture) وتصميم المعالجات الدقيقة"
    ]
  }
];

/* ==========================================================
   4. Academic Stats Counter Animation
   ========================================================= */
function initAcademicStats() {
  const statNumbers = document.querySelectorAll('.academic-stat-number');
  if (!statNumbers.length) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          const prefix = stat.getAttribute('data-prefix') || '';
          const suffix = stat.getAttribute('data-suffix') || '';
          const duration = 2000;
          const startTimestamp = performance.now();

          function step(now) {
            const progress = Math.min((now - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * target);
            stat.textContent = `${prefix}${currentVal}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              stat.textContent = `${prefix}${target}${suffix}`;
            }
          }

          requestAnimationFrame(step);
        });
      }
    });
  }, { threshold: 0.25 });

  const section = document.getElementById('academicStats');
  if (section) observer.observe(section);
}

/* ==========================================================
   5. Course Filtering
   ========================================================== */
function initCourseFilter() {
  const filterBtns = document.querySelectorAll('.course-filter-btn');
  const courseCards = document.querySelectorAll('.academic-course-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-brand-600', 'text-white', 'shadow-lg', 'shadow-brand-500/25');
        b.classList.add('bg-slate-100', 'dark:bg-slate-800/80', 'text-slate-600', 'dark:text-slate-300');
      });
      btn.classList.add('bg-brand-600', 'text-white', 'shadow-lg', 'shadow-brand-500/25');
      btn.classList.remove('bg-slate-100', 'dark:bg-slate-800/80', 'text-slate-600', 'dark:text-slate-300');

      const filterValue = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const inst = card.getAttribute('data-institution');
        if (filterValue === 'all' || inst === filterValue) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================
   6. Course Details Modal
   ========================================================== */
function initCourseDetailsModal() {
  const modalBackdrop = document.getElementById('courseModal');
  const modalCloseBtn = document.getElementById('courseModalCloseBtn');

  window.openCourseModal = function(courseId) {
    const course = academicCoursesData.find(c => c.id === courseId);
    if (!course || !modalBackdrop) return;

    document.getElementById('modalInstBadge').textContent = course.institutionName;
    document.getElementById('modalCourseTitle').textContent = course.courseTitle;
    document.getElementById('modalCourseLevels').textContent = course.targetLevels;
    document.getElementById('modalCourseDesc').textContent = course.fullDesc;
    document.getElementById('modalHours').textContent = course.hoursWeekly;

    // Syllabus items
    const syllabusList = document.getElementById('modalSyllabus');
    syllabusList.innerHTML = course.syllabus.map(topic => `
      <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <i class="fa-solid fa-circle-check text-brand-500 mt-1 text-xs"></i>
        <span>${topic}</span>
      </li>
    `).join('');

    // Tools badges
    const toolsContainer = document.getElementById('modalTools');
    toolsContainer.innerHTML = course.toolsUsed.map(tool => `
      <span class="px-3 py-1 rounded-lg text-xs font-semibold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60">
        ${tool}
      </span>
    `).join('');

    // Outcomes
    const outcomesList = document.getElementById('modalOutcomes');
    outcomesList.innerHTML = course.outcomes.map(out => `
      <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <i class="fa-solid fa-graduation-cap text-accent-purple mt-1 text-xs"></i>
        <span>${out}</span>
      </li>
    `).join('');

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================
   7. Academic Contact Form & Inquiries
   ========================================================== */
function initAcademicContactForm() {
  const form = document.getElementById('academicContactForm');
  const submitBtn = document.getElementById('academicSubmitBtn');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('studentName').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    const message = document.getElementById('studentMessage').value.trim();

    if (!name || name.length < 2) {
      showToast('يرجى إدخال اسم صحيح لا يقل عن حرفين', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('يرجى إدخال بريد إلكتروني صحيح', 'error');
      return;
    }

    if (!message || message.length < 5) {
      showToast('يرجى كتابة نص الاستفسار بشكل واضح', 'error');
      return;
    }

    const originalBtn = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fa-solid fa-circle-notch fa-spin text-lg"></i>
      <span>جارٍ إرسال الاستفسار...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtn;
      form.reset();
      showToast('تم استلام استفسارك الأكاديمي بنجاح يا ' + name + '! سيتم الرد عليك في أقرب وقت ✨', 'success');
    }, 1200);
  });

  function showToast(msg, type = 'success') {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    const toastIcon = document.getElementById('toastIcon');

    if (type === 'success') {
      toastIcon.className = 'fa-solid fa-circle-check text-emerald-400 text-xl';
    } else {
      toastIcon.className = 'fa-solid fa-circle-exclamation text-amber-400 text-xl';
    }

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/* ==========================================================
   8. Back to Top Button
   ========================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  const progressCircle = document.getElementById('progressCircle');
  if (!backToTopBtn) return;

  const circumference = 2 * Math.PI * 18;
  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    if (scrollTop > 350) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-6');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-6');
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }

    if (progressCircle && docHeight > 0) {
      const offset = circumference - (scrollPercent * circumference);
      progressCircle.style.strokeDashoffset = `${offset}`;
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
