<script setup>
import SustainableLivelihoodItem from './SustainableLivelihoodItem.vue'
import SustainableLivelihoodModelImg from '../assets/images/sustainable-livelihood-sub-img-model.png'
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
      <img
        :src="SustainableLivelihoodModelImg"
        class="w-full rounded-2xl"
        alt="Sustainable livelihood Model"
      />
    </template>
  </SustainableLivelihoodItem>
</template>
