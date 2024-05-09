<template>
  <div class="modal container smmall-top-padding" @click.stop>
    <h3>Обери фото або зроби нове</h3>
    <button class="modal-button button-gallery" @click="choosePhoto">
      <div class="img-border">
        <img
          class="btnIconText__img"
          src="@/assets/icons/gallery.svg"
          alt="Icon"
        />
      </div>
      Галерея
    </button>
    <button class="modal-button" @click="openCamera">
      <div class="img-border">
        <img
          class="btnIconText__img"
          src="@/assets/icons/camera.svg"
          alt="Icon"
        />
      </div>
      Камера
    </button>
    <camera-preview
      v-if="showCameraPreview"
      :stream="cameraStream"
      :desiredWidth="desiredWidth"
      @imageConfirmed="handleImageSelected"
    />
  </div>
</template>

<script>
import CameraPreview from "./CameraPreview.vue";
import { addPhoto } from "@/api/addPhoto";
import { useUserStore } from "@/stores/UserStore";

export default {
  data() {
    return {
      img: null,
      showCameraPreview: false,
      cameraStream: null,
      desiredWidth: 400,
    };
  },
  emits: ["close", "imageSelected"],
  methods: {
    choosePhoto() {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          useUserStore().setPhoto(event.target.result);
          this.$emit("imageSelected", event.target.result);
          this.img = event.target.result;
          this.$emit("close");
        };
        reader.readAsDataURL(file);
      };
      fileInput.click();
    },
    openCamera() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.cameraStream = stream;
          this.showCameraPreview = true;
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    },
    closeOnEsc(event) {
      if (event.key === "Escape") {
        this.$emit("close");
      }
    },
    async handleImageSelected(imageData) {
      useUserStore().setPhoto(imageData);

      this.img = imageData;
      this.$emit("imageSelected", imageData);
      this.cameraStream.getTracks().forEach((track) => track.stop());
      try {
        await addPhoto(useUserStore().photo);
        console.log("Image successfully saved");
      } catch (error) {
        console.error("Error saving image:", error);
      }
      this.close();
    },
    async close() {
      this.showCameraPreview = false;
      this.$emit("close");
    },
  },
  mounted() {
    document.addEventListener("keydown", this.closeOnEsc);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.closeOnEsc);
  },
  components: {
    CameraPreview,
  },
};
</script>
