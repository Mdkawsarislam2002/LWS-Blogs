import { useSelector } from "react-redux";

import SinglePost from "../SinglePost";
import sortBy from "../../../Hooks/sortBy";
import { useEffect } from "react";

const Saved = () => {
  const { savedBlogs } = useSelector((state) => state.savedBlogsSlice);
  const { sortValue } = useSelector((state) => state.sort);

  const sortData = sortBy(savedBlogs, sortValue);
  useEffect(() => {}, [sortData]);

  return (
    <div>
      {sortData.map((items) => {
        return <SinglePost key={items.id} data={items} />;
      })}
      {savedBlogs?.length === 0 && <p>No Saved Blogs</p>}
    </div>
  );
};

export default Saved;
