import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MapPin, Phone, ShieldCheck, Star, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KOS_LIST, formatIDR } from "@/data/kos";

export const Route = createFileRoute("/kos/$id")({
  loader: ({ params }) => {
    const kos = KOS_LIST.find((k) => k.id === params.id);
    if (!kos) throw notFound();
    return { kos };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.kos.name} — KosFinder` },
          { name: "description", content: loaderData.kos.description },
          { property: "og:title", content: loaderData.kos.name },
          { property: "og:description", content: loaderData.kos.description },
          { property: "og:image", content: loaderData.kos.image },
        ]
      : [],
  }),
  component: DetailPage,
  notFoundComponent: () => (
    <div className="p-12 text-center">Kos tidak ditemukan. <Link to="/" className="text-primary underline">Kembali</Link></div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-12 text-center text-destructive">{error.message}</div>
  ),
});

function DetailPage() {
  const { kos } = Route.useLoaderData();
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Kembali ke pencarian
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="overflow-hidden rounded-xl border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={kos.gallery[active]} alt={kos.name} width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {kos.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-20 w-28 flex-none overflow-hidden rounded-lg border-2 transition-all ${
                    active === i ? "border-primary" : "border-transparent opacity-70"
                  }`}
                >
                  <img src={g} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-2">
                {kos.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-success px-2.5 py-1 text-xs font-semibold text-success-foreground">
                    <ShieldCheck className="h-3.5 w-3.5" /> Data Terverifikasi
                  </span>
                )}
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium capitalize">{kos.gender}</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold">{kos.name}</h1>
              <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {kos.address}
              </div>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{kos.rating}</span>
                <span className="text-muted-foreground">({kos.reviews.length} ulasan)</span>
              </div>

              <p className="mt-6 leading-relaxed text-foreground/90">{kos.description}</p>

              <h2 className="mt-8 text-xl font-bold">Fasilitas</h2>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {kos.facilities.map((f) => (
                  <div key={f} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm">
                    <Check className="h-4 w-4 text-success" /> {f}
                  </div>
                ))}
              </div>

              <h2 className="mt-8 text-xl font-bold">Ulasan Penghuni</h2>
              <div className="mt-3 space-y-3">
                {kos.reviews.map((r, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{r.name}</div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        {r.rating}
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-elevated)" }}>
              <div className="text-3xl font-bold text-primary">{formatIDR(kos.price)}</div>
              <div className="text-sm text-muted-foreground">/ bulan • harga transparan</div>

              <div className="mt-4 space-y-2 rounded-lg bg-secondary/60 p-3 text-sm">
                <div className="flex items-center gap-2 text-success">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="font-medium">Listing terverifikasi tim KosFinder</span>
                </div>
                <div className="text-muted-foreground">
                  Pemilik: <span className="font-medium text-foreground">{kos.owner}</span>
                </div>
              </div>

              <button className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Booking Sekarang
              </button>
              <a
                href={`https://wa.me/${kos.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-semibold text-foreground hover:bg-accent"
              >
                <Phone className="h-4 w-4" /> Hubungi Pemilik
              </a>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
