# Portfolio Website PRD

## Original problem statement
Build a website that will highlight my work experiences and portfolio.

## Architecture decisions
- React portfolio with reusable structured data and route-based pages for work, case studies, photography, writing, About, and résumé.
- Editorial visual system based on Playfair Display, Plus Jakarta Sans, and DM Mono with cream, ink, and deep cherry palette.
- All project, experience, writing, capability, social, email, and résumé content is centralized in `portfolioData.js`.
- Existing FastAPI/MongoDB starter remains available; the portfolio currently needs no product data API.

## Implemented
- Premium editorial header with responsive mobile navigation.
- Hero introduction with profile portrait, Amherst/Bangalore context, and work CTA.
- About/skills section, work experience timeline, selected work grid, and contact hub.
- Resume PDF link, exact Akirah Label and Pranavi Agarwal Instagram links, UMass email link, copy-email action with permission-safe fallback, and back-to-top link.
- Route-based project case studies for Akirah Label, Aari Label, Vrijesh Overseas, and Pranavi.mov.
- Photography masonry with clickable, closable placeholder lightbox; writing archive; About timeline/capabilities; résumé page with view/download actions.
- SEO metadata updated to the requested portfolio title and description.
- Responsive desktop/mobile layouts with image treatments, hover motion, and descriptive test IDs.

## Prioritized backlog
- P0: Replace the current editorial placeholder portrait with Pranavi’s supplied profile photo when available.
- P1: Replace case-study placeholders with real campaign images, reels, copy, calendars, screenshots, and outcomes.
- P2: Add a lightweight inquiry form and editable content management flow.

## Next tasks
- Gather the user’s project screenshots, reels, and preferred LinkedIn/blog URLs if they want them added.
- Replace the current portrait placeholder with a supplied profile image.
- Tune project case-study descriptions and outcomes for the user’s target marketing roles.