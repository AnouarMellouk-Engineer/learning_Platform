const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  flex-col justify-center items-center w-full my-16 ">
      {children}
    </div>
  );
};

export default Heading;
