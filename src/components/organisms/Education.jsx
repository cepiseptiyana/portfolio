import React from "react";

// Fragments
import Heading from "../Fragments/Elements/Heading";
import Paragraph from "../Fragments/Elements/Paragraph";

const Education = () => {
  return (
    <>
      <Paragraph className="font-[Lato,sans-serif] text-gray-300 md:text-lg sm:text-sm text-xs">
        Universitas Terbuka
      </Paragraph>
      <Paragraph className="font-[Lato,sans-serif] text-gray-300 md:text-lg sm:text-sm text-xs">
        Program Studi Sistem Informasi - Semester 7
      </Paragraph>
      <Paragraph className="font-[Lato,sans-serif] text-gray-300 md:text-lg sm:text-sm text-xs">
        2021 - Sekarang
      </Paragraph>
      <Paragraph className="font-[Lato,sans-serif] text-gray-300 md:text-lg sm:text-sm text-xs">
        Saat ini saya sedang menempuh pendidikan S1 di Universitas Terbuka,
        jurusan Sistem Informasi. Fokus studi saya mencakup pemrograman,
        pengelolaan basis data, analisis sistem, serta pengembangan perangkat
        lunak. Sistem belajar mandiri di UT juga melatih saya untuk bertanggung
        jawab dan disiplin dalam menyelesaikan tugas-tugas secara mandiri
      </Paragraph>
    </>
  );
};

export default Education;
