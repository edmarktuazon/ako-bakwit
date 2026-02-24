<script setup>
import VolunteerItem from './VolunteerItem.vue'
import JLBGLogo from '../assets/images/jollibee-group.png'
import RAHPLogo from '../assets/images/rahp.png'
import DSWDLogo from '../assets/images/dswd.png'
</script>
<template>
  <VolunteerItem
    :partners="[
      {
        logo: JLBGLogo,
        alt: 'Jollibee Group',
        description:
          'Through its Food Aid Program, JGF has been instrumental in partnering with us to feed IDP shelters and IDP urban poor communities since the pandemic.',
      },
      {
        logo: RAHPLogo,
        alt: 'Rise Against Hunger Philippines',
        description:
          'Because of the RAHP Food Banking initiatives, we are able to distribute ready-to-eat, ready-to-cook meals to various calamity-stricken areas, IDP shelters, and urban poor communities.',
      },
      {
        logo: DSWDLogo,
        alt: 'DSWD',
        description:
          'The Department of Social Welfare and Development has been generous in accepting our recommendations to conduct feeding programs in various transitory shelters and urban poor communities.',
      },
    ]"
  >
    <template #section-heading>Bahagi sa Bakwit – Fight against hunger</template>
    <template #sub-description>
      Armed conflicts, natural hazards like typhoons, and development aggressions have displaced
      families, forcing them to flee their homes. Hunger in Philippine Internally Displaced Person
      (IDP) communities, particularly in Mindanao and areas affected by conflict or disaster, is a
      critical issue driven by loss of livelihood, restricted resources, and prolonged displacement.
      In response, Ako Bakwit has been conducting feeding programs in various locations to support
      IDPs, aligning with our mission to promote their welfare.
    </template>
  </VolunteerItem>
</template>
