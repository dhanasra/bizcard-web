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

export function clearCache(){
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    localStorage.clear();
}

export function generateRandomId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const anyNotEmpty = (obj) => {
    if (Object.keys(obj).length === 0) {
      return true;
    }
  
    return Object.values(obj).some(([key, value]) => value && value !== "");
};

export const getFieldIcon = (fieldId) => {
    return window.config.fieldTypes.find(obj => obj._id === fieldId).icon;
};