import { Button } from "@/components/ui/button";
import Nav from "../components/Nav";
import FloatingIcon from "@/components/FloatingIcon";
import { CodeXml } from "lucide-react";
import Banner from "@/components/Banner";
import ExplorSectioon from "@/layouts/ExplorSectioon";
import FeatureCard from "@/components/FeatureCard";
import FeatureList from "@/components/FeatureList";
import Heading from "@/components/Heading";
import Achievement from "@/components/Achievement";
import Comment from "@/components/Comment";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { useState, useEffect } from "react";
import CategorieCard from "@/components/CategorieCard";
import InstructorCard from "@/components/InstructorCard";
import QuestionCard from "@/components/QuestionCard";

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const comments = [
    {},
    {},
    {},
    {},
    {},
    {}, // your list of comments (or map real data)
  ];

  // ✅ Sync with carousel state
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() ?? 0);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="overflow-hidden">
      <Nav />
      <div className="pt-36  bg-gradient-to-b from-[#93F6E8] from-0% via-[#CFFCF6] via-31% to-[#FFFFFF] to-100% mb-28">
        <div className="my-container  flex justify-between ">
          {/* justify-around */}
          {/* mx-auto */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-baseline justify-center md:justify-start  ">
            <h2 className="text-5xl mb-6 font-my-heading font-bold  text-center lg:text-left">
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
            <h2 className="font-my-heading font-bold mb-5 text-5xl text-center lg:text-left">
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
      <div className="bg-my-background mt-16 py-14 my-container e">
        <h2 className="text-white text-center lg:text-left text-5xl  font-my-heading mb-16 font-bold ">
          Why Us
        </h2>
        <div className=" w-full flex flex-col lg:flex-row justify-start items-center lg:justify-between lg:gap-28">
          <FeatureList className=" gap-9 ">
            <FeatureCard
              name="Expert Instructors"
              className="text-white/70"
              icon="icons8-analyzing-skill-100.png"
            >
              Learn from qualified professionals with real-world experience.
            </FeatureCard>
            <FeatureCard
              name="Practical Learning"
              className="text-white/70"
              icon="icons8-e-learning-100.png"
            >
              Courses designed with hands-on projects and real applications.
            </FeatureCard>
            <FeatureCard
              name="Flexible Access"
              className="text-white/70"
              icon="icons8-online-learning-64.png"
            >
              Study anytime, anywhere, at your own pace.
            </FeatureCard>
            <FeatureCard
              name="Recognized Certifications"
              className="text-white/70"
              icon="icons8-verifed-32.png"
            >
              Gain credentials that employers trust.
            </FeatureCard>
          </FeatureList>
          <FeatureList className="mt-6 gap-9">
            <FeatureCard
              name="Personalized Progress Tracking"
              className="text-white/70"
              icon="icons8-progress-100.png"
            >
              Stay motivated with clear insights into your growth.
            </FeatureCard>
            <FeatureCard
              name="Wide Range of Fields"
              className="text-white/70"
              icon="icons8-categories-64.png"
            >
              From technology to business to creativity, choose what fits your
              goals.
            </FeatureCard>
            <FeatureCard
              name="Community Support"
              className="text-white/70"
              icon="icons8-24-hours-day-support-100.png"
            >
              Connect with mentors and fellow learners for guidance and
              collaboration.
            </FeatureCard>
            <FeatureCard
              name="Constantly Updated Content"
              className="text-white/70"
              icon="icons8-update-done-100.png"
            >
              Stay ahead with the latest knowledge and tools.
            </FeatureCard>
          </FeatureList>
        </div>
      </div>

      <div className="my-container">
        <Heading>
          <h2 className="text-4xl font-my-heading mb-4 font-bold text-center">
            <span className="text-my-primary font-bold">Trusted</span> by
            Learners Worldwide
          </h2>
          <p className="text-black/70 w-full lg:w-1/2 text-center  ">
            Our growing community continues to learn, build, and succeed every
            day. Take a look at the numbers that show our real impact.
          </p>
        </Heading>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start flex-wrap gap-10 sm:gap-40">
          <Achievement icon="icons8-user-groups-100.png" number="208">
            Student
          </Achievement>
          <Achievement icon="icons8-group-of-projects-100.png" number="76">
            Project
          </Achievement>
          <Achievement icon="icons8-diploma-100.png" number="35">
            Certification{" "}
          </Achievement>
          <Achievement icon="icons8-historical-100.png" number="175">
            Hour
          </Achievement>
        </div>
        <div>
          <Heading>
            <h2 className="text-4xl font-my-heading  mt-12 font-bold text-center">
              What Our{" "}
              <span className="text-my-primary font-bold">Learners</span> Say
            </h2>
          </Heading>
          <div>
            <div className="flex flex-col items-center justify-center w-full py-10">
              <Carousel
                setApi={setApi}
                className="w-full max-w-6xl relative px-6 sm:px-8 lg:px-10"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="flex justify-start gap-4 sm:gap-5 lg:gap-6">
                  {comments.map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full sm:basis-[48%] lg:basis-[31%]"
                    >
                      <Comment />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* ✅ Pagination Dots */}
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      current === index
                        ? "bg-my-background scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExplorSectioon
        className="bg-my-background-secondary py-11"
        reverse={true}
      >
        <div className="flex flex-col justify-start lg:items-start gap-8 lg:flex-5 items-center flex-1">
          <div className="hidden lg:flex flex-col justify-start items-center lg:items-start">
            <h2 className="text-5xl  font-my-heading mb-4 font-bold text-center lg:text-left">
              Discover Our Courses
            </h2>
            <p className="w-2/3 text-black/70 text-center lg:text-left">
              our corses are ver nice our corses are ver nice our corses are ver
              nice our corses are ver nice{" "}
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-5 mb-8">
            <CategorieCard
              icon={"icons8-video-editing-100.png"}
              title={"Video Editing"}
            >
              Video Editing Video Editing Video Editing
            </CategorieCard>
            <CategorieCard
              icon={"icons8-video-editing-100.png"}
              title={"Video Editing"}
            >
              Video Editing Video Editing Video Editing
            </CategorieCard>
            <CategorieCard
              icon={"icons8-video-editing-100.png"}
              title={"Video Editing"}
            >
              Video Editing Video Editing Video Editing
            </CategorieCard>
          </div>
          <Button className="px-8 py-6">See All</Button>
        </div>
        <div className="w-full overflow-hidden lg:flex-4 flex-1">
          <div className="flex lg:hidden flex-col justify-start items-center lg:items-start">
            <h2 className="text-5xl  font-my-heading mb-4 font-bold text-center lg:text-left">
              Discover Our Courses
            </h2>
            <p className="w-full text-black/70 text-center lg:text-left mb-6">
              our corses are ver nice our corses are ver nice our corses are ver
              nice our corses are ver nice{" "}
            </p>
          </div>
          <img
            src="./src/assets/images/On-the-way-amico.svg"
            alt=""
            className="w-full py-14"
          />
        </div>
      </ExplorSectioon>

      <div className="my-container mb-64 ">
        <Heading>
          <h2 className="text-4xl font-my-heading mb-4 font-bold text-center">
            Our Team of
            <span className="text-my-primary font-bold"> Professionals</span>
          </h2>
          <p className="text-black/70 w-full lg:w-1/2 text-center  ">
            Professionals dedicated to your success
          </p>
        </Heading>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <InstructorCard
            image="uifaces-human-avatar (4).jpg"
            name="Omar Khaled"
            title="Data Science & AI"
          />
          <InstructorCard
            image="uifaces-human-avatar (5).jpg"
            name="Mohamed Idris"
            title="Software Engineering"
            reverse={true}
          />
          <InstructorCard
            image="uifaces-human-avatar (3).jpg"
            name="Ahmed Farouk"
            title="UI/UX Design"
          />
          <InstructorCard
            image="uifaces-human-avatar (2).jpg"
            name="Khaled Mahmoud"
            title="Digital Marketing"
            reverse={true}
          />
        </div>
        <div className="flex justify-center items-start mt-14">
          <Button className="px-8 py-6">See All</Button>
        </div>
        <div className="flex flex-col  justify-start items-center gap-4 my-32">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
