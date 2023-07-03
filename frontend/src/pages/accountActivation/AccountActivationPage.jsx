import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import authService from "../../service/utils/auth.service.js";

const AccountActivationPage = () => {
    const {activation_token} = useParams()
    const [activated, setActivated] = useState({success: false, email: null})
    const [error, setError] = useState({
        error: false,
        message: ""
    })
    useEffect(() => {
        if (activation_token) {
            authService.activate({activation_token}).then(res => {
                setActivated(
                    {
                        success: true,
                        message: res.data.email
                    });
            }).catch(err => {
                console.log(err.response)
                setError({
                    error: true,
                    message: err.response.data.message
                })
            })
        }
    }, [])
    return (
        <div>
            {error && error.error &&
                <div
                    className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
                    <div className="max-w-xl px-5 text-center">
                        <h2 className="mb-2 text-xl text-red-600">{error.message}</h2>
                        <a href="/register"
                           className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">Registration
                            again →</a>
                    </div>
                </div>
            }
            {activated && activated.success &&
                <div
                    className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
                    <div className="max-w-xl px-5 text-center">
                        <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Account is successfully activated.</h2>
                        <a href="/login"
                           className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">
                            Login →
                        </a>
                    </div>
                </div>
            }

        </div>
    );
};

export default AccountActivationPage;