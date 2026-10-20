# Personal Portfolio (BSIT)

Multi-page static portfolio: HTML, CSS, and JavaScript only. No build step or server code.

## Folder structure
```
portfolio/
  index.html  about.html  skills.html  projects.html  contact.html
  css/style.css      js/script.js
  images/profile.jpg, project-1.jpg ... project-6.jpg
  README.md
```

## Run locally
Double-click `index.html`, or in VS Code use the Live Server extension.

## Make it yours
1. Search all files for `[Your Name]` and replace it.
2. Replace `images/profile.jpg` with your photo (keep the same filename, or update the `<img>` tags).
3. Replace `images/project-1.jpg` to `project-6.jpg` with screenshots of your work.
4. **about.html**: fill in the bracketed placeholders (school, year level, hobbies, goals). Only write facts that are true.
5. **skills.html**: change the percentages (`style="width:70%"` and the label) to your honest level.
6. **projects.html**: each card has a comment above it. Set the title, description, category, and `href` to your real activity file/page (e.g. `activities/prelim/index.html`), then delete `data-placeholder`. **Delete the card of any activity you were absent for.**
7. **contact.html**: replace the email, phone, and profile links. The form is a demo and does not send messages; use Formspree or Netlify Forms for real delivery.

## Deploy
**GitHub Pages:** create a repository, upload everything inside `portfolio/` (so `index.html` is at the root), then Settings > Pages > Deploy from branch `main` / root.
**Netlify:** drag the `portfolio` folder onto app.netlify.com/drop.
Submit the resulting link to your teacher (deadline: Oct 18-20, 2026, no late submission).

## Checks to run before submitting
All nav links on all 5 pages, theme toggle, mobile menu (narrow your browser), project filter, form validation, and no red errors in the browser console (F12).
