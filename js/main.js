/* =========================================================================
   GLOBAL INTERACTION AND CONTROLLER (main.js)
   MF1065.1115.10.15 Industrial Filter Website
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Lock theme to dark
  document.documentElement.setAttribute("data-theme", "dark");
  initHeader();
  initDynamicContactData();
  initScrollAnimations();
});

// --- Sticky Header and Mobile Nav Controller ---
function initHeader() {
  const header = document.querySelector("header.site-header");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mainNav = document.getElementById("main-nav");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu drawer toggle
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      mobileToggle.classList.toggle("active");
      
      // Animate mobile toggle bars into an 'X'
      const spans = mobileToggle.querySelectorAll("span");
      if (mainNav.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close menu when clicking navigation link on mobile
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        mobileToggle.classList.remove("active");
        const spans = mobileToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      });
    });
  }
}

// --- Dynamic Contact Configurations Injector ---
// Inject configuration details dynamically to UI elements
function initDynamicContactData() {
  if (typeof CONFIG === "undefined") {
    console.warn("CONFIG object not found. Ensure config/config.js is correctly loaded.");
    return;
  }

  // Inject companyName, recipientEmail dynamically
  document.querySelectorAll("[data-config]").forEach(element => {
    const configKey = element.getAttribute("data-config");
    if (CONFIG[configKey]) {
      if (element.tagName === "A") {
        if (configKey === "recipientEmail") {
          element.setAttribute("href", `mailto:${CONFIG[configKey]}`);
        } else if (configKey.startsWith("social")) {
          element.setAttribute("href", CONFIG[configKey]);
        }
        
        // Only update text content if it's a raw link without icons inside
        if (element.children.length === 0) {
          element.textContent = CONFIG[configKey];
        }
      } else {
        element.textContent = CONFIG[configKey];
      }
    }
  });
}

// --- Intersection Observer for Scroll Animations ---
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add("revealed"));
  }
}
