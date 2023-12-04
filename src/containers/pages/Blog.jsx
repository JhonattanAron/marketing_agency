import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";

function Blog() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Blog
                <Footer />
            </div>
        </Layout>
    )
}

export default Blog;