# Deployment Guide for Personal Portfolio

Your application has been successfully built! The production files are located in:
`/dist/personal-portfolio/browser/`

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Steps:**

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy from your project directory**:
   ```bash
   cd /Users/miananwar/Development/Angular/personal-portfolio
   netlify deploy
   ```

3. **Follow the prompts**:
   - Authorize Netlify CLI (opens browser)
   - Create & configure new site
   - When asked for publish directory, enter: `dist/personal-portfolio/browser`

4. **Deploy to production**:
   ```bash
   netlify deploy --prod
   ```

**Or via Netlify Website:**
1. Go to https://app.netlify.com/
2. Drag and drop the `dist/personal-portfolio/browser` folder
3. Done! Your site is live

**Configuration for continuous deployment:**
- Push your code to GitHub
- Connect repository to Netlify
- Build command: `npm run build`
- Publish directory: `dist/personal-portfolio/browser`

---

### Option 2: Vercel

**Steps:**

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd /Users/miananwar/Development/Angular/personal-portfolio
   vercel
   ```

3. **Follow the prompts and select**:
   - Framework: Angular
   - Output directory: `dist/personal-portfolio/browser`

**Or via Vercel Website:**
1. Go to https://vercel.com/
2. Import your GitHub repository
3. Framework preset: Angular
4. Deploy!

---

### Option 3: GitHub Pages

**Steps:**

1. **Install angular-cli-ghpages**:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. **Build with base href**:
   ```bash
   ng build --base-href=/personal-portfolio/
   ```

3. **Deploy**:
   ```bash
   npx angular-cli-ghpages --dir=dist/personal-portfolio/browser
   ```

**Note:** Your repository must be public for free GitHub Pages hosting.

---

### Option 4: Firebase Hosting

**Steps:**

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```
   - Select your project or create new
   - Public directory: `dist/personal-portfolio/browser`
   - Configure as single-page app: Yes
   - Set up automatic builds: No

4. **Deploy**:
   ```bash
   firebase deploy
   ```

---

### Option 5: AWS S3 + CloudFront

**Steps:**

1. **Create S3 bucket** (via AWS Console)
2. **Enable static website hosting**
3. **Upload files**:
   ```bash
   aws s3 sync dist/personal-portfolio/browser/ s3://your-bucket-name
   ```
4. **Create CloudFront distribution** for HTTPS and CDN

---

## 📝 Quick Deploy Commands

### For Netlify (Fastest):
```bash
# One-time deploy
cd /Users/miananwar/Development/Angular/personal-portfolio
npm install -g netlify-cli
netlify deploy --dir=dist/personal-portfolio/browser --prod
```

### For Vercel:
```bash
# One-time deploy
cd /Users/miananwar/Development/Angular/personal-portfolio
npm install -g vercel
vercel --prod
```

---

## ⚙️ Pre-Deployment Checklist

Before deploying, make sure you've:

- ✅ Updated all personal information in `portfolio-data.service.ts`
- ✅ Added your profile image to `/public/images/profile.jpg`
- ✅ Added your resume PDF to `/public/documents/resume.pdf`
- ✅ Updated GitHub username in `social-proof.ts`
- ✅ Updated all social media links
- ✅ Replaced placeholder project images with real ones
- ✅ Updated meta tags in `index.html` for SEO
- ✅ Tested the application locally

---

## 🌐 Custom Domain Setup

### Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

### Vercel:
1. Go to Project settings → Domains
2. Add your domain
3. Update DNS records

### GitHub Pages:
1. Add `CNAME` file in `/public/` with your domain
2. Update DNS records to point to GitHub Pages

---

## 📊 Performance Tips

The build warnings indicate:
- Bundle size is larger than recommended (861 KB vs 500 KB budget)
- This is normal for a feature-rich portfolio
- Consider lazy loading more routes if needed

To improve:
```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
ng build --stats-json
npx webpack-bundle-analyzer dist/personal-portfolio/browser/stats.json
```

---

## 🔄 Continuous Deployment (Recommended)

### Setup Git + Netlify/Vercel:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/personal-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify/Vercel**:
   - Import repository from dashboard
   - Auto-deploys on every push to main!

---

## 📧 Support

Your portfolio is ready to deploy! Choose the platform that works best for you:
- **Easiest**: Netlify or Vercel (drag & drop or CLI)
- **Free tier**: All options have generous free tiers
- **Best for portfolios**: Netlify or Vercel (automatic SSL, CDN, previews)

**Next step**: Run one of the quick deploy commands above! 🚀
