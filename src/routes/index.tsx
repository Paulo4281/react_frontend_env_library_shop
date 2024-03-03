import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./auth";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Auth />
        }
    ]
);

export { router };