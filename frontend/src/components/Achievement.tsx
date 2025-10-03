const Achievement = ({
  children,
  icon,
  number,
}: {
  children: React.ReactNode;
  icon: string;
  number: string;
}) => {
  return (
    <div className="flex flex-col justify-start items-center gap-3">
      <div className="overflow-hidden ">
        <img src={`./src/assets/icons/${icon}`} alt="" className="w-24" />
      </div>
      <p className=" text-3xl font-bold">+ {number}</p>
      <p className="text-my-secondary text-2xl text-center font-bold ">
        {children}
      </p>
    </div>
  );
};

export default Achievement;
