import React from "react";

const MenuBanner = ({ src }) => {
  return (
    <section className="menu-page-banner">
      <img loading="lazy" src={src} alt="Banner" />
    </section>
  );
};

export default MenuBanner;
