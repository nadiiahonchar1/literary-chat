import axios from "axios";

axios.defaults.withCredentials = true;

export async function submitAllData(nikname) {
  const useremail = localStorage.getItem("useremail");
  const headers = {
    "api-key": process.env.VUE_APP_API_KEY,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  const body = {
    username: nikname,
    email: useremail,
  };
  try {
    const response = await axios.post(
      `${process.env.VUE_APP_API_BASE_URL}api/authentication/sign-up`,
      body,
      { headers }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}
