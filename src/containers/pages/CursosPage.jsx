import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import PaginaCursos from "components/cursos/PaginaCursos";
import Layout from "hocs/layouts/layout";
import { useEffect } from "react";

export default function CursosPage() {
  useEffect(() => {
    document.title = "AdaptLeap | Cursos";
  }, []);
  return (
    <>
      <Navbar />
      <Layout>
        <div className="py-20 bg-black">
          <PaginaCursos />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
