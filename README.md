# Trung Ha Portfolio

A clean, responsive personal portfolio and CV website built with ReactJS, Vite, TypeScript, and plain CSS. The site is static and ready to deploy to GitHub Pages.

## Tech Stack

- ReactJS
- Vite
- TypeScript
- Plain CSS
- pnpm
- GitHub Actions

## Project Structure

```text
src/
  application/      Portfolio content and app-level data
  domain/           Shared portfolio types
  presentation/     UI components and styles
  assets/           Personal visual assets
```

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build the production site:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Language Switch

The site opens in English by default. Use the toggle button in the header to switch between English and Vietnamese.

## Contact

- GitHub: `https://github.com/trunghtt`

## Download PDF

Use the "Download CV" button on the website. The browser print dialog will open, and you can choose "Save as PDF" to export the current portfolio page.

## Deploy to GitHub Pages

This project includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

To deploy:

1. Push the project to a GitHub repository.
2. Open the repository settings on GitHub.
3. Go to **Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push to the `main` branch.

GitHub Actions will install dependencies with pnpm, build the Vite app, upload the `dist` folder, and publish it to GitHub Pages.

## Notes

- The app uses `base: './'` in `vite.config.ts` so built assets work correctly on GitHub Pages.
- Company projects are described without private source code links.
