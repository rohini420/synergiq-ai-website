# SynergIQ AI Website (Production-ready MVP)

## Folder Structure
- `index.html` - Home
- `about.html` - About
- `services.html` - Products and Services
- `blog.html` - Blog
- `contact.html` - Contact
- `styles.css` - Shared styling
- `script.js` - Small client script (footer year)

## Deploy on Namecheap Hosting
1. Log in to Namecheap cPanel.
2. Open **File Manager** and go to `public_html/`.
3. Upload all project files from this folder.
4. Ensure `index.html` is in `public_html/` root.
5. Visit your domain to verify pages and navigation.

### Optional (FTP)
1. In cPanel, create/get FTP credentials.
2. Use FileZilla and connect to your hosting server.
3. Upload all files into `public_html/`.

## Contact Form Setup (Formspree)
1. Create a form at https://formspree.io.
2. Copy your endpoint ID (example: `https://formspree.io/f/abcxyzpq`).
3. Open `contact.html` and replace `your-form-id` in the form `action` URL.
4. Re-upload `contact.html`.

## How to Update Content Later
1. Edit text in the relevant `.html` file.
2. Keep page titles and meta descriptions updated in each `<head>` section for SEO.
3. Add blog cards in `blog.html` by duplicating an `<article class="card">` block.
4. Re-upload changed files to Namecheap `public_html/`.

## Competitive Research Summary Applied
Design patterns were adapted from enterprise consulting leaders (Accenture, Deloitte Digital, Cognizant, TCS, Capgemini) and local US IT firms:
- Clear hero message + dual CTA
- Services organized into categories
- Process-driven trust section
- Clean navigation and restrained visual style
- Strong contact CTA and business address in footer
