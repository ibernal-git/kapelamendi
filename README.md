# Kapelamendi website

## 🚀 Project Structure

```
/
├── public/
├── src/
│   |── pages/
│   |    |── index.astro
│   |    |── medios-de-produccion.astro
│   |    |── privacidad.astro
│   |    |── aviso-legal.astro
│   |    └── politica-de-cookies.astro
│   |── components/
│   |   |── BaseHead.astro // html head
│   |   |── AppLayout.astro // template for pages
│   |   |── Content.astro
│   |   |── Info.astro // index info text template
│   |   |── Section.astro // page sections
│   |   |── SectionImg.astro
│   |   |── SectionText.astro
│   |   |── Footer.astro
│   |   |── Cookies // react component for manage cookies banner
│   |   |── Navbar // react component for manage page menu, change meta in head, active menu item, change, mobile icon and display, ...
│   |   |── NavButton
│   |   |── Slider
│   |   └── Icons
│   |        |── Check
│   |        |── Control
│   |        |── Phone
│   |        |── Production
│   |        └── Service
│   |── styles/
│   |    └── global.css
|── postcss.config.js
|── tailwind.config.js
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
