# NOVA Wushu Academy Website

A modern, responsive website for NOVA Wushu Academy - a premier martial arts training center in Northern Virginia.

## 🎯 Features

- **Modern Design**: Clean, professional design with purple and white color scheme
- **Responsive**: Fully mobile-optimized for all devices
- **SEO Optimized**: Built with Next.js and optimized for search engines
- **Fast Performance**: Static export for optimal loading speeds
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Animations**: Smooth Framer Motion animations throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (static export)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── coaches/           # Coaches page
│   ├── contact/           # Contact page
│   ├── hall-of-fame/      # Hall of Fame page
│   ├── schedule/          # Schedule page
│   ├── trial-class/       # Trial Class page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── CoachCard.tsx      # Coach profile cards
│   ├── FAQ.tsx            # FAQ accordion
│   ├── Footer.tsx         # Site footer
│   ├── GalleryStats.tsx   # Statistics section
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Site navigation
│   ├── AboutPreview.tsx   # About preview
│   └── SchedulePreview.tsx # Schedule preview
├── data/                  # JSON data files
│   ├── coaches.json       # Coach information
│   ├── hall-of-fame.json  # Achievements data
│   └── schedule.json      # Class schedules
└── globals.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nova-wushu-academy.git
cd nova-wushu-academy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

### Static Export (GitHub Pages)

1. Build the static site:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory.

3. Deploy the `out/` directory to GitHub Pages.

### GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as the source
4. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🎨 Customization

### Colors

The website uses a purple and white color scheme defined in `tailwind.config.js`:

- Primary: #882e7e (Deep Purple)
- Primary Light: #6B2C91
- Primary Dark: #3A0066
- Secondary: #FFFFFF (White)
- Accent: #F8F9FA (Light Gray)

### Content

- **Coaches**: Update `src/data/coaches.json`
- **Schedule**: Update `src/data/schedule.json`
- **Hall of Fame**: Update `src/data/hall-of-fame.json`

### Images

Place images in the `public/images/` directory:
- `public/images/coaches/` - Coach photos
- `public/images/achievements/` - Achievement photos
- `public/images/og-image.jpg` - Open Graph image

## 📱 Pages

1. **Home** (`/`) - Hero, about preview, schedule preview, gallery, FAQs
2. **About** (`/about`) - Full academy information and philosophy
3. **Coaches** (`/coaches`) - Coach profiles and credentials
4. **Schedule** (`/schedule`) - Class schedules and trial signup
5. **Hall of Fame** (`/hall-of-fame`) - Student achievements and competitions
6. **Contact** (`/contact`) - Contact form and information

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Generate static export

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: contact@novawushuacademy.com
- Phone: (703) 953-3115
