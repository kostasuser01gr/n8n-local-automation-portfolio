import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ProjectCard } from "@/components/ProjectCard";
import { evidenceItems, projects, site, verifiedStats } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="pageShell">
      <section className="hero">
        <div>
          <p className="eyebrow">[LOCAL-FIRST AUTOMATION SYSTEMS]</p>
          <h1>Konstantinos Foskolakis</h1>
          <p className="heroText">{site.tagline}</p>
          <p className="lead">
            A verified n8n portfolio built around self-hosted workflow execution, PostgreSQL persistence, Docker/Colima operations, security review, and release packaging.
          </p>
          <div className="ctaRow">
            <Link className="buttonPrimary" href="/projects">Explore case studies</Link>
            <Link className="buttonSecondary" href={site.github}>Open GitHub repository</Link>
            <Link className="buttonSecondary" href={site.release}>View GitHub Release</Link>
          </div>
        </div>
        <aside className="heroConsole" aria-label="Verified portfolio status">
          {verifiedStats.map((stat) => (
            <div key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </aside>
      </section>

      <section className="sectionHeader">
        <p className="eyebrow">[PROJECT NAVIGATION]</p>
        <h2>Three executed workflow case studies</h2>
        <p>Each project uses deterministic sample data and verified PostgreSQL persistence. Counts are evidence, not scale metrics.</p>
      </section>

      <section className="projectGrid">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>

      <section className="widePanel">
        <p className="eyebrow">[ARCHITECTURE]</p>
        <h2>External-disk-first local workflow lab to public portfolio</h2>
        <ArchitectureDiagram />
      </section>

      <section className="evidenceStrip">
        {evidenceItems.map((item) => <span key={item}>{item}</span>)}
      </section>
    </main>
  );
}
