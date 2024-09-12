import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:4321/",
    integrations: [tailwind({ applyBaseStyles: false }), react(), mdx()],
    output: "static",
    image: {
      service: squooshImageService()
    },
});
