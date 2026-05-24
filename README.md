# Kieth Disney Tumulak Oyao — Portfolio

A modern personal portfolio built with **React** and **Vite**, inspired by a dark cyan-accented developer portfolio design.

## Tech stack

- React 19
- Vite 6
- react-icons (HTML, CSS, React, JavaScript, C, Java, MySQL)

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Add your profile photo as `public/profile.jpg` (optional — a fallback avatar is used if missing).

3. Run the dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project structure

```
src/
  components/   # Navbar, Hero, About, Skills, Education, Contact, Footer
  data/         # Portfolio content (edit portfolio.js to update info)
  hooks/        # Theme toggle, typewriter effect
```

## Customize

Edit `src/data/portfolio.js` to update your name, skills, education, links, and stats.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes your site automatically.

### 1. Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it (e.g. `Resume-main` or `portfolio`)
3. Leave it **public** (required for free GitHub Pages)
4. Do **not** add a README if you already have files locally

### 2. Push your code

In a terminal, from this project folder:

```bash
cd d:/Resume-main
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

### 3. Enable GitHub Pages

1. On GitHub, open your repo → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. After the workflow runs (check the **Actions** tab), your site will be live at:

`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

Example: `https://kdsny.github.io/Resume-main/`

### Notes

- **`public/profile.png`** must be committed so your photo appears online.
- If your repo is named `YOUR_USERNAME.github.io`, change `BASE_PATH` in the workflow to `/` instead of `/${{ github.event.repository.name }}/`.
- First deploy can take 2–5 minutes after you push.
