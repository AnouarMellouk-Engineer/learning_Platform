const LinksList = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div className="flex flex-col justify-start  items-start">
      <h3 className="text-xl font-medium mb-6">{title}</h3>
      <ul>
        {links.map((link) => (
          <li className="mb-2 text-white/70 text-sm ">{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default LinksList;
