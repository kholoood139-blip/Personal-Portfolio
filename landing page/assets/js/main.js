/**
 * Personal Portfolio & Profile Script for Khulood Abdulrahman (خلود عبدالرحمن)
 * Front-End Developer | UI/UX Enthusiast | Modern Tech & AI
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjects();
  initStatsCounter();
  initContactForm();
  initBackToTop();
  initScrollSpy();
});

/* ==========================================================
   1. Projects Database (Easily editable by Khulood)
   ========================================================== */
const projectsData = [
  {
    id: 1,
    title: "منصة Aura AI لتوليد الصور والمحتوى",
    category: "apps",
    categoryName: "تطبيقات ويب",
    shortDesc: "لوحة تحكم تفاعلية متطورة لإدارة وتوليد التصاميم بالذكاء الاصطناعي مع تحليلات لحظية وإحصاءات دقيقة.",
    fullDesc: "منصة ويب متكاملة مبنية باستخدام أحدث معايير الواجهات الأمامية. توفر تجربة مستخدم سلسة للمبدعين لتوليد الصور والرسومات بواسطة الذكاء الاصطناعي، مع لوحة بيانات تعرض استهلاك الذاكرة، المشاريع النشطة، وسرعة المعالجة مع دعم الوضع الداكن.",
    image: "assets/images/project1.jpg",
    tags: ["JavaScript (ES6+)", "Tailwind CSS", "AI Integration", "Chart.js", "Responsive"],
    features: [
      "واجهة تفاعلية داكنة فائقة السلاسة بمؤثرات زجاجية Glassmorphism",
      "لوحة تحكم إحصائية تفاعلية تعرض معدل التوليد والبيانات الحية",
      "محرر نصوص برمجية للأوامر (Prompt Editor) مع حفظ التفضيلات",
      "تصميم متجاوب بنسبة 100% لكافة الشاشات"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "متجر Aura Botanica للمنتجات الطبيعية",
    category: "landing",
    categoryName: "صفحات هبوط",
    shortDesc: "صفحة هبوط ومتجر إلكتروني بتصميم مينيمالي راقٍ يركز على المساحات البيضاء وتجربة التسوق الفاخرة.",
    fullDesc: "واجهة متجر إلكتروني صُممت لتجسيد الفخامة والبساطة للمنتجات العطرية والطبيعية. تم التركيز على التسلسل البصري المتناغم، سرعة التحميل الخارقة، التفاعل الفوري عند التمرير وإضافة المنتجات للسلة بسلاسة.",
    image: "assets/images/project2.jpg",
    tags: ["HTML5", "Tailwind CSS", "UI/UX", "Clean Code", "CSS Grid"],
    features: [
      "نظام شبكي مخصص للمنتجات يتكيف بدقة مع أحجام الشاشات",
      "تأثيرات Hover دقيقة وجذابة لعرض تفاصيل المنتجات والأسعار",
      "معايير وصول عالية (Accessibility) مع سرعة تحميل فائقة",
      "تجربة مستخدم ممتعة تدعم استعراض المجموعات بسلاسة"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "منصة NexuFlow لإدارة المشاريع والمهام",
    category: "apps",
    categoryName: "تطبيقات ويب",
    shortDesc: "لوحة تحكم عصرية تجمع بين الإنتاجية وسهولة تتبع المهام اليومية مع إحصائيات بصرية ملهمة.",
    fullDesc: "تطبيق ويب يهدف إلى مساعدة الفرق والمستقلين في تنظيم مشاريعهم وجداولهم الزمنية بأسلوب بصري جذاب. يدعم السحب والإفلات، تصنيف الأولويات، ومتابعة نسبة الإنجاز اللحظية عبر مخططات بيانية تفاعلية.",
    image: "assets/images/project3.jpg",
    tags: ["Tailwind CSS", "Vanilla JavaScript", "Dashboard UI", "State Management"],
    features: [
      "نظام تتبع مهام متطور مع مؤشرات تقدم ورسوم بيانية دائرية",
      "واجهة مستخدم ذات طابع مستقبلي مريح للعين أثناء العمل الطويل",
      "أدوات تصفية وبحث لحظية للمهام والمواعيد النهائية",
      "دعم الحفظ المحلي LocalStorage لحفظ بيانات المهام"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "استوديو Aura.AI للتصميم والهوية الرقمية",
    category: "uiux",
    categoryName: "تصميم واجهات",
    shortDesc: "تصميم وتنفيذ صفحة هبوط ذات طابع مستقبلي واستخدام عناصر ثلاثية الأبعاد لوكالة إبداعية.",
    fullDesc: "صفحة هبوط مخصصة لاستوديو إبداعي يدمج بين التصميم الفني وأدوات الذكاء الاصطناعي. تم استخدام تدرجات النيون البنفسجية المتدفقة، والمؤثرات الضوئية الحية التي تخلق انطباعاً فريداً ومبهراً لدى الزائر منذ الثانية الأولى.",
    image: "assets/images/project4.jpg",
    tags: ["Figma to Code", "Modern Typography", "Micro-interactions", "Animations"],
    features: [
      "تدرجات ضوئية ديناميكية تخلق عمقاً بصرياً مذهلاً",
      "بطاقات تفاعلية مع حركات Micro-interactions عند التمرير",
      "أقسام واضحة لخدمات التصميم، الأعمال السابقة، ونموذج العمل",
      "بناء متوافق مع كافة المتصفحات الحديثة ومحركات البحث (SEO)"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com"
  }
];

/* ==========================================================
   2. Theme Toggle (Dark / Light Mode)
   ========================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIconDark = document.getElementById('themeIconDark');
  const themeIconLight = document.getElementById('themeIconLight');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('khulood-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
  } else {
    // Default to dark for tech aesthetic
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
   3. Navigation & Mobile Menu
   ========================================================== */
function initNavigation() {
  const navbar = document.getElementById('mainNavbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const menuIconOpen = document.getElementById('menuIconOpen');
  const menuIconClose = document.getElementById('menuIconClose');

  // Navbar blur and shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-lg', 'shadow-indigo-500/5', 'backdrop-blur-xl');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-indigo-500/5');
    }
  });

  // Mobile menu toggle
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
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close when clicking outside
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
   4. Scroll Spy & Active Nav Item
   ========================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
      }
    });
  });
}

