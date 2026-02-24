<!-- src/views/AdminDashboard.vue -->
<script setup>
import { ref, onMounted } from 'vue'

import { supabase } from '../lib/supabaseClient'
import NavbarContainerAdmin from '../components/NavbarContainerAdmin.vue'

const activeSection = ref('hero')

// Hero States
const heroHeading = ref('')
const heroDescription = ref('')
const heroButtonText = ref('')
const heroBgImage = ref(null)
const currentBgUrl = ref('')
const heroLoading = ref(false)
const heroError = ref('')
const heroSuccess = ref('')

async function fetchHeroData() {
  heroLoading.value = true
  const { data, error } = await supabase.from('hero_settings').select('*').single()

  heroLoading.value = false

  if (error) {
    heroError.value = 'Failed to load hero data: ' + error.message
    console.error(error)
    return
  }

  if (data) {
    heroHeading.value = data.heading || ''
    heroDescription.value = data.description || ''
    heroButtonText.value = data.button_text || ''
    currentBgUrl.value = data.bg_image_url || ''
  } else {
    heroHeading.value = 'Empowering Communities. Building Hope.'
    heroDescription.value = 'Ang kwento ng mga bakwit...'
    heroButtonText.value = 'Donate Now'
    currentBgUrl.value = '../assets/images/hero-bg-backup.jpg'
  }
}

async function updateHero() {
  heroLoading.value = true
  heroError.value = ''
  heroSuccess.value = ''

  let bgImageUrl = currentBgUrl.value

  if (heroBgImage.value) {
    const fileName = `hero-bg-${Date.now()}.jpg`
    const { error: uploadError } = await supabase.storage
      .from('hero-images')
      .upload(fileName, heroBgImage.value)

    if (uploadError) {
      heroLoading.value = false
      heroError.value = 'Image upload failed: ' + uploadError.message
      return
    }

    const { data: publicUrlData } = supabase.storage.from('hero-images').getPublicUrl(fileName)
    bgImageUrl = publicUrlData.publicUrl
  }

  const { error } = await supabase.from('hero_settings').upsert({
    id: 1,
    heading: heroHeading.value,
    description: heroDescription.value,
    button_text: heroButtonText.value,
    bg_image_url: bgImageUrl,
  })

  heroLoading.value = false

  if (error) {
    heroError.value = 'Update failed: ' + error.message
    console.error(error)
  } else {
    heroSuccess.value = 'Hero section updated successfully!'
    currentBgUrl.value = bgImageUrl
    heroBgImage.value = null
  }
}

// About States
const aboutWhoWeAre = ref('')
const aboutVision = ref('')
const aboutMission = ref('')
const aboutSubImage = ref(null)
const currentAboutImageUrl = ref('')
const aboutLoading = ref(false)
const aboutError = ref('')
const aboutSuccess = ref('')

async function fetchAboutData() {
  aboutLoading.value = true
  const { data, error } = await supabase.from('about_settings').select('*').single()

  aboutLoading.value = false

  if (error) {
    aboutError.value = 'Failed to load about data: ' + error.message
    console.error(error)
    return
  }

  if (data) {
    aboutWhoWeAre.value = data.who_we_are || ''
    aboutVision.value = data.our_vision || ''
    aboutMission.value = data.our_mission || ''
    currentAboutImageUrl.value = data.sub_image_url || ''
  } else {
    aboutWhoWeAre.value = 'Ako Bakwit is dedicated to uplifting displaced families...'
    aboutVision.value = 'A world where every displaced family has the opportunity...'
    aboutMission.value = 'To provide education, hunger relief, and sustainable livelihood...'
    currentAboutImageUrl.value = ''
  }
}

async function updateAbout() {
  aboutLoading.value = true
  aboutError.value = ''
  aboutSuccess.value = ''

  let subImageUrl = currentAboutImageUrl.value

  if (aboutSubImage.value) {
    const fileName = `about-sub-${Date.now()}.png`
    const { error: uploadError } = await supabase.storage
      .from('about-images')
      .upload(fileName, aboutSubImage.value)

    if (uploadError) {
      aboutLoading.value = false
      aboutError.value = 'Image upload failed: ' + uploadError.message
      return
    }

    const { data: publicUrlData } = supabase.storage.from('about-images').getPublicUrl(fileName)
    subImageUrl = publicUrlData.publicUrl
  }

  const { error } = await supabase.from('about_settings').upsert({
    id: 1,
    who_we_are: aboutWhoWeAre.value,
    our_vision: aboutVision.value,
    our_mission: aboutMission.value,
    sub_image_url: subImageUrl,
  })

  aboutLoading.value = false

  if (error) {
    aboutError.value = 'Update failed: ' + error.message
    console.error(error)
  } else {
    aboutSuccess.value = 'About section updated successfully!'
    currentAboutImageUrl.value = subImageUrl
    aboutSubImage.value = null
  }
}

// Education States
const educationSubDesc = ref('')
const educationImage = ref(null)
const currentEducationImageUrl = ref('')
const educationLoading = ref(false)
const educationError = ref('')
const educationSuccess = ref('')

