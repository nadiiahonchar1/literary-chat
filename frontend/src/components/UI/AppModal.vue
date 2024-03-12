<template>
  <Transition name="modalT">
    <div class="modal-backdrop" @click="closeOnBackdropClick">
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
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return { img: null };
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
          localStorage.setItem("savedPhoto", event.target.result);
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
          const video = document.createElement("video");
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
            const desiredWidth = 400;
            const scaleFactor = desiredWidth / video.videoWidth;
            video.width = desiredWidth;
            video.height = video.videoHeight * scaleFactor * 1.3;
            const canvas = document.createElement("canvas");
            canvas.width = desiredWidth;
            canvas.height = video.videoHeight * scaleFactor * 1.3;
            const context = canvas.getContext("2d");
            const drawFrame = () => {
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
              requestAnimationFrame(drawFrame);
            };
            drawFrame();
            const previewWindow = document.createElement("div");
            previewWindow.style.position = "fixed";
            previewWindow.style.top = "50%";
            previewWindow.style.right = "50%";
            previewWindow.style.transform = "translate(50%, -50%)";
            previewWindow.style.zIndex = "999";
            previewWindow.appendChild(canvas);
            const confirmButton = document.createElement("button");
            confirmButton.textContent = "Підтвердити фото";
            confirmButton.style.position = "fixed";
            confirmButton.style.top = "0";
            confirmButton.style.right = "0";
            confirmButton.style.zIndex = "9999";
            confirmButton.onclick = () => {
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
              const imageDataURL = canvas.toDataURL("image/png");
              localStorage.setItem("savedPhoto", imageDataURL);
              this.$emit("imageSelected", imageDataURL);
              this.img = imageDataURL;
              this.$emit("close");
              document.body.removeChild(previewWindow);
              stream.getTracks().forEach((track) => track.stop());
            };
            previewWindow.appendChild(confirmButton);
            document.body.appendChild(previewWindow);
          };
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    },
    closeOnBackdropClick(event) {
      if (event.target.classList.contains("modal-backdrop")) {
        this.$emit("close");
      }
    },
    closeOnEsc(event) {
      if (event.key === "Escape") {
        this.$emit("close");
      }
    },

    isMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent);
    },
  },
  mounted() {
    document.addEventListener("keydown", this.closeOnEsc);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.closeOnEsc);
  },
};
</script>

<style scoped></style>
