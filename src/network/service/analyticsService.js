import axiosClient from "../axiosClient";


export async function updateAnalytics(cardId, type){
    return await axiosClient.put(`/analytics?cardId=${cardId}`, {'type': type});
}
