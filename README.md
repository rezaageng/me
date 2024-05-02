![Image](https://me-space.sgp1.digitaloceanspaces.com/strapi/62c2bb1b7733618197058825c86aafcd.jpg)

# rezaa.me

"Embark on a journey through my digital creative realm, where design meets development in perfect harmony! This portfolio website is a visual symphony, born in the creative chambers of [Figma](https://figma.com), meticulously crafted in the coding laboratory of [VSCode](https://code.visualstudio.com/), and brought to life through the enchanting spells of [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), and [Lenis](https://lenis.studiofreight.com/). It's not just a website; it's a canvas where pixels come alive, deployed with surgical precision on [Vercel](https://vercel.com). Explore the fusion of art and technology as you delve into my work, and witness the magic of seamless design and mesmerizing interactivity in action!"

## How to Start

### Prerequisites

1. [Node.js ](https://nodejs.org) (v18.17.0 or later)
2. [PNPM](https://pnpm.io/)
3. An API (I use [Strapi](https://strapi.io/))

   For the API, you have to develop your own. I use Strapi, but you can use any API you want. Just make sure to change the API endpoints in `ssg/index.ts` and `app/api/*.ts`. You can see the [API documentation here](https://strapi.rezaa.me/documentation/v1.0.0).

### Installation

1. Clone this repository
   ```sh
   git clone https://github.com/rezaageng/me.git
   ```
2. Install dependencies
   ```sh
   pnpm i
   ```
3. Copy `.env.test` to `.env.local` and fill in the values
   ```sh
   cp .env.test .env.local
   ```
   - [Wakatime API Key](https://wakatime.com/api-key)
   - [GitHub Personal Access Token](https://github.com/settings/tokens?type=beta)
4. Run the development server
   ```sh
   pnpm dev
   ```

### Build

```sh
pnpm build
pnpm start
```

## Kawaii Mode (可愛いモード)

### Activate Kawaii Mode

To activate Kawaii Mode, add `?kawaii=true` to the URL.
`https://rezaa.me/?kawaii=true` Or click [here](https://rezaa.me/?kawaii=true)

### Deactivate Kawaii Mode

To deactivate Kawaii Mode, add `?kawaii=false` to the URL.
`https://rezaa.me/?kawaii=false` Or click [here](https://rezaa.me/?kawaii=false)
