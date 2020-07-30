import { API } from "../Api"

const repayApprove = (data, id) => {
    return fetch(`${API}/loanForm/repayment/${id}`, {
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

const repayReject = (data, id) => {
    return fetch(`${API}/loanForm/rejectRepayment/${id}`, {
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
export { repayApprove, repayReject };