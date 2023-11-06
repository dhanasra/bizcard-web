import Cookies from "js-cookie";

export function checkCookies(){
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken && refreshToken) {
        return true; 
    } else {
        return false; 
    }
}

export function checkLocalStorage(){
    const storage = localStorage.getItem('user');
    
    if (storage) {
        return true; 
    } else {
        return false; 
    }
}
