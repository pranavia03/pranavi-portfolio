# Portfolio Website PRD

## Original problem statement
Build a website that will highlight my work experiences and portfolio.

## Architecture decisions
- React single-page portfolio with responsive anchor navigation.
- Editorial visual system based on Playfair Display, Plus Jakarta Sans, and DM Mono.
- Static, editable content arrays for experience and projects so the supplied resume and assets can replace placeholders easily.
- Existing FastAPI/MongoDB starter remains available; the portfolio currently needs no product data API.

## Implemented
- Premium editorial header with responsive mobile navigation.
- Hero introduction with profile portrait, availability note, and work CTA.
- About/skills section, work experience timeline, selected work grid, and contact hub.
- Email links, LinkedIn link, copy-email action with permission-safe fallback, and back-to-top link.
- Responsive desktop/mobile layouts with image treatments, hover motion, and descriptive test IDs.

## Prioritized backlog
- P0: Replace placeholder bio, experience, project copy, profile photo, and social URLs with supplied content.
- P1: Add a real downloadable resume and project detail pages or modal previews.
- P2: Add a lightweight inquiry form and editable content management flow.

## Next tasks
- Gather the user’s resume, project screenshots, profile image, and social URLs.
- Tune project case-study descriptions and outcomes for the user’s target roles.