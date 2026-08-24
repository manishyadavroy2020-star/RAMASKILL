// ============================================
// RAMA SKILL ACADEMY — Centralized Data & SEO Config
// Single Source of Truth for Content & Metadata
// ============================================

const SITE_CONFIG = {
  name: "Rama Skill Academy",
  shortName: "Rama Skill Academy",
  tagline: "Career & Skill Development Courses",
  description: "Rama Skill Academy offers career-focused, industry-relevant skill training and professional courses in SAP, BFSI, Data Analytics, AI Digital Marketing, Graphic Design, AI Tools, and AI Web Development with 100% placement assistance in Durgapur.",
  phone: "9593492055",
  phoneFormatted: "+91 95934 92055",
  phoneTel: "tel:9593492055",
  email: "ramaskillacademy@gmail.com",
  emailMailto: "mailto:ramaskillacademy@gmail.com",
  address: "3/6, Bengal Ambuja, 1st Floor, Opposite of IDFC First Bank, City Centre, Durgapur-16, West Bengal, India",
  addressShort: "City Centre, Durgapur-16, West Bengal",
  counsellingOffice: "RDB Boulevard, 5th Floor, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal – 700091",
  businessHours: "Monday - Saturday, 10:00 AM - 7:00 PM",
  domain: "https://ramaskillacademy.com",
  ogImage: "https://ramaskillacademy.comdata-analytics-course-rama-skill-academy.png",
  socialLinks: {
    // Verified social links will be added here
  },
  navItems: [
    { label: "Home", href: "index.html" },
    { label: "Courses", href: "courses.html" },
    { label: "About Us", href: "about.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Contact Us", href: "contact.html" }
  ],
  ctaText: "Enroll Now",
  ctaLink: "/courses/"
};

const STATS = [
  { number: "5000+", label: "Students Trained", icon: "🎓" },
  { number: "3000+", label: "Students Placed", icon: "💼" },
  { number: "500+", label: "Hiring Partners", icon: "🤝" },
  { number: "4.9", label: "Google Rating", icon: "⭐" }
];

