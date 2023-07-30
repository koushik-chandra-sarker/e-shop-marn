
const DealCard = ({image, title, discount}) => {
    return (
        <div className={"md:min-w-[155px] min-w-[130px] bg-white  flex flex-col gap-3 justify-center items-center md:p-[20px] p-[10px] pt-[8px]"} >
            <img className={"md:w-[145px] h-[135px] w-[135px] md:h-[145px] object-contain"} src={image} alt="thumbnail"/>
            <h2 className={"md:text-base text-[14px]"}>{title}</h2>
            <span className={"rounded-full bg-corange-light px-5"}>{discount}</span>
        </div>
    );
};

export default DealCard;