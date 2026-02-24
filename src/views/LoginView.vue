<script setup>
import BrandLogo from '../assets/images/brand-logo.png'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'

const email = ref('akobakwit@gmail.com')
const password = ref('')
const errorMsg = ref('')
const loading = ref(false)

const router = useRouter()

async function login() {
  errorMsg.value = ''
  loading.value = true

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (error) {
    errorMsg.value = error.message
    console.error(error)
    return
  }

  router.push('/admin')
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-purple/10 via-white to-brand-purple/5 p-4"
  >
    <div
      class="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-purple/20"
    >
      <div class="bg-white px-8 py-10 text-center">
        <img :src="BrandLogo" alt="Brand Logo" class="mx-auto w-28 h-28" />
        <h2 class="text-2xl text-brand-black tracking-tight font-bold mt-8">Admin Login</h2>
      </div>

      <!-- Form -->
      <form @submit.prevent="login" class="px-8 py-10 space-y-6 font-brand">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email </label>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="akobakwit@gmail.com"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-all bg-gray-50 text-gray-900"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="••••••••"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-all bg-gray-50 text-gray-900"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 px-4 bg-brand-purple text-white font-medium rounded-lg shadow-md cursor-pointer hover:bg-brand-purple/90 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>

        <!-- Error Message -->
        <p v-if="errorMsg" class="text-red-600 text-center text-sm mt-4">
          {{ errorMsg }}
        </p>
      </form>
    </div>
  </div>
</template>
