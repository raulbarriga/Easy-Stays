"use client";

import Image from "next/image";
import { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { format } from "date-fns";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  // this resolved the issue of all dates being selected initially when setting state to null & trying to use the start/end date placeholders:
  // https://github.com/hypeserver/react-date-range/issues/330#issuecomment-802601417
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date(""));
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  //receive the valeus the user's selecting, then update the startDate & endDate, respectively
  const handleSelect = (ranges) => {
    // .selection comes from the selectionRange.key variable's property (spelling/capitalization matters!)
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => setSearchInput("");
  const searchHander = () => {
    // next.js also has a Link component as well (just in case)
    // we send the filtered search results via url so if the user shares the link url, they'll have the same search results (can't do that with redux)

    // returns a string from the Date object with the desired date format
    const formattedStartDate = format(startDate, "MM-dd-yyyy");
    const formattedEndDate = format(endDate, "MM-dd-yyyy");

    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        numberOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left div */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="/images/Airbnb_Logo.png"
          alt="logo"
          fill
          className="object-contain object-left"
        />
      </div>
      {/* middle div - Search */}
      <div className="flex items-center md:border-2 py-2 rounded-full md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder={placeholder || "Start Your Search"} // shows the query params as a placeholder when they're selected
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right div */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {/* date range picker under the header's search box */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            shownDate={new Date()} // initially no date range will be selected
            staticRanges={[]} // to customize the buttons that appear next to the calendar (i.e. The "Yesterday", "Today", etc. buttons). Show none of them.
            inputRanges={[]} // for the "days up to today" & "days starting today" input boxes
            minDate={new Date()}
            months={2} // shows 2 months next to each other
            direction="horizontal" // makes the months be horizontal (default was vertical)
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            startDatePlaceholder={"Start Date"}
            endDatePlaceholder={"End Date"}
          />
          {/* TODO: for the backend, validate that the user only selected either 1 or 2 guests (in case they change the max value in the browser) */}
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              <label htmlFor="guests">Number of Guests:</label>
            </h2>
            <div className="flex items-center flex-col">
              <div className="flex items-center">
                <UsersIcon className="h-5" />
                <input
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                  type="number"
                  min="1"
                  max="2"
                  id="guests"
                  name="guests"
                  className="w-12 pl-2 outline-none text-lg text-red-400"
                />
              </div>
              <p className="mt-2 text-xs text-red-600">Max of 2 guests</p>
            </div>
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={searchHander} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
