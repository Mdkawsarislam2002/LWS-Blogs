import React from "react";
import SingleRelatedBlogs from "./SingleRelatedBlogs";

const RelatedPost = ({ currentID, relatedTags }) => {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {/* related post  */}
        <SingleRelatedBlogs />
        {/* related post ends */}
      </div>
    </aside>
  );
};

export default RelatedPost;
