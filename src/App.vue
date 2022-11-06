<template>
  <section class="bg-blue-700 text-blue-200">
    <Tetris />
  </section>
</template>

<script>
import Tetris from "./routes/Tetris.vue";
export default {
  name: "App",
  components: {
    Tetris,
  },
};
</script>

<style></style>