const partner1 = ref('')
const partner2 = ref('')
const partner3 = ref('')
const partner4 = ref('')
const partner5 = ref('')
const partner6 = ref('')
const partner7 = ref('')
const partner8 = ref('')
const partner9 = ref('')
const partner10 = ref('')

async function fetchEducationData() {
  educationLoading.value = true
  const { data, error } = await supabase.from('education_settings').select('*').single()

  educationLoading.value = false

  if (error) {
    educationError.value = 'Failed to load education data: ' + error.message
    console.error(error)
    return
  }

  if (data) {
    educationSubDesc.value = data.sub_description || ''
    currentEducationImageUrl.value = data.education_image_url || ''

    const partners = data.major_partners || []
    partner1.value = partners[0] || ''
    partner2.value = partners[1] || ''
    partner3.value = partners[2] || ''
    partner4.value = partners[3] || ''
    partner5.value = partners[4] || ''
    partner6.value = partners[5] || ''
    partner7.value = partners[6] || ''
    partner8.value = partners[7] || ''
    partner9.value = partners[8] || ''
    partner10.value = partners[9] || ''
  } else {
    educationSubDesc.value =
      'Ako Bakwit believes education is key to reducing poverty and promoting peace'
    currentEducationImageUrl.value = '../assets/images/education-sub-bg-model.png'

    partner1.value = 'Accenture Philippines'
    partner2.value = 'Rotary Club of Calbayog'
    partner3.value = 'Teach Peace, Build Peace Foundation'
    partner4.value = 'The Church of Jesus Christ of Latter-day Saints'
    partner5.value = 'Office of VP Sara Duterte'
    partner6.value = 'Former DILG Sec. Mel Sarmiento'
    partner7.value = 'Mrs. Judy Araneta – Roxas'
    partner8.value = 'Philippine Junior Marketing Association'
    partner9.value = 'CANVAS Philippines'
    partner10.value = 'Ateneo de Manila University'
  }
}

async function updateEducation() {
  educationLoading.value = true
  educationError.value = ''
  educationSuccess.value = ''

  let imageUrl = currentEducationImageUrl.value

  if (educationImage.value) {
    const fileName = `education-bg-${Date.now()}.png`
    const { error: uploadError } = await supabase.storage
      .from('education-images')
      .upload(fileName, educationImage.value)

    if (uploadError) {
      educationLoading.value = false
      educationError.value = 'Image upload failed: ' + uploadError.message
      return
    }

    const { data: publicUrlData } = supabase.storage.from('education-images').getPublicUrl(fileName)
    imageUrl = publicUrlData.publicUrl
  }

  const partnersArray = [
    partner1.value.trim(),
    partner2.value.trim(),
    partner3.value.trim(),
    partner4.value.trim(),
    partner5.value.trim(),
    partner6.value.trim(),
    partner7.value.trim(),
    partner8.value.trim(),
    partner9.value.trim(),
    partner10.value.trim(),
  ].filter((p) => p)

  const { error } = await supabase.from('education_settings').upsert({
    id: 1,
    sub_description: educationSubDesc.value,
    major_partners: partnersArray,
    education_image_url: imageUrl,
  })

  educationLoading.value = false

  if (error) {
    educationError.value = 'Update failed: ' + error.message
    console.error(error)
  } else {
    educationSuccess.value = 'Education section updated successfully!'
    currentEducationImageUrl.value = imageUrl
    educationImage.value = null
  }
}

onMounted(() => {
  fetchHeroData()
  fetchAboutData()
  fetchEducationData()
})
</script>

