# Portfolio Website

A modern, beautiful portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Fast performance with static site generation
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first responsive design
- ♿ Accessible (WCAG 2.1 AA compliant)
- 🔍 SEO optimized
- 📝 Easy content updates via JSON/Markdown files

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Create a `.env.local` file (optional, for local environment variables):
```bash
# Copy the example file
cp .env.local.example .env.local

# Or create it manually and add:
# NEXT_PUBLIC_SHOW_MARQUEE=false  # Set to "false" to hide marquee
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note:** If you change environment variables in `.env.local`, you need to restart the development server for changes to take effect.

## Project Structure

```
portfolio-website/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── sections/       # Page sections
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
├── content/            # Content files
│   ├── projects.json   # Project data
│   ├── experience.json # Experience data
│   ├── skills.json     # Skills data
│   └── about.md       # About content
├── lib/                # Utility functions
├── types/              # TypeScript types
└── public/             # Static assets
```

## Updating Content

### Projects

Edit `content/projects.json` to add or update projects:

```json
{
  "id": "project-id",
  "title": "Project Name",
  "description": "Brief description",
  "technologies": ["React", "TypeScript"],
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/...",
  "featured": true,
  "date": "2024-01-15"
}
```

### Experience

Edit `content/experience.json` to update work experience.

### Skills

Edit `content/skills.json` to update skills and technologies.

### About

Edit `content/about.md` to update the about section.

### Site Configuration

Edit `lib/constants.ts` to update:
- Site name and description
- Social media links
- Navigation items

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static site will be generated in the `out/` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The site is configured for static export, so it can be deployed to:
- Netlify
- GitHub Pages
- Any static hosting service

## Environment Variables

### Marquee Visibility

Control the bottom marquee visibility with an environment variable:

- `NEXT_PUBLIC_SHOW_MARQUEE` - Set to `"false"` to hide the bottom marquee. Defaults to `true` if not set.

Example:
```bash
# Hide the marquee
NEXT_PUBLIC_SHOW_MARQUEE=false

# Show the marquee (default behavior)
NEXT_PUBLIC_SHOW_MARQUEE=true
# or simply don't set the variable
```

For deployment platforms (Cloudflare Pages, Vercel, etc.), add this as an environment variable in your project settings.

## Customization

### Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme.

### Fonts

Change the font in `app/layout.tsx` by importing a different Google Font.

### Animations

Modify animation settings in `tailwind.config.ts` or component files.

## License

MIT

