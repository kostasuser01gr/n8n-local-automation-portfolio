import Link from "next/link";
import { routes, site } from "@/lib/data";

export function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Portfolio home">
        <span className="brandMark">KF</span>
        <span>{site.name}</span>
      </Link>
      <nav aria-label="Primary navigation">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
