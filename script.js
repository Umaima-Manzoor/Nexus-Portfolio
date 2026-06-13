// DATA - all the content is stored here 
const DATA = {
  slides: [
    {
      tag: "AI & Machine Learning",
      title: 'Intelligent <span class="highlight">AI Platform</span> for Enterprise',
      description: "Full-stack ML platform automating data pipelines, training, and real-time inference at scale.",
      image: "https://picsum.photos/seed/ai-platform/1920/1080.jpg",
      primaryBtn: { text: "View Project", icon: "fas fa-arrow-right" },
      secondaryBtn: { text: "Case Study", icon: "fas fa-file-alt" }
    },
    {
      tag: "E-Commerce",
      title: 'Next-Gen <span class="highlight">Retail</span> Experience',
      description: "High-performance e-commerce with 3D product views, AR try-on, and sub-second page loads.",
      image: "https://picsum.photos/seed/ecom-retail/1920/1080.jpg",
      primaryBtn: { text: "Explore Live", icon: "fas fa-external-link-alt" },
      secondaryBtn: { text: "Learn More", icon: "fas fa-info-circle" }
    },
    {
      tag: "SaaS Dashboard",
      title: 'Analytics <span class="highlight">Dashboard</span> Redesign',
      description: "Legacy dashboard redesigned into an intuitive experience - 40% faster user task completion.",
      image: "https://picsum.photos/seed/saas-dash/1920/1080.jpg",
      primaryBtn: { text: "View Project", icon: "fas fa-arrow-right" },
      secondaryBtn: { text: "Read Insights", icon: "fas fa-chart-bar" }
    },
    {
      tag: "Mobile App",
      title: 'Wellness <span class="highlight">App</span> with Bio Feedback',
      description: "Cross-platform wellness app with wearable bio-feedback and personalized health insights.",
      image: "https://picsum.photos/seed/wellness-app/1920/1080.jpg",
      primaryBtn: { text: "See Screens", icon: "fas fa-mobile-alt" },
      secondaryBtn: { text: "Download", icon: "fas fa-download" }
    },
    {
      tag: "Brand Identity",
      title: 'Immersive <span class="highlight">Brand</span> for a Startup',
      description: "Complete brand system: logo, typography, motion language, and a WebGL launch site.",
      image: "https://picsum.photos/seed/brand-identity/1920/1080.jpg",
      primaryBtn: { text: "View Brand", icon: "fas fa-palette" },
      secondaryBtn: { text: "Process", icon: "fas fa-cogs" }
    }
  ],

  services: [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "High-performance websites and web applications built with modern frameworks, optimized for speed and SEO."
    },
    {
      icon: "fas fa-brain",
      title: "AI Integration",
      description: "Embed intelligence into your products - from NLP chatbots to computer vision pipelines and recommendation engines."
    },
    {
      icon: "fas fa-pen-nib",
      title: "UI/UX Design",
      description: "User-centered design that balances aesthetics with usability. Research-driven interfaces that feel effortless."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver smooth, native-like experiences on iOS and Android."
    },
    {
      icon: "fas fa-bullseye",
      title: "Brand Strategy",
      description: "Strategic brand positioning, visual identity systems, and messaging frameworks that differentiate and resonate."
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud & DevOps",
      description: "Scalable cloud architecture, CI/CD pipelines, and infrastructure automation for reliable, fast deployments."
    }
  ],

  projects: [
    {
      image: "https://picsum.photos/seed/proj-fintech/700/440.jpg",
      tags: ["Fintech", "React"],
      title: "Digital Banking Platform",
      description: "A secure, real-time banking interface with multi-currency support and instant transfers.",
      btnText: "View Case"
    },
    {
      image: "https://picsum.photos/seed/proj-health/700/440.jpg",
      tags: ["Healthcare", "AI"],
      title: "Diagnostic AI Assistant",
      description: "ML-powered radiology tool that assists clinicians with faster, more accurate image analysis.",
      btnText: "View Case"
    },
    {
      image: "https://picsum.photos/seed/proj-edu/700/440.jpg",
      tags: ["Education", "Full-Stack"],
      title: "Adaptive Learning Platform",
      description: "Personalized learning paths that adjust in real-time based on student performance and behavior.",
      btnText: "View Case"
    },
    {
      image: "https://picsum.photos/seed/proj-realestate/700/440.jpg",
      tags: ["Real Estate", "3D/WebGL"],
      title: "Virtual Property Tours",
      description: "WebGL-powered 3D property walkthroughs with interactive hotspots and real-time availability.",
      btnText: "View Case"
    },
    {
      image: "https://picsum.photos/seed/proj-logistics/700/440.jpg",
      tags: ["Logistics", "Dashboard"],
      title: "Fleet Management System",
      description: "Real-time fleet tracking, route optimization, and predictive maintenance dashboard.",
      btnText: "View Case"
    },
    {
      image: "https://picsum.photos/seed/proj-social/700/440.jpg",
      tags: ["Social", "Mobile"],
      title: "Community Platform",
      description: "A niche social platform with real-time messaging, events, and content curation algorithms.",
      btnText: "View Case"
    }
  ],

  testimonials: [
    {
      quote: "Nexus delivered beyond expectations. The AI platform they built handles millions of predictions daily with zero downtime. Their technical depth is remarkable.",
      name: "Sarah Chen",
      role: "CTO, DataFlow Inc.",
      avatar: "https://picsum.photos/seed/avatar-sarah/100/100.jpg"
    },
    {
      quote: "The redesign of our dashboard was a game-changer. Our users went from frustrated to delighted literally overnight. Best investment we made this year.",
      name: "Marcus Rivera",
      role: "VP Product, MetricHub",
      avatar: "https://picsum.photos/seed/avatar-marcus/100/100.jpg"
    },
    {
      quote: "Working with Nexus felt like having an extension of our own team. They understood our brand vision instantly and translated it into something truly special.",
      name: "Aisha Patel",
      role: "Founder, Lumina Studio",
      avatar: "https://picsum.photos/seed/avatar-aisha/100/100.jpg"
    }
  ],

  stats: [
    { number: 127, suffix: "+", label: "Projects Delivered" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 14, suffix: "", label: "Countries Served" },
    { number: 5, suffix: "yr", label: "Average Partnership" }
  ]
};


