import React from "react";
import NavBar from "../../components/Header";
import Carousel from "../../components/Carousel";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
};

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="about-us-page-container">
        <AboutSection roundedImg={true}>
          <div className="about-us-section-items">
            <h3>The story behind sunset ...</h3>
            <p>
              Welcome to Sunset Café, where our journey began with Chef André's
              bold decision to depart from the world of haute cuisine and create
              a culinary sanctuary rooted in simplicity and heartfelt
              connection.
            </p>

            <p>
              Inspired by a chance encounter with a charming café bathed in the
              warm glow of twilight, Chef André envisioned a place where genuine
              hospitality and exceptional flavors intertwine. At Sunset Café,
              each dish is a reflection of Chef André's dedication to crafting
              culinary experiences that nourish both body and soul.
            </p>
          </div>
          <div className="about-us-section-items">
            <img src="/images/about-section-cover-2.jpeg" alt="" />
          </div>
        </AboutSection>

        <AboutSection greyBg flexReverse={"reverse"}>
          <div className="about-us-section-items">
            <p>
              At Sunset Café, our mission is deeply personal. Inspired by Chef
              André's journey and fueled by his passion for heartfelt
              connection, we've crafted a culinary sanctuary where every bite
              tells a story and every moment is cherished. With a commitment to
              authenticity, warmth, and sustainability, we invite you to join us
              in creating memories over delicious dishes that nourish both body
              and soul. Here, amidst the comforting glow of twilight, we
              celebrate community and the simple joys of shared meals. Welcome
              to our table; we can't wait to share our story with you.
            </p>
          </div>
          <div className="about-us-section-items">
            <img src="/images/main-bg.jpeg" alt="" />
          </div>
        </AboutSection>

        <AboutSection>
          <div className="about-us-section-items">
            <h3> Sharing Meals, Sharing Hope</h3>
            <p>
              At Sunset Café, we believe in giving back to our community. That's
              why we're proud to share that 1% of our profits go towards
              providing food for orphanages. Because at Sunset, you never eat
              alone; every meal you enjoy is shared with hundreds of orphaned
              children, spreading warmth and nourishment to those who need it
              most. Join us in making a difference, one meal at a time, heading
              for this.
            </p>
          </div>
          <div className="about-us-section-items">
            <img src="/images/about-us-2.jpeg" alt="" />
          </div>
        </AboutSection>

        <AboutSection customCss={"about-us-carousel"}>
          <h3>Meet Our Sunset Family</h3>

          <div className="about-us-carousel-wrapper">
            <Carousel settings={settings}>
              <div>
                <div className="about-us-carousel-card">
                  <div className="about-us-carousel-card-item">
                    <img src="/images/about-us-section-4-1.jpeg" alt="" />
                  </div>
                  <div className="about-us-carousel-card-item">
                    <p>
                      "Rohit, the friendly waiter at Sunset Café, effortlessly
                      connects with regulars, showcasing exceptional
                      communication skills and spreading warmth to all."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="about-us-carousel-card">
                  <div className="about-us-carousel-card-item">
                    <img src="/images/about-us-section-4-1.jpeg" alt="" />
                  </div>
                  <div className="about-us-carousel-card-item">
                    <p>
                      "Rohit, the friendly waiter at Sunset Café, effortlessly
                      connects with regulars, showcasing exceptional
                      communication skills and spreading warmth to all."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="about-us-carousel-card">
                  <div className="about-us-carousel-card-item">
                    <img src="/images/about-us-section-4-1.jpeg" alt="" />
                  </div>
                  <div className="about-us-carousel-card-item">
                    <p>
                      "Rohit, the friendly waiter at Sunset Café, effortlessly
                      connects with regulars, showcasing exceptional
                      communication skills and spreading warmth to all."
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </AboutSection>
      </div>
    </>
  );
};

const AboutSection = ({
  customCss,
  greyBg,
  flexReverse,
  roundedImg,
  children,
}) => {
  return (
    <section
      className={`about-us-section ${flexReverse && "layout-reverse"} ${
        roundedImg && "img-rounded"
      } ${greyBg && "grey-bg"} ${customCss && customCss}`}
    >
      {children}
    </section>
  );
};
export default AboutUs;
