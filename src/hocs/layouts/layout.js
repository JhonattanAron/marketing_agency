import { connect } from "react-redux";
import { motion } from "framer-motion";
function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, transitionDuration: 2 }}
      animate={{ opacity: 1, transitionDuration: 2 }}
      exit={{ opacity: 0, transitionDuration: 2 }}
    >
      {children}
    </motion.div>
  );
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {})(Layout);
