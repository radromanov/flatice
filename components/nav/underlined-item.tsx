const UnderlinedItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="cursor-pointer px-2 font-medium group">
        <span>{children}</span>
        <div className="border border-b-black w-0 group-hover:w-full transition-all duration-300" />
      </div>
    </>
  );
};

export default UnderlinedItem;
