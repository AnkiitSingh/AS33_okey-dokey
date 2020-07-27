import { API } from "../Api";
const local = localStorage.getItem("jwt");
const user = JSON.parse(local);
var id = "";
if (localStorage.getItem("jwt") !== null) {
    id = user.user._id
}
else {
    id = ""
}
export const createLoan = (user) => {
    return fetch(`${API}/loanForm/form/${id}`, {
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