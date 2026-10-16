# OpenArch BIM website

Source for openarchbim.com. React, Vite and Tailwind CSS.

```
pnpm install
pnpm dev      # local dev server
pnpm build    # output in dist/
```

## Deployment

1. Push to `main`.
2. GitHub Actions (`.github/workflows/deploy.yml`) builds the site and force-pushes the
   output to the `deploy` branch.
3. The web host pulls the `deploy` branch and `deploy/cpanel.yml` (published as
   `.cpanel.yml`) copies the files into the site's document root.

## Pre-launch checklist

- Remove the password gate: set `GATE_ENABLED = false` in `src/Gate.tsx`.
- Allow indexing: delete the `robots` meta tag in `index.html` and `public/robots.txt`.
- Replace placeholder screenshots, release/download/roadmap links and the GitHub link.
- Add the photographer's name to the Unsplash credit in the footer.
