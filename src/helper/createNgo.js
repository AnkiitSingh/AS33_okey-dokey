import { API } from "../Api";

export const createNgo = (user) => {
    return fetch(`${API}/newNgo`, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: user
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};