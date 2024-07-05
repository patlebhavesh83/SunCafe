import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/Header";

const MenuRouteWrapper = () => {
  return (
    <>
      <NavBar variant  />
      <Outlet />
    </>
  );
};

export default MenuRouteWrapper;
