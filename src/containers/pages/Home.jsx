import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";

function Home() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Home
                <Footer />
            </div>
        </Layout>
    )
}

export default Home;