export default function Navbar() {
  return (
    <nav className="sm:px-32 px-2 flex sm:flex-row flex-col w-full items-center sm:justify-between justify-center border-b border-gray-400 py-6">
        <h1 className="font-lato text-3xl font-black logo text-center sm:text-left mb-4 sm:mb-0">
          Wonderful Lyon
        </h1>
        <ul className="flex items-center justify-between sm:gap-7 sm:text-lg sm:w-auto w-full sm:px-0 px-3">
          <li data-replace="Home">
            <a href="#" className="text-gray-700">
              Home
            </a>
          </li>
          <li data-replace="Hotels">
            <a href="#" className="text-gray-700">
              Hotels
            </a>
          </li>
          <li data-replace="Restaurants">
            <a href="#" className="text-gray-700">
              Restaurants
            </a>
          </li>
          <li data-replace="Destinations">
            <a href="#" className="text-gray-700">
              Destinations
            </a>
          </li>
        </ul>
        <a href="#help">
            <button className="btn hidden sm:block border-black hover:text-black bg-black">Need Help</button>
          </a>
    </nav>
  );
}
