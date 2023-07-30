import flag from "../../../../assets/images/icons/flags/AU@2x.png"
const SupplierCard = () => {
    return (
        <div className="supplier-card">
            <img src={flag} alt=""/>
            <div>
                <h4>Arabic Emirates</h4>
                <span>shopname.com</span>
            </div>
        </div>
    );
};

export default SupplierCard;