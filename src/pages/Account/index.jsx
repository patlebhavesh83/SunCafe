import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../../components/Header";
import { AccountMenu } from "../../constants";

const Account = () => {
  const [selected, setSelected] = useState(() => {
    // Retrieve the selected menu option from localStorage, or default to the first option
    return (
      localStorage.getItem("selectedMenu") ||
      AccountMenu[0]["menuSettings"][0].settingName
    );
  });

  const handleMenuSelection = (selection) => {
    let text = selection.textContent;
    setSelected(text);
    // Save the selected menu option to localStorage
    localStorage.setItem("selectedMenu", text);
  };

  console.log(selected);

  return (
    <>
      <Navbar />

      <div className="account-page">
        <div className="account-bg">
          <div className="account-bg-overlay"></div>
          <section className="account-page-section">
            <div className="account-container">
              <div className="account-row">
                {AccountMenu[0]["menuSettings"].map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`account-sidebar-item ${
                        data.settingName === selected ? "active" : ""
                      }`}
                    >
                      <button onClick={(e) => handleMenuSelection(e.target)}>
                        {data.settingName}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Render selected component */}
              {AccountMenu[0]["menuSettings"]
                .find((menu) => menu.settingName === selected)
                ?.CompoNent()}
            </div>

            <div className="let-us-reach-wrapper">
              <p>Let us reach you</p>
              <div>
                <input className="" type="text" />
                <button>SUBMIT</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export const MyAccount = () => {
  return (
    <div className="account-row">
      <h3>My Account</h3>

      <div className="account-details-wrapper">
        <div className="account-detail-heading">
          <h3>ACCOUNT INFORMATION</h3>
        </div>

        <div className="account-detail-content">
          <h4>CONTACT INFORMATION</h4>
          <p>abhilash subhash</p>
          <p>abhilashsubhash12345@gmail.com</p>
        </div>
      </div>

      <div className="account-details-wrapper">
        <div className="account-detail-heading">
          <h3>ADDRESS BOOK</h3>
          <p>Manage Addresses</p>
        </div>

        <div className="account-detail-content">
          <h4>DEFAULT BILLING ADDRESS</h4>
          <p>You have not set a default billing address.</p>

          <p className="account-detail-content-link">Edit Address</p>
        </div>

        <div className="account-detail-content">
          <h4>DEFAULT SHIPPING ADDRESS</h4>
          <p>You have not set a default shipping address.</p>

          <p className="account-detail-content-link">Edit Address</p>
        </div>
      </div>
    </div>
  );
};

export const AccountInformation = () => {
  return (
    <div className="account-row">
      <h3>EDIT ACCOUNT INFORMATION</h3>

      <div className="account-details-wrapper">
        <div className="account-detail-heading">
          <h3>ACCOUNT INFORMATION</h3>
        </div>

        <div className="account-detail-content detail-input-wrapper">
          <div className="account-detail-input">
            <label htmlFor="f_name">First Name *</label>
            <input id="f_name" type="text" placeholder="Abhilash" />
          </div>

          <div className="account-detail-input">
            <label htmlFor="l_name">Last Name *</label>
            <input id="l_name" type="text" placeholder="Subhansh" />
          </div>

          <div className="account-detail-checkbox">
            <input type="checkbox" name="change_email" id="c_email" />
            <label htmlFor="c_email">Change Email</label>
          </div>

          <div className="account-detail-checkbox">
            <input type="checkbox" name="change_password" id="c_password" />
            <label htmlFor="c_password">Change Password</label>
          </div>
        </div>
      </div>
      <div className="account-detail-submit-action-wrapper">
        <button className="submit-action-btn save-btn">SAVE</button>
        <button className="submit-action-btn go-back-btn">GO BACK</button>
      </div>
    </div>
  );
};

export const AddressBook = () => {
  return (
    <div className="account-row">
      <h3>ADD NEW ADDRESS</h3>

      <div className="account-details-wrapper">
        <div className="account-detail-heading">
          <h3>CONTACT INFORMATION</h3>
        </div>

        <div className="account-detail-content detail-input-wrapper">
          <div className="account-detail-input">
            <label htmlFor="f_name">First Name *</label>
            <input id="f_name" type="text" placeholder="Abhilash" />
          </div>

          <div className="account-detail-input">
            <label htmlFor="l_name">Last Name *</label>
            <input id="l_name" type="text" placeholder="Subhansh" />
          </div>

          <div className="account-detail-input">
            <label htmlFor="ph_number">Phone Number *</label>
            <input id="ph_number" type="text" />
          </div>
        </div>
      </div>

      <div className="account-details-wrapper">
        <div className="account-detail-heading">
          <h3>ADDRESS</h3>
        </div>

        <div className="account-detail-content detail-input-wrapper">
          <div className="account-detail-input">
            <label htmlFor="st_address">Street Address *</label>
            <input id="st_address" type="text" />
          </div>

          <div className="account-detail-input">
            <label htmlFor="c_name">City *</label>
            <input id="c_name" type="text" />
          </div>

          <div className="account-detail-input">
            <label htmlFor="state_name">State *</label>
            <input id="state_name" type="text" />
          </div>

          <div className="account-detail-input">
            <label htmlFor="zip-code">Zip Code *</label>
            <input id="zip-code" type="text" />
          </div>
        </div>
      </div>

      <div className="account-detail-submit-action-wrapper">
        <button className="submit-action-btn save-btn">SAVE</button>
        <button className="submit-action-btn go-back-btn">GO BACK</button>
      </div>
    </div>
  );
};

export const YourOrder = () => {
  return (
    <div className="account-row">
      <div className="account-details-wrapper">
        <div className="account-detail-heading">
          <h3>Your order</h3>
        </div>

        <div className="account-order-detail">
          <div className="account-order-detail-list">
            <img src="/images/cloud-img.png" alt="" />
            <p>seems like you have yet to place an order</p>
          </div>
        </div>
      </div>

      <div className="account-details-wrapper">
        <div className="account-detail-heading">
          <h3>Order History</h3>
        </div>

        <div className="account-detail-order-history">
          <div className="order-history-item">
            <img src="/images/see-more-menu-item-1.png" alt="" />
            <div>
              <h4>Dish: Ham Sandwich</h4>
              <p>Data: 02-01-24 12:14pm</p>
              <p>Payment: UPI</p>
            </div>
          </div>
          <div className="order-history-item">
            <img src="/images/see-more-menu-item-1.png" alt="" />
            <div>
              <h4>Dish: Ham Sandwich</h4>
              <p>Data: 02-01-24 12:14pm</p>
              <p>Payment: UPI</p>
            </div>
          </div>
          <div className="order-history-item">
            <img src="/images/see-more-menu-item-1.png" alt="" />
            <div>
              <h4>Dish: Ham Sandwich</h4>
              <p>Data: 02-01-24 12:14pm</p>
              <p>Payment: UPI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
