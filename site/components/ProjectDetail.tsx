import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="pageShell">
      <section className="detailHero">
        <p className="eyebrow">[VERIFIED CASE STUDY]</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <div className="ctaRow">
          <a className="buttonPrimary" href={project.workflowDownload}>Download workflow JSON</a>
          <a className="buttonSecondary" href={project.caseStudy}>Open case study</a>
        </div>
      </section>

      <section className="imageGrid">
        <figure>
          <Image src={project.canvas} alt={`${project.title} n8n workflow canvas`} width={1879} height={897} />
          <figcaption>Workflow canvas</figcaption>
        </figure>
        <figure>
          <Image src={project.execution} alt={`${project.title} successful execution screenshot`} width={1879} height={897} />
          <figcaption>Successful execution</figcaption>
        </figure>
      </section>

      <section className="detailGrid">
        <div className="panel">
          <h2>Business Problem</h2>
          <p>{project.problem}</p>
        </div>
        <div className="panel">
          <h2>Workflow Purpose</h2>
          <p>{project.purpose}</p>
        </div>
        <div className="panel">
          <h2>Persistence Model</h2>
          <ul>{project.tables.map((table) => <li key={table}>{table}</li>)}</ul>
        </div>
        <div className="panel">
          <h2>Verified Counts</h2>
          <ul>{project.verified.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="widePanel">
        <h2>Node Sequence</h2>
        <div className="sequence">{project.nodeSequence.map((node) => <span key={node}>{node}</span>)}</div>
      </section>

      <section className="detailGrid">
        <div className="panel">
          <h2>Validation Logic</h2>
          <p>{project.validation}</p>
        </div>
        <div className="panel">
          <h2>Reliability Patterns</h2>
          <ul>{project.reliability.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="panel">
          <h2>Security Model</h2>
          <ul>{project.security.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="panel">
          <h2>Lessons Learned</h2>
          <ul>{project.lessons.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="widePanel">
        <h2>Downloads</h2>
        <div className="downloadGrid">
          <a href={project.workflowDownload}>Workflow JSON</a>
          <a href={project.sampleDownload}>Sample data</a>
          <a href={project.caseStudy}>Case study</a>
        </div>
        <p className="finePrint">{project.limitation}</p>
      </section>
    </main>
  );
}
