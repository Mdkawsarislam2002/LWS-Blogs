import React, { useEffect } from "react";

//  redux
import { useDispatch, useSelector } from "react-redux";
import getHomeBlogs from "../../Redux/Feature/Home_Blogs/getHomeBlogs";

import SideBar from "./SideBar";
import SinglePost from "./SinglePost";

const MainPage = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.homeBlogs);

  useEffect(() => {
    dispatch(getHomeBlogs());
  }, []);
  return (
    <section className="wrapper">
      <SideBar />

      <main className="post-container" id="lws-postContainer">
        {blogs.length > 0 &&
          blogs.map((items) => {
            return <SinglePost data={items} />;
          })}
      </main>
    </section>
  );
};

export default MainPage;
