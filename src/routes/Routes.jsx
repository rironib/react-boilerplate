import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root.jsx";
import Error from "../pages/Error/Error.jsx";
import Home from "../pages/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default router;