// ESP32-S3 Wireless Security Lab — script.js
// No backend, no network calls, no data collection. Pure UI behavior.

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav.primary");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });
  }

  // Current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active nav link highlighting on scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('nav.primary a[href^="#"]');

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.style.color = link.getAttribute("href") === `#${id}` ? "var(--signal)" : "";
            });
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }

  // Local-only captive portal concept demo (static illustration, no network
  // activity, no form submission, no credential collection of any kind).
  const demoForm = document.getElementById("portal-demo-form");
  const demoOutput = document.getElementById("portal-demo-output");
  if (demoForm && demoOutput) {
    demoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      demoOutput.textContent =
        "This is a static layout preview only. It does not connect to Wi-Fi, " +
        "does not submit data anywhere, and never stores input. See " +
        "docs/06-captive-portal-lab.md for how a real lab demonstration is run.";
      demoOutput.hidden = false;
    });
  }
});
