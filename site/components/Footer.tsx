import Link from "next/link";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <p>Verified local-first n8n workflow portfolio. No affiliation or endorsement implied.</p>
      <div>
        <Link href={site.github}>GitHub</Link>
        <Link href={site.release}>Release</Link>
        <Link href="/review">Review Guide</Link>
      </div>
    </footer>
  );
}
