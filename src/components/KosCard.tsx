import { Link } from "@tanstack/react-router";
import { MapPin, ShieldCheck, Star, Wifi, Snowflake, Bath } from "lucide-react";
import { type Kos, formatIDR } from "@/data/kos";

const iconFor = (f: string) => {
  if (f.includes("WiFi")) return Wifi;
  if (f.includes("AC")) return Snowflake;
  if (f.includes("Kamar Mandi")) return Bath;
  return null;
};

export function KosCard({ kos }: { kos: Kos }) {
  return (
    <Link
      to="/kos/$id"
      params={{ id: kos.id }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={kos.image}
          alt={kos.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {kos.verified && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-success px-2.5 py-1 text-xs font-semibold text-success-foreground shadow-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            Data Terverifikasi
          </div>
        )}
        <div className="absolute right-3 top-3 rounded-full bg-background/95 px-2 py-1 text-xs font-medium capitalize">
          {kos.gender}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary">{kos.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {kos.area}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {kos.facilities.slice(0, 4).map((f) => {
            const Icon = iconFor(f);
            return (
              <span
                key={f}
                className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground"
              >
                {Icon && <Icon className="h-3 w-3" />}
                {f}
              </span>
            );
          })}
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
          <div>
            <div className="text-lg font-bold text-primary">{formatIDR(kos.price)}</div>
            <div className="text-[11px] text-muted-foreground">/ bulan</div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{kos.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
