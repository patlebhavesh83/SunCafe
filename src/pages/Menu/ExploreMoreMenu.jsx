import React from "react";
import NavBar from "../../components/Header";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuBanner from "../../components/MenuBanner";
import { MenuData } from "../../constants";

const ExploreMoreMenu = () => {
  return (
    <div className="explore-more-page">
      {/* <NavBar variant /> */}
      <MenuBanner src={"/images/page-2-explore-more-bg.png"} />
      <section className="page-2-section-2-explore-more">
        <div className="page-2-section-title explore-more-title">
          <div className="title-wrapper explore-more-title">
            <h3>WHAT’S ON YOUR MIND?</h3>
          </div>
        </div>

        <div className="page-2-section-1-explore-more-container">
          {MenuData[1]["explore-more-page-menu-data"].map((data, index) => {
            return (
              <div
                className="container-item"
                key={`${data.imgSrc}+${data.caption}-${Math.random() * index + 1} `}
              >
                <div className="container-item-cover-img">
                  <img loading="eager" src={data.imgSrc} alt={`image - ${index}`} />
                </div>
                <h3>{data.caption}</h3>
              </div>
            );
          })}
        </div>

        <div className="see-more-link">
          <FaArrowCircleDown className="arrow-down" />
          <Link to={"/menu/see-more"}>See More</Link>
        </div>
      </section>
    </div>
  );
};

export default ExploreMoreMenu;
