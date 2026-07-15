import Link from "next/link";
import { projects, site } from "@/lib/data";

export const metadata = { title: "Application Contact and Review Guide" };

export default function ReviewPage() {
  return (
    <main className="pageShell">
      <section className="sectionHeader top">
        <p className="eyebrow">[REVIEW GUIDE]</p>
        <h1>Start here if you are reviewing this application</h1>
        <p>Use this page for the fastest path through the verified evidence, strongest screenshots, downloads, and limitations.</p>
      </section>
      <section className="detailGrid">
        <article className="panel">
          <h2>60-second summary</h2>
          <p>Three local n8n workflows were executed, persisted to PostgreSQL, captured as screenshots, sanitized, validated, and published with a GitHub release.</p>
        </article>
        <article className="panel">
          <h2>Strongest debugging story</h2>
          <p>Execution issues were isolated across CLI behavior, file visibility, scoped n8n file access, credential import, and evidence redaction before final verification.</p>
        </article>
        <article className="panel">
          <h2>Implementation limitations</h2>
          <p>Data is small deterministic sample data. It proves execution and persistence, not scale or outside adoption.</p>
        </article>
        <article className="panel">
          <h2>Contact</h2>
          <p>Use the public repository issues for technical review. Private contact can be added in application systems where appropriate.</p>
        </article>
      </section>
      <section className="widePanel">
        <h2>Open the review path</h2>
        <div className="downloadGrid">
          <Link href={site.github}>GitHub repository</Link>
          <Link href={site.release}>GitHub Release</Link>
          {projects.map((project) => <Link href={`/projects/${project.slug}`} key={project.slug}>{project.shortTitle}</Link>)}
          <a href="/downloads/application/Konstantinos_Foskolakis_n8n_Portfolio.zip">Download application ZIP</a>
        </div>
      </section>
    </main>
  );
}
