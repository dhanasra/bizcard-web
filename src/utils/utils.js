import Cookies from "js-cookie";
import Wave from "../assets/svgs/wave.svg"
import Wave1 from "../assets/svgs/wave_1.svg"
import Wave2 from "../assets/svgs/wave_2.svg"
import Wave3 from "../assets/svgs/wave_3.svg"

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
      return false;
    }
  
    return Object.values(obj).some(([key, value]) => value && value !== "");
};

export const getFieldIcon = (fieldId) => {
    return window.config.fieldTypes.find(obj => obj._id === fieldId).icon;
};

export const designs = [
    {
        id: "d-1",
        name: "classic",
        wave: Wave
    },
    {
        id: "d-2",
        name: "modern",
        wave: Wave1
    },
    {
        id: "d-3",
        name: "sleek",
        wave: Wave2
    },
    {
        id: "d-4",
        name: "flat",
        wave: Wave3
    }
];

export function getDesign(name) {
    return designs.find(design=>design.name===name);
}