import { Link } from "@tanstack/react-router";
import { Home, ShieldCheck } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Home className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-foreground">KosFinder</div>
            <div className="text-[11px] text-muted-foreground">Aman & Transparan</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="/" className="text-foreground hover:text-primary">Cari Kos</Link>
          <a href="#trust" className="text-foreground hover:text-primary">Verifikasi</a>
          <a href="#kontak" className="text-foreground hover:text-primary">Kontak</a>
        </nav>
        <div className="flex items-center gap-2 rounded-full bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
          <ShieldCheck className="h-4 w-4" />
          <span className="hidden sm:inline">Data Terverifikasi</span>
        </div>
      </div>
    </header>
  );
}
