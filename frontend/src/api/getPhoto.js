import axios from "axios";
import { convertImageToDataURL } from "@/utils/convertImageToDataURL";

axios.defaults.withCredentials = true;

export async function getPhoto(id) {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_API_BASE_URL}api/users/${id}/image`,
      {
        headers: {
          "api-key": process.env.VUE_APP_API_KEY,
          "Content-Type": "image/png",
          "X-Requested-With": "XMLHttpRequest",
        },
        responseType: "blob", 
      }
    );

    return new Promise((resolve) => {
      convertImageToDataURL(response.data, function (dataURL) {
        resolve({ success: true, data: dataURL });
      });
    });
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}