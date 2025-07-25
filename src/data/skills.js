import ecommerceImg from "../assets/ecommerce.png";
import moviesImg from "../assets/movies.png";
import icon_Html from "../assets/tech/html-5.png";
import icon_css from "../assets/tech/css-3.png";
import icon_js from "../assets/tech/js.png";
import icon_bootstrap from "../assets/tech/bootstrap.png";
import icon_tailwind from "../assets/tech/tailwind.png";
import icon_react from "../assets/tech/react.png";
import icon_rtl from "../assets/tech/rtl.png";
import icon_jest from "../assets/tech/jest.png";
import icon_node from "../assets/tech/node.png";
import icon_npm from "../assets/tech/npm.png";

const technology = [
  icon_Html,
  icon_css,
  icon_js,
  icon_bootstrap,
  icon_tailwind,
  icon_react,
  icon_rtl,
  icon_jest,
  icon_node,
  icon_npm,
];

const skill_Teknis = [
  "🔬 Atomic Design: Menerapkan prinsip desain komponen UI modular dan reusable berdasarkan struktur atom, molekul, organisme, template, dan halaman",
  "🚀 CI/CD (Continuous Integration & Deployment): Mengotomatisasi proses build, test, dan deployment menggunakan GitHub Actions",
  "📦 Component-Based Architecture: Membangun aplikasi berbasis komponen mandiri dan scalable, terutama dalam React/Vue.",
  "⚙️ Version Control (Git): Kolaborasi tim menggunakan branching workflow, PR review, dan git rebase / squash dengan GitHub.",
  "🎨 Design System Integration: Bekerja dengan Figma untuk mendefinisikan dan menyinkronkan UI guidelines antar tim dev/designer.",
  "🧪 Automated Testing: Menulis unit & integration tests menggunakan Jest, React Testing Library,",
  "🖌️ CSS & BEM Menulis stylesheet yang terstruktur, konsisten, dan mudah dipelihara menggunakan metodologi BEM (Block Element Modifier).",
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

export { technology, education, profil, project, skill_Teknis };
