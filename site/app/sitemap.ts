import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://n8n-local-automation-portfolio.vercel.app";
  const routes = ["", "/projects", "/architecture", "/evidence", "/security", "/about", "/review", ...projects.map((project) => `/projects/${project.slug}`)];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-07-15")
  }));
}
