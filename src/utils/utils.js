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
export const handleBase64Image = (base64String) => {
    // Remove the "data:image/jpeg;base64," prefix
    const base64WithoutPrefix = base64String.replace(/^data:image\/[a-z]+;base64,/, '');

    // Convert to a binary format
    const binaryString = atob(base64WithoutPrefix);

    // Create a Uint8Array from the binary string
    const uint8Array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob object from the Uint8Array
    const blob = new Blob([uint8Array], { type: 'image/jpeg' });

    return blob;
};