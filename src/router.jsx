import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./view/dashboard";
import NotFound from "./view/notfound";
import Landing from "./view/landing";
import GalleryView from "./view/galery";
import Login from "./view/login";

const router = createBrowserRouter([
    {
        path:'/home',
        element:<Landing/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/gallery',
        element:<GalleryView/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
]);
export default router;