import { API } from "../Api"

const ImoApprove = (id) => {
    return fetch(`${API}/getNgo/approvedStatus/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

const ImoReject = (data, id) => {
    return fetch(`${API}/getNgo/rejectedStatus/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export { ImoApprove, ImoReject };