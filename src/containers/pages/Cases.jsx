import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/cases/Header";
import CasesList from "components/cases/cases_list";
import BotonWhastApp from "components/navigation/BotonWhastApp";

function Cases() {
  return (
    <>
      <Navbar />

      <Layout>
        <div className="pt-28">
          <Header />
          <CasesList />
        </div>
      </Layout>
      <Footer />
      <BotonWhastApp />
    </>
  );
}

export default Cases;
