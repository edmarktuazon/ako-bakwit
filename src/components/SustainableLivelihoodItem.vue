<script setup></script>

<template>
  <section class="layout-wrapper bg-brand-white-secondary" id="sustainable-livelihood">
    <div class="grid lg:grid-cols-2 gap-8 items-start">
      <!-- Title -->
      <div class="col-span-full lg:col-span-2 mb-4">
        <h2 class="section-heading text-brand-black leading-snug">
          <slot name="section-heading"></slot>
        </h2>
        <div class="heading-underline"></div>
      </div>

      <!-- Texts -->
      <div class="flex flex-col gap-4">
        <p class="text-brand-black font-brand leading-relaxed text-base">
          <slot name="sub-description-01"></slot>
        </p>
        <hr class="border-gray-300 w-full mx-auto my-4" />
        <p class="text-brand-black font-brand leading-relaxed text-base">
          <slot name="sub-description-02"></slot>
        </p>
      </div>
      <!-- Image -->
      <div class="" data-aos="zoom-out" data-aos-easing="ease-in" data-aos-delay="300">
        <slot name="sustainable-livelihood-img-model"></slot>
      </div>
    </div>
  </section>
</template>
