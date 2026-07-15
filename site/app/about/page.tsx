import { site } from "@/lib/data";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="pageShell">
      <section className="sectionHeader top">
        <p className="eyebrow">[ABOUT]</p>
        <h1>Workflow engineering, local-first systems, and release discipline</h1>
        <p>
          This portfolio presents verified implementation evidence for automation and workflow engineering roles. It does not imply employment, endorsement, or affiliation with n8n.
        </p>
      </section>
      <section className="detailGrid">
        {[
          ["Technical focus", "n8n, PostgreSQL, Docker/Colima, React, Node.js, Python/FastAPI, local-first systems, and release engineering."],
          ["Role alignment", "Technical Support Engineer, Workflow Engineer, Community Engineer, Solutions Engineer, and Developer Relations."],
          ["Operating style", "Reproduce, isolate, inspect, fix minimally, verify with data, document, and package the result."],
          ["Portfolio boundary", "Small deterministic workflow data proves execution and persistence. It does not claim adoption or scale."]
        ].map(([title, body]) => (
          <article className="panel" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="widePanel">
        <h2>Primary repository</h2>
        <p>{site.github}</p>
      </section>
    </main>
  );
}
