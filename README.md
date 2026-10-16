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

Optional repository variable `FTP_DIR`: target folder on the host (default `public_html/`).

## Pre-launch checklist

- Remove the password gate: set `GATE_ENABLED = false` in `src/Gate.tsx`.
- Allow indexing: delete the `robots` meta tag in `index.html` and `public/robots.txt`.
- Replace placeholder screenshots, release/download/roadmap links and the GitHub link.
- Add the photographer's name to the Unsplash credit in the footer.
