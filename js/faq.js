/* =========================================================================
   FAQ ACCORDION CONTROLLER (faq.js)
   MF1065.1115.10.15 Industrial Filter Website
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initFaq();
});

function initFaq() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const questionButton = item.querySelector(".faq-question");
    const answerContainer = item.querySelector(".faq-answer");
    
    questionButton.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
        }
      });
      
      // Toggle active state
      if (isActive) {
        item.classList.remove("active");
        answerContainer.style.maxHeight = null;
      } else {
        item.classList.add("active");
        // Dynamically compute natural height
        answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
      }
    });
  });
}
