<template>
  <div class="table mx-auto">
    <div class="shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Kullanıcı ID
          </th>
          <th scope="col" class="px-6 py-3">
            İsim
          </th>
          <th scope="col" class="px-6 py-3">
            Soyisim
          </th>
          <th scope="col" class="px-6 py-3">
            E-mail
          </th>
          <th scope="col" class="px-6 py-3">
          </th>
        </tr>
        </thead>
        <tbody>
          <UserCard v-for="user in users.data" :key="user.id" :user="user"/>
        </tbody>
      </table>
    </div>
</div>  
</template>

<script setup>
const users = await request('GET', 'api/users')
</script>
