import Header from "../../components/Layout/header/Index";
import NavBar from "../../components/Layout/navbar/Index";
import banner from "../../assets/images/Banner-board-800x420.png"
import defaultAvatar from "../../assets/images/avater/default-avatar.png"

import DealsAndOffices from "./components/DealsAndOffers/dealsAndOffices.jsx";
import ProductForCategory from "./components/ProductForCategory/index.jsx";
import SupplierQuote from "./components/SupplierQuote/index.jsX";
import RecommendedProduct from "./components/RecommendedProduct/index.jsx";
import ExtraServices from "./components/ExtraService/index.jsx";
import Newsletter from "./components/Newsletter/index.jsx";
import Suppliers from "./components/Supplier/index.jsx";
import Footer from "../../components/Layout/footer/index.jsx";

const HomePage = () => {
    return (
        <main className="md:bg-cgray-100">
            <Header/>
            <hr className="bg-gray-500 md:block hidden"/>
            <NavBar/>
            {/*Mobile: category */}
            <div className="md:hidden block flex justify-between container">
                <ul className="flex gap-1 items-center text-cgray-700 font-semibold overflow-x-auto no-scrollbar w-full">
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
            <hr className="bg-gray-500  md:block hidden"/>
            <section className={"md:container mx-auto"}>
                <div className={"bg-white flex gap-5 justify-between md:p-[20px] shadow"}>
                    {/*category section*/}
                    <ul
                        className={"xl:min-w-[250px] lg:min-w-[170px] md:min-w-[150px] md:block hidden  " +
                            "xl:text-[16px] text-xs"}>
                        <li className={"bg-cblue-light p-[8px] rounded"}>Automobile</li>
                        <li className={"p-[8px] rounded"}>Clothes and wear</li>
                        <li className={"p-[8px] rounded"}>Home interiors</li>
                        <li className={"p-[8px] rounded"}>Computer and tech</li>
                        <li className={"p-[8px] rounded"}>Tools, equipments</li>
                        <li className={"p-[8px] rounded"}>Sports and outdoor</li>
                        <li className={"p-[8px] rounded"}>Animal and pets</li>
                        <li className={"p-[8px] rounded"}>Machinery tools</li>
                        <li className={"p-[8px] rounded"}>More category</li>
                    </ul>
                    {/*banner section*/}
                    <div className={"relative w-full"}>
                        <img
                            className={"max-w-full"}
                            src={banner}
                            alt="banner"/>
                        <div className={"absolute md:left-[44px] md:top-[56px] left-[25px] top-[30px]"}>
                            <h3 className={"xl:text-[28px] lg:text-[20px] text-[18px] "}>Latest trending</h3>
                            <h2 className={"xl:text-[28px] lg:text-[20px] text-[18px] font-bold"}>Electronic items</h2>
                            <button
                                className="mt-[17px] px-[16px] py-[5px] xl:text-[13px] text-xs bg-white rounded">Learn
                                more
                            </button>
                        </div>
                    </div>
                    {/*promotion section*/}
                    <div className={"xl:min-w-[200px] lg:min-w-[170px] md:block hidden"}>
                        <div className={"w-full bg-cblue-light rounded-md mb-[10px] pt-[15px] px-[10px] pb-[12px]"}>
                            <div className={"flex gap-3"}>
                                <img className={"xl:w-[44px] xl:h-[44px] md:w-[33px] md:h-[33px] rounded-full"}
                                     src={defaultAvatar} alt="avater"/>
                                <div className={"xl:text-[16px] text-xs"}>
                                    <p>Hi, User</p>
                                    <p>let’s get stated</p>
                                </div>
                            </div>
                            <button
                                className="w-full mt-[14px] px-[16px] py-[5px] bg-cblue xl:text-[13px] text-xs text-white rounded">Learn
                                more
                            </button>
                            <button
                                className="w-full mt-[7px] px-[16px] py-[5px] bg-white xl:text-[13px] text-xs text-cblue border border-gray-200 rounded">Learn
                                more
                            </button>
                        </div>
                        <div className={"px-[16px] py-[22px] bg-corange rounded-md xl:text-base text-xs"}>Get US $10 off
                            with a new
                            supplier
                        </div>
                        <div
                            className={"px-[16px] py-[22px] bg-[#55BDC3] mt-[10px] rounded-md xl:text-base text-xs"}>Send
                            quotes with
                            supplier preferences
                        </div>
                    </div>
                </div>
            </section>
            {/*    deal section*/}
            <div className={"container"}>
                <DealsAndOffices/>
            </div>

            <div className={"container"}>
                <ProductForCategory/>
            </div>
            <div className={"container"}>
                <ProductForCategory/>
            </div>

            <div className={"container"}>
                <SupplierQuote/>
            </div>
            <div className={"container"}>
                <RecommendedProduct/>
            </div>

            <div className={"container"}>
                <ExtraServices/>
            </div>
            <div className={"container mb-[30px]"}>
                <Suppliers/>
            </div>
            <div className={"bg-cgray-200 py-4 md:p-8"}>
                <div className={"container"}>
                    <Newsletter/>
                </div>
            </div>
            <div className={"bg-white p-8"}>
                <div className={"container "}>
                    <Footer/>
                </div>
            </div>
        </main>)
        ;
};

export default HomePage;
