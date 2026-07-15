import { debuggingSteps, site } from "@/lib/data";
import Link from "next/link";

export const metadata = { title: "Reliability and Security" };

export default function SecurityPage() {
  return (
    <main className="pageShell">
      <section className="sectionHeader top">
        <p className="eyebrow">[RELIABILITY AND SECURITY]</p>
        <h1>Sanitized exports, scoped file access, and validation tooling</h1>
        <p>The release excludes live credentials, database files, backups, raw secrets, and private runtime state.</p>
      </section>
      <section className="detailGrid">
        <article className="panel">
          <h2>Release hygiene</h2>
          <ul>
            <li>Credential IDs removed from public workflow exports.</li>
            <li>Execution markers redacted from evidence files.</li>
            <li>Secret-scan script included in the public repo.</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Runtime boundaries</h2>
          <ul>
            <li>PostgreSQL was internal to the local Docker environment.</li>
            <li>File access was scoped with n8n configuration.</li>
            <li>Backups were validated but not published.</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Validation</h2>
          <ul>
            <li>Workflow JSON validation.</li>
            <li>Sample JSON validation.</li>
            <li>Screenshot readability checks.</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Debugging method</h2>
          <ol>{debuggingSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        </article>
      </section>
      <section className="widePanel">
        <h2>Open the public audit files</h2>
        <div className="downloadGrid">
          <Link href={`${site.github}/blob/main/REPOSITORY_SECURITY_AUDIT.md`}>Repository security audit</Link>
          <Link href={`${site.github}/blob/main/docs/SANITIZATION.md`}>Sanitization notes</Link>
          <Link href={`${site.github}/blob/main/scripts/secret-scan.sh`}>Secret scan script</Link>
        </div>
      </section>
    </main>
  );
}
