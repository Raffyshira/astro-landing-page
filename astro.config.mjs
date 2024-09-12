import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://demo-landing-astro.vercel.app/",
    integrations: [tailwind({ applyBaseStyles: false }), react(), mdx()],
    output: "static",
    image: {
      service: squooshImageService()
    },
});
