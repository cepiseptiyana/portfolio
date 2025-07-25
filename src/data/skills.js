import ecommerceImg from "../assets/ecommerce.png";
import moviesImg from "../assets/movies.png";

const skills = [
  "html",
  "css",
  "javascript",
  "react.js",
  "vitest",
  "react testing library",
  "responsive design",
  "pinia",
  "tailwinds",
  "atomic design",
  "bootstrap",
  "figma",
];

const education = [
  "Universitas Terbuka",
  "Program Studi Sistem Informasi - Semester 7",
  "2021 - Sekarang",
  "Saat ini saya sedang menempuh pendidikan S1 di Universitas Terbuka, jurusan Sistem Informasi. Fokus studi saya mencakup pemrograman, pengelolaan basis data, analisis sistem, serta pengembangan perangkat lunak. Sistem belajar mandiri di UT juga melatih saya untuk bertanggung jawab dan disiplin dalam menyelesaikan tugas-tugas secara mandiri.",
];

const profil =
  "Saya adalah seorang Front-End Web Developer dengan pengalaman lebih dari 2 tahun dalam membangun website dan aplikasi web yang fungsional serta menarik secara visual. Spesialisasi saya meliputi pengembangan antarmuka responsif, optimasi performa situs, serta integrasi API. Saya terbiasa bekerja dengan tim lintas fungsi dan mengutamakan pengalaman pengguna (UX) dalam setiap proyek. Beberapa teknologi yang saya gunakan setiap hari: - HTML5, CSS3 (Tailwind) - JavaScript (ES6+), React.js, Next.js - Git, GitHub - REST API, JSON - Figma (untuk kolaborasi desain)";

const project = [
  {
    id: 1,
    image: ecommerceImg,
    judul: "E-Commerce Dashboard",
    desc: "Sebuah platform belanja online modern yang dirancang untuk memberikan pengalaman pengguna yang cepat, aman, dan responsif. Fitur utama mencakup katalog produk dinamis, keranjang belanja, sistem pembayaran terintegrasi, manajemen pengguna, dan dashboard admin",
    tech: ["Vue.js", "Bootstrap"],
    visit: "visit website",
    link: "https://cepiseptiyana.github.io/Pangcuy/",
  },
  {
    id: 2,
    image: moviesImg,
    judul: "Landing Page Movies",
    desc: "Platform pencarian dan eksplorasi film terkini. Temukan informasi lengkap, trailer, rating, dan ulasan dari berbagai genre film favoritmu.",
    tech: ["React.js", "Tailwinds"],
    visit: "visit website",
    link: "https://cepiseptiyana.github.io/reactMv/",
  },
];

export { skills, education, profil, project };
