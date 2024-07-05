import React, { useEffect, useState, useRef, useMemo } from "react";
import MenuBanner from "../../components/MenuBanner";
import { MenuData } from "../../constants";
import { FaArrowLeft, FaArrowRight, FaArrowCircleDown } from "react-icons/fa";
import { formatInInr } from "../../utils/utils";

const SeeMoreMenu = () => {
  const [selected, setSelected] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [selectedMenuData, setSelectedMenuData] = useState(null);

  const filterSelected = (data) => {
    setSelected(data.title);
    setBannerImg(data.bannerCoverSrc);
    setSelectedMenuData(data["categoryItems"]);
  };

  useEffect(() => {
    // Set the selected title to the title of the first button when the component mounts
    setSelected(MenuData[2]["see-more-page-menu-data"][0].title);
    setBannerImg(MenuData[2]["see-more-page-menu-data"][0].bannerCoverSrc);
    setSelectedMenuData(
      MenuData[2]["see-more-page-menu-data"][0]["categoryItems"]
    );
  }, []); // Empty dependency array to run this effect only once on mount
  
  const memoizedMenuData = useMemo(() => selectedMenuData, [selectedMenuData]);
  return (
    <div className="see-more-page">
      {/* <NavBar variant /> */}
      <MenuBanner src={bannerImg} />

      <div className="see-more-menu-slider">
        <FaArrowLeft className="icon-left" />

        <ul className="tabs">
          {MenuData[2]["see-more-page-menu-data"].map((data) => {
            return (
              <li key={data.id}>
                <button
                  onClick={() => filterSelected(data)}
                  className={`tab ${selected === data.title ? "active" : ""}`}
                >
                  {data.title}
                </button>
              </li>
            );
          })}
        </ul>
        <FaArrowRight className="icon-right" />
      </div>

      <section className="page-2-section-2-see-more">
        <div className="see-more-container">
          {memoizedMenuData != null &&
            memoizedMenuData.map((data, index) => {
              return (
                <div
                  key={Math.random() * index}
                  className="see-more-container-item"
                >
                  <div className="item-name-type">
                    <div className="item-name">{data.category}</div>
                    <div className="item-type">
                      <div className="marker veg"></div>
                    </div>
                    /
                    <div className="item-type">
                      <div className="marker non-veg"></div>
                    </div>
                  </div>

                  <div className="menu-item-wrapper">
                    {data?.items?.map((item, index) => {
                      return (
                        <MenuItem
                          item={item}
                          index={index}
                          key={Math.random() * index}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
        <FaArrowCircleDown className="down-arrow" />
      </section>
    </div>
  );
};

const MenuItem = ({ item, index }) => {
  return (
    <>
      <div className="item">
        <div className="item-row">
          <div className="item-content">
            <p>{item.name}</p>
            <div className="item-type">
              <div
                className={`marker ${item.type === "veg" ? "veg" : "non-veg"}`}
              ></div>
            </div>
            <div className="item-row-counter">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <p>{formatInInr(item.price)}</p>
        </div>
        <div className="item-row">
          <button className="item-btn">ADD +</button>
          <img src={item?.imgSrc} alt={`image-${index}`} />
          <i className="fa-regular fa-heart"></i>

          <div className="item-counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeMoreMenu;
