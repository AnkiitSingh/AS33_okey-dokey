import { API } from "../Api"

const PaymentApprove = (data, id) => {
    return fetch(`${API}/loanForm/paid/${id}`, {
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

export default PaymentApprove;