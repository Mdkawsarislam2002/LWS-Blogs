import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blog_details" element={<Blogs />} />
      </Routes>
    </Provider>
  );
}

export default App;
