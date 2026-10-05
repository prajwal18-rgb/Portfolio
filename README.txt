YOUR PORTFOLIO WEBSITE — HOW TO EDIT
=====================================

WHAT'S IN THIS FOLDER
- index.html           → the home page
- style.css            → all site styling (shared by every page)
- resume.html          → a web version of your resume (readable by Google, unlike PDFs)
- resume.pdf           → your resume as a downloadable file
- 404.html             → shown automatically by most hosts when a link is broken
- images/              → profile photo + project thumbnails (placeholders for now)
- projects/            → one page per project (case studies)
    - twitter-sentiment-analyzer.html
    - safecityai-helmet-detection.html
    - dockeys.html
    - happy-tails.html
    - ward-seva.html

HOW TO PREVIEW IT
Double-click index.html to open it in your browser. Since pages now link to
each other (index → projects, projects → resume, etc.), it's best to view
these as a folder rather than moving index.html on its own.

HOW TO EDIT TEXT
Search (Ctrl+F / Cmd+F) for EDIT in index.html to find spots meant for you to
personalize. The project pages and resume.html are plain HTML — open any of
them in a text editor and change the text between tags directly. Headings
are in <h1>/<h2> tags, paragraphs in <p> tags, lists in <li> tags.

STILL TO DO (your to-do list)
1. Replace the 3 certification placeholders in index.html's Certifications
   section once you're ready — look for [Certificate name].
2. Swap the placeholder images in /images for real photos/screenshots:
   - images/profile-placeholder.jpg → your photo
   - images/project-placeholder-1.png through -5.png → real project screenshots
   Keep the same filenames, or update the src="" in index.html / the project
   pages to match new filenames.
3. Ward Seva: once you push it to GitHub, add the real link in index.html
   (search for "GitHub (coming soon)") and in projects/ward-seva.html.
4. Add real screenshots to each project page — look for the dashed
   placeholder boxes under each page's "Screenshots" section.
5. Fill in Ward Seva's screenshots and GitHub link once it's live.
6. Optional: add a blog section once you've got 2-3 posts ready — ask me
   and I'll build the pages in the same style.

CHANGING COLORS
All colors are defined once, near the top of style.css, under :root { ... }.
Change the hex values there and the whole site updates everywhere:
    --espresso  → darkest brown (dark sections, main text)
    --cacao     → mid brown (headings, buttons)
    --milk      → soft brown (secondary/body text)
    --caramel   → gold-brown accent (the one highlight color)
    --cream     → warm off-white (main background)
    --white     → pure white (skills section background)

ADDING A NEW PROJECT PAGE
Copy any file in /projects/ as a starting point, rename it, update the
<title>, headings, and content, then add a new project-card block in
index.html's Work section linking to it.

PUTTING IT ONLINE
Upload this whole folder (keeping the same structure) to GitHub Pages,
Netlify, or Vercel. Vercel and Netlify will automatically use 404.html for
broken links. Ask me if you'd like help setting that up.

Enjoy — and good luck with the portfolio!
