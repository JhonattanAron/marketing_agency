import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";

function Carrers() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="pt-28">Carrers</div>
      </Layout>
      <Footer />
    </>
  );
}

export default Carrers;
