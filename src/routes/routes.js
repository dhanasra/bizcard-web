import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import SignInPage from "../pages/signin/SignInPage";
import AuthCallbackPage from "../pages/callback/AuthCallbackPage";
import CardsListPage from "../pages/cards/list/CardsListPage";
import SettingsPage from "../pages/settings/SettingsPage";
import CreateCardPage from "../pages/cards/create/CreateCardPage";
import CardViewPage from "../pages/cards/view/CardViewPage";
import ContactsListPage from "../pages/contacts/list/ContactsListPage";
import ContactViewPage from "../pages/contacts/view/ContactViewPage";
import VirtualBackgroundPage from "../pages/backgrounds/VirtualBackgroundPage";
import EmailSignaturesPage from "../pages/signatures/EmailSignaturesPage";
import SignUpPage from "../pages/signup/SignUpPage";
import SetUpPage from "../pages/setup/SetUpPage";
import { Provider, useSelector } from "react-redux";
import { SetupStore } from "../features/setup/setupStore";
import { useEffect } from "react";
import { checkCookies } from "../utils/utils";
import { AppStore } from "../features/app/appStore";

const CheckAuthAndStorage = ({ children }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.app.user);
    const currentLocation = useLocation();
  
    useEffect(() => {
      const isLoggedIn = checkCookies();

      const hasLocalStorage = user!=null;

      const unAuthRoutes = ['/', '/signin', '/signup', '/auth/callback', '/setup'];
      
      if (!unAuthRoutes.includes(currentLocation.pathname)) {
        if (!isLoggedIn || !hasLocalStorage) {
            navigate('/signin'); 
        }
      }else{
        if (isLoggedIn && hasLocalStorage) {
            navigate('/app/cards'); 
        }
      }


    }, [user, navigate, currentLocation]);
  
    return <>{children}</>;
};

const router = [
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/signin',
        element: <SignInPage/>
    },
    {
        path: '/signup',
        element: <SignUpPage/>
    },
    {
        path: '/auth/callback',
        element: <AuthCallbackPage/>
    },
    {
        path: '/setup',
        element: (
            <Provider store={SetupStore}> 
                <SetUpPage/> 
            </Provider>
        )
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
        path: '/app/cards/view',
        element: <CardViewPage/>
    },
    {
        path: '/app/contacts',
        element: <ContactsListPage/>
    },
    {
        path: '/app/contacts/view',
        element: <ContactViewPage/>
    },
    {
        path: '/app/backgrounds',
        element: <VirtualBackgroundPage/>
    },
    {
        path: '/app/email-signatures',
        element: <EmailSignaturesPage/>
    },
    {
        path: '/app/settings',
        element: <SettingsPage/>
    }
]

const AppRouter = () => {
    return <Provider store={AppStore}>
        <CheckAuthAndStorage >
            <Routes>
                {
                    router.map((route)=>{
                        return (
                            <Route key={route.path} path={route.path} element={route.element} />
                        );
                    })
                }
            </Routes>
        </CheckAuthAndStorage>
    </Provider>;
};

export default AppRouter;