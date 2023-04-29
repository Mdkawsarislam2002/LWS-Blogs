import React from "react";
import {
  sortTask,
  filterTaskHandler,
} from "../../Redux/Feature/Sorting/sortSlice";
import { useSelector, useDispatch } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const { sortValue, filterBySaved } = useSelector((state) => state.sort);

  const selectBoxHandler = (e) => {
    dispatch(sortTask(e.target.value));
  };

  console.log(filterBySaved);
  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            onChange={selectBoxHandler}
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* handle filter on button click */}
            <div>
              <input
                onClick={() => {
                  dispatch(filterTaskHandler(false));
                }}
                type="radio"
                name="filter"
                id="lws-all"
                className="radio"
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                onClick={() => {
                  dispatch(filterTaskHandler(true));
                }}
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
