import pdf_html from "../../../assets/fileCv/html.pdf";
import pdf_css from "../../../assets/fileCv/css.pdf";
import pdf_javascript_1 from "../../../assets/fileCv/javascript.pdf";
import pdf_javascript_2 from "../../../assets/fileCv/javascriptSoloLearn.pdf";
import pdf_react from "../../../assets/fileCv/react.pdf";

export const certifications = [
  {
    name: "react",
    file: pdf_react,
    color: "bg-red-500",
    judul: "Dicoding - Membangun Aplikasi Web dengan React",
    text: "Telah menyelesaikan kelas React di Dicoding yang membahas pembuatan aplikasi web interaktif menggunakan React.js, termasuk pengelolaan state, routing, dan komponen modular. Proyek akhir mencakup pembuatan aplikasi berbasis SPA (Single Page Application).",
  },
  {
    name: "html",
    file: pdf_html,
    color: "bg-blue-700",
    judul: "SoloLearn - HTML Fundamentals",
    text: "Menguasai dasar-dasar HTML melalui kursus di SoloLearn, termasuk struktur dokumen HTML, penggunaan elemen semantik, dan praktik pembuatan halaman web yang sesuai standar.",
  },
  {
    name: "css",
    file: pdf_css,
    color: "bg-yellow-700",
    judul: "HackerRank - CSS Skills Certification",
    text: "Lulus ujian sertifikasi CSS di HackerRank yang menguji pemahaman tentang tata letak, styling responsif, penggunaan flexbox/grid, dan teknik CSS lanjutan dalam pengembangan web.",
  },
  {
    name: "javascript",
    file: pdf_javascript_1,
    color: "bg-yellow-400",
    judul: "SoloLearn - JavaScript Fundamentals",
    text: "Menyelesaikan kursus JavaScript dasar di SoloLearn yang mencakup tipe data, pengkondisian, perulangan, fungsi, dan DOM manipulation, sebagai dasar dalam pengembangan web interaktif.",
  },
  {
    file: pdf_javascript_2,
    name: "javascript",
    color: "bg-cyan-500",
    judul: "HackerRank - JavaScript Skills Certification",
    text: "Berhasil menyelesaikan ujian JavaScript di HackerRank yang menilai kemampuan dalam penulisan kode efisien, manipulasi data, dan pemahaman konsep JavaScript modern seperti closures dan callbacks",
  },
];
