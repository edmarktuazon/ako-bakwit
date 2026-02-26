<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import ProgramImgModel01 from '../assets/images/program-sub-img-model-01.jpg'
import ProgramImgModel02 from '../assets/images/program-sub-img-model-02.jpg'
import ProgramImgModel03 from '../assets/images/program-sub-img-model-03.jpg'
import ProgramImgModel04 from '../assets/images/program-sub-img-model-04.jpg'
import ProgramImgModel05 from '../assets/images/program-sub-img-model-05.jpg'
import ProgramImgModel06 from '../assets/images/program-sub-img-model-06.png'
import ProgramImgModel07 from '../assets/images/program-sub-img-model-07.png'
import ProgramImgModel08 from '../assets/images/program-sub-img-model-08.png'

const programImages = [
  ProgramImgModel01,
  ProgramImgModel02,
  ProgramImgModel03,
  ProgramImgModel04,
  ProgramImgModel05,
  ProgramImgModel06,
  ProgramImgModel07,
  ProgramImgModel08,
]

const modules = [Pagination, Autoplay]

const swiperBreakpoints = {
  640: { slidesPerView: 2.2, spaceBetween: 30 },
  1024: { slidesPerView: 1.5, spaceBetween: 40 },
}
</script>

<template>
  <section class="layout-wrapper bg-brand-purple" id="programs">
    <div class="mb-16">
          <h2 class="section-heading text-white">
            <slot name="section-heading"></slot>
          </h2>
          <div class="heading-underline-black"></div>
        </div>
    <div class="section-grid-cols-2">
      <!-- Left Column -->
      <div class="row-end-3 lg:row-end-auto">


        <div class="flex flex-col bg-brand-black p-10 lg:p-12">
          <h3
            class="text-white font-semibold font-brand text-3xl mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <slot name="sub-heading-01"></slot>
          </h3>
          <p class="text-gray-300 font-brand leading-relaxed text-md text-justify">
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
          <p class="text-gray-300 font-brand leading-relaxed text-md text-justify">
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
          <p class="text-gray-300 font-brand leading-relaxed text-md text-justify">
            <slot name="sub-description-03"></slot>
          </p>
        </div>
      </div>

      <!-- Right Column -->
      <div class="grid place-content-center">
        <swiper
          :slides-per-view="1.2"
          :space-between="20"
          :pagination="{ clickable: true }"
          :modules="modules"
          :breakpoints="swiperBreakpoints"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :loop="true"
          class="mySwiper w-full"
        >
          <swiper-slide v-for="(modelImg, index) in programImages" :key="index">
            <img
              :src="modelImg"
              :alt="`Program Image ${index + 1}`"
              class="w-full h-full object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.6;
}
:deep(.swiper-pagination-bullet-active) {
  background: #f3f4f6;
  opacity: 1;
}
</style>