// Hero Slider 
const sliderEl = document.getElementById('hero');
const dotsContainer = document.getElementById('sliderDots');
const progressBar = document.getElementById('progressBar');
const slideCurrentEl = document.getElementById('slideCurrent');
const slideTotalEl = document.getElementById('slideTotal');

let currentSlide = 0;
let slideInterval = null;
let progressInterval = null;
let progressValue = 0;
const SLIDE_DURATION = 4500; // 4.5 seconds
const PROGRESS_STEP = 30;    // ms per progress tick

// Dynamically builds all slide DOM elements and dot indicators
function buildSlides() {
  DATA.slides.forEach((slide, index) => {
    // Create the slide wrapper
    const slideEl = document.createElement('div');
    slideEl.className = 'slide' + (index === 0 ? ' active' : '');
    slideEl.setAttribute('role', 'tabpanel');
    slideEl.setAttribute('aria-label', 'Slide ' + (index + 1) + ' of ' + DATA.slides.length);

    slideEl.innerHTML =
      '<div class="slide-bg">' +
        '<img src="' + slide.image + '" alt="' + slide.tag + ' project showcase" loading="' + (index === 0 ? 'eager' : 'lazy') + '">' +
      '</div>' +
      '<div class="slide-overlay"></div>' +
      '<div class="slide-content">' +
        '<span class="slide-tag"><i class="fas fa-bolt"></i> ' + slide.tag + '</span>' +
        '<h1 class="slide-title">' + slide.title + '</h1>' +
        '<p class="slide-desc">' + slide.description + '</p>' +
        '<div class="slide-actions">' +
          '<button class="btn-primary slide-cta" data-index="' + index + '">' +
            slide.primaryBtn.text + ' <i class="' + slide.primaryBtn.icon + '"></i>' +
          '</button>' +
          '<button class="btn-secondary slide-cta-secondary" data-index="' + index + '">' +
            slide.secondaryBtn.text + ' <i class="' + slide.secondaryBtn.icon + '"></i>' +
          '</button>' +
        '</div>' +
      '</div>';

    // Insert before the floating shapes div
    sliderEl.insertBefore(slideEl, sliderEl.querySelector('.floating-shapes'));

    // Create the corresponding dot indicator
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', 'Go to slide ' + (index + 1));
    dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    dot.addEventListener('click', function () {
      goToSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  // Set total slide count display
  slideTotalEl.textContent = String(DATA.slides.length).padStart(2, '0');

  // Attach click handlers to all slide CTA buttons
  document.querySelectorAll('.slide-cta').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idx = btn.getAttribute('data-index');
      showToast('Opening "' + DATA.slides[idx].primaryBtn.text + '" - ' + DATA.slides[idx].tag);
    });
  });

  document.querySelectorAll('.slide-cta-secondary').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idx = btn.getAttribute('data-index');
      showToast('Loading "' + DATA.slides[idx].secondaryBtn.text + '" details...');
    });
  });
}

