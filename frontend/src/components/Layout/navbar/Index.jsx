import arrowBottomIcon from "../../../assets/images/icons/arrowBottom.svg";
import flag from "../../../assets/images/icons/flags/AU@2x.png";
import menuIcon from "../../../assets/images/icons/menu.svg";
const NavBar = () => {
  return (
    <div className={"bg-white"}>
      <nav className="hidden md:block container my-0 mx-auto py-[17px]">
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
      {/*<nav className="md:hidden block container mx-auto py-[17px]">*/}
      {/*</nav>*/}
    </div>
  );
};

export default NavBar;
