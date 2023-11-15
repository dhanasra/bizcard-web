import axiosClient from "../axiosClient";


export async function createContact(data){
    return await axiosClient.post('/contact', data);
}
