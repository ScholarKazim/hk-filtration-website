// =========================================================================
// CONFIGURATION FILE - MF1065.1115.10.15 Industrial Filter Website
// =========================================================================
// INSTRUCTIONS:
// 1. Replace recipientEmail with your actual email address.
// =========================================================================

const CONFIG = {
  // --- Contact Email Routing (Displayed dynamically on Contact page) ---
  recipientEmail: "hk.industrial.filtration@gmail.com",

  // --- Company Contact Info ---
  companyName: "HK Filtration 🇭🇰"
};

// Export config if using in Node/modules, or keep globally available in browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
