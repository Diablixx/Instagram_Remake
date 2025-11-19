# Instagram Landing Page Remake

A pixel-perfect recreation of the Instagram login page built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on both mobile and desktop devices
- **Dark Theme**: Matches Instagram's dark mode aesthetic
- **Modern Tech Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Optimized Performance**: Fast loading times and smooth interactions
- **Pixel Perfect**: Carefully crafted to match the original Instagram landing page

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd instagram-remake
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to a GitHub repository

2. Import your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. Your app will be live at a Vercel URL (e.g., `your-project.vercel.app`)

### Custom Domain (Optional)

To make your URL similar to Instagram:

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add a custom domain (you'll need to purchase one)
4. Examples: `instagram-clone.yourdomain.com` or similar

### Alternative Deployment Options

- **Netlify**: Similar process to Vercel
- **AWS Amplify**: For AWS infrastructure
- **Railway**: Simple deployment platform
- **DigitalOcean App Platform**: Deploy with DigitalOcean

## Project Structure

```
instagram-remake/
├── app/
│   ├── page.tsx          # Main landing page component
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Project dependencies
└── README.md            # This file
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Billabong Font**: Instagram's signature logo font

## Build for Production

To create a production build:

```bash
npm run build
```

To start the production server locally:

```bash
npm start
```

## Features Breakdown

### Desktop View
- Left side decorative phone mockup with colorful elements
- Login form with Instagram logo
- Facebook login integration
- Footer with links and language selector

### Mobile View
- Responsive layout that hides the decorative elements
- Full-width login form
- Touch-optimized inputs and buttons
- Mobile-friendly footer

## Notes

- This is a UI-only recreation. The login functionality is not connected to any backend.
- Perfect for university projects, portfolio pieces, or learning Next.js
- All styling matches Instagram's current dark theme design

## License

This project is for educational purposes only.
