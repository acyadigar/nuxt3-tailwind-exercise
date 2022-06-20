<template>
  <div id="main">
    <div class="mt-6">
      <h1 class="text-4xl font-medium my-6 text-center">Users</h1>
      <Table />

      <h1 class="text-4xl font-medium mt-12 text-center">Pantones</h1>
      <Pantone />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
