import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "1894d0e8b7mshae3bfcbfbe3097bp198b86jsn5ab596d05649",
    },
  });
  return data;
};
