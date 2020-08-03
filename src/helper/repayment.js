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

export default Repayment;