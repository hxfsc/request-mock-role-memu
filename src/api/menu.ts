import  { METHOD_TYPES, request } from "../request/request"

const url = import.meta.env.BASE_URL
export const menuApi = async ()=> await request({url: `${url}/menu`, method: METHOD_TYPES.POST})