const COURSES = [
  {
    slug: "sap",
    name: "SAP",
    shortDescription: "Master SAP enterprise resource planning with hands-on training in modules like FICO, MM, SD, ABAP, HCM, and PP. Build the skills employers demand for corporate ERP roles.",
    description: "Our comprehensive SAP training program provides practical, industry-focused education in one of the world's most widely used enterprise software platforms. Learn to manage business operations across finance, logistics, human resources, and manufacturing using SAP's powerful tools and modules.",
    duration: "12 Weeks",
    price: "XXXX",
    image: "sap-course-rama-skill-academy.png",
    altText: "SAP course training at Rama Skill Academy Durgapur",
    seoTitle: "SAP Course | Professional SAP Training | Rama Skill Academy",
    seoDescription: "Enroll in SAP training at Rama Skill Academy. Learn SAP FICO, MM, SD, ABAP, HCM with hands-on projects and placement assistance in Durgapur.",
    canonicalUrl: "https://ramaskillacademy.com/courses/sap/",
    features: [
      "Hands-on SAP module training",
      "Industry-experienced trainers",
      "Real-world business scenarios",
      "Placement assistance",
      "Certificate upon completion"
    ],
    curriculum: [
      "Introduction to SAP & ERP Systems",
      "SAP FICO (Financial Accounting & Controlling)",
      "SAP MM (Materials Management)",
      "SAP SD (Sales & Distribution)",
      "SAP ABAP (Programming)",
      "SAP HCM (Human Capital Management)",
      "SAP PP (Production Planning)",
      "Live Project Work & Case Studies",
      "Interview Preparation & Resume Building"
    ],
    eligibility: "[ADD ELIGIBILITY]",
    certification: "Industry-Recognized Rama Skill Academy Certificate",
    careerOpportunities: [
      "SAP Consultant",
      "SAP Functional Analyst",
      "SAP FICO Consultant",
      "SAP MM Consultant",
      "ERP Specialist",
      "Business Analyst",
      "SAP Project Manager"
    ],
    relatedCourses: ["bfsi", "data-analytics", "ai-digital-marketing"],
    faqs: [
      { question: "Who can enroll in the SAP course?", answer: "This course is open to graduates, working professionals, and anyone interested in building a career in enterprise resource planning and SAP-related roles." },
      { question: "Will I get placement assistance?", answer: "Yes, we provide complete placement assistance including resume building, mock interviews, and connections with our hiring partners." },
      { question: "What SAP modules are covered?", answer: "We cover key modules including FICO, MM, SD, ABAP, HCM, and PP with hands-on practical training." }
    ]
  },
  {
    slug: "bfsi",
    name: "BFSI",
    shortDescription: "Get job-ready for the banking, financial services, and insurance sector with comprehensive training covering banking operations, insurance fundamentals, and digital financial services.",
    description: "Our BFSI training program prepares you for a rewarding career in Banking, Financial Services, and Insurance. Learn the fundamentals of banking operations, financial products, insurance concepts, and digital financial technologies that drive the modern financial industry.",
    duration: "12 Weeks",
    price: "XXXX",
    image: "bfsi-course-rama-skill-academy.png",
    altText: "BFSI course training at Rama Skill Academy Durgapur",
    seoTitle: "BFSI Course | Banking, Financial Services & Insurance | Rama Skill Academy",
    seoDescription: "Join our BFSI training program at Rama Skill Academy. Learn banking, financial services, and insurance with placement support in Durgapur.",
    canonicalUrl: "https://ramaskillacademy.com/courses/bfsi/",
    features: [
      "Comprehensive banking & finance training",
      "Insurance sector fundamentals",
      "Digital financial services",
      "Industry-relevant curriculum",
      "Placement assistance"
    ],
    curriculum: [
      "Introduction to Banking & Financial Systems",
      "Banking Products & Services",
      "Financial Planning & Advisory",
      "Insurance Fundamentals",
      "Digital Banking & Fintech",
      "Risk Management & Compliance",
      "Customer Relationship Management",
      "Financial Regulations & KYC/AML",
      "Interview Preparation & Certification"
    ],
    eligibility: "[ADD ELIGIBILITY]",
    certification: "Industry-Recognized Rama Skill Academy Certificate",
    careerOpportunities: [
      "Bank Officer",
      "Financial Advisor",
      "Insurance Agent",
      "Relationship Manager",
      "Credit Analyst",
      "Investment Analyst",
      "Risk Manager"
    ],
    relatedCourses: ["sap", "data-analytics", "ai-digital-marketing"],
    faqs: [
      { question: "What career opportunities are available after BFSI training?", answer: "You can pursue careers as a Bank Officer, Financial Advisor, Insurance Agent, Relationship Manager, Credit Analyst, and various other roles in banking and financial institutions." },
      { question: "Do I need a finance background?", answer: "No prior finance background is required. Our course starts from fundamentals and builds up to advanced concepts." },
      { question: "Is placement assistance provided?", answer: "Yes, we provide complete placement support with connections to banking and financial institutions." }
    ]
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    shortDescription: "Learn to collect, analyze, and interpret data using industry-standard tools. Master data visualization, business intelligence, and analytical techniques to drive informed business decisions.",
    description: "Our Data Analytics program equips you with the skills to transform raw data into actionable business insights. Learn industry-standard tools and techniques for data collection, cleaning, analysis, visualization, and reporting that organizations rely on to make data-driven decisions.",
    duration: "12 Weeks",
    price: "XXXX",
    image: "data-analytics-course-rama-skill-academy.png",
    altText: "Data Analytics course training at Rama Skill Academy Durgapur",
    seoTitle: "Data Analytics Course | Data Analytics Training | Rama Skill Academy",
    seoDescription: "Learn Data Analytics at Rama Skill Academy. Master data visualization, business intelligence tools, and analytical techniques with placement support in Durgapur.",
    canonicalUrl: "https://ramaskillacademy.com/courses/data-analytics/",
    features: [
      "Hands-on data analysis projects",
      "Industry-standard tools training",
      "Business intelligence & visualization",
      "Real-world case studies",
      "Placement assistance"
    ],
    curriculum: [
      "Introduction to Data Analytics",
      "Excel for Data Analysis",
      "SQL & Database Management",
      "Python for Data Analysis",
      "Data Visualization with Tableau/Power BI",
      "Statistical Analysis & Probability",
      "Business Intelligence Fundamentals",
      "Data Cleaning & Preprocessing",
      "Capstone Project & Portfolio Building"
    ],
    eligibility: "[ADD ELIGIBILITY]",
    certification: "Industry-Recognized Rama Skill Academy Certificate",
    careerOpportunities: [
      "Data Analyst",
      "Business Analyst",
      "BI Analyst",
      "Data Visualization Specialist",
      "Analytics Consultant",
      "Market Research Analyst",
      "Operations Analyst"
    ],
    relatedCourses: ["ai-digital-marketing", "certified-ai-tools-specialist", "ai-web-development-hostinger-horizons"],
    faqs: [
      { question: "Do I need programming experience?", answer: "No prior programming experience is needed. We start from basics and gradually build your skills in tools like Excel, SQL, and Python." },
      { question: "What tools will I learn?", answer: "You will learn Excel, SQL, Python, Tableau, Power BI, and other industry-standard analytics tools." },
      { question: "What career paths can I pursue?", answer: "Graduates can work as Data Analysts, Business Analysts, BI Analysts, and in various other data-driven roles across industries." }
    ]
  },
  {
    slug: "ai-digital-marketing",
    name: "AI Digital Marketing",
    shortDescription: "Master AI-powered digital marketing strategies including content creation, SEO optimization, social media marketing, ad campaign management, and marketing automation using cutting-edge AI tools.",
    description: "Our AI Digital Marketing program combines traditional digital marketing expertise with the latest AI-powered tools and strategies. Learn to leverage artificial intelligence for content creation, ad optimization, keyword research, customer targeting, and campaign analytics to drive measurable business results.",
    duration: "12 Weeks",
    price: "XXXX",
    image: "ai-digital-marketing-course-rama-skill-academy.png",
    altText: "AI Digital Marketing course at Rama Skill Academy Durgapur",
    seoTitle: "AI Digital Marketing Course | AI Marketing Training | Rama Skill Academy",
    seoDescription: "Learn AI Digital Marketing at Rama Skill Academy. Master AI-powered SEO, social media marketing, and advertising with placement assistance in Durgapur.",
    canonicalUrl: "https://ramaskillacademy.com/courses/ai-digital-marketing/",
    features: [
      "AI-powered marketing strategies",
      "SEO & content optimization",
      "Social media marketing",
      "Ad campaign management",
      "Marketing automation tools"
    ],
    curriculum: [
      "Digital Marketing Fundamentals",
      "Search Engine Optimization (SEO) with AI",
      "Social Media Marketing & Management",
      "Google Ads & PPC Campaigns",
      "Content Marketing with AI Tools",
      "Email Marketing & Automation",
      "Analytics & Performance Tracking",
      "AI Tools for Marketing Productivity",
      "Live Campaign Projects & Portfolio Building"
    ],
    eligibility: "[ADD ELIGIBILITY]",
    certification: "Industry-Recognized Rama Skill Academy Certificate",
    careerOpportunities: [
      "Digital Marketing Manager",
      "SEO Specialist",
      "Social Media Manager",
      "Content Marketing Specialist",
      "PPC Campaign Manager",
      "Marketing Automation Specialist",
      "Growth Hacker"
    ],
    relatedCourses: ["data-analytics", "certified-ai-tools-specialist", "graphic-design"],
    faqs: [
      { question: "How is AI used in digital marketing?", answer: "AI is used for content generation, ad targeting optimization, keyword research, customer behavior analysis, chatbots, and automating repetitive marketing tasks." },
      { question: "Will I learn to use AI tools?", answer: "Yes, you'll gain hands-on experience with various AI-powered marketing tools for content creation, SEO, analytics, and campaign optimization." },
      { question: "Can I start my own freelance business?", answer: "Absolutely. This course equips you with the skills needed to offer digital marketing services as a freelancer or start your own agency." }
    ]
  },
  {
    slug: "certified-ai-tools-specialist",
    name: "Certified AI Tools Specialist",
    shortDescription: "Become proficient in the latest AI tools and technologies. Learn to use AI for productivity, automation, content creation, and professional workflows across multiple domains.",
    description: "Our Certified AI Tools Specialist program provides comprehensive training in the latest artificial intelligence tools and technologies. Learn to leverage AI for enhanced productivity, creative content generation, workflow automation, and professional development across various industries.",
    duration: "12 Weeks",
    price: "XXXX",
    image: "certified-ai-tools-specialist-rama-skill-academy.png",
    altText: "Certified AI Tools Specialist course at Rama Skill Academy Durgapur",
    seoTitle: "Certified AI Tools Specialist Course | AI Tools Training | Rama Skill Academy",
    seoDescription: "Become a Certified AI Tools Specialist at Rama Skill Academy. Master AI productivity tools, automation, and professional AI workflows in Durgapur.",
    canonicalUrl: "https://ramaskillacademy.com/courses/certified-ai-tools-specialist/",
    features: [
      "Comprehensive AI tools training",
      "Hands-on practical sessions",
      "Automation & productivity skills",
      "Cross-domain AI applications",
      "Industry-recognized certification"
    ],
    curriculum: [
      "Introduction to Artificial Intelligence",
      "AI for Content Creation & Writing",
      "AI for Image & Video Generation",
      "AI for Data Analysis & Research",
      "AI Automation & Workflow Tools",
      "AI for Business Productivity",
      "Prompt Engineering Mastery",
      "AI Ethics & Best Practices",
      "Capstone Project & Certification"
    ],
    eligibility: "[ADD ELIGIBILITY]",
    certification: "Industry-Recognized Rama Skill Academy Certificate",
    careerOpportunities: [
      "AI Tools Specialist",
      "AI Integration Consultant",
      "Digital Transformation Analyst",
      "AI Content Specialist",
      "Automation Engineer",
      "Productivity Consultant",
      "AI Trainer"
    ],
    relatedCourses: ["ai-digital-marketing", "data-analytics", "ai-web-development-hostinger-horizons"],
    faqs: [
      { question: "What AI tools will I learn?", answer: "You will learn various AI tools for content creation, image generation, data analysis, automation, and productivity enhancement across different professional domains." },
      { question: "Is this course suitable for beginners?", answer: "Yes, this course is designed for both beginners and professionals who want to master AI tools for their career advancement." },
      { question: "Will I receive a certification?", answer: "Yes, upon successful completion, you will receive a certification validating your AI tools proficiency." }
    ]
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    shortDescription: "Master professional graphic design with training in Photoshop, Illustrator, Figma, CorelDRAW, and more. Build a portfolio of stunning designs for print and digital media.",
    description: "Our Graphic Design program provides comprehensive training in professional design tools and creative techniques. From logo design to social media graphics, print layouts to UI elements, you will develop the skills needed to create visually compelling designs for any medium.",
    duration: "12 Weeks",
    price: "XXXX",
    image: "graphic-design-course-rama-skill-academy.png",
    altText: "Graphic Design course training at Rama Skill Academy Durgapur",
    seoTitle: "Graphic Design Course | Professional Graphic Design Training | Rama Skill Academy",
    seoDescription: "Learn Graphic Design at Rama Skill Academy. Master Photoshop, Illustrator, Figma, and more with portfolio projects and placement support in Durgapur.",
    canonicalUrl: "https://ramaskillacademy.com/courses/graphic-design/",
    features: [
      "Industry-standard design software",
      "Print & digital design skills",
      "Portfolio development",
      "Creative design techniques",
      "Placement assistance"
    ],
    curriculum: [
      "Design Fundamentals & Principles",
      "Adobe Photoshop Mastery",
      "Adobe Illustrator for Vector Graphics",
      "Figma for UI/UX Design",
      "CorelDRAW for Print Design",
      "Typography & Color Theory",
      "Logo & Brand Identity Design",
      "Social Media & Digital Design",
      "Portfolio Building & Industry Readiness"
    ],
    eligibility: "[ADD ELIGIBILITY]",
    certification: "Industry-Recognized Rama Skill Academy Certificate",
    careerOpportunities: [
      "Graphic Designer",
      "UI/UX Designer",
      "Brand Identity Designer",
      "Social Media Designer",
      "Print Designer",
      "Creative Director",
      "Freelance Designer"
    ],
    relatedCourses: ["ai-digital-marketing", "ai-web-development-hostinger-horizons", "certified-ai-tools-specialist"],
    faqs: [
      { question: "Do I need artistic talent to learn graphic design?", answer: "While artistic aptitude helps, design is a skill that can be learned. Our course teaches you the principles, tools, and techniques to create professional designs." },
      { question: "What software will I learn?", answer: "You will learn Adobe Photoshop, Adobe Illustrator, Figma, CorelDRAW, and other industry-standard design tools." },
      { question: "Will I build a portfolio?", answer: "Yes, portfolio development is a key part of the course. You will create multiple real-world projects to showcase your skills." }
    ]
  },
  {
    slug: "ai-web-development-hostinger-horizons",
    name: "AI Web Development with Hostinger Horizons Course",
    shortDescription: "Learn AI-assisted web development techniques. Build modern, responsive websites using AI-powered tools and Hostinger Horizons platform for rapid, professional website creation.",
    description: "Our AI Web Development with Hostinger Horizons program teaches you how to leverage artificial intelligence and modern development tools to create professional websites efficiently. Learn to build responsive, modern web applications using AI-assisted development workflows.",
    duration: "12 Weeks",
    price: "XXXX",
    image: "ai-web-development-hostinger-horizons-rama-skill-academy.png",
    altText: "AI Web Development with Hostinger Horizons course at Rama Skill Academy Durgapur",
    seoTitle: "AI Web Development with Hostinger Horizons | Rama Skill Academy",
    seoDescription: "Learn AI Web Development with Hostinger Horizons at Rama Skill Academy. Build modern websites with AI-assisted development tools in Durgapur.",
    canonicalUrl: "https://ramaskillacademy.com/courses/ai-web-development-hostinger-horizons/",
    features: [
      "AI-assisted web development",
      "Modern responsive design",
      "Hostinger Horizons platform",
      "Practical project-based learning",
      "Portfolio development"
    ],
    curriculum: [
      "Web Development Fundamentals (HTML, CSS, JS)",
      "Introduction to AI in Web Development",
      "Responsive Design & Modern Layouts",
      "Hostinger Horizons Platform Training",
      "AI-Powered Website Generation",
      "CMS Integration & Management",
      "SEO & Web Performance Optimization",
      "E-Commerce & SaaS Fundamentals",
      "Live Projects & Portfolio Building"
    ],
    eligibility: "[ADD ELIGIBILITY]",
    certification: "Industry-Recognized Rama Skill Academy Certificate",
    careerOpportunities: [
      "Web Developer",
      "Frontend Developer",
      "AI Web Developer",
      "Web Designer",
      "Full Stack Developer",
      "Freelance Web Developer",
      "Digital Solutions Specialist"
    ],
    relatedCourses: ["certified-ai-tools-specialist", "graphic-design", "data-analytics"],
    faqs: [
      { question: "What is Hostinger Horizons?", answer: "Hostinger Horizons is a platform that enables AI-assisted website creation, allowing users to build professional websites efficiently. This course teaches you to leverage its capabilities." },
      { question: "Do I need coding experience?", answer: "No prior coding experience is required. We start from HTML, CSS, and JavaScript basics before moving to AI-assisted development." },
      { question: "Can I build real websites during the course?", answer: "Yes, you will build multiple real-world website projects as part of the curriculum, which will form your professional portfolio." }
    ]
  }
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    course: "SAP Training",
    rating: 5,
    text: "The SAP training at Rama Skill Academy was incredibly comprehensive. The hands-on approach helped me understand complex ERP concepts easily. I landed a great job within weeks of completing the course."
  },
  {
    name: "Priya Mukherjee",
    initials: "PM",
    course: "Data Analytics",
    rating: 5,
    text: "I had zero experience with data tools before joining. The instructors made everything so clear and practical. Now I work as a Data Analyst and I owe it all to the excellent training I received here."
  },
  {
    name: "Amit Das",
    initials: "AD",
    course: "AI Digital Marketing",
    rating: 5,
    text: "The AI Digital Marketing course opened up a whole new world for me. Learning to use AI tools for marketing was a game-changer. The practical projects were directly applicable to real business scenarios."
  },
  {
    name: "Sneha Roy",
    initials: "SR",
    course: "Graphic Design",
    rating: 5,
    text: "Outstanding graphic design program! The curriculum covers all major tools and the portfolio projects helped me land freelance clients even before completing the course."
  },
  {
    name: "Vikram Singh",
    initials: "VS",
    course: "BFSI",
    rating: 5,
    text: "The BFSI course gave me a thorough understanding of banking and financial services. The placement team was very supportive and helped me prepare for interviews. Highly recommend!"
  },
  {
    name: "Ananya Chatterjee",
    initials: "AC",
    course: "AI Tools Specialist",
    rating: 5,
    text: "This course transformed how I work. Learning AI tools for productivity has made me much more efficient. The trainers are knowledgeable and the course content is very up-to-date."
  }
];

