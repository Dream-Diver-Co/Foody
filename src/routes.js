import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Shef from "./pages/shef";
import Feature from "./components/Feature/Feature";
import Subacriptions from "./components/Subscription/Subacriptions";
import Menu from "./components/Menu/Menu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "shef",
        element: <Shef/>,
    },
    {
        path: "Feature",
        element: <Feature />,
    },
    {
        path: "Menu",
        element: <Menu />,
    },
    {
        path: "Subscription",
        element: <Subacriptions />,
    }
    
]);

export default router;