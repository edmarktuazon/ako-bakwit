<script setup>
import aboutDefaultImgModel from '../assets/images/about-sub-img-model.png'
import aboutSubImgModel01 from '../assets/images/about-sub-img-model-01.jpg'
import aboutSubImgModel02 from '../assets/images/about-sub-img-model-02.jpg'
import aboutSubImgModel03 from '../assets/images/about-sub-img-model-03.jpg'

import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const whoWeAre = ref(
  'Ako Bakwit is dedicated to uplifting displaced families and vulnerable communities through sustainable programs that empower individuals and foster resilience.',
)
const ourVision = ref(
  'A world where every displaced family has the opportunity to thrive and contribute to their communities.',
)
const ourMission = ref(
  'To provide education, hunger relief, and sustainable livelihood opportunities for displaced families, while advocating for their rights and needs.',
)
const subImageUrl = ref(aboutDefaultImgModel)
const subImageUrl01 = ref(aboutSubImgModel01)
const subImageUrl02 = ref(aboutSubImgModel02)
const subImageUrl03 = ref(aboutSubImgModel03)

async function fetchAboutData() {
  const { data, error } = await supabase.from('about_settings').select('*').maybeSingle()

  if (!error && data) {
    whoWeAre.value = data.who_we_are || whoWeAre.value
    ourVision.value = data.our_vision || ourVision.value
    ourMission.value = data.our_mission || ourMission.value
    subImageUrl.value = data.sub_image_url
    subImageUrl01.value = data.sub_image_url
    subImageUrl02.value = data.sub_image_url
    subImageUrl03.value = data.sub_image_url
      ? `${data.sub_image_url}?v=${Date.now()}`
      : (subImageUrl.value, subImageUrl01, subImageUrl02, subImageUrl03)
  }
}

let subscription = null

onMounted(() => {
  fetchAboutData()

  subscription = supabase
    .channel('about-settings-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'about_settings' },
      (payload) => {
        console.log('Realtime event received (About)!', payload)
        if (payload.new) {
          whoWeAre.value = payload.new.who_we_are || whoWeAre.value
          ourVision.value = payload.new.our_vision || ourVision.value
          ourMission.value = payload.new.our_mission || ourMission.value
          subImageUrl.value = payload.new.sub_image_url
            ? `${payload.new.sub_image_url}?v=${Date.now()}`
            : subImageUrl.value
        }
      },
    )
    // .subscribe((status, err) => {
    //   if (err) console.error('About subscription error:', err)
    //   if (status === 'SUBSCRIBED') console.log('About subscription established')
    // })
    .subscribe((status, err) => {
      if (err) console.error('Subscription error:', err)
    })
})

onUnmounted(() => {
  if (subscription) {
    supabase.removeChannel(subscription)
    console.log('About subscription cleaned up')
  }
})
</script>

<template>
  <section class="min-h-dvh layout-wrapper" id="about">
    <div class="section-grid-cols-2">
      <div class="row-end-3 lg:row-end-auto">
        <div class="mb-16">
          <h2 class="section-heading text-brand-black">About Us</h2>
          <div class="heading-underline"></div>
        </div>

        <!-- Who We Are -->
        <div class="mb-8">
          <h3
            class="text-brand-purple font-semibold font-brand text-3xl mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Who We Are
          </h3>
          <p
            class="text-brand-black text-base font-brand leading-relaxed w-full lg:w-4/5 text-justify"
          >
            {{ whoWeAre }}
          </p>
        </div>

        <!-- Our Vision -->
        <div class="mb-8">
          <h3
            class="text-brand-purple font-semibold font-brand text-3xl mb-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Vision
          </h3>
          <p
            class="text-brand-black text-base font-brand leading-relaxed w-full lg:w-4/5 text-justify"
          >
            {{ ourVision }}
          </p>
        </div>

        <!-- Our Mission -->
        <div class="mb-8">
          <h3
            class="text-brand-purple font-semibold font-brand text-3xl mb-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our Mission
          </h3>
          <p
            class="text-brand-black text-base font-brand leading-relaxed w-full lg:w-4/5 text-justify"
          >
            {{ ourMission }}
          </p>
        </div>

        <div class="mt-8">
          <div
            class="flex flex-col gap-6 bg-brand-purple/10 p-10 lg:p-6 rounded-lg w-full lg:w-[20rem]"
          >
            <div class="flex items-start gap-4">
              <div>
                <p
                  class="text-brand-purple font-brand font-bold text-base tracking-widest uppercase"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  SEC Registration
                </p>
                <p class="text-brand-black font-brand font-semibold text-base">CN202003974</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <p
                  class="text-brand-purple font-brand font-bold text-base tracking-widest uppercase"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  BIR TIN
                </p>
                <p class="text-brand-black font-brand font-semibold text-base">
                  010 – 486 – 442 – 000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- About Sub Image -->
      <div class="grid grid-cols-2 gap-4 place-content-center">
        <img
          :src="subImageUrl01"
          class="aspect-3/2 object-cover rounded-xl w-full"
          data-aos="zoom-out"
          data-aos-easing="ease-in"
          data-aos-delay="100"
          alt="About Sub Model Img"
        />
        <img
          :src="subImageUrl02"
          class="aspect-3/2 object-cover rounded-xl w-full"
          data-aos="zoom-out"
          data-aos-easing="ease-in"
          data-aos-delay="300"
          alt="About Sub Model Img"
        />

        <div class="col-span-2 flex justify-center">
          <img
            :src="subImageUrl03"
            class="aspect-3/2 object-cover rounded-xl w-full md:w-1/2"
            data-aos="zoom-out"
            data-aos-easing="ease-in"
            data-aos-delay="500"
            alt="About Sub Model Img"
          />
        </div>
      </div>

      <!-- <div>
        <img :src="subImageUrl" class="object-cover" alt="About Ako Bakwit Model" />
      </div> -->
    </div>
  </section>
</template>
