const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data))
        window.location.reload(false);
        next();
    }
};

export default authenticate