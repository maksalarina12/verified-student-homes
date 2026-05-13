export function Footer() {
  return (
    <footer id="kontak" className="mt-20 border-t border-border bg-secondary/40">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="font-bold text-foreground">KosFinder</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Marketplace kos mahasiswa terverifikasi untuk wilayah Banda Aceh & Syiah Kuala.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Bantuan</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Cara Booking</li>
            <li>Proses Verifikasi</li>
            <li>Lapor Penipuan</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Kontak</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>support@kosfinder.id</li>
            <li>+62 811-0000-0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KosFinder. All rights reserved.
      </div>
    </footer>
  );
}
