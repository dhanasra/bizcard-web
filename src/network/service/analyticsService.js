import Cookies from "js-cookie";
import axiosClient from "../axiosClient";


export async function updateAnalytics(cardId, type){
    return await axiosClient.put(`/analytics?cardId=${cardId}`, {'type': type});
}

export async function updateViewCount(cardId){

    return await axiosClient.put(`/analytics?cardId=${cardId}`, {'type': "view"});
}

export async function updateUniqueViewCount(cardId){
    
    const isVisited = Cookies.get("visited");
    
    if(isVisited){
        return;
    }

    Cookies.set("visited", true);

    return await axiosClient.put(`/analytics?cardId=${cardId}`, {'type': "unique"});
}
