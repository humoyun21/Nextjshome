import axios from "axios";
import Cookies from "js-cookie";

const http = axios.create({
  baseURL: "https://store.go-clothes.uz/v1",
});

http.interceptors.request.use((config) => {
  let token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
async function refreshAccsesToken() {
  try {
    const stored_refresh_token = Cookies.get("refresh_token");

    if (!stored_refresh_token) {
      throw new Error("Refresh token not found in cookie ");
    } else {
      const response: any = await axios.get(
        `http://store.go-clothes.uz:5555/v1/token/${stored_refresh_token}`
      );
      const { access_token, refresh_token } = response.data;
      console.log(access_token);
      console.log(response.data);
      Cookies.set("token", access_token);
      Cookies.set("refresh_token", refresh_token);
      return access_token;
    }
  } catch (error) {
    console.log(error);
  }
}

http.interceptors.request.use((config: any) => {
  const access_token = Cookies.get("token");
  if (access_token) {
    config.headers["Authorization"] = access_token;
  }
  return config;
});

http.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    if (error.response && error.response.status === 401) {
      const access_token = await refreshAccsesToken();

      if (access_token) {
        const originalRequest = error.config;
        originalRequest.headers["Authorization"] = access_token;
      } else {
        console.error("Access token not found in config file " + error.config);
        return Promise.reject(error);
      }
    }
  }
);

export default http;
