<script setup>
import arrowleft from '@/assets/icons/arrow-left.svg'
import folder from '@/assets/icons/folder.svg'
</script>

<template>
  <section>
    <div class="py-4">
      <RouterLink to="/" class="text-xs flex intems-center gap-1">
        <img :src="arrowleft" alt="Arrow Left">
        <p>Back to Home</p>
      </RouterLink>
    </div>

    <div id="projects" class="p-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img :src="folder" alt="Folder">
          <h2 class="font-bold text-lg">Projects</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div class="p-4 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow hover:-translate-y-1">
          <div  class="block space-y-1">
            <h3 class="font-semibold text-sm">Cartify</h3>
            <p class="text-xs">E-Commerce website.</p>
            <a href="https://github.com/carlangelomaniangap/cartify" target="_blank" rel="noopener noreferrer" class="inline-block text-xs px-2 py-1 bg-gray-300 rounded-md mt-1">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
