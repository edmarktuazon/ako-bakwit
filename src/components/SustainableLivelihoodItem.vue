<script setup></script>

<template>
  <section class="layout-wrapper bg-brand-white-secondary" id="sustainable-livelihood">
    <div class="section-grid-cols-2">
      <div class="row-end-3 lg:row-end-auto">
        <div class="mb-16">
          <h2 class="section-heading text-brand-black leading-snug">
            <slot name="section-heading"></slot>
          </h2>
          <div class="heading-underline"></div>
        </div>

        <div class="flex flex-col w-full lg:w-4/5">
          <p class="text-brand-black font-brand leading-relaxed text-base">
            <slot name="sub-description-01"></slot>
          </p>
          <hr class="border-white/20 w-full mx-auto my-8" />

          <p class="text-brand-black font-brand leading-relaxed text-base">
            <slot name="sub-description-02"></slot>
          </p>
        </div>
      </div>

      <!-- Sustainable Livelihood Model Image -->
      <div data-aos="zoom-out" data-aos-easing="ease-in" data-aos-delay="300">
        <slot name="sustainable-livelihood-img-model"></slot>
      </div>
    </div>
  </section>
</template>
