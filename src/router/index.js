import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { supabase } from '../lib/supabaseClient'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Ako Bakwit, Inc.',
      description:
        'Ang kwento ng mga bakwit ay kwento rin ng bawat Pilipino — isang salamin ng ating pagkakaisa, pag-asa, at katatagan.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Us',
      description:
        'Get in touch with Ako Bakwit Inc. Reach out to volunteer, donate, or partner with us in empowering displaced communities.',
    },
  },
  {
    path: '/donation',
    name: 'donation',
    component: () => import('../views/DonationView.vue'),
    meta: {
      title: 'Donation',
      description:
        'Support Ako Bakwit Inc. by donating through GCash, BDO, BPI, or PayPal. Every peso helps displaced families across the Philippines.',
    },
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: 'Admin Login',
      description: 'Secure admin access to Ako Bakwit content management system.',
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminDashboardView.vue'),
    meta: {
      title: 'Admin Dashboard',
      description: 'Manage content, updates, and data for Ako Bakwit, Inc.',
      requiresAuth: true,
    },
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/404View.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (to.meta.requiresAuth && !session) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    }
  }

  document.title = to.meta.title || 'Ako Bakwit, Inc.'
})

export default router
