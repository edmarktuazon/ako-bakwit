<script setup>
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'

const router = useRouter()

async function handleLogout() {
  try {
    await supabase.auth.signOut()
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)

    alert('Logout error. Please try again.')
  }
}
</script>

<template>
  <header class="bg-brand-purple text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
      <h1 class="text-2xl md:text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      <div class="flex items-center gap-4">
        <button
          @click="handleLogout"
          class="text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm bg-brand-black cursor-pointer hover:bg-black/80"
        >
          Logout
        </button>
      </div>
    </div>
  </header>
</template>
