import chair from "../../../../assets/images/product/chair.png"

const ProductCard = () => {
    return (
        <div className={"flex md:flex-row flex-col-reverse md:justify-between justify-center md:items-start items-center p-3 md:min-w-auto min-w-[150px]"}>
            <div className={"mt-2"} >
                <h2 className={"text-base font-semibold"}>Sofa chairs</h2>
                <div className={"text-cgray-500 text-xs"}>
                    <span>From</span> <br className={"md:block hidden"}/>
                    <span>USD 19</span>
                </div>
            </div>
            <div>
                <img className={"md:w-12 md:mt-6 w-20"} src={chair} alt="chair image"/>
            </div>
        </div>
    );
};

export default ProductCard;