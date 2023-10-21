// import { SearchIcon } from "@heroicons/react/solid";
import useClickOutside from "@/hooks/useClickOutside";
import { CalendarIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { DateRangePicker } from "react-date-range";

const DateRange = ({
  startDateString,
  setStartDateString,
  // endDateString,
  // setEndDateString,
  isOpen,
  setIsOpen,
  handleSelect,
  selectionRange,
}) => {
  const inputRef = useRef();
  const componentRef = useRef();
  useClickOutside(inputRef, componentRef, setIsOpen);
  return (
    <>
      <div className="flex flex-col items-center relative">
        <label htmlFor="date-range-chosen" className="mr-[105px] font-medium">
          Choose Dates
        </label>
        <input
          id="date-range-chosen"
          value={startDateString}
          onChange={(e) => setStartDateString(e.target.value)}
          onClick={() => setIsOpen(!isOpen)}
          type="text"
          className="flex-grow pl-5 pr-[32px] cursor-pointer text-sm text-gray-600 bg-gray-100 rounded-[3px]"
          // style={{ backgroundColor: "#ebebeb" }}
          ref={inputRef}
        />
        <CalendarIcon className="h-8 md:mx-2 p-2 absolute top-[43%] right-[27%]" />
        {/* <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" /> */}
      </div>
      {isOpen && (
        <div
          // // to close the component when I click outside of it
          ref={componentRef}
          className="flex flex-col col-span-3 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[10%]"
        >
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
