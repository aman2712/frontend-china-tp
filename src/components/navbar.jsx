export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full sm:px-32 px-2">
      <div className="flex w-full items-center justify-between border-b border-gray-400 py-6">
      <h1 className="font-lato text-white text-3xl font-black hidden sm:block">Wonderful Lyon.</h1>
      <ul className="flex items-center sm:gap-7 gap-5 w-96 sm:text-lg sm:mx-0 mx-auto">
        <li>
          <a href="#" className="text-gray-200">&nbsp;Home&nbsp;</a>
        </li>
        <li>
          <a href="#" className="text-gray-200">&nbsp;Hotels&nbsp;</a>
        </li>
        <li>
          <a href="#" className="text-gray-200">&nbsp;Restaurants&nbsp;</a>
        </li>
        <li>
          <a href="#" className="text-gray-200">&nbsp;Destinations&nbsp;</a>
        </li>
        <a href="#help"><button className="btn hidden sm:block">Need Help</button></a>
      </ul>
      </div>
    </nav>
  );
}
