<script setup>
import NavbarContainer from '../components/NavbarContainer.vue'
import FooterContainer from '../components/FooterContainer.vue'
import { ref } from 'vue'

const suggestedAmounts = [100, 250, 500, 1000, 2500, 5000]
const selectedAmount = ref(null)

const selectAmount = (amount) => {
  selectedAmount.value = amount
}

const donationChannels = [
  {
    type: 'GCash',
    bg: '#007CFF',
    accounts: [{ name: 'Ako Bakwit Inc.', number: '0917 123 4567' }],
    numberLabel: 'Account Number',
  },
  {
    type: 'BDO',
    bg: '#003399',
    accounts: [{ name: 'Ako Bakwit, Inc.', number: '000418035461' }],
    numberLabel: 'Account Number',
  },
  {
    type: 'BPI',
    bg: '#CC0000',
    accounts: [{ name: 'Ako Bakwit Inc.', number: '9876 5432 1098' }],
    numberLabel: 'Account Number',
  },
  {
    type: 'PayPal',
    bg: '#003087',
    accounts: [{ number: 'akobakwit@gmail.com' }],
    numberLabel: 'PayPal Email',
    hideAccountName: true,
  },
]
</script>

<template>
  <NavbarContainer />

  <section
    class="relative w-full h-64 md:h-116 bg-[url('../assets/images/donation-bg.jpg')] bg-center bg-no-repeat bg-cover flex items-end"
  >
    <div class="absolute inset-0 bg-linear-to-t from-brand-black to-brand-black/0"></div>
    <div class="layout-wrapper relative z-10 pb-10">
      <div class="flex items-center gap-2 mb-3">
        <a
          href="/"
          class="text-white/60 font-brand text-sm hover:text-white transition-colors duration-300"
          >Home</a
        >
        <span class="text-white/40 text-sm">/</span>
        <span class="text-white font-brand text-sm">Donation</span>
      </div>
      <h1
        class="text-white font-brand font-bold text-4xl md:text-5xl"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      >
        Make a Difference
      </h1>
      <p class="text-white/70 font-brand text-sm mt-2">
        Your donation helps displaced families across the Philippines.
      </p>
    </div>
  </section>

  <section class="bg-brand-white-secondary">
    <div class="layout-wrapper">
      <div class="section-grid-cols-2 gap-24 items-start">
        <!-- Left Side -->
        <div class="flex flex-col gap-8">
          <div>
            <h2 class="text-brand-black font-brand font-bold text-3xl leading-snug mb-4">
              Help us empower displaced communities across the Philippines
            </h2>
            <p class="text-gray-500 font-brand text-sm leading-relaxed">
              Every peso counts. Your donation directly supports our education, hunger relief, and
              livelihood programs for internally displaced families.
            </p>
          </div>
        </div>

        <!-- Right Side -->
        <div
          class="bg-white w-full lg:w-155 shadow-sm border border-gray-100 rounded-2xl overflow-hidden"
          data-aos="fade-up"
        >
          <!--Choose Amount -->
          <div
            class="bg-brand-purple/10 border-b border-brand-purple/20 px-6 py-4 flex items-center gap-3"
          >
            <div
              class="w-7 h-7 rounded-full bg-brand-purple flex items-center justify-center shrink-0"
            >
              <span class="text-white font-brand font-bold text-xs">1</span>
            </div>
            <p class="text-brand-black font-brand font-bold text-sm tracking-widest uppercase">
              Choose an Amount
            </p>
          </div>

          <div class="p-6">
            <p class="text-gray-500 font-brand text-sm mb-6">
              Choose a suggested amount or transfer any amount directly.
            </p>

            <div class="grid grid-cols-3 gap-3 mb-4">
              <div
                v-for="amount in suggestedAmounts"
                :key="amount"
                class="border-2 cursor-pointer rounded-xl py-3 px-2 text-center transition-all duration-300"
                :class="
                  selectedAmount === amount
                    ? 'border-brand-purple bg-brand-purple'
                    : 'border-gray-200 hover:border-brand-purple hover:bg-brand-purple/5'
                "
                @click="selectAmount(amount)"
              >
                <p
                  class="font-brand font-bold text-base transition-colors duration-300"
                  :class="selectedAmount === amount ? 'text-white' : 'text-brand-black'"
                >
                  &#8369; {{ amount.toLocaleString() }}
                </p>
              </div>
            </div>

            <Transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-300"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <p
                v-if="selectedAmount"
                class="text-brand-purple font-brand text-sm font-semibold mt-2"
              >
                You selected &#8369; {{ selectedAmount.toLocaleString() }}. Transfer this to any
                account below.
              </p>
            </Transition>
          </div>

          <!-- Donation Channels -->
          <div class="section-grid-cols-2 gap-4 px-6 pb-6">
            <div
              v-for="channel in donationChannels"
              :key="channel.type"
              class="bg-brand-white-secondary rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-brand-purple/30 transition-all duration-300"
            >
              <!-- Channel Label -->
              <div class="mb-4 pb-3 border-b border-gray-100">
                <span
                  class="inline-block px-3 py-1 rounded-lg text-white font-brand font-bold text-sm"
                  :style="{ backgroundColor: channel.bg }"
                >
                  {{ channel.type }}
                </span>
              </div>

              <div v-for="account in channel.accounts" :key="account.number">
                <div v-if="!channel.hideAccountName">
                  <p class="text-gray-400 font-brand text-xs tracking-widest uppercase mb-1">
                    Account Name
                  </p>
                  <p class="text-brand-black font-brand font-semibold text-sm">
                    {{ account.name }}
                  </p>
                </div>

                <div :class="!channel.hideAccountName ? 'mt-3' : ''">
                  <p class="text-gray-400 font-brand text-xs tracking-widest uppercase mb-1">
                    {{ channel.numberLabel }}
                  </p>
                  <p class="text-brand-black font-brand font-bold text-sm tracking-wider break-all">
                    {{ account.number }}
                  </p>
                </div>

                <!-- Show Selected Amount -->
                <Transition
                  enter-active-class="transition-all duration-300"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <div v-if="selectedAmount" class="mt-3 pt-3 border-t border-gray-100">
                    <p class="text-gray-400 font-brand text-xs tracking-widest uppercase mb-1">
                      Amount to Send
                    </p>
                    <p class="font-brand font-bold text-xl text-brand-purple">
                      &#8369; {{ selectedAmount.toLocaleString() }}
                    </p>
                  </div>
                </Transition>
              </div>
            </div>
          </div>

          <!-- After Sending -->
          <div
            class="bg-brand-purple/10 border-y border-brand-purple/20 px-6 py-4 flex items-center gap-3"
          >
            <div
              class="w-7 h-7 rounded-full bg-brand-purple flex items-center justify-center shrink-0"
            >
              <span class="text-white font-brand font-bold text-xs">2</span>
            </div>
            <p class="text-brand-black font-brand font-bold text-sm tracking-widest uppercase">
              After Sending
            </p>
          </div>

          <div class="p-6">
            <p class="text-gray-500 font-brand text-sm leading-relaxed mb-6">
              After your donation, please send a screenshot of your transaction to
              <a
                href="mailto:akobakwit@gmail.com"
                class="text-brand-purple font-semibold hover:underline"
              >
                akobakwit@gmail.com
              </a>
              so we can acknowledge your contribution and send you a confirmation.
            </p>

            <a
              href="mailto:akobakwit@gmail.com"
              class="group relative flex items-center justify-center gap-2 bg-brand-black text-white px-6 py-4 rounded-2xl font-brand text-sm cursor-pointer overflow-hidden transition-all duration-300 w-full"
            >
              <span
                class="absolute inset-0 bg-brand-purple rounded-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              ></span>
              <span
                class="relative z-10 font-semibold tracking-wide group-hover:text-white transition-colors duration-300"
              >
                Send Confirmation
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <FooterContainer />
</template>
