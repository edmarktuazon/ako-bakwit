<script setup>
defineProps({
  partners: {
    type: Array,
    default: () => [],
    // expected format:
    // [{ logo: '/path/logo.png', alt: 'Partner name', description: '...' }]
  },
})
</script>

<template>
  <section
    class="relative w-full min-h-dvh bg-[url('../assets/images/volunteer-bg.jpg')] bg-center bg-no-repeat bg-cover bg-fixed"
    id="volunteer"
  >
    <div class="absolute inset-0 bg-brand-black/80"></div>

    <div class="layout-wrapper relative z-10">
      <div class="mb-16">
        <h2 class="section-heading text-white text-center font-bold font-brand mb-8">
          <slot name="section-heading"></slot>
        </h2>
        <p
          class="text-white font-brand text-lg lg:text-base leading-relaxed max-w-4xl mx-auto text-center"
        >
          <slot name="sub-description"></slot>
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-10 mt-10 max-w-5xl mx-auto">
        <div
          v-for="partner in partners"
          :key="partner.alt"
          class="bg-white/30 p-6 flex flex-col gap-4 rounded-lg flex-1 h-auto lg:min-h-100"
          data-aos="flip-left"
          data-aos-delay="300"
        >
          <div class="bg-white p-3 w-fit mx-auto">
            <img :src="partner.logo" :alt="partner.alt" class="h-16 w-auto object-contain" />
          </div>

          <p class="text-white font-brand text-base leading-relaxed text-center">
            {{ partner.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
