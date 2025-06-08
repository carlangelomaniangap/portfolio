<script setup>
import profile from '@/assets/images/profile.jpg'
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
import linkedin from '@/assets/images/linkedin.png'
import github from '@/assets/images/github.png'
import location from '@/assets/icons/location.svg'
import mail from '@/assets/icons/mail.svg'
import user from '@/assets/icons/user.svg'
import briefcase from '@/assets/icons/briefcase.svg'
import monitor from '@/assets/icons/monitor.svg'
import chevronright from '@/assets/icons/chevron-right.svg'
import folder from '@/assets/icons/folder.svg'
</script>

<template>
  <section class="mb-8">
    <div class="flex items-center gap-4 md:gap-6">
      <img :src="profile" alt="Profile" class="h-34 w-26 md:h-38 md:w-30 rounded-lg">

      <div class="flex-1">
        <h1 class="font-bold text-lg md:text-2xl">Carl Angelo Maniangap</h1>

        <p class="flex gap-1 mt-1">
          <img :src="location" alt="Location">
          <span class="text-xs md:text-sm">Bataan, Philippines</span>
        </p>

        <h3 class="text-sm md:text-base mt-1.5 md:mt-2">Full Stack Developer</h3>

        <a href="mailto:carlangelomaniangap@gmail.com" class="mt-3 md:mt-4 py-1.5 px-2.5 md:py-2 md:px-4 border border-gray-200 inline-flex font-semibold text-xs rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 gap-1 md:gap-1.5">
          <img :src="mail" alt="Mail">
          <span>Send Email</span>
        </a>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-6 gap-2">
    <div id="about" class="p-4 col-span-1 md:col-span-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
      <div class="flex items-center gap-2">
        <img :src="user" alt="User">
        <h2 class="font-bold text-lg">About</h2>
      </div>

      <div class="grid grid-cols-1 gap-4 text-sm text-justify">
        <p>I'm an enthusiastic and dedicated Full Stack Developer with a passion for creating innovative solutions and a strong sense of responsibility. I enjoy bringing ideas to life through code, whether it's designing user-friendly, responsive frontend interfaces or developing robust backend systems.</p>

        <p>Throughout my college journey and personal projects, I've honed my skills in using a variety of tools and technologies to develop both frontend and backend websites and web applications. On the frontend, I've developed user interfaces with HTML, CSS, JavaScript, Tailwind CSS, Vite, and jQuery to create user-friendly and responsive interfaces. For the backend, I've developed and maintained websites and web applications using Laravel, PHP, MySQL, and MongoDB, while using JSON for data handling and API integration. To streamline my development workflow, I regularly use Visual Studio Code as my primary code editor, I store my projects on GitHub and use it to track updates and changes, and Postman for testing APIs.</p>
        
        <p>Currently, I'm working on enhancing my skills through personal projects while continuously learning about modern website development tools. My goal is to become a skilled developer who can provide seamless and innovative solutions.</p>

        <p>When I'm not coding, I enjoy listening to music (keshi is my favorite artist), learning new technologies, and dreaming of visiting Tokyo, Japan. I want to explore Tokyo at night, watch the city lights and enjoy eating ramen.</p>
      </div>
    </div>

    <div id="experience" class="p-4 col-span-1 md:col-span-2 md:row-span-2 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
      <div class="flex items-center gap-2">
        <img :src="briefcase" alt="Briefcase">
        <h2 class="font-bold text-lg">Experience</h2>
      </div>

      <div class="relative space-y-4">
        <div class="absolute left-1.5 top-1.5 bottom-0 w-px bg-gray-300"></div>

        <div class="relative pl-6">
          <div class="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 bg-gray-900"></div>

          <div class="space-y-1">
            <h3 class="font-semibold text-sm">BS in Information Technology</h3>
            <div class="flex items-center justify-between">
              <span class="text-xs">Eastwoods Professional College of Science and Technology</span>
              <span class="text-xs py-1 px-2 border rounded-full">2025</span>
            </div>
          </div>
        </div>

        <div class="relative pl-6">
          <div class="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-gray-400 bg-white hover:bg-gray-900"></div>

          <div class="space-y-1">
            <h3 class="font-semibold text-sm">Hello World!</h3>
            <div class="flex items-center justify-between">
              <span class="text-xs">My first line of code</span>
              <span class="text-xs py-1 px-2 border rounded-full">2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="techstack" class="p-4 col-span-1 md:col-span-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img :src="monitor" alt="Monitor">
          <h2 class="font-bold text-lg">Tech Stack</h2>
        </div>

        <RouterLink to="/tech-stack" class="text-xs flex intems-center gap-1">
          <p>View All</p>
          <img :src="chevronright" alt="Chevron Right">
        </RouterLink>
      </div>

      <div>
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

      <div>
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
    </div>

    <div id="projects" class="p-4 col-span-1 md:col-span-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img :src="folder" alt="Folder">
          <h2 class="font-bold text-lg">Projects</h2>
        </div>

        <RouterLink to="/projects" class="text-xs flex intems-center gap-1">
          <p>View All</p>
          <img :src="chevronright" alt="Chevron Right">
        </RouterLink>
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

    <div id="contacts" class="p-4 col-span-1 md:col-span-2 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img :src="mail" alt="Mail">
          <h2 class="font-bold text-lg">Contacts</h2>
        </div>
      </div>

      <div>
        <a href="mailto:carlangelomaniangap@gmail.com" class="block p-2 rounded-md bg-gray-100 hover:bg-gray-200">
          <p class="text-xs">Email</p>
          <p class="font-semibold text-sm">carlangelomaniangap@gmail.com</p>
        </a>

        <div class="mt-4">
          <h2 class="font-semibold text-sm mb-2">Socials</h2>

          <div class="flex gap-4">
            <a href="https://linkedin.com/in/carlangelomaniangap" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition">
              <img :src="linkedin" alt="LinkedIn" class="w-6 h-6 rounded transition-all duration-300 hover:rotate-6 hover:scale-110">
            </a> 

            <a href="https://github.com/carlangelomaniangap" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition">
              <img :src="github" alt="GitHub" class="w-6 h-6 transition-all duration-300 hover:rotate-6 hover:scale-110">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
