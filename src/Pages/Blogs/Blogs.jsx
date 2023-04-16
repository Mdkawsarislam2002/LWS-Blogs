import React from "react";
import mern from "../../assets/images/mern.webp";
import git from "../../assets/images/git.webp";
import ai from "../../assets/images/ai.jpg";

const Blogs = () => {
  return (
    <>
      <div className="container mt-8">
        <a
          href="index.html"
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
        </a>
      </div>
      <section className="post-page-container">
        {/* detailed post  */}
        <main className="post">
          <img
            src={mern}
            alt="githum"
            className="w-full rounded-md"
            id="lws-megaThumb"
          />
          <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
              MERN stack for Web Development
            </h1>
            <div className="tags" id="lws-singleTags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <div className="btn-group">
              {/* handle like on button click */}
              <button className="like-btn" id="lws-singleLinks">
                <i className="fa-regular fa-thumbs-up"></i> 100
              </button>
              {/* handle save on button click */}
              {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
              <button className="active save-btn" id="lws-singleSavedBtn">
                <i className="fa-regular fa-bookmark"></i> Saved
              </button>
            </div>
            <div className="mt-6">
              <p>
                A MERN stack comprises a collection of four frameworks (MongoDB,
                ExpressJs, ReactJs and NodeJs) used to develop full-stack
                javascript solutions for rapid, scalable, and secure
                applications. Each framework serves a different purpose in
                creating successful web applications. It is an excellent choice
                for companies looking to develop high-quality responsive
                applications quickly using just one language.
              </p>
            </div>
          </div>
        </main>
        {/* detailed post ends */}
        {/* related posts */}
        <aside>
          <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
            Related Posts
          </h4>
          <div className="space-y-4 related-post-container">
            {/* related post  */}
            <div className="card">
              <a href="post.html">
                <img src={git} className="card-image" alt="" />
              </a>
              <div className="p-4">
                <a
                  href="post.html"
                  className="text-lg post-title lws-RelatedPostTitle"
                >
                  Top Github Alternatives
                </a>
                <div className="mb-0 tags">
                  <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <p>2010-03-27</p>
              </div>
            </div>
            {/* related post ends */}
            {/* related post  */}
            <div className="card">
              <a href="post.html">
                <img src={ai} className="card-image" alt="" />
              </a>
              <div className="p-4">
                <a
                  href="post.html"
                  className="text-lg post-title lws-RelatedPostTitle"
                >
                  The future of Artificial Inteligence
                </a>
                <div className="mb-0 tags">
                  <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <p>2020-07-15</p>
              </div>
            </div>
            {/* related post ends */}
          </div>
        </aside>
        {/* related posts ends */}
      </section>
    </>
  );
};

export default Blogs;
