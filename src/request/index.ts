import { request, ResponseData, METHOD_TYPES } from "./request.ts";

export const httpGet = (
  url: string,
  params: Record<string, unknown> = {}
): Promise<ResponseData> => request({ url, method: METHOD_TYPES.GET, params });

export const httpPost = (
  url: string,
  data: Record<string, unknown> = {}
): Promise<ResponseData> => request({ url, method: METHOD_TYPES.POST, data });

export const httpFormData = (
  url: string,
  params: any = {}
): Promise<ResponseData> => {
  const formData = new FormData();
  for (const field in params) {
    if (params[field]) {
      formData.append(field, params[field]);
    }
  }
  return request({
    url,
    method: METHOD_TYPES.POST,
    headers: {
      ContentType: "multipart/form-data",
    },
  });
};
