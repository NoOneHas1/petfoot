import axios from "axios";
import { baseURL } from "./base.js";
// Cambiar por middleware en el backend
import { getToken } from "../utils/handleToken.js";

const usersApi = async () => {
  const url = `${baseURL}/users`;

  try {
    const response = await axios.get(url, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    throw new Error(error.response?.data?.message || error.message);
  }
};

export default usersApi;
