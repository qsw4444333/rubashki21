import { PageMeta } from "nuxt/app";

declare module "nuxt/app" {
  interface PageMeta {
    title?: string;
  }
}
