## Sanity Studio – Portfolio CMS

This is the Sanity Studio backing the portfolio site (projects, experiences, socials, and resume asset).

### Tech Stack
- Sanity Studio v3
- Plugins: icon-picker, inline-svg-input
- React 18 / TypeScript / styled-components

### Prerequisites
- Node.js 16+ (recommended LTS)
- Sanity CLI installed globally (optional): `npm install -g sanity`

### Setup
1) Install dependencies  
   ```bash
   npm install
   ```

2) Configure project (already set)  
   - `projectId`: `8ylc0gmg`  
   - `dataset`: `production`  
   - Edit `sanity.config.ts` if you need to change these.

3) Run Studio locally  
   ```bash
   npm run dev   # or: sanity dev
   ```
   Studio runs at http://localhost:3333

### Deploy Studio
```bash
npm run deploy   # sanity deploy
```
This publishes the hosted Studio at your Sanity-managed URL.

### Content Model Highlights
- `portfolio`: name, introduction, about, socials[], experiences[], projects[], resume (file/PDF)
- `project`: name, slug, shortDescription, description, projectUrl, images[], technologies[]
- `experience`: jobTitle, company, description, dates, link, frameworks[]
- `social`: name, link, icon
- `framework`: name, version, svgIcon

### Resume Upload
In the `portfolio` document, upload your PDF to the **Resume (PDF)** field. The frontend consumes `resumeUrl` from GROQ.

### CORS / API Access
If you query from localhost or new domains, add them in Sanity Manage → API → CORS Origins:
- `http://localhost:8080` (or your dev port)
- your production domain (e.g., `https://www.codewithalfred.com`)

### Useful Scripts
- `npm run dev`      – run Studio locally
- `npm run start`    – legacy start
- `npm run build`    – build static Studio
- `npm run deploy`   – deploy hosted Studio
- `npm run deploy-graphql` – deploy GraphQL API

### Troubleshooting
- Clear `NODE_OPTIONS` if you see OpenSSL worker errors: `NODE_OPTIONS="" npm run dev`
- Ensure your Sanity auth is active: `sanity login`
