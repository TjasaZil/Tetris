<template>
  <section class="bg-slate-700 text-slate-200">
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
