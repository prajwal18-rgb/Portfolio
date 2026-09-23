YOUR PORTFOLIO WEBSITE — HOW TO EDIT
=====================================

WHAT'S IN THIS FOLDER
- index.html          → the whole website (open this in any browser to preview)
- images/              → placeholder images (profile photo + 4 project thumbnails)
- README.txt           → this file

HOW TO PREVIEW IT
Just double-click index.html and it will open in your browser. No install needed.

HOW TO ADD YOUR OWN TEXT
Open index.html in any text editor (Notepad, TextEdit, VS Code, etc).
Every place you should personalize is marked with a comment like:
    <!-- EDIT: your name -->
Search (Ctrl+F / Cmd+F) for the word EDIT to jump through the file section by
section. Just replace the placeholder text next to each comment — don't touch
anything else unless you want to.

Sections you'll want to fill in, top to bottom:
1. Nav logo / initials
2. Hero: your name, your title/role, a short intro sentence, availability line
3. About: 2–3 paragraphs about you, plus your 3 highlight numbers (years
   experience, projects, clients — or swap these for whatever stats you like)
4. Skills: rename the three groups and swap the pills for your real skills
5. Work: one project-card block per project. There are 4 to start —
   copy a whole block (from <div class="project-card"> to its closing </div>)
   to add more, or delete blocks you don't need
6. Experience: your real work history, most recent job first
7. Contact: your email address and links (LinkedIn, GitHub, etc.)
8. Footer: your name

HOW TO ADD YOUR OWN IMAGES
1. Put your image files inside the images/ folder.
2. In index.html, find the <img src="images/..."> tags and change the
   filename to match your new image, for example:
       <img src="images/profile-placeholder.svg" ...>
   becomes
       <img src="images/my-photo.jpg" ...>
3. Recommended sizes:
   - Profile photo: roughly square or slightly tall, at least 800×900px
   - Project thumbnails: roughly 3:2 landscape, at least 1200×800px
   Any image will work — the design will crop/fit it automatically.

CHANGING COLORS
All colors are defined once, near the top of the <style> section, under
:root { ... }. Change the hex values there and the whole site updates:
    --espresso  → darkest brown (dark sections, main text)
    --cacao     → mid brown (headings, buttons)
    --milk      → soft brown (secondary/body text)
    --caramel   → gold-brown accent (the one highlight color)
    --cream     → warm off-white (main background)
    --white     → pure white (skills section background)

PUTTING IT ONLINE
Once it's ready, you can host it for free on services like GitHub Pages,
Netlify, or Vercel — just upload the whole folder. Or ask me and I can help
you publish it as a live link.

Enjoy — and good luck with the portfolio!
