<template>
  <div>
    <div :style="previewWindowStyle">
      <canvas
        ref="canvas"
        :width="desiredWidth"
        :height="canvasHeight"
      ></canvas>
      <button @click="confirmPhoto" class="confirm-button">
        Підтвердити фото
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stream", "desiredWidth"],
  data() {
    return {
      canvasHeight: 0,
      scaleFactor: 1,
    };
  },
  computed: {
    previewWindowStyle() {
      return {
        position: "fixed",
        top: "50%",
        right: "50%",
        transform: "translate(50%, -50%)",
        zIndex: "999",
      };
    },
  },
  mounted() {
    const video = document.createElement("video");
    video.srcObject = this.stream;
    video.onloadedmetadata = () => {
      video.play();
      this.canvasHeight = video.videoHeight * this.scaleFactor;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");
      const drawFrame = () => {
        context.drawImage(video, 0, 0, this.desiredWidth, this.canvasHeight);
        requestAnimationFrame(drawFrame);
      };
      drawFrame();
    };
  },
  methods: {
    confirmPhoto() {
      const canvas = this.$refs.canvas;
      const imageDataURL = canvas.toDataURL("image/png");
      this.$emit("imageConfirmed", imageDataURL);
    },
  },
};
</script>

<style lang="scss" scoped>
.confirm-button {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
}
</style>
