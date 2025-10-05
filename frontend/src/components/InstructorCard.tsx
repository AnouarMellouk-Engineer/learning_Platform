const InstructorCard = ({
  image,
  name,
  title,
  reverse,
}: {
  image: string;
  name: string;
  title: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "lg:flex-col-reverse" : "lg:flex-col"
      } flex-col justify-start items-center gap-5 w-[250px]`}
    >
      <div className="relative">
        {/* <div className="w-full h-[300px] border-3 border-my-secondary absolute top-2 border-dashed left-2.5 rounded-full"></div> */}
        <div className="rounded-full overflow-hidden w-full relative z-20 border-3 border-my-secondary">
          <img src={`./src/assets/images/${image}`} alt="" className="w-full" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-center">{name}</h3>
        <p className="text-black/70 text-center">{title}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
