
import ServiceCard from "./ServiceCard.jsx";

const ExtraServices = () => {
    return (
        <div className="extra-service">
            <h2>Our extra services</h2>
            <div className='service-container'>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </div>
    );
};

export default ExtraServices;