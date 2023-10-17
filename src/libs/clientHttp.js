import axios from "axios";

export const clientHttp = axios.create(
    {
        baseURL:"http://localhost:3000/",
        header:{
            Accept:"text/plain",
            "Content-Type":"application/xml"
        }
    }
)