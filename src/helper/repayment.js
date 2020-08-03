import { API } from "../Api"

const Repayment = (data, id) => {
    return fetch(`${API}/newRepayment/${id}`, {
        method: "POST",
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

const ApproveRepayment = (id, amount, tranId) => {
    return fetch(`${API}/approveRepayment/${id}/${amount}/${tranId}`, {
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

const RejectRepayment = (id) => {
    return fetch(`${API}/rejectRepayment/${id}`, {
        method: "GET",
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
export { Repayment, ApproveRepayment, RejectRepayment };