// import { SearchIcon } from "@heroicons/react/solid";
import useClickOutside from "@/hooks/useClickOutside";
import useEvent from "@/hooks/useEvent";
import { CalendarIcon, XIcon } from "@heroicons/react/outline";
import { UsersIcon } from "@heroicons/react/solid";
import { useCallback, useRef } from "react";
import { DateRangePicker } from "react-date-range";

const DateRange = ({
  isOpen,
  setIsOpen,
  handleSelect,
  selectionRange,
  dateRangeString,
  resetInput,
  numberOfGuests,
  setNumberOfGuests,
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

  return (
    <>
      <div className="flex flex-col items-center relative">
        <div className="mr-[155px] text-black font-medium">Choose Dates</div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
            // console.log("input was clicked")
          }}
          className="flex-grow md:border-2 py-2 pl-5 pr-[32px] md:shadow-sm cursor-pointer text-sm text-gray-600 bg-[#ebebeb] rounded-[3px] w-[260px]"
          ref={inputRef}
        >
          {dateRangeString}
          <CalendarIcon className="h-8 md:mx-2 p-2 bg-[#ebebeb] absolute top-[43%] right-[20%] text-black" />
        </div>
        {/* <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" /> */}
      </div>
      {isOpen && (
        <div
          // // to close the component when I click outside of it
          ref={componentRef}
          className="flex flex-col col-span-3 mx-auto absolute top-[25%] left-1/2 transform -translate-x-1/2 translate-y-[12%]"
        >
          <div className="flex items-center bg-white m-0">
            <button
              className="bg-transparent ml-auto mr-3 my-2 hover:bg-[#eff2f7] text-[#34495e] font-semibold hover:text-[#34495e] p-2 border border-[#34495e] rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="h-4 stroke-[2.5px]" />
            </button>
          </div>
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
          <div className="flex bg-white ">
            <button onClick={resetInput} className="ml-5 my-2 text-gray-500">
              Clear
            </button>
            <h2 className="flex items-center justify-end text-base text-black flex-grow font-semibold">
              <label htmlFor="guests">Number of Guests:</label>
            </h2>
            <div className="flex items-center flex-col mr-5">
              <div className="flex items-end">
                <UsersIcon className="h-6 text-black mx-2" />
                <input
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                  type="number"
                  min="1"
                  max="2"
                  id="guests"
                  name="guests"
                  style={{ boxShadow: "none" }}
                  // border-none
                  className="w-12 text-red-400"
                />
              </div>
              <p className="my-2 text-xs text-red-600">Max of 2 guests</p>
            </div>
          </div>
          {/* TODO: for the backend, validate that the user only selected either 1 or 2 guests (in case they change the max value in the browser) */}
          <div className="flex bg-white">
            <button
              onClick={() => {
                resetInput();
                setIsOpen(false);
              }}
              className="flex-grow text-gray-500 hover:bg-[#eff2f7] py-2 border-t-[1px] border-r-[1px] border-[#34495e]"
            >
              Cancel
            </button>
            {/* onClick={} */}
            <button className="flex-grow text-red-400 hover:bg-[#eff2f7] py-2 border-t-[1px] border-[#34495e]">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DateRange;
