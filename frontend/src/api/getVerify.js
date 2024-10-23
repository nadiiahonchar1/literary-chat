import axios from "axios";

axios.defaults.withCredentials = true;

export async function submitAllData(email, verificationCode) {
  const headers = {
    "api-key": process.env.VUE_APP_API_KEY,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  const data = {
    email,
    verificationCode,
  };
  try {
    const response = await axios.post(
      `${process.env.VUE_APP_API_BASE_URL}api/authentication/verify-email`,
      data,
      { headers }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}
