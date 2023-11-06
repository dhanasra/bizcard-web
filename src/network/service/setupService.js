import axiosClient from "../axiosClient";

export async function setupCard(data){
    return await axiosClient.post('/card', {
        cardName: "Work",
        name: {
            firstName: data.firstName,
            lastName: data.lastName
        },
        company: {
            title: data.title,
            companyName: data.companyName
        },
        email: data.email,
        phoneNumber: data.phone
    });
}