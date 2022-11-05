<template>
  <section
    class="border-2 border-solid border-blue-200 w-full tablet:w-1/3 laptopl:w-1/5 4kay:w-1/6 rounded-lg hover:shadow-lg hover:scale-105 hover:opacity-70 flex flex-col justify-center items-center space-y-5 my-2 mx-1"
  >
    <div class="img-container">
      <img :src="image" :alt="alt" class="rounded-t-lg" />
    </div>

    <h3
      class="font-semibold text-center mx-auto text-lg tablet:text-xl laptopl:text-2xl 4kay:text-3xl"
    >
      {{ heading }}
    </h3>
    <hr class="w-5/6 border-2 bg-blue-50 border-blue-50 rounded-lg mx-auto" />
    <div role="paragraph" class="w-5/6 mx-auto text-">
      {{ paragraph }}
    </div>
    <div class="flex justify-around items-center pb-3 mx-auto w-full">
      <a href="https://github.com/zuzexx/ClassicGames" target="_blank"
        ><MainButton text="github" data-testid="main-button-component-test"
      /></a>
      <router-link :to="router"
        ><MainButton
          text="live site"
          data-testid="main-button-component-test"
          :class="secondary"
      /></router-link>
    </div>
  </section>
</template>

<script>
import MainButton from "@/components/Shared/MainButton.vue";
export default {
  name: "Container",
  components: { MainButton },
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    router: {
      type: String,
      required: false,
      default: "/",
    },
    paragraph: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
img {
  @apply w-full scale-100 hover:scale-105 transition-all;
}
.img-container {
  @apply hover:scale-100 w-full p-0 m-0 overflow-hidden;
}
.img-container img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.7s ease-in-out;
  transition: 0.7s ease-in-out;
}
.img-container:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
</style>
