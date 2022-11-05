<template>
  <section
    class="w-full h-16 tablet:h-20 laptopl:h-24 4kay:h-28 bg-blue-800 border-t-2 border-solid border-blue-200 mt-8"
  >
    <div
      class="flex justify-between items-center w-full p-4 h-16 tablet:h-20 laptopl:h-24 4kay:h-28"
    >
      <p class="text-lg laptop:text-xl laptopl:text-2xl 4kay:text-4xl">
        © Zuzexx
      </p>
      <div class="flex justify-center items-center space-x-4 laptop:space-x-7">
        <a
          href="https://github.com/zuzexx"
          target="_blank"
          data-testid="github-link"
        >
          <img
            class="w-8 laptop:w-10 laptopl:w-11 4kay:w-14"
            alt="github"
            src="@/assets/github.png"
        /></a>
        <a
          href="https://www.linkedin.com/in/tjasa-zilavec/"
          target="_blank"
          data-testid="linkedin-link"
        >
          <img
            class="w-8 laptop:w-10 laptopl:w-11 4kay:w-14"
            alt="linkedin"
            src="@/assets/linkedin.png"
        /></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
