import React, { useEffect } from "react";
import NavBar from "../../components/Header";
import { useRef } from "react";
import { CartData } from "../../constants";
import { formatInInr } from "../../utils/utils";
import { FaTrashAlt } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import Carousel from "../../components/Carousel";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};
const Cart = () => {
  //   const Div = useRef(null);

  //   useEffect(() => {
  //     let a = document.querySelector(".cart-page");
  //     console.log(a);
  //   }, []);

  return (
    <>
      <NavBar />
      {/* <div ref={Div} className="cart-page-container"> */}
      <div className="cart-page-container">
        <section className="cart-section-container">
          <div className="cart-row-item">
            <div className="item-detail-wrapper">
              <h3>3 Items Selected</h3>
              <h3>Explore Menu</h3>
            </div>

            <div className="menu-items-cart-wrapper">
              {CartData[0]["cart-page-section-1"].map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`menu-cart-item ${index % 2 == 0 ? "gray" : ""}`}
                  >
                    <div className="menu-item-cover-img">
                      <img src={item.imgSrc} alt={`image-${index}`} />
                    </div>
                    <div className="menu-item-content">
                      <div className="item-name-cost">
                        <h3>{item.name}</h3>
                        <h3>{formatInInr(item.price)}</h3>
                      </div>
                      <div className="item-desc-counter">
                        <p>{item.itemDesc}</p>

                        <div className="cart-item-counter">
                          <FaTrashAlt className="counter-icon" />
                          <span>1</span>
                          <IoAddCircle className="counter-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-items-meal-carousel">
              <h3>Complete your meal with</h3>
              <Carousel settings={settings}>
                {CartData[0]["cart-page-section-1"].map((data, index) => {
                  return (
                    <div key={index} className="meals-carousel-item">
                      <img src={data.imgSrc} alt="" />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>

          <div className="cart-row-item">
            <h3>Choose a delivery address</h3>
            <div className="cart-item-details-wrapper">
              <div className="cart-address">
                <div className="current-address">
                  <h3>Current Address</h3>
                  <div className="current-address-wrapper">
                    <p>Samta Colony, Raipur</p>
                    <button>Change</button>
                  </div>
                </div>
                <div className="my-address">
                  <div className="current-address-wrapper">
                    <p>Login to use your saved addresses</p>
                    <button>My Address</button>
                  </div>
                </div>
              </div>

              <div className="cart-offers">
                <h3>Offers</h3>

                <div className="offer-wrapper">
                  <div>
                    <h3>Select offer / Apply coupon</h3>
                    <p>Get discount with your order</p>
                  </div>
                  <button>{">"}</button>
                </div>
              </div>

              <div className="cart-price-details">
                <h3>Price Details</h3>
                <div className="price-detail-wrapper">
                  <div className="detail-wrapper">
                    <h3>Sub Total</h3>
                    <p>190</p>
                  </div>

                  <div className="detail-wrapper">
                    <h3>Discount</h3>
                    <p>-</p>
                  </div>

                  <div className="detail-wrapper">
                    <h3>Taxes and Charges</h3>
                    <p>32.2</p>
                  </div>

                  <div className="grand-total-wrap">
                    <div className="detail-wrapper">
                      <h3>Grand Total</h3>
                      <p>222.2</p>
                    </div>
                    <button>Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cart-items-recently-ordered">
          <h3>Recently ordered</h3>
          <div className="recently-ordered-carousel">
            <Carousel settings={settings}>
              {CartData[0]["cart-page-section-1"].map((data, index) => {
                return (
                  <div key={index} className="sm-height">
                    <div className="meals-carousel-item">
                      <img src={data.imgSrc} alt="" />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
