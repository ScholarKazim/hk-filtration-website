/* =========================================================================
   LIGHTBOX GALLERY CONTROLLER (gallery.js)
   MF1065.1115.10.15 Industrial Filter Website
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initLightbox();
});

function initLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  if (galleryItems.length === 0) return;

  // Create lightbox markup dynamically if it doesn't exist
  let lightbox = document.getElementById("lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox-content lightbox-animate">
        <button class="lightbox-close" id="lightbox-close">&times;</button>
        <img id="lightbox-img" src="" alt="Zoomed view">
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").getAttribute("src");
      const imgAlt = item.querySelector("img").getAttribute("alt");
      
      lightboxImg.setAttribute("src", imgSrc);
      lightboxImg.setAttribute("alt", imgAlt);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // Lock page scroll
    });
  });

  // Close Lightbox functions
  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Unlock page scroll
    lightboxImg.setAttribute("src", "");
  };

  lightboxClose.addEventListener("click", closeLightbox);
  
  // Close when clicking outside of image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}
