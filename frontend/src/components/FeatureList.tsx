const FeatureList = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={`flex flex-col items-start gap-5 ${className}`}>
      {children}
    </div>
  );
};

export default FeatureList;
