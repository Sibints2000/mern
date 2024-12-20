import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default App;
