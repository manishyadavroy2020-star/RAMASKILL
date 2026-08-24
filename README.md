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


## Google Sheets Blog CMS Setup

This project includes a fully automated, serverless CMS that uses Google Sheets as a database and Google Apps Script as the backend API.

### Setup Instructions

**Step 1:** Open the existing Google Sheet provided for the database.
**Step 2:** Click **Extensions → Apps Script** from the top menu.
**Step 3:** Open the `google-apps-script.js` file in this repository, copy all the code, and paste it into the Apps Script editor (replacing the default `myFunction`).
**Step 4:** Look for `ADMIN_SECRET_TOKEN` at the top of the code and change it to a strong password. You will use this token to log in.
**Step 5:** From the toolbar, select the `initializeDatabase` function and click **Run**. (Authorize the script when Google prompts you). 
*This will automatically create all the necessary tabs, headers, categories, and settings in your empty Google Sheet!*
**Step 6:** Click **Deploy → New deployment**.
**Step 7:** Choose **Web app** as the type. Set "Execute as" to **Me**, and "Who has access" to **Anyone**. Click **Deploy**.
**Step 8:** Copy the generated **Web app URL**.
**Step 9:** Open `script.js` and `admin.js` in this repository and replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with the URL you just copied.

### How to Manage the Blog

- **Access the Admin Panel:** Go to `https://ramaskillacademy.com/admin.html` (or locally `admin.html`).
- **Login:** Enter the `ADMIN_SECRET_TOKEN` you set in step 4.
- **Create an Article:** Click **+ New Article**. Fill out the title, content, SEO details, and hit **Publish**.
- **Edit/Delete:** Use the dashboard table to edit or delete any existing articles.
- **Sitemap & SEO:** The public blog automatically hides drafts. Only published articles appear on the blog and in SEO searches. SEO tags are injected dynamically.
- **Categories:** Add or remove categories directly in the Google Sheet (Categories tab) or in future Admin updates.
