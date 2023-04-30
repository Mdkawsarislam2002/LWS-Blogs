import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//  components
import SinglePost from "../SinglePost";
import savedBlogApi from "../../../Redux/Feature/SavedBlogs/SavedBlogAPI";

const Saved = () => {
  const dispatch = useDispatch();
  const { savedBlogs, isLoading, isError, errMsg } = useSelector(
    (state) => state.savedBlogsSlice
  );

  useEffect(() => {
    dispatch(savedBlogApi());
  }, [dispatch]);

  return (
    <div>
      {savedBlogs?.map((items) => {
        return <SinglePost key={items.id} data={items} />;
      })}
      {savedBlogs?.length === 0 && <p>No Saved Blogs</p>}
    </div>
  );
};

export default Saved;
