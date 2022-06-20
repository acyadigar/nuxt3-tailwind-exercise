<template>
  <div class="grid md:grid-cols-6 gap-6 py-6 text-center px-12">
    <div v-for="pantone in data" class="border-2 rounded-lg">
      <div class="h-20 rounded-tl-lg rounded-tr-lg" :style="'background-color:'+pantone.color">
      </div>
      <p class="font-medium text-lg my-1 px-2">PANTONE</p>
      <p class="uppercase my-1 px-2">{{pantone.name}}</p>
      <p class="text-sm my-1 px-2">{{pantone.pantone_value}}</p>
      <p class="text-sm my-1 px-2">{{pantone.year}}</p>
    </div>
  </div>
</template>

<script setup>
const { data } = await request('GET', 'api/unknown')
</script>