import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/data";

export const metadata = { title: "Fleet Operations Automation" };

export default function Page() {
  return <ProjectDetail project={projects[1]} />;
}
