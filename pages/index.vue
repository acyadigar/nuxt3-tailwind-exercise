<template>
  <div id="main">
    <div class="mt-6">
      <Table />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
