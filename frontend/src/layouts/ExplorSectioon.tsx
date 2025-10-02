const ExplorSectioon = ({
  className,
  children,
  reverse,
}: {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`phone-container md:container md:px-0   mx-auto mt-24 flex ${
        reverse ? "flex-col-reverse" : "flex-col"
      } lg:flex-row justify-center items-center w-full  ${className}`}
    >
      {children}
    </div>
  );
};

export default ExplorSectioon;
