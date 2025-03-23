import http from "./httpService";

export function getCategoryApi(option) {
  return http.get("/category/list", option).then(({ data }) => data.data);
}

export function createCategoryApi(data) {
  return http.post("/category/add", data).then(({ data }) => data.data);
}

export function editCategoryApi({ id, data }) {
  return http
    .patch(`/category/update/${id}`, data)
    .then(({ data }) => data.data);
}

export function deleteCategoryApi(id) {
  return http.delete(`/category/remove/${id}`).then(({ data }) => data.data);
}
