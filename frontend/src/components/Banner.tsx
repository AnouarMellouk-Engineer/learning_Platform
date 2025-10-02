import { Star } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative  ">
      <div className="   bg-my-secondary h-20"></div>
      <div className="bg-my-background h-20 absolute top-0 w-[105%] left-[-5px] rotate-2  md:rotate-1 overflow-hidden flex justify-center">
        <div className="w-full max-w-5xl px-12">
          {" "}
          {/* 👈 controls side margins */}
          <ul className="flex items-center gap-14 h-full animate-slide whitespace-nowrap">
            {["Learning", "Growth", "Develop", "Build", "Work"].map((p, i) => (
              <li
                key={i}
                className="flex items-center gap-14 text-white text-lg font-medium"
              >
                {p}
                <Star className="text-white" size={20} />
              </li>
            ))}
            {/* Duplicate items for infinite loop */}
            {["Learning", "Growth", "Develop", "Build", "Work"].map((p, i) => (
              <li
                key={`dup-${i}`}
                className="flex items-center gap-14 text-white text-lg font-medium"
              >
                {p}
                <Star className="text-white" size={20} />
              </li>
            ))}
            {/* Duplicate items for infinite loop */}
            {["Learning", "Growth", "Develop", "Build", "Work"].map((p, i) => (
              <li
                key={`dup-${i}`}
                className="flex items-center gap-14 text-white text-lg font-medium"
              >
                {p}
                <Star className="text-white" size={20} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
