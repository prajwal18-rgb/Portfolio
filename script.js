(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Page load fade-in
  window.addEventListener("load", () => document.body.classList.add("loaded"));
  // Fallback in case 'load' already fired
  if (document.readyState === "complete") document.body.classList.add("loaded");

  /* ---------------- Custom cursor ---------------- */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = window.innerWidth / 2,
      mouseY = window.innerHeight / 2;
    let ringX = mouseX,
      ringY = mouseY;
    let started = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
      if (!started) {
        started = true;
        document.body.classList.add("cursor-ready");
      }
    });

    function followLoop() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      requestAnimationFrame(followLoop);
    }
    followLoop();

    const hoverSelector = "a, button, .btn, .project-card, .pill, input, textarea, .nav-toggle";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverSelector)) document.body.classList.add("cursor-hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverSelector)) document.body.classList.remove("cursor-hover");
    });

    document.addEventListener("mouseleave", () => {
      dot.style.opacity = 0;
      ring.style.opacity = 0;
    });
    document.addEventListener("mouseenter", () => {
      if (started) {
        dot.style.opacity = "";
        ring.style.opacity = "";
      }
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  const revealSelector =
    ".section-head, .project-card, .t-item, .skill-group, .resume-block, .proj-hero > .wrap > *, .proj-section h2, .proj-section > .wrap > p, .shot-placeholder, .timeline, .skills-band .section-head";
  const revealEls = document.querySelectorAll(revealSelector);

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in-view"));
  } else {
    revealEls.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 4) * 70 + "ms";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------------- Count-up numbers ---------------- */
  const numEls = document.querySelectorAll(".stat .num");
  function animateCount(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const end = parseFloat(match[1]);
    const suffix = match[2] || "";
    const decimals = (match[1].split(".")[1] || "").length;
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = end * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = raw;
    }
    requestAnimationFrame(tick);
  }
  if (!reduceMotion && "IntersectionObserver" in window && numEls.length) {
    const numIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            numIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    numEls.forEach((el) => numIo.observe(el));
  }

  /* ---------------- Magnetic buttons ---------------- */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }
})();
