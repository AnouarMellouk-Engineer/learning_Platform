import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={` duration-300 phone-container md:px-0 py-3.5 
         "top-0"
      } bg-white/30  shadow-sm z-50  fixed  w-full     `}
    >
      <div className="  md:container  mx-auto font-heading flex items-center justify-between">
        <h1 className="font-my-heading text-3xl font-medium cursor-pointer flex-1">
          Elearing
        </h1>
        <div
          className={`flex flex-col md:flex-row justfiy-center md:justify-between gap-24 md:gap0 items-center  absolute top-0 h-[100vh] md:h-auto  w-1/2 md:w-auto ${
            isOpen ? "right-0" : "right-[-1000px]"
          } md:right-0  md:relative duration-500  flex-2 bg-white md:bg-transparent pt-32 md:pt-0 `}
        >
          <X
            className="md:hidden  absolute top-6 right-7 cursor-pointer "
            size={20}
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <ul className="  flex  flex-col  md:flex-row items-center justify-center gap-8">
            {["About", "Courses", "Tracks", "Contact"].map((link) => (
              <li
                key={link}
                className="text-md cursor-pointer duration-300 hover:text-my-primary"
              >
                {link}
              </li>
            ))}
          </ul>
          <Button className="px-8 py-6">Register</Button>
        </div>
        <div
          className=" md:hidden cursor-pointer flex items-center gap-1.5 font-my-heading"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <p>Menu</p>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
