import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Shef from "./pages/shef";
import Feature from "./components/Feature/Feature";
import Foodmenu from "./components/Foodmenu/Foodmenu";
import Subacriptions from "./components/Subscription/Subacriptions";


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
        path: "Foodmenu",
        element: <Foodmenu />,
    },
    {
        path: "Subscription",
        element: <Subacriptions />,
    }
    
]);

export default router;