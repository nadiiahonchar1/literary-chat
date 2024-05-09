import axios from "axios";
import { dataURLToBinary } from "@/utils/dataURLToBinary";

axios.defaults.withCredentials = true;

export async function addPhoto(dataURL) {
  const headers = {
    "api-key": process.env.VUE_APP_API_KEY,
    "Content-Type": "multipart/form-data",
    "X-Requested-With": "XMLHttpRequest",
  };

  const formData = new FormData();
  const blob = dataURLToBinary(dataURL);

  formData.append("image", blob, "image.png");

  try {
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
