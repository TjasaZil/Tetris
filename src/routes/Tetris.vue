<template>
  <section
    class="w-full flex flex-col justify-center items-center mx-auto bg-blue-900 text-blue-200 h-screen"
  >
    <h1>Tetris</h1>
    <h2 class="mt-10">Score: <span>120</span></h2>
    <button>Start button</button>
    <Grid />
  </section>
</template>

<script>
import Grid from "@/components/Tetris/Grid.vue";
export default {
  name: "tetris",
  components: { Grid },
};
</script>

<style></style>
