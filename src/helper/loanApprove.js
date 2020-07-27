import { API } from "../Api"

const LoanApprove = (data, id) => {
    return fetch(`${API}/loanForm/approve/${id}`, {
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

const LoanReject = (data, id) => {
    return fetch(`${API}/loanForm/reject/${id}`, {
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
export { LoanApprove, LoanReject };