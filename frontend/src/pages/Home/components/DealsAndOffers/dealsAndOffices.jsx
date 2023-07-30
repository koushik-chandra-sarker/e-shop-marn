
import DealCard from "./DealCard.jsx";
import watch from "../../../../assets/images/tech/image 35.png"
const DealsAndOffices = () => {
    return (
        <section className={"mx-auto"}>
            <div className={"bg-white flex md:flex-row flex-col p-[2px] md:shadow"}>
                <div className={"min-w-[250px] md:p-[20px] flex md:flex-col flex-row md:gap-0 gap-5 md:justify-start justify-between"}>
                    <div>
                        <h2 className={"font-bold md:text-[20px] text-base"}>Deals and offers</h2>
                        <h5 className={"md:text-[16px] text-[13px] text-gray-500 mb-[18px]"}>Hygiene equipments</h5>
                    </div>
                    <div className={"flex gap-1"}>
                        <div
                            className={"md:w-[45px] w-[40px] md:h-[50px] h-[45px] md:bg-gray-500 bg-cgray-200 md:text-white text-cgray-500 rounded-md flex flex-col justify-center items-center"}>
                            <p className={"md:text-[16px] text-[12px] font-semibold"}>04</p>
                            <p className={"md:text-[12px] text-xs"}>Days</p>
                        </div>
                        <div
                            className={"md:w-[45px] w-[40px] md:h-[50px] h-[45px] md:bg-gray-500 bg-cgray-200 md:text-white text-cgray-500 rounded-md flex flex-col justify-center items-center"}>
                            <p className={"md:text-[16px] text-[12px] font-semibold"}>13</p>
                            <p className={"md:text-[12px] text-xs"}>Hour</p>
                        </div>
                        <div
                            className={"md:w-[45px] w-[40px] md:h-[50px] h-[45px] md:bg-gray-500 bg-cgray-200 md:text-white text-cgray-500 rounded-md flex flex-col justify-center items-center"}>
                            <p className={"md:text-[16px] text-[12px] font-semibold"}>54</p>
                            <p className={"md:text-[12px] text-xs"}>Min</p>
                        </div>
                        <div
                            className={"md:w-[45px] w-[40px] md:h-[50px] h-[45px] md:bg-gray-500 bg-cgray-200 md:text-white text-cgray-500 rounded-md flex flex-col justify-center items-center"}>
                            <p className={"md:text-[16px] text-[12px] font-semibold"}>10</p>
                            <p className={"md:text-[12px] text-xs"}>Sec</p>
                        </div>

                    </div>
                </div>
                <div className={"flex overflow-x-auto no-scrollbar"}>
                    <div className={"md:border-l"}><DealCard image={watch} title={"Smart watches"} discount={'-25%'}/></div>
                    <div className={"border-l"}><DealCard image={watch} title={"Smart watches"} discount={'-25%'}/></div>
                    <div className={"border-l"}><DealCard image={watch} title={"Smart watches"} discount={'-25%'}/></div>
                    <div className={"border-l"}><DealCard image={watch} title={"Smart watches"} discount={'-25%'}/></div>
                    <div className={"border-l"}><DealCard image={watch} title={"Smart watches"} discount={'-25%'}/></div>
                </div>
            </div>
        </section>
    );
};

export default DealsAndOffices;