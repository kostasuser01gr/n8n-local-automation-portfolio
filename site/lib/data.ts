export const site = {
  name: "Konstantinos Foskolakis",
  title: "Local-first n8n Automation Portfolio",
  tagline: "Local-first automation systems built, executed, verified, and packaged with n8n.",
  description:
    "A verified workflow engineering portfolio with self-hosted n8n, PostgreSQL persistence, Docker/Colima operations, screenshots, validation scripts, and sanitized releases.",
  github: "https://github.com/kostasuser01gr/n8n-local-automation-portfolio",
  release: "https://github.com/kostasuser01gr/n8n-local-automation-portfolio/releases/tag/v0.2.0",
  portfolio: "https://n8n-local-automation-portfolio.vercel.app",
  socialImage: "/images/social-preview.png"
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  purpose: string;
  verified: string[];
  tables: string[];
  nodeSequence: string[];
  validation: string;
  reliability: string[];
  security: string[];
  lessons: string[];
  limitation: string;
  canvas: string;
  execution: string;
  workflowDownload: string;
  sampleDownload: string;
  caseStudy: string;
  accent: "green" | "amber" | "cyan";
};

export const projects: Project[] = [
  {
    slug: "job-application-intelligence",
    title: "Job Application Intelligence Pipeline",
    shortTitle: "Job Intelligence",
    summary: "Imports job application sample data, validates records, persists applications, and records import evidence.",
    problem: "Application data often arrives as inconsistent files with no audit trail or repeatable scoring logic.",
    purpose: "Demonstrate local file intake, validation, scoring, PostgreSQL persistence, import-run tracking, and rejection handling.",
    verified: ["2 job application records", "1 import run", "0 rejections"],
    tables: ["job_applications", "job_import_runs", "job_import_rejections"],
    nodeSequence: ["Read sample input", "Parse and validate", "Score fit signals", "Persist applications", "Record import run", "Return evidence"],
    validation: "Required fields are checked before persistence; rejection handling is present even though the verified run had zero rejected rows.",
    reliability: ["Run audit table", "Deterministic sample data", "PostgreSQL row-count verification", "Sanitized release export"],
    security: ["No live credentials in export", "Scoped file access", "Secret scan before publication"],
    lessons: ["Workflow evidence is stronger when persistence is queryable.", "Import runs make small demos easier to verify."],
    limitation: "The sample data proves execution and persistence; it is not a scale claim.",
    canvas: "/images/screenshots/job-tracker/workflow-canvas.png",
    execution: "/images/screenshots/job-tracker/successful-execution-green-nodes.png",
    workflowDownload: "/downloads/workflows/job-application-intelligence.release.workflow.json",
    sampleDownload: "/downloads/sample-data/job-tracker/jobs-import-example.json",
    caseStudy: `${site.github}/blob/main/case-studies/job-tracker.md`,
    accent: "green"
  },
  {
    slug: "fleet-operations",
    title: "Fleet Operations Automation System",
    shortTitle: "Fleet Operations",
    summary: "Normalizes fleet intake sample records, persists vehicle state, and records one operation run.",
    problem: "Operations teams need a repeatable way to turn mixed vehicle intake records into useful current-state data.",
    purpose: "Demonstrate structured intake, priority logic, PostgreSQL upsert behavior, and operation-run evidence.",
    verified: ["3 fleet vehicle records", "1 fleet operation run"],
    tables: ["fleet_vehicles", "fleet_operation_runs"],
    nodeSequence: ["Create sample intake", "Validate required fields", "Normalize vehicle identifiers", "Calculate operational priority", "Persist vehicles", "Record operation run"],
    validation: "Required fields are validated and synthetic vehicle identifiers are normalized before persistence.",
    reliability: ["Idempotent upsert pattern", "Operation-run tracking", "PostgreSQL schema included", "Successful execution screenshot"],
    security: ["Synthetic fleet data", "No customer records", "Credential IDs removed from release export"],
    lessons: ["Operational workflows benefit from explicit run evidence.", "Small synthetic records can still prove state persistence."],
    limitation: "The vehicle identifiers are deterministic sample values, not real registration plates.",
    canvas: "/images/screenshots/fleet-operations/workflow-canvas.png",
    execution: "/images/screenshots/fleet-operations/successful-execution-green-nodes.png",
    workflowDownload: "/downloads/workflows/fleet-operations-automation.release.workflow.json",
    sampleDownload: "/downloads/sample-data/fleet-operations/fleet-intake-example.json",
    caseStudy: `${site.github}/blob/main/case-studies/fleet-operations.md`,
    accent: "amber"
  },
  {
    slug: "local-ai-knowledge",
    title: "Local AI Knowledge and Document Processing Workflow",
    shortTitle: "Local AI Knowledge",
    summary: "Processes local knowledge document sample data and persists document/run evidence to PostgreSQL.",
    problem: "Knowledge workflows need transparent local processing and a way to prove what was stored.",
    purpose: "Demonstrate deterministic local document processing, PostgreSQL document records, and processing-run tracking.",
    verified: ["3 knowledge document records", "1 processing run"],
    tables: ["knowledge_documents", "knowledge_processing_runs"],
    nodeSequence: ["Create sample documents", "Shape metadata", "Persist knowledge documents", "Record processing run", "Return evidence"],
    validation: "The verified path uses deterministic local processing so the result can be inspected without external API dependency.",
    reliability: ["Processing-run table", "Document table", "Static sample data", "Release workflow export"],
    security: ["No paid external API dependency", "No private documents", "Sanitized workflow export"],
    lessons: ["Local-first AI examples should separate verified behavior from optional model experiments.", "Persistence proof matters more than visual polish alone."],
    limitation: "Optional local model experimentation is outside the verified persistence path.",
    canvas: "/images/screenshots/local-ai-knowledge/workflow-canvas.png",
    execution: "/images/screenshots/local-ai-knowledge/successful-execution-green-nodes.png",
    workflowDownload: "/downloads/workflows/local-ai-knowledge-processing.release.workflow.json",
    sampleDownload: "/downloads/sample-data/local-ai-knowledge/knowledge-documents-example.json",
    caseStudy: `${site.github}/blob/main/case-studies/local-ai-knowledge.md`,
    accent: "cyan"
  }
];

export const verifiedStats = [
  { label: "Executed workflows", value: "3" },
  { label: "PostgreSQL-backed case studies", value: "3" },
  { label: "Public GitHub release", value: "1" },
  { label: "Secret scans and backup checks", value: "Verified" }
];

export const routes = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/architecture", label: "Architecture" },
  { href: "/evidence", label: "Evidence" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/review", label: "Review" }
];

export const evidenceItems = [
  "[VERIFIED] Authenticated n8n workflow screenshots",
  "[EXECUTED] Three local workflow runs",
  "[VERIFIED] PostgreSQL row-count evidence",
  "[SANITIZED] Release workflow exports",
  "[PACKAGED] GitHub Release v0.2.0",
  "[VERIFIED] Backup and secret-scan reports"
];

export const debuggingSteps = [
  "Reproduce exact runtime behavior",
  "Isolate CLI, Docker, file, credential, and database layers",
  "Inspect logs, mounts, node errors, and workflow inputs",
  "Apply minimal fixes such as scoped file access",
  "Verify with PostgreSQL counts and screenshots",
  "Document and package sanitized evidence"
];
