const StepIcon = ({ src }: { src: string }) => {
  return (
    <div className="bg-my-secondary rounded-bl-4xl rounded-tr-4xl p-8  w-36 h-36">
      <img src={`./src/assets/icons/${src}`} alt="" />
    </div>
  );
};

export default StepIcon;
