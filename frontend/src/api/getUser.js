import axios from "axios";

axios.defaults.withCredentials = true;

export async function getUser() {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_API_BASE_URL}api/users/me`,
      {
        headers: {
          "api-key": process.env.VUE_APP_API_KEY,
          Accept: "*/*",
          "Content-Type": "application/json",
          "Postman-Token": "8c22fb14-40d9-48d3-a69a-7863e5cc4923",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}