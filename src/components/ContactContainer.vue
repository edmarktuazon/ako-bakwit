<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isLoading = ref(false)
const isSuccess = ref(false)
const isError = ref(false)

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) return

  isLoading.value = true
  isSuccess.value = false
  isError.value = false

  try {
    const { error } = await supabase.functions.invoke('rapid-service', {
      body: {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
    })

    if (error) throw error

    isSuccess.value = true
    form.value = { name: '', email: '', message: '' }

    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  } catch (err) {
    console.error(err)
    isError.value = true

    setTimeout(() => {
      isError.value = false
    }, 5000)
  } finally {
    isLoading.value = false
  }
}

const socialLinks = [
  {
    label: 'Ako Bakwit',
    href: 'https://facebook.com/akobakwit',
    icon: `<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>`,
    filled: true,
  },
  {
    label: '@AkoBakwit',
    href: 'https://twitter.com/akobakwit',
    icon: `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`,
    filled: true,
  },
  {
    label: 'akobakwit@gmail.com',
    href: 'mailto:akobakwit@gmail.com',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>`,
    filled: false,
  },
]
</script>

<template>
  <section class="py-24 min-h-dvh flex items-center justify-center bg-brand-white-secondary">
    <div class="w-full">
      <div class="section-grid-cols-2 gap-0 lg:gap-26 relative bg-brand-purple w-full">
        <!-- Left Side -->
        <div
          class="pl-6 md:pl-16 lg:pl-10 xl:pl-24 py-16 flex flex-col justify-center items-start lg:items-end"
        >
          <div>
            <h2 class="text-4xl leading-snug font-bold font-brand text-white mb-2">
              Start the Conversation
            </h2>
            <p class="text-white font-brand text-sm leading-relaxed max-w-xs">
              Have questions or want to get involved? Reach out to us through any of the channels
              below.
            </p>

            <div class="flex flex-col gap-5 mt-12">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                target="_blank"
                class="flex items-center gap-4 group"
              >
                <div
                  class="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white/60 group-hover:bg-white group-hover:text-brand-purple group-hover:border-white transition-all duration-300 shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    :fill="social.filled ? 'currentColor' : 'none'"
                    viewBox="0 0 24 24"
                    :stroke="social.filled ? 'none' : 'currentColor'"
                    stroke-width="1.5"
                    v-html="social.icon"
                  />
                </div>
                <span class="text-white font-brand text-sm">{{ social.label }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Side (Form) -->
        <div
          class="lg:-my-16 bg-white shadow-xl px-6 lg:px-10 py-14 z-10 w-full lg:w-[85%] xl:w-[65%]"
          data-aos="fade-up"
        >
          <div class="mb-16">
            <h2 class="text-4xl leading-snug font-bold font-brand text-brand-black">
              Leave Us a Message
            </h2>
            <div class="heading-underline"></div>
            <p class="text-gray-500 font-brand text-sm leading-relaxed mt-8">
              Feel free to reach out to us anytime. We'd love to hear from you and will respond at
              our earliest convenience.
            </p>
          </div>

          <div class="flex flex-col gap-6">
            <!-- Name -->
            <div class="relative">
              <input
                v-model="form.name"
                type="text"
                placeholder=" "
                id="name"
                class="peer w-full bg-transparent border-b border-gray-300 text-brand-black font-brand py-3 focus:outline-none focus:border-brand-purple transition-colors duration-300 placeholder-transparent"
              />
              <label
                for="name"
                class="absolute left-0 top-3 text-gray-400 font-brand text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-purple peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
              >
                Enter your Name
              </label>
            </div>

            <!-- Email -->
            <div class="relative">
              <input
                v-model="form.email"
                type="email"
                placeholder=" "
                id="email"
                class="peer w-full bg-transparent border-b border-gray-300 text-brand-black font-brand py-3 focus:outline-none focus:border-brand-purple transition-colors duration-300 placeholder-transparent"
              />
              <label
                for="email"
                class="absolute left-0 top-3 text-gray-400 font-brand text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-purple peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
              >
                Enter a valid email address
              </label>
            </div>

            <!-- Message -->
            <div class="relative">
              <textarea
                v-model="form.message"
                placeholder=" "
                id="message"
                rows="4"
                class="peer w-full bg-transparent border-b border-gray-300 text-brand-black font-brand py-3 focus:outline-none focus:border-brand-purple transition-colors duration-300 placeholder-transparent resize-none"
              />
              <label
                for="message"
                class="absolute left-0 top-3 text-gray-400 font-brand text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-purple peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
              >
                Your Message
              </label>
            </div>

            <!-- Success Message -->
            <Transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div
                v-if="isSuccess"
                class="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-green-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-green-600 font-brand text-sm">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            </Transition>

            <!-- Error Message -->
            <Transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div
                v-if="isError"
                class="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-red-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p class="text-red-600 font-brand text-sm">
                  Something went wrong. Please try again.
                </p>
              </div>
            </Transition>

            <!-- Submit Button -->
            <button
              class="group relative bg-brand-black text-white px-6 py-4 rounded-2xl font-normal font-brand cursor-pointer overflow-hidden transition-all duration-300 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isLoading"
              @click="handleSubmit"
            >
              <span
                class="absolute inset-0 bg-brand-purple rounded-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              ></span>
              <span class="relative z-10 flex items-center gap-2">
                <span class="transition-colors duration-300 group-hover:text-white">
                  {{ isLoading ? 'Sending...' : 'Send Message' }}
                </span>
                <svg
                  v-if="!isLoading"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
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
                <!-- Loading spinner -->
                <svg v-else class="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              </span>
            </button>

            <p class="text-gray-500 font-brand text-xs flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3.5 h-3.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Your information is safe with us. We never share your data with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
