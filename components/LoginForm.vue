<template>
  <form @submit.prevent="submit" class="w-1/2 mb-12">
    <div v-if="error" class="relative flex items-center justify-center border rounded-lg text-red-500 bg-red-100 font-medium text-center py-4 mb-8">
      <span>Giriş yapılırken bir hata oluştu!!</span>
      <svg @click="error=false" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute right-0 top-0 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
      <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required>
      <span v-if="isMailError" class="text-red-600">Email geçersiz!</span>
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
      <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      <span v-if="isPwError" class="text-red-600">Parola geçersiz!</span>
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
      </div>
      <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</template>

<script setup>
const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref(false)
const isMailError = computed(() => email.value !== '' && email.value.length <= 3)
const isPwError = computed(() => password.value !== '' && password.value.length <= 3)

const submit = async (e) => {
  e.preventDefault()
  error.value = false
  const data = {email: email.value, password: password.value}
  
  try {
    await request('POST', 'api/login', data)
    router.push('/')
    }
  catch {
    error.value = true
  }
}
</script>
