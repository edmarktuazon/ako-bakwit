<script setup>
import ProgramsItem from './ProgramsItem.vue'
import ProgramModelImg from '../assets/images/program-sub-img-model.png'
</script>
<template>
  <ProgramsItem>
    <template #section-heading>Our Programs</template>

    <template #sub-heading-01>What We Do</template>
    <template #sub-description-01>
      <strong>Ako Bakwit</strong> is a group of commited citizens raising awareness and protecting
      the rights of internally displaced persons (IDPs). We focus on peace education, poverty
      reduction, and capacity building for sustainable development.
    </template>

    <template #sub-heading-02>Covid Relief Response</template>
    <template #sub-description-02>
      When the COVID-19 pandemic struck, our team focused on locating IDPs and delivering relief
      aid. This effort revealed systemic challenges: IDPs infected with the virus faced barriers to
      accessing assistance due to lack of identification, and families of deceased IDPs often
      struggled to secure ambulance services because victims were not registered voters in their
      host communities.
    </template>
    <template #sub-heading-03>Government Aid Programs</template>
    <template #sub-description-03>
      IDPs often struggle to access government aids due to lack of identification, non voter
      registration in their adopted communities, among others. Through partnerships with government
      agencies and officials, we've assisted IDPs in various provinces, endorsing them for different
      government social programs.
    </template>
    <template #program-sub-model-img>
      <img :src="ProgramModelImg" class="img-fluid rounded-2xl" alt="Program Model" />
    </template>
  </ProgramsItem>
</template>
