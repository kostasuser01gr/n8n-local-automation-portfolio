import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/data";

export const metadata = { title: "Local AI Knowledge Workflow" };

export default function Page() {
  return <ProjectDetail project={projects[2]} />;
}
