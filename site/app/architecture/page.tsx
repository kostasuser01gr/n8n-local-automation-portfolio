import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export const metadata = { title: "Architecture" };

export default function ArchitecturePage() {
  return (
    <main className="pageShell">
      <section className="sectionHeader top">
        <p className="eyebrow">[ARCHITECTURE]</p>
        <h1>Self-hosted n8n, PostgreSQL, Docker/Colima, and release evidence</h1>
        <p>Accurate architecture for the verified portfolio. Persistent project data was controlled under external-disk-first storage; no absolute zero internal OS write claim is made.</p>
      </section>
      <section className="widePanel">
        <ArchitectureDiagram />
      </section>
      <section className="detailGrid">
        {[
          ["macOS host", "Apple Silicon local environment for development, browser verification, and tooling."],
          ["External storage", "Primary project and runtime persistence under controlled external storage."],
          ["Colima and Docker", "Container runtime for local n8n and PostgreSQL services."],
          ["n8n and PostgreSQL", "Workflow execution and durable persistence proof."],
          ["GitHub Release", "Sanitized workflow exports, screenshots, schemas, sample data, and validation scripts."],
          ["Vercel presentation", "Static-first portfolio layer over verified public evidence."]
        ].map(([title, body]) => (
          <article className="panel" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
