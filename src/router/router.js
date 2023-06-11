import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/MainPage";
import {Detail} from "../components/NewDetails";
import App from "../App";

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
        }
        // ,{
        // path:"detail",
        //     element:<Detail/>
        // }
        ]
}]);