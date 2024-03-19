import { useState } from "react";

export default function FormContact() {
  const [emailData, setEmailData] = useState({
    nombre: "",
    email: "",
    numero: "",
    body: "",
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8081/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert("Correo enviado correctamente");
      } else {
        throw new Error("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Error al enviar el correo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full  mx-auto">
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow ">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 ">
          Ponte en Contacto con Nosotros
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative p-5 ">
              <input
                type="text"
                value={emailData.nombre}
                name="nombre"
                onChange={handleChange}
                id="contact-form-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Name"
              />
            </div>
            <div className="relative p-5">
              <input
                type="text"
                value={emailData.numero}
                name="numero"
                onChange={handleChange}
                id="contact-form-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="+593 969849653"
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative p-5">
              <input
                type="text"
                value={emailData.email}
                name="email"
                onChange={handleChange}
                id="contact-form-email"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="email"
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative "></div>
          </div>
          <div className="col-span-2">
            <label className="text-gray-700 mt-2" for="name">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                value={emailData.body}
                onChange={handleChange}
                placeholder="Enter your comment"
                name="body"
                rows="5"
                cols="40"
              ></textarea>
            </label>
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="py-2 px-4 my-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Contactanos Mediante Correo
            </button>
            <button
              type="submit"
              className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Contactanos Mediante Correo y WhatsApp
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
