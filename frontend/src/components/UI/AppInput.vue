<template>
  <div class="form-control-input" :class="{ invalid: error }">
    <label class="input-label" :for="id">{{ label }}</label>
    <input
      class="input"
      type="text"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="change"
      :style="{ borderColor: error ? 'red' : '' }"
    />
    <p class="input-error" v-if="error">{{ error }}</p>
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
    label: {
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

<style lang="scss" scoped>
.invalid {
  border-color: red;
}
</style>
