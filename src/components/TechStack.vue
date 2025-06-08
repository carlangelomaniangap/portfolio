<script setup>
import arrowleft from '@/assets/icons/arrow-left.svg'
import monitor from '@/assets/icons/monitor.svg'
import html from '@/assets/images/html.png'
import css from '@/assets/images/css.png'
import javascript from '@/assets/images/javascript.png'
import tailwindcss from '@/assets/images/tailwindcss.png'
import vite from '@/assets/images/vite.png'
import jquery from '@/assets/images/jquery.png'
import json from '@/assets/images/json.png'
import laravel from '@/assets/images/laravel.png'
import php from '@/assets/images/php.png'
import mysql from '@/assets/images/mysql.png'
import mongodb from '@/assets/images/mongodb.png'
import vscode from '@/assets/images/vscode.png'
import git from '@/assets/images/git.png'
import github from '@/assets/images/github.png'
import postman from '@/assets/images/postman.png'
</script>

<template>
  <section>
    <div class="py-4">
      <RouterLink to="/" class="text-xs flex intems-center gap-1">
        <img :src="arrowleft" alt="Arrow Left">
        <p>Back to Home</p>
      </RouterLink>
    </div>

    <div id="techstack" class="p-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img :src="monitor" alt="Monitor">
          <h2 class="font-bold text-lg">Tech Stack</h2>
        </div>
      </div>

      <div id="frontend">
        <h3 class="font-semibold text-sm mb-2">Frontend</h3>

        <div class="flex flex-wrap gap-4">
          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="html" alt="HTML" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">HTML</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="css" alt="CSS" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">CSS</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="javascript" alt="JavaScript" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">JavaScript</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="tailwindcss" alt="tailwindcss" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">Tailwind CSS</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="vite" alt="Vite" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">Vite</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="jquery" alt="jQuery" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">jQuery</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="json" alt="JSON" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">JSON</span>
          </div>
        </div>
      </div>

      <div id="backend">
        <h3 class="font-semibold text-sm mb-2">Backend</h3>

        <div class="flex flex-wrap gap-4">
          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="laravel" alt="Laravel" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">Laravel</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="php" alt="PHP" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">PHP</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="json" alt="JSON" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">JSON</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="mysql" alt="MySQL" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">MySQL</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="mongodb" alt="MongoDB" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">MongoDB</span>
          </div>
        </div>
      </div>

      <div id="Tools">
        <h3 class="font-semibold text-sm mb-2">Tools</h3>

        <div class="flex flex-wrap gap-4">
          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="vscode" alt="VS Code" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">VS Code</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="git" alt="Git" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">Git</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="github" alt="Github" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">Github</span>
          </div>

          <div class="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition-all duration-300">
            <img :src="postman" alt="Postman" class="h-8 w-8 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <span class="text-xs">Postman</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
