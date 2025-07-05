import axios from "axios";
import { baseURL } from "./base.js";

const meApi = async (email, password) => {
  console.log("loginApi called with:", { email, password });

  const url = `${baseURL}/me`;

  try {
    const response = await axios.get(url, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response:", response);

    return response.data;
  } catch (error) {
    console.error("Error in meApi:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

export default meApi;
