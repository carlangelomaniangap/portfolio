import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.jpg'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import javascript from '../assets/images/javascript.png'
import tailwindcss from '../assets/images/tailwindcss.png'
import vite from '../assets/images/vite.png'
import laravel from '../assets/images/laravel.png'
import php from '../assets/images/php.png'
import mysql from '../assets/images/mysql.png'
import mongodb from '../assets/images/mongodb.png'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import location from '../assets/icons/location.svg'
import mail from '../assets/icons/mail.svg'
import user from '../assets/icons/user.svg'
import briefcase from '../assets/icons/briefcase.svg'
import monitor from '../assets/icons/monitor.svg'
import chevronright from '../assets/icons/chevron-right.svg'
import folder from '../assets/icons/folder.svg'

export default function Home() {
  return (
    <>
      <section className="mb-8">
        <div className="flex items-center gap-4 md:gap-6">
          <img src={profile} alt="Profile" className="h-34 w-26 md:h-38 md:w-30 rounded-lg" />

          <div className="flex-1">
            <h1 className="font-bold text-lg md:text-2xl">Carl Angelo Maniangap</h1>

            <p className="flex gap-1 mt-1">
              <img src={location} alt="Location" />
              <span className="text-xs md:text-sm">Bataan, Philippines</span>
            </p>

            <h3 className="text-sm md:text-base mt-1.5 md:mt-2">Full Stack Developer</h3>

            <a href="mailto:carlangelomaniangap@gmail.com" className="mt-3 md:mt-4 py-1.5 px-2.5 md:py-2 md:px-4 border border-gray-200 inline-flex font-semibold text-xs rounded-lg transition duration-200 hover:shadow-md hover:-translate-y-0.5 gap-1 md:gap-1.5">
              <img src={mail} alt="Mail" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div id="about" className="p-4 col-span-1 md:col-span-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
          <div className="flex items-center gap-2">
            <img src={user} alt="User" />
            <h2 className="font-bold text-lg">About</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 text-sm text-justify">
            <p>I'm an enthusiastic and dedicated Full Stack Developer with a passion for creating innovative solutions and a strong sense of responsibility. I enjoy bringing ideas to life through code, whether it's designing user-friendly, responsive frontend interfaces or developing robust backend systems.</p>

            <p>Throughout my college journey and personal projects, I've honed my skills using a variety of tools and technologies to design and build full stack systems.</p>

            <p>Currently, I'm enhancing my skills through personal projects and continuously learning about modern website development tools. My goal is to become a skilled developer capable of delivering seamless and innovative solutions.</p>

            <p>When I'm not coding, I enjoy listening to music (keshi is my favorite artist), learning new technologies, and dreaming of visiting Tokyo, Japan. I want to explore Tokyo at night, watch the city lights, and enjoy eating ramen.</p>
          </div>
        </div>

        <div id="experience" className="p-4 col-span-1 md:col-span-2 md:row-span-2 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
          <div className="flex items-center gap-2">
            <img src={briefcase} alt="Briefcase" />
            <h2 className="font-bold text-lg">Experience</h2>
          </div>

          <div className="relative space-y-4">
            <div className="absolute left-1.5 top-1.5 bottom-0 w-px bg-gray-300"></div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 bg-gray-900"></div>

              <div className="space-y-1">
                <h3 className="font-semibold text-sm">BS in Information Technology</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Eastwoods Professional College of Science and Technology</span>
                  <span className="text-xs py-1 px-2 border rounded-full">2025</span>
                </div>
              </div>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-gray-400 bg-white hover:bg-gray-900"></div>

              <div className="space-y-1">
                <h3 className="font-semibold text-sm">Hello World!</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs">My first line of code</span>
                  <span className="text-xs py-1 px-2 border rounded-full">2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="techstack" className="p-4 col-span-1 md:col-span-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={monitor} alt="Monitor" />
              <h2 className="font-bold text-lg">Tech Stack</h2>
            </div>

            <Link to="/tech-stack" className="text-xs flex intems-center gap-1">
              <p>View All</p>
              <img src={chevronright} alt="Chevron Right" />
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-2">Frontend</h3>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={html} alt="HTML" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
                <span className="text-xs">HTML</span>
              </div>

              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={css} alt="CSS" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
                <span className="text-xs">CSS</span>
              </div>

              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={javascript} alt="JavaScript" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110"/>
                <span className="text-xs">JavaScript</span>
              </div>

              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={tailwindcss} alt="tailwindcss" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
                <span className="text-xs">Tailwind CSS</span>
              </div>

              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={vite} alt="Vite" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
                <span className="text-xs">Vite</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-2">Backend</h3>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={laravel} alt="Laravel" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
                <span className="text-xs">Laravel</span>
              </div>

              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={php} alt="PHP" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
                <span className="text-xs">PHP</span>
              </div>

              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={mysql} alt="MySQL" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
                <span className="text-xs">MySQL</span>
              </div>

              <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
                <img src={mongodb} alt="MongoDB" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
                <span className="text-xs">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="p-4 col-span-1 md:col-span-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={folder} alt="Folder" />
              <h2 className="font-bold text-lg">Projects</h2>
            </div>

            <Link to="/projects" className="text-xs flex intems-center gap-1">
              <p>View All</p>
              <img src={chevronright} alt="Chevron Right" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="p-4 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow hover:-translate-y-1">
              <div  className="block space-y-1">
                <h3 className="font-semibold text-sm">Cartify</h3>
                <p className="text-xs">E-Commerce website.</p>
                <div className="flex justify-end">
                  <a href="https://github.com/carlangelomaniangap/cartify" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 bg-gray-200 rounded-md mt-1">Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contacts" className="p-4 col-span-1 md:col-span-2 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={mail} alt="Mail" />
              <h2 className="font-bold text-lg">Contacts</h2>
            </div>
          </div>

          <div>
            <a href="mailto:carlangelomaniangap@gmail.com" className="block p-2 rounded-md bg-gray-100 hover:bg-gray-200">
              <p className="text-xs">Email</p>
              <p className="font-semibold text-sm">carlangelomaniangap@gmail.com</p>
            </a>

            <div className="mt-4">
              <h2 className="font-semibold text-sm mb-2">Socials</h2>

              <div className="flex gap-4">
                <a href="https://linkedin.com/in/carlangelomaniangap" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6 rounded transition duration-300 hover:rotate-6 hover:scale-110" />
                </a>

                <a href="https://github.com/carlangelomaniangap" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                  <img src={github} alt="GitHub" className="w-6 h-6 transition duration-300 hover:rotate-6 hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
