// import { SearchIcon } from "@heroicons/react/solid";
import useClickOutside from "@/hooks/useClickOutside";
import useEvent from "@/hooks/useEvent";
import { CalendarIcon, XIcon } from "@heroicons/react/outline";
import { useCallback, useRef } from "react";
import { DateRangePicker } from "react-date-range";

const DateRange = ({
  startDateString,
  endDateString,
  isOpen,
  setIsOpen,
  handleSelect,
  selectionRange,
  searchInput,
setSearchInput
}) => {
  const inputRef = useRef();
  const componentRef = useRef();

  useClickOutside(inputRef, componentRef, setIsOpen);

  const keypressHandler = useCallback(
    ({ key }) => {
      // for the DateRangePicker keyboard control
      const ESCAPE_KEYS = ["27", "Escape"];

      // e = e || window.event;
      if (ESCAPE_KEYS.includes(String(key))) {
        setIsOpen(false);
        // console.log("Escape key pressed!");
      }
    },
    [setIsOpen]
  );

  useEvent("keydown", keypressHandler);

  // searchInput = `${startDateString} - ${endDateString}`;

  // todo: work on placing the selected date sets into the input box's value

  return (
    <>
      <div className="flex flex-col items-center relative">
        <label htmlFor="date-range-chosen" className="mr-[105px] text-black font-medium">
          Choose Dates
        </label>
        <div
          id="date-range-chosen"
          onChange={() => setSearchInput(searchInput)}
          onClick={() => {
            setIsOpen(!isOpen);
            // console.log("input was clicked")
          }}
          className="flex-grow pl-5 pr-[32px] cursor-pointer text-sm text-gray-600 bg-gray-100 rounded-[3px]"
          // style={{ backgroundColor: "#ebebeb" }}
          ref={inputRef}
        >{searchInput}</div>
        <CalendarIcon className="h-8 md:mx-2 p-2 absolute top-[43%] right-[27%] text-black" />
        {/* <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" /> */}
      </div>
      {/* <button className="bg-white text-black">button</button> */}
      {isOpen && (
        <div
          // // to close the component when I click outside of it
          ref={componentRef}
          className="flex flex-col col-span-3 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[10%]"
        >
          <div className="flex items-center bg-white m-0">
            {/* <h2 className="text-2xl flex-grow font-semibold">
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
                  style={{ boxShadow: "none" }}
                  className="w-12 pl-2 border-none text-lg text-red-400"
                />
              </div>
              <p className="mt-2 text-xs text-red-600">Max of 2 guests</p>
            </div> */}
            {/* p-2 */}
            {/* text-black cursor-pointer ml-auto  mr-2 hover:border-transparent zinc-900 */}
            <button
              className="bg-transparent ml-auto mr-2 my-2 hover:bg-[#eff2f7] text-[#34495e] font-semibold hover:text-[#34495e] p-2 border border-[#34495e] rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="h-4 stroke-[2.5px]" />
            </button>
          </div>
          {/* <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={searchHander} className="flex-grow text-red-400">
              Search
            </button>
          </div> */}

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
          {/* <div className="flex items-center border-b mb-4">
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
                  style={{ boxShadow: "none" }}
                  className="w-12 pl-2 border-none text-lg text-red-400"
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
          </div> */}
        </div>
      )}
    </>
  );
};

export default DateRange;
