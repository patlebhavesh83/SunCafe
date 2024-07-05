import React from "react";
import NavBar from "../../components/Header";
import Carousel from "../../components/Carousel";
import { Link } from "react-router-dom";
import { BlogData, CarouselData } from "../../constants";
import StarRating from "../../components/StarRating";
import { FaLongArrowAltRight } from "react-icons/fa";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settings_2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};
const Blog = () => {
  return (
    <>
      <BlogHeroSection imgSrc={"/images/page-blog-hero-bg.jpeg"} />
      {/* section 1 */}
      <section className="blog-carousel-section">
        <h2>LATEST BLOG POST</h2>
        <div className="latest-blog-carousel-wrapper">
          <Carousel settings={settings}>
            {CarouselData[4]["page-blog-carousel-section-1"].map(
              (data, index) => {
                return (
                  <div key={index} className="latest-blog-carousel-item">
                    <div>
                      <img src={data?.imgSrc} alt={`carousel - ${index}`} />
                      <div>
                        <p>{data?.text}</p>
                        <Link> Found out More.</Link>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </Carousel>
        </div>
      </section>

      {/* section - 2 */}
      <section className="blog-list-section">
        <h2>Blogs</h2>
        <div className="blog-list-wrapper">
          {BlogData[0]["blogPostData"].map((post, index) => {
            //   console.log(post);
            return (
              <div key={post.id} className="blog-list-item">
                <img src={post.coverImg} alt={`cover image - ${index}`} />
                <div className="blog-list-item-content">
                  <h3>{post.title}</h3>
                  <p>{post.blogSummary}</p>
                  <Link to={`/blog/post/${post.slug}`} className="read-more">
                    Read more{" "}
                    <FaLongArrowAltRight className="right-arrow-icon" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* section - 3 */}

      <section className="blog-carousel-section">
        <h2>FEATURED REVIEW VIDEOS</h2>
        <div className="feature-review-carouesl-wrapper">
          <Carousel settings={settings_2}>
            {CarouselData[5]["feature-review-carouesl-section-2"].map(
              (data, index) => {
                //   console.log(data);
                return (
                  <div
                    key={index}
                    className="feature-review-carousel-item-wrapper"
                  >
                    <div className="feature-review-carousel-item">
                      <img src={data.imgSrc} alt="" />
                      <div>
                        <StarRating />
                      </div>
                      <div className="feature-review-carousel-item-content">
                        <p>{data.text}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </Carousel>
        </div>
      </section>

      {/* section - 4 */}
      <section className="review-section">
        <div className="review-section-wrapper">
          <h2>Share Your Experience !</h2>
          <p>
            Have you recently visited Café Sunset? We'd love to hear about your
            experience!
          </p>
          <p>
            Send your reviews and feedback and who knows – your review might be
            featured here next!
          </p>

          <div className="review-section-input-wrapper">
            <input type="text" placeholder="Leave You Review Here...." />
            <button>submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

const BlogHeroSection = ({ imgSrc }) => {
  return (
    <div className="blog-hero-section">
      <div className="blog-hero-bg-overlay">
        <div>
          <h2>SUNSET</h2>
        </div>
        <div>
          <h2>OUR VISION</h2>
          <p>
            To create a haven where every cup is a canvas, painting moments of
            serenity and connection against the backdrop of a setting sun.
          </p>
        </div>
      </div>
      <img src={imgSrc} alt="hero-bg" />
    </div>
  );
};

export default Blog;
