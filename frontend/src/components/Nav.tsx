import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // phone-container md:px-0
    <nav
      className={` duration-300  py-3.5 
         top-0
          fixed  w-full      bg-white z-50`}
      //  shadow-sm z-5
    >
      <div className="  my-container   font-heading flex items-center justify-between">
        {/* mx-auto */}
        <Link to="/" className=" flex-1">
          <h1 className="font-my-heading text-3xl font-bold cursor-pointer">
            Elearing
          </h1>
        </Link>
        <div
          className={`flex flex-col md:flex-row justfiy-center md:justify-between gap-24 md:gap0 items-center  absolute top-14 h-[100vh]  md:top-0 md:h-auto  w-full md:w-auto ${
            isOpen ? "right-0" : "right-[-1000px]"
          } md:right-0  md:relative duration-500  flex-2 opacity-100 pointer-events-auto bg-white/90 backdrop-blur-md  md:bg-transparent pt-32 md:pt-0 `}
        >
          <ul className="  flex  flex-col  md:flex-row items-center justify-center gap-8 ">
            {["about", "courses", "tracks", "contact"].map((link) => (
              <Link to={"/" + link}>
                <li
                  key={link}
                  className="text-md cursor-pointer duration-300 hover:text-my-primary"
                >
                  {link}
                </li>
              </Link>
            ))}
          </ul>
          <Link to="/register">
            <Button className="px-8 py-6">Register</Button>
          </Link>
        </div>
        <div
          className=" md:hidden cursor-pointer flex items-center gap-2 font-my-heading "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>Menu</p>

          <div
            className={`relative w-4 h-4 flex  items-center  justify-center ${
              isOpen || "flex-col gap-[5px]"
            } `}
          >
            <div
              className={` w-4 h-0.5 bg-black duration-300 ${
                isOpen ? "absolute rotate-45 " : "relative"
              }`}
            ></div>
            <div
              className={` w-4 h-0.5 bg-black duration-300 ${
                isOpen ? "absolute -rotate-45 " : "relative"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
