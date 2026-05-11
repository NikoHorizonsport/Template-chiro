# Objective
Add an illustrative stock photo to each of the 11 pathology detail pages, showing chiropractic interventions relevant to each condition. Reuse the 2 existing real photos of Louisa where they fit best, and fetch stock images for the rest. Integrate each image into the PathologieDetail page layout with animation.

# Tasks

### T001: Fetch stock images for pathology pages
- **Blocked By**: []
- **Details**:
  - Fetch professional stock photos for each pathology theme (chiropractor treating relevant body area)
  - Reuse existing photos (treatmentImage1 for shoulder/consultation, treatmentImage2 for lower back manipulation) on matching pathologies
  - Fetch stock images for the remaining pathologies that don't match existing photos
  - Save images to attached_assets/ with descriptive names
  - Acceptance: All 11 pathologies have an associated image

### T002: Integrate images into PathologieDetail page
- **Blocked By**: [T001]
- **Details**:
  - Import all images in PathologieDetail.tsx using @assets/ alias
  - Add an `image` and `imageAlt` field to each pathology data entry
  - Insert an image section between the hero header and the content text, with:
    - Rounded corners, shadow, and framer-motion fade-in animation
    - Responsive sizing (full width on mobile, max-w-3xl centered on desktop)
    - Descriptive alt text in French for each image
  - Files: `client/src/pages/PathologieDetail.tsx`
  - Acceptance: Each pathology page shows a relevant image with smooth animation
