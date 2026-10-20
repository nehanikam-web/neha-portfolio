# Neha Nikam – Cinematic Portfolio

React + Vite + Framer Motion + Lucide icons. No API keys, no database.

## Run it

1. Install Node.js LTS from https://nodejs.org
2. Open this folder in VS Code (File → Open Folder)
3. Open the terminal (Ctrl + `) and run:

```
npm install
npm run dev
```

4. Open http://localhost:5173

If Windows shows `Cannot find module @rollup/rollup-win32-x64-msvc`, run:

```
npm install @rollup/rollup-win32-x64-msvc --no-save
npm run dev
```

## Where to change things

| What | File |
| --- | --- |
| Email, GitHub, LinkedIn, college name | `src/data/siteData.js` (top, `SITE`) |
| Skills | `src/data/siteData.js` (`SKILLS`) |
| Projects and their GitHub / Live Demo links | `src/data/siteData.js` (`PROJECTS`) |
| Learning journey steps | `src/data/siteData.js` (`JOURNEY`) |
| Your photo | `public/neha-nikam.jpg` (replace the file, same name) |
| Your resume | `public/resume.pdf` (replace the file, same name) |
| Colors | `src/styles/main.css` (`:root` at the top) |

If your new photo is a `.png`, name it `neha-nikam.png` and change `portrait` in `src/data/siteData.js`.

## Placeholders to replace

- [ ] `email`, `github`, `linkedin` in `SITE`
- [ ] `college` in `SITE`
- [ ] GitHub and Live Demo links for COMET and VELORIX
- [ ] `public/resume.pdf` (currently a simple placeholder resume)
- [ ] Optionally a cleaner portrait photo

## Contact form

The form validates name, email and message. There is no server, so after validation it opens your visitor's email app with the message prepared (`mailto:`). It does not send anything by itself. To send emails directly you would need a service such as EmailJS or Formspree.

## Build for hosting

```
npm run build
```

The finished site is created in the `dist` folder (upload it to Netlify, Vercel, etc.).
