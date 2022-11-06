<template>
  <section>
    <section class="flex flex-col justify-center items-center -space-y-4">
      <button id="up-button" class="btn hover:bg-pink-500">&uarr;</button>
      <section class="flex justify-center items-center mx-auto space-x-2">
        <button id="left-button" class="btn hover:bg-blue-500">&larr;</button
        ><button id="bottom-button" class="btn mt-5 hover:bg-green-500">
          &darr;</button
        ><button id="right-button" class="btn hover:bg-amber-500">
          &rarr;
        </button>
      </section>
    </section>
  </section>
</template>

<script>
//import { loadScript } from "vue-plugin-load-script";
import tetrisUtil from "@/utils/tetris.js";
export default {
  name: "TetrisButton",
  mounted() {
    tetrisUtil;
  },
};
</script>

<style scoped>
.btn {
  @apply rounded-md bg-slate-100 text-slate-800 px-6 py-4 hover:shadow-lg hover:opacity-80;
}
</style>
