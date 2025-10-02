// const FloatingIcon = ({
//   className,
//   children,
// }: {
//   className: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={`p-3 rounded-full shadow-xl  bg-[#E4F9F5] w-16 absolute z-40 flex items-center justify-center ${className} `}
//     >
//       {children}
//     </div>
//   );
// };

// export default FloatingIcon;

const FloatingIcon = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`p-3 rounded-full shadow-xl bg-[#E4F9F5] w-16 absolute z-40 flex items-center justify-center  ${className}`}
    >
      {children}
    </div>
  );
};

export default FloatingIcon;
