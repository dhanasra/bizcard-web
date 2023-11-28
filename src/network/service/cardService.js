import { uploadImage } from "../../utils/utils";
import axiosClient from "../axiosClient";

export async function getCardPreviewDetails(cardId){
    return await axiosClient.get(`/card-preview?cardId=${cardId}`);
}

export async function deleteCard(cardId){
  return await axiosClient.delete(`/card?cardId=${cardId}`);
}

export async function updateQrVisible(status, cardId){
  return await axiosClient.put(`/card?cardId=${cardId}`, {qrVisible: status});
}

export async function updateQrLogo(status, cardId){
  return await axiosClient.put(`/card?cardId=${cardId}`, {qrWithLogo: status});
}

export async function pauseCard(isPaused, cardId){
  return await axiosClient.put(`/card?cardId=${cardId}`, {status: isPaused ? "ACTIVE" : "PAUSED"});
}

export async function saveBizcard(data){

    const formDataToSend = new FormData();
    
    const excludeKeys = ['logo', 'picture', 'banner'];

    const recursivelyAppendToFormData = (data, parentKey = '') => {
      Object.keys(data).forEach((key) => {
        const currentKey = parentKey ? `${parentKey}.${key}` : key;
    
        if (!excludeKeys.includes(currentKey)) {
          const value = data[key];
    
          if (typeof value === 'object' && value !== null) {
            recursivelyAppendToFormData(value, currentKey);
          } else {
            formDataToSend.append(currentKey, value);
          }
        }
      });
    };

    recursivelyAppendToFormData(data);

    if (data.logo) {
      formDataToSend.append('logo', true);
    }

    if (data.picture) {
      formDataToSend.append('picture', true);
    }

    if (data.banner) {
      formDataToSend.append('banner', true);
    }

    const result = await axiosClient.post('/card', formDataToSend);

    await Promise.all([
      data.logo && uploadImage(`card/${result._id}`, 'logo.jpg', data.logo),
      data.picture && uploadImage(`card/${result._id}`, 'profile.jpg', data.picture),
      data.banner && uploadImage(`card/${result._id}`, 'banner.jpg', data.banner),
    ]);

    return result;
}