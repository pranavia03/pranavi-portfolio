# Portfolio Website PRD

## Original problem statement
Build a website that will highlight my work experiences and portfolio.

## Core requirements (static)
- Premium, contemporary, editorial-style personal portfolio for Pranavi Agarwal.
- Warm off-white/cream background, near-black text, deep cherry/oxblood accent. Editorial serif + clean sans-serif. No SaaS look, no gradients, no glassmorphism, no em dashes.
- Sections: Home, Selected Work (Akirah Label, Vrijesh Overseas, Visual Stories with integrated gallery), Writing (Her Campus, Webbed Head, Substack), About, Résumé.
- Show, don't tell. Short, natural copy. High editability via reusable data components.

## User personas
- Pranavi Agarwal: psychology student (UMass Amherst) working across marketing, social media, brand marketing, photography, and visual content.
- Visitors: recruiters, brands, collaborators browsing work, photography, and writing.

## Architecture decisions
- React portfolio with route-based pages for work, case studies, Visual Stories gallery, writing, About, and résumé. The legacy `/photography` URL redirects to `/work/visual-stories`.
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
- 2026-08-24: Replaced the Photography gallery's six category buttons with exactly three photo and two video placeholders; removed the Process gallery button while retaining the separate Process text row; added media-specific photo/video modal labels and a balanced mobile layout.
- 2026-08-24: Renamed the Substack Writing entry to "For longer thoughts".
- 2026-08-24: Updated the Home hero tagline beneath Pranavi's name to "Thoughtful work across marketing, branding and visual communication."
- 2026-08-24: Replaced the Home portrait placeholder with the uploaded `IMG_9489.webp`, using a responsive editorial crop and accessible image description.
- 2026-08-24: Replaced the About portrait placeholder with the uploaded `IMG_2385.webp`; updated only the Jun 2025 to Aug 2025 Akirah role to "Marketing and Content Intern" while preserving the Apr 2026 to August 2026 role.
- 2026-08-24: Enlarged both uploaded Home and About portraits while preserving responsive crops; updated the Home "A little context" paragraph with the user's exact final copy about psychology, marketing, visual communication, and audience response.
- 2026-08-24: Completed the Photography gallery with three uploaded images and two playable videos; replaced the first video with `ScreenRecording_10-06-2024 15-12-32_1.mov`; rotated the second video 90 degrees counterclockwise. Both HEVC uploads were converted to optimized H.264 MP4 files for reliable browser playback.
- 2026-08-24: Rearranged the Photography media grid around each video's native aspect ratio, using a portrait frame for Video 01 and a landscape frame for Video 02 to remove black letterboxing on desktop and mobile.
- 2026-08-24: Rebuilt Photography as a tested uniform 4-column by 2-row editorial grid on desktop with a clean single-column mobile layout.
- 2026-08-24: Simplified Vrijesh Overseas media sections to retain only Product Photography, removing Content Creation and Digital Assets slots.
- 2026-08-24: Integrated the complete Photography gallery into the Home project's Visual Stories route (`/work/visual-stories`); removed Photography from desktop and mobile navigation; retained `/photography` as a redirect for old links. Full frontend regression passed in iteration 8.
- 2026-08-24: Added four real Vrijesh Overseas product images: blue bedding as the Home project thumbnail, neutral striped bedding as the full case-study hero, and two portrait detail images under Product Photography. Removed the Vrijesh "View related work" link and replaced placeholder body copy with final product-photography context.
- 2026-08-24: Replaced the Home Visual Stories placeholder with the uploaded lion image and applied a subtle centered zoom for a stronger thumbnail crop.
- 2026-08-24: Removed all typography overlays from the uploaded Akirah linen-shirt photograph while preserving the garment, embroidery, clothespins, clothesline, and sky; added the cleaned image as the Akirah Home thumbnail with a focused crop.
- 2026-08-24: Renamed the Akirah case-study link from "View related work" to "Akirah Instagram" and increased it to 15px on desktop and 14px on mobile for clearer visibility; retained the direct `@akirah.label` destination.

## Prioritized backlog
- P0: Replace remaining Akirah and other case-study placeholders with final assets once uploaded.
- P1: Replace Akirah Sample Work and other case-study placeholders with real images, reels, videos, copy, and outcomes.
- P2: Add optional direct links to individual featured articles when selected.
- P2: Consolidate historical duplicate `.masonry` declarations in `App.css` to reduce future styling regression risk.

## Next tasks
- Ask the user to upload final case-study assets.
- Replace case-study placeholders with supplied assets.
