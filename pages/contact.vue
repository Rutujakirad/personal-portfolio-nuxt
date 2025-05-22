<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  await new Promise(resolve => setTimeout(resolve, 1500));
  formData.value = { name: '', email: '', message: '' };
  isSubmitting.value = false;
  showSuccess.value = true;
  setTimeout(() => {
    showSuccess.value = false;
  }, 5000);
};
</script>


<template>
 <!-- Unique back navigation -->
    <div class="fixed top-6 left-6 z-50">
      <div class="flex items-center space-x-4">
        <!-- Home -->
        <div class="group relative" @click="$router.push('/')" title="Home">
          <div class="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-md flex items-center justify-center border border-gray-700/50 transition-all duration-300 group-hover:bg-purple-600/30 group-hover:border-purple-500/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div class="absolute inset-0 rounded-full scale-0 opacity-0 bg-purple-500/20 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700"></div>
          <span class="absolute left-14 top-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-800 px-2 py-1 rounded">Home</span>
        </div>
      </div>
    </div>

  <main class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div class="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
      <p class="text-gray-300 text-lg mb-16">Let's build something awesome. Ping me anytime!</p>

      <div class="grid md:grid-cols-3 gap-10 relative">
        <div class="md:col-span-2 bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-xl">
          <h2 class="text-2xl font-semibold text-white mb-6">Send a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                class="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                class="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="5" 
                class="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg transition duration-300 hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center"
              >
                <span v-if="isSubmitting">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
                <span v-else>Send Message</span>
              </button>
            </div>
          </form>
          <div v-if="showSuccess" class="mt-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300">
            Thank you for your message! I'll get back to you soon.
          </div>
        </div>

        <div class="md:col-span-1 space-y-8">
          <div class="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-xl">
            <div class="flex items-center">
              <div class="h-3 w-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span class="text-gray-200 font-medium">Open to internships & collabs ✨</span>
            </div>
          </div>

          <div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-xl">
            <h3 class="text-xl font-semibold text-white mb-4">Connect With Me</h3>
            <div class="space-y-5">
              <a href="mailto:chinmayikirad31@gmail.com" class="group flex items-center text-gray-300 hover:text-white transition duration-300">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition duration-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>chinmayikirad31@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/rutuja-kirad" target="_blank" rel="noopener noreferrer" class="group flex items-center text-gray-300 hover:text-white transition duration-300">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition duration-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span>linkedin.com/in/rutuja-kirad</span>
              </a>
              <a href="https://github.com/Rutujakirad" target="_blank" rel="noopener noreferrer" class="group flex items-center text-gray-300 hover:text-white transition duration-300">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gray-500/20 transition duration-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span>github.com/Rutujakirad</span>
              </a>
            </div>
          </div>
          <div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-xl">
            <h3 class="text-xl font-semibold text-white mb-3">Response Time</h3>
            <p class="text-gray-300">I typically respond within 24-48 hours on weekdays.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>