import SupplierCard from "./supplierCard.jsx";

const Suppliers = () => {
    return (
        <div className="supplier-container">
            <h2>Suppliers by region</h2>
            <div className="supplier">
                <SupplierCard/>
                <SupplierCard/>
                <SupplierCard/>
                <SupplierCard/>
                <SupplierCard/>
                <SupplierCard/>
                <SupplierCard/>
                <SupplierCard/>
            </div>
        </div>

    );
};

export default Suppliers;