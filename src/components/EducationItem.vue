<script setup>
import defaultEducationImgModel from '../assets/images/education-sub-bg-model.jpg'
import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const majorPartners = ref([
  'Accenture Philippines',
  'Rotary Club of Calbayog',
  'Teach Peace, Build Peace Foundation',
  'The Church of Jesus Christ of Latter-day Saints',
  'Office of VP Sara Duterte',
  'Former DILG Sec. Mel Sarmiento',
  'Mrs. Judy Araneta – Roxas',
  'Philippine Junior Marketing Association',
  'CANVAS Philippines',
  'Ateneo de Manila University',
])

const educationImageUrl = ref(defaultEducationImgModel)

async function fetchEducationData() {
  const { data, error } = await supabase.from('education_settings').select('*').single()

  if (!error && data) {
    majorPartners.value = data.major_partners || majorPartners.value
    educationImageUrl.value = data.education_image_url
      ? `${data.education_image_url}?v=${Date.now()}`
      : educationImageUrl.value
  }
}

let subscription = null

onMounted(() => {
  fetchEducationData()

  subscription = supabase
    .channel('education-settings-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'education_settings' },
      (payload) => {
        console.log('Realtime event received (Education)!', payload)
        if (payload.new) {
          majorPartners.value = payload.new.major_partners || majorPartners.value
          educationImageUrl.value = payload.new.education_image_url
            ? `${payload.new.education_image_url}?v=${Date.now()}`
            : educationImageUrl.value
        }
      },
    )
    // .subscribe((status, err) => {
    //   console.log('Education subscription status:', status)
    //   if (err) console.error('Education subscription error:', err)
    //   if (status === 'SUBSCRIBED') console.log('Education realtime ready!')
    // })
    .subscribe((status, err) => {
      if (err) console.error('Subscription error:', err)
    })
})

onUnmounted(() => {
  if (subscription) {
    supabase.removeChannel(subscription)
    console.log('Education subscription cleaned up')
  }
})
</script>

<template>
  <section class="w-full py-26" id="education">
    <div class="section-grid-cols-2">
      <div class="row-end-3 lg:row-end-auto pl-6 md:pl-14 xl:pl-24">
        <div class="mb-4">
          <h2 class="section-heading text-brand-black">Education</h2>
          <div class="heading-underline"></div>
        </div>
        <p class="text-brand-black text-base font-brand leading-relaxed mb-16 text-justify">
          <strong>Ako Bakwit</strong> believes education is key to reducing poverty and promoting
          peace
        </p>

        <div class="mt-10 lg:mt-26">
          <p
            class="font-bold font-brand text-sm underline uppercase underline-offset-2 mb-4 tracking-widest"
          >
            Major Partners:
          </p>
          <div class="grid grid-cols-2 gap-x-8 gap-y-1">
            <ul class="flex flex-col gap-1 space-y-2">
              <li
                v-for="partner in majorPartners.slice(0, Math.ceil(majorPartners.length / 2))"
                :key="partner"
                class="text-brand-black font-brand text-base leading-snug text-justify"
                data-aos="fade-in"
                data-aos-delay="300"
              >
                {{ partner }}
              </li>
            </ul>

            <ul class="flex flex-col gap-1 space-y-2">
              <li
                v-for="partner in majorPartners.slice(Math.ceil(majorPartners.length / 2))"
                :key="partner"
                class="text-brand-black font-brand text-base leading-snug text-justify"
                data-aos="fade-in"
                data-aos-delay="300"
              >
                {{ partner }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="relative w-full h-[80dvh] bg-center bg-no-repeat bg-cover"
        :style="{ backgroundImage: `url(${educationImageUrl})` }"
      >
        <div class="absolute inset-0 bg-linear-to-t from-brand-black to-brand-black/0"></div>

        <div class="absolute bottom-10 left-0 md:left-10 xl:left-16 p-6 lg:p-0 space-y-4">
          <div class="bg-brand-purple p-6">
            <h3 class="text-white font-bold font-brand text-3xl lg:text-4xl tracking-wide">
              WHAT WE OFFER?
            </h3>
          </div>
          <div class="flex flex-col gap-3">
            <span
              class="inline-block border border-white text-white bg-brand-purple/20 font-brand text-xl tracking-widest px-3 py-1.5 w-fit"
              data-aos="flip-down"
              data-aos-delay="300"
            >
              PROJECT TABLET
            </span>
            <span
              class="inline-block border border-white text-white bg-brand-purple/20 font-brand text-xl tracking-widest px-3 py-1.5 w-fit"
              data-aos="flip-down"
              data-aos-delay="400"
            >
              SCHOOL SUPPLIES
            </span>
            <span
              class="inline-block border border-white text-white bg-brand-purple/20 font-brand text-xl tracking-widest px-3 py-1.5 w-fit"
              data-aos="flip-down"
              data-aos-delay="500"
            >
              SCHOOL SHOES
            </span>
            <span
              class="inline-block border border-white text-white bg-brand-purple/20 font-brand text-xl tracking-widest px-3 py-1.5 w-fit"
              data-aos="flip-down"
              data-aos-delay="600"
            >
              DIGITAL PEACE EDUCATION
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
