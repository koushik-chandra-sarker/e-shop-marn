import cartIcon from "../../../assets/images/icons/cart.svg";
import OrderIcon from "../../../assets/images/icons/heart.svg";
import menuIcon from "../../../assets/images/icons/menu.svg";
import messageIcon from "../../../assets/images/icons/message.svg";
import profileIcon from "../../../assets/images/icons/profile.svg";
import searchIcon from "../../../assets/images/icons/search.svg";
import logo from "../../../assets/images/logo-colored.png";
import HeaderButton from "../../button/HeaderButton";

const Header = () => {
  return (
    <div className={'bg-white'}>
      <header className={"hidden md:block container my-0 mx-auto bg-white"}>
        <div className={"flex py-[20px] gap-10 items-center justify-between"}>
          <img className={"h-[46px]"} src={logo} alt="Logo" />
          <div>
            <form className="flex">
              <input
                className="xl:w-[406px] lg:w-[300px] md:w-[200px] lg:py-[10px] lg:pl-[10px] lg:pr-[5px] md:py-[5px] md:pl-[5px] md:pr-[3px] border-[3px] border-cblue rounded-l-md focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={"Search..."}
              />
              <select
                name="category"
                id="category"
                className="py-[10px] pl-[10px] pr-[5px] border-[3px] border-cblue border-l-0 lg:rounded-none rounded-r-md  focus:outline-none focus:shadow-outline"
              >
                <option value="option 1">All Category</option>
                <option value="option 2">Option 2</option>
                <option value="option 3">Option 3</option>
                <option value="option 4">Option 4</option>
              </select>
              <button className="lg:block hidden lg:w-[100px] p-[10px] bg-cblue rounded-r-md text-white">
                Search
              </button>
            </form>
          </div>
          <div className="flex gap-5 justify-center">
            <HeaderButton icon={profileIcon} title="Profile" />
            <HeaderButton icon={messageIcon} title="Messages" />
            <HeaderButton icon={OrderIcon} title="Orders" />
            <HeaderButton icon={cartIcon} title="My Cart" />
          </div>
        </div>
      </header>

      {/* Mobile view */}
      <header className={"md:hidden block container mx-auto"}>
        <div className={"flex flex-col py-[18px] items-center justify-between"}>
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-2">
              <img src={menuIcon} alt="" />
              <img className={"h-[36px]"} src={logo} alt="Logo" />
            </div>

            <div className="flex gap-5 justify-center">
              <HeaderButton icon={messageIcon} />
              <HeaderButton icon={cartIcon} />
              <HeaderButton icon={profileIcon} />
            </div>
          </div>

          <form className="flex  mt-4 w-full">
            <div className="relative w-full">
              <img
                src={searchIcon}
                alt="search icon"
                className="absolute top-[16px] left-2"
              />
              <input
                className="w-full py-[10px] pl-[35px] pr-[5px] border-[3px] border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={"Search..."}
              />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
