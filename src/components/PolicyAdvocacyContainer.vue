<script setup>
import PolicyAdvocacyItem from './PolicyAdvocacyItem.vue'
import PolicyAdvocacyModelImg01 from '../assets/images/advocacy-sub-img-model-01.jpg'
import PolicyAdvocacyModelImg02 from '../assets/images/advocacy-sub-img-model-02.png'
</script>
<template>
  <PolicyAdvocacyItem image="../assets/images/advocacy-sub-bg.png">
    <template #section-heading>Policy Advocacy</template>

    <template #sub-description-overlay>
      Development to push for the passage of ID rights bills, which have been pending for 20 years.
    </template>

    <template #sub-description>
      The Philippines is still waiting for a comprehensive national law on IDP rights protection.
      Legislative efforts are ongoing in Congress to establish a unified framework. Ako Bakwit
      collaborates with organizations like UNHCR and the Philippine Legislators Committee on
      Population and Development.
    </template>

    <template #advocacy-policy-model-img-01>
      <img
        :src="PolicyAdvocacyModelImg01"
        alt="Policy advocacy event img"
        class="w-[50%] object-cover"
      />
    </template>
    <template #advocacy-policy-model-img-02>
      <img
        :src="PolicyAdvocacyModelImg02"
        alt="Policy advocacy event img"
        class="w-[50%] object-cover"
      />
    </template>
  </PolicyAdvocacyItem>
</template>
