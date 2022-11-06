<template>
  <section
    class="w-full flex flex-col justify-center items-center mx-auto bg-blue-900 text-blue-200 h-screen"
  >
    <h1 class="font-bold text-xl uppercase">Tetris</h1>
    <h2 class="mt-5 text-lg font-medium">
      Score:
      <span id="score" class="text-4xl font-semibold text-green-600">120</span>
    </h2>
    <button
      id="start-button"
      class="mt-5 px-4 py-2 text-lg font-semibold text-slate-900 rounded-md hover:shadow-md hover:opacity-80 bg-slate-400"
      @click="changeButtonText"
    >
      <span v-if="this.status">Start Game</span><span v-else>Pause game</span>
    </button>
    <section class="space-x-10 flex justify-center items-start mx-auto mt-4">
      <Grid /><TetrisButton />
    </section>
  </section>
</template>

<script>
import Grid from "@/components/Grid.vue";
import TetrisButton from "@/components/TetrisButton.vue";

export default {
  name: "tetris",
  components: { Grid, TetrisButton },
  data() {
    return {
      status: true,
    };
  },
  methods: {
    changeButtonText() {
      this.status = !this.status;
    },
  },
};
</script>

<style></style>
