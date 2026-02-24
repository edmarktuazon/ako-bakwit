<template>
  <section class="layout-wrapper bg-brand-purple" id="programs">
    <div class="section-grid-cols-2">
      <div class="row-end-3 lg:row-end-auto">
        <div class="mb-16">
          <h2 class="section-heading text-white">
            <slot name="section-heading"></slot>
          </h2>
          <div class="heading-underline-black"></div>
        </div>

        <div class="flex flex-col bg-brand-black p-6 lg:p-12">
          <h3
            class="text-white font-semibold font-brand text-3xl mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <slot name="sub-heading-01"></slot>
          </h3>
          <p class="text-gray-300 font-brand leading-relaxed text-md">
            <slot name="sub-description-01"></slot>
          </p>

          <hr class="border-white/10 max-w-[87%] w-full mx-auto my-8" />

          <h3
            class="text-white font-semibold font-brand text-3xl mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <slot name="sub-heading-02"></slot>
          </h3>
          <p class="text-gray-300 font-brand leading-relaxed text-md">
            <slot name="sub-description-02"></slot>
          </p>

          <hr class="border-white/10 max-w-[87%] w-full mx-auto my-8" />

          <h3
            class="text-white font-semibold font-brand text-3xl mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <slot name="sub-heading-03"></slot>
          </h3>
          <p class="text-gray-300 font-brand leading-relaxed text-md">
            <slot name="sub-description-03"></slot>
          </p>
        </div>
      </div>

      <!-- Program Image -->
      <div>
        <slot name="program-sub-model-img"></slot>
      </div>
    </div>
  </section>
</template>