// Transitions to a specific slide index 
function goToSlide(index) {
  if (index === currentSlide) return;

  var slides = document.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.slider-dot');

  // Deactivate current slide and dot
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  dots[currentSlide].setAttribute('aria-selected', 'false');

  // Activate new slide and dot
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  dots[currentSlide].setAttribute('aria-selected', 'true');

  // Update the counter display
  slideCurrentEl.textContent = String(currentSlide + 1).padStart(2, '0');

  // Restart the progress bar
  resetProgress();
}

// Advance to the next slide 
function nextSlide() {
  goToSlide((currentSlide + 1) % DATA.slides.length);
}

// Go back to the previous slide
function prevSlide() {
  goToSlide((currentSlide - 1 + DATA.slides.length) % DATA.slides.length);
}

/*
  Resets and starts the progress bar timer.
  Called after every slide change.
 */
function resetProgress() {
  progressValue = 0;
  progressBar.style.width = '0%';
  clearTimeout(slideInterval);
  clearInterval(progressInterval);

  // Tick the progress bar forward
  progressInterval = setInterval(function () {
    progressValue += (PROGRESS_STEP / SLIDE_DURATION) * 100;
    progressBar.style.width = Math.min(progressValue, 100) + '%';
  }, PROGRESS_STEP);

  // Auto-advance when duration elapses
  slideInterval = setTimeout(function () {
    nextSlide();
  }, SLIDE_DURATION);
}

// Pause auto-advance when user hovers over the slider
sliderEl.addEventListener('mouseenter', function () {
  clearTimeout(slideInterval);
  clearInterval(progressInterval);
});

// Resume auto-advance when user leaves the slider
sliderEl.addEventListener('mouseleave', function () {
  var remaining = SLIDE_DURATION - (progressValue / 100 * SLIDE_DURATION);
  slideInterval = setTimeout(nextSlide, remaining);
  progressInterval = setInterval(function () {
    progressValue += (PROGRESS_STEP / SLIDE_DURATION) * 100;
    progressBar.style.width = Math.min(progressValue, 100) + '%';
  }, PROGRESS_STEP);
});

// Arrow button listeners
document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', prevSlide);

// Keyboard navigation: left/right arrow keys
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Touch / swipe support for mobile
var touchStartX = 0;
var touchEndX = 0;

sliderEl.addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

sliderEl.addEventListener('touchend', function (e) {
  touchEndX = e.changedTouches[0].screenX;
  var diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else prevSlide();
  }
}, { passive: true });

// Build the slider and start auto-rotation
buildSlides();
resetProgress();


//  Serivces - Dynamic card generation
var servicesGrid = document.getElementById('servicesGrid');

DATA.services.forEach(function (service, i) {
  var card = document.createElement('article');
  card.className = 'service-card reveal reveal-delay-' + Math.min(i + 1, 4);
  card.innerHTML =
    '<div class="service-icon"><i class="' + service.icon + '"></i></div>' +
    '<h3>' + service.title + '</h3>' +
    '<p>' + service.description + '</p>';
  servicesGrid.appendChild(card);
});


// Stats - Dynamic generation
var statsGrid = document.getElementById('statsGrid');

DATA.stats.forEach(function (stat) {
  var item = document.createElement('div');
  item.className = 'stat-item reveal';
  item.innerHTML =
    '<div class="stat-number" data-target="' + stat.number + '" data-suffix="' + stat.suffix + '">0' + stat.suffix + '</div>' +
    '<div class="stat-label">' + stat.label + '</div>';
  statsGrid.appendChild(item);
});

/*
 Animates a stat number from 0 to its target value
  using a cubic ease-out curve over 2 seconds
 */
