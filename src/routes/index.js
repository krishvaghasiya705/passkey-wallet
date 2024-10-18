import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Playground from "../module/playground";
import Errorpage from "../module/Erropage";
// import Developer from "../module/devloper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => {
                    document.body.style.backgroundColor = "#181818";
                    return null;
                },
            },
            // {
            //     path: "/developer",
            //     element: <Developer />,
            //     loader: () => {
            //         document.body.style.backgroundColor = "#fff";
            //         return null;
            //     },
            // },
            {
                path: "/playground",
                element: <Playground />,
                loader: () => {
                    document.body.style.backgroundColor = "#181818";
                    return null;
                },
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage />,
        loader: () => {
            document.body.style.backgroundColor = "#e3afbe";
            return null;
        },
    }
]);

export default router;
