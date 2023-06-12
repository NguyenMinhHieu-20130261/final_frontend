import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/MainPage";
import {loadList, Category} from "../components/Category";
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
        },
        {
            path:":cate",
            element:<Category/>,
            loader: loadList
        }
    ]
}]);