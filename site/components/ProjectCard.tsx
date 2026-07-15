import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`projectCard ${project.accent}`}>
      <div className="projectImage">
        <Image src={project.execution} alt={`${project.title} successful execution screenshot`} fill sizes="(max-width: 900px) 100vw, 33vw" />
      </div>
      <div className="projectBody">
        <p className="eyebrow">[EXECUTED]</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul>
          {project.verified.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="textLink" href={`/projects/${project.slug}`}>
          Open project detail
        </Link>
      </div>
    </article>
  );
}
