import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The "about" section: a single Markdown file at src/content/about.md
const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content' }),
  schema: z.object({}),
});

// Projects / work: one Markdown file per project in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Optional external link (live site, case study, repo, etc.)
    url: z.string().url().optional(),
    // Controls ordering: lower numbers show first.
    order: z.number().default(100),
    // Optional short tags shown as small labels.
    tags: z.array(z.string()).optional(),
  }),
});

// Experience entries in src/content/experience/
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    // Free-form period text, e.g. "2022 — Present"
    period: z.string(),
    // Lower numbers show first (put most recent at the top).
    order: z.number().default(100),
    // Optional headline metrics shown as a stat strip at the top of the entry.
    highlights: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
  }),
});

// Education entries in src/content/education/
const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    school: z.string(),
    // Free-form location, e.g. "New York, NY"
    location: z.string().optional(),
    // Free-form date text, e.g. "May 2024"
    date: z.string(),
    // Lower numbers show first (put most recent at the top).
    order: z.number().default(100),
  }),
});

export const collections = { about, projects, experience, education };
