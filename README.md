<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment (GitHub Pages)

To host your portfolio on GitHub Pages, follow these steps:

1. **Initialize Git (if not already):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Add Your GitHub Repository as Remote:**
   ```bash
   git remote add origin https://github.com/Subitha-Murugesan/subitha-murugesan-portfolio.git
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **GitHub Settings:**
   - Go to your repository on GitHub.
   - Go to **Settings** > **Pages**.
   - Ensure the source is set to **Deploy from a branch** and the branch is **gh-pages**.

Your site will be available at `https://Subitha-Murugesan.github.io/subitha-murugesan-portfolio/`.

