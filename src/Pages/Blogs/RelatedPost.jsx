import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import relatedPostApi from "../../Redux/Feature/RelatedPost/RelatedPostAPI";

import SingleRelatedBlogs from "./SingleRelatedBlogs";

// eslint-disable-next-line react/prop-types
const RelatedPost = ({ currentID: currentVideoId, relatedTags: tags }) => {
  const dispatch = useDispatch();
  const { singeBlogs } = useSelector((state) => state.relatedPost);

  useEffect(() => {
    // currentVideoId - tags
    dispatch(
      relatedPostApi({
        currentVideoId,
        tags,
      })
    );
  }, [dispatch, currentVideoId, tags]);

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {/* related post  */}

        {singeBlogs?.map((blog) => (
          <SingleRelatedBlogs key={blog.id} relatedBlogData={blog} />
        ))}
        {/* related post ends */}
      </div>
    </aside>
  );
};

export default RelatedPost;