const SUCCESS_STORIES = [
  {
    name: "Suraj Mondal",
    initials: "SM",
    role: "SAP Consultant",
    company: "Leading IT Firm",
    course: "SAP",
    text: "After completing the SAP course, I received multiple job offers. The practical training and placement support were instrumental in launching my career."
  },
  {
    name: "Riya Banerjee",
    initials: "RB",
    role: "Data Analyst",
    company: "Tech Company",
    course: "Data Analytics",
    text: "The Data Analytics program gave me industry-ready skills. Within a month of graduating, I was working as a Data Analyst with a great salary package."
  },
  {
    name: "Karan Gupta",
    initials: "KG",
    role: "Digital Marketing Manager",
    company: "Marketing Agency",
    course: "AI Digital Marketing",
    text: "The AI marketing skills I learned here set me apart from other candidates. I now manage digital campaigns for multiple brands at a leading agency."
  },
  {
    name: "Meera Patel",
    initials: "MP",
    role: "UI/UX Designer",
    company: "Design Studio",
    course: "Graphic Design",
    text: "The graphic design course built my creative foundation and professional portfolio. I'm now working at my dream design studio."
  }
];

const GALLERY_IMAGES = [];

const WHY_CHOOSE_US = [
  {
    icon: "🎯",
    title: "Practical Training",
    description: "Learn by doing with hands-on projects and real-world case studies that prepare you for actual job scenarios."
  },
  {
    icon: "💻",
    title: "Live Projects",
    description: "Work on live industry projects to build a strong portfolio that impresses employers and clients."
  },
  {
    icon: "🚀",
    title: "Placement Support",
    description: "Get comprehensive placement assistance with resume building, mock interviews, and connections to our hiring partners."
  },
  {
    icon: "👨‍🏫",
    title: "Expert Trainers",
    description: "Learn from industry professionals with years of real-world experience in their respective fields."
  },
  {
    icon: "📱",
    title: "Flexible Learning",
    description: "Choose from online and offline learning options with flexible schedules that fit your lifestyle."
  },
  {
    icon: "🏆",
    title: "Certification",
    description: "Earn industry-recognized certifications that validate your skills and boost your career prospects."
  }
];

