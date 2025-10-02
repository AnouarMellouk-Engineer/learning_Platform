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
      } lg:flex-row justify-between items-center w-full gap-16 lg:gap-28 ${className}`}
    >
      {children}
    </div>
  );
};

export default ExplorSectioon;
