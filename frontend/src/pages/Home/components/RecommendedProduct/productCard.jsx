import headPhone from "../../../../assets/images/product/headphone.png"
const ProductCard = () => {
    return (
        <div className="product-card">
            <img src={headPhone} alt="product-image"/>
            <span>$10.30</span>
            <p>T-shirts with multiple colors, for men</p>
        </div>
    );
};

export default ProductCard;