const CERTIFICATION_FEATURES = [
  "Verifiable digital credential",
  "Share on LinkedIn and other professional platforms",
  "Industry-recognized certification",
  "Validates practical skills and hands-on project knowledge",
  "Lifetime access to your certificate record",
  "Enhances your resume for job opportunities"
];


// ============================================
// RAMA SKILL ACADEMY — Shared Components & SEO Engine
// Auto-injects header, footer, mobile menu, modal, and JSON-LD Structured Data
// ============================================

// Determine root path based on current page path
function getRootPath() {
  const path = window.location.pathname.replace(/\\/g, '/');
  const dir = path.substring(0, path.lastIndexOf('/'));
  
  // Depth 2: course detail pages inside /courses/[slug]/
  if (/\/(courses|course)\/[^\/]+$/.test(dir) || dir.includes('/courses/')) {
    const parts = dir.split('/').filter(Boolean);
    const coursesIdx = parts.lastIndexOf('courses');
    if (coursesIdx !== -1 && parts.length - 1 > coursesIdx) {
      return '../..';
    }
    if (coursesIdx !== -1) {
      return '..';
    }
  }

  // Depth 1: top-level section pages (/courses, /about, /contact, /gallery, /blog)
  if (/\/(courses|about|contact|gallery|blog)$/.test(dir)) {
    return '..';
  }

  return '.';
}

