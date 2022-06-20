<template>
  <div class="absolute left-0 top-20 bg-gray-200 p-4">
    <p class="font-medium">Valid users</p>
    <div v-for="user in users" class="my-2">
      <p>{{user.email}}</p>
      <p>pw: cityslicka</p>
    </div>
  </div>  
</template>

<script setup>
const result = await request('GET', 'api/users')
const users = computed(() => result.data)
</script>
