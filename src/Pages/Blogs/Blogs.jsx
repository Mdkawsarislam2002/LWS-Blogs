import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import singleBlogAPI from "../../Redux/Feature/PerBlogData/blogAPI";

//  assets
import RelatedPost from "./RelatedPost";

const Blogs = () => {
  const { blog_details } = useParams();
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state?.singleBlog);

  useEffect(() => {
    dispatch(singleBlogAPI({ blog_details }));
  }, []);

  const activeStyle = blogs?.isSaved ? "active save-btn" : "save-btn";

  return (
    <>
      <div className="container mt-8">
        <Link
          to={"/"}
          className="flex items-center  content-center text-gray-600 home-btn"
          id="lws-goHome"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door-fill inline"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
          </svg>
          Go Home
        </Link>
      </div>
      <section className="post-page-container">
        {/* detailed post  */}
        <main className="post">
          <img
            src={blogs?.image}
            alt="githum"
            className="w-full rounded-md"
            id="lws-megaThumb"
          />
          <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
              {blogs?.title}
            </h1>
            <div className="tags" id="lws-singleTags">
              {blogs?.tags?.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
            <div className="btn-group">
              {/* handle like on button click */}
              <button className="like-btn" id="lws-singleLinks">
                <i className="fa-regular fa-thumbs-up"></i>
                {blogs?.likes}
              </button>
              {/* handle save on button click */}
              {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
              <button className={activeStyle}>
                <i className="fa-regular fa-bookmark"></i>
                {blogs?.isSaved ? "Saved" : "Save"}
              </button>
            </div>
            <div className="mt-6">
              <p>{blogs?.description}</p>
            </div>
          </div>
        </main>

        {/* related posts */}
        <RelatedPost currentID={blogs?.id} relatedTags={blogs?.tag} />
      </section>
    </>
  );
};

export default Blogs;
