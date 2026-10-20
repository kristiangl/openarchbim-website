# OpenArch BIM website

Source for openarchbim.com. React, Vite and Tailwind CSS.

```
pnpm install
pnpm dev      # local dev server
pnpm build    # output in dist/
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and uploads
`dist/` to the web host over FTPS.

Repository secrets (Settings → Secrets and variables → Actions):

- `FTP_SERVER`: FTP hostname
- `FTP_USERNAME`
- `FTP_PASSWORD`

Optional secret or variable `FTP_DIR`: target folder on the host (default `public_html/`).

## Pre-launch checklist

- When launching, set `SITE_MODE` to `'launch'` and replace the placeholder download links.
- Add the photographer's name to the Unsplash credit in the footer.

## Site mode

`src/config.ts` has a `SITE_MODE` switch.

- `coming-soon`: story, support links, real screenshots and roadmap (current).
- `launch`: the full launch layout with download links.

Roadmap content lives in `src/roadmap.ts`. Links to GitHub and Buy Me a Coffee are in `src/config.ts`.
