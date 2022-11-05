<template>
  <section>
    <section class="bg-blue-700 pt-20 text-slate-200">
      <IntroText heading="home" paragraph="this is home" />

      <section class="flex justify-center items-center space-x-5 mt-5">
        <a
          href="https://github.com/zuzexx"
          target="_blank"
          data-testid="github-link-test"
          ><img
            src="@/assets/github.png"
            alt="github-icon"
            class="w-8 laptop:w-10 laptopl:w-11 4kay:w-14"
        /></a>
        <a
          href="https://www.linkedin.com/in/tjasa-zilavec/"
          target="_blank"
          data-testid="linkedin-link-test"
          ><img
            src="@/assets/linkedin.png"
            alt="linkedin-icon"
            class="w-8 laptop:w-10 laptopl:w-11 4kay:w-14"
        /></a>
      </section>
      <section
        class="mt-16 w-5/6 mx-auto flex flex-wrap justify-around items-center"
      >
        <Container
          :image="Image"
          heading="Tetris"
          alt="Tetris"
          router="/tetris"
        />
        <Container :image="Image" heading="Snake" alt="Snake" router="/" />
        <Container :image="Image" heading="Memory" alt="Memory" router="/" />
        <Container
          :image="Image"
          heading="Whac-a-Mole"
          alt="Whac-a-Mole"
          router="/"
        />
        <Container
          :image="Image"
          alt="Breakout"
          heading="Breakout"
          router="/"
        />
        <Container :image="Image" alt="Frogger" heading="Frogger" router="/" />
        <Container
          :image="Image"
          alt="Connect Four"
          heading="Connect Four"
          router="/"
        />
        <Container
          :image="Image"
          alt="Space Invaders"
          heading="Space Invaders"
          router="/"
        />
      </section>
    </section>
    <Footer />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
import Container from "@/components/Shared/Container.vue";
import Image from "@/assets/linkedin.png";
import Footer from "@/components/Shared/Footer.vue";
export default {
  name: "Home",
  components: { IntroText, Footer, Container },
  data() {
    return {
      Image,
    };
  },
};
</script>

<style scoped></style>
