// align = "h" or "v"
const Divider = ({align, color, size}) => {
    if (align === "h") {
        return(
            <hr className={`bg-[${color}] h-[${size}]`}/>
        )
    }else if (align === "v") {
        return(
            <div className={`bg-[${color}] h-full w-[${size}]`}/>
        )
    }
};

export default Divider;