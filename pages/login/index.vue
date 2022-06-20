<template>
  <div class="mt-16 flex flex-col-reverse sm:flew-row justify-center items-center">
    <ApiAccounts />
    <LoginForm />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
