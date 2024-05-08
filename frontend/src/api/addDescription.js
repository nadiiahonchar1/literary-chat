import axios from "axios";

axios.defaults.withCredentials = true;

export async function addDescription(nickname, description) {
  const headers = {
    "api-key": process.env.VUE_APP_API_KEY,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  const body = {
    nickname,
    description,
  };
  try {
    const response = await axios.patch(
      `${process.env.VUE_APP_API_BASE_URL}api/users/me`,
      body,
      { headers }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}
