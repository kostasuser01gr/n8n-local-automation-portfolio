import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="pageShell">
      <section className="sectionHeader top">
        <p className="eyebrow">[PROJECTS]</p>
        <h1>Verified n8n workflow case studies</h1>
        <p>Workflow exports, sample data, screenshots, schemas, and case studies are available for each project.</p>
      </section>
      <section className="projectGrid">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>
    </main>
  );
}
