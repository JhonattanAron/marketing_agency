import CuadrosBg from "components/utils/CuadrosBg";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import RegistroCurso from "./RegistroCurso";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function HeaderCursos(params) {
  let curso = params.cursoData;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section
      style={{ backgroundColor: curso.bg }}
      className={`py-8  bg-gradient  md:py-16 `}
    >
      <CuadrosBg fill={curso.fill} />
      <div className="max-w-5xl px-5 mx-auto">
        <div className="flex flex-col justify-between -mx-5 md:flex-row">
          <div
            style={{ backgroundColor: curso.bg }}
            className={`relative drop-shadow-2xl flex-shrink-0 max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg`}
          >
            <CuadrosBg fill={curso.fill} />
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
              <img
                className="relative w-40"
                src={curso.portada}
                alt="shopping"
              />
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
              <span className="block opacity-75">{curso.tipo}</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">
                  {curso.nombre}
                </span>
                <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
                  {curso.precio}$
                </span>
              </div>
            </div>
          </div>
          <div className="w-full z-10 px-5 md:w-auto ">
            <div className="my-20 flex justify-center align-middle flex-col">
              <h2 className="text-4xl text-center font-bold tracking-tight text-white">
                Inicio: <br /> Marzo del 2024
              </h2>
              <button
                onClick={handleOpen}
                className={`p-3 bg-black drop-shadow-2xl m-3 rounded-xl cursor-pointer`}
              >
                <h2 className="text-4xl text-center font-bold tracking-tight text-white">
                  Quiero Registrame
                </h2>
              </button>
            </div>
            <div className="flex justify-center text-center text-white">
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>0</span>
                  <span>1</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75">Day</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>1</span>
                  <span>8</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>5</span>
                  <span>0</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>1</span>
                  <span>9</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Second</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <div className="my-3">
            <Button onClick={handleClose} variant="contained" color="error">
              X
            </Button>
          </div>

          <RegistroCurso curso={curso} />
        </div>
      </Modal>
    </section>
  );
}
