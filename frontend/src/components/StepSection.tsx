import StepCard from "./StepCard";

const StepSection = () => {
  const steps = [
    {
      desc: "Sign up in just a few clicks and unlock access to all our courses and learning paths.",
      icon: "icons8-user-100.png",
    },
    {
      desc: "Choose the subject or career path that matches your goals and start your learning journey.",
      icon: "icons8-knowledge-sharing-100.png",
    },
    {
      desc: "Learn at your own pace through videos, exercises, and hands-on practice until you master the skills.",
      icon: "icons8-course-100 (1).png",
    },
    {
      desc: "Earn a recognized certificate that proves your knowledge and helps boost your career opportunities.",
      icon: "icons8-certificate-100.png",
    },
  ];
  return (
    <div className="my-10 flex flex-col md:flex-row md:items-stretch">
      {steps.map((step, index) => (
        <StepCard
          first={index === 0}
          last={index === 3}
          desc={step.desc}
          key={index + 6}
          number={index + 1}
          icon={step.icon}
        />
      ))}
    </div>
  );
};

export default StepSection;
