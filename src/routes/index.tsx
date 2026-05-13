import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KosCard } from "@/components/KosCard";
import { FilterSidebar, type Filters } from "@/components/FilterSidebar";
import { TrustSection } from "@/components/TrustSection";
import { KOS_LIST } from "@/data/kos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KosFinder — Cari Kos Mahasiswa Aman & Terverifikasi" },
      {
        name: "description",
        content:
          "Marketplace kos mahasiswa di Banda Aceh & Syiah Kuala. Harga transparan, data terverifikasi, bebas penipuan.",
      },
      { property: "og:title", content: "KosFinder — Cari Kos Mahasiswa Aman & Terverifikasi" },
      { property: "og:description", content: "Harga transparan & data terverifikasi." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({
    maxPrice: 2000000,
    gender: "all",
    facilities: [],
  });

  const results = useMemo(() => {
    return KOS_LIST.filter((k) => {
      if (k.price > filters.maxPrice) return false;
      if (filters.gender !== "all" && k.gender !== filters.gender) return false;
      if (filters.facilities.some((f) => !k.facilities.includes(f))) return false;
      if (query && !`${k.name} ${k.area} ${k.address}`.toLowerCase().includes(query.toLowerCase()))
        return false;
      return true;
    });
  }, [query, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Mahasiswa di depan kos" width={1600} height={1000} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.92 }} />
        </div>
        <div className="container relative mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-3xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
              <ShieldCheck className="h-4 w-4" /> 100% Data Terverifikasi
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Temukan Kos Mahasiswa Aman, Transparan & Bebas Penipuan
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
              Ratusan kos di Banda Aceh & Syiah Kuala dengan harga transparan dan listing yang sudah disurvei langsung tim kami.
            </p>

            <div className="mt-8 grid gap-2 rounded-2xl bg-card p-3 shadow-2xl sm:grid-cols-[1.4fr_1fr_auto]">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3">
                <MapPin className="h-4 w-4 text-primary" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Lokasi (contoh: Syiah Kuala)"
                  className="h-12 w-full bg-transparent text-sm text-foreground outline-none"
                />
              </div>
              <select
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                className="h-12 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none"
              >
                <option value={800000}>≤ Rp 800.000</option>
                <option value={1200000}>≤ Rp 1.200.000</option>
                <option value={1500000}>≤ Rp 1.500.000</option>
                <option value={2000000}>≤ Rp 2.000.000</option>
              </select>
              <a
                href="#listings"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Search className="h-4 w-4" /> Cari
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div>
            <div className="mb-5 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold">Kos Tersedia</h2>
                <p className="text-sm text-muted-foreground">
                  {results.length} kos ditemukan di sekitar Syiah Kuala & Banda Aceh
                </p>
              </div>
            </div>
            {results.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
                Tidak ada kos yang cocok dengan filter Anda.
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((k) => (
                  <KosCard key={k.id} kos={k} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <TrustSection />
      <Footer />
    </div>
  );
}
