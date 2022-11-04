<template>
  <section class="w-full">
    <section
      class="grid-element flex flex-wrap mx-auto w-[350px] h-[700px] opacity-80 bg-slate-400"
    >
      <div
        v-for="index in 200"
        :key="index"
        class="border border-solid border-slate-100 w-[35px] h-[35px] rounded-md"
      ></div>
      <div
        v-for="hidden in 10"
        :key="hidden"
        class="w-[35px] h-[35px] stop-shape"
      ></div>
    </section>
  </section>
</template>

<script>
import tetrisUtil from "@/utils/tetris";
export default {
  name: "Grid",
  created() {
    tetrisUtil;
  },
};
</script>

<style></style>