<template>
  <section class="min-h-screen bg-gray-50 flex flex-col font-brand">
    <!-- Header -->
    <NavbarContainerAdmin />

    <div
      class="flex flex-1 overflow-hidden max-w-7xl mx-auto w-full mt-6 rounded-lg shadow-lg bg-white"
    >
      <!-- Sidebar -->
      <aside class="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
        <nav class="p-4">
          <ul class="space-y-2">
            <li>
              <button
                @click="activeSection = 'hero'"
                :class="[
                  'w-full text-left px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer',
                  activeSection === 'hero'
                    ? 'bg-purple-100 text-purple-800 border-l-4 border-purple-600'
                    : 'text-gray-700 hover:bg-gray-100',
                ]"
              >
                Hero Section
              </button>
            </li>
            <li>
              <button
                @click="activeSection = 'about'"
                :class="[
                  'w-full text-left px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer',
                  activeSection === 'about'
                    ? 'bg-purple-100 text-purple-800 border-l-4 border-purple-600'
                    : 'text-gray-700 hover:bg-gray-100',
                ]"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                @click="activeSection = 'education'"
                :class="[
                  'w-full text-left px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer',
                  activeSection === 'education'
                    ? 'bg-purple-100 text-purple-800 border-l-4 border-purple-600'
                    : 'text-gray-700 hover:bg-gray-100',
                ]"
              >
                Education
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <div class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
        <!-- Hero -->
        <div
          v-if="activeSection === 'hero'"
          class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          <div class="px-6 py-5 border-b border-gray-200 bg-purple-50">
            <h2 class="text-xl font-semibold text-purple-900">Manage Hero Section</h2>
            <p class="mt-1 text-sm text-gray-600">
              Edit heading, description, button text, and background image.
            </p>
          </div>

          <form @submit.prevent="updateHero" class="p-6 space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Section Heading</label>
              <input
                v-model="heroHeading"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Section Description</label
              >
              <textarea
                v-model="heroDescription"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none resize-y"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
              <input
                v-model="heroButtonText"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Background Image</label>
              <input
                type="file"
                accept="image/*"
                @change="heroBgImage = $event.target.files[0]"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition cursor-pointer"
              />
            </div>
            <div
              class="flex flex-col sm:flex-row sm:justify-between gap-4 pt-4 border-t border-gray-200"
            >
              <button
                type="submit"
                :disabled="heroLoading"
                class="cursor-pointer w-full sm:w-auto px-6 py-3 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-purple transition disabled:opacity-50"
              >
                {{ heroLoading ? 'Updating...' : 'Update Hero' }}
              </button>
              <div class="text-sm">
                <p v-if="heroError" class="text-red-600">{{ heroError }}</p>
                <p v-if="heroSuccess" class="text-green-600">{{ heroSuccess }}</p>
              </div>
            </div>
          </form>
        </div>

        <!-- About -->
        <div
          v-if="activeSection === 'about'"
          class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          <div class="px-6 py-5 border-b border-gray-200 bg-purple-50">
            <h2 class="text-xl font-semibold text-purple-900">Manage About Us Section</h2>
            <p class="mt-1 text-sm text-gray-600">
              Edit Who We Are, Vision, Mission, and sub-image.
            </p>
          </div>

          <form @submit.prevent="updateAbout" class="p-6 space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Who We Are</label>
              <textarea
                v-model="aboutWhoWeAre"
                rows="4"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none resize-y"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Our Vision</label>
              <textarea
                v-model="aboutVision"
                rows="3"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none resize-y"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Our Mission</label>
              <textarea
                v-model="aboutMission"
                rows="3"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none resize-y"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Sub Image</label>
              <input
                type="file"
                accept="image/*"
                @change="aboutSubImage = $event.target.files[0]"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition cursor-pointer"
              />
            </div>
            <div
              class="flex flex-col sm:flex-row sm:justify-between gap-4 pt-4 border-t border-gray-200"
            >
              <button
                type="submit"
                :disabled="aboutLoading"
                class="cursor-pointer w-full sm:w-auto px-6 py-3 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-purple transition disabled:opacity-50"
              >
                {{ aboutLoading ? 'Updating...' : 'Update About' }}
              </button>
              <div class="text-sm">
                <p v-if="aboutError" class="text-red-600">{{ aboutError }}</p>
                <p v-if="aboutSuccess" class="text-green-600">{{ aboutSuccess }}</p>
              </div>
            </div>
          </form>
        </div>

        <!-- Education -->
        <div
          v-if="activeSection === 'education'"
          class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          <div class="px-6 py-5 border-b border-gray-200 bg-purple-50">
            <h2 class="text-xl font-semibold text-purple-900">Manage Education Section</h2>
            <p class="mt-1 text-sm text-gray-600">
              Edit sub-description, major partners (10 fields), and background image.
            </p>
          </div>

          <form @submit.prevent="updateEducation" class="p-6 space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Sub Description</label>
              <textarea
                v-model="educationSubDesc"
                rows="4"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none resize-y"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Major Partners (10 fields)</label
              >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  v-model="partner1"
                  placeholder="Partner 1"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner2"
                  placeholder="Partner 2"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner3"
                  placeholder="Partner 3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner4"
                  placeholder="Partner 4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner5"
                  placeholder="Partner 5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner6"
                  placeholder="Partner 6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner7"
                  placeholder="Partner 7"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner8"
                  placeholder="Partner 8"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner9"
                  placeholder="Partner 9"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="partner10"
                  placeholder="Partner 10"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
              </div>
            </div>

            <!-- What We Offer - 4 fixed input fields -->
            <!-- <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >What We Offer (4 fields)</label
              >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  v-model="offer1"
                  placeholder="Offer 1"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="offer2"
                  placeholder="Offer 2"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="offer3"
                  placeholder="Offer 3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
                <input
                  v-model="offer4"
                  placeholder="Offer 4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-purple-500 transition outline-none"
                />
              </div>
            </div> -->

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Background Image (right side)</label
              >
              <input
                type="file"
                accept="image/*"
                @change="educationImage = $event.target.files[0]"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition cursor-pointer"
              />
            </div>

            <div
              class="flex flex-col sm:flex-row sm:justify-between gap-4 pt-4 border-t border-gray-200"
            >
              <button
                type="submit"
                :disabled="educationLoading"
                class="cursor-pointer w-full sm:w-auto px-6 py-3 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-purple transition disabled:opacity-50"
              >
                {{ educationLoading ? 'Updating...' : 'Update Education' }}
              </button>
              <div class="text-sm">
                <p v-if="educationError" class="text-red-600">{{ educationError }}</p>
                <p v-if="educationSuccess" class="text-green-600">{{ educationSuccess }}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
