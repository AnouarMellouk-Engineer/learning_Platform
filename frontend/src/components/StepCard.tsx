import StepIcon from "./StepIcon";

const StepCard = ({
  last = false,
  first = false,
  icon,
  desc,
  number,
}: {
  last?: boolean;
  first?: boolean;
  icon: string;
  desc: string;
  number: number;
}) => {
  return (
    // <div>
    //   <h3
    //     className={`text-4xl relative  px-4 border-l-2 md:border-0 border-my-secondary  before:content-[''] before:absolute ${
    //       first ? "before:top-0" : "before:top-2.5"
    //     } before:-left-2.5 before:w-5 before:h-5 before:bg-my-secondary md:before:bg-transparent  before:rounded-full`}
    //   >
    //     Step {number}
    //   </h3>
    //   <div
    //     className={` border-l-2 md:border-t-2 md:border-l-0 relative border-my-secondary md:mt-2.5 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-5 before:h-5 md:before:bg-my-secondary before:rounded-full  ${
    //       last &&
    //       "after:content-[''] after:absolute after:bottom-0 after:-left-2.5 md:after:-top-3 md:after:left-full  after:w-5 after:h-5 after:bg-my-secondary after:rounded-full"
    //     } px-4 pb-20 md:pb-0 md:flex md:flex-col md:justify-between md:items-start`}
    //   >
    //     <p className=" pt-3.5 mb-3.5  ">{desc}</p>
    //     <StepIcon src={icon} />
    //   </div>
    // </div>

    <div className="flex flex-col justify-between flex-1">
      <h3
        className={`text-4xl relative px-4 border-l-2 md:border-0 border-my-secondary before:content-[''] before:absolute ${
          first ? "before:top-0" : "before:top-2.5"
        } before:-left-2.5 before:w-5 before:h-5 before:bg-my-secondary md:before:bg-transparent before:rounded-full`}
      >
        Step {number}
      </h3>

      <div
        className={`flex flex-col justify-between border-l-2 md:border-t-2 md:border-l-0 relative border-my-secondary md:mt-2.5 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-5 before:h-5 md:before:bg-my-secondary before:rounded-full ${
          last &&
          "after:content-[''] after:absolute after:bottom-0 after:-left-2.5 md:after:-top-3 md:after:left-full after:w-5 after:h-5 after:bg-my-secondary after:rounded-full"
        } px-4 pb-20 md:pb-0 md:flex md:flex-col md:justify-between md:items-start flex-1`}
      >
        <p className="pt-3.5 mb-3.5 flex-1">{desc}</p>
        <StepIcon src={icon} />
      </div>
    </div>
  );
};

export default StepCard;
