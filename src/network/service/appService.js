import axiosClient from "../axiosClient";

export async function fetchMainData(){
    return await axiosClient.get('/main');
}