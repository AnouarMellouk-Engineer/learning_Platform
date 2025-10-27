import Footer from "@/components/Footer";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
