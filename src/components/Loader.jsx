import loading from "../assets/loader.svg";

const Loader = () => {
  return (
    <div className="w-full h-full  flex  items-center justify-center ">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loader;
