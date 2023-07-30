import {useFormik} from "formik";

const SupplierQuote = () => {
    const formik = useFormik({
        initialValues: {
            item: '',
            details: '',
            quantity: '',
            unit: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={"supplier-quote-outer "}>
            <div className={"supplier-quote-inner"}>
                <div className={"left"}>
					<h3>An easy way to send requests to all suppliers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
					<button className="btn  btn-primary rounded mt-5">Send inquiry</button>
                </div>
                <div className="form ">
                    <h2>Send quote to suppliers</h2>
                    <form  onSubmit={formik.handleSubmit}>
                        <input id={"item"}
                               name={"item"}
                               type={"text"}
                               onChange={formik.handleChange}
                               value={formik.values.item}
                               placeholder={"What item you need?"}
                        />
                        <textarea
                            id={"details"}
                            name={"details"}
                            onChange={formik.handleChange}
                            value={formik.values.details}
                            placeholder={"Type more details"}
                        />
                        <div className={"grid grid-cols-2 gap-5"}>
                            <input
                                id={"quantity"}
                                name={"quantity"}
                                onChange={formik.handleChange}
                                value={formik.values.quantity}
                                placeholder={"Quantity"}
                            />
                            <select id={"unit"} name={"unit"} onChange={formik.handleChange} value={formik.values.unit}>
                                <option value="Pcs">Pcs</option>
                                <option value="Kg">Kg</option>
                                <option value="Liter">Liter</option>
                            </select>
                        </div>

                        <input type="submit"/>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SupplierQuote;