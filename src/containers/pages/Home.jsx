import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/home/Header";

function Home() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Footer />
            </div>
        </Layout>
    )
}

export default Home;