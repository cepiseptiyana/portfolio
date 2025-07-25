import { useRef } from "react";
import { validate } from "email-validator";

const Contact = () => {
  const username = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const handleFormContact = () => {
    if (
      username.current.value &&
      email.current.value &&
      message.current.value != ""
    ) {
      const validasiEmail = validate(email.current.value);
      if (validasiEmail) {
        window.location.href = "https://wa.me/6285659519463";
      } else {
        alert("email salah");
      }
    } else {
      alert("isi dengan lengkap");
    }
  };

  return (
    <>
      <section className="section_contact bg-black pt-5 w-full h-screen flex justify-center items-center text-white">
        <div className="wrapper_contact lg:w-[80%] md:w-[90%] w-[100%] h-[100%] flex md:flex-row flex-col justify-center items-center gap-2">
          {/* column_1 */}
          <div className="wrapper_text pl-2 pr-2 md:w-[50%] w-[90%] h-[100%] font-[Lato,sans-serif] lg:text-lg md:text-md sm:text-sm bg-stone-800 hover:shadow-2xl hover:shadow-white hover:translate-y-[-5px] hover:rounded-xl flex flex-col gap-2 justify-center items-center transition-all duration-300">
            <h1 className="capitalize lg:text-4xl md:text-3xl text-4xl">
              Let's chat
            </h1>
            <p className="text-white text-center">
              whether you have question, want to start a project or simply want
              to connect fell free to send me a message in the connect form
            </p>
          </div>

          {/* column_2 */}
          <div className="wrapper_input pl-2 pr-2 w-[90%] h-[70%] bg-blue-900 hover:shadow-2xl hover:shadow-white hover:translate-y-[-5px] hover:rounded-xl flex flex-col justify-center items-center gap-2 transition-all duration-300">
            <h1 className="capitalize lg:text-4xl md:text-3xl text-4xl">
              contact me
            </h1>

            <ul className="w-[90%] font-[Lato,sans-serif] capitalize flex flex-col gap-2 lg:text-lg md:text-md sm:text-sm">
              <li className="flex flex-col">
                <label htmlFor="username">name :</label>
                <input
                  ref={username}
                  className="bg-white text-black rounded-xl p-1"
                  type="text"
                  id="username"
                  placeholder="name"
                />
              </li>
              <li className="flex flex-col">
                <label htmlFor="email">email :</label>
                <input
                  ref={email}
                  className="bg-white text-black rounded-xl p-1"
                  type="email"
                  id="email"
                  placeholder="email"
                />
              </li>
              <li className="flex flex-col">
                <label htmlFor="message">message :</label>
                <input
                  ref={message}
                  className="bg-white text-black rounded-xl p-1"
                  type="text"
                  id="message"
                  placeholder="message"
                />
              </li>
            </ul>

            <button
              onClick={handleFormContact}
              className="uppercase font-bold bg-blue-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-400 transition-all duration-300"
            >
              contact us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
