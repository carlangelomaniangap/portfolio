import { Link } from 'react-router-dom';
import arrowleft from '../assets/icons/arrow-left.svg'
import folder from '../assets/icons/folder.svg'

export default function Projects() {
  return (
    <section>
      <div className="py-4">
        <Link to="/" className="text-xs flex intems-center gap-1">
          <img src={arrowleft} alt="Arrow Left" />
          <p>Back to Home</p>
        </Link>
      </div>

      <div id="projects" className="p-4 space-y-2 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={folder} alt="Folder" />
            <h2 className="font-bold text-lg">Projects</h2>
          </div>
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
    </section>
  );
}