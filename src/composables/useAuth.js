import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'vue-router'

const user = ref(null)
const loading = ref(false)
const error = ref('')

let authListener = null

export function useAuth() {
  const router = useRouter()

  const loadSession = async () => {
    loading.value = true
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      user.value = session?.user ?? null
    } catch (err) {
      console.error('Error loading session:', err)
    } finally {
      loading.value = false
    }
  }

  // Login Function
  const login = async (email, password) => {
    error.value = ''
    loading.value = true

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      })

      if (authError) throw authError

      user.value = data.user
      return { success: true }
    } catch (err) {
      error.value = err.message || 'Invalid email or password'
      console.error('Login error:', err)
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Logout Function
  const logout = async () => {
    loading.value = true
    try {
      const { error: logoutError } = await supabase.auth.signOut()
      if (logoutError) throw logoutError

      user.value = null
      router.push('/login')
    } catch (err) {
      console.error('Logout error:', err)
      error.value = 'Failed to logout'
    } finally {
      loading.value = false
    }
  }

  const setupAuthListener = () => {
    if (authListener) return

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      user.value = session?.user ?? null
      console.log('Auth event:', event)

      // Optional: redirect logic based on event
      if (event === 'SIGNED_OUT') {
        router.push('/login')
      } else if (event === 'SIGNED_IN' && router.currentRoute.value.path === '/login') {
        router.push('/admin')
      }
    })

    authListener = listener
  }

  onMounted(() => {
    loadSession()
    setupAuthListener()
  })

  onUnmounted(() => {
    if (authListener?.subscription) {
      authListener.subscription.unsubscribe()
    }
  })

  return {
    user,
    loading,
    error,
    login,
    logout,
    loadSession,
  }
}
