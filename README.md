# Vaibhav Adesara - Personal Portfolio

A high-conversion, fast, and responsive personal portfolio built with React, Vite, and Vanilla CSS. Designed with a recruiter-first UX in mind.

## Technologies Used
- **React 18**
- **Vite**
- **Lucide React** (Icons)
- **Vanilla CSS** (Custom Design System, CSS Variables, Animations)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Local Development
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## Customization

Before deploying, make sure to update the placeholder links:
1. Open `src/components/Projects.jsx` and replace the `#` and `https://github.com/` links with your actual project demo and repository URLs.
2. Open `src/components/Contact.jsx` and replace the placeholder GitHub and LinkedIn links with your actual profile URLs.
3. Open `index.html` and update the `og:url` with your actual live domain for SEO.

## Deployment Instructions

This portfolio is ready to be deployed to any modern static hosting provider.

### Vercel (Recommended, Easiest)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **Add New Project** and select your GitHub repository.
4. The framework preset should automatically be detected as **Vite**.
5. Click **Deploy**. Vercel will build and host your site automatically.

### Netlify
1. Push this repository to GitHub.
2. Go to [Netlify](https://www.netlify.com/) and sign in.
3. Click **Add new site** -> **Import an existing project**.
4. Connect to GitHub and select your repository.
5. Build settings:
   - Base directory: `/`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**.

### GitHub Pages
If you want to use GitHub Pages, you need to add a base path in your `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
})
```
Then build the project (`npm run build`) and deploy the `dist` folder.
