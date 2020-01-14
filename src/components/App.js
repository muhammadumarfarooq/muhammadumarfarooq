import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import "./_app.scss";

const App = () => {
  return (
    <Fragment>
      <Navbar />

      <Login />

      <Footer />
    </Fragment>
  );
};

export default App;
