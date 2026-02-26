<script setup>
import ReliefDistributionItem from './ReliefDistributionItem.vue'
import ReliefDistributionModel01 from '../assets/images/relief-distribution-sub-img-model-01.png'
import ReliefDistributionModel02 from '../assets/images/relief-distribution-sub-img-model-02.png'
</script>
<template>
  <ReliefDistributionItem>
    <template #sub-description>
      <span class="underline" data-aos="fade-in" data-aos-delay="300"
        >Relief Distribution <br />
        Partner: BDO Foundation</span
      >. During a calamity is a critical, time-sensitive operation that involves mobilizing
      resources, coordinating with local authorities, and delivering essential supplies—food, water,
      hygiene kits, and shelter materials—to affected communities as quickly and safely as possible.
    </template>
    <template #relief-distribution-sub-model-img-01>
      <img
        :src="ReliefDistributionModel01"
        alt="Relief Distribution Model"
        class="w-full h-[50%] object-cover"
      />
    </template>
    <template #relief-distribution-sub-model-img-02>
      <img
        :src="ReliefDistributionModel02"
        alt="Relief Distribution Model"
        class="w-full h-[50%] object-cover"
      />
    </template>
  </ReliefDistributionItem>
</template>
