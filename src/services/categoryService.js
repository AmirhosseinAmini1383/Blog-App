import http from "./httpService";

export function getCategoryApi(option) {
  return http.get("/category/list", option).then(({ data }) => data.data);
}
