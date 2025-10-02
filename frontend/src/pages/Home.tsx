import { Button } from "@/components/ui/button";
import Nav from "../components/Nav";
import FloatingIcon from "@/components/FloatingIcon";
import { CodeXml } from "lucide-react";
import Banner from "@/components/Banner";
import ExplorSectioon from "@/layouts/ExplorSectioon";

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
      <Banner />

      <ExplorSectioon>
        <div className=" w-full lg:w-1/2 overflow-hidden">
          <img
            src="./src/assets/images/college project-bro.svg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 flex lg:block flex-col items-center  ">
          <p className="mb-9 text-center lg:text-left">
            Our platform is dedicated to guiding learners on a complete journey
            of growth and achievement. Whether you are starting with no prior
            experience or looking to strengthen existing knowledge, we take you
            from zero to hero through carefully designed learning paths. Every
            course is crafted to provide not only deep theoretical understanding
            but also practical, hands-on experience. By earning our solid,
            industry-recognized certifications, you gain credentials that open
            doors to professional opportunities and demonstrate your readiness
            for the workplace. In addition, we cover a wide range of fields—from
            technology and business to creative industries—allowing learners to
            explore different domains and find the path that matches their
            ambitions. Ultimately, our mission is to equip you with the
            knowledge, confidence, and professional skills needed to thrive in
            today’s fast-changing world.
          </p>
          <div className="flex  justify-center lg:justify-end items-center">
            <Button className="px-8 py-6">Discover</Button>
          </div>
        </div>
      </ExplorSectioon>

      {/* <div className=" phone-container md:container md:px-0   mx-auto mt-24 flex flex-col lg:flex-row justify-between items-center w-full gap-16 lg:gap-28"></div> */}
    </div>
  );
};

export default Home;
