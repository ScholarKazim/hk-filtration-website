# MF1065.1115.10.15 Industrial Hydraulic Filter Website

A premium, modern, responsive website designed for the **MF1065.1115.10.15** industrial hydraulic filter, inspired by leading manufacturers such as Parker, HYDAC, Donaldson, and Bosch Rexroth.

## Features

- **Industrial UI/UX Aesthetic**: Clean white styling with professional blue and gray accents, supporting instant **Dark Mode** and **RTL (Arabic)** language layout mirror.
- **Pure JavaScript & CSS**: Zero frameworks or bulky dependencies (e.g. jQuery, React, Bootstrap, Tailwind). Built for maximum speed and SEO optimization.
- **Client-Side Translation**: Bilingual support (English & Arabic) switching instantly without reloading the page.
- **Intersection Observer Animations**: Smooth scroll-triggered reveal animations.
- **Image Lightbox Gallery**: Dynamic zoom effect on product gallery grid.
- **Configurable Mail System**: Secure server-side PHP contact mailer with form validation, honeypot anti-spam protection, and native socket SMTP client support.

---

## 📁 Directory Structure

```
/industrial-filter-website
├── index.html                  # Home Page
├── product.html                # Product Details Page
├── specifications.html         # Technical Specifications Page
├── applications.html           # Applications / Industries Page
├── downloads.html              # Documentation & CAD Downloads Page
├── about.html                  # About Us Page
├── contact.html                # Contact Page
├── config/
│   ├── config.json             # Reference JSON configuration
│   └── config.js               # Main active Javascript configuration
├── css/
│   ├── main.css                # Reset, variables, typography, layouts, RTL, header/footer
│   ├── components.css          # Form styling, tables, buttons, accordion FAQ, cards, lightbox
│   └── animations.css          # Keyframes, hover classes, observer classes
├── js/
│   ├── i18n.js                 # Bilingual Translation Strings (English & Arabic)
│   ├── main.js                 # Theme toggler, language layout mirrors, dynamic info injector
│   ├── gallery.js              # Lightbox grid click zoom logic
│   ├── faq.js                  # Accordion click logic
│   └── contact.js              # Form validation, honeypot blocker and AJAX fetch submission
├── assets/
│   ├── images/                 # Generated industrial product & hero images
│   │   ├── hero.png
│   │   ├── product.png
│   │   ├── diagram.png
│   │   └── applications.png
│   └── icons/                  # SVGs and UI markers
└── backend/
    └── send-mail.php           # Secure backend PHP form processor (decodes config.js)
```

---

## ⚙️ Configuration Setup

To route contact messages and customize company details, open and edit **`config/config.js`**:

```javascript
const CONFIG = {
  // --- Contact Form Email Routing ---
  recipientEmail: "YOUR_EMAIL_HERE",        // <-- Replace with your email address

  // --- SMTP Settings for Secure Routing ---
  smtpHost: "YOUR_SMTP_HOST_HERE",          // e.g., smtp.gmail.com, mail.yourdomain.com
  smtpPort: 587,                            // e.g., 587 (TLS), 465 (SSL), or 25
  smtpUser: "YOUR_SMTP_USERNAME",           // SMTP server username
  smtpPassword: "YOUR_SMTP_PASSWORD",       // SMTP server password

  // --- Contact Details ---
  companyName: "Industrial Filtration Solutions Ltd.",
  phone: "+1 (555) 123-4567",
  whatsapp: "+1 (555) 987-6543",
  whatsappLink: "https://wa.me/15559876543", 
  officeAddress: "100 Industrial Parkway, Suite 400, Engineering District, TX 75001",
  
  // Google Maps Share link (Embed iframe src)
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=..."
};
```

Both the **Frontend JS** and **Backend PHP Mailer** (`send-mail.php`) will read from this single file automatically. You do **not** need to touch any other code.

---

## 🚀 Deployment

1. **Static Files**: Upload all HTML, CSS, JS, and image assets to your web server.
2. **Mail Server Support**: Make sure your hosting environment supports **PHP 7.0+** to run the secure contact mailer (`backend/send-mail.php`).
3. **SMTP credentials**: If your host blocks standard PHP `mail()`, input your SMTP settings in `config/config.js` and the script will route messages securely over a raw network socket.

---

## 🔍 SEO & Accessibility Validation

- Meets **WCAG 2.1 Contrast ratios** for both Dark and Light modes.
- Contains standard semantic markup (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`).
- Includes structured JSON-LD `Product` schema on relevant product pages to support search engine rich-snippets.
