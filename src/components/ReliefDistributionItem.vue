<template>
  <section
    class="relative w-full min-h-dvh bg-[url('../assets/images/relief-distribution-bg.png')] bg-center bg-no-repeat bg-cover bg-fixed"
    id="relief-distribution"
  >
    <div class="absolute inset-0 bg-brand-black/80"></div>

    <div class="layout-wrapper relative z-10">
      <!-- <div class="mb-6">
        <h2 class="section-heading text-white">
          <slot name="section-heading"></slot>
        </h2>
      </div> -->

      <div class="section-grid-cols-3 gap-0 bg-white/20 h-full overflow-hidden relative">
        <div class="row-end-3 lg:row-end-auto col-span-2 p-6 lg:p-12">
          <p
            class="text-white font-brand font-bold leading-snug text-3xl lg:text-5xl max-w-4xl text-justify"
          >
            <slot name="sub-description"></slot>
          </p>
        </div>
        <div>
          <slot name="relief-distribution-sub-model-img-01"></slot>
          <slot name="relief-distribution-sub-model-img-02"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
