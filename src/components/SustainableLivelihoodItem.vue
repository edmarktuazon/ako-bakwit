<script setup></script>

<template>
  <section class="layout-wrapper bg-brand-white-secondary" id="sustainable-livelihood">
    <div class="mb-16 col-span-full lg:col-span-2">
      <h2 class="section-heading text-brand-black leading-snug">
        <slot name="section-heading"></slot>
      </h2>
      <div class="heading-underline"></div>
    </div>
    <div class="section-grid-cols-2 items-start">
      <div class="flex flex-col">
        <p class="text-brand-black font-brand leading-relaxed text-base text-justify">
          <slot name="sub-description-01"></slot>
        </p>
        <hr class="border-black/10 w-full mx-auto my-8" />
        <p class="text-brand-black font-brand leading-relaxed text-base text-justify">
          <slot name="sub-description-02"></slot>
        </p>
      </div>

      <!-- Image -->
      <div class="lg:pl-6 xl:pl-10">
        <slot name="sustainable-livelihood-img-model"></slot>
      </div>
    </div>
  </section>
</template>
