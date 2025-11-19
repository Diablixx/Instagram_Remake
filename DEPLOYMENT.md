# Deployment Guide

This guide will help you deploy your Instagram remake to Vercel and configure a custom URL.

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Navigate to your project:
```bash
cd instagram-remake
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be live!

### Option 2: Deploy via GitHub (Recommended)

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Instagram landing page remake"
```

2. **Create a GitHub repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `instagram-remake` (or any name you prefer)
   - Don't initialize with README (we already have one)

3. **Push your code**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/instagram-remake.git
git branch -M main
git push -u origin main
```

4. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your `instagram-remake` repository
   - Configure:
     - Framework Preset: Next.js (auto-detected)
     - Root Directory: `./` (default)
     - Build Command: `npm run build` (default)
     - Output Directory: `.next` (default)
   - Click "Deploy"

5. **Wait for deployment** (usually takes 1-2 minutes)

6. **Your site is live!** You'll get a URL like: `instagram-remake.vercel.app`

## Customizing Your URL

### Option 1: Vercel Subdomain

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Change the subdomain to something like:
   - `instagram-clone.vercel.app`
   - `ig-remake.vercel.app`
   - `instagram-login.vercel.app`

### Option 2: Custom Domain

To get a URL closer to Instagram (requires purchasing a domain):

1. **Purchase a domain**:
   - [Namecheap](https://namecheap.com) - Affordable
   - [Google Domains](https://domains.google)
   - [GoDaddy](https://godaddy.com)

   Example domains you could get:
   - `instagram-remake.com`
   - `ig-clone.com`
   - `insta-login.com`

2. **Add domain to Vercel**:
   - In Vercel dashboard → your project → Settings → Domains
   - Click "Add Domain"
   - Enter your domain name
   - Follow Vercel's DNS configuration instructions

3. **Configure DNS**:
   - Go to your domain registrar
   - Add the DNS records Vercel provides
   - Wait for DNS propagation (can take 24-48 hours)

## Environment Variables (If Needed Later)

If you add backend functionality:

1. In Vercel dashboard → Settings → Environment Variables
2. Add your variables (e.g., `DATABASE_URL`, `API_KEY`)
3. Redeploy your project

## Monitoring & Analytics

Vercel provides built-in analytics:
- Speed Insights
- Web Vitals
- Visitor analytics

Enable them in: Settings → Analytics

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch
- Create preview deployments for pull requests
- Roll back to previous deployments if needed

## Production Checklist

Before sharing your project:
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Check different browsers (Chrome, Firefox, Safari)
- [ ] Verify all links work
- [ ] Test form inputs and buttons
- [ ] Check responsive design breakpoints
- [ ] Review console for any errors

## Troubleshooting

### Build Failed
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Custom Domain Not Working
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Use [DNS Checker](https://dnschecker.org) to verify propagation

### Font Not Loading
- Check that the CDN link in `layout.tsx` is accessible
- Clear browser cache
- Check network tab in browser DevTools

## Cost

- **Vercel Free Tier**: Perfect for this project
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic HTTPS
  - Preview deployments

- **Custom Domain**: $10-15/year (one-time annual cost)

## Next Steps

After deployment, you can:
1. Share the link with your professor/classmates
2. Add to your portfolio
3. Continue adding features (signup page, feed, etc.)
4. Connect to a backend API

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Discord Community](https://vercel.com/discord)
