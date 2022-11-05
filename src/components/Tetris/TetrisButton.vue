<template>
  <section>
    <section class="flex flex-col justify-center items-center -space-y-4">
      <button id="up-button" class="btn">&uarr;</button>
      <section class="flex justify-center items-center mx-auto space-x-2">
        <button id="left-button" class="btn">&larr;</button
        ><button id="bottom-button" class="btn mt-5">&darr;</button
        ><button id="right-button" class="btn">&rarr;</button>
      </section>
    </section>
  </section>
</template>

<script>
import tetrisUtil from "@/utils/tetris";
export default {
  name: "TetrisButton",
  created() {
    tetrisUtil;
  },
};
</script>

<style scoped>
.btn {
  @apply rounded-md bg-slate-100 text-slate-800 px-6 py-4 hover:shadow-lg hover:bg-slate-500 hover:opacity-80;
}
</style>
