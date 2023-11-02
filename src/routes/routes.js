import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import SignInPage from "../pages/signin/SignInPage";
import CreateProfilePage from "../pages/profile/create/CreateProfilePage";
import AuthCallbackPage from "../pages/callback/AuthCallbackPage";
import CardsListPage from "../pages/cards/list/CardsListPage";
import SettingsPage from "../pages/settings/SettingsPage";
import CreateCardPage from "../pages/cards/create/CreateCardPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/signin',
        element: <SignInPage/>
    },
    {
        path: '/auth/callback',
        element: <AuthCallbackPage/>
    },
    {
        path: '/profile/create',
        element: <CreateProfilePage/>
    },
    {
        path: '/app/cards',
        element: <CardsListPage/>
    },
    {
        path: '/app/cards/create',
        element: <CreateCardPage/>
    },
    {
        path: '/app/settings',
        element: <SettingsPage/>
    }
])

export default router;