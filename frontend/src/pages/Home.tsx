import { Button } from "@/components/ui/button";
import Nav from "../components/Nav";
import { Star } from "lucide-react";

const Home = () => {
  return (
    <div className="h-[1000vh] overflow-hidden">
      <Nav />
      <div className="pt-36  bg-gradient-to-b from-[#93F6E8] from-0% via-[#CFFCF6] via-31% to-[#FFFFFF] to-100% h-[90vh]">
        <div className="container mx-auto flex justify-around ">
          <div className="w-1/2 flex flex-col  justify-start  ">
            <h2 className="text-5xl mb-6 font-my-heading font-medium mt-3.5">
              Level Up Your Learning Journey
            </h2>

            <p className="text-my-text-main opacity-[70%] w-7/12 mb-11">
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
          <div className="w-2/5 overflow-hidden rounded-lg border-4 border-my-primary">
            <img
              src="./src/assets/images/Screenshot 2025-09-16 160229.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative  ">
        <div className="   bg-my-secondary h-20"></div>
        <div className="   bg-my-background h-20 absolute top-0  w-[1500px] left-[-5px] rotate-1">
          <ul className="container mx-auto flex items-center justify-between h-full">
            {["Learning", "Growth", "Develop", "Build", "Work"].map((p) => (
              <>
                <li className="text-white">{p}</li>
                <Star className="text-white " size={20} />
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
