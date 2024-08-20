import { FaFacebookF, FaYoutube, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaInstagram, FaXTwitter  } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-10">
      <div className="sm:px-32 px-6 sm:flex justify-between gap-32 mb-10">
        <div className="flex-1">
          <h1 className="text-white text-5xl font-black mt-6 font-lato mb-10">
            Wonderful Lyon.
          </h1>
          <p className="text-gray-400">
            Lyon is a historic city in southeastern France, known for its rich
            cultural heritage and vibrant gastronomy. It sits at the confluence
            of the Rhône and Saône rivers, with a charming old town that is a
            UNESCO World Heritage.
          </p>
          <div className="flex justify-between mt-10 pr-10">
            <FaFacebookF  className="text-white cursor-pointer hover:scale-125 transition duration-300" size={25}/>
            <FaYoutube  className="text-white cursor-pointer hover:scale-125 transition duration-300" size={25}/>
            <FaInstagram  className="text-white cursor-pointer hover:scale-125 transition duration-300" size={25}/>
            <FaXTwitter className="text-white cursor-pointer hover:scale-125 transition duration-300" size={25} />
            <FaTelegramPlane className="text-white cursor-pointer hover:scale-125 transition duration-300" size={25} />
            <FaDiscord className="text-white cursor-pointer hover:scale-125 transition duration-300" size={25} />
          </div>
        </div>
        <div className="flex-1 grid sm:grid-cols-3 grid-cols-2 mt-10 sm:mt-0">
          <div className="mt-6 flex flex-col gap-4">
            <h2 className="text-white text-2xl font-semibold">Services</h2>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Contact Us</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Press</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Payroll</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Library</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Blog</a>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <h2 className="text-white text-2xl font-semibold">Support</h2>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Contact</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Affiliates</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Security</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Sitemap</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Policies</a>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <h2 className="text-white text-2xl font-semibold mt-6 sm:mt-0">Resources</h2>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">FAQs</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Support</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 duration-300 transition max-w-content">Terms</a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-2 sm:px-16 sm:flex justify-between items-center sm:text-left text-center">
        <p className="text-gray-400 sm:mb-0 mb-4">
          &copy; Copright 2024. Wonderful Lyon LLC.
        </p>
        <div className="sm:flex items-center gap-5">
          <p className="text-gray-400">Also visit:</p>
          <a href="#" className="text-gray-400 hover:underline sm:mr-0 mr-2">
            Paris
          </a>
          <a href="#" className="text-gray-400 hover:underline sm:mr-0 mr-2">
            Bordeaux
          </a>
          <a href="#" className="text-gray-400 hover:underline sm:mr-0 mr-2">
            Stratsbourg
          </a>
          <a href="#" className="text-gray-400 hover:underline sm:mr-0 mr-2">
            Marseille
          </a>
          <a href="#" className="text-gray-400 hover:underline sm:mr-0 mr-2">
            Lille
          </a>
        </div>
      </div>
    </footer>
  );
}
