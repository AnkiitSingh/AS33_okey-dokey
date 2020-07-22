const isAutheticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        const local = localStorage.getItem("jwt");
        return JSON.parse(local);
    } else {
        return false;
    }
};
export default isAutheticated