import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/login/LoginPage.jsx";
import RegistrationPage from "../pages/registration/RegistrationPage.jsx";
import AccountActivationPage from "../pages/accountActivation/AccountActivationPage.jsx";
import HomePage from "../pages/Home/HomePage.jsx";

export const RootRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegistrationPage/>,
    },
    {
        path: "/activation/:activation_token",
        element: <AccountActivationPage/>,
    },
]);