import React from "react";
import { Link } from "react-router-dom";

const SingleBar = ({ data }) => {
  const { title, tags, likes, isSaved, image, id, description, createdAt } =
    data;

  return (
    <div key={id} className="lws-card">
      <Link to={"/blog/" + id}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>

      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <a href="post.html" className="lws-postTitle">
          {title}
        </a>
        <div className="lws-tags">
          {tags.map((item) => {
            return <span>#{item},</span>;
          })}
        </div>

        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBar;