/* ==========================================================
   5. Projects Grid & Interactive Modal
   ========================================================== */
function initProjects() {
  const container = document.getElementById('projectsContainer');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!container) return;

  // Render Projects Cards
  function renderProjects(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = "project-card group rounded-2xl overflow-hidden glass-panel border border-slate-200/80 dark:border-slate-800 flex flex-col transition-all duration-300";
      card.setAttribute('data-category', project.category);

      card.innerHTML = `
        <div class="relative overflow-hidden aspect-video bg-slate-900 cursor-pointer" onclick="openProjectModal(${project.id})">
          <img src="${project.image}" alt="${project.title}" class="project-img w-full h-full object-cover transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          
          <div class="absolute top-3 right-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/90 text-white backdrop-blur-md shadow-sm">
              ${project.categoryName}
            </span>
          </div>

          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-950/40 backdrop-blur-sm">
            <button class="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform">
              <i class="fa-solid fa-eye text-indigo-600"></i>
              <span>معاينة التفاصيل</span>
            </button>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
              ${project.title}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              ${project.shortDesc}
            </p>
          </div>

          <div>
            <div class="flex flex-wrap gap-2 mb-5">
              ${project.tags.slice(0, 3).map(tag => `
                <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                  ${tag}
                </span>
              `).join('')}
              ${project.tags.length > 3 ? `<span class="px-2 py-1 rounded-lg text-xs font-medium text-slate-500">+${project.tags.length - 3}</span>` : ''}
            </div>

            <div class="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <button onclick="openProjectModal(${project.id})" class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1.5 transition-colors">
                <span>تفاصيل المشروع</span>
                <i class="fa-solid fa-arrow-left text-[10px]"></i>
              </button>

              <div class="flex items-center gap-2">
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" title="كود المشروع على GitHub" class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-700 transition-all">
                  <i class="fa-brands fa-github text-base"></i>
                </a>
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" title="معاينة حية" class="w-8 h-8 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all">
                  <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
        b.classList.add('bg-slate-100', 'dark:bg-slate-800/80', 'text-slate-600', 'dark:text-slate-300');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
      btn.classList.remove('bg-slate-100', 'dark:bg-slate-800/80', 'text-slate-600', 'dark:text-slate-300');

      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  // Initial render
  renderProjects('all');

  // Modal open function attached to window
  window.openProjectModal = function(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('modalCategory').textContent = project.categoryName;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').textContent = project.fullDesc;

    // Tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(tag => `
      <span class="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50">
        ${tag}
      </span>
    `).join('');

    // Features
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = project.features.map(f => `
      <li class="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
        <i class="fa-solid fa-circle-check text-emerald-500 mt-1 text-xs"></i>
        <span>${f}</span>
      </li>
    `).join('');

    // Buttons
    document.getElementById('modalLiveBtn').href = project.liveUrl;
    document.getElementById('modalGithubBtn').href = project.githubUrl;

    // Show modal
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================
   6. Statistics Counter Animation
   ========================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          const prefix = stat.getAttribute('data-prefix') || '';
          const suffix = stat.getAttribute('data-suffix') || '';
          const duration = 1800; // ms
          const startTimestamp = performance.now();

          function step(now) {
            const progress = Math.min((now - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * target);
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
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('about');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================
   7. Contact Form Handling & Notification Toast
   ========================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const message = document.getElementById('userMessage').value.trim();

    // Basic Validation
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
      showToast('يرجى كتابة رسالة واضحة لا تقل عن 5 أحرف', 'error');
      return;
    }

    // Submit state animation
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fa-solid fa-circle-notch fa-spin text-lg"></i>
      <span>جارٍ إرسال الرسالة...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();
      showToast('شكراً لتواصلك يا ' + name + '! تم إرسال رسالتك بنجاح وسأتواصل معك بأقرب وقت ✨', 'success');
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
   8. Back to Top Button & Scroll Progress
   ========================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  const progressCircle = document.getElementById('progressCircle');

  if (!backToTopBtn) return;

  const circumference = 2 * Math.PI * 18; // r = 18 in SVG
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
