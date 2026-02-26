<script setup>
import BrandLogo from '../assets/images/brand-logo.png'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Programs', href: '/#programs' },
  { label: 'Education', href: '/#education' },
  { label: 'Volunteer', href: '/#volunteer' },
  { label: 'Sustainable Livelihood', href: '/#sustainable-livelihood' },
  { label: 'Relief Distribution', href: '/#relief-distribution' },
  { label: 'Policy Advocacy', href: '/#policy-advocacy' },
  { label: 'Donation', href: '/donation' },
  { label: 'Contact Us', href: '/contact' },
]
</script>

<template>
  <footer class="bg-white">
    <div class="layout-wrapper pt-24 pb-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-200">
        <div class="flex flex-col gap-5">
          <img :src="BrandLogo" alt="Ako Bakwit Logo" class="w-20 h-20" />
          <div class="w-4/5">
            <p class="text-gray-500 font-brand text-sm leading-relaxed text-justify">
              Ang kwento ng mga bakwit ay kwento rin ng bawat Pilipino — isang salamin ng ating
              pagkakaisa, pag-asa, at katatagan.
            </p>
          </div>
        </div>

        <div>
          <h4
            class="text-brand-black font-brand font-semibold text-sm mb-4 pb-3 border-b border-gray-300"
          >
            Reach Us
          </h4>
          <p class="text-gray-500 font-brand text-sm mt-4">
            <span class="text-gray-500 font-semibold">Email: </span>
            <a href="mailto:akobakwit@gmail.com" target="_blank" class="hover:hover:underline">
              akobakwit@gmail.com
            </a>
          </p>
          <p class="text-gray-500 font-brand text-sm mt-4">
            <span class="text-gray-500 font-semibold">Facebook: </span>
            <a href="https://facebook.com/akobakwit" target="_blank" class="hover:hover:underline">
              Ako Bakwit
            </a>
          </p>
          <p class="text-gray-500 font-brand text-sm mt-4">
            <span class="text-gray-500 font-semibold">Twitter: </span>
            <a href="ttps://twitter.com/akobakwit" target="_blank" class="hover:hover:underline">
              @AkoBakwit
            </a>
          </p>
        </div>

        <div>
          <h4
            class="text-brand-black font-brand font-semibold text-sm mb-4 pb-3 border-b border-gray-300"
          >
            Quick Links
          </h4>
          <ul class="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="link.href"
                class="relative text-gray-500 font-brand text-sm group hover:underline"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="layout-wrapper pb-4 pt-0 flex flex-col sm:flex-row items-center justify-between gap-3"
    >
      <p class="text-gray-500 font-brand text-xs">
        &copy; {{ new Date().getFullYear() }} Ako Bakwit Inc. All Rights Reserved.
      </p>
      <a href="" target="_blank" class="text-gray-500 font-brand text-xs hover:underline">
        Privacy Policy
      </a>
    </div>
  </footer>
</template>
