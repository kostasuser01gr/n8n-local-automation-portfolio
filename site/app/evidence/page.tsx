import Image from "next/image";
import Link from "next/link";
import { evidenceItems, projects, site } from "@/lib/data";

export const metadata = { title: "Execution Evidence" };

export default function EvidencePage() {
  return (
    <main className="pageShell">
      <section className="sectionHeader top">
        <p className="eyebrow">[EXECUTION EVIDENCE]</p>
        <h1>Static verified data, screenshots, reports, and package checks</h1>
        <p>No fake live status. This page presents verified artifacts captured from the completed local workflow executions.</p>
      </section>
      <section className="evidenceStrip">
        {evidenceItems.map((item) => <span key={item}>{item}</span>)}
      </section>
      <section className="imageGrid">
        {projects.map((project) => (
          <figure key={project.slug}>
            <Image src={project.execution} alt={`${project.title} successful execution evidence`} width={1879} height={897} />
            <figcaption>{project.title}</figcaption>
          </figure>
        ))}
      </section>
      <section className="widePanel">
        <h2>Repository evidence</h2>
        <div className="downloadGrid">
          <Link href={`${site.github}/blob/main/docs/EXECUTION_SUMMARY.md`}>Execution summary</Link>
          <Link href={`${site.github}/blob/main/REPOSITORY_SECURITY_AUDIT.md`}>Security audit</Link>
          <Link href={site.release}>GitHub Release</Link>
        </div>
      </section>
    </main>
  );
}
