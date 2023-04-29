import React from "react";
import { Link } from "react-router-dom";

const SingleRelatedBlogs = ({ relatedBlogData }) => {
  const { createdAt, description, id, image, isSaved, likes, tags, title } =
    relatedBlogData;

  return (
    <Link to={`/blog/${id}`} className="card">
      <img src={image} className="card-image" alt="" />

      <div className="p-4">
        <p className="text-lg post-title lws-RelatedPostTitle">{title}</p>
        <div className="mb-0 tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <p>{createdAt}</p>
      </div>
    </Link>
  );
};

export default SingleRelatedBlogs;
