<template>
  <Transition name="modalT">
    <modal-backdrop @close="close">
      <modal-content @imageSelected="handleImageSelected" @close="close" />
    </modal-backdrop>
  </Transition>
</template>

<script>
import ModalBackdrop from "./ModalBackdrop.vue";
import ModalContent from "./ModalContentChoosePhoto.vue";
import { addPhoto } from "@/api/addPhoto";

export default {
  components: {
    ModalBackdrop,
    ModalContent,
  },
  data() {
    return { img: null };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async handleImageSelected(imageData) {
      try {
        await addPhoto(imageData);
      } catch (error) {
        console.error(error);
      }
      this.$emit("imageSelected", imageData);
      this.close();
    },
    closeOnEsc(event) {
      if (event.key === "Escape") {
        this.$emit("close");
      }
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
