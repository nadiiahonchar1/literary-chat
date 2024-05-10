import axios from "axios";

axios.defaults.withCredentials = true;

export async function getUser() {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_API_BASE_URL}api/users/me`,
      {
        headers: {
          "api-key": process.env.VUE_APP_API_KEY,
          "Content-Type": "application/json",
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