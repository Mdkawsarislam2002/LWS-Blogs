import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//
import getHomeBlogs, {
  shortByDate,
  shortByMostLikes,
} from "../../../Redux/Feature/Home_Blogs/getHomeBlogs";
import SinglePost from "../SinglePost";

const All = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.homeBlogs);
  const { sortValue } = useSelector((state) => state.sort);

  // most_liked
  // default
  // newest
  useEffect(() => {
    if (sortValue === "most_liked") {
      dispatch(shortByMostLikes());
    } else if (sortValue === "newest") {
      dispatch(shortByDate());
    } else {
      dispatch(getHomeBlogs());
    }
  }, [dispatch, sortValue]);
  return (
    <main className="post-container" id="lws-postContainer">
      {blogs.length > 0 &&
        blogs.map((items) => {
          return <SinglePost key={items.id} data={items} />;
        })}
    </main>
  );
};

export default All;
