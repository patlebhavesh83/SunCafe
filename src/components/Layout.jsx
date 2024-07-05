import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {/* <NavBar /> */}
      <main className="main-container">
        <Outlet />
        {/* {children} */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
