export function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="gridLayer" />
      <div className="scanLine" />
      <div className="network">
        {Array.from({ length: 16 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}
