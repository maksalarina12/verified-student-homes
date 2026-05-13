import { SlidersHorizontal } from "lucide-react";

export type Filters = {
  maxPrice: number;
  gender: "all" | "putra" | "putri" | "campur";
  facilities: string[];
};

const ALL_FACILITIES = ["WiFi", "AC", "Kamar Mandi Dalam", "Laundry", "Parkir Motor", "CCTV"];

export function FilterSidebar({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {
  const toggleFacility = (f: string) => {
    setFilters({
      ...filters,
      facilities: filters.facilities.includes(f)
        ? filters.facilities.filter((x) => x !== f)
        : [...filters.facilities, f],
    });
  };

  return (
    <aside className="rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="mb-4 flex items-center gap-2">
        <SlidersHorizontal className="h-4 w-4 text-primary" />
        <h2 className="font-semibold">Filter</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium">Harga maksimal</label>
          <input
            type="range"
            min={500000}
            max={2000000}
            step={50000}
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
            className="mt-2 w-full accent-[var(--primary)]"
          />
          <div className="mt-1 text-sm text-muted-foreground">
            Hingga Rp {filters.maxPrice.toLocaleString("id-ID")}
          </div>
        </div>

        <div>
          <div className="mb-2 text-sm font-medium">Tipe</div>
          <div className="grid grid-cols-2 gap-2">
            {(["all", "putra", "putri", "campur"] as const).map((g) => (
              <button
                key={g}
                onClick={() => setFilters({ ...filters, gender: g })}
                className={`rounded-md border px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                  filters.gender === g
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-accent"
                }`}
              >
                {g === "all" ? "Semua" : g}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 text-sm font-medium">Fasilitas</div>
          <div className="space-y-2">
            {ALL_FACILITIES.map((f) => (
              <label key={f} className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.facilities.includes(f)}
                  onChange={() => toggleFacility(f)}
                  className="h-4 w-4 rounded border-border accent-[var(--primary)]"
                />
                {f}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
