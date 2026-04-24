# Technical Documentation: Sanity CMS Integration for The Golden Arch Hotel

This guide provides a comprehensive walkthrough of the Sanity CMS integration implemented to transform this static website into a dynamic, client-manageable platform.

---

## 1. Prerequisites
- **Sanity Account**: Create one at [sanity.io](https://www.sanity.io/).
- **Sanity Project**: Create a new project in the Sanity dashboard to get your **Project ID**.

## 2. Installation
The following dependencies were installed to enable the integration:
```bash
npm install next-sanity sanity @sanity/image-url @sanity/client @sanity/vision
```

---

## 3. Environment Configuration
Create a `.env.local` file in your root directory with the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
```

---

## 4. Sanity Folder Structure (`src/sanity`)
Organized for maintainability:

### A. Environment Helper (`src/sanity/env.ts`)
Validates that environment variables are present.
```typescript
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-24'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const useCdn = false
```

### B. Client Instance (`src/sanity/lib/client.ts`)
The main client used to fetch data.
```typescript
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})
```

### C. Image Builder (`src/sanity/lib/image.ts`)
Converts Sanity image references into accessible URLs.
```typescript
import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: any) {
  return builder.image(source);
}
```

---

## 5. Sanity Studio Configuration
The **Studio** is the dashboard where the client manages content.

### Main Config (`sanity.config.ts`)
In the root directory, defines Studio behavior.
```typescript
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
```

### Studio Route (`src/app/studio/[[...index]]/page.tsx`)
Mounts the Sanity Studio on the `/studio` URL.
```typescript
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

---

## 6. Schema Definitions (`src/sanity/schemaTypes/`)
Managed sections:
1. **Hero**: Background, primary/secondary titles, subtitles.
2. **Rooms**: Images, prices, amenities.
3. **Gallery**: Visual portfolio and categories.

---

## 7. Data Fetching & Component Integration
The website uses **GROQ** to fetch data on the server.

### Queries (`src/sanity/lib/queries.ts`)
```typescript
import { groq } from 'next-sanity'
export const heroQuery = groq`*[_type == "hero"][0]`
export const roomsQuery = groq`*[_type == "room"]`
export const galleryQuery = groq`*[_type == "gallery"]`
```

### Main Page (`src/app/page.tsx`)
```typescript
export default async function Home() {
  const [heroData, roomsData, galleryData] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(roomsQuery),
    client.fetch(galleryQuery),
  ]);

  return (
    <main>
      <Hero data={heroData} />
      <Rooms data={roomsData} />
      <Gallery data={galleryData} />
    </main>
  );
}
```

---

## 8. Usage
1. **Access Studio**: Go to `http://localhost:3000/studio`.
2. **Fallback**: Site defaults to original static images if Sanity isn't configured.

---
**Created by Antigravity**
