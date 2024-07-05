import React from "react";
import NavBar from "../../components/Header";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="about-us-page-container ">
        <section className="contact-us-page">
          <h2>
            “Your thoughts matter to us, so drop us a line and let's start a
            conversation today."
          </h2>

          <div className="contact-detail-wrapper">
            <div className="contact-detail-card">
              <img src="/images/contact-detail-card-img-1.jpeg" alt="" />
              <h3>Address</h3>
              <p>
                MFC Center, Railway Station, Amazing Hotel, near Raipur, Raipur,
                Chhattisgarh 492001
              </p>
            </div>

            <div className="contact-detail-card">
              <img src="/images/contact-detail-card-img-1.jpeg" alt="" />
              <h3>Address</h3>
              <p>
                MFC Center, Railway Station, Amazing Hotel, near Raipur, Raipur,
                Chhattisgarh 492001
              </p>
            </div>

            <div className="contact-detail-card">
              <img src="/images/contact-detail-card-img-1.jpeg" alt="" />
              <h3>Address</h3>
              <p>
                MFC Center, Railway Station, Amazing Hotel, near Raipur, Raipur,
                Chhattisgarh 492001
              </p>
            </div>
          </div>
        </section>

        <section className="contact-us-form-container">
          <h2>Contact Us</h2>
          <div className="contact-form-wrapper">
            <div className="contact-form-input-wrapper">
              <div className="contact-input">
                <label>First Name</label>
                <input type="text" />
              </div>

              <div className="contact-input">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="contact-form-input-wrapper">
              <div className="contact-input">
                <label>Contact Number</label>
                <input type="text" />
              </div>

              <div className="contact-input">
                <label>Email Id</label>
                <input type="text" />
              </div>
            </div>

            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
