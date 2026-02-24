<script setup>
import BrandLogo from '../assets/images/brand-logo.png'
import BrandLogoOnHover from '../assets/images/brand-logo-on-hover.png'
import { ref, toRefs, onMounted, onUnmounted } from 'vue'

const navData = ref({
  links: [
    { label: 'Home', href: '/' },
    { label: 'Donation', href: '/donation' },
    { label: 'Contact Us', href: '/contact' },
  ],
})

const { links } = toRefs(navData.value)

const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="overflow-x-hidden">
    <header
      class="layout-wrapper flex items-center justify-between fixed top-0 left-0 w-full z-50 transition-all duration-500"
      :class="isScrolled ? 'bg-brand-black backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'"
    >
      <div class="logo">
        <a href="/">
          <img
            :src="isScrolled ? BrandLogoOnHover : BrandLogo"
            alt="Ako Bakwit Inc. Logo"
            width="64"
            height="64"
            class="transition-all duration-500"
          />
        </a>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li v-for="link in links" :key="link.label">
            <a :href="link.href" class="relative text-white font-brand font-normal group">
              {{ link.label }}
              <span
                class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"
              />
            </a>
          </li>
        </ul>
      </nav>

      <!-- Hamburger Button -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer relative z-60 transition-all duration-300"
        :class="isMenuOpen ? 'invisible opacity-0' : 'visible opacity-100'"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span class="block w-6 h-0.5 bg-white transition-all duration-300 ease-out origin-center" />
        <span class="block w-6 h-0.5 bg-white transition-all duration-300 ease-out" />
        <span class="block w-6 h-0.5 bg-white transition-all duration-300 ease-out origin-center" />
      </button>
    </header>

    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden fixed inset-0 bg-black/70 z-45" @click="toggleMenu" />
    </Transition>

    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-brand-black z-[55] flex flex-col justify-center px-10 shadow-2xl"
      >
        <button
          class="absolute top-5 right-5 text-white cursor-pointer hover:text-brand-purple transition-colors duration-300"
          @click="toggleMenu"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav>
          <ul class="flex flex-col gap-8">
            <li
              v-for="(link, index) in links"
              :key="link.label"
              :style="{
                transitionDelay: isMenuOpen ? `${index * 80 + 200}ms` : '0ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }"
            >
              <a
                :href="link.href"
                class="relative text-white font-brand text-3xl font-normal group hover:text-brand-purple transition-colors duration-300"
                @click="toggleMenu"
              >
                {{ link.label }}
                <span
                  class="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-purple group-hover:w-full transition-all duration-300"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </div>
</template>
