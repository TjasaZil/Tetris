<template>
  <section>
    <button :class="buttonClass">{{ text }}</button>
  </section>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-4 py-2 4kay:px-6 4kay:py-3 xl:text-lg font-semibold rounded-full uppercase 4kay:text-xl;
}
.primary {
  @apply bg-slate-800 hover:opacity-90 text-blue-100   hover:border-2;
}
.secondary {
  @apply bg-blue-100 text-blue-800 border-solid border-2 border-blue-800  hover:text-blue-100 hover:bg-blue-800;
}
</style>
