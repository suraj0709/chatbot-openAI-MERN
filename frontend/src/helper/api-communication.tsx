import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200 && res.status !== 201) {
    throw new Error("Unable to login");
  }
  const data = res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200 && res.status !== 201) {
    throw new Error("Unable to Authenticate");
  }
  const data = res.data;
  return data;
};
