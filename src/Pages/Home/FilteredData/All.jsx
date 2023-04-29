import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//
import getHomeBlogs from "../../../Redux/Feature/Home_Blogs/getHomeBlogs";
import SinglePost from "../SinglePost";

const All = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.homeBlogs);

  useEffect(() => {
    dispatch(getHomeBlogs());
  }, [dispatch]);
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
