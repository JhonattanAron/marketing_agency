import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import BotonWhastApp from "components/navigation/BotonWhastApp";

function Carrers() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="pt-28">Carrers</div>
      </Layout>
      <Footer />
      <BotonWhastApp />
    </>
  );
}

export default Carrers;
