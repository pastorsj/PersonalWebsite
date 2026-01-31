# Personal Website

A modern, responsive personal portfolio website built with Gatsby and React. Features a professional timeline-based layout showcasing career history, education, and interests with smooth scroll animations.

**Live Site:** [sampastoriza.com](https://www.sampastoriza.com)

## Features

- **Interactive Timeline** - Vertical timeline with animated nodes that light up as you scroll
- **Data-Driven Content** - All career sections managed via a single JSON file
- **Scroll Animations** - Smooth fade-in effects triggered by scroll position
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Company Branding** - Each section uses authentic company/institution colors
- **Accessibility** - Respects `prefers-reduced-motion` for users who prefer minimal animation
- **Technology Showcase** - Interactive technology icons with tooltips

## Tech Stack

- **Framework:** [Gatsby](https://www.gatsbyjs.com/) v5
- **UI Library:** [React](https://react.dev/) 18
- **Component Library:** [Chakra UI](https://chakra-ui.com/) v3
- **Styling:** CSS Modules, Styled Components
- **Fonts:** Dosis, Roboto Slab (via Fontsource)
- **Icons:** React Icons
- **Deployment:** AWS S3 (via gatsby-plugin-s3)

## Project Structure

```text
src/
├── components/
│   ├── common/
│   │   ├── company-logo.js      # Company logo with link
│   │   ├── publications.js      # Publications list
│   │   └── technology-icon.js   # Tech icon with tooltip
│   ├── footer/
│   │   ├── footer.js            # Site footer
│   │   └── social-media-links.js
│   ├── sections/
│   │   └── interests-section.js # Hobbies/interests grid
│   ├── timeline/
│   │   ├── timeline.js          # Timeline container
│   │   ├── timeline-card.js     # Individual career card
│   │   └── timeline-node.js     # Animated timeline dot
│   ├── home.js                  # Main content area
│   ├── layout.js                # Hero section & navigation
│   └── seo.js                   # SEO meta tags
├── data/
│   └── sections.json            # All career/education data
├── hooks/
│   └── useScrollAnimation.js    # Intersection Observer hook
├── images/                      # Static images & logos
├── pages/
│   └── index.js                 # Entry point
└── styles/
    └── animations.css           # Animation keyframes & utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/pastorsj/PersonalWebsite.git
    cd PersonalWebsite
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run develop
    ```

4. Open [http://localhost:8000](http://localhost:8000) in your browser.

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run develop` | Start development server with hot reload |
| `npm run build`   | Build production-ready static files      |
| `npm run serve`   | Serve production build locally           |
| `npm run clean`   | Clear Gatsby cache and public directory  |
| `npm run deploy`  | Deploy to AWS S3                         |

## Customization

### Adding/Editing Career Sections

All career and education entries are defined in `src/data/sections.json`. Each section has the following structure:

```json
{
  "id": "company-name",
  "type": "job",
  "company": "Company Name",
  "backgroundColor": "#FFFFFF",
  "timelineColor": "#76B900",
  "textColor": "#000000",
  "positions": [
    {
      "title": "Job Title",
      "dates": "Start - End"
    }
  ],
  "description": ["Paragraph 1", "Paragraph 2"],
  "technologies": [
    {
      "name": "Python",
      "url": "https://python.org",
      "image": "python-logo.png",
      "alt": "Python Logo"
    }
  ],
  "companyLogo": {
    "url": "https://company.com",
    "image": "company-logo.png",
    "alt": "Company Logo",
    "maxWidth": "170px",
    "maxHeight": "170px"
  }
}
```

Key Fields:

- `backgroundColor` - Card background color
- `timelineColor` - (Optional) Override color for timeline dot and glow
- `textColor` - Text color for the card
- `background` - (Optional) CSS gradient instead of solid color
- `descriptionHtml` - (Optional) HTML content with links
- `publications` - (Optional) Array of published papers

### Adding Technology Icons

1. Add the logo image to `src/images/`
2. Reference it in the section's `technologies` array

### Modifying Animations

Animation settings are in `src/styles/animations.css`. The site respects `prefers-reduced-motion` for accessibility.

## Deployment

The site is configured to deploy to AWS S3:

```bash
npm run build
npm run deploy
```

Ensure AWS credentials are configured and the S3 bucket settings are defined in `gatsby-config.js`.

## License

This project is private and not licensed for redistribution.

## Author

Sam Pastoriza

- Website: [sampastoriza.com](https://www.sampastoriza.com)
- LinkedIn: [sam-pastoriza](https://www.linkedin.com/in/sam-pastoriza/)
- GitHub: [pastorsj](https://github.com/pastorsj)
