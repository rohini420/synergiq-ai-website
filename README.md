# SynergIQ AI Website MVP

Static MVP optimized for Namecheap shared hosting.

## Pages
Home, Local, FolsomFinds, Labs, Portfolio, Hire Talent, About, Contact.

## Local Setup
Open `index.html` in browser or serve locally:
- `python -m http.server 8080`

## Namecheap Deployment
1. Zip project files.
2. Upload all files/folders to `public_html`.
3. Ensure `index.html` is in `public_html` root.
4. Update `sitemap.xml` and `robots.txt` domain URLs.
5. If using Formspree, replace `your-form-id` in forms.

## Form setup
Uses Formspree endpoints for MVP compatibility with shared hosting.
Fallback: replace form `action` with `mailto:you@domain.com` for minimal backup.

## Data Files
- `data/businesses.json`
- `data/projects.json`
- `data/portfolio.json`

## Future Roadmap
- Supabase DB + auth
- Business claim workflow
- Student login + portfolio creation
- Peer review flows
- Recruiter search and shortlist
- Payment integration
- AI-generated offers and review automation

## Logo
Current implementation uses text branding in nav. Add final logo asset as `assets/synergiq-logo.png` and reference in header/hero when ready.
