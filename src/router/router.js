import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/MainPage";
import BreadCrumb, {Detail} from "../components/NewDetails";
import App from "../App";
import {Category} from "../components/Category";

export const router = createBrowserRouter([{
    element: <App/>,
    path: "/",
    children:[
        {
            path:"",
            element:<Home/>
        },{
            path:"home",
            element:<Home/>
        },
        {
            path:"category",
            element:<Category/>
        }
    ]
}]);