<!-- views/ContactView.vue -->
<script setup>
import { ref } from 'vue'

import NavbarContainer from '../components/NavbarContainer.vue'
import FooterContainer from '../components/FooterContainer.vue'
import ContactContainer from '../components/ContactContainer.vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
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
  <!-- Navbar Container -->
  <NavbarContainer />

  <section
    class="relative w-full h-64 md:h-116 bg-[url('../assets/images/contact-bg.jpg')] bg-center bg-no-repeat bg-cover flex items-end"
  >
    <div class="absolute inset-0 bg-linear-to-t from-brand-black to-brand-black/0"></div>

    <div class="layout-wrapper relative z-10 pb-3 lg:pb-10">
      <div class="flex items-center gap-2 mb-3">
        <a
          href="/"
          class="text-white/60 font-brand text-sm hover:text-white transition-colors duration-300"
          >Home</a
        >
        <span class="text-white/40 text-sm">/</span>
        <span class="text-white font-brand text-sm">Get In Touch</span>
      </div>
      <h1 class="hero-heading leading-snug">Talk to Us</h1>
    </div>
  </section>

  <!-- Contact Form  -->
  <ContactContainer :form="form" :handleSubmit="handleSubmit" :socialLinks="socialLinks" />

  <!-- Footer Container -->
  <FooterContainer />
</template>
