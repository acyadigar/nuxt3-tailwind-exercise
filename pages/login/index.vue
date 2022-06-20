<template>
  <div class="mt-16 flex justify-center items-center">
    <ApiAccounts />
    <LoginForm />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
