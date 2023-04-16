import React from "react";
import SideBar from "./SideBar";
import SinglePost from "./SinglePost";
const MainPage = () => {
  return (
    <section className="wrapper">
      <SideBar />

      {/* posts container  */}
      <main className="post-container" id="lws-postContainer">
        {[4, 54, 5, 45, 4].map((items) => {
          return <SinglePost />;
        })}

        {/* Single Post Ends */}
      </main>
      {/* posts container ends */}
    </section>
  );
};

export default MainPage;
