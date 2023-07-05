import arrowBottomIcon from "../../../assets/images/icons/arrowBottom.svg";
import flag from "../../../assets/images/icons/flags/AU@2x.png";
import menuIcon from "../../../assets/images/icons/menu.svg";
const NavBar = () => {
  return (
    <>
      <nav className="hidden md:block container mx-auto py-[17px]">
        <div className="flex justify-between">
          <ul className="flex gap-5 items-center text-cgray-700 font-semibold">
            <li>
              {" "}
              <img src={menuIcon} alt="" />
            </li>
            <li>All category</li>
            <li>Hot offers</li>
            <li>Gift boxes</li>
            <li>Projects</li>
            <li className="flex items-center gap-1 justify-center">
              Help <img src={arrowBottomIcon} alt="arrowBottomIcon" />
            </li>
          </ul>
          <section className="flex justify-between gap-10">
            <div className="flex gap-2 items-center ">
              <p>English, USD</p>{" "}
              <img className="w-[12px]" src={arrowBottomIcon} alt="arrowIcon" />
            </div>
            <div className="flex gap-2 items-center">
              <span>Ship to</span>
              <img src={flag} alt="flag icon" className="w-[22px]" />
              <img src={arrowBottomIcon} alt="arrowIcon" />
            </div>
          </section>
        </div>
      </nav>
      {/* Mobile view */}
      <nav className="md:hidden block container mx-auto py-[17px]">
        <div className="flex justify-between">
          <ul className="flex gap-1 items-center text-cgray-700 font-semibold overflow-x-auto w-full">
            <li className="p-[9px] whitespace-nowrap bg-cgray-200 text-cblue rounded-md">
              All category
            </li>
            <li className="p-[9px] whitespace-nowrap bg-cgray-200 text-cblue rounded-md">
              Hot offers
            </li>
            <li className="p-[9px] whitespace-nowrap bg-cgray-200 text-cblue rounded-md">
              Gift boxes
            </li>
            <li className="p-[9px] whitespace-nowrap bg-cgray-200 text-cblue rounded-md">
              Projects
            </li>
            <li className="p-[9px] whitespace-nowrap bg-cgray-200 text-cblue rounded-md">
              Projects
            </li>
            <li className="p-[9px] whitespace-nowrap bg-cgray-200 text-cblue rounded-md">
              Projects
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
