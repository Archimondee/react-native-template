import ApiService from "./ApiService";

export const apiGetCharacter = (id: number) => {
  return ApiService.fetchData({
    url: "/character/" + id,
    method: "get",
  });
};
