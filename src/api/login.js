import axios from "axios";
import { baseURL } from "./base.js";

const loginApi = async (email, password) => {
  console.log("loginApi called with:", { email, password });

  const url = `${baseURL}/login`;

  try {
    const response = await axios.post(url, { email, password }, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response:", response);

    return response.data;
  } catch (error) {
    console.error("Error in loginApi:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

export default loginApi;
