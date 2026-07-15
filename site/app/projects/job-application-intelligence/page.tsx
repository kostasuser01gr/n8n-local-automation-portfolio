import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/data";

export const metadata = { title: "Job Application Intelligence" };

export default function Page() {
  return <ProjectDetail project={projects[0]} />;
}
