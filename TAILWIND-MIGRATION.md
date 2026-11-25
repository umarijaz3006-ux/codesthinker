# Code's Thinker — Tailwind CSS migration

The project styling has been migrated from the previous component/page CSS files to Tailwind CSS v4 utility classes (including Tailwind arbitrary-property utilities where needed to preserve the original exact CSS values).

## Run the project

From this folder, run:

```bash
npm install
npm run dev
```

## What changed

- Added `tailwindcss` and `@tailwindcss/vite` to the development dependencies.
- Enabled the Tailwind Vite plugin in `vite.config.js`.
- Replaced the old styling in `src/index.css` with Tailwind's import, Poppins font setup, global base styles, and the small animation keyframe still used by the homepage.
- Migrated the declarations from the old CSS files into Tailwind utility classes in the JSX components and pages.
- Removed the old page/component CSS files and their imports. `src/index.css` is the only CSS entry point left.
- Kept the existing React components, page routing, text, assets, form state, and interaction handlers intact.

If you have an old `node_modules` folder, `npm install` will install the Tailwind dependencies required by this version.
