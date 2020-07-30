import { API } from "../Api"

const repayReq = (id) => {
    return fetch(`${API}/loanForm/requestRepay/${id}`, {
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

const cancelReq = (id) => {
    return fetch(`${API}/loanForm/cancle/${id}`, {
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
export { repayReq, cancelReq };