import { API } from '../Api'

const signout = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        return fetch(`${API}`, {
            method: "GET"
        })
            .then(response => console.log("signout success"))
            .then(() => { window.location.reload(false); })
            .catch(err => console.log(err));
    }
};
export default signout;