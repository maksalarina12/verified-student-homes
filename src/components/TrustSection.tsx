import { ShieldCheck, MapPinned, FileCheck2, Users } from "lucide-react";

const STEPS = [
  {
    icon: FileCheck2,
    title: "Verifikasi Dokumen",
    desc: "Tim kami memeriksa dokumen kepemilikan dan identitas pemilik kos.",
  },
  {
    icon: MapPinned,
    title: "Survei Lokasi",
    desc: "Kunjungan langsung ke lokasi untuk memvalidasi foto dan fasilitas.",
  },
  {
    icon: ShieldCheck,
    title: "Badge Terverifikasi",
    desc: "Kos yang lolos mendapat badge hijau sebagai jaminan keaslian data.",
  },
  {
    icon: Users,
    title: "Pantauan Komunitas",
    desc: "Ulasan & laporan mahasiswa membantu menjaga kualitas listing.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
          <ShieldCheck className="h-4 w-4" /> Bebas Penipuan
        </div>
        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          Setiap Kos Diverifikasi Manual
        </h2>
        <p className="mt-3 text-muted-foreground">
          Kami membangun kepercayaan dengan proses verifikasi 4 tahap, sehingga kamu booking dengan tenang tanpa khawatir penipuan.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div
            key={s.title}
            className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs font-semibold text-muted-foreground">Tahap {i + 1}</div>
            <h3 className="mt-1 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
