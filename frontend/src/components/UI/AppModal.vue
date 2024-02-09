<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal">
      <h3>This is the name of the modal</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis
        excepturi architecto tempore ipsam dolore fugiat voluptatibus aperiam!
        Quidem, corporis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style scoped></style>
