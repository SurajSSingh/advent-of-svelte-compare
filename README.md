# Advent of Svelte Compare

This project is created to compare and contrast working with Svelte and React as I go through the challenges of [Advent of Svelte (2023)](https://advent.sveltesociety.dev/2023).

## Project Outline

This is a monorepo using [Turborepo](https://turbo.build/repo/docs).

There are three main apps:

- [apps/sveltekit](./apps/sveltekit): SvelteKit project, the primary app for my Svelte solutions
- [apps/nextjs](./apps/nextjs): NextJS project, primary app for React solutions
- [apps/astro](./apps/astro): Astro project, will hold both Svelte and React components, good for quick compare and contrast.

There are two main components:

- [components/svelte](./components/svelte): Where Svelte components will go
- [components/react](./components/react): Where React components will go

## Hypothesis

The goal of this project is to figure out how true a common complaint of Svelte 5 is, which is that it is basically/feels like React now. I am curious if this sentiment is warrented

**_TODO_**

### Bias

I have used Svelte 4 in the past occasionally, but not to the extent of working heavily working with it in SvelteKit (most of the work was as a static site app). I have used Svelte 5 primarily with Astro, so I don't know how much has changed with SvelteKit with respect to Svelte 5. I don't have much React knowledge beyond looking at some JSX.

## Libraries used

- Front-end Frameworks:
  - [Svelte](https://svelte.dev)
  - [React](https://react.dev)
- Meta-Framework:
  - [SvelteKit](https://svelte.dev/docs/kit/introduction)
  - [NextJS](https://nextjs.org)
  - [Astro](https://astro.build)
- UI Library
  - [TailwindCSS](https://tailwindcss.com): Currently pre-v4, aiming to test migration once finished with some solutions
  - [Skeleton UI](https://next.skeleton.dev): Currently v3 Release Candidate
