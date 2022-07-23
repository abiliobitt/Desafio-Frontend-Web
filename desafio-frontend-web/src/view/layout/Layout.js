import PropTypes from "prop-types";
import styles from "./Layout.module.css";

import Header from "./header/Header.js";
import Footer from "./footer/Footer.js";
import Content from "./content/Content.js";

import NPS from "../contents/nps/NPS";

function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Header />
      <Content>
        {children}
        <NPS/>
      </Content>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
