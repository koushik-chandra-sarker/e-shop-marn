import {useFormik} from "formik";
import {signup_validation} from "../../assets/Validation.jsx";
import Alerts from "../../components/alerts/Index.jsx";
import authService from "../../service/utils/auth.service.js";

import {useState} from "react";
import {toast} from "react-toastify";
import {BeatLoader} from "react-spinners";

const RegistrationPage = () => {
    const [activation, setActivation] = useState({success: false, message: ""})
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            avatar: '',
            password: ''
        },
        validate: signup_validation,
        onSubmit: values => {
            setLoading(true);
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("password", values.password);
            formData.append("file", values.avatar);
            authService.registration(formData).then(r => {
                setActivation({success: true, message: r.data.message});
                formik.resetForm();
                setLoading(false);
            }).catch(e => {
                toast.error(e.response.data.message, {position: "bottom-center",})
                setLoading(false);
            })
        },
    });
    return (<>
            {activation && activation.success &&
                <Alerts type={"info"} message={activation.message}/>
            }
            <section
                className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        alt="Sample image"/>
                </div>

                <div className="md:w-1/3 max-w-sm">
                    <div className="text-center md:text-left mb-5 text-xl font-bold">
                        <label className="mr-1">Register as a new user</label>
                    </div>
                    {formik.errors.name &&
                        formik.touched.name &&
                        <>
                            <Alerts type={"error"} message={formik.errors.name}/> <br/>
                        </>
                    }
                    {formik.errors.email &&
                        formik.touched.email &&
                        <>
                            <Alerts type={"error"} message={formik.errors.email}/> <br/>
                        </>
                    }
                    {formik.errors.password &&
                        formik.touched.password &&
                        <>
                            <Alerts type={"error"} message={formik.errors.password}/> <br/>
                        </>
                    }
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            id='name'
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <input
                            id='email'
                            className="mt-4 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <input
                            id='password'
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <input
                            id='avatar'
                            className="
                        text-sm relative m-0 block w-full min-w-0 flex-auto cursor-pointer px-4 py-2 border border-solid border-gray-300 rounded mt-4
                        bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"

                            type="file"
                            name="avatar"
                            placeholder="Profile Picture"
                            onChange={(e) =>
                                formik.setFieldValue('avatar', e.currentTarget.files[0])
                            }
                        />
                        <div className="text-center md:text-left">
                            <button
                                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                                type="submit"
                            >
                                {loading ?
                                    <div className="inline-block ml-2">
                                        <BeatLoader
                                            color="#8fa7ff"
                                            size={10}
                                        />
                                    </div> :
                                    <>Register</>
                                }
                            </button>
                        </div>
                    </form>
                    <div
                        className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Already have an account?
                        <a className="text-red-600 hover:underline hover:underline-offset-4" href="/login">
                            Login
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default RegistrationPage;