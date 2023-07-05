const HeaderButton = ({ icon, title }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img className="w-[20px] " src={icon} alt="" />
        <span className="text-[12px] text-gray-500 whitespace-nowrap">
          {title}
        </span>
      </div>
    </>
  );
};

export default HeaderButton;
