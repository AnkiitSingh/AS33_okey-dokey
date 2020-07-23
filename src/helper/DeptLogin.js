import { API } from '../Api';

const Deptsignin = (user) => {
    return fetch(`${API}/ministryLogin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export default Deptsignin;