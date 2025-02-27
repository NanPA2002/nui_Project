import axios from "axios";
import type { Option } from "~/model/client.model";


export const client = (ops : Option) => {
    const config: any = useRuntimeConfig()

    let api: any = axios.create()

    api.defaults.baseURL = config.public.BASE_URL
    api.defaults.headers.common['Content-Type'] = 'application/json'


    // ตรวจสอบtoken
    api.interceptors.request.use(
        async function (config: any)  {
            let token =  await useCookie('token')
            config.headers['Authorization'] = 'Bearer ' + token.value
            return config
        },
        function (error: any){
            // console.log
        }
    )

    api.defaults.validateStatus = false
    ops.method = ops.method.toLowerCase()

    return api({
        ...ops,
    })
}