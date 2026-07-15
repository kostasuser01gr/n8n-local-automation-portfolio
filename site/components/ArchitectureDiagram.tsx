export function ArchitectureDiagram() {
  const nodes = ["macOS host", "External storage", "Colima", "Docker", "n8n", "PostgreSQL", "Evidence", "GitHub", "Vercel"];
  return (
    <div className="architectureDiagram" role="img" aria-label="External-storage-first local n8n architecture flowing to GitHub and Vercel">
      {nodes.map((node, index) => (
        <div className="archNode" key={node}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{node}</strong>
        </div>
      ))}
    </div>
  );
}
