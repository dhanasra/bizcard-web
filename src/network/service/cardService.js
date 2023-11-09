import { handleBase64Image } from "../../utils/utils";
import axiosClient from "../axiosClient";

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
        const logoBlob = handleBase64Image(data.logo);
        formDataToSend.append('logo', logoBlob, 'logo.jpg');
    }

    if (data.picture) {
        const pictureBlob = handleBase64Image(data.picture);
        formDataToSend.append('picture', pictureBlob, 'picture.jpg');
    }

    if (data.banner) {
        const bannerBlob = handleBase64Image(data.banner);
        formDataToSend.append('banner', bannerBlob, 'banner.jpg');
    }


    return await axiosClient.post('/card', formDataToSend);
}