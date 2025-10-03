import { Button } from "@/components/ui/button";
import Nav from "../components/Nav";
import FloatingIcon from "@/components/FloatingIcon";
import { CodeXml } from "lucide-react";
import Banner from "@/components/Banner";
import ExplorSectioon from "@/layouts/ExplorSectioon";
import FeatureCard from "@/components/FeatureCard";
import FeatureList from "@/components/FeatureList";

const Home = () => {
  return (
    <div className="h-[1000vh] overflow-hidden">
      <Nav />
      <div className="pt-36  bg-gradient-to-b from-[#93F6E8] from-0% via-[#CFFCF6] via-31% to-[#FFFFFF] to-100% mb-28">
        <div className="my-container  flex justify-between ">
          {/* justify-around */}
          {/* mx-auto */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-baseline justify-center md:justify-start  ">
            <h2 className="text-5xl mb-6 font-my-heading font-medium  text-center lg:text-left">
              {/* mt-3.5 */}
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
          <div className="hidden lg:block  min-w-[400px] w-2/5  relative">
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

      <ExplorSectioon className="gap-16 lg:gap-28">
        <div className=" w-full lg:w-1/2 overflow-hidden">
          <img
            src="./src/assets/images/college project-bro.svg"
            alt=""
            className="w-[90%]"
          />
        </div>
        <div className="w-full lg:w-1/2 flex lg:block flex-col items-center  ">
          <p className="mb-9 text-center lg:text-left">
            Our platform helps learners grow from beginner to expert through
            structured learning paths. Each course blends theory with hands-on
            practice, leading to industry-recognized certifications that boost
            career opportunities. Covering fields from technology and business
            to creative industries, we empower learners to explore, specialize,
            and gain the skills needed to thrive in today’s fast-changing world.
          </p>
          <div className="flex  justify-center lg:justify-end items-center">
            <Button className="px-8 py-6">Discover</Button>
          </div>
        </div>
      </ExplorSectioon>

      <ExplorSectioon className="gap-16 lg:gap-0" reverse={true}>
        <FeatureList className="ml-0 lg:ml-9">
          <FeatureCard name="Certified Learning" icon="icons8-diploma-100.png">
            Earn recognized certifications that prove your skills and boost your
            career opportunities.
          </FeatureCard>
          <FeatureCard
            name="Personal Progress Tracking"
            icon="icons8-course-100.png"
          >
            Monitor your learning journey with detailed reports and insights
            tailored to your growth.
          </FeatureCard>
          <FeatureCard
            name="Child-Friendly Programming"
            icon="icons8-kid-100.png"
          >
            Introduce kids to the world of coding with fun, interactive, and
            age-appropriate lessons.
          </FeatureCard>
          <FeatureCard
            name="Structured Learning Tracks"
            icon="icons8-roadmap-100.png"
          >
            Follow clear roadmaps designed to take you from beginner to expert
            step by step.
          </FeatureCard>
        </FeatureList>
        <div className=" w-full lg:w-1/2 overflow-hidden">
          <div className="mb-5">
            <h2 className="font-my-heading font-bold mb-5 text-3xl text-center lg:text-left">
              Main Features
            </h2>
            <p className="text-center lg:text-left">
              Our platform is designed with your success in mind. We bring
              together the most important features that make learning effective,
              engaging, and practical. Here’s what makes us different
            </p>
          </div>
          <img
            src="./src/assets/images/Toggle-bro (1).svg"
            alt=""
            className="w-[80%] ml-12"
          />
        </div>
      </ExplorSectioon>

      {/* <div className=" phone-container md:container md:px-0   mx-auto mt-24 flex flex-col lg:flex-row justify-between items-center w-full gap-16 lg:gap-28"></div> */}
    </div>
  );
};

export default Home;
