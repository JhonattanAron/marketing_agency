import { Route, Routes, useLocation } from "react-router-dom";
import Home from "containers/pages/Home";
import Error404 from "containers/errors/Error404";
import { AnimatePresence } from "framer-motion";
import About from "containers/pages/About";
import Blog from "containers/pages/Blog";
import Carrers from "containers/pages/Carrers";
import Cases from "containers/pages/Cases";
import Contact from "containers/pages/Contact";
import Services from "containers/pages/Services";
import Cursos from "containers/pages/Cursos";
import CursosPage from "containers/pages/CursosPage";

export default function RoutesAnimated() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/*Error Display*/}
        <Route path="*" element={<Error404 />} />
        {/*Home display*/}
        <Route path="/" element={<Home />} />
        {/*About display*/}
        <Route path="/nosotros" element={<About />} />
        {/*Blog display*/}
        <Route path="/blog" element={<Blog />} />
        {/*Carreras display*/}
        <Route path="/carreras" element={<Carrers />} />
        {/*Casos display*/}
        <Route path="/casos" element={<Cases />} />
        {/*Contacto display*/}
        <Route path="/contacto" element={<Contact />} />
        {/*Servicios display*/}
        <Route path="/servicios" element={<Services />} />
        {/*Cursos display*/}
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:cursoParam" element={<CursosPage />} />
      </Routes>
    </AnimatePresence>
  );
}
