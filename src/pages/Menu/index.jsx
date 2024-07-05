import React from "react";
import { Link } from "react-router-dom";
import { formatInInr } from "../../utils/utils";
import { CarouselData, MenuData } from "../../constants";
import { FaGift } from "react-icons/fa";
import Carousel from "../../components/Carousel";
import { IoAddCircle } from "react-icons/io5";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const MenuItems = ({ categoryTitle, imgSrc, menuItems, index }) => {
  return (
    <div className="page-2-section-1-container-col" key={categoryTitle + index}>
      <div className="col-cover-img">
        <img loading="lazy" src={imgSrc} alt={`image - ${index}`} />
        <h3 className="col-cover-img-title">{categoryTitle}</h3>
      </div>
      <div className="col-menu-name">{categoryTitle}</div>
      <div className="col-menu-items">
        {menuItems.map((data) => {
          return (
            <div className="menu-item" key={data.item}>
              <div className="item-col">
                <p>{data.item}</p>
                <div className="menu-add-item-btn">
                  {/* <i className="fa-solid fa-circle-plus add-item-btn"></i> */}
                  <IoAddCircle className="add-item-btn" />
                </div>
              </div>
              <div className="item-col">
                <p>{data.desc}</p>
                <span>{formatInInr(data.price)}</span>
              </div>

              <div className="item-col-small">
                <div className="item-col-small-content">
                  <p>{data.item}</p>
                  <p>{data.desc}</p>
                  <span>{formatInInr(data.price)}</span>
                </div>

                <div className="item-col-small-cover">
                  <i className="fa-regular fa-heart"></i>
                  <img src={data.itemImgSrc} alt="" />
                  <div className="item-col-small-counter">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <>

      <section className="page-2-section-1">
        <div className="hero-cafe-logo">
          <img src="/images/page-2-section-1-hero-bg.png" alt="" />
        </div>

        <div className="menu-filter">
          <div className="filter-option">Recommended</div>

          <div className="filter-option">
            <i className="fa-regular fa-heart"></i> Favourites
          </div>
        </div>

        <div className="page-2-section-1-container">
          {MenuData[0]["menuHomepage"].map((data, index) => {
            return (
              <MenuItems
                categoryTitle={data.category}
                imgSrc={data.imgSrc}
                menuItems={data.menuItems}
                index={index}
                key={data.menuItems}
              />
            );
          })}
        </div>
      </section>

      <section className="page-2-section-2">
        <div className="page-2-section-title">
          <div className="title-wrapper">
            <h3>OTHER CATEGORIES</h3>
          </div>
        </div>

        <div className="page-2-section-2-categories-wrapper">
          <div className="category-card">
            <div className="category-card-img-wrapper">
              <img src="/images/page-2-section-3-card-1.png" alt="" />
            </div>
            <h3>BURGER & SANDWICHES</h3>
          </div>
          <div className="category-card">
            <div className="category-card-img-wrapper">
              <img src="/images/page-2-section-3-card-2.png" alt="" />
            </div>
            <h3>SALADS</h3>
          </div>
          <div className="category-card">
            <div className="category-card-img-wrapper">
              <img src="/images/page-2-section-3-card-3.png" alt="" />
            </div>
            <h3>DESSERTS / ICE-CREAM</h3>
          </div>
          <div className="category-card">
            <div className="category-card-img-wrapper">
              <img src="/images/page-2-section-3-card-4.png" alt="" />
            </div>
            <h3>VALUE COMBO</h3>
          </div>
        </div>

        <Link className="explore-more-link" to={"/menu/explore-more"}>
          Explore More
        </Link>
      </section>

      <section className="page-2-section-3">
        <div className="page-2-section-title">
          <div className="title-wrapper">
            <h3 className="with-icon">
              BEST OFFERS <FaGift />
            </h3>
          </div>
        </div>

        <Carousel settings={settings}>
          {CarouselData[3]["page-2-carousel"].map((data, index) => {
            return (
              <div
                className="page-2-carousel-card"
                key={Math.floor(Math.random() * index + index * Math.SQRT2)}
              >
                <img src={data.imgSrc} alt={`image-${index}`} />
              </div>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Menu;
