<script setup>
import FooterContainer from '../components/FooterContainer.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="min-h-screen flex flex-col bg-brand-white-secondary">
    <div class="layout-wrapper grow flex items-center justify-center">
      <div class="text-center max-w-2xl">
        <h1 class="text-8xl md:text-9xl font-bold font-brand text-brand-purple tracking-tight">
          404
        </h1>

        <h2 class="mt-6 text-3xl md:text-4xl font-bold font-brand text-brand-black">
          Page Not Found
        </h2>

        <p class="mt-6 text-lg text-gray-600 font-brand leading-relaxed">
          The page you're looking for might have been removed, had its name changed, or is
          temporarily unavailable.
          <br class="hidden sm:block" />
          Don't worry let's get you back on track.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink
            to="/"
            class="group relative inline-flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-2xl font-brand text-base font-semibold overflow-hidden transition-all duration-300 hover:bg-brand-purple"
          >
            <span
              class="absolute inset-0 bg-brand-purple scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
            ></span>
            <span class="relative z-10">Back to Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </RouterLink>

          <RouterLink
            to="/contact"
            class="text-brand-purple font-brand text-base hover:underline transition-colors"
          >
            Or contact us for help
          </RouterLink>
        </div>
      </div>
    </div>

    <FooterContainer />
  </section>
</template>

<style scoped>
.layout-wrapper {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
