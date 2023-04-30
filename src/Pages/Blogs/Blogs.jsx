import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import singleBlogAPI, {
  likeIncrement,
  saveOrUnSaveBlog,
} from "../../Redux/Feature/PerBlogData/blogAPI";

//  assets
import RelatedPost from "./RelatedPost";

const Blogs = () => {
  const { blog_details } = useParams();
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state?.singleBlog);

  useEffect(() => {
    dispatch(singleBlogAPI({ blog_details }));
  }, [blog_details, dispatch, blogs]);

  const activeStyle = blogs?.isSaved ? "active save-btn" : "save-btn";

  const SaveHandler = () => {
    dispatch(saveOrUnSaveBlog({ id: blogs?.id, isSaved: blogs?.isSaved }));
  };

  const LikeHandler = () => {
    dispatch(likeIncrement({ id: blogs?.id, likes: blogs?.likes }));
  };

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
              <button
                className="like-btn flex items-center gap-1"
                id="lws-singleLinks"
                onClick={LikeHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>

                {blogs?.likes}
              </button>
              {/* handle save on button click */}
              {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
              <button
                onClick={() => {
                  SaveHandler();
                }}
                className={activeStyle + " flex items-center "}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>

                {blogs?.isSaved ? <p className="active">Saved</p> : <p>Save</p>}
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
