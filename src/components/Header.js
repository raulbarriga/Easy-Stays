import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
***REMOVED***/* left div */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/images/Airbnb_Logo.png"
          alt="logo"
          fill
          className="object-contain object-left"
        />
      </div>
***REMOVED***/* middle div - Search */}
      <div className="flex items-center md:border-2 py-2 rounded-full md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start Your Search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
***REMOVED***/* right div */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
***REMOVED***

export default Header;
