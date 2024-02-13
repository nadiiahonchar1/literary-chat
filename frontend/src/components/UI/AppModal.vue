<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal container smmall-top-padding">
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
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close", "imageSelected"],
  props: ["handleImageSelected"],
  mounted() {
    console.log("handleImageSelected prop:", this.handleImageSelected);
  },
  methods: {
    choosePhoto() {
      if (this.isMobile()) {
        console.log("isMobile");
      } else {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = (e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            localStorage.setItem("savedPhoto", event.target.result);
            this.$emit("imageSelected", event.target.result);
          };
          reader.readAsDataURL(file);
        };
        fileInput.click();
      }
    },
    openCamera() {},
    isMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent);
    },
  },
};
</script>

<style scoped></style>
