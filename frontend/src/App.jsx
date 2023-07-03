
import './App.css'
import {RouterProvider} from "react-router-dom";
import {RootRouter} from "./routes/Router.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {useGetUserQuery} from "./service/user/UserApi.js";
function App() {
    // const data = useGetUserQuery()
    // console.log(data)
  return (
      <>
        <ToastContainer />
        <RouterProvider router={RootRouter}/>
      </>
  )
}

export default App
