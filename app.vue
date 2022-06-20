<template>
  <div>
    <nav class="w-full py-4 bg-gray-500 text-neutral-100">
      <NuxtLink to="/" class="ml-5 font-medium n-link-base">
        Home
      </NuxtLink>
      <NuxtLink v-if="!user" to="/login" class="ml-5 font-medium n-link-base">
        Login
      </NuxtLink>
      <span v-else class="ml-5 n-link-base">{{user.email}}</span>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
const user = useState('user')
</script>
