# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### 3. Customize Your Content

#### Update Personal Information

Edit `lib/constants.ts`:
- Change `name` to your name
- Update `description` with your description
- Add your social media links (GitHub, LinkedIn, Twitter, Email)

#### Update Projects

Edit `content/projects.json`:
- Replace dummy projects with your real projects
- Add project images to `public/images/projects/`
- Update technologies, links, and descriptions

#### Update Experience

Edit `content/experience.json`:
- Replace with your work experience
- Update dates, companies, and achievements
- Add relevant technologies

#### Update Skills

Edit `content/skills.json`:
- Update skill categories
- Add/remove skills as needed

#### Update About Section

Edit `content/about.md`:
- Write your personal story
- Add your background and interests

### 4. Build for Production

```bash
npm run build
```

The static site will be in the `out/` directory.

### 5. Deploy

#### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically!

#### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `out`

## 📝 Next Steps

1. **Add Your Resume**: Place your resume PDF in `public/resume.pdf`
2. **Add Project Images**: Add project screenshots to `public/images/projects/`
3. **Add Profile Photo**: Add your photo to `public/images/` and update the About section
4. **Customize Colors**: Edit CSS variables in `app/globals.css`
5. **Update Meta Tags**: Edit `app/layout.tsx` for better SEO

## 🎨 Customization Tips

- **Colors**: Edit the CSS variables in `app/globals.css`
- **Fonts**: Change the font import in `app/layout.tsx`
- **Animations**: Adjust animation settings in component files
- **Layout**: Modify section components in `components/sections/`

## 📦 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── sections/           # Page sections (Hero, About, etc.)
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   └── ThemeToggle.tsx     # Dark mode toggle
├── content/                # Content files (JSON/Markdown)
│   ├── projects.json       # Your projects
│   ├── experience.json     # Work experience
│   ├── skills.json         # Skills & technologies
│   └── about.md           # About content
├── lib/                    # Utilities
│   ├── constants.ts       # Site configuration
│   └── utils.ts           # Helper functions
└── public/                 # Static assets
    └── images/            # Images (add your images here)
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is taken, use:
```bash
npm run dev -- -p 3001
```

### Build Errors

Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Run type checking:
```bash
npx tsc --noEmit
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

Happy coding! 🎉

