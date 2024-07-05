import React from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../utils/utils";

const Post = () => {
  const { slug } = useParams();
  console.log(getPost(slug));
  return (
    <React.Fragment>
      <section className="post-page-hero-section">
        <h1></h1>
      </section>
      ;
    </React.Fragment>
  );
};

export default Post;
