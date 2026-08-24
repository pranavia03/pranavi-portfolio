# Portfolio Website PRD

## Original problem statement
Build a website that will highlight my work experiences and portfolio.

## Core requirements (static)
- Premium, contemporary, editorial-style personal portfolio for Pranavi Agarwal.
- Warm off-white/cream background, near-black text, deep cherry/oxblood accent. Editorial serif + clean sans-serif. No SaaS look, no gradients, no glassmorphism, no em dashes.
- Sections: Home, Selected Work (Akirah Label, Vrijesh Overseas, Visual Stories), Photography, Writing (Her Campus, Webbed Head, Substack), About, Résumé.
- Show, don't tell. Short, natural copy. High editability via reusable data components.

## User personas
- Pranavi Agarwal: psychology student (UMass Amherst) working across marketing, social media, brand marketing, photography, and visual content.
- Visitors: recruiters, brands, collaborators browsing work, photography, and writing.

## Architecture decisions
- React portfolio with route-based pages for work, case studies, photography, writing, About, and résumé.
- Editorial visual system: Playfair Display, Plus Jakarta Sans, DM Mono; cream, ink, deep cherry palette.
- All content centralized in `/app/frontend/src/portfolioData.js` for easy swapping of placeholders with real assets.
- Existing FastAPI/MongoDB starter retained (healthcheck at /api/status); no product data API needed.

## Implemented
- 2026-08: Editorial header with responsive mobile nav; hero; selected work index; case-study routes; photography masonry with lightbox; writing archive; About timeline/capabilities; résumé page linking uploaded PDF.
- 2026-08: Removed Aari Label; purged em dashes; route fallbacks for deprecated URLs; 6 regression test iterations passed.
- 2026-08-24: Renamed "Pranavi.mov" project to "Visual stories" (slug /work/visual-stories); removed "Marketing · Social" tags from Vrijesh Overseas (now "Photography · Content"); added Substack entry to Writing; Photography page renamed Experiments to Process, removed "sketches"/"visual studies" copy, added space for two Instagram handles (second is placeholder).
- 2026-08-24: Swapped résumé link to updated Resume_Pranavi.pdf; Substack entry renamed to "Visual stories" and marked Ongoing; removed all marketing references from Vrijesh Overseas (intro, role, timeline, sections); added per-project `role` field in portfolioData.js used by case-study pages.
- 2026-08-24: Connected the second photography Instagram handle (`@pranavi.mov`); updated Photography Process to include CapCut, edits, and Canva while removing posters; linked the Her Campus author archive, Webbed Head, and Visual stories Substack pages. All Writing links open in a new tab.
- 2026-08-24: Standardized visible casing for Visual Stories, Edits, and related process labels; renamed the Substack entry to "Writing, made personal"; added Reels and Short-form Content throughout Visual Stories and Photography.
- 2026-08-24: Updated Akirah Label to Bangalore with both work periods (Jun 2025 to Aug 2025 and Apr 2026 to August 2026); added both periods to About; replaced the numbered Akirah deliverables with editable Sample Work image and video slots.
- 2026-08-24: Removed Reels and Short-form Content from the Photography intro sentence while retaining them in the visual work labels and Process list.
- 2026-08-24: Finalized Photography wording with Short-form Content in the intro and removed it from the Process paragraph; removed all visible references to culture from Home and About.
- 2026-08-24: Lightened the global background to near-white cream (`#fffdf7`) across the body and shared paper token.
- 2026-08-24: Connected Pranavi's LinkedIn profile and corrected the footer Instagram label/link to `@pranavi.agarwal`.

## Prioritized backlog
- P0: Swap in real profile and portfolio images once the user uploads them.
- P1: Replace Akirah Sample Work and other case-study placeholders with real images, reels, videos, copy, and outcomes.
- P2: Add optional direct links to individual featured articles when selected.

## Next tasks
- Ask the user to upload their profile and portfolio images.
- Replace placeholders across hero, About portrait, masonry, and case studies with supplied assets.
