const SocialIcon = ({ src }: { src: string }) => {
  return (
    <div className="p-2 rounded-full border-1 border-black/30 duration-300 hover:bg-my-background overflow-hidden w-9">
      <img src={src} alt="" className="w-full" />
    </div>
  );
};

export default SocialIcon;
