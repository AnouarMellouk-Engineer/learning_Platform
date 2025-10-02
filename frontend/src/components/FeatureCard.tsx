const FeatureCard = ({
  name,
  icon,
  children,
}: {
  name: string;
  icon: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-start  items-center lg:items-start gap-4">
      <div className="overflow-hidden">
        <img src={`./src/assets/icons/${icon}`} alt="" className="w-12" />
      </div>
      <div className=" text-my-primary text-center lg:text-left flex lg:block flex-col items-center">
        <h3 className="text-2xl mb-2 font-my-heading font-medium">{name}</h3>
        <p className="text-my-text-main/70 text-sm w-full lg:w-1/2">
          {children}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
