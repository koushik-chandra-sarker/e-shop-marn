import ProductCard from "./ProductCard.jsx";
import homeCat from "../../../../assets/images/category/home-outdoor-cat.png"

const ProductForCategory = () => {
    return (
        <div className={"flex md:flex-row flex-col"}>
            <div className={`md:block hidden lg:min-w-[250px] min-w-[200px] md:p-[20px] bg-cover`} style={{backgroundImage: `url(${homeCat})`}} >
                <h2 className={"text-xl font-bold"}>Home and Outdoor</h2>
                <button className="mt-[17px]  px-[16px] py-[5px] xl:text-[13px] text-xs bg-white rounded">
                    Source Now
                </button>
            </div>
            <h2 className={"md:hidden block my-[20px] text-[18px] font-bold"}>Home and outdoor</h2>
            <div className="w-full">
                <div className={"md:grid lg:grid-cols-4 md:grid-cols-3 md:auto-rows-auto flex flex-row overflow-x-auto no-scrollbar]"}>
					<div className={"md:border border-l border-cgray-200 "}><ProductCard/></div>
					<div className={"md:border border-l border-cgray-200 "}><ProductCard/></div>
					<div className={"md:border border-l border-cgray-200 "}><ProductCard/></div>
					<div className={"md:border border-l border-cgray-200 "}><ProductCard/></div>
					<div className={"md:border border-l border-cgray-200 "}><ProductCard/></div>
					<div className={"md:border border-l border-cgray-200 "}><ProductCard/></div>
					<div className={"md:border border-l border-cgray-200 "}><ProductCard/></div>
					<div className={"md:border border-l border-cgray-200 "}><ProductCard/></div>

                </div>
            </div>

        </div>
    );
};

export default ProductForCategory;