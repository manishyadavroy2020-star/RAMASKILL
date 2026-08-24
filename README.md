# Rama Skill Academy

This is the official codebase for the Rama Skill Academy website.

## Project Structure

The project has been configured precisely to match a flattened, 1-click deployable structure with all core HTML and scripts sitting directly at the root, exactly as requested.

```
RamaSkillAcademy/
│
├── index.html                  # Homepage
├── about.html                  # About Us page
├── contact.html                # Contact page
├── courses.html                # Course catalog
├── gallery.html                # Gallery page
├── sap.html                    # SAP Course
├── bfsi.html                   # BFSI Course
├── data-analytics.html         # Data Analytics Course
├── ai-digital-marketing.html   # AI Digital Marketing Course
├── graphic-design.html         # Graphic Design Course
├── certified-ai-tools-specialist.html # AI Tools Specialist Course
├── ai-web-development-hostinger-horizons.html # AI Web Dev Course
│
├── style.css                   # Master Stylesheet
├── script.js                   # Unified Master JavaScript (Data, Components, Main)
│
├── assets/                     # Media & Image Assets
│   ├── images/                 # All images including courses and gallery
│   ├── icons/                  # SVG Icons
│   └── fonts/                  # Local fonts
│
├── robots.txt                  # SEO robots config
├── sitemap.xml                 # SEO sitemap
├── favicon.ico                 # Website favicon
└── README.md                   # This file
```

## How to Deploy

1. Clone or download this repository.
2. Select all files in this directory.
3. Upload directly to your GitHub repository (or Hostinger).
4. The site will work automatically without any build steps!

## Updating Content

- **Courses & Global Data**: All course information, prices, descriptions, and site configurations (like phone and email) are located inside `script.js`. Edit this file to update the site globally.
- **Images**: Add new course images to `assets/images/courses/`. Ensure they are optimized (WebP format recommended).
- **Gallery**: Add your actual event images to `assets/images/gallery/` and update the `GALLERY_IMAGES` array in `script.js`.

---
*Created for Rama Skill Academy.*
