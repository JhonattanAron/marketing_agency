import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import CursosComponent from "components/cursos/Cursos";

export default function Cursos() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="py-28 bg-black ">
          <CursosComponent />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
