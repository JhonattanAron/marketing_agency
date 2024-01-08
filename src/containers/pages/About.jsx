import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/About/Header";

function About() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="pt-28">
          <Header />
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default About;