function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'), 10);
  var suffix = el.getAttribute('data-suffix');
  var duration = 2000;
  var start = performance.now();

  function update(now) {
    var elapsed = now - start;
    var progress = Math.min(elapsed / duration, 1);
    // Cubic ease-out
    var eased = 1 - Math.pow(1 - progress, 3);
    var current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}


// Projects - Dynamic card generation

var projectsGrid = document.getElementById('projectsGrid');

DATA.projects.forEach(function (project, i) {
  var card = document.createElement('article');
  card.className = 'project-card reveal reveal-delay-' + Math.min((i % 3) + 1, 4);
  card.innerHTML =
    '<div class="project-thumb">' +
      '<img src="' + project.image + '" alt="' + project.title + ' preview" loading="lazy">' +
      '<div class="project-thumb-overlay">' +
        '<button class="btn-primary project-view-btn" data-title="' + project.title + '">' +
          '<i class="fas fa-arrow-right"></i> ' + project.btnText +
        '</button>' +
      '</div>' +
    '</div>' +
    '<div class="project-info">' +
      '<div class="project-tags">' +
        project.tags.map(function (t) { return '<span class="project-tag">' + t + '</span>'; }).join('') +
      '</div>' +
      '<h3>' + project.title + '</h3>' +
      '<p>' + project.description + '</p>' +
    '</div>';
  projectsGrid.appendChild(card);
});

// Delegate click events for project "View Case" buttons
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.project-view-btn');
  if (btn) {
    showToast('Opening case study for "' + btn.getAttribute('data-title') + '"...');
  }
});


// Testimonials - Dynamic card generation
var testimonialsGrid = document.getElementById('testimonialsGrid');

DATA.testimonials.forEach(function (t, i) {
  var card = document.createElement('article');
  card.className = 'testimonial-card reveal reveal-delay-' + (i + 1);
  card.innerHTML =
    '<div class="quote-icon">"</div>' +
    '<blockquote>' + t.quote + '</blockquote>' +
    '<div class="testimonial-author">' +
      '<img class="testimonial-avatar" src="' + t.avatar + '" alt="' + t.name + '" loading="lazy">' +
      '<div>' +
        '<div class="testimonial-author-name">' + t.name + '</div>' +
        '<div class="testimonial-author-role">' + t.role + '</div>' +
      '</div>' +
    '</div>';
  testimonialsGrid.appendChild(card);
});


// Scroll Reveal - IntersectionObserver
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // If this reveal contains a stat counter, animate it
      var counter = entry.target.querySelector('.stat-number');
      if (counter && !counter.dataset.animated) {
        counter.dataset.animated = 'true';
        animateCounter(counter);
      }

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

// Observe all elements with the .reveal class
document.querySelectorAll('.reveal').forEach(function (el) {
  revealObserver.observe(el);
});


// Navbar - Scroll effect & mobile toggle
var navbar = document.querySelector('.navbar');
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');

// Add blurred background on scroll
window.addEventListener('scroll', function () {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Toggle mobile menu
navToggle.addEventListener('click', function () {
  var isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});


// CTA Button
document.getElementById('ctaBtn').addEventListener('click', function () {
  showToast("Message received! We'll be in touch within 24 hours.");
});


/* Toast Notification System:
  Shows a non-intrusive toast notification that
  auto-dismisses after 3.5 seconds
 */
function showToast(message) {
  var container = document.getElementById('toastContainer');
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<i class="fas fa-check-circle"></i><span>' + message + '</span>';
  container.appendChild(toast);

  setTimeout(function () {
    toast.classList.add('out');
    toast.addEventListener('animationend', function () {
      toast.remove();
    });
  }, 3500);
}


//  Mouse Parallax (Desktop only - fine pointer detected)
if (window.matchMedia('(pointer: fine)').matches) {
  var heroSlider = document.querySelector('.hero-slider');
  var shapes = document.querySelectorAll('.floating-shape');

  heroSlider.addEventListener('mousemove', function (e) {
    var rect = heroSlider.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;

    shapes.forEach(function (shape, i) {
      var factor = (i + 1) * 15;
      shape.style.transform = 'translate(' + (x * factor) + 'px, ' + (y * factor) + 'px) rotate(' + (45 + x * 10) + 'deg)';
    });
  });
}


// Footer Social LInks - Toast feedback
document.querySelectorAll('.footer-socials a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var platform = link.getAttribute('aria-label');
    showToast('Opening ' + platform + ' profile...');
  });
});