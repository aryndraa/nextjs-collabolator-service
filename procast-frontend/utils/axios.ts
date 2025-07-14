import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


instance.interceptors.request.use(
    (config) => {
        const xsrfToken = Cookies.get("XSRF-TOKEN");

        if (xsrfToken) {
            config.headers["X-XSRF-TOKEN"] = decodeURIComponent(xsrfToken);
            console.log("use token")
        }

        return config;
    },
    (error) => Promise.reject(error)
);


export default instance;
