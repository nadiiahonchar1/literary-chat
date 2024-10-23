import axios from "axios";

axios.defaults.withCredentials = true;

export async function authentication(email, authenticationCode) {
  const headers = {
    "api-key": process.env.VUE_APP_API_KEY,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  const body = {
    email,
    authenticationCode,
  };
  try {
    const response = await axios.post(
      `${process.env.VUE_APP_API_BASE_URL}api/authentication/authenticate-email`,
      body,
      { headers }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error };
  }

  
}
