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
export const useAxios = ()=>{
    const get =  (url)=> {
        return  clientHttp.get(url);
    }
    const post =  (url,data)=> {
        return  clientHttp.post(url,data);
    }
    return {
        get,post
    }
}
