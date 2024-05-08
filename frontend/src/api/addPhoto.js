import axios from "axios";

axios.defaults.withCredentials = true;

export async function addPhoto(photo) {
  const headers = {
    "api-key": process.env.VUE_APP_API_KEY,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  try {
    // Створюємо FormData та додаємо фото
    const formData = new FormData();
    formData.append("photo", photo);

    // Відправляємо запит з використанням axios
    const response = await axios.post(
      `${process.env.VUE_APP_API_BASE_URL}api/users/me/image`,
      formData,
      { headers }
    );

    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}