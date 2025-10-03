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
    // mx-auto
    // md:px-0
    <div
      className={`phone-container my-container     mt-24 flex ${
        reverse ? "flex-col-reverse" : "flex-col"
      } lg:flex-row justify-center items-center w-full  ${className}`}
    >
      {children}
    </div>
  );
};

export default ExplorSectioon;
