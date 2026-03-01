<template>
  <section class="layout-wrapper" id="policy-advocacy">
    <div class="mb-16">
      <h2 class="section-heading text-brand-black">
        <slot name="section-heading"></slot>
      </h2>
      <div class="heading-underline"></div>
    </div>

    <div class="section-grid-cols-2 gap-0">
      <div
        class="relative min-h-[70dvh] w-full bg-[url('../assets/images/advocacy-sub-bg.png')] bg-center bg-no-repeat bg-cover"
      >
        <div class="absolute bottom-0 left-0 p-10 lg:p-12 bg-brand-black/60">
          <p class="text-white font-brand font-bold text-xl lg:text-2xl leading-snug">
            <slot name="sub-description-overlay"></slot>
          </p>
        </div>
      </div>

      <div class="flex">
        <div class="bg-brand-black w-full flex-1">
          <div class="flex">
            <slot name="advocacy-policy-model-img-01"></slot>
            <slot name="advocacy-policy-model-img-02"></slot>
          </div>
          <div class="p-10 lg:p-12">
            <p class="text-white font-brand font-semibold text-2xl leading-snug">
              <slot name="sub-description"></slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
