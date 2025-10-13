// const About = () => {
//   return (
//     <div className="pt-36 bg-[url(./src/assets/images/redmind-studio-OLXBoNfb8kA-unsplash.jpg)]">
//       <div>
//         <h1>Who We Are</h1>
//         <p>
//           Welcome to Elearning, an online learning space built to make education
//           simple, accessible, and engaging. Whether you are a student, a
//           professional, or a lifelong learner, we are here to help you grow your
//           skills and achieve your goals.
//         </p>
//       </div>
//     </div>
//   );
// };

import Heading from "@/components/Heading";
import Instructor from "@/components/Instructor";
import StepSection from "@/components/StepSection";
import { Button } from "@/components/ui/button";
import ExplorSectioon from "@/layouts/ExplorSectioon";

// export default About;

const About = () => {
  return (
    <>
      {/* <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-36"
        style={{
          backgroundImage:
            "url('./src/assets/images/redmind-studio-OLXBoNfb8kA-unsplash.jpg')",
        }}
      >
       
        <div className="absolute inset-0 bg-black/60" />

      
        <div className="relative z-10 max-w-3xl text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
            Welcome to{" "}
            <span className="font-semibold text-white">Elearning</span>, an
            online learning space built to make education simple, accessible,
            and engaging. Whether you are a student, a professional, or a
            lifelong learner, we are here to help you grow your skills and
            achieve your goals.
          </p>

          <Button> Get Started</Button>
        </div>
      </div>  */}

      <ExplorSectioon className="gap-16 lg:gap-0" reverse={true}>
        <div className="flex-1 flex lg:block flex-col items-center justify-start">
          <h1 className="text-3xl  text-center lg:text-left md:text-3xl  font-bold  mb-6">
            Who We Are
          </h1>
          <p className="text-lg text-center lg:text-left md:text-md leading-relaxed mb-12">
            Welcome to <span className="font-semibold ">Elearning</span>, an
            online learning space built to make education simple, accessible,
            and engaging. Whether you are a student, a professional, or a
            lifelong learner, we are here to help you grow your skills and
            achieve your goals.
          </p>

          <Button className="px-8 py-6"> Get Started</Button>
        </div>

        <div className=" w-full lg:w-1/2 overflow-hidden flex-1">
          <img
            src="./src/assets/images/About us page-pana.svg"
            alt=""
            className=" w-[80%] lg:w-[100%] ml-12"
          />
        </div>
      </ExplorSectioon>
      <div className="my-container">
        <Heading>
          {" "}
          <h2 className=" text-4xl font-my-heading mb-4 font-bold text-center">
            Our
            <span className="text-my-primary font-bold"> Mission</span>
          </h2>
        </Heading>
        {/* <video
          src="https://www.youtube.com/watch?v=XvFmUE-36Kc"
          controls
        ></video> */}
        <div className="flex justify-center items-center mb-40">
          <iframe
            className="rounded-3xl "
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XvFmUE-36Kc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <div className="my-container">
        <Heading>
          {" "}
          <h2 className="text-4xl font-my-heading mb-4 font-bold text-center">
            Steps to Get
            <span className="text-my-primary font-bold"> Started</span>
          </h2>
        </Heading>
        <div className="flex justify-center items-start">
          <StepSection />
        </div>
      </div>
      <div className=" my-container  bg-my-background py-8 my-10 ">
        <Heading>
          {" "}
          <h2 className="text-4xl font-my-heading mb-4 font-bold text-center">
            <span className="text-my-primary font-bold"> Team </span>
            Members
          </h2>
        </Heading>
        <div className="flex justify-center gap-14 items-center flex-wrap">
          <Instructor />
          <Instructor />
          <Instructor />
        </div>
      </div>

      <div className=" my-container   py-8 my-10 ">
        <Heading>
          {" "}
          <h2 className="text-4xl font-my-heading mb-4 font-bold text-center">
            <span className="text-my-primary font-bold"> Team </span>
            Members
          </h2>
        </Heading>
        <div className="flex justify-center gap-14 items-center flex-wrap">
          <Instructor />
          <Instructor />
          <Instructor />
          <Instructor />
          <Instructor />
          <Instructor />
        </div>
      </div>
    </>
  );
};

export default About;
