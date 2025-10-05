const CategorieCard = ({
  children,
  icon,
  title,
}: {
  children: React.ReactNode;
  icon: string;
  title: string;
}) => {
  return (
    <div className="flex justify-center gap-6 items-center">
      <div className="rounded-full border-2 border-my-secondary overflow-hidden p-4">
        <img src={`./src/assets/icons/${icon}`} alt="" className="w-11" />
      </div>
      <div>
        <h3 className="mb-2.5 font-medium text-xl">{title}</h3>
        <p className="text-black/70">{children}</p>
      </div>
    </div>
  );
};

export default CategorieCard;
