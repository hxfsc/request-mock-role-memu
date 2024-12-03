
import  { METHOD_TYPES, request } from "../request/request"

const url = import.meta.env.BASE_URL
export const userApi = async ()=> await request({url, method: METHOD_TYPES.POST})
