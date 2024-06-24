import http from "@/api";
import { saveToken } from "@/helper/auth-helper";
import Cookies from "js-cookie";

export const Login = async (data: any) => {
  try {
    const res = await http.post("/login", data);
    if (res.status === 200) {
      saveToken(res.data.access_token);
      Cookies.set("refresh_token", res.data.refresh_token);
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const Register = async (data: any) => {
  try {
    const res = await http.post("/register", data);
    return res;
  } catch (err) {
    console.log(err);
  }
};
