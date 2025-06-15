import { Link } from 'react-router-dom';
import arrowleft from '../assets/icons/arrow-left.svg'
import monitor from '../assets/icons/monitor.svg'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import javascript from '../assets/images/javascript.png'
import tailwindcss from '../assets/images/tailwindcss.png'
import vite from '../assets/images/vite.png'
import laravel from '../assets/images/laravel.png'
import php from '../assets/images/php.png'
import mysql from '../assets/images/mysql.png'
import mongodb from '../assets/images/mongodb.png'
import vscode from '../assets/images/vscode.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'
import postman from '../assets/images/postman.png'

export default function TechStack() {
  return (
    <section>
      <div className="py-4">
        <Link to="/" className="text-xs flex intems-center gap-1">
          <img src={arrowleft} alt="Arrow Left" />
          <p>Back to Home</p>
        </Link>
      </div>

      <div id="techstack" className="p-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={monitor} alt="Monitor" />
            <h2 className="font-bold text-lg">Tech Stack</h2>
          </div>
        </div>

        <div id="frontend">
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
              <img src={javascript} alt="JavaScript" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
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

        <div id="backend">
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

        <div id="Tools">
          <h3 className="font-semibold text-sm mb-2">Tools</h3>

          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
              <img src={vscode} alt="VS Code" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
              <span className="text-xs">VS Code</span>
            </div>

            <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
              <img src={git} alt="Git" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
              <span className="text-xs">Git</span>
            </div>

            <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
              <img src={github} alt="Github" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
              <span className="text-xs">Github</span>
            </div>

            <div className="flex flex-col items-center hover:grayscale-0 hover:text-gray-900 grayscale text-gray-400 transition duration-300">
              <img src={postman} alt="Postman" className="h-8 w-8 transition duration-300 hover:rotate-6 hover:scale-110" />
              <span className="text-xs">Postman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
