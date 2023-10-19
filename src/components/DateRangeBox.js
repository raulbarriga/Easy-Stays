// import { SearchIcon } from "@heroicons/react/solid";
import { CalendarIcon } from "@heroicons/react/outline";
const DateRangeBox = ({ startDateString, setStartDateString, isOpen, setIsOpen }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="font-medium mr-[105px]">Choose Dates</div>
        <label
          htmlFor="date-range-chosen"
          className="relative w-fit cursor-pointer"
        >
          <input
            id="date-range-chosen"
            value={startDateString}
            // onChange={(e) => setStartDateString(e.target.value)}
            onClick={() => setIsOpen(!isOpen)}
            type="text"
            className="flex-grow pl-5 pr-[32px] cursor-pointer text-sm text-gray-600 bg-gray-100 rounded-[3px]"
            // style={{ backgroundColor: "#ebebeb" }}
          />
          <CalendarIcon className="h-8 md:mx-2 p-2 absolute top-1/2 right-0 transform -translate-y-1/2" />
        </label>
        {/* <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" /> */}
      </div>
    </>
  );
};

export default DateRangeBox;
