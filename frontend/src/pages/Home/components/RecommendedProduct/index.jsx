
import ProductCard from "./productCard.jsx";

const RecommendedProduct = () => {
    return (
        <div className="product-container">
            <h2>Recommended items</h2>
			<div className="product-container-inner">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
};

export default RecommendedProduct;