const ROOT = '';

// ---- Inject JSON-LD Schema ----
function injectSchemaJSONLD(schemaData) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
}

// Global EducationalOrganization Schema
function injectGlobalSchemas() {
  // EducationalOrganization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.domain + "/",
    "logo": SITE_CONFIG.domain + "data-analytics-course-rama-skill-academy.png",
    "description": SITE_CONFIG.description,
    "telephone": "+919593492055",
    "email": SITE_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3/6, Bengal Ambuja, 1st Floor, Opp. IDFC First Bank, City Centre",
      "addressLocality": "Durgapur",
      "addressRegion": "West Bengal",
      "postalCode": "713216",
      "addressCountry": "IN"
    }
  };
  injectSchemaJSONLD(orgSchema);

  // WebSite Schema on Homepage
  const isHomepage = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') && !window.location.pathname.includes('/courses/') && !window.location.pathname.includes('/about/') && !window.location.pathname.includes('/contact/') && !window.location.pathname.includes('/gallery/');
  if (isHomepage) {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domain + "/",
      "description": SITE_CONFIG.description
    };
    injectSchemaJSONLD(websiteSchema);
  }
}

// ---- Header Component ----
function renderHeader() {
  const currentPath = window.location.pathname;
  const header = document.getElementById('site-header');
  if (!header) return;

  const navLinks = SITE_CONFIG.navItems.map(item => {
    const isActive = currentPath === item.href || 
      (item.href !== '/' && currentPath.startsWith(item.href));
    const href = ROOT + item.href;
    return `<a href="${href}" class="nav-link${isActive ? ' active' : ''}">${item.label}</a>`;
  }).join('');

  header.innerHTML = `
    <div class="container header-inner">
      <a href="" class="logo" aria-label="Rama Skill Academy Home">
        <div class="logo-icon">R</div>
        <span>Rama Skill Academy</span>
      </a>
      <nav class="nav-desktop" aria-label="Main Navigation">
        ${navLinks}
        <a href="courses.html" class="btn btn-primary btn-sm nav-cta">Enroll Now</a>
      </nav>
      <button class="hamburger" id="hamburger-btn" aria-label="Open navigation menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
}

// ---- Mobile Menu Component ----
function renderMobileMenu() {
  const existing = document.getElementById('mobile-menu-container');
  if (existing) return;

  const currentPath = window.location.pathname;
  const navLinks = SITE_CONFIG.navItems.map(item => {
    const isActive = currentPath === item.href || 
      (item.href !== '/' && currentPath.startsWith(item.href));
    const href = ROOT + item.href;
    return `<a href="${href}" class="nav-link${isActive ? ' active' : ''}">${item.label}</a>`;
  }).join('');

  const container = document.createElement('div');
  container.id = 'mobile-menu-container';
  container.innerHTML = `
    <div class="mobile-overlay" id="mobile-overlay"></div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile Navigation">
      ${navLinks}
      <a href="courses.html" class="btn btn-primary w-full">Enroll Now</a>
      <div class="contact-info-mobile">
        <a href="${SITE_CONFIG.phoneTel}">
          <span>📞</span>
          <span>${SITE_CONFIG.phoneFormatted}</span>
        </a>
        <a href="${SITE_CONFIG.emailMailto}">
          <span>✉️</span>
          <span>${SITE_CONFIG.email}</span>
        </a>
      </div>
    </nav>
  `;
  document.body.appendChild(container);
}

// ---- Footer Component ----
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  const quickLinks = SITE_CONFIG.navItems.map(item => {
    const href = ROOT + item.href;
    return `<li><a href="${href}">${item.label}</a></li>`;
  }).join('');

  const courseLinks = COURSES.slice(0, 5).map(course => {
    return `<li><a href="courses/${course.slug}/">${course.name}</a></li>`;
  }).join('');

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="" class="logo">
            <div class="logo-icon">R</div>
            <span>Rama Skill Academy</span>
          </a>
          <p>${SITE_CONFIG.description}</p>
        </div>
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>${quickLinks}</ul>
        </div>
        <div class="footer-column">
          <h4>Courses</h4>
          <ul>${courseLinks}</ul>
        </div>
        <div class="footer-column">
          <h4>Contact Us</h4>
          <div class="footer-contact-item">
            <span class="icon">📞</span>
            <a href="${SITE_CONFIG.phoneTel}">${SITE_CONFIG.phoneFormatted}</a>
          </div>
          <div class="footer-contact-item">
            <span class="icon">✉️</span>
            <a href="${SITE_CONFIG.emailMailto}">${SITE_CONFIG.email}</a>
          </div>
          <div class="footer-contact-item" style="align-items: flex-start;">
            <span class="icon" style="margin-top: 4px;">🏢</span>
            <div>
              <strong style="display: block; font-size: 0.9em; margin-bottom: 2px;">Corporate Office</strong>
              <span>${SITE_CONFIG.addressShort}</span>
            </div>
          </div>
          <div class="footer-contact-item" style="align-items: flex-start;">
            <span class="icon" style="margin-top: 4px;">📍</span>
            <div>
              <strong style="display: block; font-size: 0.9em; margin-bottom: 2px;">Counselling Office</strong>
              <span>Kolkata, West Bengal - 700091</span>
            </div>
          </div>
          <div class="footer-contact-item">
            <span class="icon">🕐</span>
            <span>${SITE_CONFIG.businessHours}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} ${SITE_CONFIG.name}. All rights reserved.</p>
      </div>
    </div>
  `;
}

