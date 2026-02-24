<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const props = defineProps({ buttonText: { type: String, default: 'Donate Now' } })

const heading = ref('Empowering Communities. Building Hope.')
const description = ref('Ang kwento ng mga bakwit...')
const bgImageUrl = ref('../assets/images/hero-bg.jpg')
const buttonText = ref(props.buttonText)

async function fetchHeroData() {
  const { data, error } = await supabase.from('hero_settings').select('*').single()

  if (!error && data) {
    heading.value = data.heading
    description.value = data.description
    buttonText.value = data.button_text
    bgImageUrl.value = data.bg_image_url ? `${data.bg_image_url}?t=${Date.now()}` : bgImageUrl.value
  }
}

let subscription = null

onMounted(() => {
  fetchHeroData()

  subscription = supabase
    .channel('hero-settings-channel')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'hero_settings' }, (payload) => {
      if (payload.new) {
        heading.value = payload.new.heading || heading.value
        description.value = payload.new.description || description.value
        buttonText.value = payload.new.button_text || buttonText.value
        bgImageUrl.value = payload.new.bg_image_url
          ? `${payload.new.bg_image_url}?v=${Date.now()}`
          : bgImageUrl.value
      }
    })
    .subscribe((status, err) => {
      if (err) console.error('Subscription error:', err)
    })
})

onUnmounted(() => {
  if (subscription) {
    supabase.removeChannel(subscription)
  }
})
</script>

<template>
  <section id="home">
    <div
      class="relative w-full min-h-dvh bg-center bg-no-repeat bg-cover"
      :style="{ backgroundImage: `url(${bgImageUrl})` }"
    >
      <div class="absolute inset-0 bg-linear-to-r from-brand-purple to-brand-black/50"></div>

      <div
        class="layout-wrapper section-grid-cols-2 gap-0 place-items-center min-h-screen pt-24 pb-12 relative z-10"
      >
        <div class="space-y-4">
          <h1
            class="hero-heading leading-snug"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
          >
            {{ heading }}
          </h1>

          <div class="w-4/5 mb-6">
            <p class="text-white text-base font-brand leading-relaxed">
              {{ description }}
            </p>
          </div>

          <div>
            <button
              class="group relative bg-brand-black text-white px-6 py-4 rounded-2xl font-normal font-brand cursor-pointer overflow-hidden transition-all duration-300 w-fit"
            >
              <span
                class="absolute inset-0 bg-white rounded-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              />
              <span class="relative z-10 flex items-center gap-2">
                <span class="transition-colors duration-300 group-hover:text-brand-purple">
                  {{ buttonText }}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-white transition-all duration-300 group-hover:text-brand-purple group-hover:-translate-y-1 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="hidden lg:flex"></div>
      </div>
    </div>
  </section>
</template>
