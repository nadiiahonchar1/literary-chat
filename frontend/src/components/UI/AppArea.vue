<template>
  <div class="form-control-area" :class="{ invalid: error }">
    <label class="textarea-label" :for="id">{{ labelareaLabel }}</label>
    <textarea
      class="textarea"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="change"
    ></textarea>
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    labelareaLabel: {
      type: String,
    },
    error: {
      type: String,
    },
  },
  methods: {
    change(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  data() {
    return {
      id: "input-" + Math.random(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