// ---- Enquiry Modal ----
function renderEnquiryModal() {
  const existing = document.getElementById('enquiry-modal-overlay');
  if (existing) return;

  const courseOptions = COURSES.map(c => 
    `<option value="${c.name}">${c.name}</option>`
  ).join('');

  const modal = document.createElement('div');
  modal.id = 'enquiry-modal-overlay';
  modal.className = 'modal-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'modal-title');
  modal.innerHTML = `
    <div class="modal" id="enquiry-modal">
      <button class="modal-close" id="modal-close-btn" aria-label="Close modal">&times;</button>
      <h2 id="modal-title">Apply Now</h2>
      <p class="modal-subtitle">Fill in your details and our team will get back to you shortly.</p>
      <form id="enquiry-form" novalidate>
        <div class="form-group" id="fg-name">
          <label class="form-label" for="enquiry-name">Full Name *</label>
          <input type="text" class="form-input" id="enquiry-name" name="name" placeholder="Enter your full name" required>
          <div class="form-error" id="err-name">Please enter your full name</div>
        </div>
        <div class="form-group" id="fg-phone">
          <label class="form-label" for="enquiry-phone">Phone Number *</label>
          <input type="tel" class="form-input" id="enquiry-phone" name="phone" placeholder="Enter 10-digit phone number" required>
          <div class="form-error" id="err-phone">Please enter a valid 10-digit phone number</div>
        </div>
        <div class="form-group" id="fg-email">
          <label class="form-label" for="enquiry-email">Email Address *</label>
          <input type="email" class="form-input" id="enquiry-email" name="email" placeholder="Enter your email address" required>
          <div class="form-error" id="err-email">Please enter a valid email address</div>
        </div>
        <div class="form-group" id="fg-course">
          <label class="form-label" for="enquiry-course">Select Course *</label>
          <select class="form-select" id="enquiry-course" name="course" required>
            <option value="">Choose a course</option>
            ${courseOptions}
          </select>
          <div class="form-error" id="err-course">Please select a course</div>
        </div>
        <div class="form-group" id="fg-message">
          <label class="form-label" for="enquiry-message">Message (Optional)</label>
          <textarea class="form-textarea" id="enquiry-message" name="message" placeholder="Any specific questions or requirements?" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full btn-lg">Apply Now</button>
      </form>
      <div class="form-success" id="form-success">
        <div class="form-success-icon">✓</div>
        <h3>Application Submitted!</h3>
        <p>Thank you for your interest. Our admissions team will contact you within 24 hours.</p>
        <button class="btn btn-secondary mt-4" onclick="closeEnquiryModal()">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

// ---- Course Card Builder ----
function buildCourseCard(course) {
  const href = course.slug + '.html';
  return `
    <article class="course-card animate-on-scroll">
      <a href="${href}" class="course-card-image" aria-label="View ${course.name} course details">
        <img src="${ROOT}${course.image}" alt="${course.altText}" loading="lazy" width="640" height="360">
      </a>
      <div class="course-card-body">
        <h3 class="course-card-title"><a href="${href}">${course.name}</a></h3>
        <p class="course-card-desc">${course.shortDescription}</p>
        <div class="course-card-meta">
          <span><span class="icon">⏱️</span> ${course.duration}</span>
          <span><span class="icon">📜</span> Certificate</span>
        </div>
        <div class="course-card-footer">
          <span class="course-price">${course.price}</span>
          <button class="btn btn-primary btn-sm" onclick="openEnquiryModal('${course.name}')">Apply Now</button>
        </div>
      </div>
    </article>
  `;
}

// ---- Helper: Stars ----
function renderStars(count) {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

// ---- Modal Controls ----
function openEnquiryModal(courseName) {
  const overlay = document.getElementById('enquiry-modal-overlay');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  if (courseName) {
    const select = document.getElementById('enquiry-course');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === courseName) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
  
  const form = document.getElementById('enquiry-form');
  const success = document.getElementById('form-success');
  if (form) form.style.display = 'block';
  if (success) success.classList.remove('show');
  
  setTimeout(() => {
    const firstInput = document.getElementById('enquiry-name');
    if (firstInput) firstInput.focus();
  }, 100);
}

function closeEnquiryModal() {
  const overlay = document.getElementById('enquiry-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.reset();
    form.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('error'));
  }
}

// ---- Course Detail Page Renderer & Dynamic Schema Injector ----
function renderCoursePage(slug) {
  const course = COURSES.find(c => c.slug === slug);
  if (!course) return;

  const main = document.getElementById('course-page-content');
  if (!main) return;

  // 1. Inject Course Schema.org JSON-LD
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domain + "/"
    },
    "educationalCredentialAwarded": course.certification,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite and Online",
      "location": "Rama Skill Academy Durgapur Centre"
    }
  };
  injectSchemaJSONLD(courseSchema);

  // 2. Inject FAQPage Schema.org JSON-LD if FAQs exist
  if (course.faqs && course.faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": course.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    injectSchemaJSONLD(faqSchema);
  }

  // 3. Inject BreadcrumbList Schema.org JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.domain + "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": SITE_CONFIG.domain + "/courses/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": course.name,
        "item": course.canonicalUrl
      }
    ]
  };
  injectSchemaJSONLD(breadcrumbSchema);

  // Build curriculum HTML
  const curriculumHTML = course.curriculum.map((item, i) => `
    <div class="curriculum-item">
      <span class="num">${i + 1}</span>
      <span>${item}</span>
    </div>
  `).join('');

  // Build features HTML
  const featuresHTML = course.features.map(f => `
    <div class="cert-feature">
      <div class="cert-feature-icon">✓</div>
      <p>${f}</p>
    </div>
  `).join('');

  // Build career HTML
  const careerHTML = course.careerOpportunities.map(c => `
    <div class="career-item">
      <span>💼</span> ${c}
    </div>
  `).join('');

  // Build FAQ HTML
  const faqHTML = course.faqs.map(faq => `
    <div class="faq-item">
      <button class="faq-question">
        <span>${faq.question}</span>
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${faq.answer}</div>
      </div>
    </div>
  `).join('');

  // Build related courses HTML
  const relatedHTML = course.relatedCourses
    .map(s => COURSES.find(c => c.slug === s))
    .filter(Boolean)
    .map(c => buildCourseCard(c))
    .join('');

  main.innerHTML = `
    <!-- Course Detail Hero -->
    <section class="course-detail-hero">
      <div class="hero-bg-gradient"></div>
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="">Home</a>
          <span class="separator">›</span>
          <a href="courses.html">Courses</a>
          <span class="separator">›</span>
          <span class="current">${course.name}</span>
        </nav>
        <div class="course-detail-grid">
          <div class="course-detail-info">
            <h1>${course.name}</h1>
            <p style="color: var(--muted-foreground); font-size: 1.125rem; line-height: 1.7;">${course.description}</p>
            <div class="course-detail-meta">
              <span class="course-meta-badge">⏱️ Duration: ${course.duration}</span>
              <span class="course-meta-badge">💰 Fee: ${course.price}</span>
              <span class="course-meta-badge">📜 Certificate Included</span>
            </div>
            <div class="flex gap-3 flex-wrap">
              <button class="btn btn-primary btn-lg" onclick="openEnquiryModal('${course.name}')">Apply Now</button>
              <a href="contact.html" class="btn btn-secondary btn-lg">Book Free Demo</a>
            </div>
          </div>
          <div class="course-detail-image animate-on-scroll">
            <img src="${ROOT}${course.image}" alt="${course.altText}" width="640" height="360" loading="eager">
          </div>
        </div>
      </div>
    </section>

    <!-- Course Content -->
    <section class="course-section">
      <div class="container">
        <div class="course-section-grid">
          <div>
            <!-- Key Features -->
            <div class="mb-8 animate-on-scroll">
              <h2 class="section-title">Key Features</h2>
              <div class="cert-features">${featuresHTML}</div>
            </div>

            <!-- Curriculum -->
            <div class="mb-8 animate-on-scroll">
              <h2 class="section-title">Curriculum</h2>
              <p style="color: var(--muted-foreground); margin-bottom: 1.5rem;">Our comprehensive curriculum is designed to give you industry-ready skills.</p>
              <div class="curriculum-list">${curriculumHTML}</div>
            </div>

            <!-- Career Opportunities -->
            <div class="mb-8 animate-on-scroll">
              <h2 class="section-title">Career Opportunities</h2>
              <p style="color: var(--muted-foreground); margin-bottom: 1.5rem;">After completing this course, you can pursue various rewarding career paths:</p>
              <div class="career-grid">${careerHTML}</div>
            </div>

            <!-- FAQs -->
            <div class="animate-on-scroll">
              <h2 class="section-title">Frequently Asked Questions</h2>
              <div class="faq-list">${faqHTML}</div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="course-sidebar">
            <div class="course-sidebar-card">
              <h3>Course Details</h3>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border);">
                  <span style="color: var(--muted-foreground);">Duration</span>
                  <span style="font-weight: 600;">${course.duration}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border);">
                  <span style="color: var(--muted-foreground);">Fee</span>
                  <span style="font-weight: 600; color: var(--secondary);">${course.price}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border);">
                  <span style="color: var(--muted-foreground);">Certificate</span>
                  <span style="font-weight: 600;">✓ Yes</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border);">
                  <span style="color: var(--muted-foreground);">Placement</span>
                  <span style="font-weight: 600;">✓ Assistance</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border);">
                  <span style="color: var(--muted-foreground);">Mode</span>
                  <span style="font-weight: 600;">Online & Offline</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--muted-foreground);">Eligibility</span>
                  <span style="font-weight: 600;">${course.eligibility}</span>
                </div>
              </div>
              <button class="btn btn-primary w-full mt-6" onclick="openEnquiryModal('${course.name}')">Apply Now</button>
              <a href="tel:9593492055" class="btn btn-secondary w-full mt-2" style="margin-top: 0.75rem;">📞 Call Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Courses -->
    <section class="related-courses">
      <div class="container">
        <div class="text-center mb-8">
          <span class="section-badge">Related Courses</span>
          <h2 class="section-title">You May Also Like</h2>
        </div>
        <div class="course-grid">${relatedHTML}</div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section section">
      <div class="container cta-content">
        <h2>Ready to Start Your Journey?</h2>
        <p>Take the first step towards a rewarding career. Enroll in our ${course.name} course today.</p>
        <button class="btn btn-accent btn-lg" onclick="openEnquiryModal('${course.name}')">Enroll Now</button>
      </div>
    </section>
  `;

  initScrollAnimations();
}

// Automatically inject global schemas on DOM ready
document.addEventListener('DOMContentLoaded', injectGlobalSchemas);

window.renderCoursePage = renderCoursePage;
window.openEnquiryModal = openEnquiryModal;
window.closeEnquiryModal = closeEnquiryModal;


// ============================================
// RAMA SKILL ACADEMY — Main Application Logic
// Handles: nav, scroll, animations, forms, counters
// ============================================

// ---- Initialize Page ----
function initPage() {
  renderHeader();
  renderMobileMenu();
  renderFooter();
  renderEnquiryModal();
  initHamburger();
  initScrollHeader();
  initScrollAnimations();
  initModalHandlers();
  initFormValidation();
  initFAQs();
}

// ---- Hamburger Menu ----
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  if (!btn || !menu || !overlay) return;

  function toggleMenu() {
    const isOpen = menu.classList.contains('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    btn.classList.toggle('active');
    btn.setAttribute('aria-expanded', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Close on nav link click
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
      closeEnquiryModal();
      closeLightbox();
    }
  });
}

// ---- Sticky Header ----
function initScrollHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ---- Counter Animation ----
function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.getAttribute('data-counter');
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = target.includes('.');
        const numTarget = parseFloat(target);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out quad
          const eased = 1 - (1 - progress) * (1 - progress);
          const current = isDecimal 
            ? (numTarget * eased).toFixed(1) 
            : Math.floor(numTarget * eased);
          el.textContent = current + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ---- Modal Handlers ----
function initModalHandlers() {
  // Close modal button
  document.addEventListener('click', (e) => {
    if (e.target.id === 'modal-close-btn' || e.target.id === 'enquiry-modal-overlay') {
      closeEnquiryModal();
    }
    // Prevent close when clicking inside modal
    if (e.target.id === 'enquiry-modal-overlay') {
      closeEnquiryModal();
    }
  });

  // Close on overlay click (but not modal body)
  const overlay = document.getElementById('enquiry-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeEnquiryModal();
      }
    });
  }
}

// ---- Form Validation ----
function initFormValidation() {
  // Handle all forms with validation
  document.addEventListener('submit', function(e) {
    const form = e.target;
    if (!form.hasAttribute('novalidate')) return;
    
    e.preventDefault();
    
    let isValid = true;
    
    // Name validation
    const nameInput = form.querySelector('[name="name"]');
    if (nameInput) {
      const nameGroup = nameInput.closest('.form-group');
      if (!nameInput.value.trim()) {
        nameGroup.classList.add('error');
        isValid = false;
      } else {
        nameGroup.classList.remove('error');
      }
    }

    // Phone validation (10-digit Indian format)
    const phoneInput = form.querySelector('[name="phone"]');
    if (phoneInput) {
      const phoneGroup = phoneInput.closest('.form-group');
      const phoneValue = phoneInput.value.replace(/\D/g, '');
      if (!phoneValue || phoneValue.length < 10) {
        phoneGroup.classList.add('error');
        isValid = false;
      } else {
        phoneGroup.classList.remove('error');
      }
    }

    // Email validation
    const emailInput = form.querySelector('[name="email"]');
    if (emailInput) {
      const emailGroup = emailInput.closest('.form-group');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
        emailGroup.classList.add('error');
        isValid = false;
      } else {
        emailGroup.classList.remove('error');
      }
    }

    // Course select validation
    const courseSelect = form.querySelector('[name="course"]');
    if (courseSelect) {
      const courseGroup = courseSelect.closest('.form-group');
      if (!courseSelect.value) {
        courseGroup.classList.add('error');
        isValid = false;
      } else {
        courseGroup.classList.remove('error');
      }
    }

    if (isValid) {
      // Show success state
      form.style.display = 'none';
      const success = form.parentElement.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
      }
      
      // TODO: Connect to backend (WhatsApp, Google Sheets, Email)
      // Example WhatsApp integration:
      // const msg = `Name: ${nameInput.value}%0APhone: ${phoneInput.value}%0AEmail: ${emailInput.value}%0ACourse: ${courseSelect.value}`;
      // window.open(`https://wa.me/91${SITE_CONFIG.phone}?text=${msg}`, '_blank');
    }
  });

  // Live validation on input
  document.addEventListener('input', function(e) {
    const input = e.target;
    const group = input.closest('.form-group');
    if (group && group.classList.contains('error')) {
      group.classList.remove('error');
    }
  });
}

// ---- FAQ Accordion ----
function initFAQs() {
  document.addEventListener('click', (e) => {
    const question = e.target.closest('.faq-question');
    if (!question) return;
    
    const item = question.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');
    
    // Close all FAQs in the same list
    const faqList = item.closest('.faq-list');
    if (faqList) {
      faqList.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = '0';
        }
      });
    }
    
    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = '0';
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}

// ---- Lightbox ----
function openLightbox(src, alt) {
  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
      <img src="" alt="" id="lightbox-img">
    `;
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });
    document.body.appendChild(lightbox);
  }
  
  const img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = alt || '';
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// ---- Init on DOM Ready ----
document.addEventListener('DOMContentLoaded', initPage);


