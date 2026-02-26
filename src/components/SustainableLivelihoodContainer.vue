<script setup>
import SustainableLivelihoodItem from './SustainableLivelihoodItem.vue'
import SustainableLivelihoodModelImg01 from '../assets/images/sustainable-livelihood-sub-img-model-01.png' // ← big photo
import SustainableLivelihoodModelImg02 from '../assets/images/sustainable-livelihood-sub-img-model-02.png'
import SustainableLivelihoodModelImg03 from '../assets/images/sustainable-livelihood-sub-img-model-03.png'
import SustainableLivelihoodModelImg04 from '../assets/images/sustainable-livelihood-sub-img-model-04.png'
</script>

<template>
  <SustainableLivelihoodItem>
    <template #section-heading>Sustainable Livelihood</template>

    <template #sub-description-01>
      IDPs often face limited livelihood opportunities, forcing them to relocate in search of
      stability. To address this, Ako Bakwit implements projects like Project Tahi, providing job
      opportunities for IDPs in Metro Manila, particularly those from Mindanao affected by armed
      conflicts. The project empowers IDPs, offers psycho-social support, and redirects their focus
      towards positive endeavors.
    </template>

    <template #sub-description-02>
      Negosyo ni Juan provides seed capital, technical-vocational skills training, and
      entrepreneurial support to conflict- and disaster-affected communities, aiming to restore
      self-sufficiency and foster resilience.
    </template>

    <template #sustainable-livelihood-img-model>
      <div class="space-y-5 md:space-y-7">
        <div
          class="overflow-hidden rounded-2xl shadow-xl"
          data-aos="zoom-out"
          data-aos-easing="ease-in"
          data-aos-delay="100"
        >
          <img
            :src="SustainableLivelihoodModelImg01"
            alt="Main sustainable livelihood activity"
            class="w-full aspect-[5/3] md:aspect-[21/9] object-cover"
            loading="lazy"
          />
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          <div
            class="overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
            data-aos="zoom-out"
            data-aos-easing="ease-in"
            data-aos-delay="300"
          >
            <img
              :src="SustainableLivelihoodModelImg02"
              alt="Activity 1"
              class="w-full h-full object-cover transition hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
          <div
            class="overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
            data-aos="zoom-out"
            data-aos-easing="ease-in"
            data-aos-delay="500"
          >
            <img
              :src="SustainableLivelihoodModelImg03"
              alt="Activity 2"
              class="w-full h-full object-cover transition hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
          <div
            class="overflow-hidden rounded-xl shadow-lg aspect-[5/3] lg:aspect-[4/3] block col-span-2 lg:col-span-1"
            data-aos="zoom-out"
            data-aos-easing="ease-in"
            data-aos-delay="700"
          >
            <img
              :src="SustainableLivelihoodModelImg04"
              alt="Activity 3"
              class="w-full h-full object-cover transition hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </template>
  </SustainableLivelihoodItem>
</template>
