import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/MainPage";
import {loadCategory, Category} from "../components/Category";
import App from "../App";
import {Detail, loadDetail} from "../components/Detail";
import {History} from "../components/History";
import {SavedPost} from "../components/SavedPost";

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
            loader: loadCategory
        }, {
            path: ":cate/:title",
            element: <Detail/>,
            loader: loadDetail
        }, {
            path:"history",
            element:<History/>
        }, {
            path:"saved-post",
            element:<SavedPost/>
        }
    ]
}]);