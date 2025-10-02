import { Button } from "@/components/ui/button";
import Nav from "../components/Nav";
import { Star } from "lucide-react";
import FloatingIcon from "@/components/FloatingIcon";
import { CodeXml } from "lucide-react";

const Home = () => {
  return (
    <div className="h-[1000vh] overflow-hidden">
      <Nav />
      <div className="pt-36  bg-gradient-to-b from-[#93F6E8] from-0% via-[#CFFCF6] via-31% to-[#FFFFFF] to-100% mb-20">
        <div className="container mx-auto flex justify-around ">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-baseline justify-center md:justify-start  ">
            <h2 className="text-5xl mb-6 font-my-heading font-medium mt-3.5 text-center lg:text-left">
              Level Up Your Learning Journey
            </h2>

            <p className="text-my-text-main opacity-[70%] w-7/12 mb-11 text-center lg:text-left">
              Interactive lessons, real-world projects, and a supportive
              community everything you need to learn smarter and grow faster.
            </p>
            <div className="flex justify-start gap-3.5">
              <Button className="px-10 py-6">Start now</Button>
              <Button variant={"outline"} className="px-10 py-6">
                Courses
              </Button>
            </div>
          </div>
          <div className="hidden lg:block w-2/5  relative">
            <FloatingIcon className="top-[-30px] right-[75%] animate-float [animation-delay:1s]">
              <img
                src="./src/assets/icons/icons8-course-100.png"
                alt=""
                className="w-full"
              />
            </FloatingIcon>

            <FloatingIcon className="bottom-0 right-[90%] animate-float [animation-delay:4s]">
              <img
                src="./src/assets/icons/icons8-video-editing-100.png"
                alt=""
                className="w-full"
              />
            </FloatingIcon>

            <FloatingIcon className="top-1/2 left-[95%] p-4 animate-float-sway [animation-delay:2s]">
              <CodeXml size={30} className="text-my-primary" />
            </FloatingIcon>

            <img
              src="./src/assets/images/Screenshot 2025-09-16 160229.png"
              alt=""
              className="w-full rounded-lg border-4 border-my-primary"
            />
          </div>
        </div>
      </div>
      <div className="relative  ">
        <div className="   bg-my-secondary h-20"></div>
        {/* <div className="   bg-my-background h-20 absolute top-0  w-[105%] left-[-5px] rotate-1">
          <ul className="container mx-auto flex items-center justify-between h-full  animate-slide">
            {["Learning", "Growth", "Develop", "Build", "Work"].map((p) => (
              <>
                <li className="text-white ">{p}</li>
                <Star className="text-white " size={20} />
              </>
            ))}
          </ul>
        </div> */}

        <div className="bg-my-background h-20 absolute top-0 w-[105%] left-[-5px] rotate-2  md:rotate-1 overflow-hidden flex justify-center">
          <div className="w-full max-w-5xl px-12">
            {" "}
            {/* 👈 controls side margins */}
            <ul className="flex items-center gap-14 h-full animate-slide whitespace-nowrap">
              {["Learning", "Growth", "Develop", "Build", "Work"].map(
                (p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-14 text-white text-lg font-medium"
                  >
                    {p}
                    <Star className="text-white" size={20} />
                  </li>
                )
              )}
              {/* Duplicate items for infinite loop */}
              {["Learning", "Growth", "Develop", "Build", "Work"].map(
                (p, i) => (
                  <li
                    key={`dup-${i}`}
                    className="flex items-center gap-14 text-white text-lg font-medium"
                  >
                    {p}
                    <Star className="text-white" size={20} />
                  </li>
                )
              )}
              {/* Duplicate items for infinite loop */}
              {["Learning", "Growth", "Develop", "Build", "Work"].map(
                (p, i) => (
                  <li
                    key={`dup-${i}`}
                    className="flex items-center gap-14 text-white text-lg font-medium"
                  >
                    {p}
                    <Star className="text-white" size={20} />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
