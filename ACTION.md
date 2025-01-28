# Shell Actions for setup

## Create SvelteKit App

Skeleton UI (Next) Documentation: <https://next.skeleton.dev/docs/get-started/installation/sveltekit>

1. Run `sv` tool

```sh
pnpm dlx sv create --template minimal --types ts sveltekit
cd sveltekit
```

2. Selected `tailwind` and installed dependencies with pnpm
3. Configure tailwind to use Skeleton and update `app.html` file to use active theme

## Create NextJS App

Skeleton UI (Next) Documentation: <https://next.skeleton.dev/docs/get-started/installation/nextjs>

1. Run `create-next-app` tool

```sh
pnpm create next-app@latest nextjs --typescript --tailwind --eslint
cd nextjs
```

2. Configure tailwind to use Skeleton and update `layout.tsx` file to use active theme
3. In `global.css`, remove overriding code (`:root{...}, @media...{...}, and body{...}`) to allow Skeleton styles to be applied

## Create Astro App

Skeleton UI (Next) Documentation: <https://next.skeleton.dev/docs/get-started/installation/astro>

1. Run `create-astro` tool

```sh
pnpm create astro@latest astro
cd astro
```

2. Configure tailwind to use Skeleton and update `Layout.astro` file to use active theme
3. (Optional) Update `Welcome.astro` component
4. Add React and Svelte frameworks to Astro

```sh
pnpm dlx astro add react svelte
```

5. Add Skeleton UI framework packages and configure Tailwind
6. TODO: Fix Tailwind config error when using `contentPath`

## TODO: Create Docus (Nuxt) App

- Skeleton UI (Next) Documentation: <https://next.skeleton.dev/docs/get-started/installation/other>
- Docus Getting Started: <https://docus.dev/introduction/getting-started>
- Tailwind Install for Nuxt: <https://tailwindcss.com/docs/installation/framework-guides/nuxt>
- Tailwind Module for Nuxt: <https://nuxt.com/modules/tailwindcss>

1. Setup a Nuxt project with Docus theme using `nuxi`

```sh
pnpm dlx nuxi@latest init nuxt-docus -t themes/docus
```

2. (Optional) Manually add `rspack` to `package.json` and `nuxt.config.ts`

```json
{
    // ...
  "devDependencies": {
    // ...
    "@nuxt/rspack-builder": "^3.14.159",
    // ...
  }
}
```

```ts
export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  builder: 'rspack',
  // ... 
})
```

3. Install dependencies with `pnpm`, passing `--shamefully-hoist` flag
4. Install `tailwindcss` and `@nuxtjs/tailwindcss` as dev Dependencies
5. Install `@skeletonlabs/skeleton@next` as devDep
6. Configure tailwind to use Skeleton
