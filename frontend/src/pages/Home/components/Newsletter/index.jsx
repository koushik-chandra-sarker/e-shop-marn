import {useFormik} from "formik";

const Newsletter = () => {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="newsletter">
            <h3>Subscribe on our newsletter</h3>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <form >
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                />
                <button className="btn btn-primary rounded" type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;