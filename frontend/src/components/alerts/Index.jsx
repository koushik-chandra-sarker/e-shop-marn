
const Alerts = (props) => {
    if (props.type==="error") {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                {props.message}
            </div>

        );
    }else if (props.type==="info") {
        return (
            <div className={`flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3`} role="alert">
                <p>{props.message}</p>
            </div>
        );
    }

};

export default Alerts;