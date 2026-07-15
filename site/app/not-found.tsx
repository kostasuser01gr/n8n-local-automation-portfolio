import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pageShell">
      <section className="widePanel top">
        <p className="eyebrow">[404]</p>
        <h1>Route not found</h1>
        <p>This portfolio page does not exist. Return to the verified project index.</p>
        <Link className="buttonPrimary" href="/projects">Open projects</Link>
      </section>
    </main>
  );
}
