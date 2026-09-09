import axios from "axios"

const api = axios.create({
  baseURL: "https://picsum.photos/v2/list",
});

export const fetchImages = async (page, limit = 8) => {
  try {
    const response = await api.get("/", {
      params: { page, limit }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch images");
  }
};