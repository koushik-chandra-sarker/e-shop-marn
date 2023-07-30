import service1 from "../../../../assets/images/service1.png"
import search from "../../../../assets/images/icons/control/search.svg"
const ServiceCard = () => {
    return (
        <div className="service-card">
            <div className="top">
                <img className="thumb" src={service1} alt="service-thumbnail"/>
                <img className="icon" src={search} alt="icon"/>
            </div>
            <p>Source from Industry Hubs</p>
        </div>
    );
};

export default ServiceCard;