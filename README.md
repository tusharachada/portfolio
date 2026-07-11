# tusharachada.com

Personal portfolio site for Venkatasai Poorna Tushara Chada. Built with
[Astro](https://astro.build/), content-driven by Markdown, deployed as a static
site on Cloudflare Pages.

- **Zero-maintenance hosting**: static files on Cloudflare's global network.
- **Automatic HTTPS**: SSL is issued and renewed by Cloudflare. Never touch it.
- **Edit in Markdown**: change a `.md` file, push to GitHub, the site rebuilds.

---

## Editing the site content

Everything visible on the site comes from two places:

| What you want to change | File to edit |
| --- | --- |
| Name, title, tagline, email, location, LinkedIn, photo | `src/config.ts` |
| Skills, certifications, training lists | `src/config.ts` |
| About / summary paragraph | `src/content/about.md` |
| Work experience (one file per job) | `src/content/experience/*.md` |
| Education (one file per degree) | `src/content/education/*.md` |
| Selected work / projects | `src/content/projects/*.md` |
| Profile photo | replace `public/tushara.jpeg` |

To add a new job, copy an existing file in `src/content/experience/`, rename it,
and edit the text. The `order:` number controls the sort (lower shows first).

After editing, commit and push (see below) — the live site updates in ~1 minute.

---

## Running it locally (optional)

You need [Node.js 22+](https://nodejs.org/). This repo pins the version via
`.nvmrc`, so tools like `nvm`, `fnm`, or `mise` pick it up automatically.

```bash
npm install      # first time only
npm run dev      # start a local preview at http://localhost:4321
npm run build    # produce the production build in dist/
```

---

## Deployment: the one-time setup

Do this once. After it's done, every `git push` to the `main` branch
automatically rebuilds and redeploys the live site.

### Step 1 — Put the code on GitHub

1. Go to <https://github.com/new> and create a repository (public is fine),
   e.g. `tusharachada-site`. Do **not** add a README, .gitignore, or license —
   this repo already has them.
2. Copy the commands GitHub shows under **"…or push an existing repository"**,
   or run these from this folder (replace `USERNAME/REPO`):

   ```bash
   git remote add origin https://github.com/USERNAME/REPO.git
   git branch -M main
   git push -u origin main
   ```

### Step 2 — Create a Cloudflare account

1. Sign up at <https://dash.cloudflare.com/sign-up> (free).
2. Verify your email.

### Step 3 — Connect the repo to Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages →
   Connect to Git**.
2. Authorize Cloudflare to access your GitHub, then pick the repository.
3. Set the build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - Leave the root directory as `/`.
4. Click **Save and Deploy**. The first build takes ~1–2 minutes.
5. When it finishes you'll get a free URL like
   `https://tusharachada-site.pages.dev` — the site is already live and on
   HTTPS. Share this to preview before the real domain is attached.

> The `.nvmrc` file in this repo tells Cloudflare to build with Node 22, which
> Astro requires. No extra configuration needed.

### Step 4 — Buy the domain from Cloudflare

You can register `tusharachada.com` directly inside Cloudflare (sold at
wholesale cost, no markup, free WHOIS privacy).

1. In the Cloudflare dashboard, go to **Domain Registration → Register Domains**.
2. Search for `tusharachada.com`, add it to the cart, and complete checkout
   (~$10/year for `.com`).
3. Because you bought it through Cloudflare, DNS is already managed here — there
   is nothing to configure at another registrar.

> **Turn on auto-renew** (Domain Registration → your domain → enable
> auto-renew). This is the single recurring thing to remember, and auto-renew
> handles even that. Everything else (hosting, SSL) is automatic and free.

### Step 5 — Attach the domain to the site

1. Go to **Workers & Pages →** your Pages project **→ Custom domains → Set up a
   custom domain**.
2. Enter `tusharachada.com` and confirm. Since Cloudflare manages the domain,
   it adds the DNS records for you automatically.
3. Repeat and add `www.tusharachada.com` too (Cloudflare will redirect it to the
   root domain).
4. Wait a few minutes for the SSL certificate to issue. The padlock appears
   automatically — you never manage certificates.

That's it. `https://tusharachada.com` is live, secured, and auto-deploying.

---

## Everyday workflow after launch

```bash
# make edits to the .md files or src/config.ts, then:
git add .
git commit -m "Update about section"
git push
```

Cloudflare rebuilds and redeploys within about a minute. To preview changes
before they go live, either run `npm run dev` locally, or push to a different
branch — Cloudflare Pages creates a temporary preview URL for each branch.

---

## Tech notes

- **Framework**: Astro (static output, no server or database).
- **Hosting**: Cloudflare Pages (free tier is ample for a portfolio).
- **Node**: pinned to 22 via `.nvmrc` for local dev and CI builds.
- **Design**: single stylesheet at `src/styles/global.css`. The color mood is
  driven by the `--accent` variables at the top of that file.
