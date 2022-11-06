<template>
  <section
    class="w-full flex flex-col justify-center items-center mx-auto bg-slate-900 text-slate-500 h-screen"
  >
    <h1 class="font-thin text-7xl uppercase">Tetris</h1>
    <div id="game-over" class="text-4xl font-semibold text-red-600 p-6"></div>
    <button id="reload-button">Reload</button>
    <section
      class="w-5/6 max-w-3xl space-x-10 flex justify-center items-start mx-auto mt-8"
    >
      <Grid />
      <div class="flex flex-col items-center justify-center space-y-5">
        <div>
          <div
            class="space-y-3 rounded-md bg-slate-700 flex flex-col justify-center items-center"
          >
            <h2 class="mt-2 text-lg font-medium">Score:</h2>
            <span
              id="score"
              class="text-4xl font-semibold text-green-600 p-6"
            ></span>
          </div>

          <button
            id="start-button"
            :class="{ start: this.status, stop: !this.status }"
            @click="changeButtonText"
          >
            <span
              v-if="this.status"
              class="text-green-900 drop-shadow-md opacity-90"
              >Start Game</span
            ><span v-else class="text-red-900 drop-shadow-md opacity-90"
              >Pause game</span
            >
          </button>
        </div>
        <TetrisButton />
        <div
          class="space-y-3 rounded-md bg-slate-700 flex flex-col justify-center items-center"
        >
          <h2 class="mt-2 text-lg font-medium">Top Score:</h2>
          <div
            id="top-score"
            class="text-7xl font-semibold text-amber-600 p-6"
          ></div>
        </div>
        <div
          class="space-x-3 rounded-md bg-slate-700 flex justify-center items-center px-2"
        >
          <h2 class="mt-2 text-lg font-medium">Speed:</h2>
          <div
            id="speed"
            class="text-2xl font-semibold text-red-600 py-6"
          ></div>
        </div>
      </div>
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

<style scoped>
button {
  @apply mt-5 px-4 py-2 text-lg font-semibold  rounded-md hover:shadow-md hover:opacity-80;
}
.stop {
  @apply bg-red-700;
}
.start {
  @apply bg-green-700;
}
</style>
