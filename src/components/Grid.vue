<template>
  <section class="w-full">
    <section
      class="grid-element flex flex-wrap mx-auto w-[350px] h-[700px] opacity-70 bg-slate-900"
    >
      <div
        v-for="index in 200"
        :key="index"
        class="border border-solid border-slate-800 w-[35px] h-[35px] rounded-md"
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

  mounted() {
    tetrisUtil;
  },
};
</script>

<style></style>
