import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import SignInPage from "../pages/signin/SignInPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/signin',
        element: <SignInPage/>
    }
])

export default router;