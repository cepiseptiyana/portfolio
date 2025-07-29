import React from "react";

const Education = () => {
  return (
    <>
      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <h1 className="text-green-500 text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1 shadow-md shadow-white">
            education
          </h1>
        </header>

        <div className="p-5">
          <p className="font-[Lato,sans-serif] text-gray-300 md:text-lg text-sm">
            Universitas Terbuka
          </p>
          <p className="font-[Lato,sans-serif] text-gray-300 md:text-lg text-sm">
            Program Studi Sistem Informasi - Semester 7
          </p>
          <p className="font-[Lato,sans-serif] text-gray-300 md:text-lg text-sm">
            2021 - Sekarang
          </p>
          <p className="font-[Lato,sans-serif] text-gray-300 md:text-lg text-sm">
            Saat ini saya sedang menempuh pendidikan S1 di Universitas Terbuka,
            jurusan Sistem Informasi. Fokus studi saya mencakup pemrograman,
            pengelolaan basis data, analisis sistem, serta pengembangan
            perangkat lunak. Sistem belajar mandiri di UT juga melatih saya
            untuk bertanggung jawab dan disiplin dalam menyelesaikan tugas-tugas
            secara mandiri
          </p>
        </div>
      </section>
    </>
  );
};

export default Education;
