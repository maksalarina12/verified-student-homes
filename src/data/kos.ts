import kos1 from "@/assets/kos-1.jpg";
import kos2 from "@/assets/kos-2.jpg";
import kos3 from "@/assets/kos-3.jpg";
import kos4 from "@/assets/kos-4.jpg";

export type Gender = "putra" | "putri" | "campur";

export type Kos = {
  id: string;
  name: string;
  area: string;
  address: string;
  price: number;
  gender: Gender;
  facilities: string[];
  image: string;
  gallery: string[];
  verified: boolean;
  rating: number;
  reviews: { name: string; rating: number; text: string }[];
  description: string;
  owner: string;
  phone: string;
};

export const KOS_LIST: Kos[] = [
  {
    id: "kos-melati",
    name: "Kos Melati Syiah Kuala",
    area: "Syiah Kuala",
    address: "Jl. T. Nyak Arief, Kopelma Darussalam, Banda Aceh",
    price: 950000,
    gender: "putri",
    facilities: ["WiFi", "AC", "Kamar Mandi Dalam", "Parkir Motor"],
    image: kos1,
    gallery: [kos1, kos4, kos3],
    verified: true,
    rating: 4.8,
    reviews: [
      { name: "Aisyah", rating: 5, text: "Bersih, aman, dekat kampus USK." },
      { name: "Rina", rating: 4, text: "Pemilik ramah, fasilitas sesuai foto." },
    ],
    description:
      "Kos eksklusif khusus putri, 5 menit jalan kaki ke Universitas Syiah Kuala. Lingkungan tenang dan aman 24 jam.",
    owner: "Ibu Cut Nyak",
    phone: "+62 812-3456-7890",
  },
  {
    id: "kos-darussalam",
    name: "Kos Darussalam Residence",
    area: "Darussalam",
    address: "Jl. Inong Balee, Darussalam, Banda Aceh",
    price: 1200000,
    gender: "putra",
    facilities: ["WiFi", "AC", "Dapur Bersama", "Laundry", "CCTV"],
    image: kos2,
    gallery: [kos2, kos1, kos3],
    verified: true,
    rating: 4.6,
    reviews: [
      { name: "Faisal", rating: 5, text: "Lokasi strategis, internet kencang." },
    ],
    description:
      "Hunian modern untuk mahasiswa putra dekat kampus UIN Ar-Raniry dan USK. Sudah termasuk listrik & air.",
    owner: "Bapak Teuku Iskandar",
    phone: "+62 813-9876-5432",
  },
  {
    id: "kos-prada",
    name: "Kos Prada Banda Aceh",
    area: "Banda Aceh",
    address: "Jl. Prada Utama, Lueng Bata, Banda Aceh",
    price: 750000,
    gender: "campur",
    facilities: ["WiFi", "Kipas Angin", "Parkir Mobil"],
    image: kos3,
    gallery: [kos3, kos2, kos1],
    verified: true,
    rating: 4.3,
    reviews: [
      { name: "Dimas", rating: 4, text: "Harga ramah kantong mahasiswa." },
    ],
    description:
      "Pilihan ekonomis dengan akses mudah ke pusat kota Banda Aceh.",
    owner: "Ibu Maryam",
    phone: "+62 821-1122-3344",
  },
  {
    id: "kos-tgk-chik",
    name: "Kos Tgk. Chik Ditiro",
    area: "Syiah Kuala",
    address: "Jl. Tgk. Chik Ditiro, Banda Aceh",
    price: 1500000,
    gender: "putri",
    facilities: ["WiFi", "AC", "Kamar Mandi Dalam", "Water Heater", "Laundry"],
    image: kos4,
    gallery: [kos4, kos1, kos2],
    verified: true,
    rating: 4.9,
    reviews: [
      { name: "Salsa", rating: 5, text: "Premium, fasilitas lengkap, aman." },
      { name: "Putri", rating: 5, text: "Highly recommended!" },
    ],
    description:
      "Kos premium dengan fasilitas lengkap untuk mahasiswi yang mencari kenyamanan ekstra.",
    owner: "Ibu Nurul",
    phone: "+62 822-5566-7788",
  },
  {
    id: "kos-lampineung",
    name: "Kos Lampineung Asri",
    area: "Banda Aceh",
    address: "Jl. T. Hasan Dek, Lampineung, Banda Aceh",
    price: 850000,
    gender: "putra",
    facilities: ["WiFi", "Kipas Angin", "Dapur Bersama", "Parkir Motor"],
    image: kos2,
    gallery: [kos2, kos3],
    verified: true,
    rating: 4.4,
    reviews: [{ name: "Reza", rating: 4, text: "Tetangga kos enak, tenang." }],
    description: "Lingkungan asri di Lampineung, dekat ke berbagai kampus.",
    owner: "Bapak Hasan",
    phone: "+62 852-1010-2020",
  },
  {
    id: "kos-rukoh",
    name: "Kos Rukoh Hijau",
    area: "Darussalam",
    address: "Jl. Utama Rukoh, Darussalam, Banda Aceh",
    price: 650000,
    gender: "campur",
    facilities: ["WiFi", "Kipas Angin"],
    image: kos1,
    gallery: [kos1, kos3],
    verified: true,
    rating: 4.1,
    reviews: [{ name: "Andi", rating: 4, text: "Cocok buat anak rantau hemat." }],
    description: "Kos sederhana dengan harga sangat terjangkau di Rukoh.",
    owner: "Ibu Yanti",
    phone: "+62 853-3030-4040",
  },
];

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
