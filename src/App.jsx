import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import store from "./Redux/store";
import Nav from "./components/Nav";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blog_details" element={<Blogs />} />
      </Routes>
    </Provider>
  );
}

export default App;
