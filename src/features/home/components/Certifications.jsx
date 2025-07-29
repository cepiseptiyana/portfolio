const List_certifications = (props) => {
  const { certifications } = props;

  if (certifications.length != 0) {
    const list = certifications.map((data, index) => {
      return (
        <tr key={index}>
          <td className="flex items-start pt-2 pr-2">
            <h1>{data.judul}</h1>
          </td>

          <td className="pt-2 pr-2">
            <p>{data.text}</p>
          </td>

          <td>
            <nav className="mt-5">
              <a
                className={`capitalize w-[100%] sm:text-sm text-xs text-center inline-block ${data.color} p-1 text-white rounded-md hover:bg-blue-500 duration-200`}
                href={data.file}
              >
                {data.name}
              </a>
            </nav>
          </td>
        </tr>
      );
    });

    return list;
  } else {
    return (
      <>
        <p>certifications null</p>
      </>
    );
  }
};

const Certifications = (props) => {
  const { certifications } = props;

  return (
    <>
      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <h1 className="bg-violet-500 text-white text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1">
            certificate
          </h1>
        </header>

        <ul className="text-white pt-5 sm:text-sm text-xs">
          <table>
            <thead>
              <tr className="text-left">
                <th>judul</th>
                <th>deskripsi</th>
                <th>certificate</th>
              </tr>
            </thead>

            <tbody>
              <List_certifications certifications={certifications} />
            </tbody>
          </table>
        </ul>
      </section>
    </>
  );
};

export default Certifications;
