import { useEffect } from "react";
import { useSelector } from "react-redux";

// components
import All from "./FilteredData/All";
import Saved from "./FilteredData/Saved";

const MainPage = () => {
  const { filterBySaved } = useSelector((state) => state.sort);
  useEffect(() => {}, [filterBySaved]);

  return (
    <>
      <div>{filterBySaved ? <Saved /> : <All />}</div>
    </>
  );
};

export default MainPage;
