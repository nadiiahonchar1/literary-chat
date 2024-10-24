import axios from "axios";

axios.defaults.withCredentials = true;

export async function submitAllData(username, email) {
  const headers = {
    "api-key": process.env.VUE_APP_API_KEY,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  const body = {
    username,
    email,
  };
  try {
    const response = await axios.post(
      `${process.env.VUE_APP_API_BASE_URL}api/authentication/sign-up`,
      body,
      { headers }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error };
  }

  
}
