import React from "react";
import NavBar from "../../components/Header";
import { Outlet } from "react-router-dom";

const BlogRouteWrapper = () => {
  return (
    <>
      <NavBar />
      <div className="blog-page post-page">
        <Outlet />
      </div>
    </>
  );
};

export default BlogRouteWrapper;
