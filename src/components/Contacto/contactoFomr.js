import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function FomrContact() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Servicios = [
    "Servicio Web",
    "Necesito una Pagina Web",
    "Necesito una Aplicacion Web",
    "Necesito una Aplicacion de Escritorio",
    "Necesito una Aplicacion de Mobil",
    "Necesito Marketing para mi pagina web",
    "Necesito Servicios de Blockchain",
    "Necesito Servicios de Inteligencia Artificial",
    "Quiero implementar IA a mi web",
  ];

  return (
    <form class="flex w-full  mx-auto">
      <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow ">
        <div class="mb-6 text-3xl font-light text-center text-gray-800 ">
          Ponte en Contacto con Nosotros
        </div>
        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div class="col-span-2 lg:col-span-1">
            <div class=" relative ">
              <input
                type="text"
                id="contact-form-name"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="col-span-2 lg:col-span-1">
            <div class=" relative ">
              <input
                type="text"
                id="contact-form-email"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="email"
              />
            </div>
          </div>
          <div class="col-span-2 lg:col-span-1">
            <div class=" relative ">
              <FormControl fullWidth variant="filled">
                <InputLabel id="servicios">Servicios de Desarrollo</InputLabel>
                <Select
                  labelId="servicios"
                  id="demo-simple-select"
                  value={"Servicio de Desarrollo Web"}
                  label="Servicios de Desarrollo de Software"
                  onChange={handleChange}
                >
                  {Servicios.map((servicio) => (
                    <MenuItem value={servicio}>{servicio}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div class="col-span-2">
            <label class="text-gray-700 mt-2" for="name">
              <textarea
                class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
              ></textarea>
            </label>
          </div>
          <div class="col-span-2 text-right">
            <button
              type="submit"
              class="py-2 px-4 my-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Contactanos Mediante Correo
            </button>
            <button
              type="submit"
              class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Contactanos Mediante Correo y WhatsApp
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
