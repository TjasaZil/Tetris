<template>
  <section
    class="space-y-4 pt-20 mx-auto w-4/6 max-w-4xl laptopl:pt-28 laptopl:space-y-7"
  >
    <h2
      class="capitalize font-semibold text-xl laptop:text-2xl laptopl:text-3xl 4kay:text-5xl"
    >
      {{ heading }}
    </h2>
    <hr class="w-1/3 bg-blue-50 my-4" />
    <div role="paragraph text-sm laptopl:text-lg 4kay:text-3xl">
      {{ paragraph }}
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroText",
  props: {
    heading: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
