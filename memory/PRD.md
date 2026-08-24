# Portfolio Website PRD

## Original problem statement
Build a website that will highlight my work experiences and portfolio.

## Architecture decisions
- React single-page portfolio with responsive anchor navigation.
- Editorial visual system based on Playfair Display, Plus Jakarta Sans, and DM Mono.
- Static, editable content arrays for experience and projects, now populated from Pranavi Agarwal’s supplied resume.
- Existing FastAPI/MongoDB starter remains available; the portfolio currently needs no product data API.

## Implemented
- Premium editorial header with responsive mobile navigation.
- Hero introduction with profile portrait, Amherst/Bangalore context, and work CTA.
- About/skills section, work experience timeline, selected work grid, and contact hub.
- Resume PDF link, exact Akirah Label and Pranavi Agarwal Instagram links, UMass email link, copy-email action with permission-safe fallback, and back-to-top link.
- Responsive desktop/mobile layouts with image treatments, hover motion, and descriptive test IDs.

## Prioritized backlog
- P0: Replace the current editorial placeholder portrait with Pranavi’s supplied profile photo when available.
- P1: Add a real downloadable resume and project detail pages or modal previews.
- P2: Add a lightweight inquiry form and editable content management flow.

## Next tasks
- Gather the user’s project screenshots and preferred LinkedIn/blog URLs if they want them added.
- Tune project case-study descriptions and outcomes for the user’s target marketing roles.