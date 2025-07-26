// Image Project
import img_Ecomerce from "../assets/ecommerce.png";
import img_movie from "../assets/movies.png";
import img_todo from "../assets/todo.png";

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
import icon_figma from "../assets/tech/figma.png";
import icon_next from "../assets/tech/nextjs.svg";

const technology = [
  { name: "html", image: icon_Html },
  { name: "css", image: icon_css },
  { name: "javascript", image: icon_js },
  { name: "react", image: icon_react },
  { name: "node.js", image: icon_node },
  { name: "next.js", image: icon_next },
];

const tools = [
  { name: "tailwind", image: icon_tailwind },
  { name: "bootstrap", image: icon_bootstrap },
  { name: "reactTestingLibrary", image: icon_rtl },
  { name: "jest", image: icon_jest },
  { name: "npm", image: icon_npm },
  { name: "figma", image: icon_figma },
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

const profil =
  "Saya adalah seorang Front-End Web Developer dengan pengalaman lebih dari 2 tahun dalam membangun website dan aplikasi web yang fungsional serta menarik secara visual. Spesialisasi saya meliputi pengembangan antarmuka responsif, optimasi performa situs, serta integrasi API. Saya terbiasa bekerja dengan tim lintas fungsi dan mengutamakan pengalaman pengguna (UX) dalam setiap proyek. Beberapa teknologi yang saya gunakan setiap hari: - HTML5, CSS3 (Tailwind) - JavaScript (ES6+), React.js, Next.js - Git, GitHub - REST API, JSON - Figma (untuk kolaborasi desain)";

const project = [
  {
    id: 1,
    image: img_Ecomerce,
    judul: "E-Commerce Dashboard",
    desc: "Sebuah platform belanja online modern yang dirancang untuk memberikan pengalaman pengguna yang cepat, aman, dan responsif. Fitur utama mencakup katalog produk dinamis, keranjang belanja, sistem pembayaran terintegrasi, manajemen pengguna, dan dashboard admin",
    tech: ["Vue.js", "Bootstrap"],
    visit: "visit website",
    link: "https://cepiseptiyana.github.io/Pangcuy/",
  },
  {
    id: 2,
    image: img_movie,
    judul: "Landing Page Movies",
    desc: "Platform pencarian dan eksplorasi film terkini. Temukan informasi lengkap, trailer, rating, dan ulasan dari berbagai genre film favoritmu.",
    tech: ["React.js", "Tailwinds"],
    visit: "visit website",
    link: "https://cepiseptiyana.github.io/reactMv/",
  },

  {
    id: 3,
    image: img_todo,
    judul: "Todo List",
    desc: "Aplikasi ini dirancang untuk membantu pengguna mengatur aktivitas sehari-hari dengan antarmuka yang bersih dan responsif. Dibangun sebagai proyek portfolio untuk mendemonstrasikan kemampuan saya dalam pengembangan front-end modern menggunakan React.js",
    tech: ["React.js", "Tailwinds"],
    visit: "visit website",
    link: "https://dicoding-react-dasar.vercel.app/",
  },
];

export { technology, profil, project, skill_Teknis, tools };
