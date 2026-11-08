# giovannipalla.com

Hand-written static site. No Jekyll, no build step, no dependencies beyond a
Google Fonts link.

```
index.html         everything on the home page: bio, projects, news
404.html
assets/css/site.css   the whole design, tokens at the top
assets/js/site.js     colour-scheme toggle + footer year
assets/img/           avatar, project thumbnails, 404 image
assets/vitae.pdf
```

Edit `index.html` and push to `master` — GitHub Pages serves it as-is
(`.nojekyll` keeps it from running Jekyll). The custom domain
`giovannipalla.com` forwards here.

Colour knobs live at the top of `site.css`: `--bg`, `--ink`, `--band`
(Palermo Pink, `#eec0c8`, fixed in both themes), `--accent`, `--measure`.
