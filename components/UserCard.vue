<template>
  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
    <td scope="row" class="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
      {{user.id}}
    </td>
    <td scope="row" class="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
      {{user.first_name}}
    </td>
    <td scope="row" class="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
      {{user.last_name}}
    </td>
    <td scope="row" class="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
      {{user.email}}
    </td>
    <td class="px-6 py-4 text-right">
      <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline">İşlemler...</span>
    </td>    
  </tr>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
  }
})
</script>
