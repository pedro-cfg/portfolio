import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  prerender: ["/"],
  future: {
    unstable_viteEnvironmentApi: true,
  },
} satisfies Config;
