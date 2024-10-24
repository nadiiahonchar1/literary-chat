import axios from "axios";

axios.defaults.withCredentials = true;

export async function resendverification(email) {
  const headers = {
    "api-key": process.env.VUE_APP_API_KEY,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  const body = {
    email,
  };
  try {
    const response = await axios.post(
      `${process.env.VUE_APP_API_BASE_URL}api/authentication/resend-verification-code`,
      body,
      { headers }
    );
    return { status: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { status: false, error };
  }
}
